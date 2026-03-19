---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
resources: []
owners: []
staff: []
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Glaive.md|Glaive]]"
  - "[[5. Mechanics/Items/Chain Mail.md|Chain Mail]]"
  - "[[5. Mechanics/Items/Fragmentation Grenade.md|Fragmentation Grenade]]"
  - "[[5. Mechanics/Items/Hand Crossbow.md|Hand Crossbow]]"
  - "[[5. Mechanics/Items/Wooden Breastplate (HHHVI).md|Wooden Breastplate (HHHVI)]]"
  - "[[5. Mechanics/Items/Staff Of Flowers (XGE).md|Staff Of Flowers (XGE)]]"
  - "[[5. Mechanics/Items/Smoldering Armor (XGE).md|Smoldering Armor (XGE)]]"
  - "[[5. Mechanics/Items/Staff Of Birdcalls (XGE).md|Staff Of Birdcalls (XGE)]]"
  - "[[5. Mechanics/Items/Silver Star Cane (GRIFFONSSADDLEBAG2).md|Silver Star Cane (GRIFFONSSADDLEBAG2)]]"
tags:
  - shop
  - location
type: Blacksmith
size: Small
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
> ###### Shop Settings
> |||
> |---|---|
> | **Shop Type** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: dv.page('Configuration').shop_types.map(t => 'option(' + t.name + ')'), field: 'type' })` |
> | **Shop Size** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: [...new Set(dv.page('Configuration').shop_sizes.map(t => 'option(' + t.name + ')'))], field: 'size' })` |
> | | `BUTTON[generate-inventory]` |
```meta-bind-button
style: primary
label: Generate Inventory
id: generate-inventory
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/generateShopInventory.js
```

`$= await dv.view("views/locationBreadcrumbs", {current: dv.current()})`
# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("views/shopInventory", {current: dv.current()})
```
