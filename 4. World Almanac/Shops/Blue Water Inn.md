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
  - "[[Assassins Blood|Assassin's Blood]]"
  - "[[5. Mechanics/Items/Potion Of Healing.md|Potion Of Healing]]"
  - "[[5. Mechanics/Items/Potion Of Greater Healing.md|Potion Of Greater Healing]]"
  - "[[5. Mechanics/Items/Potion Of Healing Gv.md|Potion Of Healing Gv]]"
  - "[[5. Mechanics/Items/Potion Of Supreme Healing.md|Potion Of Supreme Healing]]"
  - "[[5. Mechanics/Items/Heavy Crossbow.md|Heavy Crossbow]]"
  - "[[5. Mechanics/Items/Draft Horse.md|Draft Horse]]"
  - "[[5. Mechanics/Items/Riding Horse.md|Riding Horse]]"
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
> | **Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |
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