try {
  const path = require('path')
  const fs = require('fs')
  const url = require('url')
  const https = require('https')
  
  async function request(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })
        res.on('end', () => {
          resolve(data)
        })
      }).on('error', (err) => {
        reject(err)
      })
    })
  }

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
  console.log(decodeURI(path.basename(url.parse(config[1].urls[0]).pathname)))
  
  config.forEach(item => {
    if (Array.isArray(item.urls)) {
      promises.push(Promise.all(item.urls.map(url => request(url))))
    } else {
      promises.push(request(item.urls))
    }
  })
  
  Promise.all(promises)
  .then(responses => {
    return responses.forEach((data, index) => {
      if (Array.isArray(data)) {
        fs.writeFileSync(path.join(/* app.vault.adapter.getBasePath() */__dirname, config[index].destination), data.join('\n\n'))
      } else {
        fs.writeFileSync(path.join(/* app.vault.adapter.getBasePath() */__dirname, config[index].destination), data)
      }
    })
  })
  .then(() => {
    console.log('External files downloaded successfully')
    // new Notice('External files downloaded successfully')
  })
  .catch((error) => {
    throw new Error(error.message)
  })
} catch (e) {
  console.log(e.message)
//   new Notice(`Error running downloadExternalFiles.js: ${e.message}`)
}