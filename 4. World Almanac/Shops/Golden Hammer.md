---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
resources: []
owners: []
staff: []
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Pike.md|Pike]]"
  - "[[5. Mechanics/Items/Battleaxe.md|Battleaxe]]"
  - "[[5. Mechanics/Items/Club.md|Club]]"
  - "[[5. Mechanics/Items/Greataxe.md|Greataxe]]"
  - "[[5. Mechanics/Items/Studded Leather Armor.md|Studded Leather Armor]]"
  - "[[5. Mechanics/Items/Silver Star Cane (GRIFFONSSADDLEBAG2).md|Silver Star Cane (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Smoldering Armor (XGE).md|Smoldering Armor (XGE)]]"
  - "[[5. Mechanics/Items/Armor Of Gleaming (XGE).md|Armor Of Gleaming (XGE)]]"
  - "[[5. Mechanics/Items/Moon Touched Sword (XGE).md|Moon Touched Sword (XGE)]]"
  - "[[5. Mechanics/Items/Redsmith Hammer (GRIFFONSSADDLEBAG2).md|Redsmith Hammer (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Shield Of Expression (XGE).md|Shield Of Expression (XGE)]]"
  - "[[5. Mechanics/Items/Campers Crutch (GRIFFONSSADDLEBAG2).md|Campers Crutch (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Cast Off Armor (XGE).md|Cast Off Armor (XGE)]]"
  - "[[5. Mechanics/Items/Weapon Of Showmanship (TGS1).md|Weapon Of Showmanship (TGS1)]]"
  - "[[5. Mechanics/Items/Intrepid Knife (GRIFFONSSADDLEBAG4).md|Intrepid Knife (GRIFFONSSADDLEBAG4)]]"
  - "[[5. Mechanics/Items/Bane Shield (GRIFFONSSADDLEBAG2).md|Bane Shield (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Scorpion Lasher (GRIFFONSSADDLEBAG2).md|Scorpion Lasher (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Wildskin Armor (GRIFFONSSADDLEBAG2).md|Wildskin Armor (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Club Of Dancing (GRIFFONSSADDLEBAG2).md|Club Of Dancing (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Armor Of Vulnerability Slashing.md|Armor Of Vulnerability Slashing]]"
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
```datacorejsx
const { ShopInventory } = await dc.require("z_Scripts/Datacore/ShopInventory.tsx")
return function View() { return <ShopInventory /> }
```
