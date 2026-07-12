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
  - spell/feat/magic-initiate/wizard-spells
  - spell/level/1st-level
  - spell/optfeature/fist-of-four-thunders
  - spell/reward/boon-of-the-stormborn
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/armorer
  - spell/subclass/artillerist
  - spell/subclass/carillon-domain
  - spell/subclass/dragon-domain
  - spell/subclass/eldritch-knight
  - spell/subclass/oath-of-thunder
  - spell/subclass/tempest-domain
  - spell/subclass/the-fathomless
  - spell/subclass/the-genie
  - spell/subclass/the-genie-lord
classes:
  - Artificer (Armorer)
  - Artificer (Artillerist)
  - Bard (Magical Secrets)
  - Cleric (Carillon Domain)
  - Cleric (Dragon Domain)
  - Cleric (Tempest Domain)
  - Druid
  - Fighter (Eldritch Knight)
  - Paladin (Oath of Thunder)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Fathomless)
  - Warlock (The Genie Lord)
  - Warlock (The Genie)
  - Wizard
school: Evocation
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self (15-foot Cube)
aliases:
  - Thunderwave
damage:
  base: 2d8
  scaling:
    damage: 1d8
    level: 2
  types:
    - thunder
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: cube
  size: 15
---
# Thunderwave
*1st-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cube)
- **Components:** V, S
- **Duration:** Instantaneous

A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes `dice:2d8|noform|noparens|avg` (`2d8`) thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.

In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 1st.

**Classes**: [Artificer (Armorer)](/compendium/lists/list-spells-classes-armorer-tce.md "subclass=TCE;class=TCE"); [Artificer (Artillerist)](/compendium/lists/list-spells-classes-artillerist-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Carillon Domain)](/compendium/lists/list-spells-classes-carillon-domain-griffonssaddlebag3.md "subclass=GriffonsSaddlebag3"); [Cleric (Dragon Domain)](/compendium/lists/list-spells-classes-dragon-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Paladin (Oath of Thunder)](/compendium/lists/list-spells-classes-oath-of-thunder-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Warlock (The Fathomless)](/compendium/lists/list-spells-classes-the-fathomless-tce.md "subclass=TCE"); [Warlock (The Genie Lord)](/compendium/lists/list-spells-classes-the-genie-lord-kpdm.md "subclass=KPDM"); [Warlock (The Genie)](/compendium/lists/list-spells-classes-the-genie-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 282. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
