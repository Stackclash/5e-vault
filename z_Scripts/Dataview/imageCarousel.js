const images = input.current.images
const backticks = "```"
console.log('images',images)

if (Array.isArray(images) && images.length > 0) {
  console.log('images is array')
  dv.paragraph(`${backticks}carousel
  images: ${images.join(', ')}
  ${backticks}`)
} else if (typeof images === 'string' && images.trim() !== '') {
  dv.paragraph(`${backticks}carousel
  images: ${images}
  ${backticks}`)
}
