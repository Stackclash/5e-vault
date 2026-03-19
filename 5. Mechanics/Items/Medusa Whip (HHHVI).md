---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhhvi
  - item/attunement/required
  - item/rarity/rare
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Medusa Whip
one-hand-damage: 1d4
damage-type: slashing
weight: 3
attunement: true
rarity: rare
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 6
item_recharge: none
---
# Medusa Whip
*Weapon ([[/5. Mechanics/Items/Whip.md\|whip]]), rare (requires attunement)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/HHH/HHHVI/MedusaWhip.webp#right)  

- **Damage**: 1d4 slashing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Crafted%20by\|Crafted by]], [[/5. Mechanics/Rules/Item Properties.md#Finesse\|Finesse]], [[/5. Mechanics/Rules/Item Properties.md#Reach\|Reach]]
- **Weight**: 3.0 lbs.

This weapon has 6 charges. When you successfully hit a creature with this weapon, you may choose to expend 1 or more charges from this weapon. If you do, you add `dice:1d6|noform|noparens|avg` (`1d6`) poison damage to your damage roll for every charge expended. This weapon regains 1 charge every hour.

*Source: Hamund's Harvesting Handbook: Volume I p. 134*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
