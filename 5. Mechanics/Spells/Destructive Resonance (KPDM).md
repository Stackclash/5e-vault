---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/enchantment
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
  - spell/subclass/void-domain
classes:
  - Bard
  - Cleric (Void Domain)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Wizard
school: Enchantment
level: 2
damage:
  base: 4d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
ritual: false
time: 1 Action
duration: Instantaneous
range: Self (15-foot Cone)
somatic: true
verbal: true
area:
  shape: cone
  size: 15
aliases:
  - Destructive Resonance
---
# Destructive Resonance
*2nd-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cone)
- **Components:** V, S
- **Duration:** Instantaneous

You shout a scathing string of Void Speech that assaults the minds of those before you. Each creature in a 15-foot cone that can hear you takes `dice:4d6|noform|noparens|avg` (`4d6`) psychic damage, or half that damage with a successful Wisdom saving throw. A creature damaged by this spell can't take reactions until the start of its next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [Cleric (Void Domain)](/compendium/lists/list-spells-classes-void-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 331*
