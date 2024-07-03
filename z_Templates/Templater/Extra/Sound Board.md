<%*
const fs = require('fs')
const path = require('path')

const diceRollerPlugin = window.DiceRoller

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

let mp3s = goThroughFilesAndFolders(path.resolve(vaultPath, './z_Assets/Music'))
mp3s = mp3s.reduce((accum, value) => {
    const regex = /Music[\\\/]([a-zA-Z\s]+)[\\\/]*([a-zA-Z\s]*)[\\\/][a-zA-Z\s]+\.mp3$/g

    const [match, group, category] = regex.exec(value)

    const safeMatch = match.replaceAll('\\', '/')

    if (accum.hasOwnProperty(group)) {
        if (accum[group].hasOwnProperty(category)) {
            accum[group][category].push(safeMatch)
        } else {
            accum[group][category] = [safeMatch]
        }
    } else {
        accum[group] = { [category]: [safeMatch] }
    }

    return accum
}, {})

if (await tp.file.exists('1. DM Stuff/Sound Board.md')) {
    const currentTFile = tp.file.find_tfile('1. DM Stuff/Sound Board')
    await app.vault.delete(currentTFile)
}

await tp.file.move('1. DM Stuff/Sound Board')
-%>
```meta-bind-button
style: primary
label: Recreate Sound Board
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/Extra/Sound Board.md"
```
<%*
for (const group of Object.keys(mp3s)) {
    const groupData = mp3s[group]

    if (group !== '') {
-%>
## <% group %>
<%*
        for (const category of Object.keys(groupData)) {

            if (category !== '') {
                const categoryResult = await getRandomMp3(mp3s[group][category])
-%>
### <% category %>
![[<% categoryResult %>#loop]]
<%*
            } else {
                for (const mp3 of mp3s[group][category]) {
-%>
### <% path.parse(mp3).name %>
![[<% mp3 %>#loop]]
<%*
                }
            }

        }
    } else {
        for (const mp3 of groupData) {
-%>
![[<% mp3 %>#loop]]
<%*
        }
    }
}
-%>
