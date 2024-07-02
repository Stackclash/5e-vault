<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const locationConfig = dv.page('Configuration').locations

let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
let formattedDate = moment(date).format("YYYY-MM-DD")

let parties = dv.pages("#party")
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties, false, "What party is this Session for?")

let latestJournal = dv.pages("#session-journal").filter(p => p.party && p.party.path === selectedParty.file.path)
console.log(latestJournal.map(p => p.file.name), latestJournal.sort((a,b) => new Date(a.date) - new Date(b.date)).map(p => p.file.name))

//await tp.file.move(path.join(locationConfig.journals, selectedParty.file.name, 'S New Session Journal'))
-%>
---
obsidianUIMode: preview
date: <% formattedDate %>
summary:
fc-date: 
fc-end: 
timelines:
aat-render-enabled: true
fc-category: Session
party: "<% selectedParty.file.link %>"
prep-notes:
tags:
  - session-journal
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]` |
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
# `=this.file.name`
## Session Overview
`INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
Small description.
