const matter = require('gray-matter')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const journalMeta = {
    obsidianUIMode: 'preview',
    date: '',
    summary: '',
    'fc-date': '',
    timelines: '',
    'aat-render-enabled': true,
    'fc-category': 'Session',
    party: '[[Curse of Strahd]]',
    'prep-notes': ''
}

const journalContent = `> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Party:** | \`INPUT[suggester(optionQuery("3. The Party/Parties")):party]\` |
> | **Session Date:** | \`INPUT[datePicker:date]\` |
> | **Prep Notes:** | \`INPUT[suggester(optionQuery("1. DM Stuff/Session Prep")):prep-notes]\` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | \`INPUT[text:fc-date]\`
> | **End Date:** | \`INPUT[text:fc-end]\` |
> | **Timelines:** | \`INPUT[inlineList:timelines]\` |
# \`=this.file.name\`
## Session Overview
\`INPUT[textArea:summary]\`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
Small description.`

const prepMeta = {
    date: ''
}

const prepContent = `## Resources

## Details to Remember

## Strong Start  


## Scenes  


## Secrets and Clues  


## Fantastic Locations  


## Important NPCs  


## Potential Monsters  


## Potential Treasure  
`

const journalPath = './1. DM Stuff/Session Journals'
const prepPath = './1. DM Stuff/Session Prep'

const journals = fs.readdirSync(journalPath)
    .filter(f => f !== 'Session Journals.md' && !/^S\d\s/.test(f)).map(f => {
        const content = fs.readFileSync(path.join(journalPath, f))
        return {
            ...matter(content),
            name: f,
            path: path.join(journalPath, f)
        }
    })
const preps = fs.readdirSync(prepPath) //.map(f => path.join(prepPath, f))

for (const journal of journals) {
    console.log(journal)
    process.exit()
    // if (!preps.includes(journal.data.))
}