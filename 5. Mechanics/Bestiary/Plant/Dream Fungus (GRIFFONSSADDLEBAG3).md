---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Large
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/1
  - monster/size/large
  - monster/type/plant
aliases:
  - Dream Fungus
---
# [[5. Mechanics\Bestiary\Plant\Dream Fungus (GRIFFONSSADDLEBAG3).md|Dream Fungus]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A dream fungus is a towering mushroom that spreads brain-altering spores which allow it to lure and poison the minds of passersby. Its spores are known to create violent hallucinations resulting in berserking fits and unspeakable fear.

```statblock
"name": "Dream Fungus (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "-2"
"stats":
  - !!int "4"
  - !!int "6"
  - !!int "12"
  - !!int "5"
  - !!int "13"
  - !!int "3"
"speed": "10 ft."
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 11"
"languages": ""
"cr": "1"
"traits":
  - "desc": "While the fungus remains motionless, it is indistinguishable from an\
      \ ordinary fungus."
    "name": "False Appearance"
  - "desc": "The fungus can magically communicate simple ideas, emotions, and images\
      \ telepathically with any creature within 30 feet of it that can understand\
      \ a language."
    "name": "Limited Telepathy"
  - "desc": "A creature that touches the fungus or hits it with a melee attack while\
      \ within 10 feet of it takes 4 (d8) poison damage and is subjected to the fungus's\
      \ Frenzying"
    "name": "Noxious Body"
  - "desc": ""
    "name": "Spores or Terrorizing Spores (determined at random)"
"actions":
  - "desc": "The fungus ejects spores at one creature it can see within 10 feet of\
      \ it. The target must succeed on a DC 10 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ until the end of the fungus's next turn. While [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ in this way, the creature regards all creatures it can see as enemies.\n\n\
      Whenever the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] creature chooses\
      \ another creature as a target, it must choose the target at random from among\
      \ the creatures it can see within range of the attack, spell, or other ability\
      \ it's using. If an enemy provokes an opportunity attack from the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ creature, the creature must make that attack if it is able to."
    "name": "Frenzying Spores"
  - "desc": "The fungus ejects spores at one creature it can see within 10 feet of\
      \ it. The target must succeed on a DC 10 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ for 1 minute and begin hallucinating horrific visions of its deepest fears.\
      \ If the saving throw fails by 5 or more, the creature is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ for the same duration. At the end of each of the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ creature's turns, it must succeed on a DC 10 Wisdom saving throw or take 11\
      \ (2d10) psychic damage. If a creature's saving throw is successful or the effect\
      \ ends for it, the creature has advantage on saving throws against the fungus's\
      \ Terror Spores for the next d4 hours."
    "name": "Terrorizing Spores"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
