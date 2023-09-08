const fs = require('fs')
const path = require('path')

const config = {
    dryRun: false,
    limit: 1000,
    rootVaultPath: path.resolve(__dirname, '../'),
    compendiumPath: 'compendium',
    rules: [
        {
            enabled: true,
            target: 'relativePath',
            regex: /compendium[\\\/]adventures/,
            process: function() {
                return `6. Resources${path.sep}5e Modules`
            }
        },
        {
            enabled: true,
            target: 'relativePath',
            regex: /compendium[\\\/]books/,
            process: function() {
                return `6. Resources${path.sep}Books`
            }
        },
        {
            enabled: true,
            target: 'relativePath',
            regex: /compendium/,
            process: function() {
                return '5. Mechanics'
            }
        },
        {
            enabled: true,
            target: 'relativePath',
            regex: /([\/\\\-])([a-z])(?!mg)/,
            process: function(file, oldText, separator, letter) {
                return separator === '-' ? ' '+letter.toUpperCase() : separator+letter.toUpperCase()
            }
        },
        {
            enabled: true,
            target: 'fileName',
            regex: /([\/\\\-])([a-z])(?!mg)/,
            process: function(file, oldText, separator, letter) {
                let text = oldText
                if (!['.jpg', '.jpeg', '.png'].includes(file.fileExtension)) {
                    text = separator === '-' ? ' '+letter.toUpperCase() : separator+letter.toUpperCase()
                }
                return text
            }
        },
        {
            enabled: true,
            target: 'fileName',
            regex: /(HB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)/,
            process: function(file, oldText, source) {
                if (!['.jpg', '.jpeg', '.png'].includes(file.fileExtension)) {
                    source = '(' + source.toUpperCase() + ')'
                }
                return source
            }
        },
        {
            enabled: true,
            target: 'content',
            regex: /\[([\w\s\d,:'\.\(\)\-]*?)\]\(([\w\s\d\/\.\-%\d]+)(#*\^*[\-\w%]*)\s*"*([\w\d\s:&,'\.\(\)\-]*)"*\)/g,
            process: function(file, oldLink, displayText, linkPath, section, title) {
                let newLink = oldLink
                if (!['.jpg', '.jpeg', '.png'].includes(file.fileExtension)) {
                    linkPath = linkPath.replaceAll('%20', '\ ')
                        .replaceAll(/compendium\/adventures/g, () => '6. Resources/5e Modules')
                        .replaceAll(/compendium\/books/g, () => '6. Resources/Books')
                        .replaceAll(/compendium/g, () => '5. Mechanics')
                        .replace(/^(\w)/, (all, letter) => letter.toUpperCase())
                        .replaceAll(/([\/\-])([a-z])(?!mg)/gi, (all, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : '/'+letter.toUpperCase())
                        .replace(/(PHB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)/i, (all, source) => '(' + source.toUpperCase() + ')')
    
                    if(!displayText && !title) {
                        newLink = `[[${linkPath}${section}]]`
                    } else if (title) {
                        newLink = `[[${linkPath}${section}|"${title}"]]`
                    } else {
                        newLink = `[[${linkPath}${section}|${displayText}]]`
                    }
                }

                return newLink
            }
        },
        {
            enabled: false,
            process: function(file) {
                if (new RegExp(/(\w+)[\/\\]\1/).test(filePath)) {
                    file.content = `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${newFolderPath.replace(/\/$/, "")}" WHERE file.name != this.file.name\n\`\`\``
                }

                return file
            }
        }
    ]
}

class CompendiumFile {
    #oldContent
    #oldPath
    path
    content

    constructor(filePath) {
        this.#oldPath = filePath
        this.path = this.#oldPath
        this.#oldContent = fs.readFileSync(filePath, 'utf-8')
        this.content = this.#oldContent
        this.execute = () => {
            fs.mkdirSync(path.parse(this.path).dir, {recursive: true})
            fs.writeFileSync(this.path, this.content)
            fs.unlinkSync(this.#oldPath)
        }
    }

    get fileName() {
        return path.parse(this.path).name
    }

    set fileName(fileName) {
        this.path = path.join(path.parse(this.path).dir, `${fileName}${this.fileExtension}`)
    }

    get relativePath() {
        return path.parse(path.relative(config.rootVaultPath, this.path)).dir
    }

    set relativePath(relativePath) {
        this.path = path.join(config.rootVaultPath, relativePath, `${this.fileName}${this.fileExtension}`)
    }

    get fileExtension() {
        return path.extname(this.path)
    }
}

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
    files = files.slice(0, config.limit)
    files.forEach((file, index) => {
        console.log(`${index+1} Processing: ${file.fileName}`)
        config.rules.forEach(rule => {
            if (rule.enabled) {
                if (rule.regex) {
                    file[rule.target] = file[rule.target].replaceAll(new RegExp(rule.regex, 'gi'), (...match) => rule.process(file, ...match))
                } else {
                    file = rule.process(file)
                }
            }
        })
        console.log(`\tMoved To: ${file.path}`)
        if (!config.dryRun) file.execute()
    })
}

processAllRules(goThroughFilesAndFolders(path.resolve(config.rootVaultPath, config.compendiumPath)))