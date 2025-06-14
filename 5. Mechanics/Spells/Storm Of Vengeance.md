---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/druid
  - spell/level/9th-level
  - spell/school/conjuration
classes:
  - Bard
  - Druid
school: Conjuration
level: 9
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
aliases:
  - Storm of Vengeance
range: Sight
damageType: Thunder
save:
  type: CON
  success: none
area:
  type: sphere
  size: 360
concentration: true
---
# Storm of Vengeance
*9th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Sight
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes `dice:2d6|noform|noparens|avg` (`2d6`) thunder damage and becomes [[/5. Mechanics/Rules/Conditions.md#Deafened\|deafened]] for 5 minutes.

Each round you maintain [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]] on this spell, the storm produces different effects on your turn.

## Round 2

Acidic rain falls from the cloud. Each creature and object under the cloud takes `dice:1d6|noform|noparens|avg` (`d6`) acid damage.

## Round 3

You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes `dice:10d6|noform|noparens|avg` (`10d6`) lightning damage on a failed save, or half as much damage on a successful one.

## Round 4

Hailstones rain down from the cloud. Each creature under the cloud takes `dice:2d6|noform|noparens|avg` (`2d6`) bludgeoning damage.

## Round 5–10

Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes `dice:1d6|noform|noparens|avg` (`d6`) cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]] on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.

## Summary

**Classes**: [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]

*Source: Player's Handbook p. 279. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
