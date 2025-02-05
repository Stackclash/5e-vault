---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/25
- monster/size/gargantuan
- monster/type/dragon
location: 
condition: healthy
images: []
relationships: []
aliases: [Lothrem, the Wreathed Dragon]
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
*Source: The Griffon's Saddlebag, Book 2 p. 350*

Initially a frightened and orphaned hatchling, Lothrem has grown in a curious manner. Now a full-sized and fully capable ancient dragon, their wisdom and natural magic are mighty indeed, shaping their appearance and the very weather above their hidden Warrens lair.

More in tune with nature than a typical gold dragon, Lothrem has verdant green scales, and grass and flowers grow from their back and the outside of their wings. They have elk-like antlers that wrap around their head, seeming to form a natural and regal crown. When they beat their wings, the air smells sweet like a forest glen, and bits of leaves and grass swirl about.

Unfortunately, the years of protection and isolation have not been kind to Lothrem, and for the last 500 years, they have been overcome with a bout of sadness and acute pain each day, resulting in a consistent drizzling rainfall above.

Perhaps release, even a temporary one, from this gilded cage would resolve the matter, but the Circle is unwilling to break tradition and endanger the city.

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
"name": "Lothrem, the Wreathed Dragon (GriffonsSaddlebag2)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Lawful Neutral"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "546"
"hit_dice": "28d20 + 252"
"stats":
- !!int "27"
- !!int "16"
- !!int "29"
- !!int "18"
- !!int "23"
- !!int "24"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "11"
  "Wisdom": !!int "14"
  "Constitution": !!int "17"
"skillsaves":
  "Nature": !!int "12"
  "Stealth": !!int "11"
  "Insight": !!int "22"
  "Perception": !!int "14"
  "History": !!int "12"
  "Persuasion": !!int "15"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic, Druidic"
"cr": "25"
"traits":
- "desc": "If Lothrem fails a saving throw, they can choose to succeed instead."
  "name": "Legendary Resistance (1/Day)"
- "desc": "Lothrem regains 10 hit points at the start of their turn if they have at\
    \ least 1 hit point. If they are in sunlight, they instead regain 20 hit points."
  "name": "Nature's Restoration"
"actions":
- "desc": "Lothrem can use their Frightful Presence. They then make three attacks:\
    \ one with their bite and two with their claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 19\
    \ (2d10 + 8) piercing damage, plus 5 (1d10) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 15\
    \ (2d6 + 8) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 17\
    \ (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- "desc": "Each creature of Lothrem's choice that is within 120 feet of Lothrem and\
    \ aware of them must succeed on a DC 23 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to Lothrem's\
    \ Frightful Presense for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "Lothrem exhales enriching breath on the ground in a 120-foot line that\
    \ is 10 feet wide, causing a thick wall of tangled, thorny brush to magically\
    \ grow in the area. The wall is 20 feet high and blocks line of sight. Each creature\
    \ in the area must make a DC 25 Dexterity saving throw. On a failed save, a creature\
    \ takes 63 (14d8) piercing damage and is [restrained](/compendium/rules/conditions.md#Restrained)\
    \ in the wall. On a successful save, a creature takes half as much damage and\
    \ isn't [restrained](/compendium/rules/conditions.md#Restrained).\n\nThe wall\
    \ remains until the end of Lothrem's next turn, at which point it withers and\
    \ disappears. A creature [restrained](/compendium/rules/conditions.md#Restrained)\
    \ in the wall or one that is within 5 feet of the creature can use its action\
    \ to make a DC 19 Strength check, freeing the creature on a success. For the duration,\
    \ the area is difficult terrain, and when a creature moves into or within the\
    \ area, it takes 9 (2d8) piercing damage for every 5 feet it travels."
  "name": "Ensnaring Breath (Recharge 5-6)"
- "desc": "Lothrem magically polymorphs into a humanoid or beast that has a challenge\
    \ rating no higher than their own, or back into their true form. Lothrem reverts\
    \ to their true form if they die. Any equipment Lothrem is wearing or carrying\
    \ is absorbed or borne by the new form (Lothrem's choice). \n\nIn a new form,\
    \ Lothrem retains their own alignment, hit points, Hit Dice, ability to speak,\
    \ proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom,\
    \ and Charisma scores, as well as this action. Lothrem's statistics and capabilities\
    \ are otherwise replaced by those of the new form, except and class features or\
    \ legendary actions of that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "The dragon can take 3 legendary actions, choosing from the options below.\
    \ Only one legendary action can be used at a time and only at the end of another\
    \ creature's turn. Lothrem regains spent legendary actions at the start of their\
    \ turn."
  "name": ""
- "desc": "Lothrem makes a Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ check."
  "name": "Detect"
- "desc": "Lothrem makes a tail attack"
  "name": "Tail Attack"
- "desc": "Lothrem beats their wings. Each creature within 10 feet of Lothrem must\
    \ succeed on a DC 24 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage\
    \ and be knocked [prone](/compendium/rules/conditions.md#Prone). Lothrem can then\
    \ fly up to half their flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Lothrem takes a lair action\
    \ to cause one of the following effects:"
  "name": ""
- "desc": "- Each creature of Lothrem's choice within 60 feet of them gains the effect\
    \ of the [sanctuary](compendium/spells/sanctuary.md) spell. This effect lasts\
    \ until initiative count 20 on the next round.  \n- Lothrem casts [wind wall](compendium/spells/wind-wall.md),\
    \ without material components.  \n- Lothrem chooses a point on the ground that\
    \ they can see within 120 feet of them, causing grasping weeds and vines to sprout\
    \ from the ground in a 30-foot radius centered on that point. For 1 minute, the\
    \ area is under the effects of the [entangle](compendium/spells/entangle.md) spell.\
    \ This effect ends early if Lothrem uses this lair action again or if they die.\
    \  "
  "name": ""
"regional_effects":
- "desc": "The region containing Lothrem's lair is warped by their draconic magic,\
    \ which creates one or more of the following effects:"
  "name": ""
- "desc": "- Each creature that has the ability to cast at least one spell can cast\
    \ the [druidcraft](compendium/spells/druidcraft.md) cantrip at will while within\
    \ 6 miles of Lothrem's lair.  \n- The weather within 6 miles of the lair is substantially\
    \ affected by Lothrem's current state of mind (see [Lothrem's Mood & Weather](compendium/tables/crest-city-weather-patterns-griffonssaddlebag2.md)\
    \ table).  "
  "name": ""
- "desc": "Ivy and other vines are prevalent on stone structures and protecting them\
    \ against the elements. In addition, while Lothrem is within their lair, grass\
    \ and flowers continuously grow beneath them, as if under the effects of the [druidcraft](compendium/spells/druidcraft.md)\
    \ spell."
  "name": ""
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