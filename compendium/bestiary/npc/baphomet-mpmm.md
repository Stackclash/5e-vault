---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Baphomet
ac: 22
hp: 319
hit_dice: 22d12 + 176
cr: '23'
stats: [
  30,
  14,
  26,
  18,
  24,
  16
]
source: [
  MPMM,
  MTF
]
aliases: ["Baphomet"]
---
# Baphomet
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 58, Mordenkainen's Tome of Foes p. 143*  

Civilization is weakness and brutality is strength in the credo of Baphomet, the Horned King and the Prince of Beasts. He is worshiped by those who want to break the confines of civility and unleash their bestial natures, for Baphomet envisions a world without restraint, where creatures live out their most bloodthirsty desires.

Cults devoted to Baphomet use mazes and complex knots as their emblems. They create secret places to indulge themselves, including labyrinths of the sort their master favors. Bloodstained crowns and weapons of iron and brass decorate their profane altars.

Over time, a mpmm becomes tainted by his influence, gaining bloodshot eyes and coarse, thickening hair. Small horns eventually sprout from the cultist's forehead. In time, a devoted cultist might transform entirely into a minotaur, which is considered the greatest gift of the Prince of Beasts.

Baphomet appears as a fearsome, 20-foot-tall minotaur with six iron horns. A fiendish light burns in his red eyes. Although he is filled with bestial blood lust, there lies within him a cruel and cunning intellect devoted to subverting all civilization.

Baphomet wields a great glaive called Heartcleaver. He also charges his enemies and gores them with his horns, trampling his foes into the earth and rending them with his teeth like a beast.

## Cultists of Baphomet

> [!note]
> See the Cult of Baphomet entry.

## Baphomet's Lair

Baphomet's lair is his palace, the Lyktion, which is on the layer of the Abyss called the Endless Maze. Nestled within the twisting passages of the planewide labyrinth, the Lyktion is immaculately maintained and surrounded by a moat constructed in the fashion of a three-dimensional maze. The palace is a towering structure whose interior is as labyrinthine as the plane on which it stands; it is populated by [minotaurs](/compendium/bestiary/monstrosity/minotaur.md), [goristros](/compendium/bestiary/fiend/goristro.md), and [quasits](/compendium/bestiary/fiend/quasit.md).

## Stat Block

```ad-statblock
title: Baphomet
![](/compendium/bestiary/npc/token/baphomet.png#token)
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 22 (natural armor)
- **Hit Points** `dice: 22d12 + 176|text(319)` (22d12 + 176) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|30 (+10)|14 (+2)|26 (+8)|18 (+4)|24 (+7)|16 (+3)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +9, Constitution +15, Wisdom +14
- **Skills** Intimidation +17, Perception +14
- **Senses** truesight 120 ft., passive Perception 24
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 23

## Traits

***Labyrinthine Recall.*** Baphomet can perfectly recall any path he has traveled, and he is immune to the [maze](/compendium/spells/maze.md) spell.

***Legendary Resistance (3/Day).*** If Baphomet fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Baphomet has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** Baphomet casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 18):

**1/day**: [teleport](/compendium/spells/teleport.md)

**3/day each**: [dispel magic](/compendium/spells/dispel-magic.md), [dominate beast](/compendium/spells/dominate-beast.md), [maze](/compendium/spells/maze.md), [wall of stone](/compendium/spells/wall-of-stone.md)

## Actions

***Multiattack.*** Baphomet makes one Bite attack, one Gore attack, and one Heartcleaver attack. He also uses Frightful Presence.

***Bite.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 10 ft., one target. Hit: `dice: 2d8 + 10|avg` (`2d8 + 10`) piercing damage.

***Gore.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 10|avg` (`2d6 + 10`) piercing damage. If Baphomet moved at least 10 feet straight toward the target immediately before the hit, the target takes an extra 16 (`dice: 3d10|avg` (`3d10`)) piercing damage. If the target is a creature, it must succeed on a DC 25 Strength saving throw or be pushed up to 10 feet away and knocked [prone](compendium/rules/conditions.md#prone).

***Heartcleaver.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 15 ft., one target. Hit: `dice: 2d10 + 10|avg` (`2d10 + 10`) force damage.

***Frightful Presence.*** Each creature of Baphomet's choice within 120 feet of him and aware of him must succeed on a DC 18 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute. A [frightened](compendium/rules/conditions.md#frightened) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. These later saves have disadvantage if Baphomet is within line of sight of the creature.

If a creature succeeds on any of these saves or the effect ends on it, the creature is immune to Baphomet's Frightful Presence for the next 24 hours.

## Legendary Actions

***Heartcleaver Attack.*** Baphomet makes one Heartcleaver attack.

***Charge (Costs 2 Actions).*** Baphomet moves up to his speed without provoking opportunity attack||opportunity attacks, then makes a Gore attack.

## Lair actions

On initiative count 20 (losing initiative ties), Baphomet can take one of the following lair actions; he can't take the same lair action two rounds in a row:

- **Illusory Room.** Baphomet casts mirage arcane, affecting a room within the lair that is no larger in any dimension than 100 feet. The effect ends on the next initiative count 20. Charisma is Baphomet's spellcasting ability for this spell.  
- **Reverse Gravity.** Baphomet chooses a room within the lair that is no larger in any dimension than 100 feet. Until the next initiative count 20, gravity is reversed within that room. Any creatures or objects in the room when this happens fall in the direction of the new pull of gravity, unless they have some means of remaining aloft. Baphomet can ignore the gravity reversal if he's in the room, although he likes to use this action to land on a ceiling to attack targets flying near it.  
- **Seal the Way.** Baphomet seals one doorway or other entryway within the lair. The opening must be unoccupied. It is filled with solid stone for 1 minute or until Baphomet takes this lair action again.  

## Regional effects

The region containing Baphomet's lair is warped by his magic, creating one or more of the following effects:

- **Beguiling Realm.** Within 6 miles of the lair, all Charisma ([Persuasion](compendium/rules/skills.md#Persuasion)) and Charisma ([Performance](compendium/rules/skills.md#Performance)) checks have disadvantage, and all Charisma ([Deception](compendium/rules/skills.md#Deception)) and Charisma ([Intimidation](compendium/rules/skills.md#Intimidation)) checks have advantage.  
- **Hedge Mazes.** Plant life within 1 mile of the lair grows thick and forms walls of trees, hedges, and other flora in the form of small mazes.  
- **Panicked Beasts.** Beasts within 1 mile of the lair become [frightened](compendium/rules/conditions.md#frightened) and disoriented, as though constantly under threat of being hunted, and might lash out or panic even when no visible threat is nearby.  

If Baphomet dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.
```
^statblock