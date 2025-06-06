---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: mountain
size: Huge
tags:
  - compendium/src/5e/mpmm
  - monster/cr/11
  - monster/environment/mountain
  - monster/size/huge
  - monster/type/giant
aliases:
  - Cloud Giant Smiling One
---
# [[5. Mechanics\Bestiary\Giant\Cloud Giant Smiling One (MPMM).md|Cloud Giant Smiling One]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 81, Volo's Guide to Monsters p. 146*

Smiling ones are cloud giants who honor and emulate the craftiness and deceit of the deity Memnor above all else. They are tricksters supreme who use sleight of hand, deception, misdirection, and magic in their pursuit of wealth. They also possess a flair for unpredictability and a wicked sense of humor. Smiling ones overstep all bounds of decorum with their behavior, doing and saying things that even other knavish folk consider beneath their dignity.

Smiling ones take their name from the strange two-faced masks they wear. The smiling half of the face often looks more like a smirk or a triumphant sneer than a pleasant grin. The frowning half represents the displeasure smiling ones feel about cloud giants' place in the ordning—second to storm giants. The masks serve as symbols of smiling ones' devotion and also conceal their wearers' true facial expressions.

```statblock
"name": "Cloud Giant Smiling One (MPMM)"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "250"
"hit_dice": "20d12 + 120"
"modifier": !!int "1"
"stats":
  - !!int "26"
  - !!int "12"
  - !!int "22"
  - !!int "15"
  - !!int "16"
  - !!int "17"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  - "constitution": "+10"
  - "intelligence": "+6"
  - "charisma": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
    "desc": "+9"
"senses": "passive Perception 21"
"languages": "Common, Giant"
"cr": "11"
"traits":
  - "desc": "The giant can cast the [[5. Mechanics/Spells/Control Weather.md|control weather]]\
      \ spell, requiring no material components and using Charisma as the spellcasting\
      \ ability."
    "name": "Control Weather (8th-level Spell)"
"actions":
  - "desc": "The giant makes two Slam attacks or two Telekinetic Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21\
      \ (3d8 + 8) bludgeoning damage plus 5 (d10) psychic damage."
    "name": "Slam"
  - "desc": "Ranged Spell Attack: +7 to hit, range 240 ft., one target. Hit: 25\
      \ (4d10 + 3) force damage."
    "name": "Telekinetic Strike"
  - "desc": "The giant magically transforms to look and feel like a Beast or a Humanoid\
      \ it has seen or to return to its true form. Any equipment the giant is wearing\
      \ or carrying is absorbed by the new form. Its statistics, other than its size,\
      \ don't change. It reverts to its true form if it dies."
    "name": "Change Shape"
  - "desc": "The giant casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 15):\n\nAt\
      \ will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Fog Cloud.md|fog cloud]],\
      \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]]\n\
      \n3/day each: [[5. Mechanics/Spells/Invisibility.md|invisibility]], [[5. Mechanics/Spells/Silent Image.md|silent\
      \ image]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
      \ [[5. Mechanics/Spells/Tongues.md|tongues]]\n\n1/day each: [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]],\
      \ [[5. Mechanics/Spells/Major Image.md|major image]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The giant teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Cloud Step (Recharge 4-6)"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Giant/token/cloud-giant-smiling-one-mpmm.webp"
```
^statblock

## Environment

mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
