---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/9
- monster/size/medium
- monster/type/humanoid/human
location: 
condition: healthy
images: []
relationships: []
aliases: [Vincent von Dreck]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Neutral
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
*Source: The Griffon's Saddlebag, Book 2 p. 349*

Beneath a facade of haphazard scribblings and windswept hair, Vincent is a shrewd negotiator and keen observer. He is quite diligent in collecting and protecting the Circle's secrets, as well as keeping an eye out for potentially talented recruits.

While typically affable, the rare occasions that unleash his true temper and draconic might have rightfully earned him the nickname "Book Wyrm" amongst the Circle.

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
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Vincent von Dreck (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "[hide armor](compendium/items/hide-armor.md); 17 from natural armor in\
  \ dragon form"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "18"
- !!int "17"
"speed": "30 ft., climb 30 ft., fly 30 ft. in dragon form"
"saves":
  "Wisdom": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Intimidation": !!int "7"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Persuasion": !!int "7"
"senses": "darkvision 60 ft. (dragon form only), passive Perception 18"
"languages": "Common, Draconic, Druidic"
"cr": "9"
"traits":
- "desc": "Vincent is a 12th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 16), and he can't cast spells that require material components\
    \ while in dragon form. He has the following druid spells prepared:\n\nCantrips\
    \ (at will): [druidcraft](compendium/spells/druidcraft.md), [poison spray](compendium/spells/poison-spray.md),\
    \ [produce flame](compendium/spells/produce-flame.md), [shillelagh](compendium/spells/shillelagh.md)\
    \ (can cast on sickles)\n\n1st level (4 slots): [cure wounds](compendium/spells/cure-wounds.md),\
    \ [entangle](compendium/spells/entangle.md), [healing word](compendium/spells/healing-word.md)\n\
    \n2nd level (3 slots): [enhance ability](compendium/spells/enhance-ability.md),\
    \ [locate object](compendium/spells/locate-object.md), [spike growth](compendium/spells/spike-growth.md)\n\
    \n3rd level (3 slots): [plant growth](compendium/spells/plant-growth.md),\
    \ [protection from energy](compendium/spells/protection-from-energy.md), [wind\
    \ wall](compendium/spells/wind-wall.md)\n\n4th level (3 slots): [dominate\
    \ beast](compendium/spells/dominate-beast.md), [freedom of movement](compendium/spells/freedom-of-movement.md),\
    \ [polymorph](compendium/spells/polymorph.md)\n\n5th level (2 slots): [commune\
    \ with nature](compendium/spells/commune-with-nature.md), [tree stride](compendium/spells/tree-stride.md)\n\
    \n6th level (1 slots): [transport via plants](compendium/spells/transport-via-plants.md),\
    \ [wall of thorns](compendium/spells/wall-of-thorns.md)\n\nThis spell requires\
    \ material components."
  "name": "Spellcasting (Humanoid Form Only)"
- "desc": "While in dragon form, Vincent's attacks count as magical for the purpose\
    \ of overcoming resistance and immunity to nonmagical attacks."
  "name": "Draconic Weapons (Dragon Form Only)"
"actions":
- "desc": "In dragon form, Vincent makes two attacks: one with his bite and one with\
    \ his claws. In humanoid form, he makes two sickle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit (+8 to hit with [shillelagh](compendium/spells/shillelagh.md)),\
    \ reach 5 ft., one target. Hit: 2 (1d4) slashing damage, or 8 (1d8 + 4) slashing\
    \ damage with [shillelagh](compendium/spells/shillelagh.md)."
  "name": "Sickle (Humanoid Form Only)"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 10 (1d12\
    \ + 4) piercing damage."
  "name": "Bite (Dragon Form Only)"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit:* 11 (2d6\
    \ + 4) piercing damage."
  "name": "Claw (Dragon Form Only)"
- "desc": "Vincent exhales a plume of energy in a 25-foot cone. Each creature in the\
    \ area must make a DC 16 Dexterity saving throw, taking 14 (4d6) damage of the\
    \ type associated with Vincent's dragon type (see the [Dragon Damage Type](compendium/tables/dragon-damage-type-griffonssaddlebag2.md)\
    \ table) on a failed save, or half as much damage on a successful one."
  "name": "Breath Weapon (Recharge 6-6) (Dragon Form Only)"
- "desc": "Vincent uses his action to magically polymorph into a Medium dragon of\
    \ any type of his choice (see the [Dragon Damage Type](compendium/tables/dragon-damage-type-griffonssaddlebag2.md)\
    \ table), or back into his humanoid form. When Vincent polymorphs, it gains 120\
    \ temporary hit points, and he can choose whether his equipment falls to the ground,\
    \ melds into his new form, or is worn by the new form (if possible). He reverts\
    \ to his humanoid form after 6 hours, if he dies, or if he falls [unconscious](/compendium/rules/conditions.md#Unconscious).\
    \ His statistics are the same in each form, other than his AC and speed, as noted."
  "name": "Change Shape (2/day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes