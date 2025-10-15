---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Warlock
  - Wizard
school: Evocation
level: 2
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 1 round
range: 60 feet
aliases:
  - Orb of Light
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - radiant
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Orb of Light
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** 1 round

An orb of light the size of your hand shoots from your fingertips toward a creature within range, which takes `dice:3d8|noform|noparens|avg` (`3d8`) radiant damage and is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] for 1 round. A target that makes a successful Dexterity saving throw takes half the damage and is not [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]].

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 224*
