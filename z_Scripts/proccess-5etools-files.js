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
            regex: 'compendium[\\\/]adventures',
            process: function(file) {
                return '6. Resources/5e Modules'
            }
        },
        {
            enabled: true,
            target: 'path',
            regex: 'compendium[\\\/]books',
            process: function() {
                return '6. Resources/Books'
            }
        },
        {
            enabled: true,
            target: 'path',
            regex: 'compendium',
            process: function() {
                return '5. Mechanics'
            }
        },
        {
            enabled: true,
            target: 'content',
            regex: /\[([\w\s\d,:'\.\(\)\-]*?)\]\(([\w\s\d\/\.\-%\d]+)(#*\^*[\-\w%]*)\s*"*([\w\d\s:&,'\.\(\)\-]*)"*\)/g,
            process: function(file, oldLink, displayText, linkPath, section, title) {
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
            target: 'path',
            process: function(filePath, oldContent) {
                const fileName = path.parse(filePath).name

                if (new RegExp(/(\w+)[\/\\]\1/).test(filePath)) {
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
        this.path = filePath
        this.content = fs.readFileSync(filePath, 'utf-8')
        this.execute = () => {
            fs.mkdirSync(path.parse(this._newPath).dir, {recursive: true})
            fs.writeFileSync(this._newPath, this._newContent)
        }
    }

    get fileName() {
        return path.parse(this.path).name
    }

    get relativePath() {
        return path.relative(rootVaultPath, this.path)
    }

    get fileExtension() {
        return path.extname(this.path)
    }

    set path(filePath) {
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(filePath)
        }

        return path.join(filePath, `${this.fileName()}${this.fileExtension()}`)
    }
}

let count = 0

function goThroughFilesAndFolders(folderPath, filesList=[]) {
    const files = fs.readdirSync(folderPath)

    files.forEach(file => {
        try {
            const filePath = path.resolve(folderPath, file)
            const fileInfo = fs.statSync(filePath)
    
            if (fileInfo.isDirectory()) {
                filesList.concat(goThroughFilesAndFolders(filePath, filesList))
            } else {
                filesList.push(new CompendiumFile(filePath))
            }
        } catch(error) {
            console.log(file, error.stack)
        }
    });

    return filesList
}

function processAllRules(files) {
    console.log(files.length)
    files = files.slice(0, config.limit)
    files.forEach(file => {
        console.log(`${count} Processing: ${file.fileName}`)
        config.rules.forEach(rule => {
            console.log(rule.target, file[rule.target], file.path, file)
            process.exit(0)
            if (rule.enabled) {
                if (rule.regex) {
                    file[rule.target] = file[rule.target].replaceAll(rule.regex, (...match) => rule.process(file, ...match))
                } else {
                    file[rule.target] = rule.process(file, file[rule.target])
                }
            }
        })
        if (!dryRun) file.process()
    })
}

processAllRules(goThroughFilesAndFolders(path.resolve(config.rootVaultPath, config.compendiumPath)))