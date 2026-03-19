---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/griffonssaddlebag3
  - item/attunement/required
  - item/rarity/rare
  - item/tier/major
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Shipwrecker
one-hand-damage: 1d8
damage-type: piercing
weight: 2
attunement: true
rarity: rare
tier: major
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: none
---
# Shipwrecker
*Weapon ([[/5. Mechanics/Items/War Pick.md\|war pick]]), major, rare (requires attunement)*  
![](https://raw.githubusercontent.com/TheGiddyLimit/homebrew-img/main/img/GriffonsSaddlebag3/Shipwrecker.webp#right)  

- **Damage**: 1d8 piercing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Heavy\|Heavy]]
- **Weight**: 2.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

Barnacles and frost cover this magic war pick, which has the heavy property. Targets hit with this weapon take an extra `dice:1d6|noform|noparens|avg` (`1d6`) cold damage, and if the target is an object or structure, it takes the maximum piercing damage from the weapon, instead of rolling its weapon damage die. If the target is also a vehicle, its maximum speed is reduced by a cumulative 10 feet each time it's hit by the weapon. This penalty to speed remains for 1 minute.

## Drop Anchor

When a creature or effect would move you against your will while you're holding the war pick, you can use your reaction to immediately drop the weapon. When you do, a magical chain tethers you to the weapon, and neither you nor the weapon can be moved against your will until the end of the turn.

*Source: The Griffon's Saddlebag, Book 3 p. 0*
