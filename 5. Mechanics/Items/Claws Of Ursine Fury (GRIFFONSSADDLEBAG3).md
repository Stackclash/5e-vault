---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag3
  - item/attunement/required
  - item/rarity/rare
  - item/tier/major
aliases:
  - Claws of Ursine Fury
attunement: true
attunement-requirement:
  - barbarian
rarity: rare
tier: major
item_consumable: false
item_uses: 0
item_recharge: none
---
# Claws of Ursine Fury
*Wondrous item, major, rare (requires attunement by a barbarian)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag3/Claws-of-Ursine-Fury.webp#right)  

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

These clawed gauntlets were fashioned from the remains of a mighty bear, whose essence empowers you while you're raging. Their claws turn your unarmed strikes with your hands into magic weapons that deal slashing damage with a damage die of `dice:1d8|noform|noparens|avg` (`1d8`) (unless your unarmed strike damage is already higher). You must be raging to gain this benefit. When you take the [[/5. Mechanics/Rules/Actions.md#Attack\|Attack]] action and make one or more unarmed strikes with the claws, you can make one additional unarmed strike with them as a bonus action.

When you roll a 20 on an attack roll made with the claws, the target must succeed on a DC 15 Constitution saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] and maimed. A maimed target takes `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage at the start of each of its turns for 1 minute. This damage ignores resistance and immunity. The effect ends early if the target receives magical healing or if a creature within reach of the target uses its action to make a successful DC 15 Wisdom ([[/5. Mechanics/Rules/Skills.md#Medicine\|Medicine]]) check. A creature can't be maimed more than once at a time, and a construct or undead creature can't be maimed.

*Source: The Griffon's Saddlebag, Book 3 p. 0*
