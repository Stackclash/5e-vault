---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/level/8th-level
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard
  - Cleric
  - Druid
  - Sorcerer
  - Sorcerer (Divine Soul)
school: Evocation
level: 8
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Earthquake
range: 500 feet
material: 'A pinch of dirt, a piece of rock, and a lump of clay.'
area:
  type: sphere
  size: 100
concentration: true
---
# Earthquake
*8th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 500 feet
- **Components:** V, S, M (a pinch of dirt, a piece of rock, and a lump of clay)
- **Duration:** Concentration, up to 1 minute

You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.

The ground in the area becomes difficult terrain. Each creature on the ground that is [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentrating]] must make a Constitution saving throw. On a failed save, the creature's [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]] is broken.

When you cast this spell and at the end of each turn you spend [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentrating]] on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

This spell can have additional effects depending on the terrain in the area, as determined by the DM.

## Fissures

Fissures open throughout the spell's area at the start of your next turn after you cast the spell. A total of `dice:1d6|noform|noparens|avg` (`d6`) such fissures open in locations chosen by the DM. Each is `1d10 × 10` feet deep, 10 feet wide, and extends from one edge of the spell's area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens.

A fissure that opens beneath a structure causes it to automatically collapse (see below).

## Structures

The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes `dice:5d6|noform|noparens|avg` (`5d6`) bludgeoning damage, is knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]], and is buried in the rubble, requiring a DC 20 Strength ([[/5. Mechanics/Rules/Skills.md#Athletics\|Athletics]]) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] or become buried.

## Summary

**Classes**: [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Player's Handbook p. 236. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
