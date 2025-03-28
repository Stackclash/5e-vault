const images = input.current.images
const backticks = "```"
let carouselImageString = ''

if (Array.isArray(images)) {
  console.log('ARRAY')
  carouselImageString = images.join(', ')
} else {
  console.log('NOT ARRAY')
  carouselImageString = images
}
console.log(carouselImageString)

dv.paragraph(`${backticks}carousel
images: ${carouselImageString}
${backticks}`)