---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/2
- monster/size/large
- monster/type/monstrosity
aliases: ["Behitaur"]
---
# [Behitaur](compendium\bestiary\monstrosity/behitaur-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Behitaurs are many-legged half-human, half-behir monstrosities in much the same way that a centaur is half human and half horse. The Lesser Reflectore Anillos are magically cursed and transformed into behitaurs as a result of their destiny-defying heressy and consumption.

```statblock
"name": "Behitaur (GriffonsSaddlebag3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "9"
- !!int "13"
- !!int "12"
"speed": "40 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "lightning"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Draconic plus one other language (usually Common or Elvish)"
"cr": "2"
"traits":
- "desc": "If the behitaur moves at least 30 feet straight toward a target and then\
    \ hits it with a pike attack on the same turn, the target takes an extra 7 (2d6)\
    \ piercing damage."
  "name": "Charge"
"actions":
- "desc": "The behitaur makes two ranged attacks or two melee attacks, but can constrict\
    \ only once."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage, and the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 14). Until this grapple ends, the target is [restrained](/compendium/rules/conditions.md#Restrained),\
    \ and the behitaur can't constrict another target."
  "name": "Constrict"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10\
    \ + 4) piercing damage."
  "name": "Pike"
- "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
- "desc": "The behitaur exhales a line of lightning that is 15 feet long and 5 feet\
    \ wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking\
    \ 18 (4d8) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Breath (Recharge 6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```