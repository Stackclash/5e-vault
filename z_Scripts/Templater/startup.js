function startup() {
  try {
    const path = require('path')
    const fs = require('fs')

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
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Jasmine%20Yang;%20Hamund\'s%20Herbalism%20Handbook.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/book/Justice%20Arman;%20Devil\'s%20Advocate%20A%20Guide%20to%20Infernal%20Contracts.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/Kobold%20Press;%20Deep%20Magic.json',
          'https://rawcdn.githack.com/TheGiddyLimit/homebrew/refs/heads/master/collection/MCDM%20Productions;%20Strongholds%20and%20Followers.json'
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
            fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), config[index].destination, decodeURI(path.basename(new URL(config[index].urls[i]).pathname))), item)
          })
        })
      })
      .then(() => {
        console.log('External files downloaded successfully')
        new tp.obsidian.Notice('External files downloaded successfully')
      })
      .catch((error) => {
        throw new Error(error.message)
      })
  } catch (e) {
    console.error(`Error running Template Startup: ${e.message}`)
    new tp.obsidian.Notice(`Error running Template Startup: ${e.message}`)
  }
}

module.exports = startup