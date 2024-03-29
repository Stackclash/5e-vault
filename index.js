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

const prepMeta = {
    date: ''
}

const journalPath = './1. DM Stuff/Session Journals'
const prepPath = './1. DM Stuff/Session Prep'

const journals = fs.readdirSync(journalPath).filter(f => f !== 'Session Journals.md' && !/^S\d\s/.test(f)).map(f => path.join(journalPath, f))
const preps = fs.readdirSync(prepPath).map(f => path.join(prepPath, f))

for (const journal of journals) {
    console.log(journal)
}