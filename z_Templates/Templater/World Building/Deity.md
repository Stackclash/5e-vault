<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['deities'])

  data = await init.openForm(modalForm, {
    title: "Deity Setup",
    fields: [
      fields.name("Deity Name", "Name of Deity"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters"),
      fields.tagMultiSelect(dataview, "worlds", "Worlds", '#world', "Worlds where this deity is known", false)
    ],
    version: "2"
  })
  const worldNames = data.worlds ?? []
  data.worlds = dataview.pages('#world').where(p => worldNames.includes(p.file.name)).map(p => p.file.link.toString()).array()
  await init.moveFile(tp, config.locations.deities, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
worlds: <% JSON.stringify(data.worlds ?? []) %>
mechanics: ""
title: ""
symbol: ""
alignment: ""
domains: []
images: []
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
aliases: []
tags:
  - story-deity
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

<% tp.file.include("[[z_Templates/Partials/Tabs - Deity]]") %>

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
