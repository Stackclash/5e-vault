---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: mountain, desert
size: Large
tags:
- compendium/src/5e/mm
- monster/cr/5
- monster/environment/desert
- monster/environment/mountain
- monster/size/large
- monster/type/elemental
aliases: ["Air Elemental"]
---
# [Air Elemental](compendium\bestiary\elemental/air-elemental.md)
*Source: Monster Manual p. 124, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

An air elemental is a funneling cloud of whirling air with a vague semblance of a face. Although it likes to race across the ground, picking up dust and debris as it goes, it can also fly and attack from above.

An air elemental can turn itself into a screaming cyclone, creating a whirlwind that batters creatures even as it flings them away.

## Elementals

Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.

### Living Elements

On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.

### Conjured by Magic

Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.

### Bound and Shaped

Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.

### Elemental Nature

An elemental doesn't require air, food, drink, or sleep.

```statblock
"name": "Air Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "14"
- !!int "20"
- !!int "14"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "fly 90 ft. (hover)"
"damage_resistances": "lightning; thunder; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [grappled](/compendium/rules/conditions.md#Grappled), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone), [restrained](/compendium/rules/conditions.md#Restrained),\
  \ [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Auran"
"cr": "5"
"traits":
- "desc": "The elemental can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
"actions":
- "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "Each creature in the elemental's space must make a DC 13 Strength saving\
    \ throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung\
    \ up 20 feet away from the elemental in a random direction and knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ If a thrown target strikes an object, such as a wall or floor, the target takes\
    \ 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is\
    \ thrown at another creature, that creature must succeed on a DC 13 Dexterity\
    \ saving throw or take the same damage and be knocked [prone](/compendium/rules/conditions.md#Prone).\n\
    \nIf the saving throw is successful, the target takes half the bludgeoning damage\
    \ and isn't flung away or knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Whirlwind (Recharge 4-6)"
"source":
- "MM"
- "TCE"
- "VEoR"
"image": "compendium/bestiary/elemental/token/air-elemental.webp"
```
^statblock

## Environment

mountain, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```