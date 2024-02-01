---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/2
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Tarkanan Assassin"]
---
# [[5. Mechanics\Bestiary\Humanoid\Tarkanan Assassin (ERLW).md|Tarkanan Assassin]]
*Source: Eberron: Rising from the Last War p. 320*  

Tarkanan assassins are the elite killers, spies, and thieves who work for House Tarkanan, a criminal organization specializing in theft and assassination. In addition to their deadly skill, a Tarkanan assassin possesses an aberrant dragonmark—a twisted sigil that provides them with magical power. House Tarkanan actively seeks and recruits people with aberrant dragonmarks.

> [!note] Aberrant Dragonmark Innate Spells
> 
> The power granted by an aberrant dragonmark is unpredictable. When running a Tarkanan assassin, you can roll on the Aberrant Dragonmark Innate Spells table to determine the spells gained from that NPC's aberrant mark, replacing the spells in the stat block's Innate Spellcasting trait.
> 
> | dice: d6 | At Will | 1/Day |
> |----------|---------|-------|
> | 1 | [[5. Mechanics/Spells/Fire Bolt.md|Fire bolt]] (`dice: 2d10\|avg` (`2d10`)) | [[5. Mechanics/Spells/Burning Hands.md|Burning hands]] (`dice: 3d6\|avg` (`3d6`)) |
> | 2 | [[5. Mechanics/Spells/Shocking Grasp.md|Shocking grasp]] (`dice: 2d8\|avg` (`2d8`)) | [[5. Mechanics/Spells/Chromatic Orb.md|Chromatic orb]] (`dice: 4d8\|avg` (`4d8`)) |
> | 3 | [[5. Mechanics/Spells/Poison Spray.md|Poison spray]] (`dice: 2d12\|avg` (`2d12`)) | [[5. Mechanics/Spells/Ray Of Sickness.md|Ray of sickness]] (`dice: 3d8\|avg` (`3d8`)) |
> | 4 | [[5. Mechanics/Spells/Friends.md|Friends]] | [[5. Mechanics/Spells/Charm Person.md|Charm person]] (two creatures) |
> | 5 | [[5. Mechanics/Spells/Minor Illusion.md|Minor illusion]] | [[5. Mechanics/Spells/Thunderwave.md|Thunderwave]] (`dice: 2d8\|avg` (`2d8`)) |
> | 6 | [[5. Mechanics/Spells/Dancing Lights.md|Dancing lights]] | [[5. Mechanics/Spells/Sleep.md|Sleep]] (`dice: 7d8\|avg` (`7d8`)) |
> ^at-will-1-day
^aberrant-dragonmark-innate-spells

```statblock
"name": "Tarkanan Assassin (ERLW)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "3"
  "Sleight of Hand": !!int "5"
  "Deception": !!int "2"
  "Stealth": !!int "5"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Thieves' cant"
"cr": "2"
"traits":
- "desc": "The assassin's spellcasting ability is Constitution (dice: d20+4 (+4\
    \ to hit) with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]]\n\
    \n1/day: [[5. Mechanics/Spells/Chromatic Orb.md|chromatic orb]]"
  "name": "innate"
- "desc": "When the assassin casts an innate spell, each creature within 10 feet of\
    \ the assassin must make a DC 12 Constitution saving throw, taking dice: 1d8|avg\
    \ (1d8) force damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Unstable Mark"
"actions":
- "desc": "The assassin makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 2d6|avg\
    \ (2d6) poison damage."
  "name": "Shortsword"
- "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 120 ft., one target.\
    \ Hit: dice: 2d10|avg (2d10) fire damage. A flammable object hit by this\
    \ spell ignites if it isn't being worn or carried."
  "name": "Fire Bolt (Cantrip)"
- "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 90 ft., one creature.\
    \ Hit: dice: 4d8|avg (4d8) damage of a type chosen by the assassin: acid,\
    \ cold, fire, lightning, poison, or thunder."
  "name": "Chromatic Orb (1/Day)"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Humanoid/token/tarkanan-assassin.png"
```
^statblock