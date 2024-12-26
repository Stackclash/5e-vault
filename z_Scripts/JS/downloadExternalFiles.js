if (!path) {
  const path = require('path')
}
if (!fs) {
  const fs = require('fs')
}
if (!cssUrls) {
  const cssUrls = [
    {
      description: 'ttrpg-convert-cli Styles',
      urls: [
        'https://rawcdn.githack.com/ebullient/ttrpg-convert-cli/a19cbe604f67f472c9956d61410fcf5defe5c93a/examples/css-snippets/compendium-obsidian-0.15.css',
        'https://rawcdn.githack.com/ebullient/ttrpg-convert-cli/a19cbe604f67f472c9956d61410fcf5defe5c93a/examples/css-snippets/dnd5e-compendium.css',
      ]
    },
    {
      description: 'ITS Theme CSS Styles',
      urls: [
        'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/abb78a18f2bf71fc5b5e06f63f5724f53c534bc3/Snippets/S%20-%20Encoded%20Fonts.css',
        'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/abb78a18f2bf71fc5b5e06f63f5724f53c534bc3/Snippets/S%20-%20Encoded%20Icons.css'
      ]
    }
  ]
}
if (!promises) {
  let promises
}
promises = []

cssUrls.forEach(url => {
  promises.push(request(url))
})

Promise.all(promises)
.then(data => {
  console.log(data)
  const css = data.filter(data => data).join('\n')
  fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), '.obsidian/snippets/External CSS.css'), css)
})