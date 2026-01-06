---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
  - spell/subclass/divine-soul/good
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - 'Sorcerer (Divine Soul, Good)'
  - Wizard
school: Necromancy
level: 3
ritual: false
components: 'V, S, M (a scrap of rotten meat or plant matter)'
verbal: true
somatic: true
material: true
material_desc: a scrap of rotten meat or plant matter
time: 1 Action
duration: Instantaneous
range: Self (30-foot Radius)
aliases:
  - Wave of Corruption
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 5
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: radius
  size: 30
---
# Wave of Corruption
*3rd-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Self (30-foot Radius)
- **Components:** V, S, M (a scrap of rotten meat or plant matter)
- **Duration:** Instantaneous

When you cast this spell, necromantic energy spreads out in a 30-foot radius around you, corrupting what it comes into contact with. Each unattended, nonmagical object within range takes `dice:3d8|noform|noparens|avg` (`3d8`) necrotic damage. All food and drink in the area, other than what is being carried, is fouled and made unpalatable. Magic consumables, such as potions, have a 50 percent chance of being ruined, but any such item in the possession of a creature gets a Constitution saving throw using the owner's save bonus to avoid this outcome.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the necrotic damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for every two slot levels above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 328*
