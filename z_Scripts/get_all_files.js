const fs = require('fs')
const path = require('path')

function getAllFiles(folderPath, filesList=[]) {
    const files = fs.readdirSync(folderPath)

    files.forEach(file => {
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(getAllFiles(filePath, filesList))
        } else {
            filesList.push(path.basename(filePath))
        }
    });

    return filesList
}

module.exports = getAllFiles