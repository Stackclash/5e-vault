---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Sacred Statue"
"size": "Large"
"type": "construct"
"alignment": "as the eidolon's alignment"
"ac": !!int "19"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "19"
- !!int "8"
- !!int "19"
- !!int "14"
- !!int "19"
- !!int "16"
"speed": "walk 25 ft."
"saves":
  "Wisdom": !!int "8"
"damage_resistances": "acid; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages the [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]]\
  \ knew in life"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the statue is motionless at the start of combat, it has advantage on\
    \ its initiative roll. Moreover, if a creature hasn't observed the statue move\
    \ or act, that creature must succeed on a DC 18 Intelligence ([[6. Mechanics/Rules/skills.md#Investigation\|Investigation]])\
    \ check to discern that the statue isn't an object."
  "name": "False Appearance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] that enters\
    \ the statue remains inside it until the statue drops to 0 hit points, the eidolon\
    \ uses a bonus action to move out of the statue, or the eidolon is turned or forced\
    \ out by an effect such as the [[/6. Mechanics/Spells/dispel-evil-and-good.md\|dispel evil and good]]\
    \ spell. When the eidolon leaves the statue, it appears in an unoccupied space\
    \ within 5 feet of the statue."
  "name": "Ghostly Inhabitant"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Without an [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] inside,\
    \ the statue is an object."
  "name": "Inert"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The statue doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The statue makes two Slam or Rock attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 6d12 + 4|avg (6d12 + 4) bludgeoning damage."
  "name": "Slam"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+8 (+8 to hit), range 60 ft./240 ft.,\
    \ one target. Hit: dice: 6d10 + 4|avg (6d10 + 4) bludgeoning damage."
  "name": "Rock"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/construct/token/sacred-statue.png"
aliases: ["Sacred Statue"]
---
# Sacred Statue
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*  

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] plunges into a [[/6. Mechanics/Bestiary/Construct/Sacred Statue (MPMM).md\|statue]] specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```ad-statblock
title: Sacred Statue
![[/6. Mechanics/Bestiary/Construct/Token/sacred-statue.png#token]]
*Large construct, as the eidolon's alignment*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 10d10 + 40|text(95)` (10d10 + 40) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 8 (-1)|19 (+4)|14 (+2)|19 (+4)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +8
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** acid; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** the languages the [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] knew in life
- **Challenge** 

## Traits

***False Appearance.*** If the statue is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the statue move or act, that creature must succeed on a DC 18 Intelligence ([[6. Mechanics/Rules/skills.md#Investigation\|Investigation]]) check to discern that the statue isn't an object.

***Ghostly Inhabitant.*** The [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] that enters the statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the [[/6. Mechanics/Spells/dispel-evil-and-good.md\|dispel evil and good]] spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 feet of the statue.

***Inert.*** Without an [[/6. Mechanics/Bestiary/Undead/eidolon-mpmm.md\|eidolon]] inside, the statue is an object.

***Unusual Nature.*** The statue doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The statue makes two Slam or Rock attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 10 ft., one target. Hit: `dice: 6d12 + 4` (`6d12 + 4`) bludgeoning damage.

***Rock.*** *Ranged Weapon Attack:* `dice: d20+8` (+8 to hit), range 60 ft./240 ft., one target. Hit: `dice: 6d10 + 4` (`6d10 + 4`) bludgeoning damage.
```
^statblock