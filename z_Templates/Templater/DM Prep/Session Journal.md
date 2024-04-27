<%*
const dv = app.plugins.getPlugin("dataview").api

let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
let formattedDate = moment(date).format("YYYY-MM-DD")

let parties = dv.pages('"3. The Party/Parties"')
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => p.file.name), false, "What party is this Session for?")

await tp.file.move('1. DM Stuff/Session Journals/' + selectedParty + '/New Session')
-%>
---
obsidianUIMode: preview
date: <% formattedDate %>
summary:
fc-date:
timelines:
aat-render-enabled: true
fc-category: Session
party:
prep-notes:
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery("1. DM Stuff/Session Prep")):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]`
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
