---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/cleric
statblock: true
statblock-link: "#^statblock"
name: War Priest
ac: 18
hp: 117
hit_dice: 18d8 + 36
cr: '9'
stats: [
  16,
  10,
  14,
  11,
  17,
  13
]
source: [
  MPMM,
  VGM
]
aliases: ["War Priest"]
---
# War Priest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 254, Volo's Guide to Monsters p. 218*  

War priests worship deities of war, protection, and strategy. They plan tactics, lead soldiers into battle, confront enemy spellcasters, and tend to casualties. A war priest might command an army or serve as the right hand of a [[/6. Mechanics/Bestiary/Humanoid/warlord-mpmm.md\|warlord]] (appears in "this book") on the battlefield.

War priests typically adorn themselves with a symbol of their faith. You can roll on the War Priest Holy Symbols table below, or choose one that fits your campaign.

**War Priest Holy Symbols**

| `dice: d8\|avg` (`d8`) | Holy Symbol |
|----------|------------|-------------|
| 1 | Vial of iridescent liquid |
| 2 | Hilt of a broken sword |
| 3 | Piece of stained glass from a shrine |
| 4 | Clay figurine of a [ki-rin](/compendium/bestiary/celestial/ki-rin-mpmm.md) or another Celestial |
| 5 | [[/6. Mechanics/Items/torch.md\|Torch]] carved so that a hand appears to be holding the flame |
| 6 | Circlet of woven reeds |
| 7 | Scrimshawed bone |
| 8 | Vessel such as a cup, a [[/6. Mechanics/Items/jug.md\|jug]], an urn, or an amphora |
^war-priest-holy-symbols

```ad-statblock
title: War Priest
![[/6. Mechanics/Bestiary/Humanoid/Token/war-priest.png#token]]
*Medium humanoid(cleric), Any alignment*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
- **Hit Points** `dice: 18d8 + 36|text(117)` (18d8 + 36) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|10 (+0)|14 (+2)|11 (+0)|17 (+3)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +6, Wisdom +7
- **Skills** Intimidation +5, Religion +4
- **Senses** passive Perception 13
- **Languages** any two languages
- **Challenge** 9

***Spellcasting.*** The war priest casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 15):

**At will**: [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/spare-the-dying.md\|spare the dying]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]

**1/day each**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/flame-strike.md\|flame strike]], [[/6. Mechanics/Spells/guardian-of-faith.md\|guardian of faith]], [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]], [[/6. Mechanics/Spells/revivify.md\|revivify]]

## Actions

***Multiattack.*** The war priest makes two Maul attacks, and it uses Holy Fire.

***Maul.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3\|avg` (`2d6 + 3`) bludgeoning damage  plus Hit: `dice: 3d6\|avg` (`3d6`) radiant damage.

***Holy Fire.*** The war priest targets one creature it can see within 60 feet of it. The target must make a DC 15 Wisdom saving throw. On a failed save, the target takes `dice: 2d8 + 3\|avg` (`2d8 + 3`) radiant damage, and it is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until the start of the war priest's next turn. On a successful save, the target takes half as much damage and isn't [[6. Mechanics/Rules/conditions.md#blinded\|blinded]].

## Bonus Actions

***Healing Light (Recharge 4-6).*** The war priest or one creature of its choice within 60 feet of it regains 12 (`dice: 2d8 + 3\|avg` (`2d8 + 3`)) hit points.
```
^statblock

## Environment

desert, urban