---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/armorer
  - spell/subclass/circle-of-the-land/mountain
  - spell/subclass/eldritch-knight
  - spell/subclass/rocborne
  - spell/subclass/the-fathomless
classes:
  - Artificer (Armorer)
  - Bard (Magical Secrets)
  - 'Druid (Circle of the Land, Mountain)'
  - Fighter (Eldritch Knight)
  - Ranger (Rocborne)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Fathomless)
  - Wizard
school: Evocation
level: 3
ritual: false
components: 'V, S, M (a bit of fur and a rod of amber, crystal, or glass)'
verbal: true
somatic: true
material: true
material_desc: 'a bit of fur and a rod of amber, crystal, or glass'
time: 1 Action
duration: Instantaneous
range: Self (100-foot Line)
aliases:
  - Lightning Bolt
damage:
  base: 8d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - lightning
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: line
  size: 100
---
# Lightning Bolt
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (100-foot Line)
- **Components:** V, S, M (a bit of fur and a rod of amber, crystal, or glass)
- **Duration:** Instantaneous

A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes `dice:8d6|noform|noparens|avg` (`8d6`) lightning damage on a failed save, or half as much damage on a successful one.

The lightning ignites flammable objects in the area that aren't being worn or carried.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 3rd.

**Classes**: [Artificer (Armorer)](/compendium/lists/list-spells-classes-armorer-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Mountain)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Ranger (Rocborne)](/compendium/lists/list-spells-classes-rocborne-griffonssaddlebag2.md "subclass=GriffonsSaddlebag2"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Warlock (The Fathomless)](/compendium/lists/list-spells-classes-the-fathomless-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 255. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
