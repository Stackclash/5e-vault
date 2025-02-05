---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: mountain, forest, festerwood
size: Medium
tags:
- compendium/src/5e/tgs1
- monster/cr/1
- monster/environment/festerwood
- monster/environment/forest
- monster/environment/mountain
- monster/size/medium
- monster/type/undead
aliases: ["Risen Sporehusk"]
---
# [Risen Sporehusk](compendium\bestiary\undead/risen-sporehusk-tgs1.md)
*Source: The Griffon's Saddlebag, Book 1 p. 186*

The creatures that fall victim to the Lightspore's influence become sporehusks: empty shells of their former selves whose only purpose is to nourish the great Lightspore at the center of the festerwood.

When a creature dies while it has at least one Spore Counter, it becomes a [risen sporehusk](compendium/bestiary/undead/risen-sporehusk-tgs1.md) after 24 hours. If it is slain again, the corpse remains dead.

Sporehusks will not attack unless provoked. Their natural preference is to shamble their way towards the Lightspore, but will defend themselves if attacked or otherwise prevented from reaching their destination.

> [!note] Transformative Spores
> 
> At the end of every 24 hours that a creature spends above ground in the Festerwood, that creature is forced to make a DC 5 Constitution saving throw. On a failure, that creature gains one Spore Counter. Rolling a 1 on this saving throw is always considered a failure, regardless of the roll's total. If a creature reaches 3 Spore Counters, that creature becomes a sporehusk.
^transformative-spores

## Becoming a Sporehusk

Any creature made from living tissue can become a sporehusk, including undead risen from such creatures. When a creature becomes a sporehusk, it retains all its statistics except as noted below.

### Alignment

The sporehusk's alignment becomes neutral evil. The sporehusk loses all motivations, bonds, and loyalties it had in its previous life.

### Natural Armor

The sporehusk's armor class can't be less than 12 + its Dexterity modifier.

### Hit Points

The sporehusk gains 2 hit dice, increasing its hit point maximum accordingly.

### Ability Scores

The sporehusk's Strength and Constitution scores increase by 2, and its Dexterity, Wisdom, and Charisma are reduced by 2 (minimum 1). Its Intelligence score becomes 6, unless it is already lower.

### Senses

The sporehusk has [blindsight](/compendium/rules/senses.md#Blindsight) with a radius of 15 feet and [darkvision](/compendium/rules/senses.md#Darkvision) with a radius of 60 feet, unless it has a superior darkvision range.

### Damage Vulnerabilities

The sporehusk has vulnerability to fire and radiant damage.

### Damage Resistances

The sporehusk has resistance to poison damage.

### Condition Immunities

The sporehusk has immunity to the [charmed](/compendium/rules/conditions.md#Charmed) and [poisoned](/compendium/rules/conditions.md#Poisoned) conditions.

### Languages

The sporehusk understands any languages it knew previously, but can't speak.

### Regeneration

The sporehusk regains 5 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of the sporehusk's next turn. The sporehusk dies only if it starts its turn with 0 hit points and doesn't regenerate.

### Sunlight Weakness

While in sunlight, the sporehusk has disadvantage on attack rolls, ability checks, and saving throws.

### Multiattack

The sporehusk makes one grab attack. If that attack hits, the sporehusk can make one bite attack against the same target. If the creature already has a multiattack, the GM can decide to either replace it, or add this as an alternative.

### New Action: Grab

*Melee Weapon Attack:* using Strength. On a hit, the attack deals `dice:1d6|noform|avg` (`1d6`) + Strength modifier bludgeoning damage and if the target is a creature, it is grappled. The escape DC of the grapple is equal to 10 + the creature's Strength modifier.

### New Action: Bite

*Melee Weapon Attack:* using Strength, targeting a creature grappled by the sporehusk. On a hit, the attack deals `dice:1d8|noform|avg` (`1d8`) + Strength modifier piercing damage.

> [!note] REMINDER: Changing Ability Scores
> 
> When you change a creature's ability scores, remember to adjust any bonuses for attack and damage rolls, as well as for AC, hit points, saving throws, and skills.
^reminder-changing-ability-scores

## Example Sporehusk

Use the new abilities and features from the *Becoming A Sporehusk* section to create the statistics for a newly turned sporehusk. As an example, the sporehusk template has been applied to a human scout to create a [scout sporehusk](compendium/bestiary/humanoid/scout-sporehusk-tgs1.md).

## Saving Sporehusks

A sporehusk subjected to 8 or more hours of sunlight each day for 5 days is cured of its affliction. A [risen sporehusk](compendium/bestiary/undead/risen-sporehusk-tgs1.md) becomes a nonmagical corpse, and a living sporehusk has no memory of its time spent as a husk.

If you reduce a sporehusk to 0 hit points and magically revive it again before it becomes a [risen sporehusk](compendium/bestiary/undead/risen-sporehusk-tgs1.md), the creature returns to its normal faculties with 1 level of exhaustion and two Spore Counters.

```statblock
"name": "Risen Sporehusk (tgs1)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "9"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "5"
- !!int "3"
"speed": "20 ft."
"damage_vulnerabilities": "fire, radiant"
"damage_resistances": "bludgeoning, piercing, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1"
"traits":
- "desc": "If the sporehusk takes radiant damage, it loses its damage resistances\
    \ and gains vulnerability to bludgeoning, piercing, and slashing damage until\
    \ the start of its next turn. If the sporehusk is ever within an area of sunlight,\
    \ it has disadvantage on attack rolls, ability checks, and saving throws until\
    \ the end of its next turn."
  "name": "Radiance Susceptibility"
- "desc": "The sporehusk regains 5 hit points at the start of its turn. If it takes\
    \ fire or radiant damage, this trait doesn't function at the start of the sporehusk's\
    \ next turn. The sporehusk dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The sporehusk makes one grab attack. If that attack hits, the sporehusk\
    \ can make one bite attack against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage and if the target is a creature, it is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 11)."
  "name": "Grab"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target that is grappled\
    \ by the sporehusk. Hit: 5 (1d8 + 1) piercing damage."
  "name": "Bite"
"source":
- "tgs1"
```
^statblock

## Environment

mountain, forest, festerwood

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```