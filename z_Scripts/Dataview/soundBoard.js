const fs = require('fs')
const path = require('path')

const diceRollerPlugin = app.plugins.getPlugin('obsidian-dice-roller')

const vaultPath = app.vault.adapter.getBasePath()

function goThroughFilesAndFolders(folderPath, filesList=[]) {
    const files = fs.readdirSync(folderPath)

    files.forEach(file => {
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(goThroughFilesAndFolders(filePath, filesList))
        } else {
            filesList.push(path.relative(vaultPath, filePath))
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

const mp3s = goThroughFilesAndFolders(path.resolve(vaultPath, './z_Assets/Music')).reduce((accum, value) => {
    const regex = /Music[\\\/]([a-zA-Z\s]+)[\\\/]*([a-zA-Z\s]*)[\\\/][a-zA-Z\s]+\.mp3$/g
    
    const [match, group, category] = regex.exec(value)
    console.log(accum, match, group, category)

    if (accum.hasOwnProperty(group)) {
        if (accum[group].hasOwnProperty(category)) {
            accum[group][category].push(match)
        } else {
            accum[group][category] = [match]
        }
    } else {
        accum[group] = { [category]: [match] }
    }

    return accum
}, {})

for (const group of Object.keys(mp3)) {
    const groupData = mp3[group]

    if (group !== '') {
    
        dv.header(2, group)
        for (const category of Object.keys(groupData)) {

        }
    } else {
        for (const mp3 of groupData) {
            dv.span(`![[${mp3}]]`)
        }
    }
}

const result = await getRandomMp3(mp3s)

dv.span(`![[${result}]]`)