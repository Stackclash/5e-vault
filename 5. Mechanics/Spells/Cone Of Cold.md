---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/optfeature/breath-of-winter
  - spell/school/evocation
  - spell/subclass/artillerist
  - spell/subclass/circle-of-the-eclipse
  - spell/subclass/circle-of-the-land/arctic
  - spell/subclass/hunger-domain
  - spell/subclass/mountain-domain
  - spell/subclass/the-fathomless
  - spell/subclass/the-frozen-one
  - spell/subclass/the-genie
  - spell/subclass/the-hexblade
  - spell/subclass/winter-domain
classes:
  - Artificer (Artillerist)
  - Bard (Magical Secrets)
  - Cleric (Hunger Domain)
  - Cleric (Mountain Domain)
  - Cleric (Winter Domain)
  - Druid
  - Druid (Circle of the Eclipse)
  - 'Druid (Circle of the Land, Arctic)'
  - Sorcerer
  - Warlock (The Fathomless)
  - Warlock (The Frozen One)
  - Warlock (The Genie)
  - Warlock (The Hexblade)
  - Wizard
school: Evocation
level: 5
ritual: false
components: 'V, S, M (a small crystal or glass cone)'
verbal: true
somatic: true
material: true
material_desc: a small crystal or glass cone
time: 1 Action
duration: Instantaneous
range: Self (60-foot Cone)
aliases:
  - Cone of Cold
damage:
  base: 8d8
  scaling:
    damage: 1d8
    level: 6
  types:
    - cold
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
area:
  shape: cone
  size: 60
---
# Cone of Cold
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Cone)
- **Components:** V, S, M (a small crystal or glass cone)
- **Duration:** Instantaneous

A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes `dice:8d8|noform|noparens|avg` (`8d8`) cold damage on a failed save, or half as much damage on a successful one.

A creature killed by this spell becomes a frozen statue until it thaws.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 5th.

**Classes**: [Artificer (Artillerist)](/compendium/lists/list-spells-classes-artillerist-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Hunger Domain)](/compendium/lists/list-spells-classes-hunger-domain-kpdm.md "subclass=KPDM"); [Cleric (Mountain Domain)](/compendium/lists/list-spells-classes-mountain-domain-kpdm.md "subclass=KPDM"); [Cleric (Winter Domain)](/compendium/lists/list-spells-classes-winter-domain-kpdm.md "subclass=KPDM"); [Druid (Circle of the Eclipse)](/compendium/lists/list-spells-classes-circle-of-the-eclipse-griffonssaddlebag4.md "subclass=GriffonsSaddlebag4"); [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Arctic)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Warlock (The Fathomless)](/compendium/lists/list-spells-classes-the-fathomless-tce.md "subclass=TCE"); [Warlock (The Frozen One)](/compendium/lists/list-spells-classes-the-frozen-one-kpdm.md "subclass=KPDM"); [Warlock (The Genie)](/compendium/lists/list-spells-classes-the-genie-tce.md "subclass=TCE"); [Warlock (The Hexblade)](/compendium/lists/list-spells-classes-the-hexblade-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 224. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
