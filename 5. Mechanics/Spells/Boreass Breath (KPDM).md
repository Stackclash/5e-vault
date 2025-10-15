---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/ranger
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/ritual
  - spell/school/transmutation
  - spell/subclass/arcane-trickster
  - spell/subclass/divine-soul/good
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Fighter (Eldritch Knight)
  - Ranger
  - Rogue (Arcane Trickster)
  - 'Sorcerer (Divine Soul, Good)'
  - Wizard
school: Transmutation
level: 2
ritual: true
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self
aliases:
  - Boreas's Breath
damage:
  base: 1d6
  scaling:
    damage: null
    level: 3
  types:
    - cold
saving_throw:
  skills:
    - Strength
    - Dexterity
  succeeds: see spell description
area:
  shape: cube
  size: 20
---
# Boreas's Breath
*2nd-level, Transmutation (ritual)*  

- **Casting time:** 1 Action unless cast as a ritual
- **Range:** Self
- **Components:** V, S
- **Duration:** Instantaneous

You freeze standing water in a 20-foot cube or running water in a 10-foot cube centered on you. The water turns to solid ice. The surface becomes difficult terrain, and any creature that ends its turn on the ice must make a successful DC 10 Dexterity saving throw or fall [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

Creatures that are partially submerged in the water when it freezes become [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]]. While [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] in this way, a creature takes `dice:1d6|noform|noparens|avg` (`1d6`) cold damage at the end of its turn. It can break free by using an action to make a successful Strength check against your spell save DC.

Creatures that are fully submerged in the water when it freezes become [[/5. Mechanics/Rules/Conditions.md#Incapacitated\|incapacitated]] and cannot breathe. While [[/5. Mechanics/Rules/Conditions.md#Incapacitated\|incapacitated]] in this way, a creature takes `dice:2d6|noform|noparens|avg` (`2d6`) cold damage at the end of its turn. A trapped creature makes a DC 20 Strength saving throw after taking this damage at the end of its turn, breaking free from the ice on a success.

The ice has AC 10 and 15 hit points. It is vulnerable to fire damage, has resistance to nonmagical slashing and piercing damage, and is immune to cold, necrotic, poison, psychic, and thunder damage.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the size of the cube increases by 10 feet for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 269*
