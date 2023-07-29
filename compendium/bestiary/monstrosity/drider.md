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
name: Drider
ac: 19
hp: 123
hit_dice: 13d10 + 52
cr: '6'
stats: [
  16,
  16,
  18,
  13,
  14,
  12
]
source: [
  MM,
  WDMM,
  CRCotN
]
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
![](/compendium/bestiary/monstrosity/token/drider.png#token)
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

***Fey Ancestry.*** The drider has advantage on saving throws against being [charmed](compendium/rules/conditions.md#charmed), and magic can't put the drider to sleep.

***Spider Climb.*** The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Sunlight Sensitivity.*** While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

***Web Walker.*** The drider ignores movement restrictions caused by webbing.

***Innate Spellcasting.*** The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:

**At will**: [dancing lights](/compendium/spells/dancing-lights.md)

**1/day each**: [darkness](/compendium/spells/darkness.md), [faerie fire](/compendium/spells/faerie-fire.md)

## Actions

***Multiattack.*** The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: `dice: 1d4|avg` (`1d4`) piercing damage plus `dice: 2d8|avg` (`2d8`) poison damage.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) slashing damage, or 8 (`dice: 1d10 + 3|avg` (`1d10 + 3`)) slashing damage if used with two hands.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) piercing damage plus `dice: 1d8|avg` (`1d8`) poison damage.
```
^statblock

## Environment

underdark