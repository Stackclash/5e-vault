const images = input.current.images
const backticks = "```"

dv.paragraph(`${backticks}carousel
  images: ${images.join(', ')}
${backticks}`)