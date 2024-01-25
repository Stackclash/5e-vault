// recursive through relationships?
const relationshipMapping = {
    son: '--Son -->',
    daughter: '--Daughter -->',
    father: '--Father -->',
    mother: '--Mother -->',
    wife: '--Wife --',
    husband: '--Husband --'
}

let relationships = input.current.relationships
let relationshipGraph = `A[${input.current.file.name}]
`
const backticks = "```"

// 65 is unicode for A
// 97 is unicode for a
relationships = relationships.map((r, index) => ({name: r.split('|')[0], type: r.split('|')[1], key: String.fromCharCode(65 + index+1)}))

relationships.forEach(r => {
    relationshipGraph += `A ${relationshipMapping[r.type]} ${r.key}[${r.name}]
`
})

dv.paragraph(
  `${backticks}mermaid
graph LR
${relationshipGraph}

class A,${relationships.map(r => r.key).join(',')} internal-link;
${backticks}
`)