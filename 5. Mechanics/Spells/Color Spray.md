---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/feat/magic-initiate
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/illusion
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Illusion
level: 1
ritual: false
time: 1 Action
duration: 1 round
components:
  - V
  - S
  - M
aliases:
  - Color Spray
range: Self
material: 'A pinch of powder or sand that is colored red, yellow, and blue.'
area:
  type: cone
  size: 15
---
# Color Spray
*1st-level, Illusion*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cone)
- **Components:** V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)
- **Duration:** 1 round

A dazzling array of flashing, colored light springs from your hand. Roll `dice:6d10|noform|noparens|avg` (`6d10`); the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring [[/5. Mechanics/Rules/Conditions.md#Unconscious\|unconscious]] creatures and creatures that can't see).

Starting with the creature that has the lowest current hit points, each creature affected by this spell is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, roll an additional `dice:2d10|noform|noparens|avg|text(2d10)` for each slot level above 1st.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]

*Source: Player's Handbook p. 222. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
