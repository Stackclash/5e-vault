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

let relationships = input.current.relationships
let relationshipGraph = `A[${input.current.file.name}]
`
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

    return keys.concat(page.relationships.flatMap(r => {
      const relationshipPage = dv.page(r.split('|')[0])
      console.log(page.file.name, relationshipPage.file.name, charIndex, keys)

      return buildRelationshipKeys(relationshipPage, charIndex, keys)
    }))
  } else {
    return keys
  }
}

function buildRelationshipArray(page, relationships=[]) {
  const initialRelationshipLength = relationships.length
  console.log("START", page, relationships)

  // 65 is unicode for A
  // 97 is unicode for a
  relationships.concat(page.relationships?.map((r) => {
    const name = r.split('|')[0],
    type = r.split('|')[1]
    
    if (!relationships.find(r => r.from === page.file.name && r.to === name)) {
      const char = String.fromCharCode(65 + charIndex)
      charIndex++
      console.log({
        from: page.file.name,
        to: name,
        type,
        key: char
      })
      
      return {
        from: page.file.name,
        to: name,
        type,
        key: char
      }
    } else {
      return undefined
    }
  }))

  if (initialRelationshipLength !== relationships.length) {
    return relationships.flatMap(r => buildRelationshipArray(dv.page(r.to), charIndex, relationships))
  } else {
    return relationships
  }
}

console.log("DONE", buildRelationshipKeys(input.current))


// relationships.forEach(r => {
//   if (relationshipMapping[r.type]) {
//     relationshipGraph += `A ${relationshipMapping[r.type]} ${r.key}[${r.name}]
// `
//   }
// })

// dv.paragraph(
//   `${backticks}mermaid
// graph LR
// ${relationshipGraph}

// class A,${relationships.map(r => r.key).join(',')} internal-link;
// ${backticks}
// `)