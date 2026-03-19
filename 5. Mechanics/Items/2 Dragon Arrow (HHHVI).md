---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhhvi
  - item/gear/ammunition
  - item/rarity/rare
aliases:
  - +2 Dragon Arrow
weight: 0.05
attunement: false
rarity: rare
type: gear
subtype:
  - ammunition
item_consumable: true
item_uses: 0
item_recharge: none
---
# +2 Dragon Arrow
*Ammunition ([[/5. Mechanics/Items/Arrow.md\|arrow]]), rare*  

- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Crafted%20by\|Crafted by]]
- **Weight**: 0.05 lbs.

You have a +2 bonus to your attack and damage rolls made with this arrow corresponding to its rarity. When you make a successful hit with this arrow, you also deal an additional `dice:2d8|noform|noparens|avg` (`2d8`) damage of the type corresponding to the damage type this arrow was crafted from. You also have advantage on attacks made with this ammunition against any targets with the dragon creature type.

When used in a successful attack, there is a 30 percent chance that this arrow loses all magical properties and becomes a normal arrow.

> [!embed-table]- Dragon Types
> ![[/5. Mechanics/Tables/Dragon Types (HHHVI).md\|Dragon Types]]

*Source: Hamund's Harvesting Handbook: Volume I p. 125*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
