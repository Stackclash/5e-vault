---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/circle-of-the-land/forest
  - spell/subclass/justice-domain
  - spell/subclass/oath-of-thunder
  - spell/subclass/tempest-domain
classes:
  - Bard (Magical Secrets)
  - Cleric (Justice Domain)
  - Cleric (Tempest Domain)
  - Druid
  - 'Druid (Circle of the Land, Forest)'
  - Paladin (Oath of Thunder)
school: Conjuration
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 120 feet
aliases:
  - Call Lightning
damage:
  base: 3d10
  scaling:
    damage: 1d10
    level: null
  types:
    - lightning
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: sphere
  size: 60
---
# Call Lightning
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).

When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes `dice:3d10|noform|noparens|avg` (`3d10`) lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.

If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by `dice:1d10|noform|noparens|avg` (`1d10`).

**At Higher Levels.** When you cast this spell using a spell slot of 4th or higher level, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Justice Domain)](/compendium/lists/list-spells-classes-justice-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Forest)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Paladin (Oath of Thunder)](/compendium/lists/list-spells-classes-oath-of-thunder-kpdm.md "subclass=KPDM")

*Source: Player's Handbook p. 220. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
