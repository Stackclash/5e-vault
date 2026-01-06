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
  - spell/level/2nd-level
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
level: 2
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
aliases:
  - Entomb in Ice
damage:
  base: 2d4
  scaling:
    damage: null
    level: 4
  types:
    - cold
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Entomb in Ice
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You trap a creature in a thick coating of ice. The target must succeed on a Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] for the duration. At the beginning of each of the trapped creature's turn, it takes `dice:2d4|noform|noparens|avg` (`2d4`) cold damage. On its turn, an entombed creature (or an ally) can take an action to make a Strength check against your spell save DC. On a success, the entombed creature is freed. The icy tomb is also susceptible to damage and vulnerable to fire. Damage equal to your spell save DC will destroy the tomb and free the target.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 270*
