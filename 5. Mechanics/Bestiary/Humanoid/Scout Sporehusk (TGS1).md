---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'mountain, forest, festerwood'
size: Medium
tags:
  - compendium/src/5e/tgs1
  - monster/cr/1
  - monster/environment/festerwood
  - monster/environment/forest
  - monster/environment/mountain
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Scout Sporehusk
---
# [[5. Mechanics\Bestiary\Humanoid\Scout Sporehusk (TGS1).md|Scout Sporehusk]]
*Source: The Griffon's Saddlebag, Book 1 p. 187*

The creatures that fall victim to the Lightspore's influence become sporehusks: empty shells of their former selves whose only purpose is to nourish the great Lightspore at the center of the festerwood.

When a creature dies while it has at least one Spore Counter, it becomes a [[5. Mechanics/Bestiary/Undead/Risen Sporehusk (TGS1).md|risen sporehusk]] after 24 hours. If it is slain again, the corpse remains dead.

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

The sporehusk has [[/5. Mechanics/Rules/Senses.md#Blindsight|blindsight]] with a radius of 15 feet and [[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] with a radius of 60 feet, unless it has a superior darkvision range.

### Damage Vulnerabilities

The sporehusk has vulnerability to fire and radiant damage.

### Damage Resistances

The sporehusk has resistance to poison damage.

### Condition Immunities

The sporehusk has immunity to the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] and [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] conditions.

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

Use the new abilities and features from the *Becoming A Sporehusk* section to create the statistics for a newly turned sporehusk. As an example, the sporehusk template has been applied to a human scout to create a [[5. Mechanics/Bestiary/Humanoid/Scout Sporehusk (TGS1).md|scout sporehusk]].

## Saving Sporehusks

A sporehusk subjected to 8 or more hours of sunlight each day for 5 days is cured of its affliction. A [[5. Mechanics/Bestiary/Undead/Risen Sporehusk (TGS1).md|risen sporehusk]] becomes a nonmagical corpse, and a living sporehusk has no memory of its time spent as a husk.

If you reduce a sporehusk to 0 hit points and magically revive it again before it becomes a [[5. Mechanics/Bestiary/Undead/Risen Sporehusk (TGS1).md|risen sporehusk]], the creature returns to its normal faculties with 1 level of exhaustion and two Spore Counters.

```statblock
"name": "Scout Sporehusk (TGS1)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "13"
- !!int "12"
- !!int "16"
- !!int "6"
- !!int "11"
- !!int "9"
"speed": "30 ft."
"damage_vulnerabilities": "fire, radiant"
"damage_resistances": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 15 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
- "desc": "The scout has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or sight."
  "name": "Keen Hearing and Sight"
- "desc": "The sporehusk regains 5 hit points at the start of its turn. If it takes\
    \ fire or radiant damage, this trait doesn't function at the start of the sporehusk's\
    \ next turn. The sporehusk dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- "desc": "While in sunlight, the sporehusk has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- "desc": "The sporehusk makes one grab attack. If that attack hits, the sporehusk\
    \ can make one bite attack against the same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage and if the target is a creature, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 11)."
  "name": "Grab"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target that is grappled\
    \ by the sporehusk. Hit: 5 (1d8 + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit:\
    \ 5 (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "tgs1"
```
^statblock

## Environment

mountain, forest, festerwood

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
