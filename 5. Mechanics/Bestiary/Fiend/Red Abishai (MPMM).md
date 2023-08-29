---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/devil
aliases: ["Red Abishai"]
---
# Red Abishai
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 40, Mordenkainen's Tome of Foes p. 160*  

Red abishais have no equals among the abishais when it comes to leadership ability and raw power. Red abishais lead other devils into battle or take charge of troublesome cults to ensure that they continue to carry out Tiamat's commands. A red abishai cuts a fearsome figure, and that sight can be inspiring to the abishai's allies, filling them with a fanatical willingness to fight.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "Red Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "22"
"hp": !!int "289"
"hit_dice": "34d8 + 136"
"stats":
- !!int "23"
- !!int "16"
- !!int "19"
- !!int "14"
- !!int "15"
- !!int "19"
"speed": "30 ft., fly 50 ft."
"saves":
  "Wisdom": "+8"
  "Strength": "+12"
  "Constitution": "+10"
"skillsaves":
  "Intimidation": "+10"
  "Perception": "+8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "19"
"traits":
- "desc": "Magical darkness doesn't impede the abishai's [[\5. Mechanics\Rules\Senses.md#darkvision|darkvision]]."
  "name": "Devil's Sight"
- "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The abishai makes one Bite attack and one Claw attack, and it can use Frightful\
    \ Presence or Incite Fanaticism."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 5 ft., one target.\
    \ Hit: 22 (dice: 3d10 + 6|avg (3d10 + 6)) piercing damage plus 38 (dice:\
    \ 7d10|avg (7d10)) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 5 ft., one target.\
    \ Hit: 17 (dice: 2d10 + 6|avg (2d10 + 6)) force damage plus 11 (dice: 2d10|avg\
    \ (2d10)) fire damage."
  "name": "Claw"
- "desc": "Each creature of the abishai's choice that is within 120 feet and aware\
    \ of the abishai must succeed on a DC 18 Wisdom saving throw or become [[\5. Mechanics\Rules\Conditions.md#frightened|frightened]]\
    \ of it for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature is immune to the\
    \ abishai's Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The abishai chooses up to four other creatures within 60 feet of it that\
    \ can see it. Until the start of the abishai's next turn, each of those creatures\
    \ makes attack rolls with advantage and can't be [[\5. Mechanics\Rules\Conditions.md#frightened|frightened]]."
  "name": "Incite Fanaticism"
- "desc": "The abishai targets one Dragon it can see within 120 feet of it. The Dragon\
    \ must make a DC 18 Charisma saving throw. A chromatic dragon makes this save\
    \ with disadvantage. On a successful save, the target is immune to the abishai's\
    \ Power of the Dragon Queen for 1 hour. On a failed save, the target is [[\5. Mechanics\Rules\Conditions.md#charmed|charmed]]\
    \ by the abishai for 1 hour. While [[\5. Mechanics\Rules\Conditions.md#charmed|charmed]]\
    \ in this way, the target regards the abishai as a trusted friend to be heeded\
    \ and protected. This effect ends if the abishai or its companions deal damage\
    \ to the target."
  "name": "Power of the Dragon Queen"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/fiend/token/red-abishai.png"
```
^statblock

## Environment

mountain, urban