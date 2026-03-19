---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/dmg
  - item/attunement/required
  - item/rarity/very-rare
  - item/tier/major
  - item/weapon/martial
  - item/weapon/melee
  - item/wondrous/generic-variant
aliases:
  - Sword of Sharpness
  - Double-Bladed Scimitar of Sharpness
  - Greatsword of Sharpness
  - Longsword of Sharpness
  - Scimitar of Sharpness
attunement: true
rarity: very-rare
tier: major
type: weapon
subtype:
  - martial
  - melee
item_consumable: false
item_uses: 0
item_recharge: none
---
# Sword of Sharpness
*Major, very rare (requires attunement)*  
![[/5. Mechanics/Items/img/sword-of-sharpness.webp#right\|Sword of Sharpness (Greatsword)]]  


When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.

When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another `dice:d20|noform|noparens|avg` (`d20`). If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.

> [!note]
> Note: According to the SRD, it is an extra `dice:4d6|noform|noparens|avg` (`4d6`) slashing damage, although this is incorrect (https://rpg.stackexchange.com/a/174522/53884).

In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.

*Source: Dungeon Master's Guide p. 206. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
