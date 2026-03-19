---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/tgs1
  - item/attunement/required
  - item/rarity/rare
  - item/tier/major
aliases:
  - Force Gauntlet
attunement: true
rarity: rare
tier: major
item_consumable: false
item_uses: 5
item_recharge: dawn
---
# Force Gauntlet
*Wondrous item, major, rare (requires attunement)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/TGS1/Force-Gauntlet.webp#right)  

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

This jeweled gauntlet has 5 charges and regains `dice:1d4+1|noform|noparens|avg` (`1d4 + 1`) expended charges daily at dawn. When you make a melee attack with a hand that's wearing this gauntlet, you can choose to expend 1 of its charges as part of the attack. If it hits, the target takes an extra `dice:2d6|noform|noparens|avg` (`2d6`) force damage from the attack and must make a DC 15 Strength saving throw. On a failure, the target is pushed 10 feet away from you. On a success, you're pushed 10 feet away from it instead. Targets two or more sizes larger than you automatically succeed on the saving throw.

*Source: The Griffon's Saddlebag, Book 1 p. 66*
