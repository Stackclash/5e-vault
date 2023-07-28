<%*
const dv = app.plugins.plugins.dataview.api

<!-- UPDATE THESE VALUES -->

<!-- Handle moving img folder over -->
<!-- Handle renaming files -->
const dryRun = false
const limit = 500
const currentCompendiumPath = 'compendium'
const newCompendiumPath = '6. Mechanics'
const currentRulesPath = 'compendium/rules'
const newRulesPath = '6. Mechanics'

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
    let matches = [...content.matchAll(/\[([\w\s'\.]+?)\]\(([\w\s\/\.\-\#%]+)\s*?(.*?)\)/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldLink = link[0]
            const displayText = link[1]
            const path = link[2].replace(/(\s+)/g, '\\$1')
            const extra = link[3]
            const newLink = extra ? `[[${path}\|${extra}]]` : `[[${path}\|${displayText}]]`

            linkChanges += `| \`${oldLink}\` | \`${newLink.replace('|','\\|')}\` |\n`
            if (!dryRun) content = content.replace(oldLink, newLink)
        })
    }

    matches = [...content.matchAll(/`dice: ([\dd+*/\s]+)\|(\w+)`/g)]
    if (matches.length > 0) {

        matches.forEach((link) => {
            const oldFunction = link[0]
            const diceRoll = link[1]
            const adjustment = link[2]
            const newFunction = `\`${diceRoll}\|${adjustment}\``
            content = content.replace(oldFunction, newFunction)
            linkChanges += `| \`${oldFunction}\` | \`${newFunction}\` |`
        })
    }
    await this.app.vault.modify(tp.file.find_tfile(page.file.path), content)
}

async function moveFile(page) {
    const oldFilePath = page.file.path
    const newFilePath = page.file.path.replace(currentCompendiumPath, newCompendiumPath)
    const newFolderPath = newFilePath.replace(/(.*\/)(.+)/, '$1')

    fileMoves += `| ${oldFilePath} | ${newFilePath} |\n`
    if (!dryRun) {
        if (!await tp.file.exists(newFolderPath)) await this.app.vault.createFolder(newFolderPath)
        await this.app.fileManager.renameFile(tp.file.find_tfile(oldFilePath), newFilePath)
    }
}

async function processFile(page) {
    if (count >= limit) return

    count++
    linkChanges += `| ${page.file.path} ||`

    let content = await dv.io.load(page.file.path)
    await updateContent(page, content)
    await moveFile(page)
}

const compendiumPages = dv.pages('"' + currentCompendiumPath + '" AND !"compendium/rules" AND !"compendium/adventures" AND !"compendium/books" AND !"compendium/rules"')
const rulesPages = dv.pages('"' + currentRulesPath + '"')

const allPages = compendiumPages.concat(rulesPages)

for (let x = 0; x < allPages.length; x++) {
    await processFile(allPages[x])
}

tR += linkChanges + "\n\n"
tR += fileMoves
%>
