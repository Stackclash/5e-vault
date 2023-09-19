---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/celestial
aliases: ["The Abbot"]
---
# The Abbot
*Source: Curse of Strahd p. 151, Derived from *  

```statblock
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
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": "+9"
  "Wisdom": "+9"
"skillsaves":
  "Insight": "+9"
  "Perception": "+9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "charmed, exhaustion, frightened"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": "The Abbot's spellcasting ability is Charisma (spell save DC 17). The Abbot\
    \ can innately cast the following spells, requiring only verbal components:\n\n\
    At will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]]\n\
    \n1/day each: [[5. Mechanics/Spells/Commune.md|commune]], [[5. Mechanics/Spells/Raise Dead.md|raise dead]]"
  "name": "innate"
- "desc": "The Abbot's weapon attacks are magical. When The Abbot hits with any weapon,\
    \ the weapon deals an extra dice: 4d8|avg (4d8) radiant damage (included in\
    \ the attack)."
  "name": "Angelic Weapons"
- "desc": "The Abbot has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The Abbot makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) bludgeoning damage plus dice: 4d8|avg\
    \ (4d8) radiant damage."
  "name": "Mace"
- "desc": "The Abbot touches another creature. The target magically regains dice:\
    \ 4d8 + 2|avg (4d8 + 2) hit points and is freed from any curse, disease, poison,\
    \ blindness, or deafness."
  "name": "Healing Touch (3/Day)"
- "desc": "The Abbot magically polymorphs into a humanoid or beast that has a challenge\
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
"image": "compendium/bestiary/npc/token/the-abbot.png"
```
^statblock