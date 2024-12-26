try {
  const path = require('path')
  const fs = require('fs')
  const config = [
      {
        description: 'ttrpg-convert-cli Styles',
        destination: '.obsidian/snippets/ttrpg-convert-cli.css',
        urls: 'https://rawcdn.githack.com/ebullient/ttrpg-convert-cli/refs/heads/main/examples/css-snippets/dnd5e-compendium.css'
      },
      {
        description: 'ITS Theme CSS Styles',
        destination: '.obsidian/snippets/ITS-Theme.css',
        urls: [
          'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/refs/heads/main/Snippets/S%20-%20Encoded%20Fonts.css',
          'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/refs/heads/main/Snippets/S%20-%20Encoded%20Icons.css'
        ]
      },
      {
        description: 'Metabind Tabs',
        destination: '.obsidian/snippets/metabind-tabs.css',
        urls: 'https://rawcdn.githack.com/sailKiteV/Obsidian-Snippets-and-Demos/refs/heads/main/TabsInObsidian/TabsInObsidian.css'
      }
    ]
  
  let promises = []
  console.log('hello')
  
  config.forEach(config => {
    if (Array.isArray(config.urls)) {
      promises.push(Promise.all(config.urls.map(url => request(url))))
    } else {
      promises.push(request(url))
    }
  })
  
  Promise.all(promises)
  .then(responses => {
    responses.forEach((data, index) => {
      if (Array.isArray(data)) {
        fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), config[index].destination), data.join('\n\n'))
      } else {
        fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), config[index].destination), data)
      }
    })
    return
  })
  .then(() => {
    new Notice('External files downloaded successfully')
  })
  .catch((error) => {
    throw new Error(error.message)
  })
} catch (e) {
  new Notice(`Error running downloadExternalFiles.js: ${e.message}`)
}