const matter = require('gray-matter')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const journalMeta = {
    obsidianUIMode: 'preview',
    date: '',
    summary: '',
    'fc-date': '',
    timelines: [],
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
    const newJournalContent = `${journalContent}\n\n${journal.content}`
    const newJournalMeta = JSON.parse(JSON.stringify(journalMeta))

    if (!preps.includes(`${journal.data.date}.md`)) {
        const newPrepMeta = prepMeta
        newPrepMeta.date = journal.data.date
        newPrepMeta.journal = `[[${newJournalName.replace('.md', '')}]]`
        const newPrepContent = matter.stringify(prepContent, newPrepMeta)

        fs.writeFileSync(path.join(prepPath, `${journal.data.date}.md`), newPrepContent)
    }

    for (const key of Object.keys(newJournalMeta)) {
        if (journal.data[key] && newJournalMeta[key] != journal.data[key]) {
            newJournalMeta[key] = journal.data[key]
        }
        newJournalMeta['prep-notes'] = `[[${journal.data.date}]]`
        newJournalMeta['aat-render-enabled'] = true,
        newJournalMeta['fc-category'] = 'Session',
        newJournalMeta['party'] = '[[Curse of Strahd]]'
        newJournalMeta['timelines'].push('CoS')
    }

    // console.log(newJournalName, matter.stringify(newJournalContent, newJournalMeta))

    fs.writeFileSync(path.join(journalPath, newJournalName), matter.stringify(newJournalContent, newJournalMeta))

    fs.rmSync(journal.path)

    sessionNumber++
}