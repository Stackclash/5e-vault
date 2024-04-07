---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/cr/4
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Booyahg Slave of the Archfey"]
---
# [Booyahg Slave of the Archfey](compendium/bestiary/humanoid/booyahg-slave-of-the-archfey-vgm.md)
*Source: Volo's Guide to Monsters p. 42*

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Slave of the Archfey (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "11"
- !!int "11"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Nature": !!int "2"
  "Deception": !!int "6"
  "Arcana": !!int "2"
  "Persuasion": !!int "6"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed)"
"senses": "passive Perception 11"
"languages": "any two languages (usually Sylvan)"
"cr": "4"
"traits":
- "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [disguise self](compendium/spells/disguise-self.md), [mage armor](compendium/spells/mage-armor.md)\
    \ (self only), [silent image](compendium/spells/silent-image.md), [speak with\
    \ animals](compendium/spells/speak-with-animals.md)\n\n1/day: [conjure fey](compendium/spells/conjure-fey.md)"
  "name": "innate"
- "desc": "The goblin is an 11th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). It regains\
    \ its expended spell slots when it finishes a short or long rest. It knows the\
    \ following warlock spells:\n\nCantrips (at will): [dancing lights](compendium/spells/dancing-lights.md),\
    \ [eldritch blast](compendium/spells/eldritch-blast.md), [friends](compendium/spells/friends.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md), [vicious mockery](compendium/spells/vicious-mockery.md)\n\
    \n1st-5th level (3 slots): [blink](compendium/spells/blink.md), [charm person](compendium/spells/charm-person.md),\
    \ [dimension door](compendium/spells/dimension-door.md), [dominate beast](compendium/spells/dominate-beast.md),\
    \ [faerie fire](compendium/spells/faerie-fire.md), [fear](compendium/spells/fear.md),\
    \ [hold monster](compendium/spells/hold-monster.md), [misty step](compendium/spells/misty-step.md),\
    \ [phantasmal force](compendium/spells/phantasmal-force.md), [seeming](compendium/spells/seeming.md),\
    \ [sleep](compendium/spells/sleep.md)"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"reactions":
- "desc": "In response to taking damage, the goblin turns [invisible](/compendium/rules/conditions.md#invisible)\
    \ and teleports up to 60 feet to an unoccupied space it can see. It remains [invisible](/compendium/rules/conditions.md#invisible)\
    \ until the start of its next turn or until it attacks, makes a damage roll, or\
    \ casts a spell."
  "name": "Misty Escape (Recharges after a Short or Long Rest)"
"source":
- "VGM"
"image": "compendium/bestiary/humanoid/token/booyahg-slave-of-the-archfey-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```