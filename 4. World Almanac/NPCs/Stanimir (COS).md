---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - Stanimir
alignment: Chaotic Neutral
description: >-
  An old but vigorous Vistani man who commands his caravan with the easy
  authority of a born storyteller — and the quiet menace of a wizard who
  rarely needs to raise his voice.
history: >-
  Stanimir leads a band of Vistani who range far beyond Barovia's mists,
  seeking travelers whose fates Madam Eva's cards have marked. Accompanied
  by his daughter Damia and his son Ratka, he lures strangers to the
  campfire with the tale of a cursed, noble prince, then guides those who
  agree to help back through the mists to Barovia — delivering them
  safely to Madam Eva's camp at [[Tser Pool]] before his own part in
  their story ends.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Tser Pool.md|Tser Pool]]'
pronounced: STAN-ih-meer
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 61
occupation:
  - Vistani wizard
  - Caravan leader
groups:
  - Vistani (Tser Pool camp)
religions: []
personality: 'Charismatic storyteller, calculating, protective of his own'
ideal: The clan's safety and freedom come before any oath to outsiders.
bond: >-
  His children, Damia and Ratka, and the caravan he leads across the
  lost roads.
flaw: >-
  He trades in half-truths, telling outsiders only as much as serves the
  Vistani's purpose.
goals: >-
  To deliver strangers to Madam Eva as fate demands, and see his people
  safely through Barovia's dangers.
likes: "A good story, wine, holding a room's attention"
dislikes: 'Being doubted, threats to his children, reckless outsiders'
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 20*

Stanimir leads a wandering band of Vistani who range far beyond Barovia's borders, seeking out travelers whose fates have already been written in [[Madam Eva (COS)|Madam Eva]]'s cards. Charismatic and quick with a story, he is just as quick with a blade or a spell when his people's safety is at stake.

## The Dancing Fire

When strangers linger at his campfire, Stanimir spits wine into the flames and tells the tale of a noble prince cursed to tyranny — Strahd, though he never speaks the name — inviting the listeners to return with him to Barovia and put the prince's troubled soul to rest. Those who agree are led south through the mists until they arrive, guided safely, at [[Madam Eva (COS)|Madam Eva]]'s camp at [[Tser Pool]].

## Family and Command

Stanimir travels with his daughter Damia, a keen-eyed spy, and his son Ratka, a bandit captain who commands the rest of the caravan's Vistani without question. Once his passengers are delivered to Madam Eva, Stanimir's role in their story is done — but his caravan remains a fixture of the roads leading into Strahd's domain.

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

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
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
```statblock
"name": "Stanimir (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
  - "desc": "Stanimir is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Stanimir has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Friends.md|friends]],\
      \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
      \ (4 slots):** [[/5. Mechanics/Spells/Charm Person.md|charm person]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[/5. Mechanics/Spells/Shield.md|shield]], [[/5. Mechanics/Spells/Sleep.md|sleep]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Bestow Curse.md|bestow curse]],\
      \ [[/5. Mechanics/Spells/Phantom Steed.md|phantom steed]], [[/5. Mechanics/Spells/Vampiric Touch.md|vampiric touch]]\n\
      \n**4th level (3 slots):** [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
      \ [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\n**5th level (1 slots):** [[/5. Mechanics/Spells/Dominate Person.md|dominate\
      \ person]]"
    "name": "Spellcasting"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/stanimir-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
