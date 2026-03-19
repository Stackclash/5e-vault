---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/xge
  - item/rarity/common
  - item/tier/minor
  - item/weapon/simple
aliases:
  - Staff of Flowers
one-hand-damage: 1d6
two-hand-damage: 1d8
damage-type: bludgeoning
weight: 4
attunement: false
rarity: common
tier: minor
type: weapon
subtype:
  - simple
item_consumable: false
item_uses: 10
item_recharge: dawn
---
# Staff of Flowers
*Staff, weapon, minor, common*  

- **Damage**:
  - One-handed: 1d6 bludgeoning
  - Two-handed: 1d8 bludgeoning
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Versatile\|Versatile]]
- **Weight**: 4.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains `dice:1d6+4|noform|noparens|avg` (`1d6 + 4`) expended charges daily at dawn. If you expend the last charge, roll a `dice:d20|noform|noparens|avg` (`d20`). On a 1, the staff turns into flower petals and is lost forever.

*Source: Xanathar's Guide to Everything p. 139*
