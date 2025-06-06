---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/4th-level
  - spell/optfeature/dreadful-word
  - spell/school/enchantment
  - spell/subclass/apocalypse-domain
  - spell/subclass/arcane-trickster
  - spell/subclass/beer-domain
  - spell/subclass/circle-of-roses
  - spell/subclass/circle-of-spores
  - spell/subclass/eldritch-knight
  - spell/subclass/knowledge-domain
  - spell/subclass/oathbreaker
  - spell/subclass/the-sibyl
classes:
  - Bard
  - Cleric (Apocalypse Domain)
  - Cleric (Beer Domain)
  - Cleric (Knowledge Domain)
  - Druid
  - Druid (Circle of Roses)
  - Druid (Circle of Spores)
  - Fighter (Eldritch Knight)
  - Paladin (Oathbreaker)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Sibyl)
  - Wizard
school: Enchantment
level: 4
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Confusion
range: 90 feet
material: Three walnut shells.
save:
  type: WIS
  success: none
area:
  type: sphere
  size: 10
concentration: true
---
# Confusion
*4th-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (three nut shells)
- **Duration:** Concentration, up to 1 minute

This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.

An affected target can't take reactions and must roll a `dice:d10|noform|noparens|avg` (`d10`) at the start of each of its turns to determine its behavior for that turn.

**Confusion Behavior**

`dice: [[Confusion.md#^confusion-behavior]]`

| dice: d10 | Behavior |
|-----------|----------|
| 1 | The creature uses all its movement to move in a random direction. To determine the direction, roll a `dice:d8\|noform\|noparens\|avg` (`d8`) and assign a direction to each die face. The creature doesn't take an action this turn. |
| 2-6 | The creature doesn't move or take actions this turn. |
| 7-8 | The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. |
| 9-10 | The creature can act and move normally. |
^confusion-behavior

At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.

**Classes**: [Druid (Circle of Roses)](compendium/lists/list-spells-classes-circle-of-roses-kpdm.md "subclass=KPDM"); [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Cleric (Beer Domain)](compendium/lists/list-spells-classes-beer-domain-kpdm.md "subclass=KPDM"); [[5. Mechanics/Lists/List Spells Classes Knowledge Domain.md\|Cleric (Knowledge Domain)]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Druid (Circle of Spores)](compendium/lists/list-spells-classes-circle-of-spores-tce.md "subclass=TCE"); [[5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [Paladin (Oathbreaker)](compendium/lists/list-spells-classes-oathbreaker-dmg.md "subclass=DMG"); [Warlock (The Sibyl)](compendium/lists/list-spells-classes-the-sibyl-kpdm.md "subclass=KPDM"); [Cleric (Apocalypse Domain)](compendium/lists/list-spells-classes-apocalypse-domain-kpdm.md "subclass=KPDM")

*Source: Player's Handbook p. 224. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
