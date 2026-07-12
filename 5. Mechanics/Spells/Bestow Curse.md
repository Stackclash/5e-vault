---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/optfeature/sign-of-ill-omen
  - spell/school/necromancy
  - spell/subclass/apocalypse-domain
  - spell/subclass/arcane-trickster
  - spell/subclass/cat-domain
  - spell/subclass/chain-domain
  - spell/subclass/divine-soul
  - spell/subclass/eldritch-knight
  - spell/subclass/oath-of-conquest
  - spell/subclass/oath-of-the-annihilator
  - spell/subclass/oathbreaker
  - spell/subclass/the-sibyl
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Apocalypse Domain)
  - Cleric (Cat Domain)
  - Cleric (Chain Domain)
  - Fighter (Eldritch Knight)
  - Paladin (Oath of Conquest)
  - Paladin (Oath of the Annihilator)
  - Paladin (Oathbreaker)
  - Rogue (Arcane Trickster)
  - Sorcerer (Divine Soul)
  - Warlock (The Sibyl)
  - Wizard
school: Necromancy
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Touch
aliases:
  - Bestow Curse
damage:
  base: 1d8
  scaling:
    damage: null
    level: 4
  types:
    - necrotic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Bestow Curse
*3rd-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:

- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.  
- While cursed, the target has disadvantage on attack rolls against you.  
- While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.  
- While the target is cursed, your attacks and spells deal an extra `dice:1d8|noform|noparens|avg` (`1d8`) necrotic damage to the target.  

A [[/5. Mechanics/Spells/Remove Curse.md\|remove curse]] spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.

**At Higher Levels.** If you cast this spell using a spell slot of 4th level or higher, the duration is [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]], up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require [[/5. Mechanics/Rules/Conditions.md#Concentration\|concentration]].

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Apocalypse Domain)](/compendium/lists/list-spells-classes-apocalypse-domain-kpdm.md "subclass=KPDM"); [Cleric (Cat Domain)](/compendium/lists/list-spells-classes-cat-domain-kpdm.md "subclass=KPDM"); [Cleric (Chain Domain)](/compendium/lists/list-spells-classes-chain-domain-griffonssaddlebag4.md "subclass=GriffonsSaddlebag4"); [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [Paladin (Oath of Conquest)](/compendium/lists/list-spells-classes-oath-of-conquest-xge.md "subclass=XGE"); [Paladin (Oath of the Annihilator)](/compendium/lists/list-spells-classes-oath-of-the-annihilator-kpdm.md "subclass=KPDM"); [Paladin (Oathbreaker)](/compendium/lists/list-spells-classes-oathbreaker-dmg.md "subclass=DMG"); [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [Warlock (The Sibyl)](/compendium/lists/list-spells-classes-the-sibyl-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 218. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
