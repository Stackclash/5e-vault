const path = require('path')
const images = input.current.images
const backticks = "```"
console.log('images', images.map(i => i.replaceAll('\\', '/')))

if (images) {
  if (Array.isArray(images) && images.length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${images.map(i => i.replaceAll('\\', '/')).join(',')}
${backticks}`)
  } else if (typeof images === 'string' && images.trim().length > 0) {
    dv.paragraph(`${backticks}carousel
height: 15rem
images: ${path.resolve(images).replaceAll('\\', '/')}
${backticks}`)
  }
}