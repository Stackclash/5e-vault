---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/tce
  - item/attunement/required
  - item/rarity/legendary
  - item/wondrous/tattoo
aliases:
  - Blood Fury Tattoo
attunement: true
rarity: legendary
type: wondrous
subtype:
  - tattoo
item_consumable: false
item_uses: 10
item_recharge: dawn
---
# Blood Fury Tattoo
*Wondrous item (tattoo), legendary (requires attunement)*  

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

Produced by a special needle, this magic tattoo evokes fury in its form and colors.

## Tattoo Attunement

To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.

If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.

## Bloodthirsty Strikes

The tattoo has 10 charges, and it regains all expended charges daily at dawn. While this tattoo is on your skin, you gain the following benefits:

- When you hit a creature with a weapon attack, you can expend a charge to deal an extra `dice:4d6|noform|noparens|avg` (`4d6`) necrotic damage to the target, and you regain a number of hit points equal to the necrotic damage dealt.  
- When a creature you can see damages you, you can expend a charge and use your reaction to make a melee attack against that creature, with advantage on your attack roll.  

*Source: Tasha's Cauldron of Everything p. 122*
