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
  - item/wondrous/generic-variant
aliases:
  - Axe of the Devourer
  - Battleaxe of the Devourer
  - Greataxe of the Devourer
attunement: true
rarity: very-rare
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: long-rest
---
# Axe of the Devourer
*Cursed item, very rare (requires attunement)*  

- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Cursed%20Items\|Cursed]]
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

Whenever you deal a lethal blow to a creature with this weapon, your maximum and current hit points increase by an amount equal to the amount of hit points that creature had remaining just before you killed it. This increase remains until the end of your next long rest.

## Curse:

The lingering hunger of this weapon compels you to not wield anything else, forcing you to only use this weapon when making weapon attacks against other creatures. Any time that you increase your hit point maximum beyond double its original amount using the ability of this weapon, you must make a DC 16 Wisdom saving throw. On a failure, you are wracked with extreme hunger, suffering 1 point of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]] until you consume at least 5 pounds of food.

*Source: Hamund's Harvesting Handbook: Volume III p. 82*
