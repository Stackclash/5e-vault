---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "walk 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dog has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ checks and on saving throws against being [[6. Mechanics/Rules/conditions.md#blinded\|blinded]],\
    \ [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], [[6. Mechanics/Rules/conditions.md#deafened\|deafened]],\
    \ [[6. Mechanics/Rules/conditions.md#frightened\|frightened]], [[6. Mechanics/Rules/conditions.md#stunned\|stunned]],\
    \ or knocked [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]]."
  "name": "Two-Headed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 12 Constitution saving throw against disease or become\
    \ [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the disease is cured.\
    \ Every 24 hours that elapse, the creature must repeat the saving throw, reducing\
    \ its hit point maximum by 5 (dice: 1d10|avg (1d10)) on a failure. This reduction\
    \ lasts until the disease is cured. The creature dies if the disease reduces its\
    \ hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "WDH"
- "WDMM"
- "MOT"
- "LoX"
"image": "/compendium/bestiary/monstrosity/token/death-dog.png"
aliases: ["Death Dog"]
---
# Death Dog
*Source: Monster Manual p. 321, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Mythic Odysseys of Theros, Light of Xaryxis*  

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

```ad-statblock
title: Death Dog
![[/6. Mechanics/Bestiary/Monstrosity/Token/death-dog.png#token]]
*Medium monstrosity, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** `dice: 6d8 + 12|text(39)` (6d8 + 12) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|14 (+2)| 3 (-4)|13 (+1)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** —
- **Challenge** 1

## Traits

***Two-Headed.*** The dog has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks and on saving throws against being [[6. Mechanics/Rules/conditions.md#blinded\|blinded]], [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], [[6. Mechanics/Rules/conditions.md#deafened\|deafened]], [[6. Mechanics/Rules/conditions.md#frightened\|frightened]], [[6. Mechanics/Rules/conditions.md#stunned\|stunned]], or knocked [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]].

## Actions

***Multiattack.*** The dog makes two bite attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (`dice: 1d10` (`1d10`)) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.
```
^statblock

## Environment

desert