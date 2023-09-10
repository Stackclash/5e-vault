---
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/humanoid
aliases: ["Inquisitor of the Mind Fire"]
---
# Inquisitor of the Mind Fire
*Source: Van Richten's Guide to Ravenloft p. 248*  

"Evil lurks everywhere. With our minds, we will unearth it, we will plumb its depths, and we will annihilate it." With those words, the psychically gifted priest Ulmed founded the Ulmist Inquisition, an order of psionic inquisitors that seeks to discover the wickedness hiding in people's souls.

In the days before Count Strahd von Zarovich became the first vampire, Strahd thundered across the lands with Ulmed. Their mission was clear: to destroy the infernal powers that had corrupted the world and to ensure that those powers never rose again. Strahd, Ulmed, and their companions hunted Fiends, Undead, Aberrations, and other supernatural threats and were tireless foes of cults like the priests of Osybus. When Strahd fell into darkness, Ulmed was heartbroken at his friend's transformation and changed the inquisition's mission. Instead of focusing on hunting monsters, it would also hunt the seeds of evil that can corrupt a person.

Ulmed and his friends Cosima, Ansel, and Tristian organized the inquisition into three orders, with each one specializing in a type of psionic power. The Order of Cosima harnessed the Mind Fire—their name for the fire of thought that blazes within each person's mind. They used that power to read thoughts, reshape memories, and dominate the recalcitrant. The inquisitors in the Order of Ansel subjected themselves to harsh asceticism in an effort to use psionic energy to empower their own bodies. They succeeded and became the martial arm of the inquisition, represented by a sword. Finally, the Order of Tristian endeavored to use intellect to alter the environment through telekinetic force, and the order's members became the inquisition's scholars, represented by a tome.

Today the inquisition rules the city of Malitain, a vast city-state to the north of Barovia's original site, and the inquisition sends its members throughout the multiverse, seeking to thwart the work of malevolent cults, otherworldly horrors, and the malice of mortals. The zeal of the inquisitors in this work has caused them to be a source of terror in many communities, where folk fear that an overzealous inquisitor might be as great a monster as the fiends the inquisitors originally hunted.

```statblock
"name": "Inquisitor of the Mind Fire"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "19"
"speed": "30 ft."
"saves":
  "Charisma": "+7"
  "Wisdom": "+6"
  "Intelligence": "+6"
"skillsaves":
  "Insight": "+6"
  "Perception": "+6"
"condition_immunities": "charmed, frightened"
"senses": "truesight 30 ft., passive Perception 16"
"languages": "any three languages, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "The inquisitor casts one of the following spells, requiring no components\
    \ and using Charisma as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ [[5. Mechanics/Spells/Arcane Eye.md\|arcane eye]], [[5. Mechanics/Spells/Calm Emotions.md\|calm emotions]],\
    \ [[5. Mechanics/Spells/Detect Magic.md\|detect magic]], [[5. Mechanics/Spells/Detect Thoughts.md\|detect thoughts]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md\|dispel magic]], [[5. Mechanics/Spells/Sending.md\|sending]],\
    \ [[5. Mechanics/Spells/Suggestion.md\|suggestion]]\n\n1/day each: [[5. Mechanics/Spells/Mass Suggestion.md\|mass suggestion]],\
    \ [[5. Mechanics/Spells/Modify Memory.md\|modify memory]]"
  "name": "innate"
"actions":
- "desc": "The inquisitor attacks twice with its Silver Longsword or uses Mind Fire\
    \ twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: 8 (dice: 1d8 + 4|avg (1d8 + 4)) slashing damage, or 9 (dice: 1d10\
    \ + 4|avg (1d10 + 4)) if used with two hands, plus 18 (dice: 4d8|avg (4d8))\
    \ force damage."
  "name": "Silver Longsword"
- "desc": "The inquisitor targets one creature it can see within 120 feet of it. The\
    \ target must succeed on a DC 15 Intelligence saving throw or take 17 (dice:\
    \ 3d8 + 4|avg (3d8 + 4)) psychic damage and be [[/5. Mechanics/Rules/Conditions.md#stunned\|stunned]]\
    \ until the start of the inquisitor's next turn."
  "name": "Mind Fire"
- "desc": "Each creature of the inquisitor's choice that it can see within 60 feet\
    \ of it must succeed on a DC 15 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#charmed\|charmed]]\
    \ until the start of the inquisitor's next turn. On the [[/5. Mechanics/Rules/Conditions.md#charmed\|charmed]]\
    \ target's turn, the inquisitor can telepathically control the target's move,\
    \ action, or both. When controlled in this way, the target can take only the Attack\
    \ (inquisitor chooses the target) or Dash action."
  "name": "Inquisitor's Command (Recharge 5-6)"
"source":
- "VRGR"
"image": "compendium/bestiary/humanoid/token/inquisitor-of-the-mind-fire.png"
```
^statblock