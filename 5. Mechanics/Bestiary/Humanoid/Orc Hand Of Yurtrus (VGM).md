---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underdark, mountain, grassland, forest, hill'
size: Medium
tags:
  - compendium/src/5e/vgm
  - monster/cr/2
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/orc
aliases:
  - Orc Hand of Yurtrus
---
# [[5. Mechanics\Bestiary\Humanoid\Orc Hand Of Yurtrus (VGM).md|Orc Hand of Yurtrus]]
*Source: Volo's Guide to Monsters p. 184*

Yurtrus is the orc god of death and disease. He is a horrifying abomination covered in rot and infection, except for his perfect, smooth white hands.

Orc priests that oversee the line between life and death are known by the others in the tribe as hands of Yurtrus. They dwell on the fringes of an orc lair, usually communing with other orcs through the auspices of those who follow Luthic. The hands of Yurtrus wear pale gloves made of the bleached skin of other humanoids (preferably elves), symbolizing their connection with Yurtrus, and are sometimes called "white hands" as a result.

Every orc knows that the hands of Yurtrus are the tribe's gateway to the ancestors. Orcs who die having served the tribe well go on to rituals meant to send them to Gruumsh's realm.

As befits followers of a god who doesn't speak, hands of Yurtrus remove their tongues to emulate their deity, for a reason similar to why an eye of Gruumsh puts out one of its eyes.

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

> [!quote] A quote from Elminster  
> 
> An orc life is a god-ridden life. Luthic's at birth, Luthic's at death, and striving to prove themselves to Gruumsh in between.


```statblock
"name": "Orc Hand Of Yurtrus (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "11"
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+1"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Common and Orc but can't speak"
"cr": "2"
"traits":
  - "desc": "The orc is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 12, +4 to hit with spell attacks). It requires no verbal components\
      \ to cast its spells. The orc has the following cleric spells prepared:\n\n\
      Cantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]], [[5. Mechanics/Spells/Mending.md|mending]],\
      \ [[5. Mechanics/Spells/Resistance.md|resistance]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Inflict Wounds.md|inflict wounds]], [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil\
      \ and good]]\n\n2nd level\
      \ (3 slots): [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]],\
      \ [[5. Mechanics/Spells/Silence.md|silence]]"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the orc can move up to its speed toward a hostile\
      \ creature that it can see."
    "name": "Aggressive"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (2d8)\
      \ necrotic damage."
    "name": "Touch of the White Hand"
"source":
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/orc-hand-of-yurtrus-vgm.webp"
```
^statblock

## Environment

underdark, mountain, grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
