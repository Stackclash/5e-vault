---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/warlock
  - spell/class/wizard
  - spell/feat/magic-initiate/wizard-spells
  - spell/level/cantrip
  - spell/optfeature/blessed-warrior
  - spell/optfeature/pact-of-the-tome
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
  - spell/subclass/death-domain
  - spell/subclass/divine-soul/good
  - spell/subclass/eldritch-knight
  - spell/subrace/elf-high
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Death Domain)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - 'Sorcerer (Divine Soul, Good)'
  - Warlock
  - Wizard
school: Necromancy
level: 0
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Touch
aliases:
  - Hand of Doom
damage:
  base: 1d4
  scaling:
    damage: null
    level: null
  types:
    - necrotic
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Hand of Doom
*cantrip, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Instantaneous

Your outstretched hand glows with sinister power that hastens the demise of a creature you touch. Make a melee spell attack against the creature. On a hit, the target takes `dice:1d4|noform|noparens|avg` (`1d4`) necrotic damage and must make a successful Constitution saving throw or become [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] until the end of your next turn. If the target was already [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] when you hit it with hand of doom, it takes `dice:1d12|noform|noparens|avg` (`1d12`) poison damage instead of `dice:1d4|noform|noparens|avg` (`1d4`) necrotic damage on a failed save.

This spell's damage increases by one die at 5th level (`dice:2d4|noform|noparens|avg` (`2d4`) necrotic or `dice:2d12|noform|noparens|avg` (`2d12`) poison), 11th level (`dice:3d4|noform|noparens|avg` (`3d4`) or `dice:3d12|noform|noparens|avg` (`3d12`)), and 17th level (`dice:4d4|noform|noparens|avg` (`4d4`) or `dice:4d12|noform|noparens|avg` (`4d12`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Death Domain)](/compendium/lists/list-spells-classes-death-domain-dmg.md "subclass=DMG"); [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 311*
