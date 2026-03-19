---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag2
  - item/attunement/required
  - item/rarity/legendary
  - item/tier/major
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Mage Eater Scythe
one-hand-damage: 1d10
damage-type: slashing
weight: 6
attunement: true
rarity: legendary
tier: major
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: none
---
# Mage Eater Scythe
*Weapon ([[/5. Mechanics/Items/Glaive.md\|glaive]]), major, legendary (requires attunement)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag2/Items/Mage-Eater-Scythe.webp#right)  

- **Damage**: 1d10 slashing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Heavy\|Heavy]], [[/5. Mechanics/Rules/Item Properties.md#Reach\|Reach]], [[/5. Mechanics/Rules/Item Properties.md#Two-Handed\|Two-Handed]]
- **Weight**: 6.0 lbs.

This dark metal scythe bears a fiendish grin along its blade. You gain a +2 bonus to attack and damage rolls made with this magic weapon. While holding the scythe, you have advantage on saving throws against spells and other magical effects.

When you hit a creature with an attack using this scythe, you can spend 2 or more Hit Dice (maximum 4) to deal extra necrotic damage, in addition to the weapon's damage. The extra damage is `dice:1d6|noform|noparens|avg` (`1d6`) for each Hit Die you spend. If the creature has cast a spell since the end of your last turn, the extra damage dice become `dice:d10|noform|noparens|avg` (`d10`)s, instead of `dice:d6|noform|noparens|avg` (`d6`)s, and that creature loses a total number of spell slot levels equal to the number of Hit Dice you spend. Starting with the highest spell slot level that creature has (up to 4th), subtract each slot level from the total, if possible, before moving on to the next remaining spell slot level.

Alternatively, while holding the scythe, you can use an action to spend 5 Hit Dice to create a magical barrier around yourself. While the barrier exists, you can't be affected or detected by spells of 5th level or lower unless you choose to be, and friendly creatures within 10 feet of you have advantage of saving throws against spells and other magical effects. The barrier remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 minute, or until you drop or stow the scythe.

*Source: The Griffon's Saddlebag, Book 2 p. 117*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
