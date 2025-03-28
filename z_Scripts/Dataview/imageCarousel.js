const images = input.current.images
const backticks = "```"
let carouselImageString = ''

if (Array.isArray(images)) {
  carouselImageString = images.join(', ')
} else {
  carouselImageString = images
}

if (carouselImageString.length > 0) {
  dv.paragraph(`${backticks}carousel
  images: ${carouselImageString}
  ${backticks}`)
}