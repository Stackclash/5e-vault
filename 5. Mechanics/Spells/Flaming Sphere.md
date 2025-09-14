---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/conjuration
  - spell/subclass/alchemist
  - spell/subclass/arcane-trickster
  - spell/subclass/circle-of-the-eclipse
  - spell/subclass/circle-of-wildfire
  - spell/subclass/eldritch-knight
  - spell/subclass/light-domain
  - spell/subclass/the-celestial
classes:
  - Artificer (Alchemist)
  - Bard
  - Cleric (Light Domain)
  - Druid
  - Druid (Circle of Wildfire)
  - Druid (Circle of the Eclipse)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Celestial)
  - Wizard
school: Conjuration
level: 2
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
somatic: true
verbal: true
material: 'a bit of tallow, a pinch of brimstone, and a dusting of powdered iron'
area:
  shape: sphere
  size: 20
aliases:
  - Flaming Sphere
---
# Flaming Sphere
*2nd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)
- **Duration:** Concentration, up to 1 minute

A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes `dice:2d6|noform|noparens|avg` (`2d6`) fire damage on a failed save, or half as much damage on a successful one.

As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.

When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [Artificer (Alchemist)](/compendium/lists/list-spells-classes-alchemist-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Light Domain.md\|Cleric (Light Domain)]]; [Druid (Circle of Wildfire)](/compendium/lists/list-spells-classes-circle-of-wildfire-tce.md "subclass=TCE"); [Druid (Circle of the Eclipse)](/compendium/lists/list-spells-classes-circle-of-the-eclipse-griffonssaddlebag4.md "subclass=GriffonsSaddlebag4"); [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Warlock (The Celestial)](/compendium/lists/list-spells-classes-the-celestial-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 242. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
