<%*
let templateError = false
let data = {}
let dataview = null
try {
  const path = require('path')
  dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')

  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }

  const config = dataview.api.page('Configuration')

  if (!config || !config.locations || !config.locations.shops) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const parentLocations = dataview.api.pages('#location').sort(l => l.file.name, 'asc').array()
  const npcs = dataview.api.pages('#npc').sort(n => n.file.name, 'asc').array()

  const result = await modalForm.api.openForm({
    title: "Location Setup",
    name: "location-setup",
    fields: [
      {
        name: "name",
        label: "Location Name",
        description: "Name of Shop",
        isRequired: true,
        input: {
          type: "text",
        }
      },
      {
        name: "location",
        label: "Location",
        description: "Where this shop is located",
        isRequired: true,
        input: {
          type: "select",
          options: parentLocations.map(l => ({label: l.file.name, value: l.file.link.toString()})),
          source: "fixed"
        }
      },
      {
        name: "owners",
        label: "Owners",
        description: "Who owns this shop",
        isRequired: true,
        input: {
          type: "multiselect",
          source: "fixed",
          multi_select_options: npcs.map(n => n.file.name)
        }
      },
      {
        name: "staff",
        label: "Staff",
        description: "Who works in this shop",
        isRequired: true,
        input: {
          type: "multiselect",
          source: "fixed",
          multi_select_options: npcs.map(n => n.file.name)
        }
      }
    ],
    version: "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  data = result.getData()

  await tp.file.move(path.posix.join(config.locations.shops, data.name), tp.file.find_tfile(tp.file.title))

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
location: "<% data.location %>"
resources: []
owners: <%* if (data.owners.length == 0) { %>[]<%* } %>
<%* for (owner of data.owners) { -%>
  - "<% dataview.api.page(owner).file.link.toString() %>"
<%* } -%>
staff: <%* if (data.staff.length == 0) { %>[]<%* } %>
<%* for (staff of data.staff) { -%>
  - "<% dataview.api.page(staff).file.link.toString() %>"
<%* } -%>
cost_modifier: 1
items: []
tags:
  - shop
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery(#npc)):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery(#npc)):staff]` |
> | **Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> | **Resource(s):** | `INPUT[inlineListSuggester(optionQuery("6. Resources")):resources]` |
> ###### Inventory Info
> |||
> |---|---|
> | **Cost Modifier** | `INPUT[number:cost_modifier]` |
> | **Items** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |

`$= await dv.view("locationBreadcrumbs", {current: dv.current()})`
# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("shopInventory", {current: dv.current()})
```
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>