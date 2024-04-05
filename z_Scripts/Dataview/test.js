const fs = require('fs')
const path = require('path')

const diceRollerPlugin = app.plugins.getPlugin('obsidian-dice-roller')

function goThroughFilesAndFolders(folderPath, filesList=[]) {
    const files = fs.readdirSync(folderPath)

    files.forEach(file => {
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(goThroughFilesAndFolders(filePath, filesList))
        } else {
            filesList.push(filePath)
        }
    });

    return filesList
}

async function getRandomMp3(list) {
    return diceRollerPlugin.getArrayRoller(list)
    .then(arrayRoller => {
        return arrayRoller.roll()
    })
    .then(({ results }) => {
        console.log('HERE', results)
        return results
    })
}

const mp3s = goThroughFilesAndFolders(app.vault.adapter.getBasePath()).filter(f => path.extname(f) == '.mp3')
console.log(mp3s)

const result = await getRandomMp3(mp3s)

console.log(result)

dv.span(result)