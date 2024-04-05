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
    .then(async (arrayRoller) => {
        await arrayRoller.roll()
        return arrayRoller
    })
    .then(({ results }) => {
        return results[0]
    })
}

const mp3s = goThroughFilesAndFolders(app.vault.adapter.getBasePath()).filter(f => path.extname(f) == '.mp3')

const result = await getRandomMp3(mp3s)

dv.list([1,2,3])