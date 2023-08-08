---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/elemental
statblock: inline
---
# Firenewt Warrior
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 125, Volo's Guide to Monsters p. 142*  

A firenewt warrior can spew fire. Many of these warriors have a close relationship with giant striders (in this book). They provide shelter, food, and breeding grounds in their lairs for giant striders, which then voluntarily serve them as mounts.

## Firenewts

Originally from the Elemental Plane of Fire, firenewts can be found on the Material Plane near hot springs and volcanoes. These amphibians need hot water to live, becoming sluggish after spending a week away from a source of moist heat. Firenewts therefore delve for sources of heat in the earth, and a firenewt lair features a network of channels and sluices to circulate hot liquid through the area.

## Stat Block

```statblock
"name": "Firenewt Warrior"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "7"
- !!int "11"
- !!int "8"
"speed": "walk 30 ft."
"damage_immunities": "fire"
"senses": "passive Perception 10"
"languages": "Draconic, Ignan"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt makes two Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt spits fire at a creature within 10 feet of it. The creature\
    \ must make a DC 11 Dexterity saving throw, taking 9 (dice: 2d8|avg (2d8))\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Spit Fire (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "6. Mechanics/Bestiary/Elemental/token/firenewt-warrior.png"
```
^statblock

## Environment

desert, hill, mountain, underdark