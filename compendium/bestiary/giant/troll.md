---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/underdark
- monster/size/large
- monster/type/giant
statblock: true
statblock-link: "#^statblock"
"name": "Troll"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"stats":
- !!int "18"
- !!int "13"
- !!int "20"
- !!int "7"
- !!int "9"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The troll has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
    \ takes acid or fire damage, this trait doesn't function at the start of the troll's\
    \ next turn. The troll dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The troll makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Claw"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "SLW"
- "EGW"
"image": "/compendium/bestiary/giant/token/troll.png"
aliases: ["Troll"]
---
# Troll
*Source: Monster Manual p. 291, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Storm Lord's Wrath, Explorer's Guide to Wildemount*  

Born with horrific appetites, trolls eat anything they can catch and devour. They have no society to speak of, but they do serve as mercenaries to orcs, ogres, ettins, hags, and giants. As payment, trolls demand food and treasure. Trolls are difficult to control, however, doing as they please even when working with more powerful creatures.

## Regeneration

Smashing a troll's bones and slashing through its rubbery hide only makes it angry. A troll's wounds close quickly. If the monster loses an arm, a leg, or even its head, those dismembered parts can sometimes act with a life of their own. A troll can even reattach severed body parts, untroubled by its momentary disability. Only acid and fire can arrest the regenerative properties of a troll's flesh. The trolls, enraged, will attack individuals making acid and fire attacks against them above all other prey.

## Troll Freaks

Their regenerative capabilities make trolls especially susceptible to mutation. Although uncommon, such transformations can result from what the troll has done or what has been done to it. A decapitated troll might grow two heads from the stump of its neck, while a troll that eats a fey creature might gain one or more of that creature's traits.

## Stat Block

```ad-statblock
title: Troll
![](/compendium/bestiary/giant/token/troll.png#token)
*Large giant, Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 8d10 + 40|text(84)` (8d10 + 40) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|20 (+5)| 7 (-2)| 9 (-1)| 7 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Perception +2
- **Senses** darkvision 60 ft., passive Perception 12
- **Languages** Giant
- **Challenge** 5

## Traits

***Keen Smell.*** The troll has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on smell.

***Regeneration.*** The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.

## Actions

***Multiattack.*** The troll makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4|avg` (`1d6 + 4`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) slashing damage.
```
^statblock

## Environment

underdark, mountain, forest, swamp, hill, arctic