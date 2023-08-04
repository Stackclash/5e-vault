---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/size/medium
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
name: Bheur Hag
ac: 17
hp: 91
hit_dice: 14d8 + 28
cr: '7'
stats: [
  13,
  16,
  14,
  12,
  13,
  16
]
source: [
  MPMM,
  VGM
]
aliases: ["Bheur Hag"]
---
# Bheur Hag
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 62, Volo's Guide to Monsters p. 160*  

Bheur hags live in wintry lands, favoring snowy mountains. These hags become more active during winter, using their ice and weather magic to make life miserable for nearby settlements.

A bheur hag's skin has the bluish hue of a person who has frozen to death. The hag's hair is white, and the hag is emaciated, with pale eyes surrounded by bruise-colored flesh. A bheur hag carries a twisted gray wooden staff that can be ridden like a flying broom and that augments the hag's magic.

Bheur hags are attracted to selfish actions inspired by deadly cold, such as murdering a traveler for a winter coat or chopping down a dryad's grove for firewood. These actions are especially sweet to a bheur if they are unwarranted, such as a greedy merchant hoarding excess food for the winter while others starve. Bheurs use their ability to manipulate weather to batter villages with freezing cold, hoping to instill a despair that turns folk against each other.

In combat, a bheur hag also strives to inspire horror. When near a recently slain foe, the hag may forgo an attack to feed on the corpse. The sight of this butchery is enough to terrify most witnesses.

```ad-statblock
title: Bheur Hag
![[/6. Mechanics/Bestiary/Fey/Token/bheur-hag.png#token]]
*Medium fey, Chaotic Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 14d8 + 28|text(91)` (14d8 + 28) 
- **Speed** walk 30 ft., fly 50 ft. (hover, Graystaff magic)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|16 (+3)|14 (+2)|12 (+1)|13 (+1)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4
- **Skills** Nature +4, Perception +4, Stealth +6, Survival +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Immunities** cold
- **Languages** Auran, Common, Giant
- **Challenge** 7

## Traits

***Control Weather (1/Day).*** The hag can cast the [[/6. Mechanics/Spells/control-weather.md\|control weather]] spell, requiring no material components and using Charisma as the spellcasting ability.

***Graystaff Magic.*** The hag carries a graystaff, a magic staff. The hag can use its flying speed only while astride the staff. If the staff is lost or destroyed, the hag must craft another, which takes a year and a day. Only a bheur hag can use a graystaff

***Ice Walk.*** The hag can move across and climb icy surfaces without needing to make an ability check, and difficult terrain composed of ice or snow doesn't cost the hag extra moment.

***Spellcasting.*** While holding or riding the graystaff, the hag casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 14):

**At will**: [[/6. Mechanics/Spells/hold-person.md\|hold person]]

**1/day each**: [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]], [[/6. Mechanics/Spells/ice-storm.md\|ice storm]], [[/6. Mechanics/Spells/wall-of-ice.md\|wall of ice]]

## Actions

***Multiattack.*** The hag makes two Slam or Frost Shard attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 1\|avg` (`2d8 + 1`) bludgeoning damage plus `dice: 4d8\|avg` (`4d8`) cold damage.

***Frost Shard.*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 60 ft., one target. Hit: `dice: 6d8 + 3\|avg` (`6d8 + 3`) cold damage, and the target's speed is reduced by 10 feet until the start of the hag's next turn.

***Horrific Feast.*** The hag feeds on the corpse of one enemy within reach that died within the past minute. Each creature of the hag's choice that is within 60 feet and able to see the feeding must succeed on a DC 15 Wisdom saving throw or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the hag for 1 minute. While [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] in this way, a creature is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], can't understand what others say, can't read, and speaks only in gibberish. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Feast for the next 24 hours.
```
^statblock

## Environment

arctic