---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/demon
statblock: inline
aliases: ["Alkilith"]
---
# [[5. Mechanics\Bestiary\Fiend\Alkilith (MPMM).md|Alkilith]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 44*  

An alkilith is easily mistaken for some kind of foul fungal growth that appears on doorways, windows, and other portals. These dripping infestations conceal the demonic nature of the alkilith, making what should be a dire warning appear strange but otherwise innocuous. Wherever alkiliths take root, they weaken the fabric of reality, creating a portal through which even nastier demons can invade.

The appearance of an alkilith in the world heralds a great wrongness and an imminent catastrophe. An alkilith searches for an aperture such as a window or a door around which it can take root, stretching its body around the opening and anchoring itself with a sticky secretion. If left undisturbed, the opening becomes attuned to the Abyss and eventually becomes a portal to that plane (see "Planar Portals" in the Dungeon Master's Guide).

Alkiliths spring from cast-off bits of the hideous, shuddering body of Juiblex. They gradually become self-aware and seek to find their way onto the Material Plane. Since most cultists consider them too risky to summon—they can, after all, create portals to the Abyss—alkiliths must find other escape routes out of their native plane.

```statblock
"name": "Alkilith (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d8 + 96"
"stats":
- !!int "12"
- !!int "19"
- !!int "22"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "40 ft., climb 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "8"
"damage_resistances": "acid; cold; fire; lightning; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Abyssal but can't speak"
"cr": "11"
"traits":
- "desc": "If the alkilith surrounds a door, window, or similar opening continuously\
    \ for dice: 6d6|avg (6d6) days, the opening becomes a permanent portal to\
    \ a random layer of the Abyss."
  "name": "Abyssal Rift"
- "desc": "The alkilith can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "If the alkilith is motionless at the start of combat, it has advantage\
    \ on its initiative roll. Moreover, if a creature hasn't observed the alkilith\
    \ move or act, that creature must succeed on a DC 18 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the alkilith isn't ordinary slime or fungus."
  "name": "False Appearance"
- "desc": "Any creature that isn't a demon that starts its turn within 30 feet of\
    \ the alkilith must succeed on a DC 18 Wisdom saving throw, or it hears a faint\
    \ buzzing in its head for a moment and has disadvantage on its next attack roll,\
    \ saving throw, or ability check.\n\nIf the saving throw against Foment Confusion\
    \ fails by 5 or more, the creature is instead subjected to the [[5. Mechanics/Spells/Confusion.md|confusion]]\
    \ spell for 1 minute (no [[/5. Mechanics/Rules/Conditions.md#concentration|concentration]]\
    \ required by the alkilith). While under the effect of that confusion, the creature\
    \ is immune to Foment Confusion."
  "name": "Foment Confusion"
- "desc": "The alkilith has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The alkilith can climb difficult surfaces, such as upside down on ceilings,\
    \ without making an ability check."
  "name": "Spider Climb"
- "desc": "The alkilith doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The alkilith makes three Tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 15 ft., one target.\
    \ Hit: dice: 4d6 + 4|avg (4d6 + 4) acid damage."
  "name": "Tentacle"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/fiend/token/alkilith.png"
```
^statblock

## Environment

underdark, urban

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```