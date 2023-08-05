---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Juiblex"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "350"
"hit_dice": "28d12 + 168"
"stats":
- !!int "24"
- !!int "10"
- !!int "23"
- !!int "20"
- !!int "20"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "12"
  "Constitution": !!int "13"
"skillsaves":
  "Perception": !!int "12"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]]\n\n3/day each: [[/6. Mechanics/Spells/contagion.md\|contagion]],\
    \ [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any creature other than an Ooze that starts its turn within 10 feet of\
    \ Juiblex must succeed on a DC 21 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]\
    \ until the start of the creature's next turn."
  "name": "Foul"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Juiblex fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex regains 20 hit points at the start of its turn. If it takes fire\
    \ or radiant damage, this trait doesn't function at the start of its next turn.\
    \ Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex makes three Acid Lash attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+14 (+14 to hit), reach 10\
    \ ft. or range 60/120 ft., one target. Hit: dice: 4d6 + 7|avg (4d6 + 7) acid\
    \ damage. Any creature killed by this attack is drawn into Juiblex's body, where\
    \ the corpse is dissolved after 1 minute."
  "name": "Acid Lash"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex spews out a corrosive slime, targeting one creature that it can\
    \ see within 60 feet of it. The target must succeed on a DC 21 Dexterity saving\
    \ throw or take dice: 10d10|avg (10d10) acid damage. Unless the target avoids\
    \ taking all of this damage, any metal armor worn by the target takes a permanent\
    \ −1 penalty to the AC it offers, and any metal weapon the target is carrying\
    \ or wearing takes a permanent −1 penalty to damage rolls. The penalty worsens\
    \ each time a target is subjected to this effect. If the penalty on an object\
    \ drops to −5, the object is destroyed. The penalty on an object can be removed\
    \ by the [[/6. Mechanics/Spells/mending.md\|mending]] spell."
  "name": "Eject Slime (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Juiblex makes one Acid Lash attack."
  "name": "Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 4d6 + 7|avg (4d6 + 7) poison damage, and the target is slimed.\
    \ Until the slime is scraped off with an action, the target is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]],\
    \ and any creature, other than an Ooze, is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]\
    \ while within 10 feet of the target."
  "name": "Corrupting Touch (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/npc/token/juiblex.png"
aliases: ["Juiblex"]
---
# Juiblex
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 160, Mordenkainen's Tome of Foes p. 151*  

Called the Faceless Lord and the Oozing Hunger in ancient grimoires, Juiblex is demon lord of slime and ooze, a noxious creature that doesn't care about the plots and schemes of others of its kind. It exists only to consume, digesting and transforming living matter into more of itself.

A true horror, Juiblex is a mass of bubbling slime, swirling black and green, with glaring red eyes floating and shifting within it. It can rise up like a 20-foot hill, lashing out with dripping pseudopods to drag victims into its bulk. Those consumed by Juiblex are obliterated.

## Cultists of Juiblex

> [!note]
> See the Cult of Juiblex entry.

## Juiblex's Lair

Juiblex's principal lair is known as the Slime Pits, a realm that Juiblex shares with [[/6. Mechanics/Bestiary/Npc/zuggtmoy-mpmm.md\|Zuggtmoy]] (who also appears in this book). This layer of the Abyss, which is also known as Shedaklah, is a bubbling morass of fetid sludge. The landscape is covered in vast expanses of caustic slimes, and strange organic forms rise from the oceans of ooze at Juiblex's command.

Juiblex's challenge rating is 24 (62,000 XP) when encountered in its lair.

## Stat Block

```ad-statblock
title: Juiblex
![[/6. Mechanics/Bestiary/Npc/Token/juiblex.png#token]]
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 28d12 + 168|text(350)` (28d12 + 168) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|10 (+0)|23 (+6)|20 (+5)|20 (+5)|16 (+3)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +7, Constitution +13, Wisdom +12
- **Skills** Perception +12
- **Senses** truesight 120 ft., passive Perception 22
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** acid; poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious
- **Languages** all, telepathy 120 ft.
- **Challenge** 23

## Traits

***Foul.*** Any creature other than an Ooze that starts its turn within 10 feet of Juiblex must succeed on a DC 21 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the start of the creature's next turn.

***Legendary Resistance (3/Day).*** If Juiblex fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** Juiblex has advantage on saving throws against spells and other magical effects.

***Regeneration.*** Juiblex regains 20 hit points at the start of its turn. If it takes fire or radiant damage, this trait doesn't function at the start of its next turn. Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate.

***Spider Climb.*** Juiblex can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Spellcasting.*** Juiblex casts one of the following spells, requiring no material components and using Wisdom as the spellcasting ability (spell save DC 20):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]]

**3/day each**: [[/6. Mechanics/Spells/contagion.md\|contagion]], [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]]

## Actions

***Multiattack.*** Juiblex makes three Acid Lash attacks.

***Acid Lash.*** *Melee or Ranged Weapon Attack:* `dice: d20+14` (+14 to hit), reach 10 ft. or range 60/120 ft., one target. Hit: `dice: 4d6 + 7` (`4d6 + 7`) acid damage. Any creature killed by this attack is drawn into Juiblex's body, where the corpse is dissolved after 1 minute.

***Eject Slime (Recharge 5-6).*** Juiblex spews out a corrosive slime, targeting one creature that it can see within 60 feet of it. The target must succeed on a DC 21 Dexterity saving throw or take `dice: 10d10` (`10d10`) acid damage. Unless the target avoids taking all of this damage, any metal armor worn by the target takes a permanent −1 penalty to the AC it offers, and any metal weapon the target is carrying or wearing takes a permanent −1 penalty to damage rolls. The penalty worsens each time a target is subjected to this effect. If the penalty on an object drops to −5, the object is destroyed. The penalty on an object can be removed by the [[/6. Mechanics/Spells/mending.md\|mending]] spell.

## Legendary Actions

***Attack.*** Juiblex makes one Acid Lash attack.

***Corrupting Touch (Costs 2 Actions).*** *Melee Weapon Attack:* `dice: d20+14` (+14 to hit), reach 10 ft., one creature. Hit: `dice: 4d6 + 7` (`4d6 + 7`) poison damage, and the target is slimed. Until the slime is scraped off with an action, the target is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]], and any creature, other than an Ooze, is [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] while within 10 feet of the target.

## Lair actions

On initiative count 20 (losing initiative ties), Juiblex can take one of the following lair actions; it can't take the same lair action two rounds in a row:

- **Green Slime.** A green slime (see the Dungeon Master's Guide) appears on a spot on the ceiling that Juiblex chooses within the lair. The slime disintegrates after 1 hour.  
- **Slippery Slime.** Juiblex slimes a square area of ground it can see within the lair. The area can be up to 10 feet on a side. When the slime appears, each creature on it must succeed on a DC 21 Dexterity saving throw or fall [[6. Mechanics/Rules/conditions.md#prone\|prone]] and slide 10 feet in a random direction determined by a `dice: d8` (`d8`) roll. When a creature enters the area for the first time on a turn or ends its turn there, that creature must make the same save.  

    The slime lasts for 1 hour or until it is burned away with fire. If the slime is set on fire, it burns away after 1 round. Any creature that starts its turn in the burning slime takes `dice: 4d10` (`4d10`) fire damage.  
- **Sticky Slime.** Juiblex slimes a square area of ground it can see within the lair. The area can be up to 10 feet on a side. When the slime appears, each creature in that area must succeed on a DC 21 Strength saving throw or become [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. When a creature enters the area for the first time on a turn or ends its turn there, that creature must make the same save.  

    A [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] creature is stuck as long as it remains in the slimy area or until it breaks free. The [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] creature, or another creature that can reach it, can use its action to try to break free and must succeed on a DC 21 Strength check. The slime lasts for 1 hour or until it is burned away with fire. If the slime is set on fire, it burns away after 1 round. Any creature that starts its turn in the burning slime takes `dice: 4d10` (`4d10`) fire damage.  

## Regional effects

The region containing Juiblex's lair is warped by its magic, creating one or more of the following effects:

- **Acidic Water.** Small bodies of water, such as ponds or wells, within 1 mile of the lair turn highly acidic, corroding any object that touches them.  
- **Corrupted Nature.** Within 6 miles of the lair, all Wisdom ([[6. Mechanics/Rules/skills.md#Medicine\|Medicine]]) and Wisdom ([[6. Mechanics/Rules/skills.md#Survival\|Survival]]) checks have disadvantage.  
- **Slime.** Surfaces within 6 miles of the lair are frequently covered by a thin film of slime, which is slick and sticks to anything that touches it.  

If Juiblex dies, these effects fade over the course of `dice: 1d10` (`1d10`) days.
```
^statblock