---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Wizard
school: Conjuration
level: 3
ritual: false
components: 'V, S, M (a pinch of salt worth 1 sp, which is consumed during the casting)'
verbal: true
somatic: true
material: true
material_desc: 'a pinch of salt worth 1 sp, which is consumed during the casting'
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: Self
aliases:
  - Salt Lash
damage:
  base: 2d8
  scaling:
    damage: null
    level: null
  types:
    - necrotic
    - slashing
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Salt Lash
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S, M (a pinch of salt worth 1 sp, which is consumed during the casting)
- **Duration:** Concentration, up to 10 minutes

You create a long, thin blade of razor-sharp salt crystals. You can wield it as a longsword, using your spellcasting ability to modify your weapon attack rolls. The sword deals `dice:2d8|noform|noparens|avg` (`2d8`) slashing damage on a hit, and any creature struck by the blade must make a successful Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] by searing pain until the start of your next turn. Constructs and undead are immune to the blade's secondary (stun) effect; plants and creatures composed mostly of water, such as [[/5. Mechanics/Bestiary/Elemental/Water Elemental.md\|water elementals]], also take an additional `dice:2d8|noform|noparens|avg` (`2d8`) necrotic damage if they fail the saving throw.

The spell lasts until you stop concentrating on it, the duration expires, or you let go of the blade for any reason.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 167*
