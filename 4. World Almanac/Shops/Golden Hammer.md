---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
resources: []
owners: []
staff: []
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Greatsword.md|Greatsword]]"
  - "[[5. Mechanics/Items/Half Plate Armor.md|Half Plate Armor]]"
  - "[[5. Mechanics/Items/Shield.md|Shield]]"
  - "[[5. Mechanics/Items/Quarterstaff.md|Quarterstaff]]"
  - "[[5. Mechanics/Items/Halberd.md|Halberd]]"
  - "[[5. Mechanics/Items/Padded Armor.md|Padded Armor]]"
  - "[[5. Mechanics/Items/Lance.md|Lance]]"
  - "[[5. Mechanics/Items/Splint Armor.md|Splint Armor]]"
  - "[[5. Mechanics/Items/Scale Mail.md|Scale Mail]]"
  - "[[5. Mechanics/Items/Shield Of Expression (XGE).md|Shield Of Expression (XGE)]]"
  - "[[5. Mechanics/Items/Moon Touched Sword (XGE).md|Moon Touched Sword (XGE)]]"
  - "[[5. Mechanics/Items/Cast Off Armor (XGE).md|Cast Off Armor (XGE)]]"
  - "[[5. Mechanics/Items/Silver Star Cane (GRIFFONSSADDLEBAG2).md|Silver Star Cane (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Intrepid Knife (GRIFFONSSADDLEBAG4).md|Intrepid Knife (GRIFFONSSADDLEBAG4)]]"
  - "[[5. Mechanics/Items/Campers Crutch (GRIFFONSSADDLEBAG2).md|Campers Crutch (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Armor Of Gleaming (XGE).md|Armor Of Gleaming (XGE)]]"
  - "[[5. Mechanics/Items/Krakens Whip (TGS1).md|Krakens Whip (TGS1)]]"
  - "[[5. Mechanics/Items/Jocatian Rebuker (GRIFFONSSADDLEBAG2).md|Jocatian Rebuker (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Retaliating Shield Of Ink (TGS1).md|Retaliating Shield Of Ink (TGS1)]]"
  - "[[5. Mechanics/Items/Warhammer Of Eruptions (GRIFFONSSADDLEBAG2).md|Warhammer Of Eruptions (GRIFFONSSADDLEBAG2)]]"
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
