---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/size/medium
  - monster/type/monstrosity
statblock: inline
aliases:
  - Death Dog
---
# [[5. Mechanics\Bestiary\Monstrosity\Death Dog.md|Death Dog]]
*Source: Monster Manual p. 321. Available in the SRD and the Basic Rules.*

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

```statblock
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
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- "desc": "The dog has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]."
  "name": "Two-Headed"
"actions":
- "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d6 + 2|text(5) (1d6 + 2) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 12 Constitution saving throw against disease\
    \ or become [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] until the disease\
    \ is cured. Every 24 hours that elapse, the creature must repeat the saving throw,\
    \ reducing its hit point maximum by dice:1d10|text(5) (1d10) on a failure.\
    \ This reduction lasts until the disease is cured. The creature dies if the disease\
    \ reduces its hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
- "SKT"
- "WDH"
- "WDMM"
- "MOT"
- "LoX"
- "AATM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/death-dog.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
