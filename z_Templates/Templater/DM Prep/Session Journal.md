<%*
let templateError = false
let formattedDate = ''
let selectedParty = null
let latestJournal = null
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')
  
  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }
  
  const config = dataview.api.page('Configuration')
  
  if (!config || !config.locations || !config.locations.journals) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.api.openForm({
    "title": "Session Journal Setup",
    "name": "session-setup",
    "fields": [
      {
        "name": "party",
        "label": "Party",
        "description": "Campaign Party",
        "isRequired": true,
        "input": {
          "type": "dataview",
          "query": "dv.pages('#party').file.name"
        }
      },
      {
        "name": "date",
        "label": "Date",
        "description": "Date of Session",
        "isRequired": false,
        "input": {
          "type": "date",
          "hidden": false
        }
      }
    ],
    "version": "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  const data = result.getData()

  formattedDate = moment(data.date).format("YYYY-MM-DD")
  selectedParty = dataview.api.page(data.party)

  const journals = dataview.api.pages("#session-journal").filter(p => p.party && p.party.path === selectedParty.file.path).sort(p => p.date, 'desc')
  let newSessionNumber = 0

  if (journals.length > 0) {
    latestJournal = journals[0]
    newSessionNumber = parseInt(latestJournal.file.name.match(/^S(\d{1,})/)[1])+1
  }

  const sessionNotes = dataview.api.pages("#session-prep").filter(p => p.file.name === formattedDate)

  if (sessionNotes.length > 0) {
    prepNote = sessionNotes[0]
  } else {
    prepNote = await tp.file.create_new(tp.file.find_tfile("Session Prep"), 'Session Prep', false)
  }

  await tp.file.move(path.join(config.locations.journals, selectedParty.file.name, `S${newSessionNumber} New Session Journal`))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
date: <% formattedDate %>
summary:
fc-date: <% latestJournal ? latestJournal['fc-end'] || latestJournal['fc-date'] : '' %>
fc-end: 
timelines:
  - <% latestJournal ? latestJournal.timelines[0] : '' %>
aat-render-enabled: true
fc-category: Session
party: "<% selectedParty ? selectedParty.file.link : '' %>"
prep-notes: "<% prepNote ? prepNote.file.link : '' %>"
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
> | **Locations:** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
# `=this.file.name`
## Session Overview
> [!div|no-t clean]
> `INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
Small description.
<%* } else { -%>
---
obsidianUIMode: preview
---
> [!Error] Error Executing Template
> <% templateError %>
<%* } -%>