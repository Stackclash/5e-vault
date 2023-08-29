<%*
const path = require('path')
const fs = require('fs')
const dv = app.plugins.plugins.dataview.api

<!-- UPDATE THESE VALUES -->

<!-- Handle moving img folder over -->
<!-- Remove pipe escapes, instead just remove `|avg` from dice -->
const dryRun = false
const limit = 500
const vaultRootPath = 'D:\\Projects\\Personal\\5e-vault'
const newCompendiumLocation = '5. Mechanics'
const newLocations = {
    'compendium/books': '6. Resources/books',
    'compendium/adventures': '6. Resources/5e Modules'
}

let count = 0
let linkChanges = "# Updated Links\n\n| Old Link | New Link |\n"
linkChanges += "|------|----------|\n"
let fileMoves = "# File Moves\n\n| Old Path | New Path |\n"
fileMoves += "|------|----------|\n"

tp.file.rename('Importing 5eTools Data')

if(dryRun) {
    linkChanges += "| NO CHANGES HAVE BEEN MADE | NO CHANGES HAVE BEEN MADE |\n"
    fileMoves += "| NO CHANGES HAVE BEEN MADE | NO CHANGES HAVE BEEN MADE |\n"
}

function moveImgFolder(filePath) {
    const files = fs.readdirSync(path.join(vaultRootPath,filePath))

    files.forEach((file) => {
        const oldRelativeFilePath = path.join(filePath, file)
        const oldFilePath = path.join(vaultRootPath, oldRelativeFilePath)
        const oldPath = path.join(vaultRootPath, filePath)
        const newPath = path.join(vaultRootPath, getNewPath(filePath))
        const isDirectory = fs.statSync(oldFilePath).isDirectory()

        if ((oldFilePath.includes('img') || oldFilePath.includes('token')) && !isDirectory) {
            const newFilePath = path.join(vaultRootPath, getNewFilePath(oldRelativeFilePath))

            if (!dryRun) {
                if (!fs.existsSync(newPath)) fs.mkdirSync(newPath, {recursive: true})
                fs.renameSync(oldFilePath, newFilePath)
            }
        } else if (isDirectory) {
            moveImgFolder(oldRelativeFilePath)
        }
    })
}

function getNewFileName(fileName) {
    return fileName.replaceAll(/([\/\-])([a-z])/gi, (all, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : '/'+letter.toUpperCase()).replace(/\s(PHB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)/i, (all, source) => ' (' + source.toUpperCase() + ')').replace(/^(\w)/, (all, letter) => letter.toUpperCase()).replaceAll('%20', '\ ')
}

function getNewPath(path) {
    <!-- .replaceAll(/(\s+)/g, '\\$1') -->
    let pagePath = path

    for(const [key, value] of Object.entries(newLocations)) {
        pagePath = pagePath.replace(key, value)
    }
    pagePath = pagePath.replace('compendium', newCompendiumLocation)

    pagePath = pagePath.replaceAll('%20', '\ ').replace(/^(\w)/, (all, letter) => letter.toUpperCase())

    const newPath = pagePath.replaceAll(/([\\\/\-])([a-z])(?!mg)(?!oken)/gi, (all, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : '/'+letter.toUpperCase())

    return newPath
}

function getNewFilePath(oldPath) {
    const pageInfo = oldPath.match(/([\w\s\d\/\.\-%:\\\d]*?)([\w\s\d\-%\d\.]+)(\.\w+)$/)
    const filePath = pageInfo[1]
    const fileName = pageInfo[2]
    const extension = pageInfo[3]

    return path.join(getNewPath(filePath), (!['.png', '.jpg', '.jpeg'].includes(extension) ? `${getNewFileName(fileName)}${extension}` : `${fileName}${extension}`))
}

async function updateContent(page, content) {
    let matches = [...content.matchAll(/\[([\w\s\d,:'\.\(\)\-]*?)\]\(([\w\s\d\/\.\-%\d]+)(#{0,1}\^{0,1}[\-\w%]*)\s{0,1}"{0,1}([\w\d\s:&,'\.\(\)\-]*?)"{0,1}\)/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldLink = link[0]
            const displayText = link[1]
            const path = getNewFilePath(link[2])
            const section = link[3]
            const title = link[4]
            let newLink = ''

            if(!displayText && !title) {
                newLink = `[[${path}${section}]]`
            } else {
                newLink = title ? `[[${path}${section}|"${title}"]]` : `[[${path}${section}|${displayText}]]`
            }

            linkChanges += `| \`${oldLink}\` | \`${newLink.replace('|', '\\|')}\` |\n`
            content = content.replace(oldLink, newLink)
        })
    }

    matches = [...content.matchAll(/`dice: ([\dd+*/\s]+)\|(\w+)`/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldFunction = link[0]
            const diceRoll = link[1]
            const flag = link[2]
            const newFunction = `\`dice: ${diceRoll}\``
            content = content.replace(oldFunction, newFunction)
            linkChanges += `| ${oldFunction.replace('|', '\\|').replaceAll('`', '')} | ${newFunction.replaceAll('`', '')} |\n`
        })
    }
    
    if (!dryRun) await this.app.vault.modify(tp.file.find_tfile(page.file.path), content)
}

async function moveFile(page) {
    const oldFilePath = page.file.path
    const newFilePath = getNewFilePath(page.file.path)
    const newFolderPath = getNewPath(page.file.folder)
    isIndex = oldFilePath.includes(`${page.file.name}/${page.file.name}`)

    fileMoves += `| ${oldFilePath} | ${isIndex ? 'Created Index File' : newFilePath} |\n`
    if (!dryRun) {
        if (!fs.existsSync(newFolderPath)) fs.mkdirSync(path.join(vaultRootPath, newFolderPath), {recursive: true})
        if (isIndex) await this.app.vault.modify(tp.file.find_tfile(oldFilePath), `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${newFolderPath.replace(/\/$/, "")}" WHERE file.name != this.file.name\n\`\`\``)

        fs.renameSync(path.join(vaultRootPath, oldFilePath), path.join(vaultRootPath, newFilePath))
    }
}

async function processFile(page, newLocation) {
    if (count >= limit) return

    count++
    linkChanges += `| ${page.file.path} ||\n`

    let content = await dv.io.load(page.file.path)
    await updateContent(page, content)
    await moveFile(page)
}

let query = ''

for(const [key, value] of Object.entries(newLocations)) {
    query += ` AND !"${key}"`
    const pages = dv.pages(`"${key}"`)
    for (let x = 0; x < pages.length; x++) {
        await processFile(pages[x])
    }
}

const allOtherPages = dv.pages(`"compendium"${query}`)
for (let x = 0; x < allOtherPages.length; x++) {
    await processFile(allOtherPages[x])
}

moveImgFolder('compendium')

tR += linkChanges + "\n\n"
tR += fileMoves
%>