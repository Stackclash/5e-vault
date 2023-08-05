---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/humanoid/gith
statblock: true
statblock-link: "#^statblock"
"name": "Githzerai Anarch"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "20"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "16"
- !!int "21"
- !!int "18"
- !!int "18"
- !!int "20"
- !!int "14"
"speed": "walk 30 ft., fly 40 ft. (hover)"
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Intelligence": !!int "9"
  "Strength": !!int "8"
"skillsaves":
  "Insight": !!int "10"
  "Perception": !!int "10"
  "Arcana": !!int "9"
"senses": "passive Perception 20"
"languages": "Gith"
"cr": "16"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githzerai casts one of the following spells, requiring no spell components\
    \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
    \ [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\n1/day\
    \ each: [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md),\
    \ [plane shift](/compendium/spells/plane-shift.md), [wall of force](/compendium/spells/wall-of-force.md)\n\
    \n3/day each: [see invisibility](/compendium/spells/see-invisibility.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the githzerai fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
    \ includes its Wisdom modifier."
  "name": "Psychic Defense"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githzerai makes three Unarmed Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) bludgeoning damage plus dice: 4d8|avg\
    \ (4d8) psychic damage."
  "name": "Unarmed Strike"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githzerai makes one Unarmed Strike attack."
  "name": "Strike"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githzerai teleports, along with any equipment it is wearing or carrying,\
    \ to an unoccupied space it can see within 30 feet of it."
  "name": "Teleport"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githzerai casts the [reverse gravity](/compendium/spells/reverse-gravity.md)\
    \ spell, using Wisdom as the spellcasting ability. The spell has the normal effect,\
    \ except that the githzerai can orient the area in any direction and creatures\
    \ and objects fall toward the end of the area."
  "name": "Change Gravity (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/githzerai-anarch.png"
aliases: ["Githzerai Anarch"]
---
# Githzerai Anarch
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 142, Mordenkainen's Tome of Foes p. 207*  

Anarchs are githzerai sages and mystics who lead communities and maintain the adamantine citadels that serve as strong points in Limbo and on other planes. They have formidable psionic capabilities and are able to manipulate the unformed substance of their adopted plane with a thought.

## An Anarch's Lair

In Limbo, githzerai anarchs create islands of tranquility in this turbulent plane. An anarch can use its psionic power to give form to formless substance, creating mountains, lakes, and structures to serve as a foundation for a githzerai community.

The anarch's challenge rating is 17 (18,000 XP) when it's encountered in its lair.

## Githzerai

Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.

## Stat Block

```ad-statblock
title: Githzerai Anarch
![](/compendium/bestiary/humanoid/token/githzerai-anarch.png#token)
*Medium humanoid(gith), Any alignment*

- **Armor Class** 20 (psychic defense)
- **Hit Points** `dice: 17d8 + 68|text(144)` (17d8 + 68) 
- **Speed** walk 30 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|21 (+5)|18 (+4)|18 (+4)|20 (+5)|14 (+2)|

- **Proficiency Bonus** +5
- **Saving Throws** Strength +8, Dexterity +10, Intelligence +9, Wisdom +10
- **Skills** Arcana +9, Insight +10, Perception +10
- **Senses** passive Perception 20
- **Languages** Gith
- **Challenge** 16

## Traits

***Legendary Resistance (3/Day).*** If the githzerai fails a saving throw, it can choose to succeed instead.

***Psychic Defense.*** While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.

***Spellcasting (Psionics).*** The githzerai casts one of the following spells, requiring no spell components and using Wisdom as the spellcasting ability (spell save DC 18):

**At will**: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)

**1/day each**: [globe of invulnerability](/compendium/spells/globe-of-invulnerability.md), [plane shift](/compendium/spells/plane-shift.md), [wall of force](/compendium/spells/wall-of-force.md)

**3/day each**: [see invisibility](/compendium/spells/see-invisibility.md), [telekinesis](/compendium/spells/telekinesis.md)

## Actions

***Multiattack.*** The githzerai makes three Unarmed Strike attacks.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 5|avg` (`1d8 + 5`) bludgeoning damage plus `dice: 4d8|avg` (`4d8`) psychic damage.

## Legendary Actions

***Strike.*** The githzerai makes one Unarmed Strike attack.

***Teleport.*** The githzerai teleports, along with any equipment it is wearing or carrying, to an unoccupied space it can see within 30 feet of it.

***Change Gravity (Costs 3 Actions).*** The githzerai casts the [reverse gravity](/compendium/spells/reverse-gravity.md) spell, using Wisdom as the spellcasting ability. The spell has the normal effect, except that the githzerai can orient the area in any direction and creatures and objects fall toward the end of the area.

## Lair actions

On initiative count 20 (losing initiative ties), the anarch can take one of the following lair actions; the anarch can't take the same lair action two rounds in a row:

- **Create Object.** The anarch casts the creation spell (as a 9th-level spell) using the unformed substance of Limbo instead of shadow material. If used in Limbo, the object remains until the anarch's [concentration](compendium/rules/status.md#concentration) is broken, regardless of its composition. If the anarch moves more than 120 feet from the object, the anarch's [concentration](compendium/rules/status.md#concentration) breaks.  
- **Move Object.** The anarch can magically move an object it can see within 150 feet of it by making a Wisdom check with advantage. The DC depends on the object's size: DC 5 for Tiny, DC 10 for Small, DC 15 for Medium, DC 20 for Large, and DC 25 for Huge or larger.  
- **Psionic Bolt.** The anarch casts the lightning bolt spell (at 5th level), but the anarch can change the damage type from lightning to cold, fire, psychic, radiant, or thunder. If the spell deals damage other than fire or lightning, it doesn't ignite flammable objects.  

## Regional effects

The region containing an anarch's lair is warped by its presence, which creates one or more of the following effects:

- **Form Substance.** In Limbo, the anarch can spend 10 minutes stabilizing a 5-mile area centered on it, causing the unformed substance to take whatever inanimate form the anarch chooses. During that process, the anarch determines the shape and composition of the forms created.  
- **Stabilize Object.** The anarch stabilizes any object created in Limbo and brought to the Material Plane for as long as the anarch remains within 1 mile of it (no action required).  

If the anarch dies, these effects end after `dice: 1d6|avg` (`1d6`) rounds. All formed substance becomes a chaotic churn of energy and matter, unraveling into unformed substance that dissipates `dice: 1d6|avg` (`1d6`) rounds later.
```
^statblock