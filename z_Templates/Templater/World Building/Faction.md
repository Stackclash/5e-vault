<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['factions'])

  data = await init.openForm(modalForm, {
    title: "Faction Setup",
    fields: [
      fields.name("Faction Name", "Name of Faction"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "location", "Base", '#location', "Where the faction is based (optional)", false)
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.factions, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
kind: ""
status: active
location: <% JSON.stringify(data.location ?? "") %>
images: []
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
goals: ""
resources: ""
symbol: ""
motto: ""
clock: []
standing: {}
renown: {}
relationships: []
aliases: []
tags:
  - faction
---
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```
`BUTTON[edit-all]`

> [!gist]
> `INPUT[text(placeholder(One-line gist)):gist]`

> [!infobox]
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Overview
>  |
>  ---|---|
> **Kind** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'kind'})` |
> **Base** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Renown** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'renown'})` |

<% tp.file.include("[[z_Templates/Partials/Tabs - Faction]]") %>

## DM Notes


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
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>
