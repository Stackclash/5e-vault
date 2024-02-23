---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/1
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/large
  - monster/type/elemental
statblock: inline
aliases:
  - Giant Strider
---
# [[5. Mechanics\Bestiary\Elemental\Giant Strider.md|Giant Strider]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 137*  

> [!quote]- A quote from Mordenkainen  
> 
> Out of curiosity, I once tamed a giant strider. Several potions of fire resistance later, the creature was purring in my lap, and I didn't feel a thing.

> [!quote]- A quote from Tasha  
> 
> We might have discovered the key to unlock Mordenkainen's frigid heart: magical pets!

These fierce and majestic monsters exhibit attributes of both birds and reptiles, but are truly neither. Giant striders have a supernatural affinity to fire and can spit gouts of flame at distant enemies. They are most often found in tropical, volcanically active areas or regions that similarly provide sources of both water and extreme heat.

Firenewts prize giant striders and seek to adopt them whenever possible. They provide for stables of these creatures in their lairs, and in return, the giant striders voluntarily serve as mounts for firenewt warriors (in this book).

```statblock
"name": "Giant Strider"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "4"
- !!int "12"
- !!int "6"
"speed": "50 ft."
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
- "desc": "Whenever the giant strider is subjected to fire damage, it takes no damage\
    \ and regains a number of hit points equal to half the fire damage dealt."
  "name": "Fire Absorption"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "The giant strider hurls a gout of flame at a point it can see within 60\
    \ feet of it. Each creature in a 10-foot-radius sphere centered on that point\
    \ must make a DC 12 Dexterity saving throw, taking dice: 4d6|avg (4d6) fire\
    \ damage on a failed save, or half as much damage on a successful one. The fire\
    \ spreads around corners, and it ignites flammable objects in that area that aren't\
    \ being worn or carried"
  "name": "Fire Burst (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Elemental/token/giant-strider-mpmm.webp"
```
^statblock

## Environment

hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
