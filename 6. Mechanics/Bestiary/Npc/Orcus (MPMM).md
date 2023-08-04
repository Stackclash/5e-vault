---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Orcus
ac: 17
hp: 405
hit_dice: 30d12 + 210
cr: '26'
stats: [
  27,
  14,
  25,
  20,
  20,
  25
]
source: [
  MPMM,
  MTF
]
aliases: ["Orcus"]
---
# Orcus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204, Mordenkainen's Tome of Foes p. 153*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [[/6. Mechanics/Bestiary/Undead/ghoul.md\|ghouls]] and [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombies]] that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [[/6. Mechanics/Items/wand-of-orcus.md\|Wand of Orcus]], which is described in the _Dungeon Master's Guide_.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

## Stat Block

```ad-statblock
title: Orcus
![[/6. Mechanics/Bestiary/Npc/Token/orcus.png#token]]
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 17 (natural armor; 20 from with the [[/6. Mechanics/Items/wand-of-orcus.md\|Wand of Orcus]])
- **Hit Points** `dice: 30d12 + 210|text(405)` (30d12 + 210) 
- **Speed** walk 40 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|14 (+2)|25 (+7)|20 (+5)|20 (+5)|25 (+7)|

- **Proficiency Bonus** +8
- **Saving Throws** Dexterity +10, Constitution +15, Wisdom +13
- **Skills** Arcana +13, Perception +13
- **Senses** truesight 120 ft., passive Perception 22
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** necrotic; poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 26

## Traits

***Legendary Resistance (3/Day).*** If Orcus fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Orcus has advantage on saving throws against spells and other magical effects.

***Master of Undeath.*** Orcus can cast [[/6. Mechanics/Spells/animate-dead.md\|animate dead]] (at will) and [[/6. Mechanics/Spells/create-undead.md\|create undead]] (3/day). He chooses the level at which the spells are cast, and the creatures created by them remain under his control indefinitely. Additionally, he can cast [[/6. Mechanics/Spells/create-undead.md\|create undead]] even when it isn't night.

***Special Equipment.*** Orcus wields the [[/6. Mechanics/Items/wand-of-orcus.md\|Wand of Orcus]].

***Spellcasting.*** Orcus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 23):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]]

**1/day**: [[/6. Mechanics/Spells/time-stop.md\|time stop]]

**3/day**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]]

***Wand Spellcasting.*** While holding the [[/6. Mechanics/Items/wand-of-orcus.md\|Wand of Orcus]], Orcus casts one of the following spells (spell save DC 18), some of which require charges; the wand has 7 charges to fuel these spells, and it regains `dice: 1d4 + 3\|avg` (`1d4 + 3`) charges daily at dawn:

**At will**: [[/6. Mechanics/Spells/animate-dead.md\|animate dead]] (as an action), [[/6. Mechanics/Spells/blight.md\|blight]], [[/6. Mechanics/Spells/speak-with-dead.md\|speak with dead]]

## Actions

***Multiattack.*** Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks.

***Wand of Orcus.*** *Melee Weapon Attack:* `dice: d20+19` (+19 to hit), reach 10 ft., one target. Hit: `dice: 3d8 + 11\|avg` (`3d8 + 11`) bludgeoning damage plus `dice: 2d12\|avg` (`2d12`) necrotic damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 3d8 + 8\|avg` (`3d8 + 8`) force damage plus `dice: 2d8\|avg` (`2d8`) poison damage.

***Necrotic Bolt.*** *Ranged Spell Attack:* `dice: d20+15` (+15 to hit), range 120 ft., one target. Hit: `dice: 5d8 + 7\|avg` (`5d8 + 7`) necrotic damage.

***Conjure Undead (1/Day).*** While holding the [[/6. Mechanics/Items/wand-of-orcus.md\|Wand of Orcus]], Orcus conjures Undead creatures whose combined average hit points don't exceed 500. These creatures magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action.

## Legendary Actions

***Attack.*** Orcus makes one Tail or Necrotic Bolt attack.

***Creeping Death (Costs 2 Actions).*** Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage.

## Lair actions

On Initiative count 20 (losing initiative ties), Orcus can take a lair action to cause one of the following effects; he can't use the same effect two rounds in a row:

- **Deadly Utterance.** Orcus's voice booms throughout the lair. His utterance causes one creature of his choice to be subjected to [[/6. Mechanics/Spells/power-word-kill.md\|power word kill]]. Orcus needn't see the creature, but he must be aware that the individual is in the lair.  
- **Grasp of the Dead.** Orcus causes skeletal arms to rise from an area on the ground in a 20-foot square that he can see. They last until the next initiative count 20. Each creature in that area when the arms appear must succeed on a DC 23 Strength saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] until the arms disappear or until Orcus releases them (no action required).  
- **Undead Servants.** Orcus causes up to six corpses within the lair to rise as [[/6. Mechanics/Bestiary/Undead/skeleton.md\|skeletons]], [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombies]], or [[/6. Mechanics/Bestiary/Undead/ghoul.md\|ghouls]]. These undead obey his telepathic commands, which can reach anywhere in the lair.  

## Regional effects

The region containing Orcus's lair is warped by his magic, creating one or more of the following effects:

- **Charnel Realm.** The air is filled with the stench of rotting flesh, and buzzing flies grow thick within the region.  
- **Undead Beasts.** Dead Beasts periodically animate as Undead mockeries of their former selves. Skeletal and zombie versions of local wildlife are commonly seen in the area.  

If Orcus dies, these effects fade over the course of `dice: 1d10\|avg` (`1d10`) days.
```
^statblock