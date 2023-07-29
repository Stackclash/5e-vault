---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/elf
statblock: true
statblock-link: "#^statblock"
name: Shadar-kai Soul Monger
ac: 15
hp: 136
hit_dice: 21d8 + 42
cr: '11'
stats: [
  8,
  17,
  14,
  19,
  16,
  13
]
source: [
  MPMM,
  MTF
]
aliases: ["Shadar-kai Soul Monger"]
---
# Shadar-kai Soul Monger
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 214, Mordenkainen's Tome of Foes p. 226*  

Wracked with despair over the loss of memories of a brighter time, soul mongers crave the vitality of others. The aching void within a soul monger radiates outward, manifesting as an unbearable weight that drains the vigor of anyone unfortunate enough to be in their presence. Those who have escaped the onslaught of a soul monger can hardly shake the memory of the sound they make—the moan of a tortured soul, lost in a bottomless well of tragedy.

## Shadar-kai

In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

### Fortress of Memories

The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

## Stat Block

```ad-statblock
title: Shadar-kai Soul Monger
![](/compendium/bestiary/humanoid/token/shadar-kai-soul-monger.png#token)
*Medium humanoid(elf), Neutral Evil*

- **Armor Class** 15 ([studded leather](/compendium/items/studded-leather-armor.md))
- **Hit Points** `dice: 21d8 + 42|text(136)` (21d8 + 42) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|17 (+3)|14 (+2)|19 (+4)|16 (+3)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +7, Wisdom +7, Charisma +5
- **Skills** Perception +7
- **Senses** darkvision 60 ft., passive Perception 17
- **Damage Immunities** necrotic, psychic
- **Condition Immunities** charmed, exhaustion, frightened
- **Languages** Common, Elvish
- **Challenge** 11

## Traits

***Fey Ancestry.*** The shadar-kai has advantage on saving throws against being [charmed](compendium/rules/conditions.md#charmed), and magic can't put it to sleep.

***Magic Resistance.*** The shadar-kai has advantage on saving throws against spells and other magical effects.

***Soul Thirst.*** When it reduces a creature to 0 hit points, the shadar-kai can gain temporary hit points equal to half the creature's hit point maximum. While the shadar-kai has temporary hit points from this trait, it has advantage on attack rolls.

***Weight of Ages.*** Any Beast or Humanoid (except an elf) that starts its turn within 5 feet of the shadar-kai has its speed reduced by 20 feet until the start of that creature's next turn.

***Spellcasting.*** The shadar-kai casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 16):

**1/day each**: [bestow curse](/compendium/spells/bestow-curse.md), [finger of death](/compendium/spells/finger-of-death.md), [gaseous form](/compendium/spells/gaseous-form.md), [seeming](/compendium/spells/seeming.md)

## Actions

***Multiattack.*** The shadar-kai makes two Shadow Dagger attacks.

***Shadow Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 4d4 + 3|avg` (`4d4 + 3`) piercing damage plus `dice: 3d12|avg` (`3d12`) necrotic damage, and the target has disadvantage on saving throws until the end of the shadar-kai's next turn. Hit or Miss: The dagger magically returns to the shadar-kai's hand immediately after a ranged attack.

***Wave of Weariness (Recharge 4-6).*** The shadar-kai emits weariness in a 60-foot cube. Each creature in that area must make a DC 16 Constitution saving throw. On a failed save, a creature takes `dice: 10d8|avg` (`10d8`) psychic damage and suffers 1 level of [exhaustion](compendium/rules/conditions.md#exhaustion). On a successful save, it takes half as much damage and doesn't gain a level of [exhaustion](compendium/rules/conditions.md#exhaustion).
```
^statblock

## Environment

underdark, urban