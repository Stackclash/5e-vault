---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\15
  - monster\Size\Huge
  - monster\Type\Dragon
aliases:
  - Dream Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Dream Dragon (GRIFFONSSADDLEBAG3).md|Dream Dragon]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Dream dragons lord over their lairs in The Grephearon's Dream Gallery, enjoying the unique magics that radiate off of their collected gallery paintings. They magically turn invisible when exploring the gallery's labyrinth in search of new treasures, interesting dreams, or visiting humanoids. When within a dream, a dragon attempts to devour other outsider creatures—those not belonging to the dream. To the dragon, these morsels, while not truly necessary for their survival, are nevertheless a delicious treat.

```statblock
"name": "Dream Dragon (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d12 + 60"
"stats":
- !!int "14"
- !!int "21"
- !!int "19"
- !!int "22"
- !!int "15"
- !!int "16"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "7"
  "Intelligence": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "10"
  "Investigation": !!int "11"
  "Perception": !!int "12"
"damage_resistances": "poison, psychic"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "15"
"traits":
- "desc": "The dragon can see any living creature within 120 feet of it like normal,\
    \ even if the creature is lightly or heavily obscured."
  "name": "Dream Sight"
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The dragon doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and can see it must succeed on a DC 16 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] in this\
    \ way, the creature is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ and has a speed of 0. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If an affected creature\
    \ takes any damage or if someone else uses an action to attempt to shake the creature\
    \ out of its stupor, the creature can repeat the saving throw with advantage,\
    \ ending the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to the dragon's Hypnotic Presence\
    \ for the next 24 hours."
  "name": "Hypnotic Presence"
- "desc": "The dragon uses one of the following breath weapons."
  "name": "Breath Weapons (Recharge 5-6)"
- "desc": "The dragon exhales a cloud of obscuring sand in a 60-foot cone. The cloud\
    \ remains until the end of the dragon's next turn, and its area is lightly obscured.\n\
    \nEach creature in the cloud when it appears must make a DC 17 Wisdom saving throw\
    \ as the dragon magically crafts illusory manifestations of each creature's deepest\
    \ fears within the cloud. A target takes 45 (10d8) psychic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Phantasmal Breath"
- "desc": "The dragon exhales sleep gas in a 30-foot cone. Each creature in that area\
    \ must succeed on a DC 17 Constitution saving throw or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]\
    \ for 1 hour; a creature has disadvantage on this saving throw if it is under\
    \ the effects of the dragon's Hypnotic Presence. This effect ends for a creature\
    \ if the creature takes damage or someone uses an action to wake it."
  "name": "Sleep Breath"
- "desc": "The dragon magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ until it attacks or uses its breath weapon, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on\
    \ a spell). Any equipment the dragon wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ with it."
  "name": "Invisibility"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check."
  "name": "Detect"
- "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- "desc": "The dragon causes a torrent of sand to buffet the area around itself. Each\
    \ creature other than the dragon within 10 feet of it must succeed on a DC 18\
    \ Constitution saving throw or take 12 (2d6 + 5) bludgeoning damage and have disadvantage\
    \ on the next attack roll it makes before the end of its next turn. The dragon\
    \ can then fly up to half its flying speed."
  "name": "Sandstorm (Costs 2 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
