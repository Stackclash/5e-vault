---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/mpmm
  - monster/cr/21
  - monster/size/gargantuan
  - monster/type/monstrosity/titan
aliases:
  - Astral Dreadnought
---
# [[5. Mechanics\Bestiary\Monstrosity\Astral Dreadnought (MPMM).md|Astral Dreadnought]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 51, Mordenkainen's Tome of Foes p. 117, Vecna: Eve of Ruin*

Enormous and terrifying, astral dreadnoughts haunt the silvery void of the Astral Plane, causing planar travelers to shudder at the very thought of them. Dreadnoughts have been gliding through the astral mists since the dawn of the multiverse, trying to devour all other creatures they encounter.

Covered from head to tail in layers of thick, spiked plates, a dreadnought has two gnarled limbs that end in magic-enhanced pincer claws. Constellations appear to swirl in the depths of its single eye, and its serpentine tail trails off into the silvery void. Anything it swallows is deposited in a unique demiplane—an enclosed space that contains eons worth of detritus, as well as the remains of travelers. The place has gravity and breathable air, and organic matter decays there. When the dreadnought dies, its demiplane vanishes, and its contents are released into the Astral Plane.

```statblock
"name": "Astral Dreadnought (MPMM)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Unaligned"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "297"
"hit_dice": "17d20 + 119"
"stats":
- !!int "28"
- !!int "7"
- !!int "25"
- !!int "5"
- !!int "14"
- !!int "18"
"speed": "15 ft., fly 80 ft. (hover)"
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "9"
"skillsaves":
  "Perception": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": ""
"cr": "21"
"traits":
- "desc": "The dreadnought's eye creates an area of antimagic, as in the [[5. Mechanics/Spells/Antimagic Field.md|antimagic\
    \ field]] spell, in a 150-foot cone. At the\
    \ start of each of its turns, it decides which way the cone faces. The cone doesn't\
    \ function while the eye is closed or while the dreadnought is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]."
  "name": "Antimagic Cone"
- "desc": "The dreadnought can't leave the Astral Plane, nor can it be banished or\
    \ otherwise transported out of that plane."
  "name": "Astral Entity"
- "desc": "Anything the dreadnought swallows is transported to a demiplane that can\
    \ be entered by no other means except a [[5. Mechanics/Spells/Wish.md|wish]] spell\
    \ or the dreadnought's Bite and Donjon Visit. A creature can leave the demiplane\
    \ only by using magic that enables planar travel, such as the [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\
    \ spell. The demiplane resembles a stone cave roughly 1,000 feet in diameter with\
    \ a ceiling 100 feet high. Like a stomach, it contains the remains of past meals.\
    \ The dreadnought can't be harmed from within the demiplane. If the dreadnought\
    \ dies, the demiplane disappears, and everything inside it appears around the\
    \ dreadnought's corpse. The demiplane is otherwise indestructible."
  "name": "Demiplanar Donjon"
- "desc": "If the dreadnought fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If the dreadnought scores a critical hit against a creature traveling by\
    \ means of the [[5. Mechanics/Spells/Astral Projection.md|astral projection]] spell,\
    \ the dreadnought can cut the target's silver cord instead of dealing damage."
  "name": "Sever Silver Cord"
- "desc": "The dreadnought doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The dreadnought makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 36\
    \ (5d10 + 9) force damage. If the target is a Huge or smaller creature and this\
    \ damage reduces it to 0 hit points or it is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
    \ the dreadnought swallows it. The swallowed target, along with everything it\
    \ is wearing and carrying, appears in an unoccupied space on the floor of the\
    \ Demiplanar Donjon."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 19\
    \ (3d6 + 9) force damage."
  "name": "Claw"
"legendary_actions":
- "desc": "The dreadnought makes one Claw attack."
  "name": "Claw"
- "desc": "One Huge or smaller creature that the dreadnought can see within 60 feet\
    \ of it must succeed on a DC 19 Charisma saving throw or be teleported to an unoccupied\
    \ space on the floor of the Demiplanar Donjon. At the end of the target's next\
    \ turn, it reappears in the space it left or in the nearest unoccupied space if\
    \ that space is occupied."
  "name": "Donjon Visit (Costs 2 Actions)"
- "desc": "Each creature within 60 feet of the dreadnought must make a DC 19 Wisdom\
    \ saving throw, taking 26 (4d10 + 4) psychic damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Psychic Projection (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
- "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/astral-dreadnought-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
