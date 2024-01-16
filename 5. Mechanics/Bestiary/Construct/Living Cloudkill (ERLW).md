---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/7
- monster/size/large
- monster/type/construct
statblock: inline
aliases: ["Living Cloudkill"]
---
# [[5. Mechanics/Bestiary/Construct/Living Cloudkill (ERLW).md|Living Cloudkill]]
*Source: Eberron: Rising from the Last War p. 299*  

## Constructed Nature

A living spell doesn't require air, food, drink, or sleep.

Of all the anomalies that emerged from the magical cataclysm that created the Mournland, the appearance of living spells might be the most mysterious. In some unknown fashion, the magical energy unleashed during the Last War caused spell effects to take on sentience. A living spell appears much like a normal spell effect, except that its magical energy endures indefinitely.

Living spells haunt the Mournland and other areas blasted by the Last War, somehow subsisting on ambient magical energy as they writhe and across the landscape. Though they have no need for sustenance, they attack any creatures they come into contact with, lashing out indiscriminately with their corrupted magic.

## Customizing a Living Spell

Living spells come in many varieties; the stat blocks here are three examples. Living spells most often manifest from evocation and conjuration spells. To make a living spell from a different spell, choose a damage-dealing evocation or conjuration spell from the wizard spell list of up to 5th level. Then consult the Living Spell Customization table to see which stat block to customize, based on the chosen spell's level.

**Living Spell Customization**

| Spell Level | Stat Block to Customize |
|-------------|-------------------------|
| 1–2 | Living burning hands |
| 3–4 | Living lightning bolt |
| 5 | Living cloudkill |
^living-spell-customization

Now make the following changes to that stat block:

**Damage Immunity**. Replace the living spell's damage immunity with immunity to the type (or types) of damage dealt by the chosen spell.

**Magical Strike**. Replace the damage that Magical Strike deals with one type of damage dealt by the chosen spell.

**Spell Mimicry**. Replace the effect of Spell Mimicry with the effect of the chosen spell. If that spell requires a saving throw, use spell save DC from the replaced spell, and if the spell involves an attack roll, use the attack bonus from the living spell's Magical Strike.

For example, if you turn [[5. Mechanics/Spells/Fireball.md|fireball]] (a 3rd-level spell) into a living spell, customize the [[5. Mechanics/Bestiary/Construct/Living Lightning Bolt (ERLW).md|living lightning bolt]]. The living fireball has immunity to fire damage, instead of lightning damage; deals fire damage with its Magical Strike; and replicates [[5. Mechanics/Spells/Fireball.md|fireball]] with Spell Mimicry.

```statblock
"name": "Living Cloudkill (ERLW)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "73"
"hit_dice": "7d10 + 35"
"stats":
- !!int "10"
- !!int "15"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "25 ft., fly 25 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "7"
"traits":
- "desc": "The living spell can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The living spell has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The living spell makes two Magical Strike attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 5d6 + 5|avg (5d6 + 5) poison damage."
  "name": "Magical Strike"
- "desc": "The living spell creates a 40-foot-diameter sphere of fog within 60 feet\
    \ of it (the fog spreads around corners). When a creature enters the fog for the\
    \ first time on a turn or starts its turn there, it must make a DC 16 Constitution\
    \ saving throw, taking dice: 5d8|avg (5d8) poison damage on a failed save,\
    \ or half as much damage on a successful one.\n\nThe fog moves 10 feet away from\
    \ the living spell at the start of each of its turns, rolling along the ground\
    \ and through openings. The fog lasts for 10 minutes or until the living spell's\
    \ [[/5. Mechanics/Rules/Conditions.md#concentration|concentration]] ends (as if concentrating\
    \ on a spell)."
  "name": "Spell Mimicry (Recharge 5-6)"
"source":
- "ERLW"
"image": "compendium/bestiary/construct/token/living-cloudkill.png"
```
^statblock