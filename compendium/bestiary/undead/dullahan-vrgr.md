---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Dullahan
ac: 16
hp: 135
hit_dice: 18d8 + 54
cr: '10'
stats: [
  18,
  14,
  16,
  11,
  15,
  16
]
source: [
  VRGR
]
aliases: ["Dullahan"]
---
# Dullahan
*Source: Van Richten's Guide to Ravenloft p. 233*  

Dullahans are headless undead warriors—the remains of villains who let vengeance consume them. These decapitated hunters haunt the areas where they were slain, butchering innocents in search of their severed heads or to quench their thirst for revenge.

Wicked knights or commanders in life, dullahans adhere to twisted codes of chivalry or soldiership. These fallen champions consider a specific location their battlefield. This gives rise to stories of haunted battlegrounds, ruins, roads, river crossings and other strategic locations where a dullahan continues a terrifying campaign against the living. In death, dullahans are often rejoined by those who followed them in life, either in the form of lesser undead, like skeletons or wights, or terrifying mounts, like warhorse skeletons or nightmares.

## Headless Hunts

Dullahans are known for seeking their lost heads, giving rise to regional legends of headless hunters and endless searches. The Dullahan Legends table suggests dullahan hauntings that might be the stuff of local legends.

**Dullahan Legends**

| dice: d4 | Haunting |
|----------|----------|
| 1 | A dullahan pursues anyone who has one of the shards of its shattered skull. |
| 2 | A vain dullahan pursues it own relatives, seeking to claim a head with its family resemblance. |
| 3 | A greedy dullahan seeks to recover its bejeweled helmet, caring nothing for the head that wears it. |
| 4 | Two dullahans seek the same head, both believing they're the actual owner. |
^dullahan-legends

## Stat Block

```ad-statblock
title: Dullahan
![](/compendium/bestiary/undead/token/dullahan.png#token)
*Medium undead, Unaligned*

- **Armor Class** 16 ([breastplate](/compendium/items/breastplate.md))
- **Hit Points** `dice: 18d8 + 54|text(135)` (18d8 + 54) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|16 (+3)|11 (+0)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +7
- **Skills** Perception +6
- **Senses** truesight 120 ft., passive Perception 16
- **Damage Resistances** cold, lightning, poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** understands the languages it knew in life but can't speak
- **Challenge** 10

## Traits

***Headless Summoning (Recharges after a Short or Long Rest).*** If the dullahan is reduced to 0 hit points, it doesn't die or fall [unconscious](compendium/rules/conditions.md#unconscious). Instead, it regains 97 hit points. In addition, it summons three [death's heads](/compendium/bestiary/undead/deaths-head-vrgr.md), one of each type, in unoccupied spaces within 5 feet of it. The death's heads are under the dullahan's control and act immediately after the dullahan in the initiative order. Additionally, the dullahan can now use the options in the "Mythic Actions" section. Award a party an additional 5,900 XP (11,800 XP total) for defeating the dullahan after it uses Headless Summoning.

***Legendary Resistance (2/Day).*** If the dullahan fails a saving throw, it can choose to succeed instead.

***Unusual Nature.*** The dullahan doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The dullahan makes two attacks.

***Battleaxe.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4|avg` (`1d8 + 4`) slashing damage, or 9 (`dice: 1d10 + 4|avg` (`1d10 + 4`)) slashing damage if used with two hands, plus `dice: 2d10|avg` (`2d10`) necrotic damage. If the dullahan scores a critical hit against a creature, the target must succeed on a DC 15 Constitution saving throw or the dullahan cuts off the target's head. The target dies if it can't survive without the lost head. A creature that doesn't have or need a head, or has legendary actions, instead takes an extra 27 (`dice: 6d8|avg` (`6d8`)) slashing damage.

***Fiery Skull.*** *Ranged Spell Attack:* `dice: d20+7` (+7 to hit), range 120 ft., one target. Hit: `dice: 2d10 + 3|avg` (`2d10 + 3`) fire damage.

## Legendary Actions

***Attack.*** The dullahan makes one attack.

***Frightful Presence (Costs 2 Actions).*** Each creature of the dullahan's choice within 30 feet of it must succeed on a DC 15 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) of the dullahan until the end of its next turn.

***Head Hunt (Costs 3 Actions).*** The dullahan moves up to its speed without provoking opportunity attacks and makes one Battleaxe attack with advantage. If the attack hits, but is not a critical hit, the attack deals an extra 27 (`dice: 6d8|avg` (`6d8`)) necrotic damage.
```
^statblock