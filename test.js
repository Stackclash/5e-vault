const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    const fullFolderPath = folderPath ? path.join(basePath, folderPath) : basePath
    const files = fs.readdirSync(fullFolderPath)

    files.forEach(file => {
        const filePath = path.resolve(fullFolderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            console.log(folderPath)
            filesList.concat(getAllFiles(filePath, null, filesList))
        } else {
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

const monsters = getAllFiles(__dirname, '5. Mechanics/Bestiary')

console.log(monsters)