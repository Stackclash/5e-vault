---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/11
- monster/size/large
- monster/type/celestial
statblock: inline
aliases: ["Radiant Idol"]
---
# [Radiant Idol](compendium/bestiary/celestial/radiant-idol-erlw.md)
*Source: Eberron: Rising from the Last War p. 308*

A radiant idol was an angel that was banished from the celestial realm of Syrania and cast down to the Material Plane. One sin led to their fall: the desire to be worshiped by mortals. Now in the mortal realm, most radiant idols gather cults of devoted followers.

## Fallen Angels

The insatiable hunger to be adored can transform a fallen angel, physically and mentally. In its true form, a radiant idol appears to be a warped angel. It might have bloody stumps in place of its wings, or its wings could be weighted down with chains representing its pride. A radiant idol uses [disguise self](compendium/spells/disguise-self.md) to hide its corruption, presenting an image of celestial glory.

## The Weight of Corruption

When a radiant idol achieves a sizable following through silvered words and demonstrations of power, its facade begins to crack, and a downward spiral ensues. As the radiant idol sinks deeper into the realm of material power, it begins twisting its followers, leading them ever deeper into ominous ritualism, hedonistic folly, and fanatical doom.

## Immortal Nature

A radiant idol doesn't require food, drink, or sleep.

```statblock
"name": "Radiant Idol (ERLW)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"stats":
- !!int "23"
- !!int "18"
- !!int "19"
- !!int "17"
- !!int "20"
- !!int "21"
"speed": "40 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Persuasion": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened)"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "11"
"traits":
- "desc": "The radiant idol's spellcasting ability is Charisma (spell save DC 17).\
    \ The radiant idol can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [charm person](compendium/spells/charm-person.md),\
    \ [cure wounds](compendium/spells/cure-wounds.md), [disguise self](compendium/spells/disguise-self.md),\
    \ [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1/day each: [commune](compendium/spells/commune.md),\
    \ [dominate person](compendium/spells/dominate-person.md), [insect plague](compendium/spells/insect-plague.md),\
    \ [mass suggestion](compendium/spells/mass-suggestion.md), [raise dead](compendium/spells/raise-dead.md)"
  "name": "innate"
- "desc": "A creature that starts its turn within 30 feet of the radiant idol must\
    \ make a DC 17 Wisdom saving throw, provided the radiant idol isn't [incapacitated](/compendium/rules/conditions.md#incapacitated).\
    \ On a failed save, the creature is [charmed](/compendium/rules/conditions.md#charmed)\
    \ by the radiant idol. A creature [charmed](/compendium/rules/conditions.md#charmed)\
    \ in this way can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success. Once it succeeds on the saving throw, a creature\
    \ is immune to this radiant idol's Aura of False Divinity for 24 hours."
  "name": "Aura of False Divinity"
- "desc": "The radiant idol has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The radiant idol makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 6|avg (1d8 + 6) bludgeoning damage plus dice: 4d8|avg\
    \ (4d8) radiant damage."
  "name": "Flail"
- "desc": "The radiant idol chooses a point on the ground it can see within 60 feet\
    \ of it. A 30-foot-radius, 40-foot-high cylinder of bright light appears there\
    \ until the start of the radiant idol's next turn. Each creature in the cylinder\
    \ when it appears or that ends its turn there must make a DC 17 Constitution saving\
    \ throw, taking dice: 8d8|avg (8d8) radiant damage on a failed save, or half\
    \ as much damage on a successful one."
  "name": "Radiant Strike (1/Day)"
"source":
- "ERLW"
"image": "compendium/bestiary/celestial/token/radiant-idol-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```