---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/4
- monster/size/medium
- monster/type/humanoid/human
location: 
condition: healthy
images: []
relationships: []
aliases: [Chantelle Redcliff, Mercantile Guildmaster]
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
*Source: The Griffon's Saddlebag, Book 2 p. 339*

Chantelle Redcliff, as the current Guildmaster of The Mercantile Guild, is accurately described as the most influential and powerful person in Antronec. The resources at her command within Antronec's government branches and underbelly are considerable, and she is more than willing to do whatever it takes to ensure that her guild retains its control over the city. She is exceptionally resourceful, and not to be underestimated—she has risen to her current role by proving herself the most capable politician and mage in The Mercantile Guild.

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
"name": "Chantelle Redcliff, Mercantile Guildmaster (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "[studded leather](compendium/items/studded-leather-armor.md)"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "12"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "5"
"skillsaves":
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Arcana": !!int "3"
  "Persuasion": !!int "8"
"senses": "passive Perception 12"
"languages": "Common, plus up to three other languages"
"cr": "4"
"traits":
- "desc": "Chantelle is a 14th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 15). She knows the following bard spells:\n\nCantrips (at will):\
    \ [mage hand](compendium/spells/mage-hand.md), [mending](compendium/spells/mending.md),\
    \ [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1st level (4 slots): [comprehend languages](compendium/spells/comprehend-languages.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [identify](compendium/spells/identify.md),\
    \ [unseen servant](compendium/spells/unseen-servant.md)\n\n2nd level (3 slots):\
    \ [detect thoughts](compendium/spells/detect-thoughts.md), [knock](compendium/spells/knock.md),\
    \ [locate object](compendium/spells/locate-object.md), [suggestion](compendium/spells/suggestion.md)\n\
    \n3rd level (3 slots): [clairvoyance](compendium/spells/clairvoyance.md),\
    \ [glyph of warding](compendium/spells/glyph-of-warding.md), [sending](compendium/spells/sending.md)\n\
    \n4th level (3 slots): [fabricate](compendium/spells/fabricate.md), [phantasmal\
    \ killer](compendium/spells/phantasmal-killer.md), [secret chest](compendium/spells/leomunds-secret-chest.md)\n\
    \n5th level (2 slots): [geas](compendium/spells/geas.md), [legend lore](compendium/spells/legend-lore.md)\n\
    \n6th level (1 slots): [instant summons](compendium/spells/drawmijs-instant-summons.md)\n\
    \n7th level (1 slots): [arcane sword](compendium/spells/mordenkainens-sword.md)"
  "name": "Spellcasting"
- "desc": "Chantelle wears a [dress of many pockets](compendium/items/dress-of-many-pockets-griffonssaddlebag2.md)\
    \ and has a [book of instant copying](compendium/items/book-of-instant-copying-griffonssaddlebag2.md)\
    \ and [wand of gilding](compendium/items/wand-of-gilding-griffonssaddlebag2.md),\
    \ which are all described in appendix A."
  "name": "Special Equipment"
- "desc": "When Chantelle makes a Charisma check or saving throw, she can choose to\
    \ make the roll with advantage."
  "name": "Silver Tongue (Recharges After a Short or Long Rest)"
- "desc": "The wand has 7 charges and regains 1d6 + 1 expended charges daily at dawn.\
    \ While holding it, Chantelle can use an action to expend 1 of its charges to\
    \ cast one of the following spells (save DC 15) from it: [alter self](compendium/spells/alter-self.md),\
    \ [charm person](compendium/spells/charm-person.md) (2nd-level version), [enthrall](compendium/spells/enthrall.md),\
    \ or [hypnotic pattern](compendium/spells/hypnotic-pattern.md)."
  "name": "Wand of Gilding"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one target. Hit: 1 bludgeoning\
    \ damage plus 19 (3d12) thunder damage."
  "name": "Magic Coin"
- "desc": "Chantelle enchants a coin in her hand with divination magic, which lasts\
    \ for 10 minutes or until Chantelle ends the effect early (no action required).\
    \ For the duration, a creature holding the coin that knows at least one language\
    \ can understand the meaning of any word Chantelle speaks, and when Chantelle\
    \ speaks, that creature understands what Chantelle says.\n\nAlternatively, Chantelle\
    \ can use an action to see and hear through the enchanted coin until the start\
    \ of her next turn, using her own senses as if she were in the coin's space. During\
    \ this time, Chantelle is [deaf](/compendium/rules/conditions.md#Deafened) and\
    \ [blind](/compendium/rules/conditions.md#Blinded) with regard to her own senses."
  "name": "Money Talks (4/Day)"
"reactions":
- "desc": "When a creature within 60 feet of Chantelle makes an ability check, attack\
    \ roll, or saving throw, Chantelle flips a coin. If it's heads, the creature can\
    \ roll a d12 and add the number rolled to the d20. If it's tails, one random creature\
    \ within 60 feet of the merchant gains a d12, which it can roll and add to one\
    \ ability check, attack roll, or saving throw it makes before the end of its next\
    \ turn."
  "name": "Chance (Recharge 4-6)"
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