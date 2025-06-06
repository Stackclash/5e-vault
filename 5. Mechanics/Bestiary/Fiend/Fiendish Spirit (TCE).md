---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: null
environments: null
size: Large
tags:
  - compendium/src/5e/tce
  - monster/cr/
  - monster/size/large
  - monster/type/fiend
aliases:
  - Fiendish Spirit
---
# [[5. Mechanics\Bestiary\Fiend\Fiendish Spirit (TCE).md|Fiendish Spirit]]
*Source: Tasha's Cauldron of Everything p. 112*

```statblock
"name": "Fiendish Spirit (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "40 ft., climb 40 ft. (demon only), fly 60 ft. (devil only)"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
  - "desc": "The fiend has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "When the fiend drops to 0 hit points or the spell ends, the fiend explodes,\
      \ and each creature within 10 feet of it must make a Dexterity saving throw\
      \ against your spell save DC. A creature takes 2d10 + the spell's level fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Death Throes (Demon Only)"
  - "desc": "Magical darkness doesn't impede the fiend's darkvision."
    "name": "Devil's Sight (Devil Only)"
"actions":
  - "desc": "The fiend makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d12 + 3 + the spell's level necrotic damage."
    "name": "Bite (Demon Only)"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d8 + 3 + the spell's level slashing damage. Immediately\
      \ after the attack hits or misses, the fiend can magically teleport up to 30\
      \ feet to an unoccupied space it can see."
    "name": "Claws (Yugoloth Only)"
  - "desc": "Ranged Spell Attack: your spell attack modifier to hit, range 150 ft.,\
      \ one target. Hit: 2d6 + 3 + the spell's level fire damage. If the target\
      \ is a flammable object that isn't being worn or carried, it also catches fire."
    "name": "Hurl Flame (Devil Only)"
"source":
  - "TCE"
"image": "5. Mechanics/Bestiary/Fiend/token/fiendish-spirit-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
