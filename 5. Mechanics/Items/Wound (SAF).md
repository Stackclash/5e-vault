---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/saf
  - item/attunement/required
  - item/rarity/rare
  - item/weapon/martial
  - item/weapon/melee
aliases:
  - Wound
one-hand-damage: 1d12
damage-type: slashing
weight: 7
attunement: true
attunement-requirement:
  - barbarian
rarity: rare
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: long-rest
---
# Wound
*Weapon ([[/5. Mechanics/Items/Greataxe.md\|greataxe]]), rare (requires attunement by a barbarian)*  

- **Damage**: 1d12 slashing
- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Heavy\|Heavy]], [[/5. Mechanics/Rules/Item Properties.md#Two-Handed\|Two-Handed]]
- **Weight**: 7.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

The wicked edge of this serrated greataxe is permanently coated in dried blood.

This greataxe has a +1 bonus to attack and damage rolls. Also, while you are raging, your attacks with this weapon deal an extra `dice:2d6|noform|noparens|avg` (`2d6`) necrotic damage, and the target's maximum hit points are decreased in equal amount to the necrotic damage dealt. The target's hit point maximum does not return to normal until it finishes a long rest or its grievous wounds are soothed by a [[/5. Mechanics/Spells/Greater Restoration.md\|greater restoration]] spell.

*Source: Strongholds and Followers p. 144*
