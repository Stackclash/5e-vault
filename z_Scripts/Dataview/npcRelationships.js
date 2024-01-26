// recursive through relationships?
const relationshipMapping = {
    son: { string: '--Son -->', style: 'stroke:#00f'},
    daughter: { string: '--Daughter -->', style: 'stroke:#00f'},
    father: { string: '--Father -->', style: 'stroke:#00f'},
    mother: { string: '--Mother -->', style: 'stroke:#00f'},
    wife: { string: '--Wife ---', style: 'stroke:#00f'},
    husband: { string: '--Husband ---', style: 'stroke:#00f'},
    brother: { string: '--Brother ---', style: 'stroke:#00f'},
    sister: { string: '--Sister ---', style: 'stroke:#00f'}
}

const backticks = "```"

function buildRelationshipKeys(page, charIndex=0, keys=[]) {
  if (!keys.find(k => k.name === page.file.name)) {
    keys.push({name: page.file.name, key: String.fromCharCode(65 + charIndex)})
    charIndex++
  }

  const initialLength = keys.length

  keys = keys.concat(page.relationships?.map(r => {
    const name = r.split('|')[0]
    if (!keys.find(k => k.name === name)) {
      // 65 is unicode for A
      // 97 is unicode for a
      const key = String.fromCharCode(65 + charIndex)
      charIndex++

      return {
        name,
        key
      }
    } else {
      return undefined
    }
  }).filter( Boolean ))

  if (initialLength !== keys.length) {

    keys = keys.concat(page.relationships.filter(r => r.name !== page.file.name).flatMap(r => {
      const relationshipPage = dv.page(r.split('|')[0])

      if (relationshipPage) {
        const results = buildRelationshipKeys(relationshipPage, charIndex, keys)
        charIndex = results[1]
  
        return results[0].filter(r => !keys.map(k => k.name).includes(r.name))
      } else {
        console.log(`ERROR: Could not find page for: ${r.split('|')[0]}`)
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

function buildRelationshipArray(page, keys, relationships=[]) {
  const initialLength = relationships.length
  console.log('START', page.file.name, page.relationships, relationships)

  page.relationships?.forEach((r) => {
    const name = r.split('|')[0],
    type = r.split('|')[1]
    
    if (!relationships.find(r => (r.from === page.file.name && r.to === name) || (r.to === page.file.name && r.from === name))) {
      console.log('ADDING', {
        from: page.file.name,
        to: name,
        string: `${getKey(page.file.name, keys)} ${relationshipMapping[type]} ${getKey(name, keys)}
`
      })
      relationships.push({
        from: page.file.name,
        to: name,
        string: `${getKey(page.file.name, keys)} ${relationshipMapping[type]} ${getKey(name, keys)}
`
      })
    }
  })

  if (initialLength !== relationships.length) {
    page.relationships.forEach((r, i) => {
      const relationshipPage = dv.page(r.split('|')[0])

      if (relationshipPage) {
        console.log(`CALLING ${page.file.name} ${i}`, relationships)
        relationships = buildRelationshipArray(relationshipPage, keys, relationships)
        console.log(`DONE ${page.file.name} ${i}`, relationships)
      }
    })

    console.log("ENDING - CALL", page.file.name, relationships)
    return relationships
  } else {
    console.log("ENDING", page.file.name, relationships)
    return relationships
  }
}

const keys = buildRelationshipKeys(input.current)[0]
const relationshipString = buildRelationshipArray(input.current, keys).map(i => i.string).join('')

console.log(`${backticks}mermaid
graph LR
${keys.map(k => `${k.key}[${k.name}]
`).join('')}

${relationshipString}

class ${keys.map(r => r.key).join(',')} internal-link;
${backticks}
`)

dv.paragraph(
  `${backticks}mermaid
graph LR
${keys.map(k => `${k.key}[${k.name}]
`).join('')}

${relationshipString}

class ${keys.map(r => r.key).join(',')} internal-link;
${backticks}
`)