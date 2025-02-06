---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(SAF)
  - monster\Cr\9
  - monster\Size\Large
  - monster\Type\Dragon
aliases:
  - Young Ruby Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Young Ruby Dragon (SAF).md|Young Ruby Dragon]]
*Source: Strongholds and Followers p. 205*

The rubies protect the knowledge of reality, which they call realitas, the essential thing that separates real things from illusion.

They alone understand the danger that illusionists present to the Mundane World, because they alone know what even the most powerful spellcasters do not: illusion magic, properly applied, could replace this reality. Starve it until it withers, replace it with a phantasm. They are happy to sequester themselves from the world, locking their knowledge away. But should a sufficiently powerful illusionist catch a glimpse of the power contained within their spells, they will wake, seeking mortals to help them prevent the end of the Real. They believe that illusions are manifestations in this world of beings, objects, and power from other worlds—and that, given the chance, those alien worlds would attack ours.

They are measured and formal, slow to give trust. They like seeing things done properly, traditions obeyed and upheld. If you approach one with respect and introduce yourself properly and do not saw the air too much with your hands, then they will listen and grant you the opportunity to impress them.

```statblock
"name": "Young Ruby Dragon (SAF)"
"size": "Large"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d10 + 16"
"stats":
- !!int "17"
- !!int "17"
- !!int "13"
- !!int "17"
- !!int "15"
- !!int "17"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Insight": !!int "6"
  "Perception": !!int "6"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 20"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "9"
"traits":
- "desc": "[[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics (SAF).md|Gemstone Dragon Psionics]].\
    \ Charges: 16 • Recharge: 1d6 • Fracture: 16"
  "name": ""
- "desc": "Allies' spells cast within 30 feet have their saving throw DC increased\
    \ by 2."
  "name": "Amplification Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 14 (2d10\
    \ + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claw"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium%20Ruby%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
