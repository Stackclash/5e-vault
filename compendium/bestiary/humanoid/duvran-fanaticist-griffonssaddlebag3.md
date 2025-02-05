---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/1
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Duvran Fanaticist"]
---
# [Duvran Fanaticist](compendium\bestiary\humanoid/duvran-fanaticist-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Covetous cultists devoted to praising Duvra's trickery—and matching it in kind with their own. Duvran fanatacists range from seemingly deranged swindlers to master cutpurses.

```statblock
"name": "Duvran Fanaticist (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Chaotic alignment"
"ac": !!int "14"
"ac_class": "[leather armor](compendium/items/leather-armor.md)"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"stats":
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "7"
  "Deception": !!int "4"
  "Stealth": !!int "5"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Thieves' cant"
"cr": "1"
"traits":
- "desc": "The fanaticist is a 3rd-level spellcaster. Its spellcasting ability is\
    \ Charisma (spell save DC 12, +4 to hit with spell attacks). It regains its expended\
    \ spell slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [mage hand](compendium/spells/mage-hand.md)\
    \ (appears as a dragon's claw), [minor illusion](compendium/spells/minor-illusion.md)\n\
    \n1st-2nd level (2 slots): [charm person](compendium/spells/charm-person.md),\
    \ [expeditious retreat](compendium/spells/expeditious-retreat.md), [mirror image](compendium/spells/mirror-image.md),\
    \ [suggestion](compendium/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "The fanaticist has advantage on saving throws against being [frightened](/compendium/rules/conditions.md#Frightened)\
    \ and against any spell or effect that would alter its form."
  "name": "Duvran Devotion"
- "desc": "The fanaticist deals an extra 7 (2d6) damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the fanaticist that isn't incapacitated and the\
    \ fanaticist doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```