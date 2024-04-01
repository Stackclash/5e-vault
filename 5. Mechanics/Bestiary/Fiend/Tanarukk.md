---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/5
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/fiend/demon
statblock: inline
aliases:
  - Tanarukk
---
# [[5. Mechanics\Bestiary\Fiend\Tanarukk.md|Tanarukk]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 240, Volo's Guide to Monsters p. 186*

> [!quote]- A quote from Tasha  
> 
> I believe spite can be an excellent motivator. But unchecked fury? That rarely leads to anything more than a big mess.

When demonic influence corrupts the leadership of a people or an organization, the leaders might embrace abyssal magic to make tanarukks, using these ferocious warriors to bolster their followers' strength.

The demon lord [[4. World Almanac/NPCs/Baphomet.md|Baphomet]] gladly shares the secret of creating tanarukks with those who entreat him for power; the cult of Gruumsh has also mastered a ritual for this purpose, and bestows it on those deemed worthy. Whatever process is used corrupts the subject, transforming them into a vicious Fiend.

Although tanarukks are valued as fearsome fighters, they are a threat to their allies off the battlefield. When not in combat, a tanarukk is destructive and volatile and is usually kept imprisoned by its allies. If unrestrained, a free tanarukk embarks on a rampage, attempting to take over by force. Most such coups fail but are costly nonetheless. If a tanarukk does seize the leadership of a group, reckless raiding or even war is the course they inevitably choose.

```statblock
"name": "Tanarukk"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "14"
"hp": !!int "95"
"hit_dice": "10d8 + 50"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "9"
- !!int "9"
- !!int "9"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "2"
"damage_resistances": "fire, poison"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common, plus any one language"
"cr": "5"
"traits":
- "desc": "The tanarukk has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The tanarukk makes one Bite attack and one Greatsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Greatsword"
"bonus_actions":
- "desc": "The tanarukk moves up to its speed toward an enemy that it can see."
  "name": "Aggressive"
"reactions":
- "desc": "In response to being hit by a melee attack, the tanarukk can make one Bite\
    \ or Greatsword attack with advantage against the attacker."
  "name": "Unbridled Fury"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Fiend/token/tanarukk-mpmm.webp"
```
^statblock

## Environment

hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
