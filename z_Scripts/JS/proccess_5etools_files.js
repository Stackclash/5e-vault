const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const readlineSync = require('readline-sync')
const NodeCache = require('node-cache')
const fetch = require('sync-fetch')
const ttrpgConvertConfig = require('../../z_Extra/ttrpg-convert/config.json')

// Ignore images for NPCs not imported

const cache = new NodeCache({
  stdTTL: 0,
  checkperiod: 0
})

const config = {
  limit: 15000,
  rootVaultPath: path.resolve(__dirname, '../../'),
  compendiumPath: 'compendium',
  css: {
    path: 'css-snippets',
    newPath: '.obsidian/snippets',
    move: true
  },
  logs: {
    moves: true,
    rules: true
  },
  rules: [{
      enabled: true,
      name: 'Update File Path',
      target: 'relativePath',
      process: function(file) {
        let newRelativePath = file.relativePath

        newRelativePath = newRelativePath
          .replace(/compendium([\\\/])bestiary([\\\/])npc/, (oldText, separator) => `4. World Almanac${separator}NPCs`)
          .replace(/compendium([\\\/])adventures/, (oldText, separator) => `6. Resources${separator}5e Modules`)
          .replace(/compendium([\\\/])books/, (oldText, separator) => `6. Resources${separator}Books`)
          .replace(/compendium/, () => '5. Mechanics')
          .replaceAll(/([\/\\\-])([a-z0-9])(?!mg|oken)/g, (oldText, separator, letter) => separator === '-' ? ' ' + letter.toUpperCase() : separator + letter.toUpperCase())

        return newRelativePath
      }
    },
    {
      enabled: true,
      name: 'Update File Name',
      ignore: function(file) {
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'fileName',
      process: async function(file) {
        let newFileName = file.fileName
        let sourceKeys = []
        if (cache.get('sourceKeys')) {
          sourceKeys = cache.get('sourceKeys')
        } else {
          sourceKeys = await getAllSourceKeys()
          cache.set('sourceKeys', sourceKeys)
        }

        newFileName = newFileName
          .replaceAll(/(^|[\/\\\-])([a-z0-9])(?!mg[\/\\]|oken[\/\\])/g, (oldText, separator, letter) => separator === '-' ? ' ' + letter.toUpperCase() : separator + letter.toUpperCase())
          .replace(new RegExp(`(${sourceKeys.join('|')})$`, 'i'), (oldText, source) => `(${source.toUpperCase()})`)

        return newFileName
      }
    },
    {
      enabled: true,
      name: 'Update Content Links',
      ignore: function(file) {
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'content',
      regex: /\[([A-zÀ-ú\w\s\d,:;'\.\(\)-\/]*?)\]\(([\w\s\d\/\\\.\-%\d]+)(#{0,1}\^{0,1}[\-\w%]*)\s{0,1}"{0,1}([A-zÀ-ú\w\d\s:&,'\.\(\)\-]*?)"{0,1}\)/g,
      process: async function(file, oldLink, displayText, linkPath, section, title) {
        let filePath = path.parse(linkPath).dir
        let fileName = path.parse(linkPath).name
        let separator = filePath.match(/[\/\\]/)
        let linkPipe = /bestiary|npc/i.test(file.path) ? '|' : '\\|' // Prevents breaking statblocks

        let filePathRule = config.rules.find(rule => rule.name === 'Update File Path')
        let fileNameRule = config.rules.find(rule => rule.name === 'Update File Name')

        filePath = await filePathRule.process({
          relativePath: filePath
        })

        if (!fileNameRule.ignore({ fileExtension: path.parse(linkPath).ext })) {
          fileName = await fileNameRule.process({
            fileName: fileName,
            path: filePath
          })
        }

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
      name: 'Update Spell',
      ignore: function(file) {
        return !/5\. mechanics[\/\\]spells/i.test(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension) || file.fileName.toLowerCase() === 'spells'
      },
      target: 'frontMatter',
      process: async function(file) {
        const frontMatter = file.frontMatter
        const alias = frontMatter?.aliases[0]

        if (alias) {
          const spellKey = alias.toLowerCase().replaceAll(' ', '-')

          console.log(`\t\tFetching Spell Details for ${spellKey}`)
          const spellDetailsResponse = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${spellKey}`)
          let spellDetails = null

          if (spellDetailsResponse.ok) {
            spellDetails = await spellDetailsResponse.json()
          }

          if (spellDetails) {
            console.log('\t\tSuccessfully got spell details')
            if (spellDetails.range) {
              frontMatter.range = spellDetails.range
            }
            if (spellDetails.components) {
              frontMatter.components = spellDetails.components
            }
            if (spellDetails.material) {
              frontMatter.material = spellDetails.material
            }
            if (spellDetails.level) {
              frontMatter.level = spellDetails.level
            }
            if (spellDetails?.damage?.damage_type) {
              frontMatter.damageType = spellDetails.damage.damage_type.name
            }
            if (spellDetails?.dc) {
              frontMatter.save = {
                type: spellDetails.dc.dc_type.name,
                success: spellDetails.dc.dc_success
              }
            }
            if (spellDetails?.area_of_effect) {
              frontMatter.area = {
                type: spellDetails.area_of_effect.type,
                size: spellDetails.area_of_effect.size
              }
            }
            if (spellDetails?.concentration) {
              frontMatter.concentration = spellDetails.concentration
            }
            if (spellDetails?.duration) {
              frontMatter.duration = spellDetails.duration
            }
          } else {
            if (/^\d+/.test(frontMatter.level)) {
              frontMatter.level = parseInt(frontMatter.level.match(/\d+/)[0])
            }

            if (/^Concentration/.test(frontMatter.duration)) {
              frontMatter.concentration = true
              frontMatter.duration = frontMatter.duration.match(/Concentration, (.+)/)[1]
            }

            if (/\b([A-Z])(?:,\s*([A-Z]))?(?:,\s*([A-Z]))?\b(?:\s*\(([^)]+)\))?/.test(frontMatter.components)) {
              const matches = frontMatter.components.match(/\b([A-Z])(?:,\s*([A-Z]))?(?:,\s*([A-Z]))?\b(?:\s*\(([^)]+)\))?/)
              const components = [matches[1], matches[2], matches[3]].filter(Boolean)
              const material = matches[4]

              if (components) {
                frontMatter.components = components
              }

              if (material) {
                frontMatter.material = material
              }
            }
          }
        }

        return frontMatter
      }
    },
    {
      enabled: true,
      name: 'Create Folder Index Page',
      ignore: function(file) {
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'content',
      process: function(file) {
        let fileContent = file.content
        let separator = file.path.match(/[\/\\]/)

        if (new RegExp(/([\w\s]+)[\/\\]\1\.md$/).test(`${file.relativePath}${separator}${file.fileName}${file.fileExtension}`)) {
          fileContent = `---\nobsidianUIMode: preview\n---\n\`\`\`dataview\nLIST FROM "${file.relativePath.replace(/[\/\\]$/, "").replaceAll(/\\/g, "/")}" WHERE file.name != this.file.name\n\`\`\``
        }

        return fileContent
      }
    },
    {
      enabled: true,
      name: 'Update Image/Token Path for Bestiary and NPCs',
      ignore: function(file) {
        return !/bestiary|npc/i.test(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'content',
      regex: /"*image"*: "*([\w\/]+)(\/[img|token]+\/[\w-]+\.[\w]+)"*/g,
      process: async function(file, oldText, imagePath, restOfPath) {
        let filePathRule = config.rules.find(rule => rule.name === 'Update File Path')

        imagePath = await filePathRule.process({
          relativePath: imagePath
        })

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
      ignore: function(file) {
        return !/npc|bestiary/i.test(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'content',
      regex: /^"name": "[\w\s'\(\)-]+"/gm,
      process: function(file, oldText) {
        return `"name": "${file.fileName}"`
      }
    },
    {
      enabled: true,
      name: 'Update links in Frontmatter',
      ignore: function(file) {
        ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'frontMatter',
      process: async function(file) {
        const updateFilePath = config.rules.find(rule => rule.name === 'Update File Path')
        const updateFileName = config.rules.find(rule => rule.name === 'Update File Name')

        const frontMatter = file.frontMatter
        const regex = /[\w\s\d\/\\\.\-%\d]+[\/\\]+[\w\s\d\/\\\.\-%\d]+#{0,1}\^{0,1}[\-\w%]*\s{0,1}"{0,1}[A-zÀ-ú\w\d\s:&,'\.\(\)\-]*?"{0,1}/
        for (const key of Object.keys(frontMatter)) {

          if (!['tags'].includes(key)) {
            if (typeof frontMatter[key] === 'string') {
              if (regex.test(frontMatter[key])) {
                const extension = path.extname(frontMatter[key])
                const filePath = await updateFilePath.process({
                  relativePath: path.parse(path.relative(config.rootVaultPath, frontMatter[key])).dir
                })
                let fileName = path.parse(frontMatter[key]).name

                if (!['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
                  fileName = await updateFileName.process({
                    fileName
                  })
                }

                frontMatter[key] = path.join(filePath, `${fileName}${extension}`)
              }
            } else if (Array.isArray(frontMatter[key])) {
              for (let i = 0; i < frontMatter[key].length; i++) {
                if (regex.test(frontMatter[key][i])) {
                  const extension = path.extname(frontMatter[key][i])
                  const filePath = await updateFilePath.process({
                    relativePath: path.parse(path.relative(config.rootVaultPath, frontMatter[key][i])).dir
                  })
                  let fileName = path.parse(frontMatter[key][i]).name

                  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
                    fileName = await updateFileName.process({
                      fileName
                    })
                  }

                  frontMatter[key][i] = path.join(filePath, `${fileName}${extension}`)
                }
              }
            }
          }
        }

        return frontMatter
      }
    },
    {
      enabled: true,
      name: 'Update Frontmatter based on existing file',
      ignore: function(file) {
        return !fs.existsSync(file.path) || ['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)
      },
      target: 'frontMatter',
      process: function(file) {
        const askQuestion = function(question) {
          const answer = readlineSync.question(question)
          return answer.toLowerCase() === 'y'
        }

        const finalFrontMatter = {},
          currentFileFrontMatter = matter.read(file.path).data

        for (let prop of Object.keys(currentFileFrontMatter)) {
          if (file.frontMatter[prop]) {
            if (JSON.stringify(file.frontMatter[prop]) !== JSON.stringify(currentFileFrontMatter[prop])) {
              // const update = askQuestion(`Update ${prop} from ${currentFileFrontMatter[prop]} to ${file.frontMatter[prop]}? (Y/N) `)
              if (true) {
                finalFrontMatter[prop] = file.frontMatter[prop]
              } else {
                // finalFrontMatter[prop] = currentFileFrontMatter[prop]
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
      ignore: function(file) {
        return /4. world almanac[\/\\]npc/i.test(file.path) && file.frontMatter.tags && !file.frontMatter.tags.some(tag => tag === 'compendium/src/5e/cos')
      },
      process: function(file) {
        fs.mkdirSync(path.parse(file.path).dir, {
          recursive: true
        })
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(file.fileExtension)) {
          fs.renameSync(file._oldPath, file.path)
        } else {
          fs.writeFileSync(file.path, matter.stringify(file.content, file.frontMatter))
          fs.unlinkSync(file._oldPath)
        }
        if (config.logs.moves) console.log(`\tMoved To: ${path.join(file.relativePath, file.fileName + file.fileExtension)}`)
      }
    }
  ]
}

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

function getFilesList(folderPath) {
  const filesList = []
  const files = fs.readdirSync(folderPath)

  for (const file of files) {
    const filePath = path.resolve(folderPath, file)
    const fileInfo = fs.statSync(filePath)

    if (fileInfo.isDirectory()) {
      filesList.push(...getFilesList(filePath))
    } else {
      filesList.push(filePath)
    }
  }

  return filesList
}

async function applyAsyncRegexReplacement(str, regex, file, rule) {
  const matches = []
  let match

  // Ensure global flag is set to find all matches
  const globalRegex = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g')

  while ((match = globalRegex.exec(str)) !== null) {
    matches.push({
      match,
      index: match.index,
      length: match[0].length,
      replacement: null
    })
  }

  // Process matches in order, collecting replacements
  for (const m of matches) {
    m.replacement = await rule.process(file, ...m.match)
  }

  // Build new string using replacements
  let newStr = ''
  let lastIndex = 0
  for (const m of matches) {
    newStr += str.slice(lastIndex, m.index) + m.replacement
    lastIndex = m.index + m.length
  }
  newStr += str.slice(lastIndex)

  return newStr
}

function moveCssSnippets() {
  const newCssPath = path.join(config.rootVaultPath, config.css.newPath)

  if (fs.existsSync(path.join(config.rootVaultPath, config.css.path))) {
    console.log('Moving CSS Snippets')
    const cssFiles = fs.readdirSync(path.join(config.rootVaultPath, config.css.path))
    for (const file of cssFiles) {
      const filePath = path.resolve(config.rootVaultPath, config.css.path, file)
      const newFilePath = path.resolve(newCssPath, file)
      fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err
      })
      if (config.logs.moves) console.log(`\tMoved ${file} to ${newFilePath}`)
    }
  }

  return
}

async function processAllRules(file, index) {
  console.log(`${index + 1} Processing: ${path.join(file.relativePath, file.fileName + file.fileExtension)}`)
  for (const rule of config.rules) {
    if (rule.enabled) {
      if (!(rule.ignore && rule.ignore(file))) {
        if (config.logs.rules) console.log(`\tRunning: ${rule.name}`)
        if (rule.regex) {
          file[rule.target] = await applyAsyncRegexReplacement(
            file[rule.target],
            new RegExp(rule.regex),
            file,
            rule
          )
        } else {
          if (rule.target) {
            file[rule.target] = await rule.process(file)
          } else {
            await rule.process(file)
          }
        }
      }
    }
  }
  return
}

async function getAllSourceKeys() {
  const sourceKeys = []
  const keySourceResponse = await fetch('https://rawcdn.githack.com/ebullient/ttrpg-convert-cli/f23b3aa4a5947fe7c773832189af6024692ab9c2/src/main/resources/sourceMap.yaml')
  const keySource = await keySourceResponse.text()

  ttrpgConvertConfig.sources.homebrew.forEach(homebrew => {
    const file = JSON.parse(fs.readFileSync(path.resolve(config.rootVaultPath, homebrew), 'utf-8'))
    file._meta.sources.forEach(source => {
      sourceKeys.push(source.json)
    })
  })

  sourceKeys.push(...Object.keys(matter(keySource).data.config5e.reference))

  return sourceKeys
}

function cleanup() {
  // const allNpcFiles = getFilesList(path.resolve(config.rootVaultPath, '4. World Almanac/NPCs'))
  //     .filter(file => path.extname(file) === '.md')
  // const newNpcFiles = allNpcFiles.filter(file => /\(.*?\)\.md$/.test(file))
  // const oldNpcFiles = allNpcFiles.filter(file => !/\(.*?\)\.md$/.test(file))

  // for (const npc of oldNpcFiles) {
  //     const newNpc = newNpcFiles.find(file => {
  //         const oldName = path.parse(npc).name
  //         return new RegExp(`${oldName} \(.*?\)$`).test(file)
  //     })

  //     if (newNpc) {
  //         const newNpcInfo = matter.read(newNpc)
  //         const oldNpcInfo = matter.read(npc)
  //         if (newNpcInfo.content && oldNpcInfo.data) {
  //             console.log('READY')
  //             fs.writeFileSync(newNpc, matter.stringify(newNpcInfo.content, oldNpcInfo.data))
  //             fs.unlinkSync(npc)
  //         } else {
  //             console.log('ERROR - ', npc)
  //         }

  //     }
  // }
  return
}

async function main() {
  if (config.css.move) moveCssSnippets()
  const filesList = getFilesList(path.resolve(config.rootVaultPath, config.compendiumPath))
  let index = 0

  console.log(`\nFound ${filesList.length} files to process\nProcessing ${config.limit}\n`)

  for (const file of filesList) {
    if (index >= config.limit) break
    const compendiumFile = new CompendiumFile(file)
    await processAllRules(compendiumFile, index)
    index++
  }
}

main()
cleanup()