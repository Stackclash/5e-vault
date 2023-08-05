---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/human
statblock: true
statblock-link: "#^statblock"
"name": "Lady Fiona Wachter"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 13, dice: d20+5 (+5 to hit) with spell attacks). Fiona has the following\
    \ cleric spells prepared:\n\nCantrips (at will): [light](/compendium/spells/light.md),\
    \ [mending](/compendium/spells/mending.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 1st-level slots): [command](/compendium/spells/command.md),\
    \ [purify food and drink](/compendium/spells/purify-food-and-drink.md), [sanctuary](/compendium/spells/sanctuary.md)\n\
    \n2nd level (3 2nd-level slots): [augury](/compendium/spells/augury.md), [gentle\
    \ repose](/compendium/spells/gentle-repose.md), [hold person](/compendium/spells/hold-person.md)\n\
    \n3rd level (2 3rd-level slots): [animate dead](/compendium/spells/animate-dead.md),\
    \ [create food and water](/compendium/spells/create-food-and-water.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "As a bonus action, Fiona can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra 10 (dice: 3d6|avg (3d6)) radiant damage\
    \ to a target on a hit. This benefit lasts until the end of the turn. If Fiona\
    \ expends a spell slot of 2nd level or higher, the extra damage increases by dice:\
    \ 1d6|avg (1d6) for each level above 1st."
  "name": "Divine Eminence"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) bludgeoning damage."
  "name": "Mace"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/lady-fiona-wachter.png"
aliases: ["Lady Fiona Wachter"]
---
# Lady Fiona Wachter
*Source: Curse of Strahd p. 110, Derived from Priest (MM)*  

```ad-statblock
title: Lady Fiona Wachter
![](/compendium/bestiary/npc/token/lady-fiona-wachter.png#token)
*Medium humanoid(human), Lawful Evil*

- **Armor Class** 10 
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|10 (+0)|12 (+1)|13 (+1)|16 (+3)|13 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Medicine +7, Persuasion +3, Religion +5
- **Senses** passive Perception 13
- **Languages** any two languages
- **Challenge** 2

## Traits

***Divine Eminence.*** As a bonus action, Fiona can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (`dice: 3d6|avg` (`3d6`)) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If Fiona expends a spell slot of 2nd level or higher, the extra damage increases by `dice: 1d6|avg` (`1d6`) for each level above 1st.

***Spellcasting.*** Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 13, `dice: d20+5` (+5 to hit) with spell attacks). Fiona has the following cleric spells prepared:

**Cantrips (at will)**: [light](/compendium/spells/light.md), [mending](/compendium/spells/mending.md), [thaumaturgy](/compendium/spells/thaumaturgy.md)

**1st level (4 1st-level slots)**: [command](/compendium/spells/command.md), [purify food and drink](/compendium/spells/purify-food-and-drink.md), [sanctuary](/compendium/spells/sanctuary.md)

**2nd level (3 2nd-level slots)**: [augury](/compendium/spells/augury.md), [gentle repose](/compendium/spells/gentle-repose.md), [hold person](/compendium/spells/hold-person.md)

**3rd level (2 3rd-level slots)**: [animate dead](/compendium/spells/animate-dead.md), [create food and water](/compendium/spells/create-food-and-water.md)

## Actions

***Mace.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. Hit: `dice: 1d6|avg` (`1d6`) bludgeoning damage.
```
^statblock

## Environment

urban