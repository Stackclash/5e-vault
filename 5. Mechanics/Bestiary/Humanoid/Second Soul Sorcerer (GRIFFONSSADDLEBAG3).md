---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Second Soul Sorcerer
---
# [[5. Mechanics\Bestiary\Humanoid\Second Soul Sorcerer (GRIFFONSSADDLEBAG3).md|Second Soul Sorcerer]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A spellcaster with twin souls inside it. Sparks of necrotic magic fly between these souls as each one vies for dominance. The most powerful of these sorcerers are the ones who learn to work in tandem with their additional soul, which may have come to them as a result of a revivify spell gone awry, or the strange posession by a ghost or similar undead creature.

```statblock
"name": "Second Soul Sorcerer (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "18"
  - !!int "13"
  - !!int "15"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": "+8"
  - "charisma": "+9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "necrotic"
"senses": "passive Perception 16"
"languages": "Common plus three other languages"
"cr": "12"
"traits":
  - "desc": "The sorcerer is a 14th-level spellcaster. Its spellcasting ability is\
      \ Charisma (spell save DC 17, +9 to hit with spell attacks). It has the following\
      \ sorcerer spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Chill Touch.md|chill touch]]\
      \ , [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
      \ slots): [[5. Mechanics/Spells/Command.md|command]] , [[5. Mechanics/Spells/Inflict Wounds.md|inflict wounds]]\
      \ , [[5. Mechanics/Spells/Mage Armor.md|mage armor]] \n\n2nd level (3 slots):\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]]\
      \ \n\n3rd level (3 slots): [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]],\
      \ [[5. Mechanics/Spells/Vampiric Touch.md|vampiric touch]]\n\n4th level (3 slots):\
      \ [[5. Mechanics/Spells/Blight.md|blight]], [[5. Mechanics/Spells/Compulsion.md|compulsion]]\n\
      \n5th level (2 slots): [[5. Mechanics/Spells/Antilife Shell.md|antilife shell]],\
      \ [[5. Mechanics/Spells/Dominate Person.md|dominate person]] \n\n*6th level (1\
      \ slots): [[5. Mechanics/Spells/Chain Lightning.md|chain lightning]]\n\n7th\
      \ level (1 slots): [[5. Mechanics/Spells/Finger Of Death.md|finger of death]]\
      \ "
    "name": "Spellcasting"
  - "desc": "The sorcerer summons its second soul, which takes the form of a will-o'-\
      \ wisp in an unoccupied space within 10 feet of it. The will-o'- wisp rolls\
      \ its own initiative and acts on its own turn. It obeys the sorcerer's commands,\
      \ and the sorcerer can communicate with it telepathically if it is within 100\
      \ feet of the sorcerer.\n\nIt can't attack but can take other actions as normal.\
      \ It uses a save DC of 17 for its Consume Life feature. While the will-o'- wisp\
      \ exists, the sorcerer gains 10 (3d6) temporary hit points whenever the sorcerer\
      \ or the will-o'-wisp slays a creature.\n\nIf the will-o'-wisp is reduced to\
      \ 0 hit points or the sorcerer dismisses it as an action, it disappears and\
      \ the soul returns to the sorcerer."
    "name": "Soul Split (Recharges after a Short or Long Rest)"
  - "desc": "While the sorcerer can see its summoned will-o'- wisp within 30 feet\
      \ of it, the sorcerer can use a bonus action to teleport to the will-o'-wisp's\
      \ space, provided that it's not already in another creature's space."
    "name": "Soul Step"
  - "desc": "When the sorcerer is reduced to 0 hit points but not killed outright,\
      \ it can drop to 1 hit point instead."
    "name": "Touch of the Departed (2/Day)"
  - "desc": "When the sorcerer casts a spell marked with an asterisk above, it can\
      \ target a second creature in range with the same spell."
    "name": "Twinned Spell (Recharge 5-6)"
"actions":
  - "desc": "The sorcerer makes two dagger attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
"reactions":
  - "desc": "When a creature the sorcerer can see within 30 feet of it takes damage,\
      \ the sorcerer magically takes half of that damage, reducing the damage taken\
      \ by the creature.\n\nThis effect doesn't transfer any other effects that might\
      \ accompany the damage, and the damage the sorcerer takes can't be reduced in\
      \ any way."
    "name": "Pain Split"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
