---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Stone Golem"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"stats":
- !!int "22"
- !!int "9"
- !!int "20"
- !!int "3"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d8 + 6|avg (3d8 + 6) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The golem targets one or more creatures it can see within 10 feet of it.\
    \ Each target must make a DC 17 Wisdom saving throw against this magic. On a failed\
    \ save, a target can't use reactions, its speed is halved, and it can't make more\
    \ than one attack on its turn. In addition, the target can take either an action\
    \ or a bonus action on its turn, not both. These effects last for 1 minute. A\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Slow (Recharge 5-6)"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "WDMM"
- "GoS"
- "DIP"
- "SLW"
- "BGDIA"
- "IMR"
- "CM"
- "CoS"
- "CRCotN"
- "JttRC"
- "DSotDQ"
- "KftGV"
"image": "/compendium/bestiary/construct/token/stone-golem.png"
aliases: ["Stone Golem"]
---
# Stone Golem
*Source: Monster Manual p. 170, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Candlekeep Mysteries, Curse of Strahd, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Stone golems display great variety in shape and form, cut and chiseled from stone to appear as tall, impressive statues. Though most bear humanoid features, stone golems can be carved in any form the sculptor can imagine. Ancient stone golems found in sealed tombs or flanking the gates of lost cities sometimes take the forms of giant beasts.

Like other golems, stone golems are nearly impervious to spells and ordinary weapons. Creatures that fight a stone golem can feel the ebb and flow of time slow down around them, almost as though they were made of stone themselves.

## Golems

Golems are made from humble materials-clay, flesh and bones, iron, or stone-but they possess astonishing power and durability. A golem has no ambitions, needs no sustenance, feels no pain, and knows no remorse. An unstoppable juggernaut, it exists to follow its creator's orders, and it protects or attacks as that creator demands.

To create a golem, one requires a manual of golems. The comprehensive illustrations and instructions in a manual detail the process for creating a golem of a particular type.

### Elemental Spirit in Material Form

The construction of a golem begins with the building of its body, requiring great command of the craft of sculpting, stonecutting, ironworking, or surgery. Sometimes a golem's creator is the master of the art, but often the individual who desires a golem must enlist master artisans to do the work.

After constructing the body from clay, flesh, iron, or stone, the golem's creator infuses it with a spirit from the Elemental Plane of Earth. This tiny spark of life has no memory, personality, or history. It is simply the impetus to move and obey. This process binds the spirit to the artificial body and subjects it to the will of the golem's creator.

A golem can be created with a special amulet or other item that allows the possessor of the item to control the golem. Golems whose creators are long dead can thus be harnessed to serve a new master.

A golem can't think or act for itself. Though it understands its commands perfectly, it has no grasp of language beyond that understanding, and can't be reasoned with or tricked with words.

### Ageless Guardians

Golems can guard sacred sites, tombs, and treasure vaults long after the deaths of their creators, carrying out their appointed tasks for all eternity while brushing off physical damage and ignoring all but the most potent spells.

### Blind Obedience

When its creator or possessor is on hand to command it, a golem performs flawlessly. If the golem is left without instructions or is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], it continues to follow its last orders to the best of its ability. When it can't fulfill its orders, a golem might react violently-or stand and do nothing. A golem that has been given conflicting orders sometimes alternates between them.

### Constructed Nature

A golem doesn't require air, food, drink, or sleep.

## Stat Block

```ad-statblock
title: Stone Golem
![[/6. Mechanics/Bestiary/Construct/Token/stone-golem.png#token]]
*Large construct, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 17d10 + 85|text(178)` (17d10 + 85) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)| 9 (-1)|20 (+5)| 3 (-4)|11 (+0)| 1 (-5)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Immunities** poison; psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 10

## Traits

***Immutable Form.*** The golem is immune to any spell or effect that would alter its form.

***Magic Resistance.*** The golem has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** The golem's weapon attacks are magical.

## Actions

***Multiattack.*** The golem makes two slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 3d8 + 6` (`3d8 + 6`) bludgeoning damage.

***Slow (Recharge 5-6).*** The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock