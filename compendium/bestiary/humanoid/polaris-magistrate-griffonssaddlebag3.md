---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/12
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Polaris Magistrate"]
---
# [Polaris Magistrate](compendium\bestiary\humanoid/polaris-magistrate-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Powerful archmages in their own right, the Magistrates of Polaris are long-lived and exceedingly wealthy leaders of the floating city. Almost uniformly lawful in nature and ideology, Magistrates are renowned across the multiverse for their influential standing in cross-planar trade and mediation. Those who attempt to assassinate or otherwise overthrow a Magistrate are universally met with a terrifying, and certainly life-ending, display of arcane skill.

```statblock
"name": "Polaris Magistrate (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "17 with [mage armor](compendium/spells/mage-armor.md)"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "10"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "17"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "7"
  "Intelligence": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Investigation": !!int "9"
  "Insight": !!int "7"
  "History": !!int "9"
  "Arcana": !!int "9"
"senses": "passive Perception 13"
"languages": "Common plus up to five other languages"
"cr": "12"
"traits":
- "desc": "The magistrate is an 18th-level spellcaster.\n\nIts spellcasting ability\
    \ is Intelligence (spell save DC 17, +9 to hit with spell attacks). The magistrate\
    \ can cast magic missile and detect thoughts at will and has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
    \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
    \ [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [detect magic](compendium/spells/detect-magic.md),\
    \ [disguise self](compendium/spells/disguise-self.md), [mage armor](compendium/spells/mage-armor.md)\
    \ , [shield](compendium/spells/shield.md)\n\n2nd level (3 slots): [levitate](compendium/spells/levitate.md),\
    \ [nondetection](compendium/spells/nondetection.md)\n\n3rd level (3 slots):\
    \ [fireball](compendium/spells/fireball.md), [haste](compendium/spells/haste.md),\
    \ [hypnotic pattern](compendium/spells/hypnotic-pattern.md), [slow](compendium/spells/slow.md)\n\
    \n4th level (3 slots): [banishment](compendium/spells/banishment.md), [dimension\
    \ door](compendium/spells/dimension-door.md), [greater invisibility](compendium/spells/greater-invisibility.md)\n\
    \n5th level (3 slots): [mislead](compendium/spells/mislead.md), [modify memory](compendium/spells/modify-memory.md),\
    \ [scrying](compendium/spells/scrying.md), [wall of force](compendium/spells/wall-of-force.md)\n\
    \n6th level (1 slots): [disintegrate](compendium/spells/disintegrate.md),\
    \ [mass suggestion](compendium/spells/mass-suggestion.md)\n\n7th level (1 slots):\
    \ [reverse gravity](compendium/spells/reverse-gravity.md)\n\n8th level (1 slots):\
    \ [mind blank](compendium/spells/mind-blank.md) \n\n*9th level (1 slots):\
    \ [meteor swarm](compendium/spells/meteor-swarm.md), [time stop](compendium/spells/time-stop.md)\n\
    \nThe magistrate casts these spells on itself before combat."
  "name": "Spellcasting"
- "desc": "The magistrate has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if wielded with two hands."
  "name": "Quarterstaff"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```