---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/feat/magic-initiate/wizard-spells
  - spell/level/1st-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Druid
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Conjuration
level: 1
ritual: false
components: 'S, M (a drop of water or piece of ice)'
verbal: false
somatic: true
material: true
material_desc: a drop of water or piece of ice
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Ice Knife
damage:
  base: 1d10
  scaling:
    damage: 1d6
    level: 2
  types:
    - cold
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Ice Knife
*1st-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** S, M (a drop of water or piece of ice)
- **Duration:** Instantaneous

You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes `dice:1d10|noform|noparens|avg` (`1d10`) piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take `dice:2d6|noform|noparens|avg` (`2d6`) cold damage.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 157*
