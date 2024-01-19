---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
owners:
  - "[[4. World Almanac/NPCs/Urwin Martikov.md|Urwin Martikov]]"
  - "[[4. World Almanac/NPCs/Danika Dorakova.md|Danika Dorakova]]"
staff:
  - "[[4. World Almanac/NPCs/Brom Martikov.md|Brom Martikov]]"
  - "[[4. World Almanac/NPCs/Bray Martikov.md|Bray Martikov]]"
cost_modifier: 1
items:
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
> | **Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |
> ###### Inventory Info
> |||
> |---|---|
> | **Cost Modifier** | `INPUT[number:cost_modifier]` |
> | **Items** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |

# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("shopInventory", {current: dv.current()})
```