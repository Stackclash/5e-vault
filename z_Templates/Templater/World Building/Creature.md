<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['creatures'])

  data = await init.openForm(modalForm, {
    title: "Creature Setup",
    fields: [
      fields.name("Creature Name", "Name of the kind of creature"),
      fields.text("gist", "Gist", "One line: who or what this is and why it matters")
    ],
    version: "2"
  })
  await init.moveFile(tp, config.locations.creatures, data.name)
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
base_creature: ""
cr: ""
size: ""
type: ""
environments: []
description: ""
images: []
gist: <% JSON.stringify(data.gist ?? "") %>
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
aliases: []
tags:
  - story-creature
---
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```
`BUTTON[edit-all]`

> [!gist]
> `INPUT[text(placeholder(One-line gist)):gist]`

<% tp.file.include("[[z_Templates/Partials/Tabs - Creature]]") %>

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
