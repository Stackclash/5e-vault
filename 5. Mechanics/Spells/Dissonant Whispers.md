---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/feat/fey-touched
  - spell/feat/magic-initiate/bard-spells
  - spell/level/1st-level
  - spell/school/enchantment
  - spell/subclass/aberrant-mind
  - spell/subclass/the-great-old-one
classes:
  - Bard (Magical Secrets)
  - Sorcerer (Aberrant Mind)
  - Warlock (The Great Old One)
school: Enchantment
level: 1
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Dissonant Whispers
damage:
  base: 3d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - psychic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Dissonant Whispers
*1st-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V
- **Duration:** Instantaneous

You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes `dice:3d6|noform|noparens|avg` (`3d6`) psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A [[/5. Mechanics/Rules/Conditions.md#Deafened\|deafened]] creature automatically succeeds on the save.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Sorcerer (Aberrant Mind)](/compendium/lists/list-spells-classes-aberrant-mind-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes The Great Old One.md\|Warlock (The Great Old One)]]

*Source: Player's Handbook p. 234*
