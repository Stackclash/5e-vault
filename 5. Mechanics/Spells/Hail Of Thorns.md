---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/level/1st-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Ranger
school: Conjuration
level: 1
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: 1 Bonus Action
duration: 'Concentration, up to 1 minute'
range: Self
aliases:
  - Hail of Thorns
damage:
  base: 1d10
  scaling:
    damage: 1d10
    level: 2
  types:
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
---
# Hail of Thorns
*1st-level, Conjuration*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V
- **Duration:** Concentration, up to 1 minute

The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes `dice:1d10|noform|noparens|avg` (`1d10`) piercing damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** If you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 1st (to a maximum of `dice:6d10|noform|noparens|avg` (`6d10`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Player's Handbook p. 249*
