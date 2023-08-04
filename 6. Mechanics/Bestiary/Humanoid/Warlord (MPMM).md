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
name: Warlord
ac: 18
hp: 229
hit_dice: 27d8 + 108
cr: '12'
stats: [
  20,
  16,
  18,
  12,
  12,
  18
]
source: [
  MPMM,
  VGM
]
aliases: ["Warlord"]
---
# Warlord
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 257, Volo's Guide to Monsters p. 220*  

Warlords are legendary battlefield commanders, whose names are spoken with awe. After a string of decisive victories, a warlord could easily take on the role of monarch or general and attract followers willing to die for the warlord's banner.

Warlords urge their troops into the fray with shouted exhortations. You can roll on the Warlord Battle Cries table to select one, or choose a battle cry that fits with your campaign.

**Warlord Battle Cries**

| `dice: d8\|avg` (`d8`) | Battle Cry |
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
![[/6. Mechanics/Bestiary/Humanoid/Token/warlord.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
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

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 5\|avg` (`2d6 + 5`) slashing damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 3\|avg` (`1d6 + 3`) piercing damage.

## Legendary Actions

***Command Ally.*** The warlord targets one ally it can see within 30 feet of it. if the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll.

***Weapon Attack.*** The warlord makes one Greatsword or Shortbow attack.

***Frighten Foe (Costs 2 Actions).*** The warlord targets one creature it can see within 30 feet of it. If the target can see and hear it, the target must succeed on a DC 16 Wisdom saving throw or be [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] until the end of warlord's next turn.
```
^statblock

## Environment

urban