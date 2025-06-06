---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/9
- monster/size/medium
- monster/type/humanoid/human
location: 
condition: healthy
images: []
relationships: []
aliases: [Alistair Rook]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral
occupation: 
groups: []
religions: []
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(Lawful Good),option(Neutral Good),option(Chaotic Good),option(Lawful Neutral),option(Neutral),option(Chaotic Neutral),option(Lawful Evil),option(Neutral Evil),option(Chaotic Evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Alistair Rook is the human operator of the You're Here a While Tavern & Inn. He is also the renowned thief known as the Ravenheart, a name bestowed upon him by his late mentor. [Mira](compendium/bestiary/npc/mira-griffonssaddlebag3.md) the blind medusa is his companion and protégé.

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Alistair Rook (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "[studded leather](compendium/items/studded-leather-armor.md)"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"modifier": !!int "5"
"stats":
  - !!int "13"
  - !!int "20"
  - !!int "13"
  - !!int "18"
  - !!int "16"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": "+9"
  - "intelligence": "+8"
  - "wisdom": "+7"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+12"
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Investigation](/compendium/rules/skills.md#Investigation)"
    "desc": "+8"
  - "name": "[Sleight of Hand](/compendium/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+9"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+13"
"senses": "blindsight 10 ft., passive Perception 13"
"languages": "Common, Elvish, Thieves' cant"
"cr": "9"
"traits":
  - "desc": "Alistair is a 6th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 16). He has the following wizard spells prepared:\n\nCantrips\
      \ (at will): [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
      \ [minor illusion](compendium/spells/minor-illusion.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
      \n1st level (4 slots): [charm person](compendium/spells/charm-person.md),\
      \ [detect magic](compendium/spells/detect-magic.md), [disguise self](compendium/spells/disguise-self.md),\
      \ [silent image](compendium/spells/silent-image.md)\n\n2nd level (3 slots):\
      \ [invisibility](compendium/spells/invisibility.md), [misty step](compendium/spells/misty-step.md),\
      \ [suggestion](compendium/spells/suggestion.md)\n\n3rd level (3 slots):\
      \ [haste](compendium/spells/haste.md), [major image](compendium/spells/major-image.md),\
      \ [nondetection](compendium/spells/nondetection.md)"
    "name": "Spellcasting"
  - "desc": "If Alistair is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, Alistair instead takes no damage if\
      \ he succeeds on the saving throw, and only half damage if he fails."
    "name": "Evasion"
  - "desc": "Alistair deals an extra 28 (8d6) damage when he hits a target with a\
      \ weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of Alistair that isn't incapacitated and Alistair\
      \ doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Alistair makes two attacks with his shortsword or hand crossbow."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage, and the target must make a DC 15 Constitution saving\
      \ throw, taking 14 (4d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit:\
      \ 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 14 (4d6) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "When an attacker Alistair can see hits him with an attack, he halves\
      \ the attack's damage against him."
    "name": "Uncanny Dodge"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes