---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments:
  - mountain
  - grassland
  - hill
  - coastal
size: Large
alignment: Neutral Good
ac: 13
hp: 26
type: beast
tags:
  - monster
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/coastal
  - monster/environment/grassland
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/beast
aliases:
  - Giant Eagle
---
# [[/5. Mechanics/Bestiary/Beast/Giant Eagle.md|Giant Eagle]]
*Source: Monster Manual p. 324. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A giant eagle is a noble creature that speaks its own language and understands speech in the Common tongue. A mated pair of giant eagles typically has up to four eggs or young in their nest (treat the young as normal eagles).

The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.

A giant fire beetle is a nocturnal creature that takes its name from a pair of glowing glands that give off light. Miners and adventurers prize these creatures, for a giant fire beetle's glands continue to shed light for `dice:1d6|noform|noparens|avg` (`1d6`) days after the beetle dies. Giant fire beetles are most commonly found underground and in dark forests.

A giant lizard can be ridden or used as a draft animal. Lizardfolk also keep them as pets, and subterranean giant lizards are used as mounts and pack animals by drow, duergar, and other Underdark dwellers.

> [!note] Variant: Giant Lizard Traits
> 
> Some giant lizards have one or both of the following traits.
> 
> **Hold Breath.** The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)
> 
> **Spider Climb.** The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
^variant-giant-lizard-traits

Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.

Like their smaller kin, giant sea horses are shy, colorful fish with elongated bodies and curled tails. Aquatic elves train them as mounts.

A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.

To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-filled crevices. Such lairs are often festooned with web cocoons holding past victims.

A giant vulture has advanced intelligence and a malevolent bent. Unlike its smaller kin, it will attack a wounded creature to hasten its end. Giant vultures have been known to haunt a thirsty, starving creature for days to enjoy its suffering.

Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.

```statblock
"name": "Giant Eagle"
"size": "Large"
"type": "beast"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "13"
  - !!int "8"
  - !!int "14"
  - !!int "10"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Giant Eagle, understands Common and Auran but can't speak them"
"cr": "1"
"traits":
  - "desc": "The eagle has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight."
    "name": "Keen Sight"
"actions":
  - "desc": "The eagle makes two attacks: one with its beak and one with its talons."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
      \ + 3) piercing damage."
    "name": "Beak"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage."
    "name": "Talons"
"source":
  - "MM"
"image": "/5. Mechanics/Bestiary/Beast/token/giant-eagle.webp"
```
^statblock

## Environment

mountain, grassland, hill, coastal

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
