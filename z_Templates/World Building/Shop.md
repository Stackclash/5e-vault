---
obsidianUIMode: preview
owners:
  - "[[4. World Almanac/NPCs/Arabelle.md|Arabelle]]"
  - "[[4. World Almanac/NPCs/Clovin Belview.md|Clovin Belview]]"
staff:
  - "[[4. World Almanac/NPCs/Bray Martikov.md|Bray Martikov]]"
cost_modifier: 1
items:
  - "[[5. Mechanics/Items/Ale Mug.md|Ale Mug]]"
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | Owner(s) | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | Staff | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
> | Location | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |
> ###### Shop Info
> |||
> |---|---|
> | Cost Modifier | `INPUT[number:cost_modifier]` |
> | Items | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |

# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("shopInventory", {current: dv.current()})
```