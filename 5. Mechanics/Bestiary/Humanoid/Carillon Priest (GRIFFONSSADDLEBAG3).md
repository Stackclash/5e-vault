---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Carillon Priest
---
# [[5. Mechanics/Bestiary/Humanoid/Carillon Priest (GRIFFONSSADDLEBAG3).md|Carillon Priest]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The fanatical priests of Gavia who worship the toll of the Capilla's twin bells are carillon priests. Other carillon priests exist throughout the world, but the ones in Gavia are particularly zealous in their piety and narrow scope. Typical carillon priests revere all bells, not just Alegría and Aflicción, and believe that the ringing of bells is simply the shared language of gods on the Material Plane.

```statblock
"name": "Carillon Priest (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Splint Armor.md|splint armor]]"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "12"
- !!int "17"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Religion": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Common plus one other language"
"cr": "6"
"traits":
- "desc": "The priest is an 8th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14). It has the following cleric spells prepared:\n\nCantrips\
    \ (at will): [[5. Mechanics/Spells/Guidance.md|guidance]], [[5. Mechanics/Spells/Mending.md|mending]],\
    \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Alarm.md|alarm]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Knock.md|knock]],\
    \ [[5. Mechanics/Spells/Shatter.md|shatter]]\n\n3rd level (3 slots): [[5. Mechanics/Spells/Mass Healing Word.md|mass healing\
    \ word]], [[5. Mechanics/Spells/Sending.md|sending]],\
    \ [[5. Mechanics/Spells/Spirit Guardians.md|spirit guardians]]\n\n4th level (2\
    \ slots): [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Mordenkainens Faithful Hound.md|Mordenkainen's\
    \ faithful hound]]"
  "name": "Spellcasting"
- "desc": "The priest adds its Wisdom modifier to its initiative rolls."
  "name": "Blessing of the Bell"
- "desc": "As a bonus action, the priest can cause a faint, divine ringing to emanate\
    \ from it for 1 minute. Each friendly creature within 10 feet of the priest that\
    \ hears the sound (including the priest) can immediately make a saving throw against\
    \ one effect on it that's causing it to be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]. A hostile creature\
    \ within 10 feet of the priest that hears the sound instead takes 3 (1d6) psychic\
    \ damage. For the duration, the priest can use a bonus action on each of its subsequent\
    \ turns to send out the wave again."
  "name": "Holy Clangor (Recharges After a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) bludgeoning damage plus 4 (1d8) thunder damage."
  "name": "Maul"
"reactions":
- "desc": "When a creature the priest can see within 60 feet of it is reduced to 0\
    \ hit points, the priest causes a foretelling death knell to emit from that creature.\n\
    \nThe death knell is audible out to a range of 10 feet, and each creature the\
    \ priest chooses that can hear it must make a DC 14 Wisdom saving throw. On a\
    \ failed save, the creature is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of the triggering target (or whatever is left of it) until the end of its next\
    \ turn. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creature is\
    \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]] for the duration\
    \ as it contemplates its own mortality. Each time the creature takes damage, it\
    \ can repeat the saving throw, ending the effect on itself on a success."
  "name": "Frightful Knell (2/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
