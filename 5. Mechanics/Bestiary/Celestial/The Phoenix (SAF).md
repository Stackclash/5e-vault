---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Huge
tags:
  - compendium/src/5e/saf
  - monster/cr/21
  - monster/size/huge
  - monster/type/celestial
aliases:
  - The Phoenix
---
# [[5. Mechanics\Bestiary\Celestial\The Phoenix (SAF).md|The Phoenix]]
*Source: Strongholds and Followers p. 248*

```statblock
"name": "The Phoenix (SAF)"
"size": "Huge"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "25"
- !!int "22"
- !!int "26"
- !!int "25"
- !!int "25"
- !!int "29"
"speed": "30 ft., fly 3450 ft. (hover ^[Yes, it can break the sound barrier.])"
"saves":
  "Charisma": !!int "16"
  "Wisdom": !!int "14"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "The phoenix radiates sunlight in a 60-foot radius, and dim light a further\
    \ 180 feet."
  "name": "Born of Fire"
- "desc": "The phoenix has advantage on saving throws against magic and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The phoenix regenerates 3d12 hit points at the start of each round."
  "name": "The Fire Is Alive"
- "desc": "The Phoenix's feathers cycle through every color in the rainbow. Evil creatures\
    \ who begin their turn within 60 feet of the Defender of All the Earth and who\
    \ do not explicitly avert their gaze must succeed on a DC 15 Wisdom saving throw\
    \ or be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] until the end of their\
    \ next turn. [[/5. Mechanics/Rules/Conditions.md#Charmed|Charmed]] targets are [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]].\
    \ If the target's saving throw is successful, the target is immune to the phoenix's\
    \ Dazzling Plumage for the next 24 hours."
  "name": "Dazzling Plumage"
"actions":
- "desc": "The phoenix makes two claw attacks and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 25\
    \ (4d8 + 7) necrotic damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: + +14 to hit, reach 15 ft., one target. Hit: 18\
    \ (2d10 + 7) piercing damage plus 9 (2d8) fire damage."
  "name": "Bite"
- "desc": "The phoenix exhales a beam of brilliant, prismatic light in a line that\
    \ is 10 feet wide and 1,000 feet long. Each creature in that line must make a\
    \ DC 22 Dexterity saving throw, taking 45 (10d8) fire and 35 (10d6) radiant damage\
    \ on a failed save, or half as much damage on a successful one.\n\nIn battle,\
    \ this counts as a unit with Attack +17 and Power +15 and can affect every unit\
    \ in a battle."
  "name": "Light of All Colors (Recharge 4-6)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
