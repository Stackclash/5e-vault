---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(SAF)
  - monster\Cr\8
  - monster\Size\Large
  - monster\Type\Dragon
aliases:
  - Young Emerald Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Young Emerald Dragon (SAF).md|Young Emerald Dragon]]
*Source: Strongholds and Followers p. 201*

One of the oldest species of gemstone dragons, the emeralds studied the lore of the sea and the unique, chaotic boundary between sea and land. It was the tide pools and estuaries that fascinated them, and they developed a theory of the timescape based on this intermingling. The Estuarial Hypothesis holds that the Mundane World lies on an interspace boundary between the worlds, and for this reason good, evil, chaos, and law all intermingle here.

Their obsession with the oceans and their unique biologies and rhythms took them into the sea until, after ten thousand generations, they were specially adapted to it. Their forelimbs atrophied until now all that remains of them are a handful of small bones that can only be seen via dissection.

Water dampens the dragon's mindspeech and as a result their psionics has evolved to be stronger, to pierce this liquid veil. As a side effect, an emerald dragon's mind is so powerful that it interferes with the thinking portions of other creatures' brains, making it very difficult for them to maintain concentration on their spells.

Their interest in our world and its relation to others makes them experts on the planes. Rumors speak of emerald dragons whose wings propel them naturally through the Sea of Stars that separates worlds, allowing them to travel at will to any plane. But this behavior has never been witnessed by mortals.

```statblock
"name": "Young Emerald Dragon (SAF)"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d10 + 14"
"stats":
- !!int "16"
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "6"
"skillsaves":
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 18"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 14 • Recharge: 1d6 • Fracture: 14"
  "name": ""
- "desc": "Enemies within 30 feet must make a DC 14 Intelligence saving throw every\
    \ round to maintain spells that require concentration."
  "name": "Interference Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium%20Emerald%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
