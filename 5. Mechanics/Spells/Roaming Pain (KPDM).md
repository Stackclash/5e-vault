---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Wizard
school: Necromancy
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 30 feet
aliases:
  - Roaming Pain
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Roaming Pain
*1st-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You afflict a single humanoid within range with severe pain in constantly changing random parts of their body. At the start of the target's turn each round for the duration of the spell, roll on the table to see where the pain affects the target that round. They must then make a new Constitution saving throw. On a successful save, it is able to function despite the pain and ignore the effects that round. If the target saves against the pain affecting a particular area, they also automatically succeed in the save against the pain affecting the same area on future turns.

`dice: [[/5. Mechanics/Spells/Roaming Pain (KPDM).md#^body-part-effect]]`

| dice: d6 | Body Part | Effect |
|----------|-----------|--------|
| 1 | Head | Incapacitated |
| 2 | Throat | Unable to speak coherently or cast spells with verbal components |
| 3 | Chest | Cannot take reactions or bonus actions |
| 4 | Abdomen | Disadvantage on Constitution saving throws |
| 5 | Arm | Disadvantage on attack rolls, Strength and Dexterity ability checks |
| 6 | Leg | Movement halved |
^body-part-effect

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 185*
