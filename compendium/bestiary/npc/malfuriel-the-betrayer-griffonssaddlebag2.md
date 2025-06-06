---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/10
- monster/size/large
- monster/type/fiend/devil
location: 
condition: healthy
images: []
relationships: []
aliases: [Malfuriel the Betrayer]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Evil
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
*Source: The Griffon's Saddlebag, Book 2 p. 346*

Malfuriel was once an ardent enforcer of the heavens: charged with punishing bigots and heretics. But time's passing led him to take satisfaction—then pleasure—from inflicting pain. He became a sadistic torturer and was exiled from the Upper Planes: a fallen planetar. When the forces of hell offered him the opportunity to lead a legion and inflict wanton suffering on his choice of targets, Malfuriel accepted the bargain, becoming a devil in the process. After several successful campaigns of slaughter and torture, Malfuriel's Crimson Legion became a renowned and unstoppable force of destruction.

With bruised, pale green skin and a multitude of open cuts slowly oozing blood, Malfuriel's hulking form is appropriately intimidating and only subtly recognizable as once angelic. His once white-feathered wings are now stained and dripping crimson. Freed from Syre's cursed blade, his boundless fury is free once more to raze all opposition.

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
"name": "Malfuriel the Betrayer (GriffonsSaddlebag2)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "126"
"hit_dice": "12d10 + 60"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "21"
  - !!int "17"
  - !!int "20"
  - !!int "21"
"speed": "40 ft., fly 90 ft."
"saves":
  - "constitution": "+9"
  - "wisdom": "+9"
"skillsaves":
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Intimidation](/compendium/rules/skills.md#Intimidation)"
    "desc": "+9"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "cold, fire, necrotic, radiant"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "Malfuriel's spellcasting ability is Charisma (spell save DC 17). Malfuriel\
      \ can innately cast the following spells, requiring no material components:\n\
      \nAt will: [detect evil and good](compendium/spells/detect-evil-and-good.md),\
      \ [invisibility](compendium/spells/invisibility.md) (self only)\n\n3/day each:\
      \ [dispel evil and good](compendium/spells/dispel-evil-and-good.md)\n\n1/day\
      \ each: [blight](compendium/spells/blight.md), [wall of fire](compendium/spells/wall-of-fire.md)"
    "name": "Innate Spellcasting"
  - "desc": "Malfuriel is immune to the diseases described in the [Bloodmire Diseases](compendium/tables/bloodmire-diseases-griffonssaddlebag2.md)\
      \ table."
    "name": "Bloodmire Adaptation"
  - "desc": "Magical darkness doesn't impede Malfuriel's darkvision."
    "name": "Devil's Sight"
  - "desc": "Malfuriel knows if he hears a lie."
    "name": "Divine Awareness"
  - "desc": "If Malfuriel fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (1/Day)"
  - "desc": "Malfuriel has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Malfuriel's weapon attacks are magical. When Malfuriel hits with any\
      \ weapon, the weapon deals an extra 3 (d6) necrotic damage (included in the\
      \ attack)."
    "name": "Forsaken Weapons"
"actions":
  - "desc": "Malfuriel makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15\
      \ (3d6 + 5) slashing damage, plus 3 (d6) necrotic damage."
    "name": "Greatsword"
  - "desc": "Malfuriel touches a creature, and that creature must succeed on a DC\
      \ 17 Wisdom saving throw or be magically [charmed](/compendium/rules/conditions.md#Charmed)\
      \ for 1 hour. The [charmed](/compendium/rules/conditions.md#Charmed) target\
      \ obeys Malfuriel's spoken or telepathic commands.\n\nIf the target suffers\
      \ any harm, or receives a command to harm itself, the target can repeat the\
      \ saving throw, ending the effect on itself on a success. If a target successfully\
      \ saves against the effect, or if the effect ends for it, the target is immune\
      \ to Malfuriel's Corrupting Touch for the next 24 hours."
    "name": "Corrupting Touch (2/Day)"
"legendary_actions":
  - "desc": "Malfuriel can take 3 legendary actions, choosing from the options below.\
      \ Only one legendary action can be used at a time and only at the end of another\
      \ creature's turn. Malfuriel regains spent legendary actions at the start of\
      \ his turn."
    "name": ""
  - "desc": "Malfuriel moves up to half his speed."
    "name": "Move"
  - "desc": "Malfuriel makes one greatsword attack."
    "name": "Greatsword (2 Actions)"
  - "desc": "Malfuriel magically teleports, along with any equipment he is wearing\
      \ and carrying, up to 120 feet to an unoccupied space he can see. Malfuriel\
      \ can then choose one creature he can see within 5 feet of him. The target must\
      \ make a DC 17 Constitution saving throw, taking 10 (3d6) necrotic damage on\
      \ a failed save or half as much damage on a successful one. Malfuriel regains\
      \ hit points equal to the amount of necrotic damage dealt."
    "name": "Accursed Step (3 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing all ties), Malfuriel can take a lair action\
      \ to cause one of the following effects:"
    "name": ""
  - "desc": "- A stream of blood opens up on the ground originating at a point Malfuriel\
      \ chooses within 60 feet of him. The stream is 30 feet long, 5 feet wide, and\
      \ 5 feet deep. Each creature in the area must make a DC 15 Dexterity saving\
      \ throw. On a successful save, a creature moves to the nearest unoccupied space\
      \ of its choice outside the stream. On a failed save, the creature falls into\
      \ the stream and takes 7 (2d6) necrotic damage. A creature that starts its turn\
      \ in the stream must succeed on a DC 13 Constitution saving throw or become\
      \ diseased (see the [Bloodmire Diseases](compendium/tables/bloodmire-diseases-griffonssaddlebag2.md)\
      \ table).  \n- A pillar of unholy flame bursts from the ground. Each creature\
      \ in a 5-foot-radius, 60-foot-high cylinder centered on a point Malfuriel chooses\
      \ within 60 feet of him must make a DC 15 Dexterity saving throw, taking 7 (2d6)\
      \ fire damage and 7 (2d6) necrotic damage on a failed save or half as much damage\
      \ on a successful one.  "
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