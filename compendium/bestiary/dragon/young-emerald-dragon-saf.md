---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/8
- monster/size/large
- monster/type/dragon
statblock: inline
aliases: ["Young Emerald Dragon"]
---
# [Young Emerald Dragon](compendium/bestiary/dragon/young-emerald-dragon-saf.md)
*Source: Strongholds and Followers p. 201*

One of the oldest species of gemstone dragons, the emeralds studied the lore of the sea and the unique, chaotic boundary between sea and land. It was the tide pools and estuaries that fascinated them, and they developed a theory of the timescape based on this intermingling. The Estuarial Hypothesis holds that the Mundane World lies on an interspace boundary between the worlds, and for this reason good, evil, chaos, and law all intermingle here.

Their obsession with the oceans and their unique biologies and rhythms took them into the sea until, after ten thousand generations, they were specially adapted to it. Their forelimbs atrophied until now all that remains of them are a handful of small bones that can only be seen via dissection.

Water dampens the dragon's mindspeech and as a result their psionics has evolved to be stronger, to pierce this liquid veil. As a side effect, an emerald dragon's mind is so powerful that it interferes with the thinking portions of other creatures' brains, making it very difficult for them to maintain concentration on their spells.

Their interest in our world and its relation to others makes them experts on the planes. Rumors speak of emerald dragons whose wings propel them naturally through the Sea of Stars that separates worlds, allowing them to travel at will to any plane. But this behavior has never been witnessed by mortals.

```statblock
"name": "Young Emerald Dragon (SaF)"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
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
- "desc": ". . [Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 14 • Recharge: dice: 1d6|avg (1d6) • Fracture: 14"
  "name": ""
- "desc": "Enemies within 30 feet must make a DC 14 Intelligence saving throw every\
    \ round to maintain spells that require concentration."
  "name": "Interference Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 3|avg (2d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "compendium/bestiary/dragon/token/emerald-wyrmling-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```