---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/5
- monster/environment/desert
- monster/environment/forest
- monster/environment/underdark
- monster/size/medium
- monster/type/monstrosity/warlock
statblock: inline
aliases: ["Yuan-ti Pit Master"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Yuan Ti Pit Master (MPMM).md|Yuan-ti Pit Master]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 276*  

With snakes for arms, pit masters are yuan-ti malison priests who have made a pact with the god Merrshaulk and seek to rouse him from his slumber by sacrificing Humanoids to him. They are the most traditionalist yuan-ti and believe that they are best equipped to achieve the goals of their people.

Pit masters are deeply involved in yuan-ti's longterm plan to take over Humanoid governments, as well as in the ongoing effort to protect their cities from discovery or attacks by hostiles. They oppose reckless behavior and argue for a slow, cautious approach in all matters.

```statblock
"name": "Yuan-ti Pit Master (MPMM)"
"size": "Medium"
"type": "monstrosity"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
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
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Draconic"
"cr": "5"
"traits":
- "desc": "The yuan-ti casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 14):\n\nAt will:\
    \ [[5. Mechanics/Spells/Animal Friendship.md|animal friendship]] (snakes only), [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Message.md|message]]\n\
    \n2/day each: [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]\n\
    \n3/day: [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "spells"
- "desc": "Magical darkness doesn't impede the yuan-ti's [[/5. Mechanics/Rules/Senses.md#darkvision|darkvision]]."
  "name": "Devil's Sight"
- "desc": "The yuan-ti has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The yuan-ti makes three Bite attacks or two Spectral Fangs attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing damage plus dice: 2d6|avg\
    \ (2d6) poison damage."
  "name": "Bite"
- "desc": "Ranged Spell Attack: dice: d20+6 (+6 to hit), range 120 ft., one target.\
    \ Hit: dice: 3d8 + 3|avg (3d8 + 3) poison damage."
  "name": "Spectral Fangs"
- "desc": "The yuan-ti targets up to five creatures that it can see within 60 feet\
    \ of it. Each target must succeed on a DC 13 Constitution saving throw or fall\
    \ into a magical sleep and be [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ for 10 minutes. A sleeping target awakens if it takes damage or if someone uses\
    \ an action to shake or slap it awake. This magical sleep has no effect on a creature\
    \ immune to being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]."
  "name": "Merrshaulk's Slumber (1/Day)"
"bonus_actions":
- "desc": "The yuan-ti transforms into a Medium snake or back into its true form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It doesn't change form if it dies."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/monstrosity/token/yuan-ti-pit-master.png"
```
^statblock

## Environment

desert, forest, underdark
