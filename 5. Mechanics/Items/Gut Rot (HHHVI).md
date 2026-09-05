---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhhvi
  - item/rarity/common
  - item/wondrous/potion
aliases:
  - Gut Rot
attunement: false
rarity: common
type: wondrous
subtype:
  - potion
item_consumable: true
item_uses: 0
item_recharge: long-rest
---
# Gut Rot
*Potion, common*  

- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Crafted%20by\|Crafted by]]
```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```

When you drink this potion, you must succeed on a DC 10 Constitution saving throw or become afflicted with the disease [[/5. Mechanics/Rules/Diseases.md#Gut%20Rot\|gut rot]]. While afflicted with [[/5. Mechanics/Rules/Diseases.md#Gut%20Rot\|gut rot]], any time you attempt to swallow food, you instead suffer `dice:4|noform|noparens|avg` (`4`) necrotic damage and regurgitate that food. At the end of a long rest, you may attempt the saving throw again, ending the disease on a success.

If a creature dies while afflicted with [[/5. Mechanics/Rules/Diseases.md#Gut%20Rot\|gut rot]], a [[/5. Mechanics/Bestiary/Plant/Violet Fungus.md\|violet fungus]] sprouts from the mouldering corpse, growing to full size in `dice:2d6|noform|noparens|avg` (`2d6`) days.

*Source: Hamund's Harvesting Handbook: Volume I p. 129*
