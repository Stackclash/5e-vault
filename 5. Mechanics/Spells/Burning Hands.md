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
  - spell/level/1st-level
  - spell/optfeature/sweeping-cinder-strike
  - spell/reward/boon-of-the-fire-soul
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/circle-of-wildfire
  - spell/subclass/eldritch-knight
  - spell/subclass/light-domain
  - spell/subclass/the-fiend
  - spell/subclass/the-genie
  - spell/subclass/way-of-the-sun-soul
  - spell/subrace/genasi-fire
  - spell/subrace/tiefling-mephistopheles
classes:
  - Bard (Magical Secrets)
  - Cleric (Light Domain)
  - Druid (Circle of Wildfire)
  - Fighter (Eldritch Knight)
  - Monk (Way of the Sun Soul)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Fiend)
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
range: Self (15-foot Cone)
aliases:
  - Burning Hands
damage:
  base: 3d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: cone
  size: 15
---
# Burning Hands
*1st-level, Evocation*  
![[/5. Mechanics/Spells/img/burning-hands.webp#right]]  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Cone)
- **Components:** V, S
- **Duration:** Instantaneous

As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes `dice:3d6|noform|noparens|avg` (`3d6`) fire damage on a failed save, or half as much damage on a successful one.

The fire ignites any flammable objects in the area that aren't being worn or carried.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Light Domain.md\|Cleric (Light Domain)]]; [Druid (Circle of Wildfire)](/compendium/lists/list-spells-classes-circle-of-wildfire-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Monk (Way of the Sun Soul)](/compendium/lists/list-spells-classes-way-of-the-sun-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes The Fiend.md\|Warlock (The Fiend)]]; [Warlock (The Genie)](/compendium/lists/list-spells-classes-the-genie-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 220. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
