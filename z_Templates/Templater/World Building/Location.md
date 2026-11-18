<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, [])
  const typeLocations = { Region: 'regions', Settlement: 'settlements', 'Place of Interest': 'pois' }
  data = await init.openForm(modalForm, {
    title: "Location Setup",
    fields: [
      fields.name("Location Name", "Name of Location"),
      { name: "type", label: "Level", description: "Region, settlement, or place of interest", isRequired: true, input: { type: "select", source: "fixed", options: Object.entries(typeLocations).map(([label, value]) => ({ label, value })) } },
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "location", "Parent Location", '#location', "What this location sits inside", false)
    ],
    version: "2"
  })
  data.tag = Object.keys(typeLocations).find(k => typeLocations[k] === data.type).toLowerCase().replaceAll(' ', '-')
  await tp.file.move(path.posix.join(config.locations[data.type], data.name), tp.file.find_tfile(tp.file.title))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
location: <% JSON.stringify(data.location ?? "") %>
images:
  - z_Assets/PlaceholderImage.png
pronounced: ""
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
status: ""
atmosphere: ""
hazards: ""
climate: ""
resources: []
population: ""
terrain: ""
rulers: []
government: ""
army: ""
imports: []
exports: []
routes: []
<%* if (data.type === 'settlements') { -%>
wealth: ""
<%* } -%>
aliases: []
tags:
  - location
  - <% data.tag %>
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Overview
>  |
>  ---|---|
> **Parent** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Population** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'population'})` |
> **Terrain** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'terrain'})` |
> **Resources** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):resources]` |
> ###### Politics
>  |
>  ---|---|
> **Ruler(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'rulers'})` |
> **Government** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'government'})` |
> **Army** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'army'})` |
<%* if (data.type === 'settlements') { -%>
> ###### Trade
>  |
>  ---|---|
> **Wealth** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'wealth'})` |
> **Imports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'imports'})` |
> **Exports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'exports'})` |
<%* } else { -%>
> ###### Trade
>  |
>  ---|---|
> **Imports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'imports'})` |
> **Exports** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'exports'})` |
<%* } -%>

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

<% tp.file.include("[[z_Templates/Partials/Tabs - Location]]") %>

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
