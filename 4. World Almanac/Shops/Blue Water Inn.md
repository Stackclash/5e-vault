---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
owners:
  - "[[4. World Almanac/NPCs/Urwin Martikov.md|Urwin Martikov]]"
  - "[[4. World Almanac/NPCs/Danika Dorakova.md|Danika Dorakova]]"
staff:
  - "[[4. World Almanac/NPCs/Brom Martikov.md|Brom Martikov]]"
  - "[[4. World Almanac/NPCs/Bray Martikov.md|Bray Martikov]]"
cost_modifier: 1000
items:
  - "[[5. Mechanics/Items/Amulet Of The Dark Prince.md|Amulet Of The Dark Prince]]"
tags:
  - shop
  - location
---
> [!infobox | wsmall]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
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
