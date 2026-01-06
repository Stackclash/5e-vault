---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/divine-soul/good
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - 'Sorcerer (Divine Soul, Good)'
  - Wizard
school: Evocation
level: 2
ritual: false
components: 'V, S, M (a shard of bone or crystal)'
verbal: true
somatic: true
material: true
material_desc: a shard of bone or crystal
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Lacerate
damage:
  base: 4d8
  scaling:
    damage: 1d8
    level: 3
  types:
    - slashing
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
---
# Lacerate
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a shard of bone or crystal)
- **Duration:** Instantaneous

You make a swift cutting motion through the air to lacerate a creature you can see within range. The target must make a Constitution saving throw. It takes `dice:4d8|noform|noparens|avg` (`4d8`) slashing damage on a failed save, or half as much damage on a successful one. If the saving throw fails by 5 or more, the wound erupts with a violent spray of blood, and the target gains one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]].

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 89*
