---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: 'forest, underdark, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\7
  - monster\Environment\Forest
  - monster\Environment\Underdark
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Humanoid\Elf
aliases:
  - Shadar-kai Shadow Dancer
---
# [[5. Mechanics\Bestiary\Humanoid\Shadar Kai Shadow Dancer (MPMM).md|Shadar-kai Shadow Dancer]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 213, Mordenkainen's Tome of Foes p. 225*

Those who have fought shadow dancers describe the experience as similar to fighting a living darkness. Every dim alcove and darkened nook is a place the lithe and acrobatic shadow dancers can emerge from to ambush their prey. Using this tactic, they attack their enemies from all angles with a flurry of entangling chains that hold fast and corrupt the flesh. When their quarry is helpless, they dispatch it and then loot the corpse for trinkets, particularly anything colorful and lively to gaze at after they return to the gloom of the Shadowfell.

## Shadar-kai

In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

### Fortress of Memories

The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

```statblock
"name": "Shadar Kai Shadow Dancer (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Elvish"
"cr": "7"
"traits":
- "desc": "The shadar-kai has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "The shadar-kai makes three Spiked Chain attacks.\n\nIt can use Shadow Jump\
    \ after one of these attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6\
    \ + 3) piercing damage. The target must succeed on a DC 14 Dexterity saving throw\
    \ or suffer one of the following effects (choose one or roll a d6):\n\n- 1–\
    2 Decay. The target takes 22 (4d10) necrotic damage.  \n- 3–4 Grapple. The\
    \ target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape DC 14)\
    \ if it is a Medium or smaller creature. Until the grapple ends, the target is\
    \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], and the shadar-kai\
    \ can't grapple another target.  \n- 5–6 Topple. The target is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \  "
  "name": "Spiked Chain"
"bonus_actions":
- "desc": "The shadar-kai teleports, along with any equipment is it wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see. Both the space it teleports\
    \ from and the space it teleports to must be in dim light or darkness."
  "name": "Shadow Jump"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/shadar-kai-shadow-dancer-mpmm.webp"
```
^statblock

## Environment

forest, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
