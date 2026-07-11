<%*
let templateError = false
let data = {}
let dataview = null
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const plugins = init.getPlugins(tp, ['shops'])
  dataview = plugins.dataview
  const { modalForm, config } = plugins

  data = await init.openForm(modalForm, {
    title: "Shop Setup",
    name: "shop-setup",
    fields: [
      fields.name("Shop Name", "Name of Shop"),
      fields.tagSelect(dataview, "location", "Location", '#location', "Where this shop is located"),
      fields.tagMultiSelect(dataview, "owners", "Owners", '#npc', "Who owns this shop", false),
      fields.tagMultiSelect(dataview, "staff", "Staff", '#npc', "Who works in this shop", false),
    ],
    version: "1"
  })
  
  if (!data.owners) data.owners = []
  if (!data.staff) data.staff = []

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
location: "<% data.location %>"
resources: []
owners: <%* if (data.owners && data.owners.length == 0) { %>[]<%* } %>
<%* for (owner of data.owners) { -%>
  - "<% dataview.page(owner).file.link.toString() %>"
<%* } -%>
staff: <%* if (data.staff && data.staff.length == 0) { %>[]<%* } %>
<%* for (staff of data.staff) { -%>
  - "<% dataview.page(staff).file.link.toString() %>"
<%* } -%>
cost_modifier: 1
shop_type: ""
shop_size: ""
items: []
tags:
  - location
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
> ###### Shop Settings
> |||
> |---|---|
> | **Shop Type** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: dv.page('Configuration').shop_types.map(t => 'option(' + t.name + ')'), field: 'type' })` |
> | **Shop Size** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: [...new Set(dv.page('Configuration').shop_sizes.map(t => 'option(' + t.name + ')'))], field: 'size' })` |
> | | `BUTTON[add-item]` `BUTTON[generate-inventory]` |
```meta-bind-button
style: primary
label: Generate Inventory
id: generate-inventory
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/generateShopInventory.js
```
```meta-bind-button
style: default
label: Add Item
id: add-item
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/addShopItem.js
    args:
      field: items
      folder: 5. Mechanics/Items
```

`$= await dv.view("views/locationBreadcrumbs", {current: dv.current()})`
# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("views/shopInventory", {current: dv.current()})
```
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>