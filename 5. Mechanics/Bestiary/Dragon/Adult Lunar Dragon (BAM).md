---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 13
environments: null
size: Huge
tags:
  - compendium/src/5e/bam
  - monster/cr/13
  - monster/size/huge
  - monster/type/dragon
aliases:
  - Adult Lunar Dragon
---
# [[5. Mechanics/Bestiary/Dragon/Adult Lunar Dragon (BAM).md|Adult Lunar Dragon]]
*Source: Boo's Astral Menagerie p. 34, Vecna: Eve of Ruin*

Lunar dragons (also known as moon dragons or phase dragons) are capricious, xenophobic creatures that make their lairs inside desolate moons by burrowing through the rock.

Before laying eggs, a female lunar dragon stocks her lair with food; she won't leave the lair again until the eggs hatch and the offspring are old enough to fend for themselves. Lunar dragon eggs have stony shells that are pale white to light gray in color. Lunar dragons are alabaster white when they hatch and gradually turn darker as they age. Ancient moon dragons are the color of slate.

Lunar dragons enjoy depriving other creatures of treasure more than acquiring the treasure themselves. Often found among the treasures in a lunar dragon's hoard are one or more spelljamming helms (see the *Astral Adventurer's Guide*) taken from vessels that dared to invade the dragon's territory.

A lunar dragon can become incorporeal, but not to the extent that it can pass through other creatures or solid objects. In this semi-incorporeal state, roughly half of the dragon's body has a dark, indistinctly spectral form.

## A Lunar Dragon's Lair

The cave complex where a lunar dragon makes its lair contains ample space for food, as well as one or more hidden chambers where the dragon keeps its treasure. Depending on the composition and features of the moon, the lair might contain natural springs and heat vents, wild gardens, crystal formations, magical phenomena, or an ecosystem of lesser life forms that have adapted to living with the dragon.

```statblock
"name": "Adult Lunar Dragon (BAM)"
"size": "Huge"
"type": "dragon"
"alignment": "typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "23"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "darkvision 240 ft., passive Perception 21"
"languages": "Draconic"
"cr": "13"
"traits":
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "The dragon can burrow through solid rock at half its burrowing speed and\
    \ leaves a 15-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- "desc": "The dragon doesn't require air."
  "name": "Unusual Nature"
"actions":
- "desc": "The dragon makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 13\
    \ (2d6 + 6) piercing damage plus 3 (1d6) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 13\
    \ (2d6 + 6) bludgeoning damage."
  "name": "Tail"
- "desc": "The dragon exhales a blast of frost in a 60-foot cone. Each creature in\
    \ the cone must make a DC 18 Constitution saving throw. On a failed save, the\
    \ creature takes 36 (8d8) cold damage, and its speed is reduced to 0 until the\
    \ end of its next turn. On a successful save, the creature takes half as much\
    \ damage, and its speed isn't reduced."
  "name": "Cold Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "The dragon becomes partially incorporeal for as long as it maintains [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ on the effect (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
    \ on a spell). While partially incorporeal, the dragon has resistance to bludgeoning,\
    \ piercing, and slashing damage."
  "name": "Phase (3/Day)"
"legendary_actions":
- "desc": "The dragon makes one Tail attack."
  "name": "Tail Attack"
- "desc": "Magical ice covers the ground in a 20-foot radius centered on a point the\
    \ dragon can see within 120 feet of itself. The ice, which is difficult terrain\
    \ for all creatures except lunar dragons, lasts for 10 minutes or until the dragon\
    \ uses this legendary action again."
  "name": "Treacherous Ice"
"source":
- "BAM"
- "VEoR"
"image": "5. Mechanics/Bestiary/Dragon/token/adult-lunar-dragon-bam.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
