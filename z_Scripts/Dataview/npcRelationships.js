let relationships = input.current
const backticks = "```"

console.log(relationships)

dv.paragraph(
  `${backticks}mermaid
graph LR
${relationships}
${backticks} 
`)