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
  - spell/optfeature/river-of-hungry-flame
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/artillerist
  - spell/subclass/circle-of-the-eclipse
  - spell/subclass/eldritch-knight
  - spell/subclass/forge-domain
  - spell/subclass/light-domain
  - spell/subclass/the-celestial
  - spell/subclass/the-fiend
classes:
  - Artificer (Artillerist)
  - Bard
  - Cleric (Forge Domain)
  - Cleric (Light Domain)
  - Druid
  - Druid (Circle of the Eclipse)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Celestial)
  - Warlock (The Fiend)
  - Wizard
school: Evocation
level: 4
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Wall of Fire
range: 120 feet
material: A small piece of phosphorus.
damageType: Fire
save:
  type: DEX
  success: half
area:
  type: line
  size: 60
concentration: true
---
# Wall of Fire
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a small piece of phosphorus)
- **Duration:** Concentration, up to 1 minute

You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.

When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes `dice:5d8|noform|noparens|avg` (`5d8`) fire damage, or half as much damage on a successful save.

One side of the wall, selected by you when you cast this spell, deals `dice:5d8|noform|noparens|avg` (`5d8`) fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(d8)` for each slot level above 4th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Light Domain.md\|Cleric (Light Domain)]]; [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes The Fiend.md\|Warlock (The Fiend)]]; [[5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Cleric (Forge Domain)](compendium/lists/list-spells-classes-forge-domain-xge.md "subclass=XGE"); [Warlock (The Celestial)](compendium/lists/list-spells-classes-the-celestial-xge.md "subclass=XGE"); [Artificer (Artillerist)](compendium/lists/list-spells-classes-artillerist-tce.md "subclass=TCE;class=TCE"); [Druid (Circle of the Eclipse)](compendium/lists/list-spells-classes-circle-of-the-eclipse-griffonssaddlebag4.md "subclass=GriffonsSaddlebag4"); [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]

*Source: Player's Handbook p. 285. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
