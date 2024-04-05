const fs = require('fs')
const path = require('path')

const diceRollerPlugin = app.plugins.getPlugin('obsidian-dice-roller')
const vaultPath = 'D:\\Projects\\Personal\\5e-vault'

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

const mp3s = goThroughFilesAndFolders(path.resolve(__dirname, '../../')).filter(f => path.extname(f) == '.mp3')
console.log(__dirname, mp3s)

const randomMp3 = await diceRollerPlugin.getArrayRoller(mp3s)
await randomMp3.roll()
const randomMp3Result = randomMp3.results


dv.span(`![[${randomMp3Result}]]`)