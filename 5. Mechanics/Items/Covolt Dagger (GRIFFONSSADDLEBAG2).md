---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag2
  - item/rarity/uncommon
  - item/tier/major
  - item/weapon/melee
  - item/weapon/simple
aliases:
  - Covolt Dagger
one-hand-damage: 1d4
damage-type: piercing
range: 20\60
weight: 1
attunement: false
rarity: uncommon
tier: major
type: weapon
subtype:
  - melee
  - simple
item_consumable: false
item_uses: 0
item_recharge: none
---
# Covolt Dagger
*Weapon ([[/5. Mechanics/Items/Dagger.md\|dagger]]), major, uncommon*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Covolt-Dagger.webp#right)  

- **Damage**: 1d4 piercing
- **Range**: 20/60
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Finesse\|Finesse]], [[/5. Mechanics/Rules/Item Properties.md#Light\|Light]], [[/5. Mechanics/Rules/Item Properties.md#Thrown\|Thrown]]
- **Weight**: 1.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

This angular dagger is forged with covolt, an elemental blue metal that carries storm-like properties. When you score a critical hit against a target with an attack made with this magic weapon, the target takes an extra `dice:1d8|noform|noparens|avg` (`1d8`) lightning damage and can't take reactions until the start of its next turn.

*Source: The Griffon's Saddlebag, Book 2 p. 66*
