---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: underdark
size: Medium
tags:
- compendium/src/5e/mm
- monster/cr/8
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Drow Priestess of Lolth (Magic Equipment)"]
---
# [Drow Priestess of Lolth (Magic Equipment)](compendium\bestiary\humanoid/drow-priestess-of-lolth-magic-equipment.md)
*Source: Monster Manual p. 129*

```statblock
"name": "Drow Priestess of Lolth (Magic Equipment)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"ac_class": "[+3 scale mail](compendium/items/drow-3-armor.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](compendium/spells/dancing-lights.md)\n\n1/day each:\
    \ [darkness](compendium/spells/darkness.md), [faerie fire](compendium/spells/faerie-fire.md),\
    \ [levitate](compendium/spells/levitate.md) (self only)"
  "name": "Innate Spellcasting"
- "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, +6 to hit with spell attacks). The drow has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [guidance](compendium/spells/guidance.md),\
    \ [poison spray](compendium/spells/poison-spray.md), [resistance](compendium/spells/resistance.md),\
    \ [spare the dying](compendium/spells/spare-the-dying.md), [thaumaturgy](compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [animal friendship](compendium/spells/animal-friendship.md),\
    \ [cure wounds](compendium/spells/cure-wounds.md), [detect poison and disease](compendium/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](compendium/spells/ray-of-sickness.md)\n\n2nd level (3 slots):\
    \ [lesser restoration](compendium/spells/lesser-restoration.md), [protection from\
    \ poison](compendium/spells/protection-from-poison.md), [web](compendium/spells/web.md)\n\
    \n3rd level (3 slots): [conjure animals](compendium/spells/conjure-animals.md)\
    \ (2 [giant spiders](compendium/bestiary/beast/giant-spider.md)), [dispel magic](compendium/spells/dispel-magic.md)\n\
    \n4th level (3 slots): [divination](compendium/spells/divination.md), [freedom\
    \ of movement](compendium/spells/freedom-of-movement.md)\n\n5th level (2 slots):\
    \ [insect plague](compendium/spells/insect-plague.md), [mass cure wounds](compendium/spells/mass-cure-wounds.md)"
  "name": "Spellcasting"
- "desc": "The drow has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears [+3 scale mail](compendium/items/drow-3-armor.md). This\
    \ armor loses its enhancement bonuses permanently if it is exposed to sunlight\
    \ for 1 hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 17 (5d6) poison damage."
  "name": "Scourge"
- "desc": "The drow attempts to magically summon a [yochlol](compendium/bestiary/fiend/yochlol.md)\
    \ with a 30 percent chance of success. If the attempt fails, the drow takes 5\
    \ (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied\
    \ space within 60 feet of its summoner, acts as an ally of its summoner, and can't\
    \ summon other demons. It remains for 10 minutes, until it or its summoner dies,\
    \ or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```