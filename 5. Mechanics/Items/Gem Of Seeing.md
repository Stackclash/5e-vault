---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/dmg
  - item/attunement/required
  - item/rarity/rare
  - item/tier/major
aliases:
  - Gem of Seeing
weight: 1
attunement: true
rarity: rare
tier: major
item_consumable: false
item_uses: 3
item_recharge: dawn
---
# Gem of Seeing
*Wondrous item, major, rare (requires attunement)*  
![[/5. Mechanics/Items/img/gem-of-seeing.webp#right]]  

- **Weight**: 1.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have [[/5. Mechanics/Rules/Senses.md#Truesight\|truesight]] out to 120 feet when you peer through the gem.

The gem regains `dice:1d3|noform|noparens|avg` (`1d3`) expended charges daily at dawn.

*Source: Dungeon Master's Guide p. 172. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
