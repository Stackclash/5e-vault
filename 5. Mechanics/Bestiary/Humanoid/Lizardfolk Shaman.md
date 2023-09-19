---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/swamp
- monster/size/medium
- monster/type/humanoid/lizardfolk
aliases: ["Lizardfolk Shaman"]
---
# Lizardfolk Shaman
*Source: Monster Manual p. 205*  

Lizardfolk are primitive reptilian humanoids that lurk in the swamps and jungles of the world. Their hut villages thrive in forbidding grottos, half-sunken ruins, and watery caverns.

## Territorial Xenophobes

Lizardfolk deal and trade with other races only rarely. Fiercely territorial, they use camouflaged scouts to guard the perimeter of their domain. When unwelcome visitors are detected, a tribe sends a hunting band to harass or drive the trespassers off, or tricks them into blundering into the lairs of crocodiles and other dangerous creatures.

Lizardfolk have no notion of traditional morality, and they find the concepts of good and evil utterly alien. Truly neutral creatures, they kill when it is expedient and do whatever it takes to survive.

Lizardfolk rarely stray beyond their claimed hunting grounds. Any creature that enters their territory is fair game to be stalked, killed, and devoured. They make no distinction between humanoids, beasts, and monsters. Similarly, lizardfolk don't like reaching too far beyond their borders, where they could easily become the hunted instead of the hunters.

Occasions might arise when lizardfolk will form alliances with their neighbors. These lizardfolk usually learn firsthand that humans, dwarves, halflings, and elves can sometimes prove helpful or trustworthy. Once lizardfolk forge ties with outsiders, they are steadfast and fierce allies.

## Great Feasts and Sacrifices

Lizardfolk are omnivorous, but they have a taste for humanoid flesh. Prisoners are often taken back to their camps to become the centerpieces of great feasts and rites involving dancing, storytelling, and ritual combat.

Victims are either cooked and eaten by the tribe, or are sacrificed to Semuanya, the lizardfolk god.

## Canny Crafters

Though they aren't skilled artisans, lizardfolk craft tools and ornamental jewelry out of the bones of their kills, and they use the hides and shells of dead monsters to create shields.

## Lizardfolk Leaders

Lizardfolk respect and fear magic with a religious awe. Lizardfolk shamans lead their tribes, overseeing rites and ceremonies performed to honor Semuanya. From time to time, however, a lizardfolk tribe produces a powerful figure touched not by Semuanya but by Sess'inek-a reptilian demon lord who seeks to corrupt and control the lizardfolk.

Lizardfolk born in Sess'inek's image are larger and more cunning than other lizardfolk, and are thoroughly evil. These lizard kings and queens dominate lizardfolk tribes, usurping a shaman's authority and inspiring uncharacteristic aggression among their subjects.

## Dragon Worshipers

Lizardfolk speak Draconic, which they are thought to have learned from dragons in ancient times. A tribe that wanders into the territory of a dragon will offer it tribute to win its favor. An evil dragon might exploit lizardfolk for its own vile ends, turning them into raiders and plunderers.

> [!quote]- A quote from A merchant's account of his experience with the lizardfolk tribes of the Lizard Marsh  
> 
> In all my dealings with the lizardfolk, I was never able to tell what they were thinking. Their reptilian eyes belied no hint of their intentions. I gave them supplies. They gave me the willies.


```statblock
"name": "Lizardfolk Shaman"
"size": "Medium"
"type": "humanoid"
"subtype": "lizardfolk"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "10"
- !!int "15"
- !!int "8"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": "+4"
  "Perception": "+4"
  "Survival": "+6"
"senses": "passive Perception 14"
"languages": "Draconic"
"cr": "2"
"traits":
- "desc": "The lizardfolk is a 5th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 12, dice: d20+4 (+4 to hit) with spell attacks). The\
    \ lizardfolk has the following druid spells prepared:\n\nCantrips (at will):\
    \ [[5. Mechanics/Spells/Druidcraft.md|druidcraft]], [[5. Mechanics/Spells/Produce Flame.md|produce flame]],\
    \ [[5. Mechanics/Spells/Thorn Whip.md|thorn whip]]\n\n1st level (4 1st-level slots):\
    \ [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Fog Cloud.md|fog cloud]]\n\
    \n2nd level (3 2nd-level slots): [[5. Mechanics/Spells/Heat Metal.md|heat metal]],\
    \ [[5. Mechanics/Spells/Spike Growth.md|spike growth]]\n\n3rd level (2 3rd-level\
    \ slots): [[5. Mechanics/Spells/Conjure Animals.md|conjure animals]] (reptiles\
    \ only), [[5. Mechanics/Spells/Plant Growth.md|plant growth]]"
  "name": "spells"
- "desc": "The lizardfolk can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "The lizardfolk makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack (Lizardfolk Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage, or dice: 1d10 + 2|avg\
    \ (1d10 + 2) piercing damage in [[5. Mechanics/Bestiary/Beast/Crocodile.md|crocodile]]\
    \ form. If the lizardfolk is in crocodile form and the target is a Large or smaller\
    \ creature, the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the lizardfolk can't bite another target. If the lizardfolk reverts to its\
    \ true form, the grapple ends."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 2|avg (1d4 + 2) slashing damage."
  "name": "Claws (Lizardfolk Form Only)"
- "desc": "The lizardfolk magically polymorphs into a [[5. Mechanics/Bestiary/Beast/Crocodile.md|crocodile]],\
    \ remaining in that form for up to 1 hour. It can revert to its true form as a\
    \ bonus action. Its statistics, other than its size, are the same in each form.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "ToA"
- "GoS"
- "IMR"
- "EGW"
"image": "compendium/bestiary/humanoid/token/lizardfolk-shaman.png"
```
^statblock

## Environment

forest, swamp