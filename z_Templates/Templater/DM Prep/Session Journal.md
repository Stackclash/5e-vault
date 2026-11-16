<%*
let templateError = false
let formattedDate = ''
let selectedParty = null
let selectedCampaign = null
let latestJournal = null
let newSessionNumber = 0
let prepNote = null
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

  if (sessionNotes.length > 0) {
    prepNote = sessionNotes[0].file.link
  } 
  //else {
  //  const newPrepNote = await tp.file.create_new(tp.file.find_tfile("Session Prep"), 'Session Prep', false)
  //  if (!newPrepNote) {
  //    throw new Error('Failed to create new prep note')
  //  }
  //  prepNote = dataview.fileLink(newPrepNote.path, false, newPrepNote.basename)
  // }
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
party_level: <% latestJournal?.party_level ?? '""' %>
summary: ""
fc-date: <% latestJournal ? latestJournal['fc-end'] || latestJournal['fc-date'] : '' %>
fc-end: 
timelines: <% latestJournal ? `\n  - ${latestJournal.timelines[0]}` : '' %>
aat-render-enabled: true
fc-category: Session
party: "<% selectedParty ? selectedParty.file.link : '' %>"
prep_notes: "<% prepNote ? prepNote : '' %>"
party_present: []
spotlight: []
locations: []
npcs: []
quests: []
items: []
factions: []
wrapped: false
publish: false
tags:
  - session-journal
---
> [!infobox]
> ###### Prep
>  |
>  ---|---|
> **Session #** | `INPUT[number:session_number]` |
> **Party** | `INPUT[suggester(optionQuery(#party)):party]` |
> **Played on** | `INPUT[datePicker:date]` |
> **Prep notes** | `INPUT[suggester(optionQuery(#session-prep)):prep_notes]` |
> **In-world start** | `INPUT[text:fc-date]` |
> **In-world end** | `INPUT[text:fc-end]` |
> **Timelines** | `INPUT[inlineList:timelines]` |
> ###### Ledger
>  |
>  ---|---|
> **Party present** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> **Spotlight** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'spotlight'})` |
> **Locations** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
> **NPCs met** | `INPUT[inlineListSuggester(optionQuery(#npc)):npcs]` |
> **Quests touched** | `INPUT[inlineListSuggester(optionQuery(#quest)):quests]` |
> **Items** | `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]` |
> **Factions** | `INPUT[inlineListSuggester(optionQuery(#faction)):factions]` |

`$=await dv.view('views/sessionNav', {current: dv.current()})`
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current(), pronounced: false})
```
`BUTTON[wrap-session]`
`$=await dv.view('views/sectionBar', {current: dv.current()})`

## Recap
> [!player] Recap (read aloud)
> `INPUT[textArea:summary]`
> **Publish to the site** `INPUT[toggle:publish]`

## Learned this session
```dataviewjs
await dv.view('views/learnedThisSession', {current: dv.current()})
```

## What Happened


## Errata


```meta-bind-button
label: Edit all
icon: pencil
style: default
id: edit-all
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editAll.js
```
```meta-bind-button
label: Wrap this session
icon: clipboard-copy
style: primary
id: wrap-session
hidden: true
actions:
  - type: inlineJS
    code: |-
      const name = app.workspace.getActiveFile()?.basename ?? ''
      await navigator.clipboard.writeText(`/wrap ${name}`)
      new Notice(`Copied "/wrap ${name}": paste it into Claude Code to wrap this session`)
```
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>