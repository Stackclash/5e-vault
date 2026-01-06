---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/divination
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Divination
level: 2
ritual: false
components: S
verbal: false
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 hour'
range: 60 feet
aliases:
  - Mind Spike
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: half damage
---
# Mind Spike
*2nd-level, Divination*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** S
- **Duration:** Concentration, up to 1 hour

You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking `dice:3d8|noform|noparens|avg` (`3d8`) psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's [[/5. Mechanics/Rules/Conditions.md#Invisible\|invisible]], it gains no benefit from that condition against you.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 162*
