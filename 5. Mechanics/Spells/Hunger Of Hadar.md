---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/aberrant-mind
classes:
  - Bard (Magical Secrets)
  - Sorcerer (Aberrant Mind)
  - Warlock
school: Conjuration
level: 3
ritual: false
components: 'V, S, M (a pickled octopus tentacle)'
verbal: true
somatic: true
material: true
material_desc: a pickled octopus tentacle
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 150 feet
aliases:
  - Hunger of Hadar
damage:
  base: 2d6
  scaling:
    damage: null
    level: null
  types:
    - acid
    - cold
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: sphere
  size: 20
---
# Hunger of Hadar
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a pickled octopus tentacle)
- **Duration:** Concentration, up to 1 minute

You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point within range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]].

The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes `dice:2d6|noform|noparens|avg` (`2d6`) cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take `dice:2d6|noform|noparens|avg` (`2d6`) acid damage as milky, otherworldly tentacles rub against it.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Sorcerer (Aberrant Mind)](/compendium/lists/list-spells-classes-aberrant-mind-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Player's Handbook p. 251*
