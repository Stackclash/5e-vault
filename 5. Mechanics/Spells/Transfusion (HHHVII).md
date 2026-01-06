---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/hhhvii
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
  - spell/subclass/harvester-domain
  - spell/subclass/oath-of-legacy
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Harvester Domain)
  - Druid
  - Fighter (Eldritch Knight)
  - Paladin (Oath of Legacy)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Necromancy
level: 2
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Touch
aliases:
  - Transfusion
damage:
  base: 1d4
  scaling:
    damage: 1d4
    level: 3
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Transfusion
*2nd-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Instantaneous

Make a melee spell attack against a creature you can reach that has blood in its body. On a hit, the creature takes `dice:1d4|noform|noparens|avg` (`1d4`) necrotic damage and you drain a number of vials of blood equal to the amount of necrotic damage dealt, which you may automatically store into an empty vial in your possession. If the number of vials of blood you drained equals or exceeds the target's drain threshold (based on size as shown in the table below), the target must succeed on a Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] until the start of your next turn.

| Size | Drain Threshold |
|------|-----------------|
| Tiny | 1 |
| Small | 2 |
| Medium | 3 |
| Large | 5 |
| Huge | 7 |
| Gargantuan | 9 |
^size-drain-threshold

This spell does not change the number of vials of blood you can harvest from that creature's carcass.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d4|noform|noparens|avg` (`1d4`) each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Harvester Domain)](/compendium/lists/list-spells-classes-harvester-domain-hhhviii.md "subclass=HHHVIII"); [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Paladin (Oath of Legacy)](/compendium/lists/list-spells-classes-oath-of-legacy-hhhviii.md "subclass=HHHVIII"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Hamund's Harvesting Handbook: Volume II p. 69*
