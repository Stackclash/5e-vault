---
obsidianUIMode: preview
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
owners:
  - '[[4. World Almanac/NPCs/Gadof Blinsky.md|Gadof Blinsky]]'
staff: 
cost_modifier: 1
items: 
resources:
  - '[[07 Chapter-5 The Town Of Vallaki#N7. Blinsky Toys|Blinsky Toys]]'
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

