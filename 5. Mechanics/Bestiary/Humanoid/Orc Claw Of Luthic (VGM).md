---
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/orc
aliases: ["Orc Claw of Luthic"]
---
# Orc Claw of Luthic
*Source: Volo's Guide to Monsters p. 183*  

To the common folk of the world, an orc is an orc. They know that any one of these savages can tear an ordinary person to pieces, so no further distinction is necessary.

Orcs know better. Different groups of orcs exist within a tribe, the actions of each dictated by the deity they pay homage to. To complement the various kinds of warriors that spill forth to ravage the countryside, each tribe has members that remain deep inside the lair, seldom if ever seeing what lies outside the darkness of their den.

In addition, orcs have special relationships with two creatures that are sometimes found in their company: the aurochs, a great bull that serves as a mount for warriors that revere Bahgtru, and the tanarukk, a demon-orc crossbreed that is so depraved and destructive that even orcs seek to kill it. The aurochs is described in appendix A. The tanarukk is described below.

## Orc Claw of Luthic

Luthic is Gruumsh's wife and the paragon of maternity to all orcs. She is the Cave Mother, a fierce dweller in the darkness who raises new broods of orcs to be vicious and strong. Her symbol is the cave bear, and orc females raise such bears alongside orc whelps. Females particularly attracted to Luthic grow long nails and lacquer them, learning to use these claws as weapons much as Luthic uses her own.

Orc females devoted to Luthic are in charge of fortifying and maintaining an orc stronghold. They help to guarantee the survival of the tribe, and most are skilled in the healing arts. The most powerful among Luthic's disciples are the claws of Luthic, which can use the Cave Mother's magic to heal, protect, and curse.

```statblock
"name": "Orc Claw of Luthic"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "14"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": "+4"
  "Intimidation": "+2"
  "Survival": "+4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "2"
"traits":
- "desc": "The orc is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, dice: d20+4 (+4 to hit) with spell attacks). The orc has\
    \ the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics\Spells\Guidance.md|guidance]],\
    \ [[5. Mechanics\Spells\Mending.md|mending]], [[5. Mechanics\Spells\Resistance.md|resistance]],\
    \ [[5. Mechanics\Spells\Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 1st-level\
    \ slots): [[5. Mechanics\Spells\Bane.md|bane]], [[5. Mechanics\Spells\Cure Wounds.md|cure wounds]],\
    \ [[5. Mechanics\Spells\Guiding Bolt.md|guiding bolt]]\n\n2nd level (3 2nd-level\
    \ slots): [[5. Mechanics\Spells\Augury.md|augury]], [[5. Mechanics\Spells\Warding Bond.md|warding bond]]\n\
    \n3rd level (2 3rd-level slots): [[5. Mechanics\Spells\Bestow Curse.md|bestow curse]],\
    \ [[5. Mechanics\Spells\Create Food And Water.md|create food and water]]"
  "name": "spells"
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ that it can see."
  "name": "Aggressive"
"actions":
- "desc": "The orc makes two claw attacks, or four claw attacks if it has fewer than\
    \ half of its hit points remaining."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 6 (dice: 1d8 + 2|avg (1d8 + 2)) slashing damage."
  "name": "Claw"
"source":
- "VGM"
"image": "compendium/bestiary/humanoid/token/orc-claw-of-luthic.png"
```
^statblock

## Environment

underdark, mountain