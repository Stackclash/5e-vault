---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/large
- monster/type/celestial
statblock: true
statblock-link: "#^statblock"
"name": "Celestial Spirit (5th-level Spell)"
"size": "Large"
"type": "celestial"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "40"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft., fly 40 ft."
"damage_resistances": "radiant"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, understands the languages you speak"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The celestial makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: the summoner's spell attack modifier to hit, range\
    \ 150/600 ft., one target. Hit: 2d6 + 2 + summonSpellLevel radiant damage."
  "name": "Radiant Bow (Avenger Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d10 + 3 + summonSpellLevel radiant damage, and the\
    \ celestial can choose itself or another creature it can see within 10 feet of\
    \ the target. The chosen creature gains dice: 1d10|avg (1d10) temporary hit\
    \ points."
  "name": "Radiant Mace (Defender Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The celestial touches another creature. The target magically regains hit\
    \ points equal to 2d8 + summonSpellLevel."
  "name": "Healing Touch (1/Day)"
"source":
- "TCE"
"image": "/compendium/bestiary/celestial/token/celestial-spirit.png"
aliases: ["Celestial Spirit (5th-level Spell)"]
---
# Celestial Spirit (5th-level Spell)
*Source: Tasha's Cauldron of Everything p. 110*  

```ad-statblock
title: Celestial Spirit (5th-level Spell)
![](/compendium/bestiary/celestial/token/celestial-spirit.png#token)
*Large celestial, Unaligned*

- **Armor Class** 16 (natural armor)
- **Hit Points** 40  (40 + 10 for each spell level above 5th)
- **Speed** walk 30 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|16 (+3)|10 (+0)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Resistances** radiant
- **Condition Immunities** charmed, frightened
- **Languages** Celestial, understands the languages you speak
- **Challenge** 

## Actions

***Multiattack.*** The celestial makes a number of attacks equal to half this spell's level (rounded down).

***Radiant Bow (Avenger Only).*** *Ranged Weapon Attack:* the summoner's spell attack modifier to hit, range 150/600 ft., one target. Hit: `2d6 + 2 + summonSpellLevel` radiant damage.

***Radiant Mace (Defender Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d10 + 3 + summonSpellLevel` radiant damage, and the celestial can choose itself or another creature it can see within 10 feet of the target. The chosen creature gains `dice: 1d10|avg` (`1d10`) temporary hit points.

***Healing Touch (1/Day).*** The celestial touches another creature. The target magically regains hit points equal to `2d8 + summonSpellLevel`.
```
^statblock