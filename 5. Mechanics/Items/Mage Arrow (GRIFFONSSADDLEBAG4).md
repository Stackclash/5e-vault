---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag4
  - item/gear/ammunition
  - item/rarity/uncommon
aliases:
  - Mage Arrow
weight: 0.05
attunement: false
rarity: uncommon
type: gear
subtype:
  - ammunition
item_consumable: true
item_uses: 0
item_recharge: none
---
# Mage Arrow
*Ammunition ([[/5. Mechanics/Items/Arrow.md\|arrow]]), uncommon*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag4/Items/Mage-Arrow.webp#right)  

- **Weight**: 0.05 lbs.

When you fire this arrow from a bow at a target within its normal range, you don't make an attack roll for the attack. Instead, the arrow immediately splinters apart into `dice:1d4+4|noform|noparens|avg` (`1d4 + 4`) darts of magical force, as if by the [[/5. Mechanics/Spells/Magic Missile.md\|magic missile]] spell. The darts all strike the target of the attack. The arrow is then destroyed, before it reaches a target.

Other types of magic ammunition of this kind exist, such as mage bolts meant for a crossbow, though arrows are most common.

*Source: The Griffon's Saddlebag, Book 4 p. 1*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
