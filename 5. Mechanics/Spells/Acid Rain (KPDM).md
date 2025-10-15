---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Warlock
  - Wizard
school: Conjuration
level: 5
ritual: false
components: 'V, S, M (a drop of acid)'
verbal: true
somatic: true
material: true
material_desc: a drop of acid
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 150 feet
aliases:
  - Acid Rain
damage:
  base: 6d6
  scaling:
    damage: 1d6
    level: 6
  types:
    - acid
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Acid Rain
*5th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a drop of acid)
- **Duration:** Concentration, up to 1 minute

You unleash a storm of swirling acid in a cylinder 20 feet wide and 30 feet high, centered on a point you can see. The area is heavily obscured by the driving acidfall. A creature that starts its turn in the area or that enters the area for the first time on its turn takes `dice:6d6|noform|noparens|avg` (`6d6`) acid damage, or half as much damage if it makes a successful Dexterity saving throw. A creature takes half as much damage from the acid (as if it had made a successful saving throw) at the start of its first turn after leaving the affected area.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 164*
