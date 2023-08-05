---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 40 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "14"
  "Intelligence": !!int "15"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "15"
  "Stealth": !!int "8"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [detect magic](/compendium/spells/detect-magic.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [phantasmal force](/compendium/spells/phantasmal-force.md)\n\
    \n1/day each: [modify memory](/compendium/spells/modify-memory.md), [project\
    \ image](/compendium/spells/project-image.md)\n\n3/day each: [mislead](/compendium/spells/mislead.md),\
    \ [programmed illusion](/compendium/spells/programmed-illusion.md), [seeming](/compendium/spells/seeming.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu can't be targeted by divination magic, perceived through magical\
    \ scrying sensors, or detected by abilities that sense demons or Fiends."
  "name": "Undetectable"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu makes one Bite attack and two Fist attacks, and he uses Phantasmal\
    \ Terror."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d6 + 9|avg (3d6 + 9) force damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 9|avg (3d8 + 9) force damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu targets one creature he can see within 120 feet of him. The\
    \ target must succeed on a DC 23 Wisdom saving throw, or it takes dice: 3d10|avg\
    \ (3d10) psychic damage and is [frightened](compendium/rules/conditions.md#frightened)\
    \ of Fraz-Urb'luu until the end of its next turn."
  "name": "Phantasmal Terror"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d10 + 9|avg (2d10 + 9) force damage. If the target is a Large\
    \ or smaller creature, it is also [grappled](compendium/rules/conditions.md#grappled)\
    \ (escape DC 24), and it is [restrained](compendium/rules/conditions.md#restrained)\
    \ until the grapple ends. Fraz-Urb'luu can grapple only one creature with his\
    \ tail at a time."
  "name": "Tail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Fraz-Urb'luu uses Phantasmal Terror."
  "name": "Terror (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/npc/token/fraz-urbluu.png"
aliases: ["Fraz-Urb'luu"]
---
# Fraz-Urb'luu
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 129, Mordenkainen's Tome of Foes p. 146*  

Fraz-Urb'luu is the Prince of [Deception](compendium/rules/skills.md#Deception) and Demon Lord of Illusions. He uses every trick, every ounce of demonic cunning, to manipulate his enemies—mortal and Fiend alike—to do his will. Fraz-Urb'luu can create dreamlands and mind-bending fantasies able to deceive the most discerning foes.

Once imprisoned for centuries below Castle Greyhawk on the world of Oerth, Fraz-Urb'luu has slowly rebuilt his power in the Abyss. He seeks the pieces of the legendary [staff of power](/compendium/items/staff-of-power.md) taken from him by those who imprisoned him and commands his servants to do likewise.

The Prince of [Deception](compendium/rules/skills.md#Deception)'s true form is like that of a great gargoyle, some 12 feet tall, with an extended, muscular neck; a smiling face framed by long, pointed ears and lank, dark hair; and bat-like wings are furled against his powerful shoulders. He can assume other forms, however, from the hideous to the beautiful.

Many of the cultists of Fraz-Urb'luu aren't even aware they serve the Prince of [Deception](compendium/rules/skills.md#Deception), believing their master is a beneficent being and granter of wishes, some lost god or Celestial, or even another Fiend. Fraz-Urb'luu wears all these masks and more. He particularly delights in aiding demon-hunters against his demonic adversaries, driving the hunters to greater and greater atrocities in the name of their cause, only to eventually reveal his true nature and claim their souls as his own.

## Cultists of Fraz-Urb'luu

> [!note]
> See the Cult of Fraz-Urb'luu entry.

## Fraz-Urb'luu's Lair

Fraz-Urb'luu's lair lies within the abyssal realm of Hollow's Heart, a plain of white dust with few structures on it. The lair itself is the city of Zoragmelok, a circular fortress surrounded by adamantine walls topped with razors and hooks. Corkscrew towers loom above twisted domes and vast amphitheaters, forming a surreal and disorienting cityscape.

The challenge rating of Fraz-Urb'luu is 24 (62,000 XP) when he's encountered in his lair.

## Stat Block

```ad-statblock
title: Fraz-Urb'luu
![](/compendium/bestiary/npc/token/fraz-urbluu.png#token)
*Large fiend(demon), Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 27d10 + 189|text(337)` (27d10 + 189) 
- **Speed** walk 40 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|29 (+9)|12 (+1)|25 (+7)|26 (+8)|24 (+7)|26 (+8)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +8, Constitution +14, Intelligence +15, Wisdom +14
- **Skills** Deception +15, Perception +14, Stealth +8
- **Senses** truesight 120 ft., passive Perception 24
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 23

## Traits

***Legendary Resistance (3/Day).*** If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Fraz-Urb'luu has advantage on saving throws against spells and other magical effects.

***Undetectable.*** Fraz-Urb'luu can't be targeted by divination magic, perceived through magical scrying sensors, or detected by abilities that sense demons or Fiends.

***Spellcasting.*** Fraz-Urb'luu casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 23):

**At will**: [alter self](/compendium/spells/alter-self.md) (can become Medium when changing his appearance), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md), [phantasmal force](/compendium/spells/phantasmal-force.md)

**1/day each**: [modify memory](/compendium/spells/modify-memory.md), [project image](/compendium/spells/project-image.md)

**3/day each**: [mislead](/compendium/spells/mislead.md), [programmed illusion](/compendium/spells/programmed-illusion.md), [seeming](/compendium/spells/seeming.md)

## Actions

***Multiattack.*** Fraz-Urb'luu makes one Bite attack and two Fist attacks, and he uses Phantasmal Terror.

***Bite.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 3d6 + 9|avg` (`3d6 + 9`) force damage.

***Fist.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 3d8 + 9|avg` (`3d8 + 9`) force damage.

***Phantasmal Terror.*** Fraz-Urb'luu targets one creature he can see within 120 feet of him. The target must succeed on a DC 23 Wisdom saving throw, or it takes `dice: 3d10|avg` (`3d10`) psychic damage and is [frightened](compendium/rules/conditions.md#frightened) of Fraz-Urb'luu until the end of its next turn.

## Legendary Actions

***Tail.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 15 ft., one target. Hit: `dice: 2d10 + 9|avg` (`2d10 + 9`) force damage. If the target is a Large or smaller creature, it is also [grappled](compendium/rules/conditions.md#grappled) (escape DC 24), and it is [restrained](compendium/rules/conditions.md#restrained) until the grapple ends. Fraz-Urb'luu can grapple only one creature with his tail at a time.

***Terror (Costs 2 Actions).*** Fraz-Urb'luu uses Phantasmal Terror.

## Lair actions

On initiative count 20 (losing initiative ties), FrazUrb'luu can take one of the following lair actions when in his lair; he can't take the same lair action two rounds in a row:

- **Conjure Walls and Doors.** Fraz-Urb'luu causes up to five doors within the lair to become walls and an equal number of doors to appear on walls where there previously were none.  
- **Psychic Anguish.** Fraz-Urb'luu creates a wave of anguish. Each creature he can see within the lair must succeed on a DC 23 Wisdom saving throw or take `dice: 6d10|avg` (`6d10`) psychic damage.  
- **Simulacrum.** Fraz-Urb'luu chooses one Humanoid within the lair and instantly creates a simulacrum of that creature (as if created with the [simulacrum](/compendium/spells/simulacrum.md) spell). This simulacrum obeys Fraz-Urb'luu's commands and is destroyed on the next initiative count 20.  

## Regional effects

The region containing Fraz-Urb'luu's lair is warped by his magic, creating one or more of the following effects:

- **Beguiling Realm.** Within 6 miles of the lair, all Charisma ([Persuasion](compendium/rules/skills.md#Persuasion)) and Wisdom ([Insight](compendium/rules/skills.md#Insight)) checks have disadvantage, and all Charisma ([Deception](compendium/rules/skills.md#Deception)) and Charisma ([Performance](compendium/rules/skills.md#Performance)) checks have advantage.  
- **Nostalgic Pangs.** Sapient creatures within 1 mile of the lair frequently see hallucinations of long-dead friends and comrades that vanish after only a brief glimpse.  
- **Twisted Paths.** Roads and paths within 6 miles of the lair twist and turn back on themselves, making navigation in the area exceedingly difficult.  

If Fraz-Urb'luu dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.
```
^statblock