---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/saf
  - monster/cr/21
  - monster/size/gargantuan
  - monster/type/dragon
aliases:
  - Ancient Emerald Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Ancient Emerald Dragon (SAF).md|Ancient Emerald Dragon]]
*Source: Strongholds and Followers p. 199*

One of the oldest species of gemstone dragons, the emeralds studied the lore of the sea and the unique, chaotic boundary between sea and land. It was the tide pools and estuaries that fascinated them, and they developed a theory of the timescape based on this intermingling. The Estuarial Hypothesis holds that the Mundane World lies on an interspace boundary between the worlds, and for this reason good, evil, chaos, and law all intermingle here.

Their obsession with the oceans and their unique biologies and rhythms took them into the sea until, after ten thousand generations, they were specially adapted to it. Their forelimbs atrophied until now all that remains of them are a handful of small bones that can only be seen via dissection.

Water dampens the dragon's mindspeech and as a result their psionics has evolved to be stronger, to pierce this liquid veil. As a side effect, an emerald dragon's mind is so powerful that it interferes with the thinking portions of other creatures' brains, making it very difficult for them to maintain concentration on their spells.

Their interest in our world and its relation to others makes them experts on the planes. Rumors speak of emerald dragons whose wings propel them naturally through the Sea of Stars that separates worlds, allowing them to travel at will to any plane. But this behavior has never been witnessed by mortals.

```statblock
"name": "Ancient Emerald Dragon (SAF)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "252"
"hit_dice": "24d20 + 0"
"stats":
- !!int "21"
- !!int "24"
- !!int "10"
- !!int "24"
- !!int "16"
- !!int "22"
"speed": "40 ft., fly 80 ft. (hover), swim 40 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "14"
  "Wisdom": !!int "10"
  "Intelligence": !!int "14"
"skillsaves":
  "Religion": !!int "14"
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Arcana": !!int "14"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 24 • Recharge: 1d10 • Fracture: 27"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Enemies within 30 feet must make a DC 22 Intelligence saving throw every\
    \ round to maintain spells that require concentration."
  "name": "Interference Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 12\
    \ (2d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +12 to hit; reach 20 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check."
  "name": "Detect"
- "desc": "The dragon uses a [[5. Mechanics/Lists/List Optfeaturetype Psi Man.md|psionic ability]]."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take 14 (2d6 +\
    \ 7) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair\
    \ action to cause one of the following effects. The dragon can't use the same\
    \ effect two rounds in a row."
  "name": ""
- "desc": "- The dragon summons a water elemental.  \n- The dragon casts [[5. Mechanics/Spells/Control Water.md|control\
    \ water]] (save DC 22). It does not require\
    \ concentration to maintain.  \n- The dragon casts [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\
    \ with DC 22. The area is a 30-foot cube, and the damage is 4d8.  "
  "name": ""
"regional_effects":
- "desc": "Intelligent creatures who sleep within 12 miles of an emerald dragon's\
    \ lair dream of unending depths, tidal waves, starfish and crustaceans, or a calm\
    \ sea under solid white sky with constellations under the waters."
  "name": ""
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Emerald%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
