---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/24
- monster/size/huge
- monster/type/fiend/demon
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/miska-the-wolf-spider.webp
relationships: []
aliases: [Miska the Wolf-Spider]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Evil
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
*Source: Vecna: Eve of Ruin p. 247*

Miska the Wolf-Spider is a legendary demon lord and master of battlefield strategy. He has the lower body of a massive armored spider, four arms, and two enormous wolf heads that drip poison. Yet Miska's greatest strength is his cunning mind.

## History

Ages ago, Miska led the hordes of Chaos against the forces of Law at the behest of his patron, the enigmatic Queen of Chaos. It seemed Miska's domination couldn't be stopped.

In desperation, Miska's opponents crafted an artifact to bind him in an extraplanar prison. This rod broke apart after sealing him in Pandemonium, scattering across the planes and becoming known as the Rod of Seven Parts. The rod is the key to releasing Miska from his long imprisonment.

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
"name": "Miska the Wolf-Spider (VEoR)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "399"
"hit_dice": "38d12 + 152"
"modifier": !!int "4"
"stats":
  - !!int "23"
  - !!int "18"
  - !!int "19"
  - !!int "18"
  - !!int "21"
  - !!int "22"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": "+11"
  - "constitution": "+11"
  - "wisdom": "+12"
"skillsaves":
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "Abyssal, Common, telepathy 120 ft."
"cr": "24"
"traits":
  - "desc": "A creature that hits Miska with a melee weapon attack takes 7 (2d6) poison\
      \ damage."
    "name": "Foul Ichor"
  - "desc": "If Miska fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Miska has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Miska can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "When in contact with a web, Miska knows the exact location of any other\
      \ creature in contact with the same web."
    "name": "Web Sense"
  - "desc": "Miska ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "Miska makes one Lupine Bite attack and two Trident of Chaos attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 17\
      \ (2d10 + 6) piercing damage plus 27 (6d8) poison damage. If the target is a\
      \ creature, it must succeed on a DC 21 Constitution saving throw or have the\
      \ [poisoned](/compendium/rules/conditions.md#Poisoned) condition for 1 minute.\
      \ While [poisoned](/compendium/rules/conditions.md#Poisoned) in this way, a\
      \ creature has the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ condition and can't regain hit points. A [poisoned](/compendium/rules/conditions.md#Poisoned)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Lupine Bite"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 13\
      \ (2d6 + 6) piercing damage plus 9 (2d8) force damage."
    "name": "Trident of Chaos"
  - "desc": "Miska casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt\
      \ will: [Disguise Self](compendium/spells/disguise-self.md), [Invisibility](compendium/spells/invisibility.md),\
      \ [Mage Hand](compendium/spells/mage-hand.md), [Minor Illusion](compendium/spells/minor-illusion.md),\
      \ [Web](compendium/spells/web.md)\n\n2/day each: [Dominate Monster](compendium/spells/dominate-monster.md),\
      \ [Mass Suggestion](compendium/spells/mass-suggestion.md), [Mirror Image](compendium/spells/mirror-image.md),\
      \ [Telekinesis](compendium/spells/telekinesis.md), [Teleport](compendium/spells/teleport.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Miska magically ends the [charmed](/compendium/rules/conditions.md#Charmed)\
      \ and [frightened](/compendium/rules/conditions.md#Frightened) conditions on\
      \ himself and on any of his allies within 120 feet of himself."
    "name": "Demand Loyalty"
"legendary_actions":
  - "desc": "Miska utters a bloodthirsty howl at one creature within 120 feet of himself\
      \ that isn't a Fiend. The target must succeed on a DC 20 Wisdom saving throw\
      \ or take 13 (2d12) psychic damage."
    "name": "Howl"
  - "desc": "Miska moves up to his speed without provoking opportunity attacks."
    "name": "Skitter"
  - "desc": "Miska uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/miska-the-wolf-spider-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes