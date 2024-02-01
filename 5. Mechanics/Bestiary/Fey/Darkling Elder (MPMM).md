---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/2
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fey
statblock: inline
aliases: ["Darkling Elder"]
---
# [[5. Mechanics\Bestiary\Fey\Darkling Elder (MPMM).md|Darkling Elder]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 84*  

A wise and respected darkling can undergo a ritual to become an elder. Other elders mark the supplicant with glowing tattoos, channeling away some of the darkling's absorbed light. If the ritual succeeds, the darkling grows into a taller, elf-like form. The darkling perishes if the ritual fails.

## Darklings

Ancient legends speak of a seelie fey who betrayed the Summer Queen. In the Summer Queens' wrath, she cursed every member of his house. The seelie fey's true name has been stricken from history, but the stories call him Dubh Catha ("Dark Crow" in Common), and other Fey refer to the house's descendants as dubh sith—"darklings." Darklings dwell in secluded caverns and chambers beneath the towns of other species. From such enclaves, they quietly ply their trade as thieves and assassins.

```statblock
"name": "Darkling Elder (MPMM)"
"size": "Medium"
"type": "fey"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "5"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- "desc": "The darkling elder casts [[5. Mechanics/Spells/Darkness.md|darkness]], requiring\
    \ no spell components and using Wisdom as the spellcasting ability.\n"
  "name": "spells"
- "desc": "When the darkling elder dies, magical light flashes out from it in a 10-foot\
    \ radius as its body and possessions, other than metal or magic objects, burn\
    \ to ash. Any creature in that area must make a DC 11 Constitution saving throw.\
    \ On a failed save, the creature takes dice: 2d6|avg (2d6) radiant damage\
    \ and is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] until the end of its\
    \ next turn. On a successful save, the creature takes half as much damage and\
    \ isn't [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]."
  "name": "Death Burn"
"actions":
- "desc": "The darkling elder makes two Scimitar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage plus dice: 2d6|avg\
    \ (2d6) necrotic damage."
  "name": "Scimitar"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/fey/token/darkling-elder.png"
```
^statblock

## Environment

forest, swamp, underdark, urban

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```