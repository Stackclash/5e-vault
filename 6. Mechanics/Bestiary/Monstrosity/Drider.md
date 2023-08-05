---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Drider"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drider's innate spellcasting ability is Wisdom (spell save DC 13).\
    \ The drider can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]\n\n1/day\
    \ each: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drider has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put the drider to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drider makes three attacks, either with its longsword or its longbow.\
    \ It can replace one of those attacks with a bite attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage plus dice: 2d8|avg (2d8) poison\
    \ damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage, or 8 (dice: 1d10 + 3|avg\
    \ (1d10 + 3)) slashing damage if used with two hands."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+6 (+6 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage plus dice: 1d8|avg\
    \ (1d8) poison damage."
  "name": "Longbow"
"source":
- "MM"
- "WDMM"
- "CRCotN"
"image": "/compendium/bestiary/monstrosity/token/drider.png"
aliases: ["Drider"]
---
# Drider
*Source: Monster Manual p. 120, Waterdeep: Dungeon of the Mad Mage, Critical Role: Call of the Netherdeep*  

When a drow shows great promise, Lolth summons it to the Demonweb Pits for a test of faith and strength. Those that pass the test rise higher in the Spider Queen's favor. Those that fail are transformed into driders-a horrid hybrid of a drow and a giant spider that serves as a living reminder of Lolth's power. Only drow can be turned into driders, and the power to create these creatures resides with Lolth alone.

## Scarred for Life

Drow transformed into driders return to the Material Plane as twisted and debased creatures. Driven by madness, they disappear into the Underdark to become hermits and hunters, either wandering alone or leading packs of giant spiders.

On rare occasion, a drider returns to the fringes of drow society despite its curse, most often to fulfill some longstanding vow or vendetta from its former life. Drow fear and shun the driders, holding them in lower esteem than slaves. However, they tolerate the presence of these creatures as living representatives of Lolth's will, and a reminder of the fate that awaits all who fail the Spider Queen.

> [!quote]- A quote from Pellanistra the drider  
> 
> I failed the Spider Queen once. Never again.


## Stat Block

```ad-statblock
title: Drider
![[/6. Mechanics/Bestiary/Monstrosity/Token/drider.png#token]]
*Large monstrosity, Chaotic Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 13d10 + 52|text(123)` (13d10 + 52) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|16 (+3)|18 (+4)|13 (+1)|14 (+2)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +9
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** Elvish, Undercommon
- **Challenge** 6

## Traits

***Fey Ancestry.*** The drider has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put the drider to sleep.

***Spider Climb.*** The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Sunlight Sensitivity.*** While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Web Walker.*** The drider ignores movement restrictions caused by webbing.

***Innate Spellcasting.*** The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]

**1/day each**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]]

## Actions

***Multiattack.*** The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: `dice: 1d4` (`1d4`) piercing damage plus `dice: 2d8` (`2d8`) poison damage.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) slashing damage, or 8 (`dice: 1d10 + 3` (`1d10 + 3`)) slashing damage if used with two hands.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) piercing damage plus `dice: 1d8` (`1d8`) poison damage.
```
^statblock

## Environment

underdark