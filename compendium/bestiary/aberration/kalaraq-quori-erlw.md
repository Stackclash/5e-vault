---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/19
- monster/size/medium
- monster/type/aberration
statblock: inline
aliases: ["Kalaraq Quori"]
---
# [Kalaraq Quori](compendium/bestiary/aberration/kalaraq-quori-erlw.md)
*Source: Eberron: Rising from the Last War p. 306*

The most powerful quori are the kalaraqs, also known as eyebinders—entities formed of pure shadow that is outlined by a nimbus of energy. A host of disembodied eyes whirl around a kalaraq, each reflecting a consciousness the creature has consumed.

Kalaraq quori guide the quori race, and the Devourer of Dreams—the personal emissary of the Dreaming Dark—is of this order. Although the kalaraqs never fight one another overtly, each has its own agenda, and each hopes to someday seize the throne of the Devourer of Dreams. Because of this internal conflict, it is unusual for a kalaraq to leave Dal Quor to inhabit a mortal vessel and become one of the Inspired.

Dal Quor is the plane of dreams and is currently dominated by a dark power known as il-Lashtavar, or the Dreaming Dark. Il-Lashtavar is served by a host of aberrations that are the embodiments of dreams and nightmares—the quori. Because it is difficult for anything to physically travel to or from Dal Quor, quori in Eberron are typically encountered while possessing a host body. The Inspired are the most common type of willing host for the quori and are described earlier in this chapter.

```statblock
"name": "Kalaraq Quori (ERLW)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "23"
- !!int "24"
- !!int "25"
"speed": "30 ft., fly 60 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "13"
  "Intelligence": !!int "12"
"skillsaves":
  "Deception": !!int "13"
  "Perception": !!int "13"
  "Persuasion": !!int "13"
"damage_resistances": "cold; necrotic; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#blinded), [charmed](/compendium/rules/conditions.md#charmed),\
  \ [exhaustion](/compendium/rules/conditions.md#exhaustion), [frightened](/compendium/rules/conditions.md#frightened),\
  \ [grappled](/compendium/rules/conditions.md#grappled), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [prone](/compendium/rules/conditions.md#prone),\
  \ [restrained](/compendium/rules/conditions.md#restrained)"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 120 ft."
"cr": "19"
"traits":
- "desc": "The quori's spellcasting ability is Charisma (spell save DC 21, dice:\
    \ d20+13 (+13 to hit) with spell attacks). It can innately cast the following\
    \ spells, requiring no components:\n\nAt will: [arcane eye](compendium/spells/arcane-eye.md)\n\
    \n3/day each: [clairvoyance](compendium/spells/clairvoyance.md), [confusion](compendium/spells/confusion.md),\
    \ [dream](compendium/spells/dream.md), [eyebite](compendium/spells/eyebite.md)"
  "name": "innate"
- "desc": "The quori can't be surprised while it isn't [incapacitated](/compendium/rules/conditions.md#incapacitated)."
  "name": "All-Around Vision"
- "desc": "The quori can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The quori has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The quori makes two Soul Binding attacks. Alternatively, it can make four\
    \ attacks with Arcane Blast."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: dice: d20+13 (+13 to hit), range 120 ft., one\
    \ target. Hit: dice: 1d10 + 7|avg (1d10 + 7) force damage."
  "name": "Arcane Blast"
- "desc": "Melee Spell Attack: dice: d20+13 (+13 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d10 + 7|avg (4d10 + 7) necrotic damage. A creature reduced\
    \ to 0 hit points from this attack dies and has its soul imprisoned in one of\
    \ the quori's eyes. The target can't be revived by any means short of a [wish](compendium/spells/wish.md)\
    \ spell until the quori is destroyed."
  "name": "Soul Binding"
- "desc": "The quori touches one humanoid, which must succeed on a DC 21 Intelligence\
    \ saving throw or be cursed. The curse lasts until it's removed by a remove curse\
    \ or [greater restoration](compendium/spells/greater-restoration.md) spell.\n\n\
    The cursed target suffers 1 level of [exhaustion](/compendium/rules/conditions.md#exhaustion)\
    \ every 24 hours, and finishing a long rest doesn't reduce its [exhaustion](/compendium/rules/conditions.md#exhaustion).\
    \ If the cursed target reaches [exhaustion](/compendium/rules/conditions.md#exhaustion)\
    \ level 6, it doesn't die; it instead becomes a thrall under the quori's control,\
    \ and all its [exhaustion](/compendium/rules/conditions.md#exhaustion) is removed.\
    \ Only the [wish](compendium/spells/wish.md) spell can free the thrall from this\
    \ control."
  "name": "Mind Seed (1/Day)"
- "desc": "The quori creates a swarm of spectral eyes that fills a 30-foot-radius\
    \ sphere centered on a point it can see within 60 feet of it. Each creature in\
    \ that area must make a DC 21 Wisdom saving throw. On a failure, a creature takes\
    \ dice: 10d8|avg (10d8) psychic damage, and it is [blinded](/compendium/rules/conditions.md#blinded)\
    \ for 1 minute. On a success, a creature takes half as much damage and isn't [blinded](/compendium/rules/conditions.md#blinded).\
    \ A [blinded](/compendium/rules/conditions.md#blinded) creature can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success."
  "name": "Swarm of Eyes (Recharge 6)"
- "desc": "One humanoid that the quori can see within 5 feet of it must succeed on\
    \ a DC 21 Charisma saving throw or be possessed by the quori; the quori then disappears,\
    \ and the target is [incapacitated](/compendium/rules/conditions.md#incapacitated)\
    \ and loses control of its body. The quori now controls the body but doesn't deprive\
    \ the target of awareness. The quori can't be targeted by any attack, spell, or\
    \ other effect, and it retains its alignment, Intelligence, Wisdom, Charisma,\
    \ and immunity to being [charmed](/compendium/rules/conditions.md#charmed) and\
    \ [frightened](/compendium/rules/conditions.md#frightened). It otherwise uses\
    \ the possessed target's statistics, but doesn't gain access to the target's knowledge,\
    \ class features, or proficiencies.\n\nThe possession lasts until the body drops\
    \ to 0 hit points, the quori ends it as a bonus action, or the quori is forced\
    \ out by an effect like the [dispel evil and good](compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the quori reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this quori's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "ERLW"
"image": "compendium/bestiary/aberration/token/kalaraq-quori-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```