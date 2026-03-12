const path = require('path')
const images = input.current.images
const backticks = "```"

if (images) {
  if (Array.isArray(images) && images.length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images.map(i => path.resolve(i)).join(',')}
${backticks}`)
  } else if (typeof images === 'string' && images.trim().length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${path.resolve(images)}
${backticks}`)
  }
}