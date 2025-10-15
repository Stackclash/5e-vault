---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/9th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Wizard
school: Transmutation
level: 9
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Blood to Acid
damage:
  base: 10d12
  scaling:
    damage: null
    level: null
  types:
    - acid
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Blood to Acid
*9th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Instantaneous

When you cast this spell, you designate a creature within range and convert its blood into virulent acid. The target must make a Constitution saving throw. On a failed save, it takes `dice:10d12|noform|noparens|avg` (`10d12`) acid damage and is [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] by the pain for `dice:1d4|noform|noparens|avg` (`1d4`) rounds. On a successful save, it takes half the damage and isn't [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]].

Creatures without blood, such as constructs and plants, are not affected by this spell. If blood to acid is cast on a creature composed mainly of blood, such as a blood elemental or a blood zombie, the creature is slain by the spell if its saving throw fails.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 164*
