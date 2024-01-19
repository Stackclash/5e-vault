---
obsidianUIMode: preview
owners: 
  - [[4. World Almanac/NPCs/Urwin Martikov.md|Urwin Martikov]]
  - [[4. World Almanac/NPCs/Arrigal.md|Arrigal]]
staff: 
  - [[4. World Almanac/NPCs/Anastrasya Karelova.md|Anastrasya Karelova]]
cost_modifier: 1
items: 
location:
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