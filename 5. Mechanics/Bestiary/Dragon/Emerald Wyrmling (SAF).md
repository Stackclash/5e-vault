---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/3
  - monster/size/medium
  - monster/type/dragon
aliases:
  - Emerald Wyrmling
---
# [[5. Mechanics\Bestiary\Dragon\Emerald Wyrmling (SAF).md|Emerald Wyrmling]]
*Source: Strongholds and Followers p. 201*

One of the oldest species of gemstone dragons, the emeralds studied the lore of the sea and the unique, chaotic boundary between sea and land. It was the tide pools and estuaries that fascinated them, and they developed a theory of the timescape based on this intermingling. The Estuarial Hypothesis holds that the Mundane World lies on an interspace boundary between the worlds, and for this reason good, evil, chaos, and law all intermingle here.

Their obsession with the oceans and their unique biologies and rhythms took them into the sea until, after ten thousand generations, they were specially adapted to it. Their forelimbs atrophied until now all that remains of them are a handful of small bones that can only be seen via dissection.

Water dampens the dragon's mindspeech and as a result their psionics has evolved to be stronger, to pierce this liquid veil. As a side effect, an emerald dragon's mind is so powerful that it interferes with the thinking portions of other creatures' brains, making it very difficult for them to maintain concentration on their spells.

Their interest in our world and its relation to others makes them experts on the planes. Rumors speak of emerald dragons whose wings propel them naturally through the Sea of Stars that separates worlds, allowing them to travel at will to any plane. But this behavior has never been witnessed by mortals.

```statblock
"name": "Emerald Wyrmling (SAF)"
"size": "Medium"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "31"
"hit_dice": "7d8 + 0"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "12"
"speed": "30 ft., fly 60 ft. (hover), swim 30 ft."
"saves":
  - "dexterity": "+4"
  - "intelligence": "+4"
  - "wisdom": "+3"
  - "charisma": "+3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 15"
"languages": "Common, Draconic"
"cr": "3"
"traits":
  - "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Psionics]].\
      \ Charges: 7 • Recharge: d4 • Fracture: 6"
    "name": ""
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d10 + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) slashing damage."
    "name": "Claw"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium%20Emerald%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
