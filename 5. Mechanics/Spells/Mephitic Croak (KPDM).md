---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Wizard
school: Conjuration
level: 2
ritual: false
components: 'V, S, M (a dead toad and a dram of arsenic worth 10 gp)'
verbal: true
somatic: true
material: true
material_desc: a dead toad and a dram of arsenic worth 10 gp
time: 1 Action
duration: Instantaneous
range: Self (15-foot Cone)
aliases:
  - Mephitic Croak
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - acid
    - thunder
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cone
  size: 15
---
# Mephitic Croak
*2nd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cone)
- **Components:** V, S, M (a dead toad and a dram of arsenic worth 10 gp)
- **Duration:** Instantaneous

You release an intensely loud burp of acidic gas in a 15-foot cone. Creatures in the area take `dice:2d6|noform|noparens|avg` (`2d6`) acid damage plus `dice:2d6|noform|noparens|avg` (`2d6`) thunder damage, or half as much damage with a successful Dexterity saving throw. A creature whose Dexterity saving throw fails must also make a successful Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] and [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] until the start of your next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, both acid and thunder damage increase by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 166*
