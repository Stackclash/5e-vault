---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Orcus"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "405"
"hit_dice": "30d12 + 210"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "20"
- !!int "20"
- !!int "25"
"speed": "walk 40 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "15"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [detect magic](/compendium/spells/detect-magic.md)\n\n1/day: [time stop](/compendium/spells/time-stop.md)\n\
    \n3/day: [dispel magic](/compendium/spells/dispel-magic.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While holding the [Wand of Orcus](/compendium/items/wand-of-orcus.md),\
    \ Orcus casts one of the following spells (spell save DC 18), some of which require\
    \ charges; the wand has 7 charges to fuel these spells, and it regains dice:\
    \ 1d4 + 3|avg (1d4 + 3) charges daily at dawn:\n\nAt will: [animate dead](/compendium/spells/animate-dead.md)\
    \ (as an action), [blight](/compendium/spells/blight.md), [speak with dead](/compendium/spells/speak-with-dead.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Orcus fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus can cast [animate dead](/compendium/spells/animate-dead.md) (at will)\
    \ and [create undead](/compendium/spells/create-undead.md) (3/day). He chooses\
    \ the level at which the spells are cast, and the creatures created by them remain\
    \ under his control indefinitely. Additionally, he can cast [create undead](/compendium/spells/create-undead.md)\
    \ even when it isn't night."
  "name": "Master of Undeath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus wields the [Wand of Orcus](/compendium/items/wand-of-orcus.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+19 (+19 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 11|avg (3d8 + 11) bludgeoning damage plus dice: 2d12|avg\
    \ (2d12) necrotic damage."
  "name": "Wand of Orcus"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 8|avg (3d8 + 8) force damage plus dice: 2d8|avg (2d8)\
    \ poison damage."
  "name": "Tail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+15 (+15 to hit), range 120 ft., one\
    \ target. Hit: dice: 5d8 + 7|avg (5d8 + 7) necrotic damage."
  "name": "Necrotic Bolt"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While holding the [Wand of Orcus](/compendium/items/wand-of-orcus.md),\
    \ Orcus conjures Undead creatures whose combined average hit points don't exceed\
    \ 500. These creatures magically rise up from the ground or otherwise form in\
    \ unoccupied spaces within 300 feet of Orcus and obey his commands until they\
    \ are destroyed or until he dismisses them as an action."
  "name": "Conjure Undead (1/Day)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus makes one Tail or Necrotic Bolt attack."
  "name": "Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus chooses a point on the ground that he can see within 100 feet of\
    \ him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot\
    \ radius rises from that point and lasts until the end of Orcus's next turn. Creatures\
    \ in that area have vulnerability to necrotic damage."
  "name": "Creeping Death (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/npc/token/orcus.png"
aliases: ["Orcus"]
---
# Orcus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204, Mordenkainen's Tome of Foes p. 153*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [ghouls](/compendium/bestiary/undead/ghoul.md) and [zombies](/compendium/bestiary/undead/zombie.md) that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [Wand of Orcus](/compendium/items/wand-of-orcus.md), which is described in the _Dungeon Master's Guide_.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

## Stat Block

```ad-statblock
title: Orcus
![](/compendium/bestiary/npc/token/orcus.png#token)
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 17 (natural armor; 20 from with the [Wand of Orcus](/compendium/items/wand-of-orcus.md))
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

***Master of Undeath.*** Orcus can cast [animate dead](/compendium/spells/animate-dead.md) (at will) and [create undead](/compendium/spells/create-undead.md) (3/day). He chooses the level at which the spells are cast, and the creatures created by them remain under his control indefinitely. Additionally, he can cast [create undead](/compendium/spells/create-undead.md) even when it isn't night.

***Special Equipment.*** Orcus wields the [Wand of Orcus](/compendium/items/wand-of-orcus.md).

***Spellcasting.*** Orcus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 23):

**At will**: [detect magic](/compendium/spells/detect-magic.md)

**1/day**: [time stop](/compendium/spells/time-stop.md)

**3/day**: [dispel magic](/compendium/spells/dispel-magic.md)

***Wand Spellcasting.*** While holding the [Wand of Orcus](/compendium/items/wand-of-orcus.md), Orcus casts one of the following spells (spell save DC 18), some of which require charges; the wand has 7 charges to fuel these spells, and it regains `dice: 1d4 + 3|avg` (`1d4 + 3`) charges daily at dawn:

**At will**: [animate dead](/compendium/spells/animate-dead.md) (as an action), [blight](/compendium/spells/blight.md), [speak with dead](/compendium/spells/speak-with-dead.md)

## Actions

***Multiattack.*** Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks.

***Wand of Orcus.*** *Melee Weapon Attack:* `dice: d20+19` (+19 to hit), reach 10 ft., one target. Hit: `dice: 3d8 + 11|avg` (`3d8 + 11`) bludgeoning damage plus `dice: 2d12|avg` (`2d12`) necrotic damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 3d8 + 8|avg` (`3d8 + 8`) force damage plus `dice: 2d8|avg` (`2d8`) poison damage.

***Necrotic Bolt.*** *Ranged Spell Attack:* `dice: d20+15` (+15 to hit), range 120 ft., one target. Hit: `dice: 5d8 + 7|avg` (`5d8 + 7`) necrotic damage.

***Conjure Undead (1/Day).*** While holding the [Wand of Orcus](/compendium/items/wand-of-orcus.md), Orcus conjures Undead creatures whose combined average hit points don't exceed 500. These creatures magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action.

## Legendary Actions

***Attack.*** Orcus makes one Tail or Necrotic Bolt attack.

***Creeping Death (Costs 2 Actions).*** Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage.

## Lair actions

On Initiative count 20 (losing initiative ties), Orcus can take a lair action to cause one of the following effects; he can't use the same effect two rounds in a row:

- **Deadly Utterance.** Orcus's voice booms throughout the lair. His utterance causes one creature of his choice to be subjected to [power word kill](/compendium/spells/power-word-kill.md). Orcus needn't see the creature, but he must be aware that the individual is in the lair.  
- **Grasp of the Dead.** Orcus causes skeletal arms to rise from an area on the ground in a 20-foot square that he can see. They last until the next initiative count 20. Each creature in that area when the arms appear must succeed on a DC 23 Strength saving throw or be [restrained](compendium/rules/conditions.md#restrained) until the arms disappear or until Orcus releases them (no action required).  
- **Undead Servants.** Orcus causes up to six corpses within the lair to rise as [skeletons](/compendium/bestiary/undead/skeleton.md), [zombies](/compendium/bestiary/undead/zombie.md), or [ghouls](/compendium/bestiary/undead/ghoul.md). These undead obey his telepathic commands, which can reach anywhere in the lair.  

## Regional effects

The region containing Orcus's lair is warped by his magic, creating one or more of the following effects:

- **Charnel Realm.** The air is filled with the stench of rotting flesh, and buzzing flies grow thick within the region.  
- **Undead Beasts.** Dead Beasts periodically animate as Undead mockeries of their former selves. Skeletal and zombie versions of local wildlife are commonly seen in the area.  

If Orcus dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.
```
^statblock