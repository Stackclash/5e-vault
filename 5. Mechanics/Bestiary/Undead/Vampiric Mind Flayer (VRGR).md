---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/5
  - monster/size/medium
  - monster/type/undead
aliases:
  - Vampiric Mind Flayer
---
# [[5. Mechanics\Bestiary\Undead\Vampiric Mind Flayer (VRGR).md|Vampiric Mind Flayer]]
*Source: Van Richten's Guide to Ravenloft p. 252*

When the mind flayers of Bluetspur (see chapter 3) could find no cure for their overlord's affliction, their degenerating elder brain turned to radical methods to stave off dementia and death. The results were vampiric mind flayers, feral atrocities spawned from mind flayer tadpoles infected with vampirism. These specialized but flawed terrors serve a single purpose: to drain the cerebral fluids from sapient minds. After doing so, they return to the Elder Brain of Bluetspur, which liquefies them into its pool and releases their stolen essences amid a hormone brine. This grotesque balm stalls the elder brain's degeneration but is far from a cure.

Vampiric mind flayers are physically and mentally unstable beings. Ghoulish creatures, they let nothing stand between them and their existential imperatives. Although they possess the telepathic abilities of mind flayers, their brains aren't equipped to employ them. Instead, they bombard nearby creatures with a mental static of visceral visions. While these ravenous creatures are horrifying to behold, they unsettle none more than other mind flayers, which consider them abominations.

```statblock
"name": "Vampiric Mind Flayer (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "5"
  - !!int "15"
  - !!int "18"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": "+7"
  - "intelligence": "+0"
  - "wisdom": "+5"
  - "charisma": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"damage_resistances": "necrotic, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "telepathy 120 ft. but can only project emotions"
"cr": "5"
"traits":
  - "desc": "The mind flayer can climb difficult surfaces, including upside down on\
      \ ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in sunlight, the mind flayer has disadvantage on attack rolls,\
      \ as well as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The mind flayer doesn't require air, food, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The mind flayer makes two Claw attacks or one Claw attack and one Tentacles\
      \ attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage plus 10 (3d6) necrotic damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7\
      \ (1d6 + 4) piercing damage, and if the target is a creature, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 15)."
    "name": "Tentacles"
  - "desc": "The mind flayer targets one creature it is grappling. The target must\
      \ succeed on a DC 15 Wisdom saving throw or take 14 (4d6) psychic damage and\
      \ gain 1 level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]].\
      \ The mind flayer regains a number of hit points equal to the psychic damage\
      \ dealt. A creature reduced to 0 hit points by the psychic damage dies."
    "name": "Drink Sapience"
"bonus_actions":
  - "desc": "The mind flayer magically emits psionic energy in a 30-foot-radius sphere\
      \ centered on itself. Each creature in that area must succeed on a DC 15 Intelligence\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Disrupt Psyche (Recharge 5-6)"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/vampiric-mind-flayer-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
