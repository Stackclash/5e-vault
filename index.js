import matter from 'gray-matter'
import fs from 'fs'

const journalMeta = {
    obsidianUIMode: 'preview',
    date: '',
    summary: '',
    'fc-date': '',
    timelines: '',
    'aat-render-enabled': true,
    'fc-category': Session,
    party: '[[Curse of Strahd]]',
    'prep-notes': ''
}

const prepMeta = {
    date: ''
}

const journals = fs.readdirSync('./1. DM Stuff/Session Journals')
const preps = fs.readdirSync('./1. DM Stuff/Session Prep')

for (const journal of journals) {
    console.log(journal)
}