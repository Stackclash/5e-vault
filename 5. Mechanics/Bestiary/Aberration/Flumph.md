---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: underdark
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-8
  - monster/environment/underdark
  - monster/size/small
  - monster/type/aberration
aliases:
  - Flumph
---
# [[5. Mechanics\Bestiary\Aberration\Flumph.md|Flumph]]
*Source: Monster Manual p. 135*

The mysterious flumphs drift through the Underdark, propelled through the air by the jets whose sound gives them their name. A flumph glows faintly, reflecting its moods in its color. Soft pink means it is amused, deep blue is sadness, green expresses curiosity, and crimson is anger.

## Intelligent and Wise

Flumphs communicate telepathically. Though they resemble jellyfish, flumphs are sentient beings of great intelligence and wisdom, possessing advanced knowledge of religion, philosophy, mathematics, and countless other subjects.

Flumphs are sensitive to the emotional states of nearby creatures. If a creature's thoughts suggest goodness, a flumph seeks that creature out. When facing creatures that exude evil, a flumph flees.

## Psionic Siphons

Flumphs feed by siphoning mental energy from psionic creatures, and they can be found lurking near communities of mind flayers, aboleths, githyanki, and githzerai. As passive parasites, they take only the mental energy they need, and most creatures feel no loss or discomfort from such feeding.

Consuming psionic energy reveals the thoughts and emotions of the creatures on which the flumphs feed. Since so many of those creatures are evil, flumphs are often subjected to thoughts, emotions, and hungers that sicken their pure nature. When flumphs encounter good-hearted adventurers, they eagerly share the dark secrets they have learned in the hopes of casting down their evil sources of energy, even if doing so means they must seek out new sources of nourishment.

## Flumph Society

Flumphs live in complex and organized groups called cloisters, within which each flumph has a place and purpose. These harmonious groupings have no need for leaders, since all flumphs contribute in their own way

```statblock
"name": "Flumph"
"size": "Small"
"type": "aberration"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "14"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., fly 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+4"
"damage_vulnerabilities": "psychic"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Undercommon but can't speak, telepathy 60 ft."
"cr": "1/8"
"traits":
  - "desc": "The flumph can perceive the content of any telepathic communication used\
      \ within 60 feet of it, and it can't be [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]\
      \ by creatures with any form of telepathy."
    "name": "Advanced Telepathy"
  - "desc": "If the flumph is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
      \ roll a die. On an odd result, the flumph lands upside-down and is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]].\
      \ At the end of each of its turns, the flumph can make a DC 10 Dexterity saving\
      \ throw, righting itself and ending the [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ condition if it succeeds."
    "name": "Prone Deficiency"
  - "desc": "The flumph is immune to any effect that would sense its emotions or read\
      \ its thoughts, as well as all divination spells."
    "name": "Telepathic Shroud"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d4 + 2) piercing damage plus 2 (d4) acid damage. At the end of each of its\
      \ turns, the target must make a DC 10 Constitution saving throw, taking 2 (d4)\
      \ acid damage on a failure or ending the recurring acid damage on a success.\
      \ A [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]] spell cast\
      \ on the target also ends the recurring acid damage."
    "name": "Tendrils"
  - "desc": "Each creature in a 15-foot cone originating from the flumph must succeed\
      \ on a DC 10 Dexterity saving throw or be coated in a foul-smelling liquid.\
      \ A coated creature exudes a horrible stench for d4 hours. The coated creature\
      \ is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] as long as the stench\
      \ lasts, and other creatures are [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ while with in 5 feet of the coated creature. A creature can remove the stench\
      \ on itself by using a short rest to bathe in water, alcohol, or vinegar."
    "name": "Stench Spray (1/Day)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Aberration/token/flumph.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
