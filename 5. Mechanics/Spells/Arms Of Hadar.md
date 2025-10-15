---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/feat/magic-initiate/warlock-spells
  - spell/level/1st-level
  - spell/school/conjuration
  - spell/subclass/aberrant-mind
classes:
  - Bard (Magical Secrets)
  - Sorcerer (Aberrant Mind)
  - Warlock
school: Conjuration
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self (10-foot Radius)
aliases:
  - Arms of Hadar
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - necrotic
saving_throw:
  skills:
    - Strength
  succeeds: see spell description
area:
  shape: radius
  size: 10
---
# Arms of Hadar
*1st-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (10-foot Radius)
- **Components:** V, S
- **Duration:** Instantaneous

You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes `dice:2d6|noform|noparens|avg` (`2d6`) necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Sorcerer (Aberrant Mind)](/compendium/lists/list-spells-classes-aberrant-mind-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Player's Handbook p. 215*
