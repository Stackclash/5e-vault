---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Warlock
  - Wizard
school: Conjuration
level: 4
ritual: false
components: 'V, S, M (an iron chain link dipped in blood)'
verbal: true
somatic: true
material: true
material_desc: an iron chain link dipped in blood
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Self
aliases:
  - Chains of Torment
damage:
  base: 4d6
  scaling:
    damage: 1d6
    level: 5
  types:
    - psychic
saving_throw:
  skills:
    - Dexterity
    - Wisdom
  succeeds: see spell description
area:
  shape: sphere
  size: 10
---
# Chains of Torment
*4th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S, M (an iron chain link dipped in blood)
- **Duration:** Concentration, up to 1 minute

You are surrounded by an aura of dim light in a 10-foot radius as you conjure an iron chain that extends out to a creature you can see within 30 feet. The creature must make a successful Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Grappled\|grappled]] (escape DC equal to your spell save DC). While [[/5. Mechanics/Rules/Conditions.md#Grappled\|grappled]] in this way, the creature is also [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]]. A creature that's [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] at the start of its turn takes `dice:4d6|noform|noparens|avg` (`4d6`) psychic damage. You can have only one creature [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] in this way at a time.

As an action, you can scan the mind of the creature that's [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] by your chain. If the creature gets a failure on a Wisdom saving throw, you learn one discrete piece of information of your choosing known by the creature (such as a name, a password, or an important number). The effect is otherwise harmless.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the psychic damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 48*
