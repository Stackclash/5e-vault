---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/ranger
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
  - spell/subclass/winter-domain
classes:
  - Bard (Magical Secrets)
  - Cleric (Winter Domain)
  - Druid
  - Fighter (Eldritch Knight)
  - Ranger
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 4
ritual: false
components: 'V, S, M (a dagger shaped like an icicle)'
verbal: true
somatic: true
material: true
material_desc: a dagger shaped like an icicle
time: 1 Action
duration: Instantaneous
range: Self (30-foot Cone)
aliases:
  - Fusillade of Ice
damage:
  base: 4d6
  scaling:
    damage: 1d6
    level: 5
  types:
    - cold
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cone
  size: 30
---
# Fusillade of Ice
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (30-foot Cone)
- **Components:** V, S, M (a dagger shaped like an icicle)
- **Duration:** Instantaneous

You unleash a spray of razor-sharp ice shards. Each creature in the 30-foot cone takes `dice:4d6|noform|noparens|avg` (`4d6`) cold damage and `dice:3d6|noform|noparens|avg` (`3d6`) piercing damage, or half as much damage with a successful Dexterity saving throw.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by your choice of `dice:1d6|noform|noparens|avg|text(1d6)` cold damage or `dice:1d6|noform|noparens|avg|text(1d6)` piercing damage for each slot level above 4th. You can make a different choice (cold damage or piercing damage) for each slot level above 4th. Casting this spell with a spell slot of 6th level or higher increases the range to a 60-foot cone.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Winter Domain)](/compendium/lists/list-spells-classes-winter-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 272*
