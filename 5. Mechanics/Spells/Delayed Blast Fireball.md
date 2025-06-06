---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/7th-level
  - spell/school/evocation
classes:
  - Bard
  - Sorcerer
  - Wizard
school: Evocation
level: 7
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Delayed Blast Fireball
range: 150 feet
material: A tiny ball of bat guano and sulfur.
damageType: Fire
save:
  type: DEX
  success: half
area:
  type: sphere
  size: 20
concentration: true
---
# Delayed Blast Fireball
*7th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a tiny ball of bat guano and sulfur)
- **Duration:** Concentration, up to 1 minute

A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]] is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.

The spell's base damage is `dice:12d6|noform|noparens|avg` (`12d6`). If at the end of your turn the bead has not yet detonated, the damage increases by `dice:1d6|noform|noparens|avg` (`d6`).

If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.

The fire damages objects in the area and ignites flammable objects that aren't being worn or carried.

**At Higher Levels.** When you cast this spell using a spell slot of 8th level or higher, the base damage increases by `dice:1d6|noform|noparens|avg|text(d6)` for each slot level above 7th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]

*Source: Player's Handbook p. 230. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
