---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: swamp
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/8
  - monster/environment/swamp
  - monster/size/huge
  - monster/type/monstrosity
aliases:
  - Hydra
---
# [[5. Mechanics\Bestiary\Monstrosity\Hydra.md|Hydra]]
*Source: Monster Manual p. 190. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

The hydra is a reptilian horror with a crocodilian body and multiple heads on long, serpentine necks. Although its heads can be severed, the hydra magically regrows them in short order. A typical specimen has five heads. At the dawn of time, Tiamat, the Queen of Evil Dragons, slew a rival dragon god named Lernaea and cast her blood across the multiverse. Each drop that fell upon a world spawned a multi-headed hydra consumed by a hunger as great as the fallen god's hatred. Great champions are known to test their mettle against these fearsome creatures.

## Everlasting Hunger

A rapacious and gluttonous monster, a hydra snatches and tears apart its prey in a frenzy of feeding. When a hydra has cleared a territory of food and driven off any creatures smart enough to avoid it, it moves on to seek its meals elsewhere. A hydra's hunger is so great that if it can't feed, it might turn against itself, its heads attacking each other as the creature eats itself alive.

## Hardy Water Dwellers

Hydras are natural swimmers, dwelling in rivers, along lakeshores, in ocean shallows, and in wetland bogs. A hydra rarely requires shelter from the elements, so it doesn't normally have a lair. Only in colder climes are hydras drawn to the protection of sheltered caverns and ruins. When a hydra sleeps, at least one of its heads remains awake and alert, making the creature difficult to catch by surprise.

```statblock
"name": "Hydra"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The hydra can hold its breath for 1 hour."
    "name": "Hold Breath"
  - "desc": "The hydra has five heads. While it has more than one head, the hydra\
      \ has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
      \ and knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]].\n\n\
      Whenever the hydra takes 25 or more damage in a single turn, one of its heads\
      \ dies. If all its heads die, the hydra dies.\n\nAt the end of its turn, it\
      \ grows two heads for each of its heads that died since its last turn, unless\
      \ it has taken fire damage since its last turn. The hydra regains 10 hit points\
      \ for each head regrown in this way."
    "name": "Multiple Heads"
  - "desc": "For each head the hydra has beyond one, it gets an extra reaction that\
      \ can be used only for opportunity attacks."
    "name": "Reactive Heads"
  - "desc": "While the hydra sleeps, at least one of its heads is awake."
    "name": "Wakeful"
"actions":
  - "desc": "The hydra makes as many bite attacks as it has heads."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10\
      \ (1d10 + 5) piercing damage."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/hydra.webp"
```
^statblock

## Environment

swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
