---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Maw Demon"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "8"
- !!int "13"
- !!int "5"
- !!int "8"
- !!int "5"
"speed": "walk 30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "1"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 2|avg (2d8 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The demon vomits in a 15-foot cube. Each creature in that area must succeed\
    \ on a DC 11 Dexterity saving throw or take dice: 2d10|avg (2d10) acid damage\
    \ and fall [prone](compendium/rules/conditions.md#prone) in the spew."
  "name": "Disgorge (Recharge 6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/fiend/token/maw-demon.png"
aliases: ["Maw Demon"]
---
# Maw Demon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 176, Volo's Guide to Monsters p. 137*  

> [!quote]- A quote from Tasha  
> 
> I once pulled a whole bottle of fine strawberry liquor from the belly of a maw demon. No clue where it might've devoured such a find, but I'm not complaining.

Maw demons share the ceaseless hunger for carnage and mortal flesh of their master, Yeenoghu, who appears in this book. After a maw demon rests for 8 hours, anything devoured by it is transported directly into the Lord of Savagery's gullet.

Maw demons appear among gnoll war bands that worship Yeenoghu, usually summoned as part of ritual offerings of freshly slain Humanoids made to him. The gnolls don't command the demons, which simply accompany the war band and attack whatever creatures the gnolls fall upon.

Because maw demons are indiscriminate in their hunger, their stomachs contain all manner of oddities in addition to the remains of their recent prey. You may choose one or more items appropriate for your campaign for a maw demon to contain, or roll on the Maw Demon's Stomach Contents table.

**Maw Demon's Stomach Contents**

| dice: d8 | Stomach Contents |
|----------|------------------|
| 1 | Intact wine skin with wine still in it |
| 2 | Iron skillet |
| 3 | Remnants of silk banner embroidered with a moon-and-stars motif |
| 4 | Corroded gauntlet with skeletal hand in it |
| 5 | Assorted keys |
| 6 | Old leather boot |
| 7 | Beehive |
| 8 | Humanoid teeth |
^maw-demons-stomach-contents

```ad-statblock
title: Maw Demon
![](/compendium/bestiary/fiend/token/maw-demon.png#token)
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)| 8 (-1)|13 (+1)| 5 (-3)| 8 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 9
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** understands Abyssal but can't speak
- **Challenge** 1

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 2|avg` (`2d8 + 2`) piercing damage.

***Disgorge (Recharge 6).*** The demon vomits in a 15-foot cube. Each creature in that area must succeed on a DC 11 Dexterity saving throw or take `dice: 2d10|avg` (`2d10`) acid damage and fall [prone](compendium/rules/conditions.md#prone) in the spew.
```
^statblock

## Environment

underdark