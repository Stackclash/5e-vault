---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
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
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 2
ritual: false
components: 'V, S, M (a metal ring)'
verbal: true
somatic: true
material: true
material_desc: a metal ring
time: 1 Action
duration: Instantaneous
range: Self (15-foot Cone)
aliases:
  - Reverberate
damage:
  base: 4d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - thunder
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cone
  size: 15
---
# Reverberate
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cone)
- **Components:** V, S, M (a metal ring)
- **Duration:** Instantaneous

You touch the ground at your feet with the metal ring, creating an impact that shakes the earth ahead of you. Creatures and unattended objects touching the ground in a 15-foot cone emanating from you take `dice:4d6|noform|noparens|avg` (`4d6`) thunder damage, and creatures fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]]; a creature that makes a successful Dexterity saving throw takes half the damage and does not fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 233*
