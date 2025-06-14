---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: desert
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/desert
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Death Dog
---
# [[5. Mechanics\Bestiary\Monstrosity\Death Dog.md|Death Dog]]
*Source: Monster Manual p. 321. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

```statblock
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "3"
  - !!int "13"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The dog has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
      \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
    "name": "Two-Headed"
"actions":
  - "desc": "The dog makes two bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage. If the target is a creature, it must succeed on a DC\
      \ 12 Constitution saving throw against disease or become [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ until the disease is cured. Every 24 hours that elapse, the creature must\
      \ repeat the saving throw, reducing its hit point maximum by 5 (d10) on a failure.\
      \ This reduction lasts until the disease is cured. The creature dies if the\
      \ disease reduces its hit point maximum to 0."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/death-dog.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
