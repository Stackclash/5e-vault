---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/tgs1
  - item/attunement/required
  - item/rarity/rare
  - item/tier/major
  - item/weapon/simple
aliases:
  - Leeching Quarterstaff
one-hand-damage: 1d6
two-hand-damage: 1d8
damage-type: bludgeoning
weight: 4
attunement: true
rarity: rare
tier: major
type: weapon
subtype:
  - simple
item_consumable: false
item_uses: 6
item_recharge: dawn
---
# Leeching Quarterstaff
*Staff, weapon ([[/5. Mechanics/Items/Quarterstaff.md\|quarterstaff]]), major, rare (requires attunement)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/TGS1/Leeching-Quarterstaff.webp#right)  

- **Damage**:
  - One-handed: 1d6 bludgeoning
  - Two-handed: 1d8 bludgeoning
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Versatile\|Versatile]]
- **Weight**: 4.0 lbs.

You gain a +1 bonus to attack and damage rolls made with this magic weapon. This quarterstaff has 6 charges and regains `dice:1d6|noform|noparens|avg` (`1d6`) expended charges daily at dawn. When you hit a target with this weapon, you can expend 1 of its charges to siphon away some of the target's life force to deal an extra `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage with the attack. You regain health equal the amount of necrotic damage dealt in this way. This property has no effect on undead creatures or constructs.

*Source: The Griffon's Saddlebag, Book 1 p. 83*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
