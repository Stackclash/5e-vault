---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/class/warlock
  - spell/feat/magic-initiate/warlock-spells
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/necromancy
classes:
  - Bard (Magical Secrets)
  - Ranger
  - Warlock
school: Necromancy
level: 1
ritual: false
components: 'V, S, M (a drop of blood)'
verbal: true
somatic: true
material: true
material_desc: a drop of blood
time: 1 Bonus Action
duration: 'Concentration, up to 1 minute'
range: Self
aliases:
  - Bleed
damage:
  base: 1d4
  scaling:
    damage: null
    level: null
  types:
    - necrotic
---
# Bleed
*1st-level, Necromancy*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V, S, M (a drop of blood)
- **Duration:** Concentration, up to 1 minute

Crackling energy coats the blade of one weapon you are carrying that deals slashing damage. Until the spell ends, when you hit a creature with the weapon, the weapon deals an extra `dice:1d4|noform|noparens|avg` (`1d4`) necrotic damage and the creature must make a Constitution saving throw. On a failed save, the creature suffers a bleeding wound. Each time you hit a creature with this weapon while it suffers from a bleeding wound, your weapon deals an extra 1 necrotic damage for each time you have previously hit the creature with this weapon (to a maximum of 10 necrotic damage).

Any creature can take an action to stanch the bleeding wound by succeeding on a Wisdom ([[/5. Mechanics/Rules/Skills.md#Medicine\|Medicine]]) check against your spell save DC. The wound also closes if the target receives magical healing. This spell has no effect on undead or constructs.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Deep Magic p. 44*
