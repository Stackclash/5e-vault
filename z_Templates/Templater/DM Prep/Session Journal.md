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
  
  if (!config || !config.locations || !config.locations.journals || !config.locations.preps || !config.locations.parties) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.api.openForm({
    title: "Session Journal Setup",
    name: "session-setup",
    fields: [
      {
        name: "party",
        label: "Party",
        description: "Campaign Party",
        isRequired: true,
        input: {
          type: "dataview",
          query: "dv.pages('\"" + config.locations.parties + "\"')"
        }
      },
      {
        name: "date",
        label: "Date",
        description: "Date of Session",
        isRequired: false,
        input: {
          type: "date",
          hidden: false
        }
      }
    ],
    version: "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  const data = result.getData()

  formattedDate = moment(data.date).format("YYYY-MM-DD")
  selectedParty = dataview.api.page(data.party)

  const journals = dataview.api.pages(`"${path.posix.join(config.locations.journals, selectedParty.file.name)}"`).sort(p => p.date, 'desc')
  let newSessionNumber = 0

  if (journals.length > 0) {
    latestJournal = journals[0]
    newSessionNumber = parseInt(latestJournal.file.name.match(/^S(\d{1,})/)[1])+1
  }

  const sessionNotes = dataview.api.pages(`"${config.locations.preps}"`).filter(p => p.file.name === formattedDate)

  if (sessionNotes.length > 0) {
    prepNote = sessionNotes[0].file.link
  } else {
    const newPrepNote = await tp.file.create_new(tp.file.find_tfile("Session Prep"), 'Session Prep', false)
    if (!newPrepNote) {
      throw new Error('Failed to create new prep note')
    }
    prepNote = dataview.api.fileLink(newPrepNote.path, false, newPrepNote.basename)
  }

  await tp.file.move(path.posix.join(config.locations.journals, selectedParty.file.name, `S${newSessionNumber} New Session Journal`), tp.file.find_tfile(tp.file.title))
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
timelines: <% latestJournal ? `\n  - ${latestJournal.timelines[0]}` : '' %>
aat-render-enabled: true
fc-category: Session
party: "<% selectedParty ? selectedParty.file.link : '' %>"
prep-notes: "<% prepNote ? prepNote : '' %>"
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


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>