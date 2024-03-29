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
    date: '',
    journal: ''
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
    .filter(f => f !== 'Session Journals.md' && !/^S\d\s/.test(f))
    .map(f => {
        const fullPath = path.join(journalPath, f)
        return {
            ...matter.read(fullPath),
            name: f,
            path: fullPath
        }
    })
    .map(f => {
        const object = f
        object.data.date = moment(object.data.date).format('YYYY-MM-DD')
        return object
    })
    .sort((a, b) => new Date(a.data.date) - new Date(b.data.date))
const preps = fs.readdirSync(prepPath) //.map(f => path.join(prepPath, f))

let sessionNumber = 5
for (const journal of journals) {
    const newJournalName = `S${sessionNumber} ${journal.name}`

    if (!preps.includes(`${journal.data.date}.md`)) {
        const newPrepMeta = prepMeta
        newPrepMeta.date = journal.data.date
        newPrepMeta.journal = `[[${newJournalName.replace('.md', '')}]]`
        const newPrepContent = matter.stringify(prepContent, newPrepMeta)

        console.log(path.join(prepPath, `${journal.data.date}.md`), newPrepContent)
        //fs.writeFileSync(path.join(prepPath, `${journal.data.date}.md`), newPrepContent)
    }

    fs.writeFileSync(path.join(journalPath, ))

    fs.rmSync(journal.path)

    sessionNumber++
}