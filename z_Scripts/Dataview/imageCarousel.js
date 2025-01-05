const images = input.current.images
const backticks = "```"
let carouselImageString = ''

if (Array.isArray(images)) {
  carouselImageString = images.join(', ')
} else {
  carouselImageString = images
}

dv.paragraph(`${backticks}carousel
images: ${carouselImageString}
${backticks}`)