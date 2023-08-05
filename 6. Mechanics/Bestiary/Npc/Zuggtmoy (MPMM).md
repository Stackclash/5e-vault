---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Zuggtmoy"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "304"
"hit_dice": "32d10 + 128"
"stats":
- !!int "22"
- !!int "15"
- !!int "18"
- !!int "20"
- !!int "19"
- !!int "24"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/locate-animals-or-plants.md\|locate animals or plants]]\n\
    \n1/day each: [[/6. Mechanics/Spells/etherealness.md\|etherealness]], [[/6. Mechanics/Spells/teleport.md\|teleport]]\n\
    \n3/day each: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/entangle.md\|entangle]],\
    \ [[/6. Mechanics/Spells/plant-growth.md\|plant growth]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy makes three Pseudopod attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: ++13 to hit, reach 10 ft., one target. Hit: dice:\
    \ 2d8 + 6|avg (2d8 + 6) force damage plus dice: 2d8|avg (2d8) poison damage."
  "name": "Pseudopod"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Any creature in the cloud\
    \ when it appears, or that enters it later, must make a DC 19 Constitution saving\
    \ throw. On a successful save, the creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the spores of Zuggtmoy, which lasts until the creature is cured of the disease\
    \ or dies. While infected in this way, the creature can't be reinfected, and it\
    \ must repeat the saving throw at the end of every 24 hours, ending the infection\
    \ on a success. On a failure, the infected creature's body is slowly taken over\
    \ by fungal growth, and after three such failed saves, the creature dies and is\
    \ reanimated as a [[/6. Mechanics/Bestiary/Plant/quaggoth-spore-servant.md\|spore servant]]\
    \ if it's a type of creature that can be."
  "name": "Infestation Spores (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in\
    \ the cloud when it appears, or that enter it later, must make a DC 19 Wisdom\
    \ saving throw. On a successful save, a creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the influence of Zuggtmoy for 24 hours. While infected in this way, the creature\
    \ is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by her and can't be reinfected\
    \ by these spores."
  "name": "Mind Control Spores (Recharge 5-6)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When Zuggtmoy is hit by an attack roll, one creature within 10 feet of\
    \ her that is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by her is hit\
    \ by the attack instead."
  "name": "Protective Thrall"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zuggtmoy makes one Pseudopod attack."
  "name": "Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "One creature [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by Zuggtmoy\
    \ that she can see must use its reaction, if a available, to move up to its speed\
    \ as she directs or to make one weapon attack against a target that she designates."
  "name": "Exert Will"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/npc/token/zuggtmoy.png"
aliases: ["Zuggtmoy"]
---
# Zuggtmoy
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 281, Mordenkainen's Tome of Foes p. 157*  

The Demon Queen of Fungi, Lady of Rot and Decay, Zuggtmoy is an alien creature whose only desire is to infect the living with spores, transforming them into her mindless servants and, eventually, into decomposing hosts for the mushrooms, molds, and other fungi that she spawns.

Utterly inhuman, Zuggtmoy can mold her fungoid form into an approximation of a humanoid shape, including the skeletal-thin figure depicted in grimoires and ancient art, draped and veiled in mycelia and lichen. Indeed, much of her appearance and manner, and that of her servants, is a soulless mockery of mortal life and its many facets.

Zuggtmoy's cultists often follow her unwittingly. Most are fungi—infected to some degree, whether through inhaling her mind-controlling spores or being transformed to the point where flesh and fungus become one. Such cultists are fungal extensions of the Demon Queen's will.

Their devotion might begin with the seemingly harmless promises offered by exotic spores and mushrooms, but quickly consumes them, body and soul.

## Cultists of Zuggtmoy

> [!note]
> See the Cult of Zuggtmoy entry.

## Zuggtmoy's Lair

Zuggtmoy's principal lair is her palace on Shedaklah. It consists of two dozen mushrooms of pale yellow and rancid brown. These massive fungi are some of the largest in existence. They are surrounded by a field of acidic puffballs and poisonous vapors. The mushrooms themselves are all interconnected by bridges of shelf-fungi, and countless chambers have been hollowed out from within their rubbery, fibrous stalks.

## Stat Block

```ad-statblock
title: Zuggtmoy
![[/6. Mechanics/Bestiary/Npc/Token/zuggtmoy.png#token]]
*Large fiend(demon), Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 32d10 + 128|text(304)` (32d10 + 128) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)|15 (+2)|18 (+4)|20 (+5)|19 (+4)|24 (+7)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +9, Constitution +11, Wisdom +11
- **Skills** Perception +11
- **Senses** truesight 120 ft., passive Perception 21
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 23

## Traits

***Legendary Resistance (3/Day).*** If Zuggtmoy fails a saving throw, she can choose to succeed instead.

***Magic Resistance.*** Zuggtmoy has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** Zuggtmoy casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 22):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/locate-animals-or-plants.md\|locate animals or plants]]

**1/day each**: [[/6. Mechanics/Spells/etherealness.md\|etherealness]], [[/6. Mechanics/Spells/teleport.md\|teleport]]

**3/day each**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/entangle.md\|entangle]], [[/6. Mechanics/Spells/plant-growth.md\|plant growth]]

## Actions

***Multiattack.*** Zuggtmoy makes three Pseudopod attacks.

***Pseudopod.*** *Melee Weapon Attack:* ++13 to hit, reach 10 ft., one target. Hit: `dice: 2d8 + 6` (`2d8 + 6`) force damage plus `dice: 2d8` (`2d8`) poison damage.

## Bonus Actions

***Infestation Spores (3/Day).*** Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Any creature in the cloud when it appears, or that enters it later, must make a DC 19 Constitution saving throw. On a successful save, the creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the spores of Zuggtmoy, which lasts until the creature is cured of the disease or dies. While infected in this way, the creature can't be reinfected, and it must repeat the saving throw at the end of every 24 hours, ending the infection on a success. On a failure, the infected creature's body is slowly taken over by fungal growth, and after three such failed saves, the creature dies and is reanimated as a [[/6. Mechanics/Bestiary/Plant/quaggoth-spore-servant.md\|spore servant]] if it's a type of creature that can be.

***Mind Control Spores (Recharge 5-6).*** Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom saving throw. On a successful save, a creature can't be infected by these spores for 24 hours. On a failed save, the creature is infected with a disease called the influence of Zuggtmoy for 24 hours. While infected in this way, the creature is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by her and can't be reinfected by these spores.

## Reactions

***Protective Thrall.*** When Zuggtmoy is hit by an attack roll, one creature within 10 feet of her that is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by her is hit by the attack instead.

## Legendary Actions

***Attack.*** Zuggtmoy makes one Pseudopod attack.

***Exert Will.*** One creature [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by Zuggtmoy that she can see must use its reaction, if a available, to move up to its speed as she directs or to make one weapon attack against a target that she designates.

## Lair actions

On Initiative count 20 (losing initiative ties), Zuggtmoy can take a lair action to cause one of the following effects; she can't use the same effect two rounds in a row:

- **Rally Plants.** Up to four plant creatures that are friendly to Zuggtmoy and that Zuggtmoy can see can use their reactions to move up to their speed and make one weapon attack.  
- **Summon Fungi.** Zuggtmoy causes four [[/6. Mechanics/Bestiary/Plant/gas-spore.md\|gas spores]] or [[/6. Mechanics/Bestiary/Plant/violet-fungus.md\|violet fungi]] to appear in unoccupied spaces that she chooses within the lair. They vanish after 1 hour.  
- **Unleash Spores.** Zuggtmoy uses either her Infestation Spores or her Mind Control Spores, centered on a mushroom or other fungus within her lair, instead of on herself.  

## Regional effects

The region containing Zuggtmoy's lair is warped by his magic, creating one or more of the following effects:

- **Corrupted Nature.** Within 6 miles of the lair, all Wisdom ([[6. Mechanics/Rules/skills.md#Medicine\|Medicine]]) and Wisdom ([[6. Mechanics/Rules/skills.md#Survival\|Survival]]) checks have disadvantage.  
- **Fungal Infestation.** Molds and fungi grow on surfaces within 6 miles of the lair, even where they would normally find no purchase.  
- **Mutating Vegetation.** Vegetation within 1 mile of the lair becomes infested with parasitic fungi, slowly mutating as it is overwhelmed.  
- If Zuggtmoy dies, these effects fade over the course of `dice: 1d10` (`1d10`) days.  
```
^statblock