---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
resources: []
owners: []
staff: []
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Quarterstaff.md|Quarterstaff]]"
  - "[[5. Mechanics/Items/Battleaxe.md|Battleaxe]]"
  - "[[5. Mechanics/Items/Revolver.md|Revolver]]"
  - "[[5. Mechanics/Items/Gunpowder Keg.md|Gunpowder Keg]]"
  - "[[5. Mechanics/Items/Sickle.md|Sickle]]"
  - "[[5. Mechanics/Items/Blowgun.md|Blowgun]]"
  - "[[5. Mechanics/Items/War Pick.md|War Pick]]"
  - "[[5. Mechanics/Items/Chain Shirt.md|Chain Shirt]]"
  - "[[5. Mechanics/Items/Scale Mail.md|Scale Mail]]"
  - "[[5. Mechanics/Items/Rope Caster (GRIFFONSSADDLEBAG2).md|Rope Caster (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Staff Of Birdcalls (XGE).md|Staff Of Birdcalls (XGE)]]"
  - "[[5. Mechanics/Items/Moon Touched Sword (XGE).md|Moon Touched Sword (XGE)]]"
  - "[[5. Mechanics/Items/Silver Star Cane (GRIFFONSSADDLEBAG2).md|Silver Star Cane (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Harvest (GRIFFONSSADDLEBAG2).md|Harvest (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Cactus Mace (TGS1).md|Cactus Mace (TGS1)]]"
  - "[[5. Mechanics/Items/Candleflame Bow (GRIFFONSSADDLEBAG2).md|Candleflame Bow (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Dagger Of The Ogre Mage (TGS1).md|Dagger Of The Ogre Mage (TGS1)]]"
  - "[[5. Mechanics/Items/Staff Of The Vineyard (GRIFFONSSADDLEBAG2).md|Staff Of The Vineyard (GRIFFONSSADDLEBAG2)]]"
  - "[[5. Mechanics/Items/Yeenoghus Wrath (HHHVII).md|Yeenoghus Wrath (HHHVII)]]"
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
