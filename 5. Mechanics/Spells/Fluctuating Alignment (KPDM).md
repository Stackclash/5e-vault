---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/enchantment
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Enchantment
level: 4
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 120 feet
aliases:
  - Fluctuating Alignment
damage:
  base: 1d20
  scaling:
    damage: null
    level: null
  types: []
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Fluctuating Alignment
*4th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

You channel the force of chaos to taint your target's mind. A target that gets a failure on a Wisdom saving throw must roll `dice:1d20|noform|noparens|avg` (`1d20`) and consult the Alignment Fluctuation table to find its new alignment, and it must roll again after every minute of the spell's duration. The target's alignment stops fluctuating and returns to normal when the spell ends. These changes do not make the affected creature friendly or hostile toward the caster, but they can cause creatures to behave in unpredictable ways.

**Alignment Fluctuation**

`dice: [[/5. Mechanics/Spells/Fluctuating Alignment (KPDM).md#^alignment-fluctuation]]`

| dice: d20 | Alignment |
|-----------|-----------|
| 1-2 | Chaotic good |
| 3-4 | Chaotic neutral |
| 5-7 | Chaotic evil |
| 8-9 | Neutral evil |
| 10-11 | Lawful evil |
| 12-14 | Lawful good |
| 15-16 | Lawful neutral |
| 17-18 | Neutral good |
| 19-20 | Neutral |
^alignment-fluctuation

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 184*
