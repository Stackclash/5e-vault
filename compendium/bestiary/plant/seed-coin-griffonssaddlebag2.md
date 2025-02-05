---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: 
size: Tiny
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/1-2
- monster/size/tiny
- monster/type/plant
aliases: ["Seed Coin"]
---
# [Seed Coin](compendium\bestiary\plant/seed-coin-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 340*

Besides the occasional silver, most seed coins grow to closely mimic the appearance of the local copper coin, using its limited psychic abilities to match its shape to the bearer's perception. This same psychic connection is also the coin's means for beginning its infestation of a creature's body. Grim speculations suggest that it purposefully takes the form of a copper piece to increase the likelihood of ending up in the possession of prey that can more easily disappear, such as common laborers or beggars.

```statblock
"name": "Seed Coin (GriffonsSaddlebag2)"
"size": "Tiny"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "5"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "3"
- !!int "1"
- !!int "10"
- !!int "10"
- !!int "3"
- !!int "10"
"speed": "0 ft."
"skillsaves":
  "Deception": !!int "4"
  "Persuasion": !!int "4"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 6"
"languages": "understands Common but can't speak"
"cr": "1/2"
"traits":
- "desc": "The seed coin is indistinguishable from a normal copper piece. However,\
    \ a creature that has [truesight](/compendium/rules/senses.md#Truesight) sees\
    \ a deep red aura radiating from the seed coin, and a creature within 30 feet\
    \ of it that is under the effect of a [detect poison and disease](compendium/spells/detect-poison-and-disease.md)\
    \ spell senses the insidious nature of the seed coin and knows it is a plant creature."
  "name": "False Appearance"
- "desc": "The seed coin doesn't require sleep. If the seed coin spends 1 minute in\
    \ direct sunlight or a creature spends 1 hour in direct sunlight while the seed\
    \ coin is on the creature's person, the seed coin receives enough nourishment\
    \ to sustain itself for one day. When the seed coin dies, it becomes an ordinary\
    \ copper piece."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +0 to hit, reach 0 ft., one humanoid that has the\
    \ seed coin on its person. Hit: The creature must succeed on a DC 10 Wisdom\
    \ saving throw or its mind becomes imperceptibly infected with a disease until\
    \ the seed coin is no longer on the creature's person or the creature dies. Creatures\
    \ immune to the [charmed](/compendium/rules/conditions.md#Charmed) condition are\
    \ immune to this disease, and a creature that succeeds on the saving throw is\
    \ immune to this disease for the next 30 days. The seed coin's influence invades\
    \ a diseased creature's mind, killing the creature in a number of hours equal\
    \ to 1d12 + the creature's Wisdom score, unless the disease is removed. In half\
    \ that time, the creature becomes [charmed](/compendium/rules/conditions.md#Charmed)\
    \ for the rest of the duration and refuses to part with the seed coin.\n\nIf a\
    \ diseased creature dies while the seed coin is on its person, it immediately\
    \ regains all its hit points and becomes a [seed coin pollinator](compendium/bestiary/plant/seed-coin-pollinator-griffonssaddlebag2.md),\
    \ as the seed coin takes over its body. The seed coin doesn't gain access to the\
    \ creature's knowledge, class features, or proficiencies while controlling a creature\
    \ in this way. This infestation lasts until the [seed coin pollinator](compendium/bestiary/plant/seed-coin-pollinator-griffonssaddlebag2.md)\
    \ dies, killing the seed coin."
  "name": "Infestation"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```