---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/level/3rd-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Ranger
  - Sorcerer
  - Warlock
school: Evocation
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Touch
aliases:
  - Booster Shot
damage:
  base: 2d10
  scaling:
    damage: 1d10
    level: 4
  types:
    - acid
    - cold
    - force
    - lightning
    - necrotic
    - psychic
area:
  shape: cone
  size: 60
---
# Booster Shot
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You imbue a two-handed ranged weapon (typically a [[/5. Mechanics/Items/Shortbow.md\|shortbow]], [[/5. Mechanics/Items/Longbow.md\|longbow]], [[/5. Mechanics/Items/Light Crossbow.md\|light crossbow]], or [[/5. Mechanics/Items/Heavy Crossbow.md\|heavy crossbow]]) that you touch with a random magical benefit. While the spell lasts, a projectile fired from the weapon has an effect that occurs on a hit in addition to its normal damage. Roll a `dice:d6|noform|noparens|avg` (`d6`) to determine the additional effect for each casting of this spell.

**Booster Shot Additional Effect**

`dice: [[/5. Mechanics/Spells/Booster Shot (KPDM).md#^booster-shot-additional-effect]]`

| dice: d6 | Effect |
|----------|--------|
| 1 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) acid damage to all creatures within 10 feet of the target |
| 2 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) lightning damage to the target and `dice:1d10\|noform\|noparens\|avg` (`1d10`) lightning damage to all creatures in a 5-foot wide line between the weapon and the target |
| 3 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) necrotic damage to the target, and the target has disadvantage on its first attack roll before the start of the weapon user's next turn |
| 4 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) cold damage to the target and `dice:1d10\|noform\|noparens\|avg` (`1d10`) cold damage to all other creatures in a 60-foot cone in front of the weapon |
| 5 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) force damage to the target, and the target is pushed 20 feet |
| 6 | `dice:2d10\|noform\|noparens\|avg` (`2d10`) psychic damage to the target, and the target is [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the start of the weapon user's next turn |
^booster-shot-additional-effect

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, all damage increases by `dice:1d10|noform|noparens|avg` (`1d10`) for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Deep Magic p. 46*
