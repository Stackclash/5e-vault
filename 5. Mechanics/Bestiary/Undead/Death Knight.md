---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 17
environments: null
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/17
  - monster/size/medium
  - monster/type/undead
aliases:
  - Death Knight
---
# [[5. Mechanics\Bestiary\Undead\Death Knight.md|Death Knight]]
*Source: Monster Manual p. 47, Tasha's Cauldron of Everything, Vecna: Eve of Ruin*

When a paladin that falls from grace dies without seeking atonement, dark powers can transform the once-mortal knight into a hateful undead creature. A death knight is a skeletal warrior clad in fearsome plate armor. Beneath its helmet, one can see the knight's skull with malevolent pinpoints of light burning in its eye sockets.

## Eldritch Power

The death knight retains the ability to cast divine spells. However, no death knight can use its magic to heal. A death knight also attracts and commands lesser undead, although death knights that serve powerful fiends might have fiendish followers instead. Death knights often use warhorse skeletons and nightmares as mounts.

## Immortal Until Redeemed

A death knight can arise anew even after it has been destroyed. Only when it atones for a life of wickedness or finds redemption can it finally escape its undead purgatory and truly perish.

## Undead Nature

A death knight doesn't require air, food, drink, or sleep.

> [!note] Lord Soth
> 
> Lord Soth began his fall from grace with an act of heroism, saving an elf named Isolde from an ogre. Soth and Isolde fell in love, but Soth was already married. He had a servant dispose of his wife and was charged with murder, but fled with Isolde. When his castle fell under siege, he prayed for guidance and was told that he must atone for his misdeeds by completing a quest, but growing fears about Isolde's fidelity caused him to abandon his quest. Because his mission was not accomplished, a great cataclysm swept the land. When Isolde gave birth to a son, Soth refused to believe that the child was his and slew them both. All were incinerated in a fire that swept through the castle, yet Soth would find no rest in death, becoming a death knight.
^lord-soth

```statblock
"name": "Death Knight"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "180"
"hit_dice": "19d8 + 95"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "11"
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": "+6"
  - "wisdom": "+9"
  - "charisma": "+10"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
  - "desc": "The death knight is a 19th-level spellcaster. Its spellcasting ability\
      \ is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the\
      \ following paladin spells prepared:\n\n1st level (4 slots): [[5. Mechanics/Spells/Command.md|command]],\
      \ [[5. Mechanics/Spells/Compelled Duel.md|compelled duel]], [[5. Mechanics/Spells/Searing Smite.md|searing smite]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Hold Person.md|hold person]],\
      \ [[5. Mechanics/Spells/Magic Weapon.md|magic weapon]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Elemental Weapon.md|elemental weapon]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Staggering Smite.md|staggering\
      \ smite]]\n\n5th level (2 slots):\
      \ [[5. Mechanics/Spells/Destructive Wave.md|destructive wave]] (necrotic)"
    "name": "Spellcasting"
  - "desc": "The death knight has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "Unless the death knight is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
      \ it and undead creatures of its choice within 60 feet of it have advantage\
      \ on saving throws against features that turn undead."
    "name": "Marshal Undead"
"actions":
  - "desc": "The death knight makes three longsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9\
      \ (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two\
      \ hands, plus 18 (4d8) necrotic damage."
    "name": "Longsword"
  - "desc": "The death knight hurls a magical ball of fire that explodes at a point\
      \ it can see within 120 feet of it. Each creature in a 20-foot-radius sphere\
      \ centered on that point must make a DC 18 Dexterity saving throw. The sphere\
      \ spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6)\
      \ necrotic damage on a failed save, or half as much damage on a successful one."
    "name": "Hellfire Orb (1/Day)"
"reactions":
  - "desc": "The death knight adds 6 to its AC against one melee attack that would\
      \ hit it. To do so, the death knight must see the attacker and be wielding a\
      \ melee weapon."
    "name": "Parry"
"source":
  - "MM"
  - "TCE"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/death-knight.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
