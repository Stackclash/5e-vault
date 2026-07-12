---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/feat/fey-touched
  - spell/level/1st-level
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
level: 1
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: '1 Reaction, which you take when an enemy approaches to within 5 feet of you'
duration: Instantaneous
range: 5 feet
aliases:
  - Broken Charge
damage:
  base: 2d4
  scaling:
    damage: 2d4
    level: 2
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Broken Charge
*1st-level, Enchantment*  

- **Casting time:** 1 Reaction, which you take when an enemy approaches to within 5 feet of you
- **Range:** 5 feet
- **Components:** V
- **Duration:** Instantaneous

When an enemy that you can see moves to within 5 feet of you, you utter a perplexing word that alters the foe's course. The enemy must make a successful Wisdom saving throw or take `dice:2d4|noform|noparens|avg` (`2d4`) psychic damage and use the remainder of its speed to move in a direction of your choosing.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the target takes an additional `dice:2d4|noform|noparens|avg|text(2d4)` psychic damage for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 47*
