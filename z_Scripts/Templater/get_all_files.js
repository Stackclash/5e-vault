const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    const fullFolderPath = path.join(basePath, folderPath)
    const files = fs.readdirSync(fullFolderPath)

    files.forEach(file => {
        const filePath = path.resolve(fullFolderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(getAllFiles(basePath, path.join(folderPath, filePath), filesList))
        } else {
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

module.exports = getAllFiles