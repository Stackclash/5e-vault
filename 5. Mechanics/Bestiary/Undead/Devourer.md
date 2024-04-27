---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/13
  - monster/environment/underdark
  - monster/size/large
  - monster/type/undead
statblock: inline
aliases:
  - Devourer
---
# [[5. Mechanics\Bestiary\Undead\Devourer.md|Devourer]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 93, Volo's Guide to Monsters p. 138*

Of all the abominations unleashed by [[4. World Almanac/NPCs/Orcus.md|Orcus]], devourers are among the most feared. These tall, mummy-like Undead wander the planes, consuming souls and spreading Orcus's creed of replacing all life with everlasting death.

A lesser demon that proves itself to Orcus might be granted the privilege of becoming a devourer. The Prince of Undeath transforms such a demon into an 8-foot-tall, desiccated biped with a hollowed-out ribcage, then fills the new creature with a hunger for souls. Orcus grants each new devourer the essence of a less fortunate demon to power the devourer's first foray into the planes. Most devourers remain in the Abyss or on the Astral or Ethereal Plane, pursuing Orcus's schemes and interests in those realms. When Orcus sends devourers to the Material Plane, he often sets them on a mission to create, control, and lead a plague of Undead. [[5. Mechanics/Bestiary/Undead/Skeleton.md|Skeletons]], [[5. Mechanics/Bestiary/Undead/Zombie.md|zombies]], [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghouls]], [[5. Mechanics/Bestiary/Undead/Ghast.md|ghasts]], and [[5. Mechanics/Bestiary/Undead/Shadow.md|shadows]] are particularly attracted to the presence of a devourer.

Devourers hunt Humanoids with the intent of consuming them body and soul. After a devourer brings a target to the brink of death, it pulls the victim's body in and traps the creature within its own ribcage. As the victim tries to stave off death (usually without success), the devourer tortures its soul with telepathic noise. When the victim expires, it undergoes a horrible transformation, springing forth from the devourer's body to begin its new existence as an Undead servitor of the monster that spawned it.

```statblock
"name": "Devourer"
"size": "Large"
"type": "undead"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "13"
- !!int "10"
- !!int "16"
"speed": "30 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "A devourer doesn't require air, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The devourer makes two Claw attacks and can use either Imprison Soul or\
    \ Soul Rend, if available."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d6 + 5|text(12) (2d6 + 5) slashing damage plus dice:6d6|text(21)\
    \ (6d6) necrotic damage."
  "name": "Claw"
- "desc": "The devourer chooses a living Humanoid with 0 hit points that it can see\
    \ within 30 feet of it. That creature is teleported inside the devourer's ribcage\
    \ and imprisoned there. While imprisoned in this way, the creature is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ and has disadvantage on death saving throws. If the creature dies while imprisoned,\
    \ the devourer regains 25 hit points and immediately recharges Soul Rend. Additionally,\
    \ at the start of its next turn, the devourer regurgitates the slain creature\
    \ as a bonus action, and the creature becomes an undead. If the victim had 2 or\
    \ fewer Hit Dice, it becomes a [[5. Mechanics/Bestiary/Undead/Zombie.md|zombie]].\
    \ If it had 3 to 5 Hit Dice, it becomes a [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghoul]].\
    \ Otherwise, it becomes a [[5. Mechanics/Bestiary/Undead/Wight.md|wight]]. A devourer\
    \ can imprison only one creature at a time."
  "name": "Imprison Soul"
- "desc": "The devourer creates a vortex of life-draining energy in a 20-foot radius\
    \ centered on itself. Each creature in that area must make a DC 18 Constitution\
    \ saving throw, taking dice:8d10|text(44) (8d10) necrotic damage on a failed\
    \ save, or half as much damage on a successful one."
  "name": "Soul Rend (Recharge 6)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Undead/token/devourer-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
