---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/tce
  - item/attunement/required
  - item/gear/spellcasting-focus
  - item/rarity/rare
aliases:
  - Outer Essence Shard
weight: 1
attunement: true
attunement-requirement:
  - sorcerer
rarity: rare
type: gear
subtype:
  - spellcasting-focus
item_consumable: false
item_uses: 0
item_recharge: none
---
# Outer Essence Shard
*Wondrous item, spellcasting focus, rare (requires attunement by a sorcerer)*  

- **Weight**: 1.0 lbs.
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.

Roll a `dice:d4|noform|noparens|avg` (`d4`) and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.

**Outer Essence Shards**

`dice: [[/5. Mechanics/Items/Outer Essence Shard (TCE).md#^outer-essence-shards]]`

| dice: d4 | Property | Shard |
|----------|----------|-------|
| 1 | Lawful | [[/5. Mechanics/Items/Outer Essence Shard Lawful (TCE).md\|Outer Essence Shard (Lawful)]] |
| 2 | Chaotic | [[/5. Mechanics/Items/Outer Essence Shard Chaotic (TCE).md\|Outer Essence Shard (Chaotic)]] |
| 3 | Good | [[/5. Mechanics/Items/Outer Essence Shard Good (TCE).md\|Outer Essence Shard (Good)]] |
| 4 | Evil | [[/5. Mechanics/Items/Outer Essence Shard Evil (TCE).md\|Outer Essence Shard (Evil)]] |
^outer-essence-shards

*Source: Tasha's Cauldron of Everything p. 133*
