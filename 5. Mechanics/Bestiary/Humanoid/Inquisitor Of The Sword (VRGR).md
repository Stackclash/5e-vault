---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/cr/8
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Inquisitor of the Sword"]
---
# [[5. Mechanics\Bestiary\Humanoid\Inquisitor Of The Sword (VRGR).md|Inquisitor of the Sword]]
*Source: Van Richten's Guide to Ravenloft p. 249*  

"Evil lurks everywhere. With our minds, we will unearth it, we will plumb its depths, and we will annihilate it." With those words, the psychically gifted priest Ulmed founded the Ulmist Inquisition, an order of psionic inquisitors that seeks to discover the wickedness hiding in people's souls.

In the days before Count Strahd von Zarovich became the first vampire, Strahd thundered across the lands with Ulmed. Their mission was clear: to destroy the infernal powers that had corrupted the world and to ensure that those powers never rose again. Strahd, Ulmed, and their companions hunted Fiends, Undead, Aberrations, and other supernatural threats and were tireless foes of cults like the priests of Osybus. When Strahd fell into darkness, Ulmed was heartbroken at his friend's transformation and changed the inquisition's mission. Instead of focusing on hunting monsters, it would also hunt the seeds of evil that can corrupt a person.

Ulmed and his friends Cosima, Ansel, and Tristian organized the inquisition into three orders, with each one specializing in a type of psionic power. The Order of Cosima harnessed the Mind Fire—their name for the fire of thought that blazes within each person's mind. They used that power to read thoughts, reshape memories, and dominate the recalcitrant. The inquisitors in the Order of Ansel subjected themselves to harsh asceticism in an effort to use psionic energy to empower their own bodies. They succeeded and became the martial arm of the inquisition, represented by a sword. Finally, the Order of Tristian endeavored to use intellect to alter the environment through telekinetic force, and the order's members became the inquisition's scholars, represented by a tome.

Today the inquisition rules the city of Malitain, a vast city-state to the north of Barovia's original site, and the inquisition sends its members throughout the multiverse, seeking to thwart the work of malevolent cults, otherworldly horrors, and the malice of mortals. The zeal of the inquisitors in this work has caused them to be a source of terror in many communities, where folk fear that an overzealous inquisitor might be as great a monster as the fiends the inquisitors originally hunted.

```statblock
"name": "Inquisitor of the Sword (VRGR)"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "12"
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "18"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "7"
  "Intelligence": !!int "5"
"skillsaves":
  "Athletics": !!int "4"
  "Insight": !!int "7"
  "Perception": !!int "7"
  "Acrobatics": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "truesight 30 ft., passive Perception 17"
"languages": "any two languages, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "The inquisitor casts one of the following spells, requiring no components\
    \ and using Wisdom as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Sending.md|sending]]\n\
    \n1/day each: [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Fly.md|fly]],\
    \ [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]]"
  "name": "innate"
- "desc": "At the start of each of its turns, the inquisitor regains 10 hit points\
    \ and can end one condition on itself, provided the inquisitor has at least 1\
    \ hit point."
  "name": "Metabolic Control"
"actions":
- "desc": "The inquisitor attacks twice with its Silver Longsword. After it hits or\
    \ misses with an attack, the inquisitor can teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or dice: 1d10 + 4|avg\
    \ (1d10 + 4) if used with two hands, plus dice: 4d8|avg (4d8) force damage."
  "name": "Silver Longsword"
"bonus_actions":
- "desc": "The inquisitor teleports up to 60 feet to an unoccupied space it can see."
  "name": "Blink Step"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Humanoid/token/inquisitor-of-the-sword.png"
```
^statblock