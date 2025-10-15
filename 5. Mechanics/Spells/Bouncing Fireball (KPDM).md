---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Evocation
level: 6
ritual: false
components: 'V, S, M (a tiny ball of bat guano and sulfur, and three iron pins)'
verbal: true
somatic: true
material: true
material_desc: 'a tiny ball of bat guano and sulfur, and three iron pins'
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Bouncing Fireball
damage:
  base: 7d6
  scaling:
    damage: 1d6
    level: 7
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Bouncing Fireball
*6th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a tiny ball of bat guano and sulfur, and three iron pins)
- **Duration:** Instantaneous

A bolt of flame streaks from your finger toward a point you choose within range, then explodes into an inferno of flame. Each creature within 20 feet of the explosion takes `dice:7d6|noform|noparens|avg` (`7d6`) fire damage, or half damage with a successful Dexterity saving throw.

Immediately afterward, a second bolt of flame streaks from that explosion to a second target point you can see exactly 40 feet from the first explosion. It explodes again at the second target point, causing another `dice:7d6|noform|noparens|avg` (`7d6`) fire damage (halved by a successful Dexterity saving throw). Then the flame jumps instantly again to a third target point, also within your line of sight and exactly 40 feet from the second explosion, where it detonates for the final time with identical results.

Note that for the second and third bursts, the flame jumps exactly 40 feet—never more, never less—and if any part of a burst area overlaps the area of a previous burst, the burst fails to happen and the spell ends immediately.

**At Higher Levels.** When you cast this spell using a spell slot of 7th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 6th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 353*
