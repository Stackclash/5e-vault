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

function buildRelationshipArray(page, charIndex=0) {
  const relationships = []

  // 65 is unicode for A
  // 97 is unicode for a
  relationships = page.relationships?.map((r, i) => ({name: r.split('|')[0], type: r.split('|')[1], key: String.fromCharCode(65 + i + charIndex)}))

}


relationships.forEach(r => {
  if (relationshipMapping[r.type]) {
    relationshipGraph += `A ${relationshipMapping[r.type]} ${r.key}[${r.name}]
`
  }
})

dv.paragraph(
  `${backticks}mermaid
graph LR
${relationshipGraph}

class A,${relationships.map(r => r.key).join(',')} internal-link;
${backticks}
`)