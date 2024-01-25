let relationships = input.current
const backticks = "```"

relationships = relationships.map((r, index) => ({...r, key: String.fromCharCode(65 + index)}))

console.log(relationships)

dv.paragraph(
  `${backticks}mermaid
graph LR
${relationships}
${backticks}
`)