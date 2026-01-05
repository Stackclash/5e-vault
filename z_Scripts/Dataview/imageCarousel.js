const images = input.current.images
const backticks = "```"

if (images) {
  if (Array.isArray(images)) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images.join(',')}
${backticks}`)
  } else if (typeof images === 'string') {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images}
${backticks}`)
  }
}