<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['shops'])

  data = await init.openForm(modalForm, {
    title: "Shop Setup",
    fields: [
      fields.name("Shop Name", "Name of Shop"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "location", "Location", '#location', "Where this shop is", false)
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.shops, data.name)
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
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
status: ""
atmosphere: ""
resources: []
owners: []
staff: []
cost_modifier: 1
buy_rate: <% dataview.page("Configuration")?.shop_defaults?.buy_rate ?? 0.5 %>
type: ""
size: ""
items: []
pinned_items: []
last_stocked: ""
tags:
  - location
  - shop
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Pricing
>  |
>  ---|---|
> **Shop type** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'type'})` |
> **Shop size** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'size'})` |
> **Cost modifier** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'cost_modifier'})` |
> **Buy rate** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'buy_rate'})` |
> ###### Where
>  |
>  ---|---|
> **Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

<% tp.file.include("[[z_Templates/Partials/Tabs - Shop]]") %>

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
