---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/4
environments: 
size: Tiny
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/1-4
- monster/size/tiny
- monster/type/fey
aliases: ["Tipsy"]
---
# [Tipsy](compendium\bestiary\fey/tipsy-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 362*

Most fey on the Material Plane take abundant joy in the manipulation of mortals and instigation of drama, but the tipsy in particular delights in the chaos of drunken romance. These small, pastel-colored fey flutter around bars to cause mischief. The tipsy can use its subtle magic to encourage confession of true feelings and impulsive action, whether they are long-repressed or new temptations. Invisible to sober patrons, they whisper sweet nothings and bold encouragement as necessary, then watch the scene unfold. Softened by inebriation, individuals find themselves unwitting participants, unable to smother the truth any longer.

```statblock
"name": "Tipsy (GriffonsSaddlebag2)"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [drunkenness](/compendium/rules/conditions.md#Drunkenness)"
"senses": "passive Perception 12"
"languages": "Common, Sylvan"
"cr": "1/4"
"traits":
- "desc": "The pixie's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast the following spells, requiring no material components:\n\
    \nAt will: [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1/day each: [detect thoughts](compendium/spells/detect-thoughts.md), [enthrall](compendium/spells/enthrall.md),\
    \ [silent image](compendium/spells/silent-image.md), [suggestion](compendium/spells/suggestion.md)"
  "name": "Innate Spellcasting"
- "desc": "Each creature within 15 feet of the tipsy that has two or more levels of\
    \ [drunkenness](/compendium/rules/conditions.md#Drunkenness) (as per the Drunkenness\
    \ rules from page 274 of this book) is under the effect of a [zone of truth](compendium/spells/zone-of-truth.md)\
    \ spell. Whenever an affected creature tells the truth as a result of this effect,\
    \ it must succeed on a DC 13 Charisma saving throw or also be compelled to share\
    \ a true feeling it has about one or more of the creatures to whom it's speaking."
  "name": "Drunken Confessions"
- "desc": "The tipsy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "One humanoid the tipsy can see within 30 feet of it must succeed on a DC\
    \ 13 Wisdom saving throw or be magically [charmed](/compendium/rules/conditions.md#Charmed).\
    \ If the [charmed](/compendium/rules/conditions.md#Charmed) creature is under\
    \ the effect of a [zone of truth](compendium/spells/zone-of-truth.md) spell, it\
    \ isn't aware of the spell and thus won't intentionally avoid answering questions\
    \ to which it would normally respond with a lie.\n\nEach time the tipsy or its\
    \ allies ask the target a question, it can repeat the saving throw, ending the\
    \ effect on itself on a success. Otherwise, the effect lasts for 1 hour or until\
    \ the tipsy dies, is on a different plane of existence from the target, or ends\
    \ the effect as a bonus action. If the target successfully saves against the effect,\
    \ or if the effect on it ends, the target is immune to this tipsy's Charm for\
    \ the next 24 hours. The tipsy can have no more than three creatures [charmed](/compendium/rules/conditions.md#Charmed)\
    \ at a time."
  "name": "Charm"
- "desc": "The tipsy magically turns [invisible](/compendium/rules/conditions.md#Invisible)\
    \ until it attacks or casts a spell, or until its [concentration](/compendium/rules/conditions.md#Concentration)\
    \ ends (as if [concentrating](/compendium/rules/conditions.md#Concentration) on\
    \ a spell). Any equipment the tipsy wears or carries is [invisible](/compendium/rules/conditions.md#Invisible)\
    \ with it. Creatures with two or more levels of [drunkenness](/compendium/rules/conditions.md#Drunkenness)\
    \ are unaffected by this effect and can see the tipsy as if it wasn't [invisible](/compendium/rules/conditions.md#Invisible)."
  "name": "Invisibility"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```