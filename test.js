const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    const fullFolderPath = path.join(basePath, folderPath)
    const files = fs.readdirSync(fullFolderPath)

    files.forEach(file => {
        const filePath = path.resolve(fullFolderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (!fileInfo.isDirectory()) {
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

const npcs = getAllFiles(__dirname, '4. World Almanac/NPCs')

const content = fs.readFileSync(npcs[1].path)

console.log(npcs[1].name, content.toString(), content.toString().match(/"alignment": "([\w\s]+)"/))