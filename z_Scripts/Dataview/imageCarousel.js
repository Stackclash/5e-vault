const path = require('path')
const vaultPath = app.vault.adapter.getBasePath()
const images = input.current.images
const backticks = "```"

function getImageFullPath(imagePath) {
  return path.posix.join(vaultPath, imagePath)
}

if (Array.isArray(images) && images.length > 0) {
  dv.paragraph(`${backticks}carousel
  images: ${images.map(getImageFullPath).join(', ')}
  ${backticks}`)
  console.log(`${backticks}carousel
  images: ${images.map(getImageFullPath).join(', ')}
  ${backticks}`)
} else if (typeof images === 'string' && images.trim() !== '') {
  dv.paragraph(`${backticks}carousel
  images: ${getImageFullPath(images)}
  ${backticks}`)
}
