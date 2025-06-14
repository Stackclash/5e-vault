---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: 'underdark, mountain, forest, hill, urban'
size: Medium
tags:
  - compendium/src/5e/vgm
  - monster/cr/3
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/orc
aliases:
  - Orc Red Fang of Shargaas
---
# [[5. Mechanics\Bestiary\Humanoid\Orc Red Fang Of Shargaas (VGM).md|Orc Red Fang of Shargaas]]
*Source: Volo's Guide to Monsters p. 185*

Shargaas is the orc deity of deep darkness and sneakiness, a murderous god who hates anything that lives that isn't an orc. Orcs consider Shargaas to be a divinity suited to pariahs and weaklings, all of them unfit for true roles in tribal life. These outsiders live in the most remote, deepest parts of the tribe's domain.

The elite among Shargaas's followers are the assassins and thieves that follow the cult of the Red Fang. They perform assassinations, stealthy raids, and other covert operations on the tribe's behalf. They rely on a mix of intense training and magic granted to them by Shargaas.

Most Red Fang enclaves keep and nurture giant bats, creatures that are sacred to Shargaas. Red Fangs ride these bats into battle or on secret raids and assassination missions into enemy territory.

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

> [!quote] A quote from Elminster  
> 
> An orc life is a god-ridden life. Luthic's at birth, Luthic's at death, and striving to prove themselves to Gruumsh in between.


```statblock
"name": "Orc Red Fang Of Shargaas (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "15"
  - !!int "9"
  - !!int "11"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+1"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "3"
"traits":
  - "desc": "On each of its turns, the orc can use a bonus action to take the Dash,\
      \ Disengage, or Hide action."
    "name": "Cunning Action"
  - "desc": "The orc deals 2 extra dice of damage when it hits a target with a weapon\
      \ attack (included in its attacks)."
    "name": "Hand of Shargaas"
  - "desc": "Magical darkness doesn't impede the orc's darkvision."
    "name": "Shargaas's Sight"
  - "desc": "In the first round of a combat, the orc has advantage on attack rolls\
      \ against any creature that hasn't taken a turn yet. If the orc hits a creature\
      \ that round who was [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]],\
      \ the hit is automatically a critical hit."
    "name": "Slayer"
"actions":
  - "desc": "The orc makes two scimitar or dart attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13\
      \ (3d6 + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit:\
      \ 10 (3d4 + 3) piercing damage."
    "name": "Dart"
  - "desc": "The orc casts [[5. Mechanics/Spells/Darkness.md|darkness]] without any components.\
      \ Wisdom is its spellcasting ability."
    "name": "Veil of Shargaas (Recharges after a Short or Long Rest)"
"source":
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/orc-red-fang-of-shargaas-vgm.webp"
```
^statblock

## Environment

underdark, mountain, forest, hill, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
