<%*
let templateError = false
let formattedDate = ''
let selectedParty = null
let selectedCampaign = null
let latestJournal = null
let newSessionNumber = 0
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['journals', 'preps', 'parties', 'campaigns'])

  const data = await init.openForm(modalForm, {
    title: "Session Journal Setup",
    name: "session-setup",
    fields: [
      fields.folderSelect(dataview, "party", "Party", config.locations.parties, "Campaign Party"),
      fields.date("Date", "Date of Session"),
    ],
    version: "1"
  })

  formattedDate = moment(data.date).format("YYYY-MM-DD")
  selectedParty = dataview.page(data.party)

  // Journals are organized by campaign. Resolve the campaign that owns the selected party.
  selectedCampaign = dataview.pages(`"${config.locations.campaigns}"`).find(c => c.party && c.party.path === selectedParty.file.path)
  if (!selectedCampaign) {
    throw new Error(`No campaign found whose party is ${selectedParty.file.name}`)
  }

  const journals = dataview.pages(`"${path.posix.join(config.locations.journals, selectedCampaign.file.name)}"`).sort(p => p.date, 'desc')

  if (journals.length > 0) {
    latestJournal = journals[0]
    newSessionNumber = parseInt(latestJournal.file.name.match(/^S(\d{1,})/)[1])+1
  }

  const sessionNotes = dataview.pages(`"${config.locations.preps}"`).filter(p => p.file.name === formattedDate)

  //if (sessionNotes.length > 0) {
  //  prepNote = sessionNotes[0].file.link
  //} else {
  //  const newPrepNote = await tp.file.create_new(tp.file.find_tfile("Session Prep"), 'Session Prep', false)
  //  if (!newPrepNote) {
  //    throw new Error('Failed to create new prep note')
  //  }
  //  prepNote = dataview.fileLink(newPrepNote.path, false, newPrepNote.basename)
  //}
  await tp.file.move(path.posix.join(config.locations.journals, selectedCampaign.file.name, `S${newSessionNumber} New Session Journal`), tp.file.find_tfile(tp.file.title))
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
session_number: <% newSessionNumber %>
summary:
fc-date: <% latestJournal ? latestJournal['fc-end'] || latestJournal['fc-date'] : '' %>
fc-end: 
timelines: <% latestJournal ? `\n  - ${latestJournal.timelines[0]}` : '' %>
aat-render-enabled: true
fc-category: Session
party: "<% selectedParty ? selectedParty.file.link : '' %>"
prep-notes: "<% prepNote ? prepNote : '' %>"
party_present: []
locations: []
npcs: []
quests: []
items: []
tags:
  - session-journal
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Session #:** | `INPUT[number:session_number]` |
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery(#session-prep)):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]` |
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
> ## Session Links
> | | |
> |---|---|
> | **Party Present:** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> | **Locations:** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
> | **NPCs Met:** | `INPUT[inlineListSuggester(optionQuery(#npc)):npcs]` |
> | **Quests Touched:** | `INPUT[inlineListSuggester(optionQuery(#quest)):quests]` |
> | **Items Found:** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |
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