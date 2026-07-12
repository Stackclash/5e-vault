---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/circle-of-the-spirits
  - spell/subclass/divine-soul
  - spell/subclass/fey-soul
  - spell/subclass/war-domain
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (War Domain)
  - Druid (Circle of the Spirits)
  - Sorcerer (Divine Soul)
  - Sorcerer (Fey Soul)
school: Conjuration
level: 3
ritual: false
components: 'V, S, M (a holy symbol)'
verbal: true
somatic: true
material: true
material_desc: a holy symbol
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: Self (15-foot Radius)
aliases:
  - Spirit Guardians
damage:
  base: 3d8
  scaling:
    damage: 1d8
    level: 4
  types:
    - necrotic
    - radiant
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
area:
  shape: radius
  size: 15
---
# Spirit Guardians
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (15-foot Radius)
- **Components:** V, S, M (a holy symbol)
- **Duration:** Concentration, up to 10 minutes

You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.

When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes `dice:3d8|noform|noparens|avg` (`3d8`) radiant damage (if you are good or neutral) or `dice:3d8|noform|noparens|avg` (`3d8`) necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes War Domain.md\|Cleric (War Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Druid (Circle of the Spirits)](/compendium/lists/list-spells-classes-circle-of-the-spirits-kpdm.md "subclass=KPDM"); [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [Sorcerer (Fey Soul)](/compendium/lists/list-spells-classes-fey-soul-griffonssaddlebag3.md "subclass=GriffonsSaddlebag3")

*Source: Player's Handbook p. 278. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
