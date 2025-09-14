---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/illusion
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Illusion
level: 2
damage:
  base: 2d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - psychic
saving_throw:
  skills:
    - Intelligence
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
somatic: true
verbal: true
material: a pinch of powdered lead
aliases:
  - Shadow Puppets
---
# Shadow Puppets
*2nd-level, Illusion*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a pinch of powdered lead)
- **Duration:** Concentration, up to 1 minute

You animate the shadow of a creature within range, causing it to attack that creature. As a bonus action when you cast the spell, or as an action on subsequent rounds while you maintain concentration, make a melee spell attack against the creature. If it hits, the target takes `dice:2d8|noform|noparens|avg` (`2d8`) psychic damage and must make a successful Intelligence saving throw or be [[/5. Mechanics/Rules/Conditions.md#Incapacitated\|incapacitated]] until the start of your next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 251*
