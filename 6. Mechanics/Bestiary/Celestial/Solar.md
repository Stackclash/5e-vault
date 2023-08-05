---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/celestial
statblock: true
statblock-link: "#^statblock"
"name": "Solar"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "21"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"stats":
- !!int "26"
- !!int "22"
- !!int "26"
- !!int "25"
- !!int "25"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "17"
  "Wisdom": !!int "14"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar's spellcasting ability is Charisma (spell save DC 25). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]] (self only)\n\n1/day each:\
    \ [[/6. Mechanics/Spells/commune.md\|commune]], [[/6. Mechanics/Spells/control-weather.md\|control weather]]\n\
    \n3/day each: [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]], [dispel\
    \ evil and good](/compendium/spells/dispel-evil-and-good.md), [[/6. Mechanics/Spells/resurrection.md\|resurrection]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar's weapon attacks are magical. When the solar hits with any weapon,\
    \ the weapon deals an extra dice: 6d8|avg (6d8) radiant damage (included in\
    \ the attack)."
  "name": "Angelic Weapons"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar knows if it hears a lie."
  "name": "Divine Awareness"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar makes two greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+15 (+15 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 8|avg (4d6 + 8) slashing damage plus dice: 6d8|avg (6d8)\
    \ radiant damage."
  "name": "Greatsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+13 (+13 to hit), range 150/600 ft.,\
    \ one target. Hit: dice: 2d8 + 6|avg (2d8 + 6) piercing damage plus dice:\
    \ 6d8|avg (6d8) radiant damage. If the target is a creature that has 100 hit\
    \ points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
  "name": "Slaying Longbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar releases its greatsword to hover magically in an unoccupied space\
    \ within 5 feet of it. If the solar can see the sword, the solar can mentally\
    \ command it as a bonus action to fly up to 50 feet and either make one attack\
    \ against a target or return to the solar's hands. If the hovering sword is targeted\
    \ by any effect, the solar is considered to be holding it. The hovering sword\
    \ falls if the solar dies."
  "name": "Flying Sword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar touches another creature. The target magically regains 40 (dice:\
    \ 8d8 + 4|avg (8d8 + 4)) hit points and is freed from any curse, disease, poison,\
    \ blindness, or deafness."
  "name": "Healing Touch (4/Day)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar magically teleports, along with any equipment it is wearing or\
    \ carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar emits magical, divine energy. Each creature of its choice in\
    \ a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (dice:\
    \ 4d6|avg (4d6)) fire damage plus dice: 4d6|avg (4d6) radiant damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Searing Burst (Costs 2 Actions)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The solar targets one creature it can see within 30 feet of it. If the\
    \ target can see it, the target must succeed on a DC 15 Constitution saving throw\
    \ or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until magic such as\
    \ the [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]] spell removes\
    \ the blindness."
  "name": "Blinding Gaze (Costs 3 Actions)"
"source":
- "MM"
- "BGDIA"
- "CM"
- "CRCotN"
- "JttRC"
"image": "/compendium/bestiary/celestial/token/solar.png"
aliases: ["Solar"]
---
# Solar
*Source: Monster Manual p. 18, Baldur's Gate: Descent Into Avernus, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*  

An angel is a celestial agent sent forth into the planes to further its god's agenda for weal or woe. Its sublime beauty and presence can drive awestruck onlookers to their knees. Yet angels are destroyers too, and their appearance portends doom as often as it signals hope.

## Shards of the Divine

Angels are formed from the astral essence of benevolent gods and are thus divine beings of great power and foresight.

Angels act out the will of their gods with tireless devotion. Even chaotic good deities command lawful good angels, knowing that the angels' dedication to order best allows them to fulfill divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good.

An angel slays evil creatures without remorse. As the embodiment of law and good, an angel is almost never mistaken in its judgments. This quality can create a sense of superiority in an angel, a sense that comes to the fore when an angel's task conflicts with the goals of another creature. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send their angels among mortals only in response to the most dire circumstances.

## Fallen Angels

An angel's moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen in the hierarchy of the Nine Hells. Zariel, the ruler of the first layer of the Nine Hells, is such a creature. Rather than rebel, some fallen angels resign themselves to an isolated existence on the Material Plane, living in disguise as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service.

## Immortal Nature

An angel doesn't require food, drink, or sleep.

## Solar

A solar is godlike in its glory and power.

On the battlefield, the solar's sword flies into the fray on its own, and a single arrow from a solar's bow can strike a target dead on contact. So great is a solar's celestial might that even demon princes shrink at its resonant commands.

It is said that only twenty-four solars exist. The few solars that are known are stewards of specific deities. The others rest in a state of contemplation, waiting for the time when their services are needed to stave off some cosmic threat to the cause of good.

## Stat Block

```ad-statblock
title: Solar
![[/6. Mechanics/Bestiary/Celestial/Token/solar.png#token]]
*Large celestial, Lawful Good*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 18d10 + 144|text(243)` (18d10 + 144) 
- **Speed** walk 50 ft., fly 150 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|26 (+8)|22 (+6)|26 (+8)|25 (+7)|25 (+7)|30 (+10)|

- **Proficiency Bonus** +7
- **Saving Throws** Intelligence +14, Wisdom +14, Charisma +17
- **Skills** Perception +14
- **Senses** truesight 120 ft., passive Perception 24
- **Damage Resistances** radiant; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 21

## Traits

***Angelic Weapons.*** The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra `dice: 6d8` (`6d8`) radiant damage (included in the attack).

***Divine Awareness.*** The solar knows if it hears a lie.

***Magic Resistance.*** The solar has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]] (self only)

**1/day each**: [[/6. Mechanics/Spells/commune.md\|commune]], [[/6. Mechanics/Spells/control-weather.md\|control weather]]

**3/day each**: [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]], [[/6. Mechanics/Spells/dispel-evil-and-good.md\|dispel evil and good]], [[/6. Mechanics/Spells/resurrection.md\|resurrection]]

## Actions

***Multiattack.*** The solar makes two greatsword attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+15` (+15 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 8` (`4d6 + 8`) slashing damage plus `dice: 6d8` (`6d8`) radiant damage.

***Slaying Longbow.*** *Ranged Weapon Attack:* `dice: d20+13` (+13 to hit), range 150/600 ft., one target. Hit: `dice: 2d8 + 6` (`2d8 + 6`) piercing damage plus `dice: 6d8` (`6d8`) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.

***Flying Sword.*** The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.

***Healing Touch (4/Day).*** The solar touches another creature. The target magically regains 40 (`dice: 8d8 + 4` (`8d8 + 4`)) hit points and is freed from any curse, disease, poison, blindness, or deafness.

## Legendary Actions

***Teleport.*** The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.

***Searing Burst (Costs 2 Actions).*** The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (`dice: 4d6` (`4d6`)) fire damage plus `dice: 4d6` (`4d6`) radiant damage on a failed save, or half as much damage on a successful one.

***Blinding Gaze (Costs 3 Actions).*** The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] until magic such as the [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]] spell removes the blindness.
```
^statblock