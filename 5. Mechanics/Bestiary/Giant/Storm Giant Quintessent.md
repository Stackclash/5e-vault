---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/16
  - monster/environment/coastal
  - monster/environment/desert
  - monster/environment/mountain
  - monster/environment/underwater
  - monster/size/huge
  - monster/type/giant
statblock: inline
aliases:
  - Storm Giant Quintessent
---
# [[5. Mechanics\Bestiary\Giant\Storm Giant Quintessent.md|Storm Giant Quintessent]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 235, Volo's Guide to Monsters p. 151*

To forestall the inevitable, some storm giants approaching the end of their natural life spans seek an escape from death. They plumb the depths of their powerful connection to the elements and disperse themselves into nature, transforming into semiconscious storms. The blizzard that rages unendingly around a mountain peak, the vortex that swirls around a remote island, or the thunderstorm that howls ceaselessly up and down a rugged coastline could, in fact, be the undying form of a storm giant clinging to existence.

A storm giant quintessent sheds their armor and weapons but gains the power to form makeshift weapons out of thin air. When the giant has no further use of these elemental weapons, or when the giant dies, the weapons disappear.

A storm giant quintessent can revert to their true giant form temporarily and can maintain that form long enough for the giant to communicate with a mortal, carry out a short task, or defend their home against aggressors.

## A Quintessent's Lair

A storm giant quintessent has no need for castles or dungeon lairs. Their lair is usually a secluded region or prominent geographic feature, such as a mountain peak, a great waterfall, a remote island, a fog-shrouded loch, a beautiful coral reef, or a windswept desert bluff. The storm in which the giant lives could be a blizzard, a typhoon, a thunderstorm, or a sandstorm, as befits the environment.

```statblock
"name": "Storm Giant Quintessent"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Good"
"ac": !!int "12"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"stats":
- !!int "29"
- !!int "14"
- !!int "20"
- !!int "17"
- !!int "20"
- !!int "19"
"speed": "50 ft., fly 50 ft. (hover), swim 50 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "10"
  "Strength": !!int "14"
  "Constitution": !!int "10"
"skillsaves":
  "Perception": !!int "10"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, thunder"
"senses": "truesight 60 ft., passive Perception 20"
"languages": "Common, Giant"
"cr": "16"
"traits":
- "desc": "The giant can breathe air and water."
  "name": "Amphibious"
- "desc": "If the giant fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
"actions":
- "desc": "The giant makes two Lightning Sword attacks, or it uses Wind Javelin twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 40\
    \ (9d6 + 9) lightning damage."
  "name": "Lightning Sword"
- "desc": "The giant coalesces wind into a javelin-like form and hurls it at a creature\
    \ it can see within 600 feet of it. The javelin deals 19 (3d6 + 9) force damage\
    \ to the target, striking unerringly. The javelin disappears after it hits."
  "name": "Wind Javelin"
"legendary_actions":
- "desc": "The giant targets a creature it can see within 60 feet of it and creates\
    \ a magical gust of wind around the target, who must succeed on a DC 18 Strength\
    \ saving throw or be moved up to 20 feet in any horizontal direction the giant\
    \ chooses."
  "name": "Gust"
- "desc": "The giant hurls a thunderbolt at a creature it can see within 600 feet\
    \ of it. The target must make a DC 18 Dexterity saving throw, taking 22 (4d10)\
    \ thunder damage on a failed save, or half as much damage on a successful one."
  "name": "Thunderbolt (Costs 2 Actions)"
- "desc": "The giant vanishes, dispersing itself into the storm surrounding its lair.\
    \ The giant can end this effect at the start of any of its turns, becoming a giant\
    \ once more and appearing in any location it chooses within its lair. While dispersed,\
    \ the giant can't take any actions other than lair actions, and it can't be targeted\
    \ by attacks, spells, or other effects. The giant can't use this ability outside\
    \ its lair, nor can it use this ability if another creature is using a [[5. Mechanics/Spells/Control Weather.md|control\
    \ weather]] spell or similar magic to quell\
    \ the storm."
  "name": "One with the Storm (Costs 3 Actions)"
"lair_actions":
- "desc": "A storm giant quintessent can use lair actions in giant form and while\
    \ transformed into a storm. On initiative count 20 (losing initiative ties), the\
    \ giant can take one of the following lair actions; the giant can't take the same\
    \ lair action two rounds in a row:"
  "name": ""
- "desc": "- Deafening Boom. The giant creates a thunderclap centered on a point\
    \ anywhere in their lair. Each creature within 20 feet of that point must succeed\
    \ on a DC 18 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]]\
    \ until the end of its next turn.  \n- Fog. The giant creates a 20-foot-radius\
    \ sphere of fog (or murky water if within water) centered on a point anywhere\
    \ in its lair. The sphere spreads around corners, and its area is heavily obscured.\
    \ The fog lasts until the giant disperses it (no action required), and it can't\
    \ be dispersed by wind.  \n- Gale. The giant creates a 60-foot-long, 10-foot-wide\
    \ line of strong wind (or strong current within water) originating from a point\
    \ anywhere in its lair. Each creature in that line must succeed on a DC 18 Strength\
    \ saving throw or be pushed 15 feet in the direction the wind is blowing. The\
    \ gust disperses gas or vapor, and it extinguishes candles, torches, and similar\
    \ unprotected flames in its area. Protected flames, such as those of lanterns,\
    \ have a 50% chance chance of being extinguished.  "
  "name": ""
"regional_effects":
- "desc": "The region containing a storm giant quintessent's lair is warped by the\
    \ giant's presence, which creates one or more of the following effects:"
  "name": ""
- "desc": "- Downpour. Rain, snow, or blowing dust or sand (whichever is most\
    \ appropriate) is constant within 1 mile of the lair. Rain causes rivers and streams\
    \ to fill or overflow their banks; snow, dust, or sand forms deep drifts or dunes.\
    \  \n- Lightning. Flashes of lightning and peals of thunder are continual,\
    \ day and night, within 5 miles of the lair.  \n- Winds. High wind blows within\
    \ 1 mile of the lair, making it impossible to light a fire unless the location\
    \ where the fire is lit is protected from the wind.  "
  "name": ""
- "desc": "If the giant dies, the lightning, thunder, and high wind regional effects\
    \ end immediately. Rain, snow, and blowing dust abate gradually within 1d8 days."
  "name": ""
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Giant/token/storm-giant-quintessent-mpmm.webp"
```
^statblock

## Environment

coastal, desert, mountain, underwater

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
