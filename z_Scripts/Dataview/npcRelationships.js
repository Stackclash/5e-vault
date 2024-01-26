// recursive through relationships?
const relationshipMapping = {
    son: '--Son -->',
    daughter: '--Daughter -->',
    father: '--Father -->',
    mother: '--Mother -->',
    wife: '--Wife ---',
    husband: '--Husband ---',
    brother: '--Brother --o',
    sister: '--Sister --o'
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
  console.log('START', page.file.name, relationships)

  relationships = relationships.concat(page.relationships?.map((r) => {
    const name = r.split('|')[0],
    type = r.split('|')[1]
    
    if (!relationships.find(r => r.from === page.file.name && r.to === name)) {
      return {
        from: page.file.name,
        to: name,
        string: `${getKey(page.file.name, keys)} ${relationshipMapping[type]} ${getKey(name, keys)}
`
      }
    } else {
      return undefined
    }
  }).filter( Boolean ))

  if (initialLength !== relationships.length) {
    return relationships.flatMap(r => {
      const relationshipPage = dv.page(r.to)

      if (relationshipPage) {
        return buildRelationshipArray(relationshipPage, keys, relationships)
      } else {
        return []
      }
    })
  } else {
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