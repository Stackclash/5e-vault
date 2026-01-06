---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/level/1st-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Ranger
school: Transmutation
level: 1
ritual: false
components: 'V, S, M (a drop of snake venom or a patch of snakeskin)'
verbal: true
somatic: true
material: true
material_desc: a drop of snake venom or a patch of snakeskin
time: 1 Action
duration: 1 minute
range: Touch
aliases:
  - Cobra Fangs
damage:
  base: 3d6
  scaling:
    damage: null
    level: 3
  types:
    - piercing
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
---
# Cobra Fangs
*1st-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S, M (a drop of snake venom or a patch of snakeskin)
- **Duration:** 1 minute

The spell causes the target to grow great, snake-like fangs. An unwilling creature must make a Wisdom saving throw to avoid the effect. The spell fails if the target already has a bite attack that deals poison damage.

If the target doesn't have a bite attack, it gains one. The target is proficient with the bite, and it adds its Strength modifier to the attack and damage rolls. The damage is piercing and the damage die is a `dice:d4|noform|noparens|avg` (`d4`).

When the target hits a creature with its bite attack, the creature must make a Constitution saving throw, taking `dice:3d6|noform|noparens|avg` (`3d6`) poison damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the target's bite counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Deep Magic p. 51*
