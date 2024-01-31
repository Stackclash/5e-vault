const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    const fullFolderPath = path.join(basePath, folderPath)
    const files = fs.readdirSync(fullFolderPath)

    files.forEach(file => {
        const filePath = path.resolve(fullFolderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            console.log(folderPath, filePath)
            filesList.concat(getAllFiles(basePath, path.join(folderPath, filePath), filesList))
        } else {
            console.log({name: path.basename(filePath), path: path.relative(basePath, filePath)})
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

const npcs = getAllFiles(__dirname, '4. World Almanac/NPCs')

console.log(npcs)