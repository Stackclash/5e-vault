---
obsidianUIMode: preview
cssclasses: json5e-item
tags:
  - item
  - compendium/src/5e/dmg
  - item/attunement/required
  - item/rarity/very-rare
  - item/tier/major
  - item/wondrous/ring
aliases:
  - Ring of Regeneration
attunement: true
rarity: very-rare
tier: major
type: wondrous
subtype:
  - ring
item_consumable: false
item_uses: 0
item_recharge: none
---
# Ring of Regeneration
*Ring, major, very rare (requires attunement)*  
![[/5. Mechanics/Items/img/ring-of-regeneration.webp#right]]  


While wearing this ring, you regain `dice:1d6|noform|noparens|avg` (`1d6`) hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after `dice:1d6+1|noform|noparens|avg` (`1d6 + 1`) days if you have at least 1 hit point the whole time.

*Source: Dungeon Master's Guide p. 191. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```dataviewjs
await dv.view("views/itemPrice", {current: dv.current()})
```
