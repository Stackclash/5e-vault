---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
"name": "Darkling Elder"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "14"
- !!int "13"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "7"
  "Perception": !!int "6"
  "Acrobatics": !!int "5"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the darkling elder dies, magical light flashes out from it in a 10-foot\
    \ radius as its body and possessions, other than metal or magic objects, burn\
    \ to ash. Any creature in that area must make a DC 11 Constitution saving throw.\
    \ On a failed save, the creature takes dice: 2d6|avg (2d6) radiant damage\
    \ and is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the end of its\
    \ next turn. On a successful save, the creature takes half as much damage and\
    \ isn't [[6. Mechanics/Rules/conditions.md#blinded\|blinded]]."
  "name": "Death Burn"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The darkling elder makes two Scimitar attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage plus dice: 2d6|avg (2d6)\
    \ necrotic damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The darkling elder casts [[/6. Mechanics/Spells/darkness.md\|darkness]], requiring\
    \ no spell components and using Wisdom as the spellcasting ability."
  "name": "Darkness (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/fey/token/darkling-elder.png"
aliases: ["Darkling Elder"]
---
# Darkling Elder
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 84, Volo's Guide to Monsters p. 134*  

A wise and respected darkling can undergo a ritual to become an elder. Other elders mark the supplicant with glowing tattoos, channeling away some of the darkling's absorbed light. If the ritual succeeds, the darkling grows into a taller, elf-like form. The darkling perishes if the ritual fails.

## Darklings

Ancient legends speak of a seelie fey who betrayed the Summer Queen. In the Summer Queens' wrath, she cursed every member of his house. The seelie fey's true name has been stricken from history, but the stories call him Dubh Catha ("Dark Crow" in Common), and other Fey refer to the house's descendants as dubh sith—"darklings." Darklings dwell in secluded caverns and chambers beneath the towns of other species. From such enclaves, they quietly ply their trade as thieves and assassins.

## Stat Block

```ad-statblock
title: Darkling Elder
![[/6. Mechanics/Bestiary/Fey/Token/darkling-elder.png#token]]
*Medium fey, Chaotic Neutral*

- **Armor Class** 15 ([[/6. Mechanics/Items/studded-leather-armor.md\|studded leather armor]])
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|17 (+3)|12 (+1)|10 (+0)|14 (+2)|13 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Acrobatics +5, Deception +3, Perception +6, Stealth +7
- **Senses** blindsight 30 ft., darkvision 120 ft., passive Perception 16
- **Languages** Elvish, Sylvan
- **Challenge** 2

## Traits

***Death Burn.*** When the darkling elder dies, magical light flashes out from it in a 10-foot radius as its body and possessions, other than metal or magic objects, burn to ash. Any creature in that area must make a DC 11 Constitution saving throw. On a failed save, the creature takes `dice: 2d6` (`2d6`) radiant damage and is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the end of its next turn. On a successful save, the creature takes half as much damage and isn't [[6. Mechanics/Rules/conditions.md#blinded\|blinded]].

## Actions

***Multiattack.*** The darkling elder makes two Scimitar attacks.

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3` (`1d6 + 3`) slashing damage plus `dice: 2d6` (`2d6`) necrotic damage.

***Darkness (Recharges after a Short or Long Rest).*** The darkling elder casts [[/6. Mechanics/Spells/darkness.md\|darkness]], requiring no spell components and using Wisdom as the spellcasting ability.
```
^statblock

## Environment

forest, swamp, underdark, urban