---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/feat/magic-initiate/wizard-spells
  - spell/feat/shadow-touched
  - spell/level/1st-level
  - spell/school/necromancy
  - spell/subclass/alchemist
  - spell/subclass/arcane-trickster
  - spell/subclass/death-domain
  - spell/subclass/eldritch-knight
  - spell/subclass/oath-of-the-annihilator
  - spell/subrace/tiefling-baalzebul
classes:
  - Artificer (Alchemist)
  - Bard (Magical Secrets)
  - Cleric (Death Domain)
  - Fighter (Eldritch Knight)
  - Paladin (Oath of the Annihilator)
  - Rogue (Arcane Trickster)
  - Sorcerer
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
duration: Instantaneous
range: 60 feet
aliases:
  - Ray of Sickness
damage:
  base: 2d8
  scaling:
    damage: 1d8
    level: 2
  types:
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Ray of Sickness
*1st-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Instantaneous

A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes `dice:2d8|noform|noparens|avg` (`2d8`) poison damage and must make a Constitution saving throw. On a failed save, it is also [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] until the end of your next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 1st.

**Classes**: [Artificer (Alchemist)](/compendium/lists/list-spells-classes-alchemist-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Death Domain)](/compendium/lists/list-spells-classes-death-domain-dmg.md "subclass=DMG"); [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Paladin (Oath of the Annihilator)](/compendium/lists/list-spells-classes-oath-of-the-annihilator-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 271*
