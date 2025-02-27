---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'desert, forest, underdark'
size: Huge
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/underdark
  - monster/size/huge
  - monster/type/monstrosity
aliases:
  - Yuan-ti Anathema
---
# [[5. Mechanics\Bestiary\Monstrosity\Yuan Ti Anathema (MPMM).md|Yuan-ti Anathema]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 272, Volo's Guide to Monsters p. 202*

As part of their quest for godhood, a yuan-ti abomination might perform a ritual that, if successful, transforms them into an even greater form: a yuan-ti anathema. This ritual demands the sacrifice of hundreds of snakes and requires the abomination to bathe in the blood of their enemies. The transformation is quick but painful.

Anathemas consider themselves demigods on the path to greater divinity. They demand obeisance from weaker creatures and use every resource at their disposal to war against neighbors, seeking the captives, sacrifices, glory, and riches the anathemas believe they need to achieve true divinity.

Anathemas don't age, allowing them to pursue their goals until the end of days. Truly powerful ones might rule multiple yuan-ti cities and bring entire regions under their control.

```statblock
"name": "Yuan Ti Anathema (MPMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d12 + 72"
"stats":
- !!int "23"
- !!int "13"
- !!int "19"
- !!int "19"
- !!int "17"
- !!int "20"
"speed": "40 ft., climb 40 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "11"
"damage_resistances": "acid, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 21"
"languages": "Abyssal, Common, Draconic"
"cr": "12"
"traits":
- "desc": "The anathema casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [[5. Mechanics/Spells/Animal Friendship.md|animal friendship]] (snakes only)\n\n\
    3/day each: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Entangle.md|entangle]],\
    \ [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Polymorph.md|polymorph]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "Spellcasting (Anathema Form Only)"
- "desc": "The anathema has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Any creature of the anathema's choice, other than a snake or a yuan-ti,\
    \ that starts its turn within 30 feet of the anathema must succeed on a DC 17\
    \ Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of snakes and yuan-ti. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to this anathama's aura for the next\
    \ 24 hours."
  "name": "Ophidiophobia Aura"
- "desc": "The anathema has advantage on saves against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
  "name": "Six Heads"
"actions":
- "desc": "The anathema makes two Claw attacks and one Flurry of Bites attack."
  "name": "Multiattack (Anathema Form Only)"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13\
    \ (2d6 + 6) slashing damage."
  "name": "Claw (Anathema Form Only)"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one creature. Hit: 27\
    \ (6d6 + 6) piercing damage plus 14 (4d6) poison damage."
  "name": "Flurry of Bites (Anathema Form Only)"
- "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one Large or smaller creature.\
    \ Hit: 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage, and the target\
    \ is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 16). Until\
    \ this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and it takes 16 (3d6 + 6) bludgeoning damage plus 7 (2d6) acid damage at the\
    \ start of each of its turns. The anathema can constrict only one creature at\
    \ a time."
  "name": "Constrict (Snake Form Only)"
"bonus_actions":
- "desc": "The anathema transforms into a Huge constrictor snake or back into its\
    \ true form. Its statistics are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/yuan-ti-anathema-mpmm.webp"
```
^statblock

## Environment

desert, forest, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
