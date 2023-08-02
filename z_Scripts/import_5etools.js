const fs = require('fs')
const path = require('path')

const vaultPath = 'D:/Projects/Personal/5e-vault'

const dryRun = true
const limit = 20
const currentCompendiumPath = 'compendium'
const newCompendiumPath = '6. Mechanics'

const currentRulesPath = 'compendium/rules'
const newRulesPath = '6. Mechanics'

const currentBooksPath = 'compendium/books'
const newBooksPath = '5. World Almanac'

const currentAdventuresPath = 'compendium/adventures'
const newAdventuresPath = '5. World Almanac/5e Modules'

function getNewFilePath(pageName, path, section) {
    const newPath = getNewPath(path)
    const newFileName = getNewFileName(path)
    
    return section ? path.join(newPath,newFileName) : path.join(newPath,newFileName) + section
}

function getNewPath(path) {
    path = path.replace(currentCompendiumPath, newLocation)
    .replace(/(\s+)/g, '\\$1').replace('%20', '\ ')
    .replaceAll(/([-\/])([a-z])/g, (all, char, letter) => (char == '-' ? ' ' : '/') + letter.toUpperCase())
}

function getNewFileName(path) {
    const extension = path.match(/\.(\w+)$/)
    if (!extension) {
        extension = '.md'
    }
    
    if (!['png', 'jpg'].includes(extension)) {
        pageName = pageName.replace(/(\s+)/g, '\\$1').replace('%20', '\ ')
            .replaceAll(/([-\/])([a-z])/g, (all, char, letter) => (char == '-' ? ' ' : '/') + letter.toUpperCase())
            .replace(/\s(PHB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)\.md/i, (all, source) => ' (' + source.toUpperCase() + ').md')
    }
}

function getDisplayText(altText, title) {
    return title ? title : altText
}

async function updateContent(page, content) {
    let matches = [...content.matchAll(/\[([\w\s'&:\.\(\)]*?)\]\(([\w\/\.\-%\d]+)(#*[\w\s'&:\.\(\)]*)\s*?"*?([\w\s'&:\.\(\)]*?)"*?\)/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldLink = link[0]
            const displayText = getDisplayText(link[1], link[4])
            const path = getNewFilePath(page.file.name, link[2], link[3])
            const newLink = `[[${path}\\|${displayText}]]`

            linkChanges += `| \`${oldLink}\` | \`${newLink}\` |\n`
            content = content.replace(oldLink, newLink)
        })
    }

    matches = [...content.matchAll(/`dice: ([\dd+*/\s]+)\|(\w)`/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldFunction = link[0]
            const diceRoll = link[1]
            const adjustment = link[2]
            const newFunction = `\`dice: ${diceRoll}\\|${adjustment}\``
            content = content.replace(oldFunction, newFunction)
            linkChanges += `| ${oldFunction.replace('|', '\\|').replaceAll('`', '')} | ${newFunction.replaceAll('`', '')} |\n`
        })
    }
    
    if (!dryRun) await this.app.vault.modify(tp.file.find_tfile(page.file.path), content)
}

async function moveFile(page) {
    const filePath = page.file.path.match(/([\w\d\s\-\/]+)\/.*/)[1]

    const oldFullPath = page.file.path
    const newFilePath = getNewFilePath(page.file.name, filePath)
    isIndex = oldFullPath.includes(`${page.file.name}/${page.file.name}`) ? true : false

    fileMoves += `| ${oldFullPath} | ${isIndex ? 'Created Index File' : newFilePath} |\n`
    if (!dryRun) {
        if (!fs.existsSync(filePath)) await this.app.vault.createFolder(newFolderPath)
        await this.app.fileManager.renameFile(tp.file.find_tfile(oldFullPath), newFilePath)

        if (isIndex) this.app.vault.modify(tp.file.find_tfile(newFilePath), `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${newFolderPath.replace(/\/$/, "")}" WHERE file.name != this.file.name\n\`\`\``)
    }
}

async function processFile(page, newLocation) {
    if (count >= limit) return

    count++
    linkChanges += `| ${page.file.path} ||\n`

    let content = await dv.io.load(page.file.path)
    await updateContent(page, content)
    await moveFile(page, newLocation)
}

module.exports = function(tp, tR) {
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

    console.log(path.join(vaultPath, currentCompendiumPath))

    tR += linkChanges + "\n\n"
    tR += fileMoves
}