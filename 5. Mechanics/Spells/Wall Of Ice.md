---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/evocation
classes:
  - Bard
  - Wizard
school: Evocation
level: 6
ritual: false
time: 1 Action
duration: Up to 10 minutes
components:
  - V
  - S
  - M
aliases:
  - Wall of Ice
range: 120 feet
material: A small piece of quartz.
damageType: Cold
save:
  type: DEX
  success: half
area:
  type: sphere
  size: 10
concentration: true
---
# Wall of Ice
*6th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a small piece of quartz)
- **Duration:** Concentration, up to 10 minutes

You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.

If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes `dice:10d6|noform|noparens|avg` (`10d6`) cold damage, or half as much damage on a successful save.

The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes `dice:5d6|noform|noparens|avg` (`5d6`) cold damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by `dice:2d6|noform|noparens|avg|text(2d6)`, and the damage from passing through the sheet of frigid air increases by `dice:1d6|noform|noparens|avg|text(d6)`, for each slot level above 6th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]

*Source: Player's Handbook p. 285. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
