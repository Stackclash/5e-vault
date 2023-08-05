---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/small
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Smoke Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "6"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "walk 30 ft., fly 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_immunities": "fire, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Auran, Ignan"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mephit can innately cast [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ requiring no material components. Its innate spellcasting ability is Charisma.\n\
    \nAt will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius\
    \ sphere centered on its space. The sphere is heavily obscured. Wind disperses\
    \ the cloud, which otherwise lasts for 1 minute."
  "name": "Death Burst"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mephit exhales a 15-foot cone of smoldering ash. Each creature in that\
    \ area must succeed on a DC 10 Dexterity saving throw or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]]\
    \ until the end of the mephit's next turn."
  "name": "Cinder Breath (Recharge 6)"
"source":
- "MM"
- "CoS"
- "PotA"
- "SKT"
- "ToA"
- "WDMM"
- "KftGV"
"image": "/compendium/bestiary/elemental/token/smoke-mephit.png"
aliases: ["Smoke Mephit"]
---
# Smoke Mephit
*Source: Monster Manual p. 217, Curse of Strahd, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Keys from the Golden Vault*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Smoke Mephit

Smoke mephits are crude, lazy creatures of air and fire that billow smoke constantly. They rarely speak the truth and love to mock and mislead other creatures.

## Stat Block

```ad-statblock
title: Smoke Mephit
![[/6. Mechanics/Bestiary/Elemental/Token/smoke-mephit.png#token]]
*Small elemental, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 5d6 + 5|text(22)` (5d6 + 5) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|12 (+1)|10 (+0)|10 (+0)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Immunities** fire, poison
- **Condition Immunities** poisoned
- **Languages** Auran, Ignan
- **Challenge** 1/4

## Traits

***Death Burst.*** When the mephit dies, it leaves behind a cloud of smoke that fills a 5-foot-radius sphere centered on its space. The sphere is heavily obscured. Wind disperses the cloud, which otherwise lasts for 1 minute.

***Innate Spellcasting (1/Day).*** The mephit can innately cast [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], requiring no material components. Its innate spellcasting ability is Charisma.

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2` (`1d4 + 2`) slashing damage.

***Cinder Breath (Recharge 6).*** The mephit exhales a 15-foot cone of smoldering ash. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the end of the mephit's next turn.
```
^statblock

## Environment

urban