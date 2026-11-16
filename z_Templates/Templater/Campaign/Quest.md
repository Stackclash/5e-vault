<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['quests'])
  const campaign = dataview.page(config.active_campaign?.path ?? '')
  data = await init.openForm(modalForm, {
    title: "Quest Setup",
    fields: [
      fields.name("Quest Name", "What is the name of the quest?"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "parent", "Arc", '#quest', "The arc this belongs to (optional)", false)
    ],
    version: "2"
  })
  data.world = campaign?.world ? `[[${campaign.world.path}|${dataview.page(campaign.world.path)?.file.name ?? ''}]]` : ''
  await init.moveFile(tp, config.locations.quests, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
kind: quest
parent: <% JSON.stringify(data.parent ?? "") %>
world: <% JSON.stringify(data.world ?? "") %>
active: {}
completed: {}
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
facts: []
description: ""
stakes: ""
reward: ""
deadline: ""
giver: ""
npcs: []
locations: []
items: []
factions: []
pcs: []
steps: []
tags:
  - quest
---
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```
`BUTTON[edit-all]`

> [!gist]
> `INPUT[text(placeholder(One-line gist)):gist]`

> [!infobox]
> ###### Hook
>  |
>  ---|---|
> **Kind** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'kind'})` |
> **Arc** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'parent'})` |
> **Giver** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'giver'})` |
> **Reward** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'reward'})` |

<% tp.file.include("[[z_Templates/Partials/Tabs - Quest]]") %>

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
