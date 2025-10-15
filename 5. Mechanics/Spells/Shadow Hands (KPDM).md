---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/1st-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
classes:
  - Bard (Magical Secrets)
  - Rogue (Arcane Trickster)
  - Warlock
  - Wizard
school: Evocation
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self (10-foot Cone)
aliases:
  - Shadow Hands
damage:
  base: 2d4
  scaling:
    damage: 2d4
    level: 2
  types:
    - necrotic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
area:
  shape: cone
  size: 10
---
# Shadow Hands
*1st-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (10-foot Cone)
- **Components:** V, S
- **Duration:** Instantaneous

A freezing blast of shadow explodes out from you in a 10-foot cone. Any creature caught in the shadow takes `dice:2d4|noform|noparens|avg` (`2d4`) necrotic damage and is frightened until the end of its next turn; a successful Wisdom saving throw halves the damage and negates the [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] condition.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage dealt by the attack increases by `dice:2d4|noform|noparens|avg|text(2d4)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 251*
