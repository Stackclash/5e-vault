const matter = require('gray-matter')
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

const prepMeta = {
    date: ''
}

const journalPath = './1. DM Stuff/Session Journals'
const prepPath = './1. DM Stuff/Session Prep'

const journals = fs.readdirSync(journalPath)
const preps = fs.readdirSync(prepPath)

for (const journal of journals) {
    console.log(path.join(journalPath, journal))
}