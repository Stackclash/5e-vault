const fs = require('fs')
const path = require('path')

// Create reliable logging

const config = {
    dryRun: false,
    limit: 7000,
    rootVaultPath: path.resolve(__dirname, '../'),
    compendiumPath: 'compendium',
    rules: [
        {
            enabled: true,
            name: 'Update File Path',
            target: 'relativePath',
            process: function(file) {
                let newRelativePath = file.relativePath

                newRelativePath = newRelativePath
                    .replace(/compendium([\\\/])adventures/, (oldText, separator) => `6. Resources${separator}5e Modules`)
                    .replace(/compendium([\\\/])books/, (oldText, separator) => `6. Resources${separator}Books`)
                    .replace(/compendium/, () => '5. Mechanics')
                    .replaceAll(/([\/\\\-])([a-z])(?!mg|oken)/g, (oldText, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : separator+letter.toUpperCase())
                
                return newRelativePath
            }
        },
        {
            enabled: true,
            name: 'Update File Name',
            ignore: function(file) {
                return ['.jpg', '.jpeg', '.png'].includes(file.fileExtension)
            },
            target: 'fileName',
            process: function(file) {
                let newFileName = file.fileName

                newFileName = newFileName
                    .replaceAll(/(^|[\/\\\-])([a-z])(?!mg[\/\\]|oken[\/\\])/g, (oldText, separator, letter) => separator === '-' ? ' '+letter.toUpperCase() : separator+letter.toUpperCase())
                    .replace(/(HB|DMG|MM|VRGR|XGE|VGM|TCE|MPMM|MTF|CoS)$/i, (oldText, source) => '(' + source.toUpperCase() + ')')
                
                return newFileName
            }
        },
        {
            enabled: true,
            name: 'Update Content Links',
            ignore: function(file) {
                return ['.jpg', '.jpeg', '.png'].includes(file.fileExtension)
            },
            target: 'content',
            regex: /\[([\w\s\d,:'\.\(\)\-]*?)\]\(([\w\s\d\/\.\-%\d]+)(#{0,1}\^{0,1}[\-\w%]*)\s{0,1}"{0,1}([\w\d\s:&,'\.\(\)\-]*?)"{0,1}\)/g,
            process: function(file, oldLink, displayText, linkPath, section, title) {
                let filePath = path.parse(linkPath).dir
                let fileName = path.parse(linkPath).name
                let separator = filePath.match(/[\/\\]/)
                let linkPipe = /bestiary/i.test(file.path) ? '|' : '\\|'

                let filePathRule = config.rules.filter(rule => rule.name === 'Update File Path')[0]
                let fileNameRule = config.rules.filter(rule => rule.name === 'Update File Name')[0]

                filePath = filePathRule.process({relativePath: filePath})
                fileName = fileNameRule.ignore({fileExtension: path.parse(linkPath).ext}) ? fileName : fileNameRule.process({fileName: fileName})

                linkPath = `${filePath ? filePath+separator : ''}${fileName}${path.parse(linkPath).ext}`

                if(!displayText && !title) {
                    newLink = `[[${linkPath}${section}]]`
                } else if (title) {
                    newLink = `[[${linkPath}${section}${linkPipe}"${title}"]]`
                } else {
                    newLink = `[[${linkPath}${section}${linkPipe}${displayText}]]`
                }

                return newLink
            }
        },
        {
            enabled: true,
            name: 'Create Folder Index Page',
            ignore: function(file) {
                return ['.jpg', '.jpeg', '.png'].includes(file.fileExtension)
            },
            target: 'content',
            process: function(file) {
                let fileContent = file.content
                let separator = file.path.match(/[\/\\]/)

                if (new RegExp(/([\w\s]+)[\/\\]\1/).test(`${file.relativePath}${separator}${file.fileName}`)) {
                    fileContent = `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${file.relativePath.replace(/\/$/, "")}" WHERE file.name != this.file.name\n\`\`\``
                }

                return fileContent
            }
        },
        {
            enabled: true,
            name: 'Update Token Path for Bestiary',
            ignore: function(file) {
                return !/bestiary/i.test(file.path) || ['.jpg', '.jpeg', '.png'].includes(file.fileExtension)
            },
            target: 'content',
            regex: /"image": "([\w\/]+)(\/[img|token]+\/[\w]+\.[\w]+)"/g,
            process: function(file, oldText, imagePath, restOfPath) {
                let filePathRule = config.rules.filter(rule => rule.name === 'Update File Path')[0]

                imagePath = filePathRule.process({relativePath: imagePath})

                return `"image": "${imagePath}${restOfPath}"`
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
        this.#oldContent = !['.jpg', '.jpeg', '.png'].includes(path.parse(filePath).ext) ? fs.readFileSync(filePath, 'utf-8') : fs.readFileSync(filePath)
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
    let updateText = ''
    files = files.slice(0, config.limit)
    files.forEach((file, index) => {
        console.log(`${index+1} Processing: ${file.relativePath}${path.sep}${file.fileName}${file.fileExtension}`)
        config.rules.forEach(rule => {
            if (rule.enabled && !(rule.ignore && rule.ignore(file))) {
                console.log(`\tRunning: ${rule.name}`)
                if (rule.regex) {
                    file[rule.target] = file[rule.target].replaceAll(new RegExp(rule.regex, 'gi'), (...match) => rule.process(file, ...match))
                } else {
                    file[rule.target] = rule.process(file)
                }
            }
        })
        console.log(`\tMoved To: ${file.relativePath}${path.sep}${file.fileName}${file.fileExtension}`)
        if (!config.dryRun) file.execute()
    })
}

processAllRules(goThroughFilesAndFolders(path.resolve(config.rootVaultPath, config.compendiumPath)))