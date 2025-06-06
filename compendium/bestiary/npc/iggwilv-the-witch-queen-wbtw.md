---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/wbtw
- monster/cr/20
- monster/size/medium
- monster/type/fey/wizard
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/iggwilv-the-witch-queen.webp
relationships: []
aliases: [Iggwilv the Witch Queen]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Neutral
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
*Source: The Wild Beyond the Witchlight p. 205, Vecna: Eve of Ruin*

Iggwilv has a long and storied history throughout the multiverse. This adventure presents the legendary figure in her current form.

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
"name": "Iggwilv the Witch Queen (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"ac_class": "[robe of the archmagi](compendium/items/robe-of-the-archmagi.md)"
"hp": !!int "255"
"hit_dice": "30d8 + 120"
"modifier": !!int "4"
"stats":
  - !!int "10"
  - !!int "18"
  - !!int "18"
  - !!int "27"
  - !!int "12"
  - !!int "23"
"speed": "30 ft."
"saves":
  - "intelligence": "+14"
  - "wisdom": "+7"
  - "charisma": "+12"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+20"
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+14"
  - "name": "[Nature](/compendium/rules/skills.md#Nature)"
    "desc": "+14"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "truesight 60 ft., passive Perception 11"
"languages": "Abyssal, Celestial, Common, Draconic, Elvish, Infernal, Sylvan"
"cr": "20"
"traits":
  - "desc": "Iggwilv is immune to any effect that would age her, and she can't die\
      \ from old age."
    "name": "Boon of Immortality"
  - "desc": "If Iggwilv fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Iggwilv has advantage on saving throws against spells and other magical\
      \ effects. (This trait is bestowed by her robe of the archmagi.)"
    "name": "Magic Resistance"
  - "desc": "Iggwilv wears an [amulet of the planes](compendium/items/amulet-of-the-planes.md)\
      \ and a [robe of the archmagi](compendium/items/robe-of-the-archmagi.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Iggwilv makes two Bewitching Bolt attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +16 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 25 (5d6 + 8) lightning damage, and if the target is\
      \ a creature, it must succeed on a DC 22 Wisdom saving throw or be [charmed](/compendium/rules/conditions.md#Charmed)\
      \ by Iggwilv until the start of her next turn."
    "name": "Bewitching Bolt"
  - "desc": "Iggwilv opens a momentary Abyssal rift within 120 feet of her. The rift\
      \ is a 20-foot-radius sphere. Each creature in that area must make a DC 22 Constitution\
      \ saving throw, taking 40 (9d8) necrotic damage on a failed save, or half as\
      \ much damage on a successful one. In addition, there is a 50 percent chance\
      \ that 3 [hezrous](compendium/bestiary/fiend/hezrou.md) then appear in unoccupied\
      \ spaces in the sphere. They act as Iggwilv's allies, take their turns immediately\
      \ after hers, and can't summon other demons. They remain until they die or until\
      \ Iggwilv dismisses them as an action."
    "name": "Abyssal Rift (Recharge 5-6)"
  - "desc": "Iggwilv casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 24, +16\
      \ to hit with spell attacks):\n\nAt will: [detect magic](compendium/spells/detect-magic.md),\
      \ [disguise self](compendium/spells/disguise-self.md), [invisibility](compendium/spells/invisibility.md),\
      \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
      \ [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md),\
      \ [Tasha's hideous laughter](compendium/spells/tashas-hideous-laughter.md)\n\
      \n3/day each: [dispel magic](compendium/spells/dispel-magic.md), [fly](compendium/spells/fly.md),\
      \ [polymorph](compendium/spells/polymorph.md)\n\n1/day each: [maze](compendium/spells/maze.md),\
      \ [telekinesis](compendium/spells/telekinesis.md), [teleport](compendium/spells/teleport.md),\
      \ [wish](compendium/spells/wish.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Iggwilv teleports, along with any equipment she is wearing or carrying,\
      \ to an unoccupied space she can see within 30 feet of her."
    "name": "Fey Step"
"reactions":
  - "desc": "When Iggwilv sees a creature within 60 feet of her casting a spell, she\
      \ tries to interrupt it. If the creature is casting a spell using a spell slot\
      \ of 8th level or lower, its spell fails and has no effect. If it is casting\
      \ a 9th-level spell, it must succeed on a DC 22 Intelligence saving throw, or\
      \ the spells fails and has no effect."
    "name": "Negate Spell (2/Day)"
"legendary_actions":
  - "desc": "Iggwilv uses Spellcasting or Fey Step."
    "name": "Witchcraft"
  - "desc": "Iggwilv utters a phrase in a forbidden language and targets one or two\
      \ creatures she can see within 60 feet of her. Each target must succeed on a\
      \ DC 22 Wisdom saving throw or take 11 (2d10) psychic damage and be [frightened](/compendium/rules/conditions.md#Frightened)\
      \ of Iggwilv for 1 minute. A target can repeat the save at the end of each of\
      \ its turns, ending the effect on itself on a success and thereby becoming immune\
      \ to Iggwilv's Dark Speech for 24 hours."
    "name": "Dark Speech (Costs 2 Actions)"
  - "desc": "Iggwilv targets one creature she can see within 60 feet of her. The target\
      \ must succeed on a DC 22 Charisma saving throw or be possessed by a fey spirit.\
      \ While possessed, the target must obey Iggwilv's commands. The target can repeat\
      \ the saving throw at the end of each of its turns, banishing the fey spirit\
      \ and ending the effect on itself on a success."
    "name": "Fey Beguilement (Costs 3 Actions)"
"source":
  - "WBtW"
  - "VEoR"
"image": "compendium/bestiary/npc/token/iggwilv-the-witch-queen-wbtw.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes