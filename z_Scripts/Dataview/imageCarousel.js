const images = input.current.images
const backticks = "```"

dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images.join(',')}
${backticks}`)