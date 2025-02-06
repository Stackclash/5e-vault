---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 16
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\16
  - monster\Size\Large
  - monster\Type\Celesti(AL)
aliases:
  - Planetar
---
# [[5. Mechanics\Bestiary\Celestial\Planetar.md|Planetar]]
*Source: Monster Manual p. 17. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

An angel is a celestial agent sent forth into the planes to further its god's agenda for weal or woe. Its sublime beauty and presence can drive awestruck onlookers to their knees. Yet angels are destroyers too, and their appearance portends doom as often as it signals hope.

## Shards of the Divine

Angels are formed from the astral essence of benevolent gods and are thus divine beings of great power and foresight.

Angels act out the will of their gods with tireless devotion. Even chaotic good deities command lawful good angels, knowing that the angels' dedication to order best allows them to fulfill divine commands. An angel follows a single driving purpose, as decreed by its deity. However, an angel is incapable of following commands that stray from the path of law and good.

An angel slays evil creatures without remorse. As the embodiment of law and good, an angel is almost never mistaken in its judgments. This quality can create a sense of superiority in an angel, a sense that comes to the fore when an angel's task conflicts with the goals of another creature. The angel never acquiesces or gives way. When an angel is sent to aid mortals, it is sent not to serve but to command. The gods of good therefore send their angels among mortals only in response to the most dire circumstances.

## Fallen Angels

An angel's moral compass grants it a sense of infallibility that can sometimes spell its undoing. Angels are usually too wise to fall for a simple deception, but sometimes pride can lead one to commit an evil act. Whether intentional or accidental, such an act is a permanent stain that marks the angel as an outcast. Fallen angels retain their power but lose their connection to the deities from which they were made. Most fallen angels take their banishment personally, rebelling against the powers they served by seeking rulership over a section of the Abyss or a place among other fallen in the hierarchy of the Nine Hells. Zariel, the ruler of the first layer of the Nine Hells, is such a creature. Rather than rebel, some fallen angels resign themselves to an isolated existence on the Material Plane, living in disguise as simple hermits. If they are redeemed, they can become powerful allies dedicated to justice and compassionate service.

## Immortal Nature

An angel doesn't require food, drink, or sleep.

## Planetar

Planetars act as the weapons of the gods they serve, presenting a tangible representation of their deities' might. A planetar can call down rain to relieve a drought, or can loose an insect plague to devour crops. A planetar's celestial ears detect every falsehood, and its radiant eyes see through every deception.

Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace. Sometimes sent to aid powerful mortals on important tasks for good, planetars are especially fond of missions that involve battling fiends.

```statblock
"name": "Planetar"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "24"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "22"
- !!int "25"
"speed": "40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "The planetar's spellcasting ability is Charisma (spell save DC 20). The\
    \ planetar can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[5. Mechanics/Spells/Invisibility.md|invisibility]] (self only)\n\n1/day each:\
    \ [[5. Mechanics/Spells/Commune.md|commune]], [[5. Mechanics/Spells/Control Weather.md|control weather]],\
    \ [[5. Mechanics/Spells/Insect Plague.md|insect plague]]\n\n3/day each: [[5. Mechanics/Spells/Blade Barrier.md|blade\
    \ barrier]], [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]],\
    \ [[5. Mechanics/Spells/Flame Strike.md|flame strike]], [[5. Mechanics/Spells/Raise Dead.md|raise dead]]"
  "name": "Innate Spellcasting"
- "desc": "The planetar's weapon attacks are magical. When the planetar hits with\
    \ any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "The planetar knows if it hears a lie."
  "name": "Divine Awareness"
- "desc": "The planetar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The planetar makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6\
    \ + 7) slashing damage plus 22 (5d8) radiant damage."
  "name": "Greatsword"
- "desc": "The planetar touches another creature. The target magically regains 30\
    \ (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness,\
    \ or deafness."
  "name": "Healing Touch (4/Day)"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Celestial/token/planetar.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
