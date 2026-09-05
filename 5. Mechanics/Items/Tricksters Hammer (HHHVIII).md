---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhhviii
  - item/attunement/required
  - item/rarity/very-rare
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Trickster's Hammer
one-hand-damage: 1d8
two-hand-damage: 1d10
damage-type: bludgeoning
weight: 2
attunement: true
rarity: very-rare
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: none
---
# Trickster's Hammer
*Weapon ([[/5. Mechanics/Items/Warhammer.md\|warhammer]]), very rare (requires attunement)*  

- **Damage**:
  - One-handed: 1d8 bludgeoning
  - Two-handed: 1d10 bludgeoning
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Crafted%20by\|Crafted by]], [[/5. Mechanics/Rules/Item Properties.md#Versatile\|Versatile]]
- **Weight**: 2.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

You have a +2 bonus to attack and damage rolls made with this weapon. When you make a successful critical hit against a creature with this weapon, you add a random extra effect to your attack. Roll a `dice:d4|noform|noparens|avg` (`d4`) and consult the table below for your result:

**Effect**

`dice: [[/5. Mechanics/Items/Tricksters Hammer (HHHVIII).md#^effect]]`

| dice: d4 | Effect |
|----------|--------|
| 1 | You deal `dice:1d8\|noform\|noparens\|avg` (`1d8`) necrotic damage and gain temporary hit points equal to the damage dealt (this damage is not doubled). |
| 2 | You deal an additional `dice:2d8\|noform\|noparens\|avg` (`2d8`) lightning damage to your target (this damage is not doubled). |
| 3 | Your target must succeed on a DC 16 Constitution saving throw or become [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the end of your next turn. |
| 4 | You teleport, along with any equipment you are wearing or carrying, up to 60 feet to an unoccupied space you can see. |
^effect

*Source: Hamund's Harvesting Handbook: Volume III p. 99*
