---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/mountain
- monster/size/huge
- monster/type/giant
statblock: inline
aliases: ["Cloud Giant Smiling One"]
---
# [Cloud Giant Smiling One](compendium/bestiary/giant/cloud-giant-smiling-one-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 81, Volo's Guide to Monsters p. 146*

Smiling ones are cloud giants who honor and emulate the craftiness and deceit of the deity Memnor above all else. They are tricksters supreme who use sleight of hand, deception, misdirection, and magic in their pursuit of wealth. They also possess a flair for unpredictability and a wicked sense of humor. Smiling ones overstep all bounds of decorum with their behavior, doing and saying things that even other knavish folk consider beneath their dignity.

Smiling ones take their name from the strange two-faced masks they wear. The smiling half of the face often looks more like a smirk or a triumphant sneer than a pleasant grin. The frowning half represents the displeasure smiling ones feel about cloud giants' place in the ordning—second to storm giants. The masks serve as symbols of smiling ones' devotion and also conceal their wearers' true facial expressions.

```statblock
"name": "Cloud Giant Smiling One (MPMM)"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "250"
"hit_dice": "20d12 + 120"
"stats":
- !!int "26"
- !!int "12"
- !!int "22"
- !!int "15"
- !!int "16"
- !!int "17"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Intelligence": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Sleight of Hand": !!int "9"
  "Deception": !!int "11"
  "Insight": !!int "7"
  "Perception": !!int "11"
"senses": "passive Perception 21"
"languages": "Common, Giant"
"cr": "11"
"traits":
- "desc": "The giant casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ [detect magic](compendium/spells/detect-magic.md), [fog cloud](compendium/spells/fog-cloud.md),\
    \ [light](compendium/spells/light.md), [minor illusion](compendium/spells/minor-illusion.md)\n\
    \n1/day each: [gaseous form](compendium/spells/gaseous-form.md), [major image](compendium/spells/major-image.md)\n\
    \n3/day each: [invisibility](compendium/spells/invisibility.md), [silent image](compendium/spells/silent-image.md),\
    \ [suggestion](compendium/spells/suggestion.md), [tongues](compendium/spells/tongues.md)"
  "name": "spells"
- "desc": "The giant can cast the [control weather](compendium/spells/control-weather.md)\
    \ spell, requiring no material components and using Charisma as the spellcasting\
    \ ability."
  "name": "Control Weather (8th-level Spell)"
"actions":
- "desc": "The giant makes two Slam attacks or two Telekinetic Strike attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 8|avg (3d8 + 8) bludgeoning damage plus dice: 1d10|avg\
    \ (1d10) psychic damage."
  "name": "Slam"
- "desc": "Ranged Spell Attack: dice: d20+7 (+7 to hit), range 240 ft., one target.\
    \ Hit: dice: 4d10 + 3|avg (4d10 + 3) force damage."
  "name": "Telekinetic Strike"
- "desc": "The giant magically transforms to look and feel like a Beast or a Humanoid\
    \ it has seen or to return to its true form. Any equipment the giant is wearing\
    \ or carrying is absorbed by the new form. Its statistics, other than its size,\
    \ don't change. It reverts to its true form if it dies."
  "name": "Change Shape"
"bonus_actions":
- "desc": "The giant teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Cloud Step (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/giant/token/cloud-giant-smiling-one-mpmm.webp"
```
^statblock

## Environment

mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```