---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhhvi
  - item/attunement/required
  - item/rarity/rare
  - item/weapon/martial
  - item/weapon/melee
  - item/weapon/simple
  - item/wondrous/generic-variant
aliases:
  - Demon Needle
  - Demon Needle Lance
  - Demon Needle Pike
  - Demon Needle Spear
attunement: true
rarity: rare
type: weapon
subtype:
  - martial
  - melee
  - simple
item_consumable: false
item_uses: 0
item_recharge: long-rest
---
# Demon Needle
*Rare (requires attunement)*  

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

When you attack a creature with this weapon and roll a 20 on the attack roll, the target takes an extra 10 necrotic damage and the target's hit point maximum is reduced by the same amount of necrotic damage it took. If this effect reduces a creature's hit point maximum to 0, the creature dies.

This reduction to a creature's hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like [[/5. Mechanics/Spells/Greater Restoration.md\|greater restoration]].

*Source: Hamund's Harvesting Handbook: Volume I p. 124*
