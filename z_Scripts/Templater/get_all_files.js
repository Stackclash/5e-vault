const fs = require('fs')
const path = require('path')

function getAllFiles(dv, folderPath, filesList=[]) {
    // const files = fs.readdirSync(folderPath)

    // files.forEach(file => {
    //     const filePath = path.resolve(folderPath, file)
    //     const fileInfo = fs.statSync(filePath)

    //     if (fileInfo.isDirectory()) {
    //         filesList.concat(goThroughFilesAndFolders(filePath, filesList))
    //     } else {
    //         filesList.push(path.basename(filePath))
    //     }
    // });

    // return filesList

    let pages = dv.pages(folderPath).map(p => ({name: p.file.name, path: p.file.path}))
    console.log(pages)

    return pages
}

module.exports = getAllFiles