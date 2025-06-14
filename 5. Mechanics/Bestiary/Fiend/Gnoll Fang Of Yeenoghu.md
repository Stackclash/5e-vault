---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'grassland, forest, hill, desert'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/4
  - monster/environment/desert
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/fiend/gnoll
aliases:
  - Gnoll Fang of Yeenoghu
---
# [[5. Mechanics\Bestiary\Fiend\Gnoll Fang Of Yeenoghu.md|Gnoll Fang of Yeenoghu]]
*Source: Monster Manual p. 163*

Gnolls celebrate their victories by performing demonic rituals and making blood offerings to Yeenoghu.

Sometimes the demon lord rewards his worshipers by allowing one of them to be possessed by a demonic spirit. Marked as Yeenoghu's favorite, the lucky recipient becomes a fang of Yeenoghu, the chosen of the Gnoll Lord. In much the same way Yeenoghu created the first gnolls, a hyena that feasts on a fang's slain foe undergoes a horrible transformation, becoming a full-grown adult gnoll. Depending on the number of hyenas in a region, a fang of Yeenoghu can lead to a startling increase in the gnoll population. Finding and killing the fang is the only way to keep that population in check.

## Gnolls

Gnolls are feral humanoids that attack settlements along the frontiers and borderlands of civilization without warning, slaughtering their victims and devouring their flesh.

### Demonic Origin

The origin of the gnolls traces back to a time when the demon lord Yeenoghu found his way to the Material Plane and ran amok. Packs of ordinary hyenas followed in his wake, scavenging the demon lord's kills. Those hyenas were transformed into the first gnolls, parading after Yeenoghu until he was banished back to the Abyss. The gnolls then scattered across the face of the world, a dire reminder of demonic power.

Gnolls rarely build permanent structures or craft anything of lasting value. They don't make weapons or armor, but scavenge such items from the corpses of their fallen victims, stringing ears, teeth, scalps, and other trophies from their foes onto their patchwork armor.

### Nomadic Destroyers

Gnolls are dangerous because they strike at random. They emerge from the wilderness, plunder and slaughter, then move elsewhere. They attack like a plague of locusts, pillaging settlements and leaving little behind but razed buildings, gnawed corpses, and befouled land. Gnolls choose easy targets for their raids. Armored warriors holed up in a fortified castle will survive a rampaging gnoll horde unscathed, even as the towns, villages, and farms that surround the castle are ablaze, their people slaughtered and devoured.

### Thirst for Blood

No goodness or compassion resides in the heart of a gnoll. Like a demon, it lacks anything resembling a conscience, and can't be taught or coerced to put aside its destructive tendencies. The gnolls' frenzied bloodlust makes them an enemy to all, and when they lack a common foe, they fight among themselves. Even the most savage orcs avoid allying with gnolls.

```statblock
"name": "Gnoll Fang Of Yeenoghu"
"size": "Medium"
"type": "fiend"
"subtype": "gnoll"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "constitution": "+4"
  - "wisdom": "+2"
  - "charisma": "+3"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Gnoll"
"cr": "4"
"traits":
  - "desc": "When the gnoll reduces a creature to 0 hit points with a melee attack\
      \ on its turn, the gnoll can take a bonus action to move up to half its speed\
      \ and make a bite attack."
    "name": "Rampage"
"actions":
  - "desc": "The gnoll makes three attacks: one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6\
      \ (1d6 + 3) piercing damage, and the target must succeed on a DC 12 Constitution\
      \ saving throw or take 7 (2d6) poison damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage."
    "name": "Claw"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Fiend/token/gnoll-fang-of-yeenoghu.webp"
```
^statblock

## Environment

grassland, forest, hill, desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
