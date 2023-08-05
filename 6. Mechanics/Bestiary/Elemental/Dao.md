---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Dao"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "187"
"hit_dice": "15d10 + 105"
"stats":
- !!int "23"
- !!int "12"
- !!int "24"
- !!int "12"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft., burrow 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "5"
"condition_immunities": "petrified"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Terran"
"cr": "11"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dao's innate spellcasting ability is Charisma (spell save DC 14, dice:\
    \ d20+6 (+6 to hit) with spell attacks). It can innately cast the following spells,\
    \ requiring no material components:\n\nAt will: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]],\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/stone-shape.md\|stone shape]]\n\
    \n1/day each: [[/6. Mechanics/Spells/conjure-elemental.md\|conjure elemental]]\
    \ ([[/6. Mechanics/Bestiary/Elemental/earth-elemental.md\|earth elemental]] only),\
    \ [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]],\
    \ [[/6. Mechanics/Spells/phantasmal-killer.md\|phantasmal killer]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]],\
    \ [[/6. Mechanics/Spells/wall-of-stone.md\|wall of stone]]\n\n3/day each: [[/6. Mechanics/Spells/passwall.md\|passwall]],\
    \ [[/6. Mechanics/Spells/move-earth.md\|move earth]], [[/6. Mechanics/Spells/tongues.md\|tongues]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dao can burrow through nonmagical, unworked earth and stone. While\
    \ doing so, the dao doesn't disturb the material it moves through."
  "name": "Earth Glide"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the dao dies, its body disintegrates into crystalline powder, leaving\
    \ behind only equipment the dao was wearing or carrying."
  "name": "Elemental Demise"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dao has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Sure-Footed"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Dao makes two fist attacks or two maul attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 6|avg (2d8 + 6) bludgeoning damage."
  "name": "Fist"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 6|avg (4d6 + 6) bludgeoning damage. If the target is a\
    \ Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked\
    \ [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Maul"
"source":
- "MM"
- "PotA"
- "RoT"
- "ToA"
- "WDMM"
- "BGDIA"
- "TCE"
- "CM"
"image": "/compendium/bestiary/elemental/token/dao.png"
aliases: ["Dao"]
---
# Dao
*Source: Monster Manual p. 143, Princes of the Apocalypse, The Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Tasha's Cauldron of Everything, Candlekeep Mysteries*  

Dao are greedy, malicious genies from the Elemental Plane of Earth. They adorn themselves with jewelry crafted from precious gems and rare metals, and when they fly, their lower bodies become columns of swirling sand. A dao isn't happy unless it is the envy of other dao.

## All That Glitters

The dao dwell in complexes of twisting tunnels and glittering ore-veined caverns on the Elemental Plane of Earth. These maze works are continually expanding as the dao delve into and reshape the rock around them. Dao care nothing for the poverty or misfortune of others. A dao might grind powdered gems and gold dust over its food to heighten the experience of eating, devouring its wealth as mortals consume a precious spice.

## Lords of the Earth

A dao never assists a mortal unless the genie has something to gain, preferably treasure. Among the genies, dao are on speaking and trading terms with the efreet, but they have nothing but scorn for djinn and marids. Other races native to the Elemental Plane of Earth avoid the dao, which are always seeking new slaves to mine the maze works of their floating earth islands.

## Proud Slavers

The dao trade for the finest slaves that money can buy, forcing them to work in dangerous subterranean realms that rumble with earthquakes. As much as they enjoy enslaving others, the dao hate being enslaved. Powerful wizards have been known to lure dao to the Material Plane and trap them in the confines of magic gemstones or iron flasks. Unfortunately for the dao, their greed makes it relatively easy for mages to cozen them into service.

## Genies

Genies are rare elemental creatures out of story and legend. Only a few can be found on the Material Plane. The rest reside on the Elemental Planes, where they rule from lavish palaces and are attended by worshipful slaves.

Genies are as brilliant as they are mighty, as proud as they are majestic. Haughty and decadent, they have a profound sense of entitlement that stems from the knowledge that few creatures except the gods and other genies can challenge their power.

### Creatures of the Elements

A genie is born when the soul of a sentient living creature melds with the primordial matter of an elemental plane. Only under rare circumstances does such an elemental-infused soul coalesce into a manifest form and create a genie.

A genie usually retains no connection to the soul that gave it form. That life force is a building block that determines the genie's form and apparent gender, as well as one or two key personality traits. Although they resemble humanoid beings, genies are elemental spirits given physical form. They don't mate with other genies or produce genie offspring, as all new genies are born out of the same mysterious fusion of spirit energy and elemental power. A genie with a stronger connection to its mortal soul might choose to sire a child with a mortal, although such offspring are rare.

When a genie perishes, it leaves nothing behind except what it was wearing or carrying, along with a small trace of its native element: a pile of dust, a gust of wind, a flash of fire and smoke, or a burst of water and foam.

In contrast to their love of slaves, most genies loathe being bound to service themselves. A genie obeys the will of another only when bribed or compelled by magic. All genies command the power of their native element, but a rare few also possess the power to grant wishes. For both these reasons, mortal mages often seek to bind genies into service.

Noble genies cultivate the jealousy and envy of other genies, asserting their superiority at every opportunity. Other genies respect the influence of the noble genies, knowing how unwise it is to defy a creature that can alter reality at a whim. A genie isn't beholden to any noble genie, however, and will sometimes choose to defy a noble genie's will and risk the consequences.

Their miraculous powers, the grandeur of their abodes, and the numbers of their slaves allow some genies to deceive themselves into believing they are as powerful as the gods. Some go so far as to demand that mortals of other realms-even whole continents or worlds-bow down before them.

### Rule or Be Ruled

Mortal slaves serve to validate a genie's power and high self-opinion. A hundred flattering voices are music to a genie's ears, while two hundred mortal slaves prostrated at its feet are proof that it is lord and master. Genies view slaves as living property, and a genie without property amounts to nothing among its own kind. As a result, many genies treasure their slaves, treating them as honored members of their households. Evil genies freely threaten and abuse their slaves, but never to the extent that the slaves are no longer of use.

### Decadent Nobility

Noble genies are the rarest of their kind. They are used to getting what they want, and have learned to trade their ability to grant wishes to attain the objects of their desire. This constant indulgence has made them decadent, while their supreme power over reality makes them haughty and arrogant. Their vast palaces overflow with wonders and sensory delights beyond imagination.

### The Power of Worship

Genies acknowledge the gods as powerful entities but have no desire to court or worship them. They find the endless fawning and mewling of religious devotees tiresome-except as it is directed toward them by their worshipful slaves.

## Stat Block

```ad-statblock
title: Dao
![[/6. Mechanics/Bestiary/Elemental/Token/dao.png#token]]
*Large elemental, Neutral Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 15d10 + 105|text(187)` (15d10 + 105) 
- **Speed** walk 30 ft., burrow 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|12 (+1)|24 (+7)|12 (+1)|13 (+1)|14 (+2)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +5, Wisdom +5, Charisma +6
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 11
- **Condition Immunities** petrified
- **Languages** Terran
- **Challenge** 11

## Traits

***Earth Glide.*** The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through.

***Elemental Demise.*** If the dao dies, its body disintegrates into crystalline powder, leaving behind only equipment the dao was wearing or carrying.

***Sure-Footed.*** The dao has advantage on Strength and Dexterity saving throws made against effects that would knock it [[6. Mechanics/Rules/conditions.md#prone\|prone]].

***Innate Spellcasting.*** The dao's innate spellcasting ability is Charisma (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). It can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]], [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/stone-shape.md\|stone shape]]

**1/day each**: [[/6. Mechanics/Spells/conjure-elemental.md\|conjure elemental]] ([[/6. Mechanics/Bestiary/Elemental/earth-elemental.md\|earth elemental]] only), [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]], [[/6. Mechanics/Spells/phantasmal-killer.md\|phantasmal killer]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]], [[/6. Mechanics/Spells/wall-of-stone.md\|wall of stone]]

**3/day each**: [[/6. Mechanics/Spells/passwall.md\|passwall]], [[/6. Mechanics/Spells/move-earth.md\|move earth]], [[/6. Mechanics/Spells/tongues.md\|tongues]]

## Actions

***Multiattack.*** The Dao makes two fist attacks or two maul attacks.

***Fist.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 6` (`2d8 + 6`) bludgeoning damage.

***Maul.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 6` (`4d6 + 6`) bludgeoning damage. If the target is a Huge or smaller creature, it must succeed on a DC 18 Strength check or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

underdark