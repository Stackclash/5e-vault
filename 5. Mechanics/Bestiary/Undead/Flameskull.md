---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/4
- monster/environment/underdark
- monster/size/tiny
- monster/type/undead
statblock: inline
aliases: ["Flameskull"]
---
# [[5. Mechanics/Bestiary/Undead/Flameskull.md|Flameskull]]
*Source: Monster Manual p. 134, Curse of Strahd, Tasha's Cauldron of Everything. Available in the Basic Rules.*  

Blazing green flames and mad, echoing laughter follow a disembodied skull as it patrols its demesne. When the undead flameskull discovers trespassers, it blasts the intruders with fiery rays from its eyes and dreadful spells called up from the dark recesses of its memory.

Dark spellcasters fashion flameskulls from the remains of dead wizards. When the ritual is complete, green flames erupt from the skull to complete its ghastly transformation.

## Legacy of Life

A flameskull only dimly recalls its former life. Though it might speak in its old voice and recount key events from its past, it is but an echo of its former self. However, its undead transformation grants it full access to the magic it wielded in life, letting it cast spells while ignoring the material and somatic components it can no longer employ.

## Eternally Bound

Intelligent and vigilant, a flameskull serves its creator by protecting a hidden treasure hoard, a secret chamber, or a specific individual. A flameskull carries out the directives given to it when it was created, and it interprets those commands to the letter. A flameskull's master must craft its instructions with care to ensure that the creature carries out its tasks properly.

### Wreathed in Flame

The fire wreathing a flameskull burns continually, giving off bright light that the creature controls. It uses those flames as a weapon, focusing them to loose them as fiery rays from its eye sockets.

## Eldritch Rejuvenation

A flameskull's shattered fragments reform unless they are splashed with holy water or subjected to a [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]] or [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell. If it can no longer fulfill its intended purpose, the re-formed flameskull is beholden to no one and becomes autonomous.

## Undead Nature

A flameskull doesn't require air, food, drink, or sleep

```statblock
"name": "Flameskull"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"stats":
- !!int "1"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "11"
"speed": "0 ft., fly 40 ft. (hover)"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "5"
"damage_resistances": "lightning, necrotic, piercing"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "4"
"traits":
- "desc": "The flameskull is a 5th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 13, dice: d20+5 (+5 to hit) with spell attacks).\
    \ It requires no somatic or material components to cast its spells. The flameskull\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]]\n\
    \n1st level (3 slots): [[5. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[5. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (2 slots): [[5. Mechanics/Spells/Blur.md|blur]],\
    \ [[5. Mechanics/Spells/Flaming Sphere.md|flaming sphere]]\n\n3rd level (1 slots):\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]]"
  "name": "spells"
- "desc": "The flameskull sheds either dim light in a 15-foot radius, or bright light\
    \ in a 15-foot radius and dim light for an additional 15 feet. It can switch between\
    \ the options as an action."
  "name": "Illumination"
- "desc": "The flameskull has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "If the flameskull is destroyed, it regains all its hit points in 1 hour\
    \ unless holy water is sprinkled on its remains or a [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\
    \ or [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell is cast on them."
  "name": "Rejuvenation"
"actions":
- "desc": "The flameskull uses Fire Ray twice."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: dice: d20+5 (+5 to hit), range 30 ft., one target.\
    \ Hit: dice: 3d6|avg (3d6) fire damage."
  "name": "Fire Ray"
"source":
- "MM"
- "CoS"
- "LMoP"
- "PotA"
- "WDH"
- "WDMM"
- "GoS"
- "SDW"
- "BGDIA"
- "RMBRE"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "HftT"
- "PaBTSO"
- "SatO"
"image": "5. Mechanics/Bestiary/Undead/token/flameskull.png"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```