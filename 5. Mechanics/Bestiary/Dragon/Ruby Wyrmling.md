---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/3
  - monster/size/medium
  - monster/type/dragon
statblock: inline
aliases:
  - Ruby Wyrmling
---
# [[5. Mechanics\Bestiary\Dragon\Ruby Wyrmling.md|Ruby Wyrmling]]
*Source: Strongholds and Followers p. 205*

The rubies protect the knowledge of reality, which they call realitas, the essential thing that separates real things from illusion.

They alone understand the danger that illusionists present to the Mundane World, because they alone know what even the most powerful spellcasters do not: illusion magic, properly applied, could replace this reality. Starve it until it withers, replace it with a phantasm. They are happy to sequester themselves from the world, locking their knowledge away. But should a sufficiently powerful illusionist catch a glimpse of the power contained within their spells, they will wake, seeking mortals to help them prevent the end of the Real. They believe that illusions are manifestations in this world of beings, objects, and power from other worlds—and that, given the chance, those alien worlds would attack ours.

They are measured and formal, slow to give trust. They like seeing things done properly, traditions obeyed and upheld. If you approach one with respect and introduce yourself properly and do not saw the air too much with your hands, then they will listen and grant you the opportunity to impress them.

```statblock
"name": "Ruby Wyrmling"
"size": "Medium"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "14"
- !!int "14"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "4"
  "Wisdom": !!int "4"
  "Intelligence": !!int "4"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "3"
"traits":
- "desc": ". . [[/5. Mechanics/Rules/Variant Rules/Gemstone Dragon Psionics.md|Gemstone Dragon Psionics]].\
    \ Charges: 9 • Recharge: 1d4 • Fracture: 8"
  "name": ""
- "desc": "Allies' spells cast within 30 feet have their saving throw DC increased\
    \ by 1."
  "name": "Amplification Aura"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) piercing damage."
  "name": "Bite"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Medium\
  \ Ruby Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
