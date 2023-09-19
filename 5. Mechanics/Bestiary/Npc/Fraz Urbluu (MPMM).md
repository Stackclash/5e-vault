---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/fiend/demon
aliases: ["Fraz-Urb'luu"]
---
# Fraz-Urb'luu
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 129*  

Fraz-Urb'luu is the Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]] and Demon Lord of Illusions. He uses every trick, every ounce of demonic cunning, to manipulate his enemies—mortal and Fiend alike—to do his will. Fraz-Urb'luu can create dreamlands and mind-bending fantasies able to deceive the most discerning foes.

Once imprisoned for centuries below Castle Greyhawk on the world of Oerth, Fraz-Urb'luu has slowly rebuilt his power in the Abyss. He seeks the pieces of the legendary [[5. Mechanics/Items/Staff Of Power.md|staff of power]] taken from him by those who imprisoned him and commands his servants to do likewise.

The Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]]'s true form is like that of a great gargoyle, some 12 feet tall, with an extended, muscular neck; a smiling face framed by long, pointed ears and lank, dark hair; and bat-like wings are furled against his powerful shoulders. He can assume other forms, however, from the hideous to the beautiful.

Many of the cultists of Fraz-Urb'luu aren't even aware they serve the Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]], believing their master is a beneficent being and granter of wishes, some lost god or Celestial, or even another Fiend. Fraz-Urb'luu wears all these masks and more. He particularly delights in aiding demon-hunters against his demonic adversaries, driving the hunters to greater and greater atrocities in the name of their cause, only to eventually reveal his true nature and claim their souls as his own.

## Cultists of Fraz-Urb'luu

> [!note]
> See the Cult of Fraz-Urb'luu entry.

## Fraz-Urb'luu's Lair

Fraz-Urb'luu's lair lies within the abyssal realm of Hollow's Heart, a plain of white dust with few structures on it. The lair itself is the city of Zoragmelok, a circular fortress surrounded by adamantine walls topped with razors and hooks. Corkscrew towers loom above twisted domes and vast amphitheaters, forming a surreal and disorienting cityscape.

The challenge rating of Fraz-Urb'luu is 24 (62,000 XP) when he's encountered in his lair.

```statblock
"name": "Fraz-Urb'luu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "337"
"hit_dice": "27d10 + 189"
"stats":
- !!int "29"
- !!int "12"
- !!int "25"
- !!int "26"
- !!int "24"
- !!int "26"
"speed": "40 ft., fly 40 ft."
"saves":
  "Dexterity": "+8"
  "Wisdom": "+14"
  "Intelligence": "+15"
  "Constitution": "+14"
"skillsaves":
  "Deception": "+15"
  "Stealth": "+8"
  "Perception": "+14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Fraz-Urb'luu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [[5. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium when changing\
    \ his appearance), [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [dispel\
    \ magic](compendium/spells/dispel-magic.md), [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]]\n\
    \n1/day each: [[5. Mechanics/Spells/Modify Memory.md|modify memory]], [project\
    \ image](compendium/spells/project-image.md)\n\n3/day each: [[5. Mechanics/Spells/Mislead.md|mislead]],\
    \ [[5. Mechanics/Spells/Programmed Illusion.md|programmed illusion]], [[5. Mechanics/Spells/Seeming.md|seeming]]"
  "name": "spells"
- "desc": "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Fraz-Urb'luu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Fraz-Urb'luu can't be targeted by divination magic, perceived through magical\
    \ scrying sensors, or detected by abilities that sense demons or Fiends."
  "name": "Undetectable"
"actions":
- "desc": "Fraz-Urb'luu makes one Bite attack and two Fist attacks, and he uses Phantasmal\
    \ Terror."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d6 + 9|avg (3d6 + 9) force damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 9|avg (3d8 + 9) force damage."
  "name": "Fist"
- "desc": "Fraz-Urb'luu targets one creature he can see within 120 feet of him. The\
    \ target must succeed on a DC 23 Wisdom saving throw, or it takes dice: 3d10|avg\
    \ (3d10) psychic damage and is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of Fraz-Urb'luu until the end of its next turn."
  "name": "Phantasmal Terror"
"legendary_actions":
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d10 + 9|avg (2d10 + 9) force damage. If the target is a Large\
    \ or smaller creature, it is also [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 24), and it is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ until the grapple ends. Fraz-Urb'luu can grapple only one creature with his\
    \ tail at a time."
  "name": "Tail"
- "desc": "Fraz-Urb'luu uses Phantasmal Terror."
  "name": "Terror (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/fraz-urbluu.png"
```
^statblock