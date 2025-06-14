---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 'underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/monstrosity/shapechanger
aliases:
  - Doppelganger
---
# [[5. Mechanics\Bestiary\Monstrosity\Doppelganger.md|Doppelganger]]
*Source: Monster Manual p. 82. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Doppelgangers are devious shapeshifters that take on the appearance of other humanoids, throwing off pursuit or luring victims to their doom with misdirection and disguise. Few creatures spread fear, suspicion, and deceit better than doppelgangers. Found in every land and culture, they can take on the guise of any individual of any race.

## Stealing Secrets

A doppelganger's adopted form allows it to blend into almost any group or community, but its transformation doesn't impart languages, mannerisms, memory, or personality. Doppelgangers often follow or capture creatures they intend to impersonate, studying them and probing their minds for secrets. A doppelganger can read a creature's surface thoughts, allowing it to glean that creature's name, desires, and fears, along with a few scattered memories. A doppelganger impersonating a specific creature as part of a long-term plot might keep its double alive and close at hand for weeks, probing the victim's mind daily to learn how to behave and speak authentically.

## Hedonistic Swindlers

Doppelgangers work alone or in small groups, with group roles shifting from con to con. While one doppelganger takes the place of a murdered merchant or noble, the others take on a number of identities as circumstances warrant, playing the parts of family or servants while they live off the victim's riches.

## Changelings

Doppelgangers are too lazy or self-interested to raise their young. They assume attractive male forms and seduce women, leaving them to raise their progeny. A doppelganger child appears to be a normal member of its mother's species until it reaches adolescence, at which point it discovers its true nature and is driven to seek out its kind to join them.

```statblock
"name": "Doppelganger"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+3"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The doppelganger can use its action to polymorph into a Small or Medium\
      \ humanoid it has seen, or back into its true form. Its statistics, other than\
      \ its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "In the first round of a combat, the doppelganger has advantage on attack\
      \ rolls against any creature it [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]."
    "name": "Ambusher"
  - "desc": "If the doppelganger surprises a creature and hits it with an attack during\
      \ the first round of combat, the target takes an extra 10 (3d6) damage from\
      \ the attack."
    "name": "Surprise Attack"
"actions":
  - "desc": "The doppelganger makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "The doppelganger magically reads the surface thoughts of one creature\
      \ within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood\
      \ or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks\
      \ it. While the target is in range, the doppelganger can continue reading its\
      \ thoughts, as long as the doppelganger's [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ isn't broken (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). While reading the target's mind, the doppelganger has advantage\
      \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) and Charisma ([[/5. Mechanics/Rules/Skills.md#Deception|Deception]],\
      \ [[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]], and [[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]])\
      \ checks against the target."
    "name": "Read Thoughts"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/doppelganger.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
