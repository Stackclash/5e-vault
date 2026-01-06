---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/level/3rd-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Ranger
school: Transmutation
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Bonus Action
duration: 'Concentration, up to 1 minute'
range: Self
aliases:
  - Lightning Arrow
damage:
  base: 4d8
  scaling:
    damage: 1d8
    level: 4
  types:
    - lightning
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
---
# Lightning Arrow
*3rd-level, Transmutation*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes `dice:4d8|noform|noparens|avg` (`4d8`) lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.

Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes `dice:2d8|noform|noparens|avg` (`2d8`) lightning damage on a failed save, or half as much damage on a successful one.

The piece of ammunition or weapon then returns to its normal form.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Player's Handbook p. 255*
