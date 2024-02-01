---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/10
- monster/environment/desert
- monster/environment/forest
- monster/size/medium
- monster/type/fey/elf
statblock: inline
aliases: ["Summer Eladrin"]
---
# [[5. Mechanics\Bestiary\Fey\Summer Eladrin (MPMM).md|Summer Eladrin]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 116*  

When angered, eladrin enter the season of summer, a burning, tempestuous state that transforms them into aggressive warriors eager to vent their wrath. Their magic responds to their fury and amplifies their fighting ability, helping them move with astonishing quickness and strike with terrible force.

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

Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]. When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

```statblock
"name": "Summer Eladrin (MPMM)"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "19"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"stats":
- !!int "19"
- !!int "21"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "18"
"speed": "50 ft."
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "8"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
- "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
    \ must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] of the eladrin for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ ending the effect on itself on a success. If a creature's saving throw is successful\
    \ or the effect ends for it, the creature is immune to any eladrin's Fearsome\
    \ Presence for the next 24 hours."
  "name": "Fearsome Presence"
- "desc": "The eladrin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The eladrin makes two Longsword or Longbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) slashing damage, or dice: 2d10 + 4|avg\
    \ (2d10 + 4) slashing damage if used with two hands, plus dice: 2d8|avg (2d8)\
    \ fire damage."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice: d20+9 (+9 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 2d8 + 5|avg (2d8 + 5) piercing damage plus dice: 2d8|avg\
    \ (2d8) fire damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Fey Step (Recharge 4-6)"
"reactions":
- "desc": "The eladrin adds 3 to its AC against one melee attack that would hit it.\
    \ To do so, the eladrin must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/fey/token/summer-eladrin.png"
```
^statblock

## Environment

desert, forest
