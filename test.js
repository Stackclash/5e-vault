try {
  const path = require('path')
  const fs = require('fs')
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
        description: 'Custom CSS',
        destination: '.obsidian/snippets',
        urls: [
          'https://rawcdn.githack.com/ebullient/ttrpg-convert-cli/refs/heads/main/examples/css-snippets/dnd5e-compendium.css',
          'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/refs/heads/main/Snippets/S%20-%20Encoded%20Fonts.css',
          'https://rawcdn.githack.com/SlRvb/Obsidian--ITS-Theme/refs/heads/main/Snippets/S%20-%20Encoded%20Icons.css',
          'https://rawcdn.githack.com/sailKiteV/Obsidian-Snippets-and-Demos/refs/heads/main/TabsInObsidian/TabsInObsidian.css'
        ]
      },
      {
        description: 'ttrpg-convert-cli Homebrew',
        destination: 'z_Extra/ttrpg-convert/homebrew',
        urls: [
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Griffin%20Macaulay;%20The%20Griffon\'s%20Saddlebag,%20Book%201.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Griffin%20Macaulay;%20The%20Griffon\'s%20Saddlebag,%20Book%202.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Griffin%20Macaulay;%20The%20Griffon\'s%20Saddlebag,%20Book%203.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Griffin%20Macaulay;%20The%20Griffon\'s%20Saddlebag,%20Book%204.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Jasmine%20Yang;%20Hamund\'s%20Harvesting%20Handbook%20I.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Jasmine%20Yang;%20Hamund\'s%20Harvesting%20Handbook%20II.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Jasmine%20Yang;%20Hamund\'s%20Harvesting%20Handbook%20III.json',
        ]
      }
    ]
  
  let promises = []
  
  config.forEach(item => {
    promises.push(Promise.all(item.urls.map(url => request(url))))
  })
  
  Promise.all(promises)
  .then(responses => {
    return responses.forEach((data, index) => {
      data.forEach((item, i) => {
        fs.writeFileSync(path.join(/* app.vault.adapter.getBasePath() */__dirname, config[index].destination, decodeURI(path.basename(new URL(config[index].urls[i]).pathname))), item)
      })
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