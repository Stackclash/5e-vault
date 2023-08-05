---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/size/huge
- monster/type/dragon
statblock: true
statblock-link: "#^statblock"
"name": "Adult Bronze Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"stats":
- !!int "25"
- !!int "10"
- !!int "23"
- !!int "16"
- !!int "15"
- !!int "19"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
  "Constitution": !!int "11"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "7"
  "Perception": !!int "12"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 7|avg (2d10 + 7) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 7|avg (2d6 + 7) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 7|avg (2d8 + 7) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon uses one of the following breath weapons.\n\n- Lightning Breath.\
    \ The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature\
    \ in that line must make a DC 19 Dexterity saving throw, taking 66 (dice: 12d10|avg\
    \ (12d10)) lightning damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Repulsion Breath. The dragon exhales repulsion energy in a 30-foot\
    \ cone. Each creature in that area must succeed on a DC 19 Strength saving throw.\
    \ On a failed save, the creature is pushed 60 feet away from the dragon.  "
  "name": "Breath Weapons (Recharge 5-6)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than its own, or back into its true form. It reverts to its\
    \ true form if it dies. Any equipment it is wearing or carrying is absorbed or\
    \ borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains\
    \ its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary\
    \ Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as\
    \ well as this action. Its statistics and capabilities are otherwise replaced\
    \ by those of the new form, except any class features or legendary actions of\
    \ that form."
  "name": "Change Shape"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 20 Dexterity saving throw or take dice: 2d6 + 7|avg (2d6\
    \ + 7) bludgeoning damage and be knocked [prone](compendium/rules/conditions.md#prone).\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "PotA"
- "SKT"
- "GoS"
- "SDW"
- "EGW"
- "JttRC"
- "DoSI"
- "DSotDQ"
"image": "/compendium/bestiary/dragon/token/adult-bronze-dragon.png"
aliases: ["Adult Bronze Dragon"]
---
# Adult Bronze Dragon
*Source: Monster Manual p. 108, Princes of the Apocalypse, Storm King's Thunder, Ghosts of Saltmarsh, Sleeping Dragon's Wake, Explorer's Guide to Wildemount, Journeys through the Radiant Citadel, Dragons of Stormwreck Isle, Dragonlance: Shadow of the Dragon Queen*  

Bronze dragons are coastal dwellers that feed primarily on aquatic plants and fish. They take the forms of friendly animals to observe other creatures of interest. They are also fascinated by warfare and eagerly join armies fighting for a just cause.

A ribbed and fluted crest defines the shape of a bronze dragon's head. Curving horns extend out from the crest, echoed by spines on its lower jaw and chin. To help them swim, bronze dragons have webbed feet and smooth scales. A bronze wyrmling's scales are yellow tinged with green; only as the dragon approaches adulthood does its color deepen to a darker, rich bronze tone. The pupils of a bronze dragon's eyes fade as the dragon ages, until they resemble glowing green orbs.

## Dragons of the Coast

Bronze dragons love to watch ships traveling up and down the coastlines near their lairs, sometimes taking the forms of dolphins or seagulls to inspect those ships and their crews more closely. A daring bronze dragon might slip aboard a ship in the guise of a bird or rat, inspecting the hold for treasure. If the dragon finds a worthy addition to its hoard, it barters with the ship's captain for the item.

## War Machines

Bronze dragons actively oppose tyranny, and many bronze dragons yearn to test their mettle by putting their size and strength to good use. When a conflict unfolds near its lair, a bronze dragon ascertains the underlying cause, then offers its services to any side that fights for good. Once a bronze dragon commits to a cause, it remains a staunch ally.

### Well-Organized Wealth

Bronze dragons loot sunken ships and also collect colorful coral and pearls from the reefs and seabeds near their lairs. When a bronze dragon pledges to help an army wage war against tyranny, it asks for nominal payment. If such a request is beyond its allies' means, it might settle for a collection of old books on military history or a ceremonial item commemorating the alliance. A bronze dragon might also lay claim to a treasure held by the enemy that it feels would be safer under its protection.

## A Bronze Dragon's Lair

A bronze dragon lairs in coastal caves. It might salvage a wrecked ship, reconstruct it within the confines of its lair, and use it as a treasure vault or nest for its eggs.

## Metallic Dragons

Metallic dragons seek to preserve and protect, viewing themselves as one powerful race among the many races that have a place in the world.

### Noble Curiosity

Metallic dragons covet treasure as do their evil chromatic kin, but they aren't driven as much by greed in their pursuit of wealth. Rather, metallic dragons are driven to investigate and collect, taking unclaimed relics and storing them in their lairs. A metallic dragon's treasure hoard is filled with items that reflect its persona, tell its history, and preserve its memories. Metallic dragons also seek to protect other creatures from dangerous magic. As such, powerful magic items and even evil artifacts are sometimes secreted away in a metallic dragon's hoard.

A metallic dragon can be persuaded to part with an item in its hoard for the greater good. However, another creature's need for or right to the item is often unclear from the dragon's point of view. A metallic dragon must be bribed or otherwise convinced to part with the item.

### Solitary Shapeshifters

At some point in their long lives, metallic dragons gain the magical ability to assume the forms of humanoids and beasts. When a dragon learns how to disguise itself, it might immerse itself in other cultures for a time. Some dragons are too shy or paranoid to stray far from their lairs and their treasure hoards, but bolder dragons love to wander city streets in humanoid form, taking in the local culture and cuisine, and amusing themselves by observing how the smaller races live.

Some metallic dragons prefer to stay as far away from civilization as possible so as to not attract enemies. However, this means that they are often far out of touch with current events.

### The Persistence of Memory

Metallic dragons have long memories, and they form opinions of humanoids based on previous contact with related humanoids. Good dragons can recognize humanoid bloodlines by smell, sniffing out each person they meet and remembering any relatives they have come into contact with over the years. A gold dragon might never suspect duplicity from a cunning villain, assuming that the villain is of the same mind and heart as a good and virtuous grandmother. On the other hand, the dragon might resent a noble paladin whose ancestor stole a silver statue from the dragon's hoard three centuries before.

### King of Good Dragons

The chief deity of the metallic dragons is Bahamut, the Platinum Dragon. He dwells in the Seven Heavens of Mount Celestia, but often wanders the Material Plane in the magical guise of a venerable human male in peasant robes. In this form, he is usually accompanied by seven golden canaries-actually seven ancient gold dragons in polymorphed form.

Bahamut seldom interferes in the affairs of mortal creatures, though he makes exceptions to help thwart the machinations of Tiamat the Dragon Queen and her evil brood. Good-aligned clerics and paladins sometimes worship Bahamut for his dedication to justice and protection. As a lesser god, he has the power to grant divine spells.

## Dragons

True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.

Many creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.

Though their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.

True dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.

**Dragon Age Categories**

| Category | Size | Age Range |
|----------|------|-----------|
| Wyrmling | Medium | 5 years or less |
| Young | Large | 6–100 years |
| Adult | Huge | 101–800 years |
| Ancient | Gargantuan | 801 years or more |
^dragon-age-categories

## Stat Block

```ad-statblock
title: Adult Bronze Dragon
![](/compendium/bestiary/dragon/token/adult-bronze-dragon.png#token)
*Huge dragon, Lawful Good*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 17d12 + 102|text(212)` (17d12 + 102) 
- **Speed** walk 40 ft., fly 80 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|25 (+7)|10 (+0)|23 (+6)|16 (+3)|15 (+2)|19 (+4)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +5, Constitution +11, Wisdom +7, Charisma +9
- **Skills** Insight +7, Perception +12, Stealth +5
- **Senses** blindsight 60 ft., darkvision 120 ft., passive Perception 22
- **Damage Immunities** lightning
- **Languages** Common, Draconic
- **Challenge** 15

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (3/Day).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+12` (+12 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 7|avg` (`2d10 + 7`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+12` (+12 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 7|avg` (`2d6 + 7`) slashing damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+12` (+12 to hit), reach 15 ft., one target. Hit: `dice: 2d8 + 7|avg` (`2d8 + 7`) bludgeoning damage.

***Frightful Presence.*** Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.

***Breath Weapons (Recharge 5-6).*** The dragon uses one of the following breath weapons.

- **Lightning Breath.** The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (`dice: 12d10|avg` (`12d10`)) lightning damage on a failed save, or half as much damage on a successful one.  
- **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.  

***Change Shape.*** The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).

In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.

## Legendary Actions

***Detect.*** The dragon makes a Wisdom ([Perception](compendium/rules/skills.md#Perception)) check.

***Tail Attack.*** The dragon makes a tail attack.

***Wing Attack (Costs 2 Actions).*** The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take `dice: 2d6 + 7|avg` (`2d6 + 7`) bludgeoning damage and be knocked [prone](compendium/rules/conditions.md#prone). The dragon can then fly up to half its flying speed.

## Additional sources



## Lair actions

On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects:

- The dragon creates fog as though it had cast the [fog cloud](/compendium/spells/fog-cloud.md) spell. The fog lasts until initiative count 20 on the next round.  
- A thunderclap originates at a point the dragon can see within 120 feet of it. Each creature within a 20-foot radius centered on that point must make a DC 15 Constitution saving throw or take `dice: 1d10|avg` (`1d10`) thunder damage and be [deafened](compendium/rules/conditions.md#deafened) until the end of its next turn.  


## Regional effects

The region containing a legendary bronze dragon's lair is warped by the dragon's magic.

- Once per day, the dragon can alter the weather in a 6-mile radius centered on its lair. The dragon doesn't need to be outdoors; otherwise the effect is identical to the [control weather](/compendium/spells/control-weather.md) spell.  
- Underwater plants within 6 miles of the dragon's lair take on dazzlingly brilliant hues.  
- Within its lair, the dragon can set illusory sounds, such as soft music and strange echoes, so that they can be heard in various parts of the lair.  

If the dragon dies, changed weather reverts to normal, as described in the spell, and the other effects fade in `dice: 1d10|avg` (`1d10`) days.

```
^statblock

## Environment

coastal