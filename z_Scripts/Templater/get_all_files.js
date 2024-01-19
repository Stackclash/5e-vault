const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    console.log(path.join(basePath, folderPath))
    const files = fs.readdirSync(path.join(basePath, folderPath))

    files.forEach(file => {
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(getAllFiles(path.join(folderPath, filePath), filesList))
        } else {
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

module.exports = getAllFiles