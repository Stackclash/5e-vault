---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/9
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Hedge Mage
---
# [[5. Mechanics/Bestiary/Humanoid/Hedge Mage (GRIFFONSSADDLEBAG3).md|Hedge Mage]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A hedge mage practices a curious mixture of arcana and herbalism to produce potent brews and remedies. Societies might view a hedge mage's magic as occult or accuse them of being a hag, especially during times of scarcity when they want a scapegoat to blame. Even when faced with such vitriol, hedge mages devote themselves to the healing arts andthe growth of nature's bounties.

```statblock
"name": "Hedge Mage (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "16 with [[5. Mechanics/Spells/Barkskin.md|barkskin]]"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "10"
- !!int "15"
- !!int "16"
- !!int "19"
- !!int "13"
- !!int "8"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "7"
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "7"
  "Arcana": !!int "7"
"senses": "passive Perception 11"
"languages": "Common, Sylvan, and any two languages"
"cr": "9"
"traits":
- "desc": "The hedge mage is an 11th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 16, +8 to hit with spell attacks). It has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Druidcraft.md|druidcraft]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Message.md|message]],\
    \ [[5. Mechanics/Spells/Poison Spray.md|poison spray]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Feather Fall.md|feather\
    \ fall]], [[5. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[5. Mechanics/Spells/Speak With Animals.md|speak with animals]]\n\n2nd level\
    \ (3 slots): [[5. Mechanics/Spells/Barkskin.md|barkskin]], [[5. Mechanics/Spells/Enlarge Reduce.md|enlarge/reduce]],\
    \ [[5. Mechanics/Spells/Locate Animals Or Plants.md|locate animals or plants]]\n\n\
    3rd level (3 slots): [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]],\
    \ [[5. Mechanics/Spells/Plant Growth.md|plant growth]], [[5. Mechanics/Spells/Speak With Plants.md|speak with plants]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Control Water.md|control water]],\
    \ [[5. Mechanics/Spells/Giant Insect.md|giant insect]]\n\n5th level (2 slots):\
    \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[5. Mechanics/Spells/Contagion.md|contagion]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Transport Via Plants.md|transport via plants]]"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage, or 4 (1d8) bludgeoning damage if wielded with two hands."
  "name": "Staff"
- "desc": "The hedge mage magically animates a Medium or smaller plant it touches,\
    \ transforming it into a plant creature with a challenge rating of 1 or lower.\
    \ The animated plant acts as an ally of the hedge mage, and it obeys any mental\
    \ command the hedge mage issues to it (no action required by the hedge mage).\
    \ The plant remains animate for 1 hour or until it dies.\n\nThe hedge mage shares\
    \ a telepathic link with the animated plant. Through this link, the plant can\
    \ understand the hedge mage's telepathic messages to it, and it can telepathically\
    \ communicate simple emotions and concepts back to the hedge mage. Additionally,\
    \ as an action, the hedge mage can see through the plant's eyes and hear what\
    \ it hears until the start of the hedge mage's next turn, gaining the benefits\
    \ of any special senses that the plant has. During this time, the hedge mage is\
    \ deaf and blind with regard to its own senses."
  "name": "Animate Plant (4/Day)"
- "desc": "The hedge mage or one willing creature it chooses within 30 feet of it\
    \ becomes magically protected against acid, cold, fire, lightning, or poison damage\
    \ (hedge mage's choice) for 1 hour. For the duration, any damage the target takes\
    \ of the chosen type is reduced by 10."
  "name": "Elixir of Protection (2/Day)"
- "desc": "The hedge mage or one willing creature it chooses within 30 feet regains\
    \ 13 (2d8 + 4) hit points."
  "name": "Elixir of Recovery (2/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
