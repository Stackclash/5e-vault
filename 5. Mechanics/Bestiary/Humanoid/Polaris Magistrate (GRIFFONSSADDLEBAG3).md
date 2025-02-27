---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Polaris Magistrate
---
# [[5. Mechanics\Bestiary\Humanoid\Polaris Magistrate (GRIFFONSSADDLEBAG3).md|Polaris Magistrate]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Powerful archmages in their own right, the Magistrates of Polaris are long-lived and exceedingly wealthy leaders of the floating city. Almost uniformly lawful in nature and ideology, Magistrates are renowned across the multiverse for their influential standing in cross-planar trade and mediation. Those who attempt to assassinate or otherwise overthrow a Magistrate are universally met with a terrifying, and certainly life-ending, display of arcane skill.

```statblock
"name": "Polaris Magistrate (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "17 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
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
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
    \ , [[5. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (3 slots): [[5. Mechanics/Spells/Levitate.md|levitate]],\
    \ [[5. Mechanics/Spells/Nondetection.md|nondetection]]\n\n3rd level (3 slots):\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Haste.md|haste]],\
    \ [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]], [[5. Mechanics/Spells/Slow.md|slow]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Dimension Door.md|dimension\
    \ door]], [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]]\n\
    \n5th level (3 slots): [[5. Mechanics/Spells/Mislead.md|mislead]], [[5. Mechanics/Spells/Modify Memory.md|modify memory]],\
    \ [[5. Mechanics/Spells/Scrying.md|scrying]], [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Disintegrate.md|disintegrate]],\
    \ [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]\n\n7th level (1 slots):\
    \ [[5. Mechanics/Spells/Reverse Gravity.md|reverse gravity]]\n\n8th level (1 slots):\
    \ [[5. Mechanics/Spells/Mind Blank.md|mind blank]] \n\n*9th level (1 slots):\
    \ [[5. Mechanics/Spells/Meteor Swarm.md|meteor swarm]], [[5. Mechanics/Spells/Time Stop.md|time stop]]\n\
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
