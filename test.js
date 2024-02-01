const fs = require('fs')
const path = require('path')

function getAllFiles(basePath, folderPath, filesList=[]) {
    const fullFolderPath = folderPath ? path.join(basePath, folderPath) : basePath
    const files = fs.readdirSync(fullFolderPath)

    files.forEach(file => {
        const filePath = path.resolve(fullFolderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(getAllFiles(basePath, path.relative(basePath, filePath), filesList))
        } else {
            filesList.push({name: path.basename(filePath), path: path.relative(basePath, filePath)})
        }
    });

    return filesList
}

const monsters = getAllFiles(__dirname, '5. Mechanics/Bestiary').filter(m => path.extname(m.path) === '.md')

monsters.forEach(m => {
    let content = fs.readFileSync(m.path).toString()

    const match = content.match('await dv.view("monsterHarvesterTable", {current: dv.current()})')

    console.log(m.name, match)
    process.exit(0)
})