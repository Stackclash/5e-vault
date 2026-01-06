---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
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
level: 4
ritual: false
components: 'V, S, M (a tiny copper kettle or boiler)'
verbal: true
somatic: true
material: true
material_desc: a tiny copper kettle or boiler
time: 1 Action
duration: Instantaneous
range: Self (15-foot Radius)
aliases:
  - Steam Blast
damage:
  base: 5d8
  scaling:
    damage: 1d8
    level: 5
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: radius
  size: 15
---
# Steam Blast
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Radius)
- **Components:** V, S, M (a tiny copper kettle or boiler)
- **Duration:** Instantaneous

You unleash a burst of superheated steam in a 15-foot radius around you. All other creatures in the area take `dice:5d8|noform|noparens|avg` (`5d8`) fire damage, or half as much damage on a successful Dexterity saving throw. Nonmagical fires smaller than a bonfire are extinguished, and everything becomes wet.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 109*
