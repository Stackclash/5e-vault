---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/enchantment
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Warlock
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
duration: Instantaneous
range: Self
aliases:
  - Visage of Madness
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - piercing
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Visage of Madness
*4th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S
- **Duration:** Instantaneous

When you cast this spell, your face momentarily becomes that of a demon lord, frightful enough to drive enemies mad. Every foe that's within 30 feet of you and that can see you must make a Wisdom saving throw. On a failed save, a creature claws savagely at its eyes, dealing piercing damage to itself equal to `dice:1d6|noform|noparens|avg` (`1d6`) + the creature's Strength modifier. The creature is also [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the end of its next turn and [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] for `dice:1d4|noform|noparens|avg` (`1d4`) rounds. A creature that rolls maximum damage against itself (a 6 on the `dice:d6|noform|noparens|avg` (`d6`)) is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] permanently.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 118*
