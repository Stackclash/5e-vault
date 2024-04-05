const fs = require('fs')
const path = require('path')

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

console.log(mp3s)