---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/paladin
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Paladin
school: Necromancy
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
  - Withering Smite
damage:
  base: 1d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - necrotic
---
# Withering Smite
*1st-level, Necromancy*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V
- **Duration:** Concentration, up to 1 minute

Your weapon radiates terrible energy that empowers the next strike you make with it. The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage.

If the target of that attack was a creature, it must make a successful Constitution saving throw or take `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage at the start of each of its turns for 1 minute, its flesh rotting around the wound. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. The rotting effect also ends if the affected creature receives magical healing.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the extra damage dealt by the weapon's hit increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st. Subsequent necrotic damage doesn't increase.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]

*Source: Deep Magic p. 313*
