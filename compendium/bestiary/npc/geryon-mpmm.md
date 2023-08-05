---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
"name": "Geryon"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "29"
- !!int "17"
- !!int "22"
- !!int "19"
- !!int "16"
- !!int "23"
"speed": "walk 30 ft., fly 50 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "22"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [alter self](/compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [detect magic](/compendium/spells/detect-magic.md), [ice storm](/compendium/spells/ice-storm.md),\
    \ [invisibility](/compendium/spells/invisibility.md) (self only), [locate object](/compendium/spells/locate-object.md),\
    \ [suggestion](/compendium/spells/suggestion.md), [wall of ice](/compendium/spells/wall-of-ice.md)\n\
    \n1/day: [banishment](/compendium/spells/banishment.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Geryon fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Geryon dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon makes one Claw attack and one Stinger attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one target.\
    \ Hit: dice: 4d6 + 9|avg (4d6 + 9) cold damage. If the target is Large or\
    \ smaller, it is [grappled](compendium/rules/conditions.md#grappled) (DC 24),\
    \ and it is [restrained](compendium/rules/conditions.md#restrained) until the\
    \ grapple ends. Geryon can grapple one creature at a time. If the target is already\
    \ [grappled](compendium/rules/conditions.md#grappled) by Geryon, the target takes\
    \ an extra 27 (dice: 6d8|avg (6d8)) cold damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 20 ft., one creature.\
    \ Hit: dice: 2d4 + 9|avg (2d4 + 9) force damage, and the target must succeed\
    \ on a DC 21 Constitution saving throw or take dice: 2d12|avg (2d12) poison\
    \ damage and become [poisoned](compendium/rules/conditions.md#poisoned) until\
    \ it finishes a short or long rest. The target's hit point maximum is reduced\
    \ by an amount equal to half the poison damage taken. This reduction lasts until\
    \ the [poisoned](compendium/rules/conditions.md#poisoned) condition is removed.\
    \ The target dies if its hit point maximum is reduced to 0."
  "name": "Stinger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon targets one creature he can see within 60 feet of him. The target\
    \ must succeed on a DC 23 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened)\
    \ of Geryon until the end of its next turn."
  "name": "Infernal Glare"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Geryon makes one Stinger attack."
  "name": "Swift Sting (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/npc/token/geryon.png"
aliases: ["Geryon"]
---
# Geryon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 136, Mordenkainen's Tome of Foes p. 173*  

Geryon is locked in an endless struggle with Levistus for control of Stygia. The two have fought for centuries, each displacing the other innumerable times. Currently, Levistus claims lordship over Stygia, but he has been trapped in an enormous block of ice at the command of Asmodeus. In response, Geryon is marshaling his followers, hoping to use this opportunity to replace his hated rival.

Among the archdevils, Geryon is known for his martial prowess. He is a ferocious hunter and a relentless tracker. He often joins his troops in battle; he loves to feel flesh and steel sundered beneath his claws and to taste his foes' blood. Yet Geryon's ferocity has also limited his ability to collect souls and forge an effective hierarchy. Sages who study the Nine Hells believe the battle for control of Stygia is a test staged by Asmodeus in hopes of purging the worst impulses from both Geryon and Levistus—or discovering a competent replacement for both.

## Cultists of Geryon

> [!note]
> See the Cult of Geryon entry.

## Geryon's Lair

Geryon has recently reclaimed his ancient fortress, Coldsteel, a sprawling complex that rises from the icy center of Stygia. He roams the passages, spitting oaths of vengeance against Asmodeus and hatching schemes to reclaim his standing from Levistus. The challenge rating of Geryon is 23 (50,000 XP) when he's encountered in his lair.

## Stat Block

```ad-statblock
title: Geryon
![](/compendium/bestiary/npc/token/geryon.png#token)
*Huge fiend(devil), Lawful Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 24d12 + 144|text(300)` (24d12 + 144) 
- **Speed** walk 30 ft., fly 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|29 (+9)|17 (+3)|22 (+6)|19 (+4)|16 (+3)|23 (+6)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +10, Constitution +13, Wisdom +10, Charisma +13
- **Skills** Deception +13, Intimidation +13, Perception +10
- **Senses** truesight 120 ft., passive Perception 20
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** cold, fire, poison
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 22

## Traits

***Legendary Resistance (3/Day).*** If Geryon fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Geryon has advantage on saving throws against spells and other magical effects.

***Regeneration.*** Geryon regains 20 hit points at the start of his turn. If he takes radiant damage, this trait doesn't function at the start of his next turn. Geryon dies only if he starts his turn with 0 hit points and doesn't regenerate.

***Spellcasting.*** Geryon casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 21):

**At will**: [alter self](/compendium/spells/alter-self.md) (can become Medium when changing his appearance), [detect magic](/compendium/spells/detect-magic.md), [ice storm](/compendium/spells/ice-storm.md), [invisibility](/compendium/spells/invisibility.md) (self only), [locate object](/compendium/spells/locate-object.md), [suggestion](/compendium/spells/suggestion.md), [wall of ice](/compendium/spells/wall-of-ice.md)

**1/day**: [banishment](/compendium/spells/banishment.md)

## Actions

***Multiattack.*** Geryon makes one Claw attack and one Stinger attack.

***Claw.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 15 ft., one target. Hit: `dice: 4d6 + 9|avg` (`4d6 + 9`) cold damage. If the target is Large or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (DC 24), and it is [restrained](compendium/rules/conditions.md#restrained) until the grapple ends. Geryon can grapple one creature at a time. If the target is already [grappled](compendium/rules/conditions.md#grappled) by Geryon, the target takes an extra 27 (`dice: 6d8|avg` (`6d8`)) cold damage.

***Stinger.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 20 ft., one creature. Hit: `dice: 2d4 + 9|avg` (`2d4 + 9`) force damage, and the target must succeed on a DC 21 Constitution saving throw or take `dice: 2d12|avg` (`2d12`) poison damage and become [poisoned](compendium/rules/conditions.md#poisoned) until it finishes a short or long rest. The target's hit point maximum is reduced by an amount equal to half the poison damage taken. This reduction lasts until the [poisoned](compendium/rules/conditions.md#poisoned) condition is removed. The target dies if its hit point maximum is reduced to 0.

***Teleport.*** Geryon teleports, along with any equipment he is wearing and carrying, up to 120 feet to an unoccupied space he can see.

## Legendary Actions

***Infernal Glare.*** Geryon targets one creature he can see within 60 feet of him. The target must succeed on a DC 23 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) of Geryon until the end of its next turn.

***Teleport.*** Geryon uses Teleport.

***Swift Sting (Costs 2 Actions).*** Geryon makes one Stinger attack.

## Lair actions

On initiative count 20 (losing initiative ties), Geryon can take one of the following lair actions; he can't take the same lair action two rounds in a row:

- **Banish.** Geryon casts the banishment spell.  
- **Chill Blast.** Geryon causes a blast of cold to burst from the ground at a point he can see within 120 feet of him. The cold fills a cube, 10 feet on each side, centered on that point. Each creature in that area must succeed on a DC 21 Constitution saving throw or take `dice: 8d6|avg` (`8d6`) cold damage.  
- **Hateful Restraints.** Geryon targets one creature he can see within 60 feet of him. The target must succeed on a DC 21 Wisdom saving throw or become [restrained](compendium/rules/conditions.md#restrained) for 1 minute. The target can end the effect on itself if it deals any damage to one or more of its allies.  

## Regional effects

The region containing Geryon's lair is warped by his magic, creating one or more of the following effects:

- **Chilling Wind.** Freezing strong winds howl around the area within 1 mile of the lair.  
- **Enervating Screams.** Howls and screams fill the air within 1 mile of the lair. Any creature that finishes a short or long rest in this area must succeed on a DC 21 Wisdom saving throw or derive no benefit from the rest.  
- **Hellish Doorways.** Sapient creatures within 1 mile of the lair frequently see shimmering portals leading to places they consider safe. Passing through a portal always deposits a traveler somewhere in Stygia.  

If Geryon dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.
```
^statblock