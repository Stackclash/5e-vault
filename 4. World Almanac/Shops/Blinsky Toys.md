---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
owners:
  - "[[4. World Almanac/NPCs/Gadof Blinsky (COS).md|Gadof Blinsky (COS)]]"
staff:
cost_modifier: 1
items:
resources:
  - "[[07 Chapter-5 The Town Of Vallaki#N7. Blinsky Toys|Blinsky Toys]]"
tags:
  - shop
  - location
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