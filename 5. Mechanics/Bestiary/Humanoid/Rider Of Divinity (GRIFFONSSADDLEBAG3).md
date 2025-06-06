---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Rider of Divinity
---
# [[5. Mechanics\Bestiary\Humanoid\Rider Of Divinity (GRIFFONSSADDLEBAG3).md|Rider of Divinity]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Paladins of Val Linsin that are trained in the bow. Often mounted on horseback, these defenders seek out evil and smite it from afar, protecting those in harm's way with a magical aura.

```statblock
"name": "Rider Of Divinity (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Lawful Good"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Splint Armor.md|splint]]"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": "+4"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "Common plus one other language"
"cr": "3"
"traits":
  - "desc": "The rider is a 7th-level spellcaster. Its spellcasting ability is Charisma\
      \ (+6 to hit with spell attacks). It has the following paladin spells prepared:\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
      \ [[5. Mechanics/Spells/Guiding Bolt.md|guiding bolt]], [[5. Mechanics/Spells/Heroism.md|heroism]],\
      \ [[5. Mechanics/Spells/Longstrider.md|longstrider]]\n\n2nd level (3 slots):\
      \ [[5. Mechanics/Spells/Branding Smite.md|branding smite]], [[5. Mechanics/Spells/See Invisibility.md|see invisibility]],\
      \ [[5. Mechanics/Spells/Warding Bond.md|warding bond]]"
    "name": "Spellcasting"
  - "desc": "The rider and friendly creatures within 10 feet of it can't be [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]],\
      \ and opportunity attacks against them are made with disadvantage."
    "name": "Aura of Vigilance"
"actions":
  - "desc": "The rider makes two attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. Hit: 6 (1d6 + 3) piercing damage."
    "name": "Javelin"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
      \ 8 (1d8 + 4) piercing damage."
    "name": "Longbow"
  - "desc": "The rider touches a creature, making that creature the origin of its\
      \ Aura of Vigilance. The aura returns to the rider if the creature is more than\
      \ 150 feet away from the rider, if the creature dies, or if the rider uses a\
      \ bonus action to end this effect. If the rider uses this action again, the\
      \ aura's origin is removed from the first creature."
    "name": "Transfer Aura"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
