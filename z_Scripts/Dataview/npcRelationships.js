// This object is the configuration for the script
// It is used to define the mermaid relationship string and style class for each relationship type
const relationshipMapping = {
    son: { string: '--Son -->', styleClass: 'family'},
    daughter: { string: '--Daughter -->', styleClass: 'family'},
    father: { string: '--Father -->', styleClass: 'family'},
    mother: { string: '--Mother -->', styleClass: 'family'},
    wife: { string: '--Wife ---', styleClass: 'family'},
    husband: { string: '--Husband ---', styleClass: 'family'},
    brother: { string: '--Brother ---', styleClass: 'family'},
    sister: { string: '--Sister ---', styleClass: 'family'},
    cousin: { string: '--Cousin ---', styleClass: 'family' },
    uncle: { string: '--Uncle -->', styleClass: 'family' },
    aunt: { string: '--Aunt -->', styleClass: 'family' },
    nephew: { string: '--Nephew ---', styleClass: 'family' },
    niece: { string: '--Niece ---', styleClass: 'family' }
}

const backticks = "```"

// This function iterates through the relationships of a page and their children
// and builds an array of unique keys to use for mermaid (A-Z) for each page and its relationships
// This results in an array of [ {name: 'NpcName1', key: 'A'}, {name: 'NpcName2', key: 'B'} ]
function buildRelationshipKeys(page, charIndex=0, keys=[]) {
  if (!keys.find(k => k.name === page.file.name)) {
    keys.push({name: page.file.name, key: String.fromCharCode(65 + charIndex)})
    charIndex++
  }

  const initialLength = keys.length

  keys = keys.concat(page.relationships?.map(r => {
    const name = r.split('|')[0],
    styleClass = relationshipMapping[r.split('|')[1].split(',')[0]].styleClass
    // Makes sure there isn't already a key for this NPC
    if (!keys.find(k => k.name === name)) {
      // 65 is unicode for A
      // 97 is unicode for a
      const key = String.fromCharCode(65 + charIndex)
      charIndex++

      return {
        name,
        key,
        class: styleClass
      }
    } else {
      return undefined
    }
  }).filter( Boolean ))

  // If new NPC keys were added iterate through their relationships
  if (initialLength !== keys.length) {

    keys = keys.concat(page.relationships.filter(r => r.name !== page.file.name).flatMap(r => {
      const relationshipPage = dv.page(r.split('|')[0])

      if (relationshipPage) {
        const results = buildRelationshipKeys(relationshipPage, charIndex, keys)
        charIndex = results[1]
  
        return results[0].filter(r => !keys.map(k => k.name).includes(r.name))
      } else {
        return []
      }
    }))

    return [keys, charIndex]
  } else {
    return [keys, charIndex]
  }
}

function getKey(name, keys) {
  return keys.find(k => k.name === name).key
}

// This function iterates through the relationships of a page and their children
// and builds an array of relationship strings to use for mermaid
// This results in an array of [ {from: 'NpcName1', to: 'NpcName2', string: 'A --Son --> B'} ]
function buildRelationshipArray(page, keys, relationships=[]) {
  const initialLength = relationships.length

  page.relationships?.forEach((r) => {
    const name = r.split('|')[0],
    type = r.split('|')[1].split(',')[0],
    conditional = r.split('|')[1].split(',')[1]
    
    if (!relationships.find(r => (r.from === page.file.name && r.to === name) || (r.to === page.file.name && r.from === name))) {
      relationships.push({
        from: page.file.name,
        to: name,
        string: `${getKey(page.file.name, keys)} ${conditional ? relationshipMapping[type].string.replace(/\s/, `, ${conditional} `) : relationshipMapping[type].string} ${getKey(name, keys)}
`
      })
    }
  })

  if (initialLength !== relationships.length) {
    page.relationships.forEach((r, i) => {
      const relationshipPage = dv.page(r.split('|')[0])

      if (relationshipPage) {
        relationships = buildRelationshipArray(relationshipPage, keys, relationships)
      }
    })

    return relationships
  } else {
    return relationships
  }
}

let keys = buildRelationshipKeys(input.current)[0]
// removes duplicates that may happen
keys = keys.filter((key, i) => keys.findIndex(k => k.name === key.name) === i)

const relationshipString = buildRelationshipArray(input.current, keys).map(i => i.string).join('')

// This creates the mermaid diagram
// It uses the keys array to create the nodes and the relationship array to create the relationships
// It also creates a classDef and class for each node to style
// Add more classDef and class if you need to style different types of relationships
dv.paragraph(
  `${backticks}mermaid
graph LR
${keys.map(k => `${k.key}["${k.name}"]${k.class ? `:::${k.class}` : ''}
`).join('')}

${relationshipString}

classDef family stroke:#0f0
class ${keys.map(r => r.key).join(',')} internal-link;
${backticks}
`)