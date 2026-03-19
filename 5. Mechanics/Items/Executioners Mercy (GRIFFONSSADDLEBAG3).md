---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag3
  - item/attunement/required
  - item/rarity/very-rare
  - item/tier/major
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Executioner's Mercy
one-hand-damage: 2d6
damage-type: slashing
weight: 6
attunement: true
attunement-requirement:
  - lawful creature
rarity: very-rare
tier: major
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 4
item_recharge: dawn
---
# Executioner's Mercy
*Weapon ([[/5. Mechanics/Items/Greatsword.md\|greatsword]]), major, very rare (requires attunement by a lawful creature)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag3/Executioners-Mercy.webp#right)  

- **Damage**: 2d6 slashing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Heavy\|Heavy]], [[/5. Mechanics/Rules/Item Properties.md#Two-Handed\|Two-Handed]]
- **Weight**: 6.0 lbs.

This heavy blade is inscribed with old tenets of justice and mercy. When you hit a [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] or [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] creature for the first time on each of your turns with an attack using this magic weapon, it deals an extra 10 force damage, and one creature of your choice that you can see within 10 feet of you gains 10 temporary hit points.

The sword has 4 charges and regains all expended charges daily at dawn. As a bonus action, you can expend 1 of the weapon's charges to touch a creature within your reach with the flat of the blade. For 1 minute, that creature becomes warded against death. While this ward is active, the creature has resistance to slashing damage, and if it is reduced to 0 hit points but not killed outright, the ward is consumed and the creature drops to 1 hit point instead. The effect then ends.

*Source: The Griffon's Saddlebag, Book 3 p. 0*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
