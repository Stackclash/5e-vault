---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/21
  - monster/size/large
  - monster/type/celestial
aliases:
  - Solar
---
# [[5. Mechanics\Bestiary\Celestial\Solar.md|Solar]]
*Source: Monster Manual p. 18. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

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

```statblock
"name": "Solar"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "243"
"hit_dice": "18d10 + 144"
"modifier": !!int "6"
"stats":
  - !!int "26"
  - !!int "22"
  - !!int "26"
  - !!int "25"
  - !!int "25"
  - !!int "30"
"speed": "50 ft., fly 150 ft."
"saves":
  - "intelligence": "+14"
  - "wisdom": "+14"
  - "charisma": "+17"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+14"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "The solar's spellcasting ability is Charisma (spell save DC 25). It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      At will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
      \ [[5. Mechanics/Spells/Invisibility.md|invisibility]] (self only)\n\n3/day each:\
      \ [[5. Mechanics/Spells/Blade Barrier.md|blade barrier]], [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]],\
      \ [[5. Mechanics/Spells/Resurrection.md|resurrection]]\n\n1/day each: [[5. Mechanics/Spells/Commune.md|commune]],\
      \ [[5. Mechanics/Spells/Control Weather.md|control weather]]"
    "name": "Innate Spellcasting"
  - "desc": "The solar's weapon attacks are magical. When the solar hits with any\
      \ weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
    "name": "Angelic Weapons"
  - "desc": "The solar knows if it hears a lie."
    "name": "Divine Awareness"
  - "desc": "The solar has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The solar makes two greatsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22\
      \ (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
    "name": "Greatsword"
  - "desc": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit:\
      \ 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is\
      \ a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution\
      \ saving throw or die."
    "name": "Slaying Longbow"
  - "desc": "The solar releases its greatsword to hover magically in an unoccupied\
      \ space within 5 feet of it. If the solar can see the sword, the solar can mentally\
      \ command it as a bonus action to fly up to 50 feet and either make one attack\
      \ against a target or return to the solar's hands. If the hovering sword is\
      \ targeted by any effect, the solar is considered to be holding it. The hovering\
      \ sword falls if the solar dies."
    "name": "Flying Sword"
  - "desc": "The solar touches another creature. The target magically regains 40 (8d8\
      \ + 4) hit points and is freed from any curse, disease, poison, blindness, or\
      \ deafness."
    "name": "Healing Touch (4/Day)"
"legendary_actions":
  - "desc": "The solar magically teleports, along with any equipment it is wearing\
      \ or carrying, up to 120 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The solar emits magical, divine energy. Each creature of its choice in\
      \ a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6)\
      \ fire damage plus 14 (4d6) radiant damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Searing Burst (Costs 2 Actions)"
  - "desc": "The solar targets one creature it can see within 30 feet of it. If the\
      \ target can see it, the target must succeed on a DC 15 Constitution saving\
      \ throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] until magic\
      \ such as the [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]]\
      \ spell removes the blindness."
    "name": "Blinding Gaze (Costs 3 Actions)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Celestial/token/solar.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
