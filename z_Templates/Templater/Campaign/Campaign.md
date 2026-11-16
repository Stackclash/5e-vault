<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config } = init.getPlugins(tp, ['campaigns'])

  data = await init.openForm(modalForm, {
    title: "Campaign Setup",
    name: "campaign-setup",
    fields: [
      fields.name("Campaign Name", "Name of the Campaign"),
      fields.tagSelect(dataview, "party", "Campaign Party", "#party"),
      fields.tagSelect(dataview, "world", "Campaign World", "#world")
    ],
    version: "2"
  })

  await init.moveFile(tp, config.locations.campaigns, data.name)

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
party: <% JSON.stringify(data.party ?? "") %>
world: <% JSON.stringify(data.world ?? "") %>
status: planning
level_range: ""
summary: ""
site_slug: ""
tags:
  - campaign
---
> [!infobox]
> ###### Summary (player-safe)
> `INPUT[textArea:summary]`
> ###### Setup
>  |
>  ---|---|
> **Party** | `INPUT[suggester(optionQuery(#party)):party]` |
> **World** | `INPUT[suggester(optionQuery(#world)):world]` |
> **Status** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'status'})` |
> **Level range** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'level_range'})` |
> **Site slug** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'site_slug'})` |
> ###### Now
> `$=await dv.view('views/campaignNow', {current: dv.current()})`

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current(), pronounced: false})
```
`$=await dv.view('views/sectionBar', {current: dv.current(), level: 1})`

> [!dm] Lines & Veils
> **Lines** (never in the game):
> - 
>
> **Veils** (happens off-screen):
> - 

# Premise


# Tone


# Power Level


# The Villain


# Campaign Arc


## Endings


# Character Tie-Ins


# Active Threads


# Locked Canon


# Timelines


# Plan Changelog


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
