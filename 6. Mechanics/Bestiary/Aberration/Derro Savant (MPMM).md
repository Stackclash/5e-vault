---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/small
- monster/type/aberration/sorcerer
statblock: true
statblock-link: "#^statblock"
"name": "Derro Savant"
"size": "Small"
"type": "aberration"
"subtype": "sorcerer"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"stats":
- !!int "9"
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "5"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
"senses": "darkvision 120 ft., passive Perception 7"
"languages": "Dwarvish, Undercommon"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The derro casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/message.md\|message]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n1/day each: [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/sleep.md\|sleep]],\
    \ [[/6. Mechanics/Spells/spider-climb.md\|spider climb]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The derro has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the derro has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+1 (+1 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 - 1|avg (1d6 - 1) bludgeoning damage."
  "name": "Quarterstaff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The derro launches a brilliant beam of magical energy in a 5-foot-wide\
    \ line that is 60 feet long. Each creature in the line must make a DC 12 Dexterity\
    \ saving throw, taking 21 (dice: 6d6|avg (6d6)) radiant damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Chromatic Beam"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/aberration/token/derro-savant.png"
aliases: ["Derro Savant"]
---
# Derro Savant
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 92, Mordenkainen's Tome of Foes p. 159*  

> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers must be stopped. They have visited horrors on countless worlds, and entire groups of people have been mutated by illithid experiments. Such are the derro.
> 
> Whenever I've met them, I refuse to fight, no matter how violent they might be. I think of the dwarves they once were. and I must confess that even I have shed tears.

Derro slink through the subterranean realms, seeking places that are safe from the perils of the Underdark. Equal parts fearful and vicious, bands of these dwarf-kin prey on those weaker than themselves, while giving simpering obeisance to any creatures they deem more powerful. A lone derro may seem pitiable, but a cackling, spitting, growling, howling horde of them is horrifying to behold.

Fractious in groups and individually weak, derro would have died out long ago but for two elements of their character. They are cautious and distrustful, which serves them well as they navigate the dangers of the Underdark and its societies. They also have a stronger-than-normal tendency to develop sorcerous power. Individuals who do so usually serve as leaders and are known as savants.

Grandiose fantasies and rampant fanaticism have obscured derro's true origin, even among themselves. Most dwarves don't recognize derro as kin, but the legends that derro tell about their people and the story that duergar believe share a grain of truth. According to the histories of some duergar, derro are descended from a dwarven community that was left behind when the others escaped the rule of mind flayers. These remnants were so distorted by the mind flayers' psionic power that the dwarves became Aberrations.

Derro tell their own stories of flight and survival in the Underdark, in which mind flayers aren't always the enemy. They tell of two brothers, the gods Diirinka and Diinkarazan, and of how Diirinka cleverly betrayed his sibling so that he could steal magical power from the evil they escaped. The danger the brothers are said to face in this legend varies, depending on whatever foe the savants want to lead their people against, yet the essence of the story remains the same: a lesson of survival at any price and an example of how deceitfulness and cruelty can be virtues.

```ad-statblock
title: Derro Savant
![[/6. Mechanics/Bestiary/Aberration/Token/derro-savant.png#token]]
*Small aberration(sorcerer), Chaotic Evil*

- **Armor Class** 13 ([[/6. Mechanics/Items/leather-armor.md\|leather armor]])
- **Hit Points** `dice: 8d6 + 8|text(36)` (8d6 + 8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|12 (+1)|11 (+0)| 5 (-3)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +4
- **Senses** darkvision 120 ft., passive Perception 7
- **Languages** Dwarvish, Undercommon
- **Challenge** 3

## Traits

***Magic Resistance.*** The derro has advantage on saving throws against spells and other magical effects.

***Sunlight Sensitivity.*** While in sunlight, the derro has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Spellcasting.*** The derro casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 12):

**At will**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1/day each**: [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/sleep.md\|sleep]], [[/6. Mechanics/Spells/spider-climb.md\|spider climb]]

## Actions

***Quarterstaff.*** *Melee Weapon Attack:* `dice: d20+1` (+1 to hit), reach 5 ft., one target. Hit: `dice: 1d6 - 1|avg` (`1d6 - 1`) bludgeoning damage.

***Chromatic Beam.*** The derro launches a brilliant beam of magical energy in a 5-foot-wide line that is 60 feet long. Each creature in the line must make a DC 12 Dexterity saving throw, taking 21 (`dice: 6d6` (`6d6`)) radiant damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

underdark