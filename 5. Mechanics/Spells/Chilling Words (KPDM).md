---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/enchantment
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Enchantment
level: 3
ritual: false
components: 'V, S, M (a strip of paper with writing on it)'
verbal: true
somatic: true
material: true
material_desc: a strip of paper with writing on it
time: 1 Action
duration: 'Concentration, up to 1 hour'
range: 30 feet
aliases:
  - Chilling Words
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - psychic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Chilling Words
*3rd-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S, M (a strip of paper with writing on it)
- **Duration:** Concentration, up to 1 hour

You utter a short phrase and designate a creature within range to be affected by it. The target must make a Wisdom saving throw to avoid the spell. On a failed save, the target is susceptible to the phrase for the duration of the spell.

At any later time while the spell is in effect, you and any of your allies within range when you cast the spell can use an action to utter the phrase, which causes the target to freeze in fear. Each of you can use the phrase against the target once only, and the target must be within 30 feet of the speaker for the phrase to be effective.

When the target hears the phrase, it must make a successful Constitution saving throw or take `dice:1d6|noform|noparens|avg` (`1d6`) psychic damage and become [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] for 1 round. Whether this saving throw succeeds or fails, the target can't be affected by the phrase for 1 minute afterward.

You can end the spell early by making a final utterance of the phrase (even if you've used the phrase on this target previously). On hearing this final utterance, the target takes `dice:4d6|noform|noparens|avg` (`4d6`) psychic damage and is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] for 1 minute or, with a successful Constitution saving throw, it takes half the damage and is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] for 1 round.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 49*
