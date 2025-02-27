---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: urban
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
aliases:
  - Warlord
---
# [[5. Mechanics\Bestiary\Humanoid\Warlord (MPMM).md|Warlord]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 257, Volo's Guide to Monsters p. 220*

Warlords are legendary battlefield commanders, whose names are spoken with awe. After a string of decisive victories, a warlord could easily take on the role of monarch or general and attract followers willing to die for the warlord's banner.

Warlords urge their troops into the fray with shouted exhortations. You can roll on the Warlord Battle Cries table to select one, or choose a battle cry that fits with your campaign.

**Warlord Battle Cries**

`dice: [[Warlord (MPMM).md#^warlord-battle-cries]]`

| dice: d8 | Battle Cry |
|----------|------------|
| 1 | "Remember why we fight!" |
| 2 | "Victory awaits!" |
| 3 | "For the crown!" |
| 4 | "Be monstrous to the enemy!" |
| 5 | "Fight so they fear us!" |
| 6 | "Weapons drawn! Spells at the ready!" |
| 7 | "To the Abyss with them!" |
| 8 | "You know what to do!" |
^warlord-battle-cries

```statblock
"name": "Warlord (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "229"
"hit_dice": "27d8 + 108"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "8"
  "Athletics": !!int "9"
  "Perception": !!int "5"
  "Persuasion": !!int "8"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "12"
"traits":
- "desc": "The warlord can reroll a saving throw it fails. It must use the new roll."
  "name": "Indomitable (3/Day)"
- "desc": "The warlord regains 10 hit points at the start of its turn if it has fewer\
    \ than half its hit points but at least 1 hit point."
  "name": "Survivor"
"actions":
- "desc": "The warlord makes two Greatsword or Short bow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Greatsword"
- "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Shortbow"
"legendary_actions":
- "desc": "The warlord targets one ally it can see within 30 feet of it. If the target\
    \ can see and hear the warlord, the target can make one weapon attack as a reaction\
    \ and gains advantage on the attack roll."
  "name": "Command Ally"
- "desc": "The warlord makes one Greatsword or Shortbow attack."
  "name": "Weapon Attack"
- "desc": "The warlord targets one creature it can see within 30 feet of it. If the\
    \ target can see and hear it, the target must succeed on a DC 16 Wisdom saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] until the\
    \ end of warlord's next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/warlord-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
