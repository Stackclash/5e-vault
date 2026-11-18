<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['items'])

  data = await init.openForm(modalForm, {
    title: "Story Item Setup",
    fields: [
      fields.name("Item Name", "Name of Item"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagSelect(dataview, "location", "Rests at", '#location', "Where it rests when not held (optional)", false)
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.items, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
base_item: ""
holder: ""
location: <% JSON.stringify(data.location ?? "") %>
rarity: ""
attunement: false
curse: ""
images: []
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
aliases: []
tags:
  - story-item
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

<% tp.file.include("[[z_Templates/Partials/Tabs - Story Item]]") %>

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
