---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/artillerist
  - spell/subclass/circle-of-the-land/arctic
  - spell/subclass/eldritch-knight
  - spell/subclass/oath-of-the-ancients
  - spell/subclass/rocborne
  - spell/subclass/tempest-domain
  - spell/subclass/the-frozen-one
  - spell/subclass/winter-domain
classes:
  - Artificer (Artillerist)
  - Bard (Magical Secrets)
  - Cleric (Tempest Domain)
  - Cleric (Winter Domain)
  - Druid
  - 'Druid (Circle of the Land, Arctic)'
  - Fighter (Eldritch Knight)
  - Paladin (Oath of the Ancients)
  - Ranger (Rocborne)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Frozen One)
  - Wizard
school: Evocation
level: 4
ritual: false
components: 'V, S, M (a pinch of dust and a few drops of water)'
verbal: true
somatic: true
material: true
material_desc: a pinch of dust and a few drops of water
time: 1 Action
duration: Instantaneous
range: 300 feet
aliases:
  - Ice Storm
damage:
  base: 2d8
  scaling:
    damage: 1d8
    level: 5
  types:
    - bludgeoning
    - cold
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: sphere
  size: 20
---
# Ice Storm
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 300 feet
- **Components:** V, S, M (a pinch of dust and a few drops of water)
- **Duration:** Instantaneous

A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes `dice:2d8|noform|noparens|avg` (`2d8`) bludgeoning damage and `dice:4d6|noform|noparens|avg` (`4d6`) cold damage on a failed save, or half as much damage on a successful one.

Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 4th.

**Classes**: [Artificer (Artillerist)](/compendium/lists/list-spells-classes-artillerist-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [Cleric (Winter Domain)](/compendium/lists/list-spells-classes-winter-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Arctic)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Oath Of The Ancients.md\|Paladin (Oath of the Ancients)]]; [Ranger (Rocborne)](/compendium/lists/list-spells-classes-rocborne-griffonssaddlebag2.md "subclass=GriffonsSaddlebag2"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Warlock (The Frozen One)](/compendium/lists/list-spells-classes-the-frozen-one-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 252. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
