---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/hhbh
  - item/gear/herb
  - item/rarity/rare
aliases:
  - Pinecone of Cold
cost: 50000
attunement: false
rarity: rare
type: gear
subtype:
  - herb
item_consumable: false
item_uses: 0
item_recharge: none
---
# Pinecone of Cold
*Herb, rare*  

- **Properties**: [[/5. Mechanics/Rules/Item Properties.md#Herb\|Herb]]
- **Cost**: 500 gp

## Description:

Contained within these peculiar pinecones is a gas that creates a remarkable endothermic reaction once it touches snow, causing it to freeze immediately and encase the pinecone in ice. In this self-imposed stasis, the pinecone is protected from all other elements and scavenging animals, then is ready to take root as soon as the spring thaw comes. If you find one of these pinecones that have failed to detonate, you can trigger it with a small amount of force, causing it to become a bomb with a freezing payload.

## Effect:

As an action, you may throw this pinecone up to 20 feet, causing it to explode upon impact. All creatures within 5 feet of impact must make a DC 15 Constitution saving throw, suffering `dice:4d6|noform|noparens|avg` (`4d6`) cold damage on a failure or half that on a success.

*Source: Hamund's Herbalism Handbook p. 27*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
