<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['npcs'])

  data = await init.openForm(modalForm, {
    title: "NPC Setup",
    fields: [
      fields.name("NPC Name", "Name of NPC"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "location", "Location", '#location', "Where this NPC is now", false)
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.npcs, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
statblock: inline
location: <% JSON.stringify(data.location ?? "") %>
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
aliases:
  - <% JSON.stringify(data.name) %>
pronounced: ""
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
race: ""
gender: ""
age: ""
alignment: ""
occupation: []
appearance: ""
voice: ""
description: ""
history: ""
personality: ""
ideal: ""
bond: ""
flaw: ""
goals: ""
likes: ""
dislikes: ""
party_relationships: {}
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
> ###### Bio
>  |
>  ---|---|
> **Race** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'race'})` |
> **Gender** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})` |
> **Age** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'age'})` |
> **Alignment** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'alignment'})` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'occupation'})` |
> **Current Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Group(s) (legacy, until E2)** | `INPUT[inlineList:groups]` |
> **Religion(s) (legacy, until E3)** | `INPUT[inlineList:religions]` |

<% tp.file.include("[[z_Templates/Partials/Tabs - NPC]]") %>

## Stats
```statblock

```
^statblock

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
