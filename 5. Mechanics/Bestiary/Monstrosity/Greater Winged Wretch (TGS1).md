---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'swamp, forest, hearth'
size: Large
tags:
  - compendium/src/5e/tgs1
  - monster/cr/4
  - monster/environment/forest
  - monster/environment/hearth
  - monster/environment/swamp
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Greater Winged Wretch
---
# [[5. Mechanics\Bestiary\Monstrosity\Greater Winged Wretch (TGS1).md|Greater Winged Wretch]]
*Source: The Griffon's Saddlebag, Book 1 p. 195*

Winged wretches are swarming bat-humanoid hybrids native to subterranean realms and tropical jungles. Although they resemble certain shapechangers and vampires, they are not blood-drinkers. Regardless, they are cruel creatures who delight in the torture of weaker prey.

```statblock
"name": "Greater Winged Wretch (TGS1)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "17"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "40 ft., fly 60 ft."
"saves":
  "Wisdom": !!int "3"
  "Strength": !!int "6"
  "Constitution": !!int "4"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": "Undercommon"
"cr": "4"
"traits":
- "desc": "The greater winged wretch can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]."
  "name": "Echolocation"
- "desc": "The greater winged wretch has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing."
  "name": "Keen Hearing"
"actions":
- "desc": "The greater winged wretch makes three attacks: one with its bite and two\
    \ with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) slashing damage."
  "name": "Claws"
- "desc": "The greater winged wretch shrieks, emitting a wave of thunderous force\
    \ in a 30-foot cone that originates from the wretch. Each creature in the area\
    \ must make a DC 12 Constitution saving throw. On a failed save, a creature takes\
    \ 17 (5d6) thunder damage and is deafened for 1 minute. On a successful save,\
    \ a creature takes half as much damage and isn't deafened."
  "name": "Thunderous Shriek (Recharge 5-6)"
"source":
- "tgs1"
```
^statblock

## Environment

swamp, forest, hearth

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
