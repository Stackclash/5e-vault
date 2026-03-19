---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/cos
  - item/rarity/unknown/magic
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Yester Hill Axe
one-hand-damage: 1d8
two-hand-damage: 1d10
damage-type: slashing
weight: 2
attunement: false
rarity: unknown\Magic
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: none
---
# Yester Hill Axe
*Weapon ([[/5. Mechanics/Items/Battleaxe.md\|battleaxe]])*  

- **Damage**:
  - One-handed: 1d8 slashing
  - Two-handed: 1d10 slashing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Versatile\|Versatile]]
- **Weight**: 2.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

The axe's handle is carved with leaves and vines, and it weighs half as much as a normal battleaxe. When the axe hits a plant, whether an ordinary plant or a plant creature, the target takes an extra `dice:1d8|noform|noparens|avg` (`1d8`) slashing damage. When a creature of non-good alignment wields the axe, it sprouts thorns whenever its wielder makes an attack with it. These thorns prick the wielder for 1 piercing damage after the attack is made, and this damage is considered magical.

*Source: Curse of Strahd p. 198*
