---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underwater, coastal'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/coastal
  - monster/environment/underwater
  - monster/size/medium
  - monster/type/humanoid/sahuagin
aliases:
  - Sahuagin Priestess
---
# [[5. Mechanics\Bestiary\Humanoid\Sahuagin Priestess.md|Sahuagin Priestess]]
*Source: Monster Manual p. 264*

Across fog-shrouded coasts or endless ocean swells, an ominous drone sounded on a conch shell chills the blood of all who hear it. This is the sound of the sahuagin hunting horn-a call to raid and battle. Coastal settlers refer to sahuagin as "sea devils," for sahuagin have no compassion in them, slaughtering the crews of ships and decimating coastal villages.

## Devils of the Deep

Sahuagin are a predatory, piscine race that ventures from the ocean's black depths to hunt the creatures of the shallows and shore. Though they dwell in the deepest trenches of the ocean, sahuagin view the entire aquatic realm as their kingdom and the creatures in it as blood sport for their hunting parties.

The self-styled rulers of sahuagin ocean domains are massive mutant males that grow second sets of arms. They are terrible foes in battle, and all sahuagin bow down before these powerful barons.

## Way of the Shark

Sahuagin worship the shark god Sekolah. Only female sahuagin are deemed worthy of channeling the god's power, and priestesses hold tremendous sway in sahuagin communities.

Sahuagin are driven into a frenzy by the smell of fresh blood. As worshipers of Sekolah, they also have a special kinship with sharks, which they train as attack animals. Even untrained sharks recognize sahuagin as allies and don't prey on them.

## Elven Enmity

The sahuagin might control the oceans if not for the presence of their mortal enemies, the aquatic elves. Wars between the two races have raged for centuries across the coasts and seas of the world, disrupting maritime trade and drawing other races into the bloody conflict.

So intense is sahuagin hatred for the aquatic elves that the sea devils have adapted to combat their ancient foes. A sahuagin born near enough to an aquatic elf community can enter the world as a malenti-a sahuagin that physically resembles an aquatic elf in every way. Sahuagin are prone to mutation, but whether this rare phenomenon is a result of the wars between the sahuagin and the aquatic elves-or whether it preceded or even began the conflict-none can say.

The sahuagin put the malenti to good use as spies and assassins in aquatic elf cities and the societies of other creatures that pose a threat to sahuagin. The mere shadow of the malenti threat incites paranoia and suspicion among aquatic elves, whose resilience is weakened as the prelude to an actual sahuagin invasion.

> [!quote] A quote from An account of the aftermath of a sahuagin raid  
> 
> TThe village was empty, the seagulls were strangely quiet, and all we could hear was the surge of the sea.


```statblock
"name": "Sahuagin Priestess"
"size": "Medium"
"type": "humanoid"
"subtype": "sahuagin"
"alignment": "Lawful Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "14"
- !!int "13"
"speed": "30 ft., swim 40 ft."
"skillsaves":
  "Religion": !!int "3"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Sahuagin"
"cr": "2"
"traits":
- "desc": "The sahuagin is a 6th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 12, +4 to hit with spell attacks). She has the following cleric\
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Guiding Bolt.md|guiding bolt]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]\
    \ (trident)\n\n3rd level (3 slots): [[5. Mechanics/Spells/Mass Healing Word.md|mass healing word]],\
    \ [[5. Mechanics/Spells/Tongues.md|tongues]]"
  "name": "Spellcasting"
- "desc": "The sahuagin has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The sahuagin can breathe air and water, but it needs to be submerged at\
    \ least once every 4 hours to avoid suffocating."
  "name": "Limited Amphibiousness"
- "desc": "The sahuagin can magically command any shark within 120 feet of it, using\
    \ a limited telepathy."
  "name": "Shark Telepathy"
"actions":
- "desc": "The sahuagin makes two melee attacks: one with her bite and one with her\
    \ claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage."
  "name": "Claws"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Humanoid/token/sahuagin-priestess.webp"
```
^statblock

## Environment

underwater, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
