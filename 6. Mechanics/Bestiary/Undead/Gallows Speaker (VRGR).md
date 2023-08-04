---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Gallows Speaker
ac: 12
hp: 85
hit_dice: 19d8
cr: '6'
stats: [
  8,
  14,
  10,
  10,
  12,
  18
]
source: [
  VRGR
]
aliases: ["Gallows Speaker"]
---
# Gallows Speaker
*Source: Van Richten's Guide to Ravenloft p. 234*  

Gallows speakers arise from places of mass death or sites where creatures regularly meet their doom. Over time, pain-wracked phantoms and lingering souls combine into an entity that knows death in myriad forms. Such amalgamated spirits are tormented by their collective pain, endlessly moaning disjointed final thoughts as they lash out at the living. Having known untold deaths, gallows speakers can predict suffering, foreseeing dooms leveled against them and overwhelming their foes with visions of innumerable violent deaths.

Gallows speakers rarely speak coherently or communicate with the living, instead being entirely obsessed with their memories of death. These undead endlessly mutter to themselves, giving voice to final curses, regrets, pleas, and apologies. Those who linger and listen to a gallows speaker might gain insight into any of its many deaths.

```ad-statblock
title: Gallows Speaker
![[/6. Mechanics/Bestiary/Undead/Token/gallows-speaker.png#token]]
*Medium undead, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 19d8|text(85)` (19d8) 
- **Speed** walk 0 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|14 (+2)|10 (+0)|10 (+0)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4
- **Skills** Perception +7
- **Senses** truesight 60 ft., passive Perception 17
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** any languages its component spirits knew in life
- **Challenge** 6

## Traits

***Divination Senses.*** The gallows speaker can see 60 feet into the Ethereal Plane when it is on the Material Plane and vice versa.

***Incorporeal Movement.*** The gallows speaker can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10\|avg` (`1d10`) force damage if it ends it turn inside an object.

***Unusual Nature.*** The gallows speaker doesn't require air, food, drink, or sleep.

## Actions

***Foretelling Touch.*** *Melee Spell Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: `dice: 2d10 + 4\|avg` (`2d10 + 4`) psychic damage, and the target must roll a `dice: d4\|avg` (`d4`) and subtract the number rolled from the next attack roll or saving throw it makes before the start of the gallows speaker's next turn.

***Suffering Echoes.*** The gallows speaker targets a creature it can see within 30 feet of it. The target must make a DC 15 Wisdom saving throw. On a failed save, the target takes `dice: 3d12\|avg` (`3d12`) psychic damage, and waves of painful memories leap from the target to up to three other creatures of the gallows speaker's choice that are within 30 feet of the target, each of which takes `dice: 3d8\|avg` (`3d8`) psychic damage.
```
^statblock