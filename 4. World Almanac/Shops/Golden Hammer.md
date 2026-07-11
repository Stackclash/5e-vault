---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
resources: []
owners: []
staff: []
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Shield.md|Shield]]"
  - "[[5. Mechanics/Items/Ring Mail.md|Ring Mail]]"
  - "[[5. Mechanics/Items/Dagger.md|Dagger]]"
  - "[[5. Mechanics/Items/Padded Armor.md|Padded Armor]]"
  - "[[5. Mechanics/Items/Half Plate Armor.md|Half Plate Armor]]"
  - "[[5. Mechanics/Items/Plate Armor.md|Plate Armor]]"
  - "[[5. Mechanics/Items/Mace.md|Mace]]"
  - "[[5. Mechanics/Items/Maul.md|Maul]]"
  - "[[5. Mechanics/Items/Greataxe.md|Greataxe]]"
  - "[[5. Mechanics/Items/Greatclub.md|Greatclub]]"
  - "[[5. Mechanics/Items/Smoldering Armor (XGE).md|Smoldering Armor (XGE)]]"
  - "[[5. Mechanics/Items/Sun And Moon Shield (GRIFFONSSADDLEBAG3).md|Sun And Moon Shield (GRIFFONSSADDLEBAG3)]]"
  - "[[5. Mechanics/Items/Cast Off Armor (XGE).md|Cast Off Armor (XGE)]]"
  - "[[5. Mechanics/Items/Silver Star Cane (GRIFFONSSADDLEBAG2).md|Silver Star Cane (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Weapon Of Showmanship (TGS1).md|Weapon Of Showmanship (TGS1)]]"
  - "[[5. Mechanics/Items/Redsmith Hammer (GRIFFONSSADDLEBAG2).md|Redsmith Hammer (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Armor Of Gleaming (XGE).md|Armor Of Gleaming (XGE)]]"
  - "[[5. Mechanics/Items/Whip Of The Copper Eel (GRIFFONSSADDLEBAG3).md|Whip Of The Copper Eel (GRIFFONSSADDLEBAG3)]]"
  - "[[5. Mechanics/Items/Staff Of The Whirling Wyrm (GRIFFONSSADDLEBAG3).md|Staff Of The Whirling Wyrm (GRIFFONSSADDLEBAG3)]]"
  - "[[5. Mechanics/Items/Covolt Dagger (GRIFFONSSADDLEBAG2).md|Covolt Dagger (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Steel Hawk Handaxe (GRIFFONSSADDLEBAG3).md|Steel Hawk Handaxe (GRIFFONSSADDLEBAG3)]]"
  - "[[5. Mechanics/Items/Staff Of The Snail Rare (GRIFFONSSADDLEBAG3).md|Staff Of The Snail Rare (GRIFFONSSADDLEBAG3)]]"
tags:
  - shop
  - location
type: Blacksmith
size: Large
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
