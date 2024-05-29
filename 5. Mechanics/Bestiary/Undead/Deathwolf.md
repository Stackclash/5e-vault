---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/veor
  - monster/cr/15
  - monster/size/medium
  - monster/type/undead
statblock: inline
aliases:
  - Deathwolf
---
# [[5. Mechanics/Bestiary/Undead/Deathwolf.md|Deathwolf]]
*Source: Vecna: Eve of Ruin p. 217*

A deathwolf combines the might of a werewolf, the unholy powers of undeath, and the magic of the full moon. Deathwolves are most common on Krynn but occasionally are found in other locations where lycanthropy and necromancy are prevalent.

To create a deathwolf, a necromancer reanimates the body of a powerful werewolf by conducting a profane ritual fueled by lunar magic. The result is an Undead abomination that resembles a skeletal, shadowy werewolf in hybrid form. Deathwolves can't shapeshift, but they can create dangerous illusions. A deathwolf's bite makes its victims more susceptible to the mind-bending phantoms the deathwolf can conjure.

> [!note] Deathwolves in Dragonlance
> 
> On the world of Krynn, deathwolves are associated with Lunitari, Krynn's red moon and the god of neutral magic. The god Lunitari is a trickster and master of illusions; necromancers perform the ritual to create a deathwolf under the light of her moon to instill the deathwolf with powers of illusion and trickery.
^deathwolves-in-dragonlance

```statblock
"name": "Deathwolf"
"size": "Medium"
"type": "undead"
"alignment": "typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "19"
"speed": "40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "8"
  "Strength": !!int "10"
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "13"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 23"
"languages": "Common"
"cr": "15"
"traits":
- "desc": "If the deathwolf fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "When the deathwolf falls, it descends at a rate of 60 feet per round and\
    \ takes no falling damage."
  "name": "Moon's Grace"
"actions":
- "desc": "The deathwolf makes one Bite attack and two Claw attacks. It can replace\
    \ one of these attacks with Phantom Deathwolf if available."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage plus 9 (2d8) necrotic damage. The target must succeed on\
    \ a DC 16 Wisdom saving throw or have disadvantage on saving throws against the\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] condition. This curse\
    \ lasts until removed by the [[5. Mechanics/Spells/Remove Curse.md|Remove Curse]]\
    \ spell or other magic."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 4 (1d8) necrotic damage."
  "name": "Claw"
- "desc": "The deathwolf creates a terrifying phantom of itself in the mind of a creature\
    \ the deathwolf can see within 60 feet of itself. The target must succeed on a\
    \ DC 17 Intelligence saving throw or have the [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ condition for 1 minute.\n\nWhile the target is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
    \ the phantom deals 21 (6d6) psychic damage to the target at the start of each\
    \ of the target's turns. A [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Phantom Deathwolf (Recharge 5-6)"
"reactions":
- "desc": "The deathwolf can take up to two reactions per round but only one per turn."
  "name": ""
- "desc": "When a creature within 5 feet of the deathwolf makes an attack roll against\
    \ it, the deathwolf forces the creature to succeed on a DC 17 Wisdom saving throw\
    \ or have disadvantage on that roll. After the attack hits or misses, the deathwolf\
    \ makes one Claw attack against the creature."
  "name": "Imposing Slash"
- "desc": "Immediately after taking damage, the deathwolf teleports up to 30 feet\
    \ to an unoccupied space it can see that is in dim light or darkness."
  "name": "Phase Step"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/deathwolf-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
