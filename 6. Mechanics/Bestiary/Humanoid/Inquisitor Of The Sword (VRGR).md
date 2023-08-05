---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Inquisitor of the Sword"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "18"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "7"
  "Intelligence": !!int "5"
"skillsaves":
  "Athletics": !!int "4"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Acrobatics": !!int "5"
"condition_immunities": "charmed, frightened"
"senses": "truesight 30 ft., passive Perception 17"
"languages": "any two languages, telepathy 120 ft."
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The inquisitor casts one of the following spells, requiring no components\
    \ and using Wisdom as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]],\
    \ [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/sending.md\|sending]]\n\
    \n1/day each: [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/fly.md\|fly]],\
    \ [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of each of its turns, the inquisitor regains 10 hit points\
    \ and can end one condition on itself, provided the inquisitor has at least 1\
    \ hit point."
  "name": "Metabolic Control"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The inquisitor attacks twice with its Silver Longsword. After it hits or\
    \ misses with an attack, the inquisitor can teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or 9 (dice: 1d10 + 4|avg\
    \ (1d10 + 4)) if used with two hands, plus dice: 4d8|avg (4d8) force damage."
  "name": "Silver Longsword"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The inquisitor teleports up to 60 feet to an unoccupied space it can see."
  "name": "Blink Step"
"source":
- "VRGR"
"image": "/compendium/bestiary/humanoid/token/inquisitor-of-the-sword.png"
aliases: ["Inquisitor of the Sword"]
---
# Inquisitor of the Sword
*Source: Van Richten's Guide to Ravenloft p. 249*  

"Evil lurks everywhere. With our minds, we will unearth it, we will plumb its depths, and we will annihilate it." With those words, the psychically gifted priest Ulmed founded the Ulmist Inquisition, an order of psionic inquisitors that seeks to discover the wickedness hiding in people's souls.

In the days before Count Strahd von Zarovich became the first vampire, Strahd thundered across the lands with Ulmed. Their mission was clear: to destroy the infernal powers that had corrupted the world and to ensure that those powers never rose again. Strahd, Ulmed, and their companions hunted Fiends, Undead, Aberrations, and other supernatural threats and were tireless foes of cults like the priests of Osybus. When Strahd fell into darkness, Ulmed was heartbroken at his friend's transformation and changed the inquisition's mission. Instead of focusing on hunting monsters, it would also hunt the seeds of evil that can corrupt a person.

Ulmed and his friends Cosima, Ansel, and Tristian organized the inquisition into three orders, with each one specializing in a type of psionic power. The Order of Cosima harnessed the Mind Fire—their name for the fire of thought that blazes within each person's mind. They used that power to read thoughts, reshape memories, and dominate the recalcitrant. The inquisitors in the Order of Ansel subjected themselves to harsh asceticism in an effort to use psionic energy to empower their own bodies. They succeeded and became the martial arm of the inquisition, represented by a sword. Finally, the Order of Tristian endeavored to use intellect to alter the environment through telekinetic force, and the order's members became the inquisition's scholars, represented by a tome.

Today the inquisition rules the city of Malitain, a vast city-state to the north of Barovia's original site, and the inquisition sends its members throughout the multiverse, seeking to thwart the work of malevolent cults, otherworldly horrors, and the malice of mortals. The zeal of the inquisitors in this work has caused them to be a source of terror in many communities, where folk fear that an overzealous inquisitor might be as great a monster as the fiends the inquisitors originally hunted.

```ad-statblock
title: Inquisitor of the Sword
![[/6. Mechanics/Bestiary/Humanoid/Token/inquisitor-of-the-sword.png#token]]
*Medium humanoid, Unaligned*

- **Armor Class** 16 ([[/6. Mechanics/Items/breastplate.md\|breastplate]])
- **Hit Points** `dice: 14d8 + 28|text(91)` (14d8 + 28) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|14 (+2)|14 (+2)|15 (+2)|18 (+4)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +5, Wisdom +7, Charisma +6
- **Skills** Acrobatics +5, Athletics +4, Insight +7, Perception +7
- **Senses** truesight 30 ft., passive Perception 17
- **Condition Immunities** charmed, frightened
- **Languages** any two languages, telepathy 120 ft.
- **Challenge** 8

## Traits

***Metabolic Control.*** At the start of each of its turns, the inquisitor regains 10 hit points and can end one condition on itself, provided the inquisitor has at least 1 hit point.

***Innate Spellcasting (Psionics).*** The inquisitor casts one of the following spells, requiring no components and using Wisdom as the spellcasting ability (spell save DC 15):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/sending.md\|sending]]

**1/day each**: [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]]

## Actions

***Multiattack.*** The inquisitor attacks twice with its Silver Longsword. After it hits or misses with an attack, the inquisitor can teleport up to 30 feet to an unoccupied space it can see.

***Silver Longsword.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4` (`1d8 + 4`) slashing damage, or 9 (`dice: 1d10 + 4` (`1d10 + 4`)) if used with two hands, plus `dice: 4d8` (`4d8`) force damage.

## Bonus Actions

***Blink Step.*** The inquisitor teleports up to 60 feet to an unoccupied space it can see.
```
^statblock