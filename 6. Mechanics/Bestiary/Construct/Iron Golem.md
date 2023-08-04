---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
name: Iron Golem
ac: 20
hp: 210
hit_dice: 20d10 + 100
cr: '16'
stats: [
  24,
  9,
  20,
  3,
  11,
  1
]
source: [
  MM,
  CoS,
  SKT,
  WDMM,
  GoS,
  EGW,
  MOT,
  IDRotF
]
aliases: ["Iron Golem"]
---
# Iron Golem
*Source: Monster Manual p. 170, Curse of Strahd, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden*  

The mightiest of the golems, the iron golem is a massive, towering giant wrought of heavy metal. An iron golem's shape can be worked into any form, though most are fashioned to look like giant suits of armor. Its fist can destroy creatures with a single blow, and its clanging steps shake the earth beneath its feet. Iron golems wield enormous blades to extend their reach, and all can belch clouds of deadly poison.

An iron golem's body is smelted with rare tinctures and admixtures. Though other golems bear weaknesses inherent in their materials or the power of the elemental spirit bound within them, iron golems were designed to be nearly invulnerable. Their iron bodies imprison the spirits that drive them, and are susceptible only to weapons imbued with magic or the strength of adamantine.

> [!quote]- A quote from Mordenkainen the Archmage  
> 
> Beyond the unopenable doors lay a grand hall ending before a towering stone throne, upon which sat an iron statue taller and wider than two men. In one  and it clutched an iron sword, in the other, a feather whip. We should have turned back then.

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
title: Iron Golem
![[/6. Mechanics/Bestiary/Construct/Token/iron-golem.png#token]]
*Large construct, Unaligned*

- **Armor Class** 20 (natural armor)
- **Hit Points** `dice: 20d10 + 100|text(210)` (20d10 + 100) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)| 9 (-1)|20 (+5)| 3 (-4)|11 (+0)| 1 (-5)|

- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Immunities** fire; poison; psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands the languages of its creator but can't speak
- **Challenge** 16

## Traits

***Fire Absorption.*** Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.

***Immutable Form.*** The golem is immune to any spell or effect that would alter its form.

***Magic Resistance.*** The golem has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** The golem's weapon attacks are magical.

## Actions

***Multiattack.*** The golem makes two melee attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 5 ft., one target. Hit: `dice: 3d8 + 7\|avg` (`3d8 + 7`) bludgeoning damage.

***Sword.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 10 ft., one target. Hit: `dice: 3d10 + 7\|avg` (`3d10 + 7`) slashing damage.

***Poison Breath (Recharge 5-6).*** The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (`dice: 10d8\|avg` (`10d8`)) poison damage on a failed save, or half as much damage on a successful one.
```
^statblock