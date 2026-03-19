---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/dmg
  - item/rarity/rare
  - item/tier/major
  - item/weapon/martial
  - item/weapon/melee
  - item/weapon/simple
  - item/wondrous/generic-variant
aliases:
  - Giant Slayer
  - Giant Slayer Battleaxe
  - Giant Slayer Double-Bladed Scimitar
  - Giant Slayer Greataxe
  - Giant Slayer Greatsword
  - Giant Slayer Handaxe
  - Giant Slayer Longsword
  - Giant Slayer Rapier
  - Giant Slayer Scimitar
  - Giant Slayer Shortsword
attunement: false
rarity: rare
tier: major
type: weapon
subtype:
  - martial
  - melee
  - simple
item_consumable: false
item_uses: 0
item_recharge: none
---
# Giant Slayer
*Major, rare*  
![[/5. Mechanics/Items/img/giant-slayer.webp#right]]  

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

You gain a +1 bonus to attack and damage rolls made with this magic weapon.

When you hit a giant with it, the giant takes an extra `dice:2d6|noform|noparens|avg` (`2d6`) damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]]. For the purpose of this weapon, "giant" refers to any creature with the giant type, including ettins and trolls.

*Source: Dungeon Master's Guide p. 172. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
