---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/grassland
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Scarecrow
ac: 11
hp: 36
hit_dice: 8d8
cr: '1'
stats: [
  11,
  13,
  11,
  10,
  10,
  13
]
source: [
  MM,
  CoS,
  WDH,
  CM,
  KftGV
]
aliases: ["Scarecrow"]
---
*Source: Monster Manual p. 268, Curse of Strahd, Waterdeep: Dragon Heist, Candlekeep Mysteries, Keys from the Golden Vault*  

At harvest time, when death revisits the twilit world and summer's blossoms bow their withered heads, eerie scarecrows loom in silent vigil over empty fields. With immortal patience, these stoic sentinels hold their posts through wind, storm, and flood, bound to their master's command, eager to terrify prey with its sackcloth visage and rend victims with its razor-sharp claws.

## Spirit-Powered Constructs

A scarecrow is animated by the bound spirit of a slain evil creature, granting it purpose and mobility. It is this uncanny presence from beyond death that allows a scarecrow to inspire fear in those it gazes upon. Hags and witches often bind scarecrows with the spirits of demons, but any evil spirit will do. Although aspects of the spirit's personality might surface, a scarecrow's spirit doesn't recall the memories it had as a creature, and its will is focused solely on serving its creator. If its creator dies, the spirit inhabiting a scarecrow either continues to follow its last commands, seeks revenge for its creator's death, or destroys itself.

## Stat Block

```ad-statblock
title: Scarecrow
![[token/scarecrow.png#token]]
*Medium construct, Chaotic Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 8d8|text(36)` (8d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|13 (+1)|11 (+0)|10 (+0)|10 (+0)|13 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Vulnerabilities** fire
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned, unconscious
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 1

## Traits

***False Appearance.*** While the scarecrow remains motionless, it is indistinguishable from an ordinary, inanimate scarecrow.

## Actions

***Multiattack.*** The scarecrow makes two claw attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 1|avg` (`2d4 + 1`) slashing damage. If the target is a creature, it must succeed on a DC 11 Wisdom saving throw or be [frightened](/6. Mechanics/rules/conditions.md#frightened) until the end of the scarecrow's next turn.

***Terrifying Glare.*** The scarecrow targets one creature it can see within 30 feet of it. If the target can see the scarecrow, the target must succeed on a DC 11 Wisdom saving throw or be magically [frightened](/6. Mechanics/rules/conditions.md#frightened) until the end of the scarecrow's next turn. The [frightened](/6. Mechanics/rules/conditions.md#frightened) target is [paralyzed](/6. Mechanics/rules/conditions.md#paralyzed).
```
^statblock

## Environment

grassland