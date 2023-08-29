---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/size/medium
- monster/type/fey/elf
aliases: ["Spring Eladrin"]
---
# Spring Eladrin
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 116, Mordenkainen's Tome of Foes p. 196*  

Their hearts filled with joy, spring eladrin cavort through their sylvan realms, their songs and laughter filling the air. These playful eladrin beguile other creatures to fill them with the joy of spring. Their antics can lead other creatures into danger and make mischief for them.

## Eladrin

> [!quote]- A quote from Tasha  
> 
> If an autumn eladrin invites you over for dinner, come with an empty stomach. Their goodwill extends to heaping portions.
> 
> Note to self: send some of my spring eladrin friends to visit Mordenkainen. That'll teach him to lighten up.

Eladrin dwell in the verdant splendor of the Feywild. They are related to the elves found on the Material Plane. But while other elves can temper their wild impulses, eladrin are ruled by emotion—and due to their magical nature, they undergo physical changes to match their changes in temperament.

Eladrin have spent centuries in the Feywild, and most of them have become Fey creatures as a result—those presented here are of the Fey variety. Some are still Humanoid, however, similar in that respect to their other elven kin.

The magic flowing through eladrin responds to their emotional state by transforming them into different seasonal aspects, with behaviors and abilities that change with their forms. Some eladrin might remain in a particular aspect for years, while others run through the emotional spectrum each week.

### Changeable Natures

Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [[\5. Mechanics\Rules\Conditions.md#incapacitated|incapacitated]]. When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

```statblock
"name": "Spring Eladrin"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "11"
- !!int "18"
"speed": "30 ft."
"skillsaves":
  "Deception": "+8"
  "Persuasion": "+8"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- "desc": "The eladrin casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [[5. Mechanics\Spells\Tashas Hideous Laughter.md|Tasha's hideous laughter]]\n\n\
    1/day each: [[5. Mechanics\Spells\Major Image.md|major image]], [[5. Mechanics\Spells\Suggestion.md|suggestion]]"
  "name": "spells"
- "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes\
    \ [[\5. Mechanics\Rules\Conditions.md#charmed|charmed]] by the eladrin for 1 minute.\
    \ On a successful save, the creature becomes immune to any eladrin's Joyful Presence\
    \ for 24 hours.\n\nWhenever the eladrin deals damage to the [[\5. Mechanics\Rules\Conditions.md#charmed|charmed]]\
    \ creature, the [[\5. Mechanics\Rules\Conditions.md#charmed|charmed]] creature can\
    \ repeat the saving throw, ending the effect on itself on a success."
  "name": "Joyful Presence"
- "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The eladrin makes two Longsword or Longbow attacks. It can replace one\
    \ attack with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 6 (dice: 1d8 + 2|avg (1d8 + 2)) slashing damage, or 7 (dice: 1d10\
    \ + 2|avg (1d10 + 2)) slashing damage if used with two hands, plus 22 (dice:\
    \ 5d8|avg (5d8)) psychic damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 150/600 ft., one\
    \ target. Hit: 7 (dice: 1d8 + 3|avg (1d8 + 3)) piercing damage plus 22 (dice:\
    \ 5d8|avg (5d8)) psychic damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/fey/token/spring-eladrin.png"
```
^statblock

## Environment

forest, grassland