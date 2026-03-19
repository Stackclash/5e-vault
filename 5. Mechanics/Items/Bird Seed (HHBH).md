---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhbh
  - item/gear/herb
  - item/rarity/common
aliases:
  - Bird Seed
cost: 100
attunement: false
rarity: common
type: gear
subtype:
  - herb
item_consumable: false
item_uses: 0
item_recharge: none
---
# Bird Seed
*Herb, common*  

- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Herb\|Herb]]
- **Cost**: 1 gp
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

## Description:

Several plants rely on birds to eat their seeds in order to propagate themselves throughout the land. However, the grass known as avis poales reverses this method by simply transforming its seeds into birds to send them away. How this highly atypical 'bird seed' came to be is up for debate, but one legend has it that they are the hairs of a bird goddess, come down to the Material Plane to spread her children across our world.

## Effect:

This herb has `dice:1d4|noform|noparens|avg` (`1d4`) charges. As an action, you may use one charge to scatter a number of seeds on the ground, causing them to change into a small flock of birds that fly off immediately. These birds are magical in nature and disappear after 1 minute.

*Source: Hamund's Herbalism Handbook p. 7*
