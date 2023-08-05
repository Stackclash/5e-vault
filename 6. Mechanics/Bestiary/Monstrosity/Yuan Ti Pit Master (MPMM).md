---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
- monster/size/medium
- monster/type/monstrosity/warlock
statblock: true
statblock-link: "#^statblock"
"name": "Yuan-ti Pit Master"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 14):\n\nAt will:\
    \ [[/6. Mechanics/Spells/animal-friendship.md\|animal friendship]] (snakes only),\
    \ [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/message.md\|message]]\n\n2/day each: [[/6. Mechanics/Spells/hold-person.md\|hold person]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]]\n\n3/day: [[/6. Mechanics/Spells/suggestion.md\|suggestion]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede the yuan-ti's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]]."
  "name": "Devil's Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The yuan-ti makes three Bite attacks or two Spectral Fangs attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing damage plus dice: 2d6|avg (2d6)\
    \ poison damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+6 (+6 to hit), range 120 ft., one target.\
    \ Hit: dice: 3d8 + 3|avg (3d8 + 3) poison damage."
  "name": "Spectral Fangs"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The yuan-ti targets up to five creatures that it can see within 60 feet\
    \ of it. Each target must succeed on a DC 13 Constitution saving throw or fall\
    \ into a magical sleep and be [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]]\
    \ for 10 minutes. A sleeping target awakens if it takes damage or if someone uses\
    \ an action to shake or slap it awake. This magical sleep has no effect on a creature\
    \ immune to being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]]."
  "name": "Merrshaulk's Slumber (1/Day)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It doesn't change form if it dies."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/yuan-ti-pit-master.png"
aliases: ["Yuan-ti Pit Master"]
---
# Yuan-ti Pit Master
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 276, Volo's Guide to Monsters p. 206*  

With snakes for arms, pit masters are yuan-ti malison priests who have made a pact with the god Merrshaulk and seek to rouse him from his slumber by sacrificing Humanoids to him. They are the most traditionalist yuan-ti and believe that they are best equipped to achieve the goals of their people.

Pit masters are deeply involved in yuan-ti's longterm plan to take over Humanoid governments, as well as in the ongoing effort to protect their cities from discovery or attacks by hostiles. They oppose reckless behavior and argue for a slow, cautious approach in all matters.

```ad-statblock
title: Yuan-ti Pit Master
![[/6. Mechanics/Bestiary/Monstrosity/Token/yuan-ti-pit-master.png#token]]
*Medium monstrosity(warlock), Neutral Evil*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 16d8 + 16|text(88)` (16d8 + 16) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|13 (+1)|14 (+2)|12 (+1)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4, Charisma +6
- **Skills** Deception +6, Stealth +5
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Common, Draconic
- **Challenge** 5

## Traits

***Devil's Sight.*** Magical darkness doesn't impede the yuan-ti's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]].

***Magic Resistance.*** The yuan-ti has advantage on saving throws against spells and other magical effects.

***Spellcasting (Yuan-ti Form Only).*** The yuan-ti casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/animal-friendship.md\|animal friendship]] (snakes only), [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]

**2/day each**: [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]

**3/day**: [[/6. Mechanics/Spells/suggestion.md\|suggestion]]

## Actions

***Multiattack.*** The yuan-ti makes three Bite attacks or two Spectral Fangs attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3` (`1d4 + 3`) piercing damage plus `dice: 2d6` (`2d6`) poison damage.

***Spectral Fangs.*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one target. Hit: `dice: 3d8 + 3` (`3d8 + 3`) poison damage.

***Merrshaulk's Slumber (1/Day).*** The yuan-ti targets up to five creatures that it can see within 60 feet of it. Each target must succeed on a DC 13 Constitution saving throw or fall into a magical sleep and be [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 10 minutes. A sleeping target awakens if it takes damage or if someone uses an action to shake or slap it awake. This magical sleep has no effect on a creature immune to being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]].

## Bonus Actions

***Change Shape.*** The yuan-ti transforms into a Medium snake or back into its true form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It doesn't change form if it dies.
```
^statblock

## Environment

desert, forest, underdark