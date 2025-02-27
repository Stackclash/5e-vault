---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1-4
  - monster/size/tiny
  - monster/type/fey
aliases:
  - Tipsy
---
# [[5. Mechanics\Bestiary\Fey\Tipsy (GRIFFONSSADDLEBAG2).md|Tipsy]]
*Source: The Griffon's Saddlebag, Book 2 p. 362*

Most fey on the Material Plane take abundant joy in the manipulation of mortals and instigation of drama, but the tipsy in particular delights in the chaos of drunken romance. These small, pastel-colored fey flutter around bars to cause mischief. The tipsy can use its subtle magic to encourage confession of true feelings and impulsive action, whether they are long-repressed or new temptations. Invisible to sober patrons, they whisper sweet nothings and bold encouragement as necessary, then watch the scene unfold. Softened by inebriation, individuals find themselves unwitting participants, unable to smother the truth any longer.

```statblock
"name": "Tipsy (GRIFFONSSADDLEBAG2)"
"size": "Tiny"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"stats":
- !!int "2"
- !!int "18"
- !!int "13"
- !!int "11"
- !!int "14"
- !!int "17"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Insight": !!int "4"
  "Persuasion": !!int "7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]]"
"senses": "passive Perception 12"
"languages": "Common, Sylvan"
"cr": "1/4"
"traits":
- "desc": "The pixie's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1/day each: [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Enthrall.md|enthrall]],\
    \ [[5. Mechanics/Spells/Silent Image.md|silent image]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "Innate Spellcasting"
- "desc": "Each creature within 15 feet of the tipsy that has two or more levels of\
    \ [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]] (as per the Drunkenness\
    \ rules from page 274 of this book) is under the effect of a [[5. Mechanics/Spells/Zone Of Truth.md|zone of truth]]\
    \ spell. Whenever an affected creature tells the truth as a result of this effect,\
    \ it must succeed on a DC 13 Charisma saving throw or also be compelled to share\
    \ a true feeling it has about one or more of the creatures to whom it's speaking."
  "name": "Drunken Confessions"
- "desc": "The tipsy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "One humanoid the tipsy can see within 30 feet of it must succeed on a DC\
    \ 13 Wisdom saving throw or be magically [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]].\
    \ If the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] creature is under\
    \ the effect of a [[5. Mechanics/Spells/Zone Of Truth.md|zone of truth]] spell, it\
    \ isn't aware of the spell and thus won't intentionally avoid answering questions\
    \ to which it would normally respond with a lie.\n\nEach time the tipsy or its\
    \ allies ask the target a question, it can repeat the saving throw, ending the\
    \ effect on itself on a success. Otherwise, the effect lasts for 1 hour or until\
    \ the tipsy dies, is on a different plane of existence from the target, or ends\
    \ the effect as a bonus action. If the target successfully saves against the effect,\
    \ or if the effect on it ends, the target is immune to this tipsy's Charm for\
    \ the next 24 hours. The tipsy can have no more than three creatures [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ at a time."
  "name": "Charm"
- "desc": "The tipsy magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ until it attacks or casts a spell, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on\
    \ a spell). Any equipment the tipsy wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ with it. Creatures with two or more levels of [[/5. Mechanics/Rules/Conditions.md#Drunkenness|drunkenness]]\
    \ are unaffected by this effect and can see the tipsy as if it wasn't [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]."
  "name": "Invisibility"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
