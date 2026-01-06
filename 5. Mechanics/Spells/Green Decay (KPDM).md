---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/level/4th-level
  - spell/ritual
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
school: Necromancy
level: 4
ritual: true
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 hour'
range: Touch
aliases:
  - Green Decay
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
---
# Green Decay
*4th-level, Necromancy (ritual)*  

- **Casting time:** 1 Action unless cast as a ritual
- **Range:** Touch
- **Components:** V, S
- **Duration:** Concentration, up to 1 hour

Your touch inflicts a nauseating, alien rot. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with the supernatural disease *green decay* (see below), and creatures within 15 feet of the target who can see it must make a successful Constitution saving throw or become [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] until the end of their next turn.

You lose concentration on this spell if you can't see the target at the end of your turn.

**Green Decay.** The flesh of a creature that has this disease is slowly consumed by a virulent extraterrestrial fungus. While the disease persists, the creature has disadvantage on Charisma and Wisdom checks and on Wisdom saving throws, and it has vulnerability to acid, fire, and necrotic damage. An affected creature must make a Constitution saving throw at the end of each of its turns. On a failed save, the creature takes `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage, and its hit point maximum is reduced by an amount equal to the necrotic damage taken. If the creature gets three successes on these saving throws before it gets three failures, the disease ends immediately (but the damage and the hit point maximum reduction remain in effect). If the creature gets three failures on these saving throws before it gets three successes, the disease lasts for the duration of the spell, and no further saving throws are allowed.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]

*Source: Deep Magic p. 339*
