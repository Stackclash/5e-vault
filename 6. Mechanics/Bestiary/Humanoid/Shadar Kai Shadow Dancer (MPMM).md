---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/elf
statblock: true
statblock-link: "#^statblock"
"name": "Shadar-kai Shadow Dancer"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, exhaustion"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Elvish"
"cr": "7"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shadar-kai has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shadar-kai makes three Spiked Chain attacks.\n\nIt can use Shadow Jump\
    \ after one of these attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) piercing damage. The target must succeed\
    \ on a DC 14 Dexterity saving throw or suffer one of the following effects (choose\
    \ one or roll a dice: d6|avg (d6)):\n\n- 1–2 Decay. The target takes dice:\
    \ 4d10|avg (4d10) necrotic damage.  \n- 3–4 Grapple. The target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the\
    \ shadar-kai can't grapple another target.  \n- 5–6 Topple. The target is\
    \ knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].  "
  "name": "Spiked Chain"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shadar-kai teleports, along with any equipment is it wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see. Both the space it teleports\
    \ from and the space it teleports to must be in dim light or darkness."
  "name": "Shadow Jump"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/shadar-kai-shadow-dancer.png"
aliases: ["Shadar-kai Shadow Dancer"]
---
# Shadar-kai Shadow Dancer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 213, Mordenkainen's Tome of Foes p. 225*  

Those who have fought shadow dancers describe the experience as similar to fighting a living darkness. Every dim alcove and darkened nook is a place the lithe and acrobatic shadow dancers can emerge from to ambush their prey. Using this tactic, they attack their enemies from all angles with a flurry of entangling chains that hold fast and corrupt the flesh. When their quarry is helpless, they dispatch it and then loot the corpse for trinkets, particularly anything colorful and lively to gaze at after they return to the gloom of the Shadowfell.

## Shadar-kai

In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

### Fortress of Memories

The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

## Stat Block

```ad-statblock
title: Shadar-kai Shadow Dancer
![[/6. Mechanics/Bestiary/Humanoid/Token/shadar-kai-shadow-dancer.png#token]]
*Medium humanoid(elf), Any alignment*

- **Armor Class** 15 ([[/6. Mechanics/Items/studded-leather-armor.md\|studded leather]])
- **Hit Points** `dice: 13d8 + 13|text(71)` (13d8 + 13) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|13 (+1)|11 (+0)|12 (+1)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +6, Charisma +4
- **Skills** Stealth +6
- **Senses** darkvision 60 ft., passive Perception 11
- **Damage Resistances** necrotic
- **Condition Immunities** charmed, exhaustion
- **Languages** Common, Elvish
- **Challenge** 7

## Traits

***Fey Ancestry.*** The shadar-kai has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put it to sleep.

## Actions

***Multiattack.*** The shadar-kai makes three Spiked Chain attacks.

It can use Shadow Jump after one of these attacks.

***Spiked Chain.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 3` (`2d6 + 3`) piercing damage. The target must succeed on a DC 14 Dexterity saving throw or suffer one of the following effects (choose one or roll a `dice: d6` (`d6`)):

- **1–2 Decay.** The target takes `dice: 4d10` (`4d10`) necrotic damage.  
- **3–4 Grapple.** The target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], and the shadar-kai can't grapple another target.  
- **5–6 Topple.** The target is knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].  

## Bonus Actions

***Shadow Jump.*** The shadar-kai teleports, along with any equipment is it wearing or carrying, up to 30 feet to an unoccupied space it can see. Both the space it teleports from and the space it teleports to must be in dim light or darkness.
```
^statblock

## Environment

forest, underdark, urban