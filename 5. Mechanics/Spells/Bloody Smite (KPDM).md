---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/ranger
  - spell/class/wizard
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Ranger
  - Rogue (Arcane Trickster)
  - Wizard
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
  - Bloody Smite
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Bloody Smite
*1st-level, Necromancy*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V
- **Duration:** Concentration, up to 1 minute

The next time during the spell's duration that you hit a creature with a melee weapon attack, your weapon pulses with a dull red light, and the attack deals an extra `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage to the target. Until the spell ends, the target must make a Constitution saving throw at the start of each of its turns. On a failed save, it takes `dice:1d6|noform|noparens|avg` (`1d6`) necrotic damage, it bleeds profusely from the mouth, and it can't speak intelligibly or cast spells that have a verbal component. On a successful save, the spell ends. If the target or an ally within 5 feet of it uses an action to tend the wound and makes a successful Wisdom ([[/5. Mechanics/Rules/Skills.md#Medicine\|Medicine]]) check against your spell save DC, or if the target receives magical healing, the spell ends.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 319*
