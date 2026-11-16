<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['worlds'])

  data = await init.openForm(modalForm, {
    title: "World Setup",
    fields: [
      fields.name("World Name", "Name of World"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters")
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.worlds, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
images:
  - z_Assets/PlaceholderImage.png
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
economic_scale: 1
calendar: ""
aliases: []
tags:
  - location
  - world
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Settings
>  |
>  ---|---|
> **Economic scale** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'economic_scale'})` |
> **Calendar** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'calendar'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

<% tp.file.include("[[z_Templates/Partials/Tabs - World]]") %>

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
