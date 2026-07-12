---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/illusion
  - spell/subclass/arcane-trickster
  - spell/subclass/circle-of-roses
  - spell/subclass/darkness-domain
  - spell/subclass/eldritch-knight
  - spell/subclass/the-genie
  - spell/subclass/the-hexblade
classes:
  - Bard (Magical Secrets)
  - Cleric (Darkness Domain)
  - Druid (Circle of Roses)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Warlock (The Genie)
  - Warlock (The Hexblade)
  - Wizard
school: Illusion
level: 4
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
aliases:
  - Phantasmal Killer
damage:
  base: 4d10
  scaling:
    damage: 1d10
    level: 5
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Phantasmal Killer
*4th-level, Illusion*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] for the duration. At the end of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take `dice:4d10|noform|noparens|avg` (`4d10`) psychic damage. On a successful save, the spell ends.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Darkness Domain)](/compendium/lists/list-spells-classes-darkness-domain-kpdm.md "subclass=KPDM"); [Druid (Circle of Roses)](/compendium/lists/list-spells-classes-circle-of-roses-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Warlock (The Genie)](/compendium/lists/list-spells-classes-the-genie-tce.md "subclass=TCE"); [Warlock (The Hexblade)](/compendium/lists/list-spells-classes-the-hexblade-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 265. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
