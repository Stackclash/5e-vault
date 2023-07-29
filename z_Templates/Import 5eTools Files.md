<%*
const dv = app.plugins.plugins.dataview.api

<!-- UPDATE THESE VALUES -->

<!-- Handle moving img folder over -->
const dryRun = false
const limit = 500
const currentCompendiumPath = 'compendium'
const newCompendiumPath = '6. Mechanics'
const currentRulesPath = 'compendium/rules'
const newRulesPath = '6. Mechanics'

const currentBooksPath = 'compendium/books'
const newBooksPath = '5. World Almanac'
const currentAdventuresPath = 'compendium/adventures'
const newAdventuresPath = '5. World Almanac/5e Modules'

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

async function updateContent(page, content) {
    let matches = [...content.matchAll(/\[([\w\s'\.\(\)]+?)\]\(([\w\/\.\-\#%\d]+)\)/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldLink = link[0]
            const displayText = link[1]
            const path = link[2].replace(/(\s+)/g, '\\$1').replace('%20', '\ ')
            const extra = link[3]
            const newLink = extra ? `[[${path}\\|${extra}]]` : `[[${path}\\|${displayText}]]`

            linkChanges += `| \`${oldLink}\` | \`${newLink}\` |\n`
            if (!dryRun) content = content.replace(oldLink, newLink)
        })
    }

    matches = [...content.matchAll(/`dice: ([\dd+*/\s]+)\|(\w+)`/g)]
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
    
    matches = [...content.matchAll(/\[([\w\s’\.\(\)]+?)\]\(([\w\s\/\.\-\#%\d]+)\s”([\w\d:&\s]+)”\)/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldLink = link[0]
            const displayText = link[1]
            const path = link[2].replace(/(\s+)/g, ‘\\$1’).replace(‘%20’, ‘\ ‘)
            const extra = link[3]
            const newLink = extra ? `[[${path}\\|${extra}]]` : `[[${path}\\|${displayText}]]`

            linkChanges += `| \`${oldLink}\` | \`${newLink}\` |\n`
            if (!dryRun) content = content.replace(oldLink, newLink)
        })
    }
    
    await this.app.vault.modify(tp.file.find_tfile(page.file.path), content)
}

async function moveFile(page, newLocation) {
    const oldFilePath = page.file.path
    const newFilePath = page.file.path.replace(currentCompendiumPath, newLocation).replace(/\/([a-z])/gi, (all, letter) => '/'+letter.toUpperCase()).replace(/-([a-z])/g, (all, letter) => ' '+letter.toUpperCase()).replace(/\s(PHB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)\.md/i, (all, source) => ' (' + source.toUpperCase() + ').md')
    const newFolderPath = newFilePath.replace(/(.*\/)(.+)/, '$1')
    isIndex = oldFilePath.includes(`${page.file.name}/${page.file.name}`) ? true : false

    fileMoves += `| ${oldFilePath} | ${isIndex ? 'Created Index File' : newFilePath} |\n`
    if (!dryRun) {
        if (!await tp.file.exists(newFolderPath)) await this.app.vault.createFolder(newFolderPath)
        await this.app.fileManager.renameFile(tp.file.find_tfile(oldFilePath), newFilePath)

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

const compendiumPages = dv.pages('"' + currentCompendiumPath + `" AND !"${currentRulesPath}" AND !"${currentAdventuresPath}" AND !"${currentBooksPath}"`)
const rulesPages = dv.pages('"' + currentRulesPath + '"')

const allPages = compendiumPages.concat(rulesPages)

console.log('Pages')
for (let x = 0; x < allPages.length; x++) {
    await processFile(allPages[x], newCompendiumPath)
}

console.log('Books')
const booksPages = dv.pages('"' + "compendium/books" + '"')
for (let x = 0; x < booksPages.length; x++) {
    await processFile(booksPages[x], newBooksPath)
}

console.log('Adventures')
const adventuresPages = dv.pages('"' + "compendium/adventures" + '"')
for (let x = 0; x < adventuresPages.length; x++) {
    await processFile(adventuresPages[x], newAdventuresPath)
}

tR += linkChanges + "\n\n"
tR += fileMoves
%>
