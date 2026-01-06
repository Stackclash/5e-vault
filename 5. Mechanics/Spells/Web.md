---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/artificer
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/circle-of-the-land/underdark
  - spell/subclass/eldritch-knight
  - spell/subclass/speed-domain
  - spell/subclass/swarmkeeper
classes:
  - Artificer
  - Bard (Magical Secrets)
  - Cleric (Speed Domain)
  - 'Druid (Circle of the Land, Underdark)'
  - Fighter (Eldritch Knight)
  - Ranger (Swarmkeeper)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Conjuration
level: 2
ritual: false
components: 'V, S, M (a bit of spiderweb)'
verbal: true
somatic: true
material: true
material_desc: a bit of spiderweb
time: 1 Action
duration: 'Concentration, up to 1 hour'
range: 60 feet
aliases:
  - Web
damage:
  base: 2d4
  scaling:
    damage: null
    level: null
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: cube
  size: 20
---
# Web
*2nd-level, Conjuration*  
![[/5. Mechanics/Spells/img/web.webp#right]]  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a bit of spiderweb)
- **Duration:** Concentration, up to 1 hour

You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.

If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.

Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] as long as it remains in the webs or until it breaks free.

A creature [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]].

The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing `dice:2d4|noform|noparens|avg` (`2d4`) fire damage to any creature that starts its turn in the fire.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Artificer.md\|Artificer]]; [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Speed Domain)](/compendium/lists/list-spells-classes-speed-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Underdark)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Ranger (Swarmkeeper)](/compendium/lists/list-spells-classes-swarmkeeper-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 287. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
