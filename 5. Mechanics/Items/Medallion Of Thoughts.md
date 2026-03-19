---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/dmg
  - item/attunement/required
  - item/rarity/uncommon
  - item/tier/major
aliases:
  - Medallion of Thoughts
weight: 1
attunement: true
rarity: uncommon
tier: major
item_consumable: false
item_uses: 3
item_recharge: dawn
---
# Medallion of Thoughts
*Wondrous item, major, uncommon (requires attunement)*  
![[/5. Mechanics/Items/img/medallion-of-thoughts.webp#right]]  

- **Weight**: 1.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the [[/5. Mechanics/Spells/Detect Thoughts.md\|detect thoughts]] spell (save DC 13) from it. The medallion regains `dice:1d3|noform|noparens|avg` (`1d3`) expended charges daily at dawn.

*Source: Dungeon Master's Guide p. 181. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
