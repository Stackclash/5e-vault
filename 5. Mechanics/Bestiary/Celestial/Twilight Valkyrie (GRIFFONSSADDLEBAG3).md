---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 20
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\20
  - monster\Size\Large
  - monster\Type\Celesti(AL)
aliases:
  - Twilight Valkyrie
---
# [[5. Mechanics\Bestiary\Celestial\Twilight Valkyrie (GRIFFONSSADDLEBAG3).md|Twilight Valkyrie]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Standing simultaneously opposite to and between the fiends and angels, the neutral-aligned Twilight Valkyries are winged warriors wielding the power of both light and shadow. The focus of their devotion is maintaining the balance between those dual opposing forces, for neither can exist without the other. To that end, they appear throughout the multiverse in order to ensure that when an individual is fated for death or for life, events unfold as the multiverse intends. Most often, this causes them to appear as alternating villains and heroes in seemingly obscure locales, causing domino effects that cascade into a solid, binding fate.

```statblock
"name": "Twilight Valkyrie (GRIFFONSSADDLEBAG3)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "262"
"hit_dice": "21d10 + 147"
"stats":
- !!int "25"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "20"
- !!int "23"
"speed": "40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Strength": !!int "13"
"skillsaves":
  "Intimidation": !!int "12"
  "Perception": !!int "11"
"damage_resistances": "necrotic; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"senses": "darkvision 300 ft., truesight 120 ft., passive Perception 21"
"languages": "all"
"cr": "20"
"traits":
- "desc": "The valkyrie's innate spellcasting ability is Charisma. She can innately\
    \ cast the following spells (spell save DC 20), requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[5. Mechanics/Spells/Sanctuary.md|sanctuary]] (self only)\n\n1/day each: [[5. Mechanics/Spells/Finger Of Death.md|finger\
    \ of death]], [[5. Mechanics/Spells/Flame Strike.md|flame strike]]\n\
    \n3/day each: [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]],\
    \ [[5. Mechanics/Spells/Harm.md|harm]], [[5. Mechanics/Spells/He(AL).md|heal]], [[5. Mechanics/Spells/Raise Dead.md|raise\
    \ dead]]"
  "name": "Innate Spellcasting"
- "desc": "The valkyrie's weapon attacks are magical.\n\nAt the start of the valkyrie's\
    \ turn, she chooses either necrotic or radiant damage; when the valkyrie hits\
    \ with any weapon that turn, the weapon deals an extra 11 (2d10) damage of that\
    \ type (included in the attack). The valkyrie can't choose the same damage type\
    \ two rounds in a row."
  "name": "Angelic Weapons"
- "desc": "The valkyrie doesn't provoke opportunity attacks when it flies out of an\
    \ enemy's reach."
  "name": "Flyby"
- "desc": "As a bonus action, the valkyrie can begin shedding an aura of twinkling\
    \ starlight in a 30-foot radius around herself, which lasts until her [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on\
    \ a spell). For the duration, all bright light and darkness within the aura magically\
    \ becomes dim light; a creature with darkvision can't see in this dim light as\
    \ if it were bright light. The valkyrie and her allies have half cover while in\
    \ the aura."
  "name": "Twilight Aura"
- "desc": "The valkyrie can't be [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]\
    \ and has advantage on all attack rolls, ability checks, and saving throws."
  "name": "Valkyrie's Providence"
"actions":
- "desc": "The valkyrie can use her Divine Charge or cast one spell. She then makes\
    \ two glaive attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 18\
    \ (2d10 + 7) slashing damage plus 11 (2d10) necrotic or radiant damage (see Angelic\
    \ Weapons trait)."
  "name": "Glaive"
- "desc": "The valkyrie moves up to her speed in a straight line; this movement ignores\
    \ difficult terrain and allows her to move through a hostile creature's space,\
    \ regardless of its size. Each creature in the line must make a DC 21 Strength\
    \ saving throw. On a failed save, a creature takes 27 (6d8) radiant damage and\
    \ is pushed up to 10 feet away from the valkyrie's path and knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ On a successful save, the creature takes half as much damage and isn't pushed\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Divine Charge (Recharge 4-6)"
"reactions":
- "desc": "When a creature the valkyrie can see within 60 feet of her succeeds on\
    \ an attack roll, ability check, or saving throw, she forces the creature to reroll\
    \ the d20 and use the lower roll."
  "name": "Censure"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
