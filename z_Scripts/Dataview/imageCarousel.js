const images = input.current.images
const backticks = "```"

if (images) {
  if (Array.isArray(images) && images.length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images.join(',')}
${backticks}`)
  } else if (typeof images === 'string' && images.trim().length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images}
${backticks}`)
  }
}