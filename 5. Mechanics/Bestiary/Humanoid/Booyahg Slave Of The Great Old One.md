---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Booyahg Slave of the Great Old One"]
---
# [[5. Mechanics\Bestiary\Humanoid\Booyahg Slave Of The Great Old One.md|Booyahg Slave of the Great Old One]]
*Source: Volo's Guide to Monsters p. 42*

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Slave Of The Great Old One"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
- "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Jump.md|jump]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
    \ (self only), [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]]\n\n1/day\
    \ each: [[5. Mechanics/Spells/Arcane Gate.md|arcane gate]], [[5. Mechanics/Spells/True Seeing.md|true seeing]]"
  "name": "innate"
- "desc": "The goblin is a 14th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, dice: d20+7 (+7 to hit) with spell attacks). It regains\
    \ its expended spell slots when it finishes a short or long rest. It knows the\
    \ following warlock spells:\n\nCantrips (at will): [[5. Mechanics/Spells/Chill Touch.md|chill touch]],\
    \ [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]], [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\
    \n1st-5th level (3 slots): [[5. Mechanics/Spells/Armor Of Agathys.md|armor of Agathys]],\
    \ [[5. Mechanics/Spells/Arms Of Hadar.md|arms of Hadar]], [[5. Mechanics/Spells/Crown Of Madness.md|crown of madness]],\
    \ [[5. Mechanics/Spells/Clairvoyance.md|clairvoyance]], [[5. Mechanics/Spells/Contact Other Plane.md|contact other plane]],\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Dimension Door.md|dimension door]],\
    \ [[5. Mechanics/Spells/Dissonant Whispers.md|dissonant whispers]], [[5. Mechanics/Spells/Dominate Beast.md|dominate beast]],\
    \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]], [[5. Mechanics/Spells/Vampiric Touch.md|vampiric touch]]"
  "name": "spells"
- "desc": "At the start of each of the goblin's turns, each creature of its choice\
    \ within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take dice:\
    \ 3d6|avg (3d6) psychic damage, provided that the goblin isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Whispering Aura"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/booyahg-slave-of-the-great-old-one-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```