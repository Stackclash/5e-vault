---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/medium
- monster/type/humanoid/gnoll
statblock: true
statblock-link: "#^statblock"
"name": "Gnoll"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "12"
- !!int "11"
- !!int "6"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Gnoll"
"cr": "1/2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the gnoll can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or 6 (dice: 1d8 + 2|avg (1d8 + 2)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Longbow"
"source":
- "MM"
- "PotA"
- "TftYP"
- "GoS"
- "BGDIA"
- "ERLW"
- "EGW"
- "IDRotF"
"image": "/compendium/bestiary/humanoid/token/gnoll.png"
aliases: ["Gnoll"]
---
# Gnoll
*Source: Monster Manual p. 163, Princes of the Apocalypse, Tales from the Yawning Portal, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*  

Gnolls are feral humanoids that attack settlements along the frontiers and borderlands of civilization without warning, slaughtering their victims and devouring their flesh.

## Demonic Origin

The origin of the gnolls traces back to a time when the demon lord Yeenoghu found his way to the Material Plane and ran amok. Packs of ordinary hyenas followed in his wake, scavenging the demon lord's kills. Those hyenas were transformed into the first gnolls, parading after Yeenoghu until he was banished back to the Abyss. The gnolls then scattered across the face of the world, a dire reminder of demonic power.

## Nomadic Destroyers

Gnolls are dangerous because they strike at random. They emerge from the wilderness, plunder and slaughter, then move elsewhere. They attack like a plague of locusts, pillaging settlements and leaving little behind but razed buildings, gnawed corpses, and befouled land. Gnolls choose easy targets for their raids. Armored warriors holed up in a fortified castle will survive a rampaging gnoll horde unscathed, even as the towns, villages, and farms that surround the castle are ablaze, their people slaughtered and devoured.

Gnolls rarely build permanent structures or craft anything of lasting value. They don't make weapons or armor, but scavenge such items from the corpses of their fallen victims, stringing ears, teeth, scalps, and other trophies from their foes onto their patchwork armor.

### Thirst for Blood

No goodness or compassion resides in the heart of a gnoll. Like a demon, it lacks anything resembling a conscience, and can't be taught or coerced to put aside its destructive tendencies. The gnolls' frenzied bloodlust makes them an enemy to all, and when they lack a common foe, they fight among themselves. Even the most savage orcs avoid allying with gnolls.

## Stat Block

```ad-statblock
title: Gnoll
![](/compendium/bestiary/humanoid/token/gnoll.png#token)
*Medium humanoid(gnoll), Chaotic Evil*

- **Armor Class** 15 ([hide armor](/compendium/items/hide-armor.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 5d8|text(22)` (5d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|12 (+1)|11 (+0)| 6 (-2)|10 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Gnoll
- **Challenge** 1/2

## Traits

***Rampage.*** When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 6 (`dice: 1d8 + 2|avg` (`1d8 + 2`)) piercing damage if used with two hands to make a melee attack.

***Longbow.*** *Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 1|avg` (`1d8 + 1`) piercing damage.
```
^statblock

## Environment

grassland, forest, hill, desert