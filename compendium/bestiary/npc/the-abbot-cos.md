---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/celestial
statblock: true
statblock-link: "#^statblock"
"name": "The Abbot"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot's spellcasting ability is Charisma (spell save DC 17). The Abbot\
    \ can innately cast the following spells, requiring only verbal components:\n\n\
    At will: [detect evil and good](/compendium/spells/detect-evil-and-good.md)\n\
    \n1/day each: [commune](/compendium/spells/commune.md), [raise dead](/compendium/spells/raise-dead.md)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot's weapon attacks are magical. When The Abbot hits with any weapon,\
    \ the weapon deals an extra dice: 4d8|avg (4d8) radiant damage (included in\
    \ the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) bludgeoning damage plus dice: 4d8|avg\
    \ (4d8) radiant damage."
  "name": "Mace"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot touches another creature. The target magically regains 20 (dice:\
    \ 4d8 + 2|avg (4d8 + 2)) hit points and is freed from any curse, disease, poison,\
    \ blindness, or deafness."
  "name": "Healing Touch (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Abbot magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (The Abbot's choice).\n\nIn a new form, The Abbot retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ Dexterity, and special senses are replaced by those of the new form, and it\
    \ gains any statistics and capabilities (except class features, legendary actions,\
    \ and lair actions) that the new form has but that it lacks."
  "name": "Change Shape"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/the-abbot.png"
aliases: ["The Abbot"]
---
# The Abbot
*Source: Curse of Strahd p. 151, Derived from Deva (MM)*  

```ad-statblock
title: The Abbot
![](/compendium/bestiary/npc/token/the-abbot.png#token)
*Medium celestial, Lawful Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 16d8 + 64|text(136)` (16d8 + 64) 
- **Speed** walk 30 ft., fly 90 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|18 (+4)|18 (+4)|17 (+3)|20 (+5)|20 (+5)|

- **Proficiency Bonus** +4
- **Saving Throws** Wisdom +9, Charisma +9
- **Skills** Insight +9, Perception +9
- **Senses** darkvision 120 ft., passive Perception 19
- **Damage Resistances** radiant; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened
- **Languages** all, telepathy 120 ft.
- **Challenge** 10

## Traits

***Angelic Weapons.*** The Abbot's weapon attacks are magical. When The Abbot hits with any weapon, the weapon deals an extra `dice: 4d8|avg` (`4d8`) radiant damage (included in the attack).

***Magic Resistance.*** The Abbot has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The Abbot's spellcasting ability is Charisma (spell save DC 17). The Abbot can innately cast the following spells, requiring only verbal components:

**At will**: [detect evil and good](/compendium/spells/detect-evil-and-good.md)

**1/day each**: [commune](/compendium/spells/commune.md), [raise dead](/compendium/spells/raise-dead.md)

## Actions

***Multiattack.*** The Abbot makes two melee attacks.

***Mace.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) bludgeoning damage plus `dice: 4d8|avg` (`4d8`) radiant damage.

***Healing Touch (3/Day).*** The Abbot touches another creature. The target magically regains 20 (`dice: 4d8 + 2|avg` (`4d8 + 2`)) hit points and is freed from any curse, disease, poison, blindness, or deafness.

***Change Shape.*** The Abbot magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (The Abbot's choice).

In a new form, The Abbot retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.
```
^statblock