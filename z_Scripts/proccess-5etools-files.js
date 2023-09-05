const fs = require('fs')
const path = require('path')

const config = {
    dryRun: true,
    limit: 100,
    rootVaultPath: path.resolve(__dirname, '../'),
    compendiumPath: 'compendium',
    rules: [
        {
            enabled: true,
            target: 'path',
            regex: 'compendium/adventures',
            replace: '6. Resources/5e Modules'
        },
        {
            enabled: true,
            target: 'path',
            regex: 'compendium/books',
            replace: '6. Resources/Books'
        },
        {
            enabled: true,
            target: 'path',
            regex: 'compendium',
            replace: '5. Mechanics'
        },
        {
            enabled: true,
            target: 'content',
            regex: /\[([\w\s\d,:'\.\(\)\-]*?)\]\(([\w\s\d\/\.\-%\d]+)(#*\^*[\-\w%]*)\s*"*([\w\d\s:&,'\.\(\)\-]*)"*\)/g,
            replace: function(filePath, oldLink, displayText, linkPath, section, title) {
                let newLink = ''
                linkPath = linkPath.replaceAll('%20', '\ ')
                    .replace(/^(\w)/, (all, letter) => letter.toUpperCase())
                    .replaceAll(/([\/\-])([a-z])(?!mg)/gi, (all, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : '/'+letter.toUpperCase())

                if(!displayText && !title) {
                    newLink = `[[${linkPath}${section}]]`
                } else if (title) {
                    newLink = `[[${linkPath}${section}|"${title}"]]`
                } else {
                    newLink = `[[${linkPath}${section}|${displayText}]]`
                }

                return newLink
            }
        },
        {
            enabled: true,
            regex: /.*/g,
            replace: function(filePath, oldContent) {
                const fileName = path.parse(filePath).name

                if (new RegExp(`${fileName}[\/\\]${fileName}`).test(filePath)) {
                    return `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${newFolderPath.replace(/\/$/, "")}" WHERE file.name != this.file.name\n\`\`\``
                } else {
                    return oldContent
                }
            }
        }
    ]
}

class CompendiumFile {
    constructor(filePath) {
        this._oldPath = filePath
        this._newPath = filePath
        this._oldContent = fs.readFileSync(filePath, 'utf-8')
        this._newContent = fs.readFileSync(filePath, 'utf-8')
    }

    get oldAbsolutePath() {
        return this._oldPath
    }

    get newAbsolutePath() {
        return this._newPath
    }

    get oldRelativePath() {
        return path.relative(rootVaultPath, this._oldPath)
    }

    get newRelativePath() {
        return path.relative(rootVaultPath, this._newPath)
    }

    get oldFileName() {
        return path.parse(this._oldPath).name
    }

    get newFileName() {
        return path.parse(this._newPath).name
    }

    get fileExtension() {
        return path.extname(this._oldPath)
    }

    get oldContent() {
        return this._oldContent
    }

    get newContent() {
        return this._newContent
    }

    set fileName(fileName) {
        this._newPath = path.join(path.parse(this._newPath).dir, `${fileName}${this.fileExtension}`)
    }

    set path(filePath) {
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(filePath)
        }

        this._newPath = path.join(filePath, `${this.newFileName}${this.fileExtension}`)
    }
}

let count = 0

function goThroughFilesAndFolders(folderPath, filesList=[]) {
    const files = fs.readdirSync(folderPath)

    files.forEach(file => {
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            filesList.concat(goThroughFilesAndFolders(filePath, filesList))
        } else {
            filesList.push(new CompendiumFile(filePath))
        }
    });

    return filesList
}

function processAllRules(files) {
    files.forEach(file => {
        if (count >= config.limit) return
        console.log(`${count} Processing: ${file}`)
        // config.rules.forEach(rule => {
        //     if (rule.enabled) {

        //     }
        // })
        console.log(file)
        file.path = path.resolve('../compendium')
        console.log(file)
        process.exit(0)
        if (!dryRun) file.process()
        count++
    })
}

processAllRules(goThroughFilesAndFolders(path.resolve(config.rootVaultPath, config.compendiumPath)))