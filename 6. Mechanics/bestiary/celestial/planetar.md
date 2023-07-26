---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/celestial
statblock: true
statblock-link: "#^statblock"
name: Planetar
ac: 19
hp: 200
hit_dice: 16d10 + 112
cr: '16'
stats: [
  24,
  20,
  24,
  19,
  22,
  25
]
source: [
  MM,
  BGDIA,
  CRCotN,
  JttRC
]
aliases: ["Planetar"]
---
*Source: Monster Manual p. 17, Baldur's Gate: Descent Into Avernus, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*  

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

## Stat Block

```ad-statblock
title: Planetar
![[token/planetar.png#token]]
*Large celestial, Lawful Good*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 16d10 + 112|text(200)` (16d10 + 112) 
- **Speed** walk 40 ft., fly 120 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|20 (+5)|24 (+7)|19 (+4)|22 (+6)|25 (+7)|

- **Proficiency Bonus** +5
- **Saving Throws** Constitution +12, Wisdom +11, Charisma +12
- **Skills** Perception +11
- **Senses** truesight 120 ft., passive Perception 21
- **Damage Resistances** radiant; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened
- **Languages** all, telepathy 120 ft.
- **Challenge** 16

## Traits

***Angelic Weapons.*** The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra `dice: 5d8|avg` (`5d8`) radiant damage (included in the attack).

***Divine Awareness.*** The planetar knows if it hears a lie.

***Magic Resistance.*** The planetar has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:

**At will**: [detect evil and good](/6. Mechanics/spells/detect-evil-and-good.md), [invisibility](/6. Mechanics/spells/invisibility.md) (self only)

**1/day each**: [commune](/6. Mechanics/spells/commune.md), [control weather](/6. Mechanics/spells/control-weather.md), [insect plague](/6. Mechanics/spells/insect-plague.md)

**3/day each**: [blade barrier](/6. Mechanics/spells/blade-barrier.md), [dispel evil and good](/6. Mechanics/spells/dispel-evil-and-good.md), [flame strike](/6. Mechanics/spells/flame-strike.md), [raise dead](/6. Mechanics/spells/raise-dead.md)

## Actions

***Multiattack.*** The planetar makes two melee attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+12` (+12 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 7|avg` (`4d6 + 7`) slashing damage plus `dice: 5d8|avg` (`5d8`) radiant damage.

***Healing Touch (4/Day).*** The planetar touches another creature. The target magically regains 30 (`dice: 6d8 + 3|avg` (`6d8 + 3`)) hit points and is freed from any curse, disease, poison, blindness, or deafness.
```
^statblock