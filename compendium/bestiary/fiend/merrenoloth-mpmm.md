---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/size/medium
- monster/type/fiend/yugoloth
statblock: true
statblock-link: "#^statblock"
"name": "Merrenoloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "11"
"speed": "walk 30 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Perception": !!int "4"
  "History": !!int "5"
  "Survival": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The merrenoloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [charm person](/compendium/spells/charm-person.md), [darkness](/compendium/spells/darkness.md),\
    \ [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md),\
    \ [gust of wind](/compendium/spells/gust-of-wind.md)\n\n3/day: [control water](/compendium/spells/control-water.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The merrenoloth has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The merrenoloth makes one Oar attack and uses Fear Gaze."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) fire damage."
  "name": "Oar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The merrenoloth targets one creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 13 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened)\
    \ of the merrenoloth for 1 minute. The [frightened](compendium/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Fear Gaze"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The merrenoloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/merrenoloth.png"
aliases: ["Merrenoloth"]
---
# Merrenoloth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 180, Mordenkainen's Tome of Foes p. 250*  

The grim captains of the ferries on the River Styx, merrenoloths can navigate safely through the worst storms and always stay on course. Wielding fiery oars, merrenoloths strike fear into anyone who forcefully boards their vessels.

```ad-statblock
title: Merrenoloth
![](/compendium/bestiary/fiend/token/merrenoloth.png#token)
*Medium fiend(yugoloth), Neutral Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 9d8|text(40)` (9d8) 
- **Speed** walk 30 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|17 (+3)|10 (+0)|17 (+3)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5, Intelligence +5
- **Skills** History +5, Nature +5, Perception +4, Survival +4
- **Senses** blindsight 60 ft., darkvision 60 ft., passive Perception 14
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** acid, poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Infernal, telepathy 60 ft.
- **Challenge** 3

## Traits

***Magic Resistance.*** The merrenoloth has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The merrenoloth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 13):

**At will**: [charm person](/compendium/spells/charm-person.md), [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md), [gust of wind](/compendium/spells/gust-of-wind.md)

**3/day**: [control water](/compendium/spells/control-water.md)

## Actions

***Multiattack.*** The merrenoloth makes one Oar attack and uses Fear Gaze.

***Oar.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 3|avg` (`2d4 + 3`) fire damage.

***Fear Gaze.*** The merrenoloth targets one creature it can see within 60 feet of it. The target must succeed on a DC 13 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) of the merrenoloth for 1 minute. The [frightened](compendium/rules/conditions.md#frightened) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Bonus Actions

***Teleport.*** The merrenoloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.

## Lair actions

On initiative count 20 (losing initiative ties) while captaining a vessel, the merrenoloth can take one of the following lair actions; it can't take the same lair action two rounds in a row:

- **Gale.** The air within 60 feet of the vessel is filled with wind. Until initiative count 20 on the next round, that area is difficult terrain, and when a Medium or smaller creature flies into that area or starts its turn flying there, it must succeed on a DC 13 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).  
- **Propel.** A strong wind propels the vessel, increasing its speed by 30 feet until initiative count 20 on the next round.  
- **Repair.** The vessel regains 22 (`dice: 4d10|avg` (`4d10`)) hit points.  

## Regional effects

A merrenoloth imbues its vessel with magic that creates one or more of the following effects:

- **Unerring.** The vessel always stays on course to the destination the merrenoloth names.  
- **Unsinkable.** The vessel doesn't sink even if its hull is breached.  

If the merrenoloth dies, these effects fade over the course of `dice: 1d6|avg` (`1d6`) hours.
```
^statblock

## Environment

coastal