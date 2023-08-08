---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: inline
---
# Orcus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204, Mordenkainen's Tome of Foes p. 153*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [[/6. Mechanics/Bestiary/Undead/Ghoul.md|ghouls]] and [[/6. Mechanics/Bestiary/Undead/Zombie.md|zombies]] that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [[/6. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]], which is described in the _Dungeon Master's Guide_.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

## Stat Block

```statblock
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
    \ [[/6. Mechanics/Spells/Detect Magic.md|detect magic]]\n\n1/day: [[/6. Mechanics/Spells/Time Stop.md|time stop]]\n\
    \n3/day: [[/6. Mechanics/Spells/Dispel Magic.md|dispel magic]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While holding the [[/6. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]],\
    \ Orcus casts one of the following spells (spell save DC 18), some of which require\
    \ charges; the wand has 7 charges to fuel these spells, and it regains dice:\
    \ 1d4 + 3|avg (1d4 + 3) charges daily at dawn:\n\nAt will: [[/6. Mechanics/Spells/Animate Dead.md|animate dead]]\
    \ (as an action), [[/6. Mechanics/Spells/Blight.md|blight]], [[/6. Mechanics/Spells/Speak With Dead.md|speak with dead]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Orcus fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus can cast [[/6. Mechanics/Spells/Animate Dead.md|animate dead]] (at will)\
    \ and [[/6. Mechanics/Spells/Create Undead.md|create undead]] (3/day). He chooses\
    \ the level at which the spells are cast, and the creatures created by them remain\
    \ under his control indefinitely. Additionally, he can cast [[/6. Mechanics/Spells/Create Undead.md|create undead]]\
    \ even when it isn't night."
  "name": "Master of Undeath"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Orcus wields the [[/6. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]]."
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
  "desc": "While holding the [[/6. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]],\
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
"image": "6. Mechanics/Bestiary/Npc/token/orcus.png"
```
^statblock