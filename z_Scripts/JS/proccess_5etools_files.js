const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const readlineSync = require('readline-sync')
const ttrpgConvertConfig = require('../../z_Extra/ttrpg-convert/config.json')

// Create reliable logging

const config = {
    limit: 1,
    rootVaultPath: path.resolve(__dirname, '../../'),
    compendiumPath: 'compendium',
    logs: {
        moves: true,
        rules: true
    },
    rules: [
        {
            enabled: true,
            name: 'Update File Path',
            target: 'relativePath',
            process: function (file) {
                let newRelativePath = file.relativePath

                newRelativePath = newRelativePath
                    .replace(/compendium([\\\/])bestiary([\\\/])npc/, (oldText, separator) => `4. World Almanac${separator}NPCs`)
                    .replace(/compendium([\\\/])adventures/, (oldText, separator) => `6. Resources${separator}5e Modules`)
                    .replace(/compendium([\\\/])books/, (oldText, separator) => `6. Resources${separator}Books`)
                    .replace(/compendium/, () => '5. Mechanics')
                    .replaceAll(/([\/\\\-])([a-z])(?!mg|oken)/g, (oldText, separator, letter) => separator === '-' ? ' ' + letter.toUpperCase() : separator + letter.toUpperCase())

                return newRelativePath
            }
        },
        {
            enabled: true,
            name: 'Update File Name',
            ignore: function (file) {
                return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'fileName',
            process: function (file) {
                let newFileName = file.fileName

                newFileName = newFileName
                    .replaceAll(/(^|[\/\\\-])([a-z0-9])(?!mg[\/\\]|oken[\/\\])/g, (oldText, separator, letter) => separator === '-' ? ' ' + letter.toUpperCase() : separator + letter.toUpperCase())
                    .replace(new RegExp(`/\s*(${sourceKeys.join('|')})$/i`), '')

                return newFileName
            }
        },
        {
            enabled: true,
            name: 'Update Content Links',
            ignore: function (file) {
                return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'content',
            regex: /\[([A-zÀ-ú\w\s\d,:;'\.\(\)-\/]*?)\]\(([\w\s\d\/\\\.\-%\d]+)(#{0,1}\^{0,1}[\-\w%]*)\s{0,1}"{0,1}([A-zÀ-ú\w\d\s:&,'\.\(\)\-]*?)"{0,1}\)/g,
            process: function (file, oldLink, displayText, linkPath, section, title) {
                let filePath = path.parse(linkPath).dir
                let fileName = path.parse(linkPath).name
                let separator = filePath.match(/[\/\\]/)
                let linkPipe = /bestiary|npc/i.test(file.path) ? '|' : '\\|' // Prevents breaking statblocks

                let filePathRule = config.rules.find(rule => rule.name === 'Update File Path')
                let fileNameRule = config.rules.find(rule => rule.name === 'Update File Name')

                filePath = filePathRule.process({ relativePath: filePath })
                fileName = fileNameRule.ignore({ fileExtension: path.parse(linkPath).ext }) ? fileName : fileNameRule.process({ fileName: fileName, path: filePath })

                linkPath = `${filePath ? filePath + separator : ''}${fileName}${path.parse(linkPath).ext}`

                if (!displayText && !title) {
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
            ignore: function (file) {
                return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'content',
            process: function (file) {
                let fileContent = file.content
                let separator = file.path.match(/[\/\\]/)

                if (new RegExp(/([\w\s]+)[\/\\]\1/).test(`${file.relativePath}${separator}${file.fileName}`)) {
                    fileContent = `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${file.relativePath.replace(/[\/\\]$/, "").replaceAll(/\\/g, "/")}" WHERE file.name != this.file.name\n\`\`\``
                }

                return fileContent
            }
        },
        {
            enabled: true,
            name: 'Update Image/Token Path for Bestiary and NPCs',
            ignore: function (file) {
                return !/bestiary|npc/i.test(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'content',
            regex: /"*image"*: "*([\w\/]+)(\/[img|token]+\/[\w-]+\.[\w]+)"*/g,
            process: function (file, oldText, imagePath, restOfPath) {
                let filePathRule = config.rules.filter(rule => rule.name === 'Update File Path')[0]

                imagePath = filePathRule.process({ relativePath: imagePath })

                if (/"/.test(oldText)) {
                    return `"image": "${imagePath}${restOfPath}"`
                } else {
                    return `image: ${imagePath}${restOfPath}`
                }
            }
        },
        {
            enabled: true,
            name: 'Update NPC/Bestiary statblock name',
            ignore: function (file) {
                return !/npc|bestiary/i.test(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'content',
            regex: /^"name": "[\w\s'\(\)-]+"/gm,
            process: function (file, oldText) {
                return `"name": "${file.fileName}"`
            }
        },
        {
            enabled: true,
            name: 'Update Frontmatter based on existing file',
            ignore: function (file) {
                return !fs.existsSync(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
            },
            target: 'frontMatter',
            process: function (file) {
                const askQuestion = function (question) {
                    const answer = readlineSync.question(question)
                    return answer.toLowerCase() === 'y'
                }

                const finalFrontMatter = {},
                    currentFileFrontMatter = matter.read(file.path).data

                for (let prop of Object.keys(currentFileFrontMatter)) {
                    if (file.frontMatter[prop]) {
                        if (JSON.stringify(file.frontMatter[prop]) !== JSON.stringify(currentFileFrontMatter[prop])) {
                            const update = askQuestion(`Update ${prop} from ${currentFileFrontMatter[prop]} to ${file.frontMatter[prop]}? (Y/N) `)
                            if (update) {
                                finalFrontMatter[prop] = file.frontMatter[prop]
                            } else {
                                finalFrontMatter[prop] = currentFileFrontMatter[prop]
                            }
                        }
                    } else {
                        finalFrontMatter[prop] = currentFileFrontMatter[prop]
                    }
                }

                return Object.assign({}, file.frontMatter, finalFrontMatter)
            }
        },
        {
            enabled: true,
            name: 'Move File',
            ignore: function (file) {
                return /npc/i.test(file.path) && file.frontMatter.tags && !file.frontMatter.tags.some(tag => tag === 'compendium/src/5e/cos')
            },
            process: function (file) {
                fs.mkdirSync(path.parse(file.path).dir, { recursive: true })
                fs.writeFileSync(file.path, matter.stringify(file.content, file.frontMatter))
                fs.unlinkSync(file._oldPath)
                if (config.logs.moves) console.log(`\tMoved To: ${path.join(file.relativePath, file.fileName + file.fileExtension)}`)
            }
        }
    ]
}

const sourceKeys = getAllSourceKeys()

console.log(sourceKeys)

class CompendiumFile {
    _oldPath
    _oldContent
    _oldFrontMatter
    path
    content
    frontMatter

    constructor(filePath) {
        this._oldPath = filePath
        this.path = this._oldPath
        this._oldContent = !['.jpg', '.jpeg', '.png', '.webp'].includes(path.parse(filePath).ext) ? fs.readFileSync(filePath, 'utf-8') : matter.read(this.path).content
        this.content = this._oldContent
        this._oldFrontMatter = matter.read(this.path).data
        this.frontMatter = this._oldFrontMatter
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

function goThroughFilesAndFolders(folderPath, num = 0) {
    const files = fs.readdirSync(folderPath)

    console.log('-->', num, config.limit)
    for (const file of files) {
        if (num >= config.limit) break
        const filePath = path.resolve(folderPath, file)
        const fileInfo = fs.statSync(filePath)

        if (fileInfo.isDirectory()) {
            console.log('Directory')
            goThroughFilesAndFolders(filePath, num)
        } else {
            console.log('File')
            processAllRules(new CompendiumFile(filePath), num)
            num++
            console.log('HERE', num)
        }
    }

    return
}

function moveCssSnippets() {
    // TODO: Move CSS snippets to the correct folder
}

function processAllRules(file, index) {
    console.log(`${index + 1} Processing: ${path.join(file.relativePath, file.fileName + file.fileExtension)}`)
    config.rules.forEach(rule => {
        if (rule.enabled) {
            if (!(rule.ignore && rule.ignore(file))) {
                if (config.logs.rules) console.log(`\tRunning: ${rule.name}`)
                if (rule.regex) {
                    file[rule.target] = file[rule.target].replaceAll(new RegExp(rule.regex), (...match) => rule.process(file, ...match))
                } else {
                    if (rule.target) {
                        file[rule.target] = rule.process(file)
                    } else {
                        rule.process(file)
                    }
                }
            }
        }
    })
}

function getAllSourceKeys() {
    const sourceKeys = []

    sourceKeys.push(...ttrpgConvertConfig.sources.adventure.map(i => i.toLowerCase()))
    sourceKeys.push(...ttrpgConvertConfig.sources.book.map(i => i.toLowerCase()))
    sourceKeys.push(...ttrpgConvertConfig.sources.reference.map(i => i.toLowerCase()))

    ttrpgConvertConfig.sources.homebrew.forEach(homebrew => {
        const file = JSON.parse(fs.readFileSync(path.resolve(config.rootVaultPath, homebrew), 'utf-8'))
        file._meta.sources.forEach(source => {
            sourceKeys.push(source.abbreviation)
        })
    })

    return sourceKeys
}

goThroughFilesAndFolders(path.resolve(config.rootVaultPath, config.compendiumPath))