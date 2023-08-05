---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Warlord"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "229"
"hit_dice": "27d8 + 108"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
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
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord can reroll a saving throw it fails. It must use the new roll."
  "name": "Indomitable (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord regains 10 hit points at the start of its turn if it has fewer\
    \ than half its hit points but at least 1 hit point."
  "name": "Survivor"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord makes two Greatsword or Short bow attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage."
  "name": "Greatsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Shortbow"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord targets one ally it can see within 30 feet of it. if the target\
    \ can see and hear the warlord, the target can make one weapon attack as a reaction\
    \ and gains advantage on the attack roll."
  "name": "Command Ally"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord makes one Greatsword or Shortbow attack."
  "name": "Weapon Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlord targets one creature it can see within 30 feet of it. If the\
    \ target can see and hear it, the target must succeed on a DC 16 Wisdom saving\
    \ throw or be [frightened](compendium/rules/conditions.md#frightened) until the\
    \ end of warlord's next turn."
  "name": "Frighten Foe (Costs 2 Actions)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/warlord.png"
aliases: ["Warlord"]
---
# Warlord
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 257, Volo's Guide to Monsters p. 220*  

Warlords are legendary battlefield commanders, whose names are spoken with awe. After a string of decisive victories, a warlord could easily take on the role of monarch or general and attract followers willing to die for the warlord's banner.

Warlords urge their troops into the fray with shouted exhortations. You can roll on the Warlord Battle Cries table to select one, or choose a battle cry that fits with your campaign.

**Warlord Battle Cries**

| `dice: d8|avg` (`d8`) | Battle Cry |
|----------|------------|------------|
| 1 | "Remember why we fight!" |
| 2 | "Victory awaits!" |
| 3 | "For the crown!" |
| 4 | "Be monstrous to the enemy!" |
| 5 | "Fight so they fear us!" |
| 6 | "Weapons drawn! Spells at the ready!" |
| 7 | "To the Abyss with them!" |
| 8 | "You know what to do!" |
^warlord-battle-cries

```ad-statblock
title: Warlord
![](/compendium/bestiary/humanoid/token/warlord.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 18 ([plate](/compendium/items/plate-armor.md))
- **Hit Points** `dice: 27d8 + 108|text(229)` (27d8 + 108) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|16 (+3)|18 (+4)|12 (+1)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Strength +9, Dexterity +7, Constitution +8
- **Skills** Athletics +9, Intimidation +8, Perception +5, Persuasion +8
- **Senses** passive Perception 15
- **Languages** any two languages
- **Challenge** 12

## Traits

***Indomitable (3/Day).*** The warlord can reroll a saving throw it fails. It must use the new roll.

***Survivor.*** The warlord regains 10 hit points at the start of its turn if it has fewer than half its hit points but at least 1 hit point.

## Actions

***Multiattack.*** The warlord makes two Greatsword or Short bow attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 5|avg` (`2d6 + 5`) slashing damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) piercing damage.

## Legendary Actions

***Command Ally.*** The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll.

***Weapon Attack.*** The warlord makes one Greatsword or Shortbow attack.

***Frighten Foe (Costs 2 Actions).*** The warlord targets one creature it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a DC 16 Wisdom saving throw or be [frightened](compendium/rules/conditions.md#frightened) until the end of warlord's next turn.
```
^statblock

## Environment

urban