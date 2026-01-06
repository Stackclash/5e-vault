---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/warlock
  - spell/level/3rd-level
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Warlock
school: Necromancy
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 3 days
range: Touch
aliases:
  - Seeping Death
damage:
  base: 1d4
  scaling:
    damage: null
    level: null
  types: []
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Seeping Death
*3rd-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** 3 days

Your touch inflicts a virulent, flesh-eating disease. Make a melee spell attack against a creature within your reach. On a hit, the creature's Dexterity score is reduced by `dice:1d4|noform|noparens|avg` (`1d4`), and it is afflicted with the *seeping death* disease for the duration.

Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it and can end the spell early.

**Seeping Death**. The creature's flesh is slowly liquefied by a lingering necrotic pestilence. At the end of each long rest, the diseased creature must succeed on a Constitution saving throw or its Dexterity score is reduced by `dice:1d4|noform|noparens|avg` (`1d4`). The reduction lasts until the target finishes a long rest after the disease is cured. If the disease reduces the creature's Dexterity to 0, the creature dies.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Deep Magic p. 105*
