---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: urban
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/urban
  - monster/size/small
  - monster/type/elemental
aliases:
  - Smoke Mephit
---
# [[5. Mechanics\Bestiary\Elemental\Smoke Mephit.md|Smoke Mephit]]
*Source: Monster Manual p. 217, Curse of Strahd*

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Smoke Mephit

Smoke mephits are crude, lazy creatures of air and fire that billow smoke constantly. They rarely speak the truth and love to mock and mislead other creatures.

```statblock
"name": "Smoke Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Ignan"
"cr": "1/4"
"traits":
  - "desc": "The mephit can innately cast [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ requiring no material components. Its innate spellcasting ability is Charisma.\n"
    "name": "Innate Spellcasting (1/Day)"
  - "desc": "When the mephit dies, it leaves behind a cloud of smoke that fills a\
      \ 5-foot-radius sphere centered on its space. The sphere is heavily obscured.\
      \ Wind disperses the cloud, which otherwise lasts for 1 minute."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d4 + 2) slashing damage."
    "name": "Claws"
  - "desc": "The mephit exhales a 15-foot cone of smoldering ash. Each creature in\
      \ that area must succeed on a DC 10 Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ until the end of the mephit's next turn."
    "name": "Cinder Breath (Recharge 6)"
"source":
  - "MM"
  - "CoS"
"image": "5. Mechanics/Bestiary/Elemental/token/smoke-mephit.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
