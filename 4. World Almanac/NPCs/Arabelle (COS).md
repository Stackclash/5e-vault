---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - Arabelle
alignment: Lawful Neutral
description: >-
  A raven-haired, alabaster-skinned Vistana girl of seven, more solemn and
  self-possessed than her age would suggest — as if some larger destiny
  already weighed on her.
history: >-
  Arabelle is the daughter of [[Luvash (COS)|Luvash]], co-leader of the
  Vistani camp outside Vallaki, and — though neither she nor her father
  know it — a descendant of [[Madam Eva (COS)|Madam Eva]] carrying a
  trace of Barovian royal blood. She vanished from camp one night,
  kidnapped by the desperate fisherman [[Bluto Krogarov (COS)|Bluto
  Krogarov]], who believed drowning a lucky Vistana would end his run of
  bad luck on Lake Zarovich. Rescued in time, she demands only to be
  returned home, certain that a great destiny still awaits her.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Lake Zarovich.md|Lake Zarovich]]'
pronounced: AIR-uh-bell
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 7
occupation: []
groups:
  - Vistani (Vallaki camp)
religions: []
personality: 'Curious, spirited, innocent'
ideal: The world is full of wonder and adventure.
bond: Her family and the Vistani community
flaw: Naïve and unaware of the dangers around her
goals: >-
  To explore and experience new things, to someday become a great storyteller
  like her ancestors
likes: 'Stories, animals, exploring'
dislikes: 'Being confined or restricted, cruelty'
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
*Source: Curse of Strahd p. 38*

Arabelle is the seven-year-old daughter of [[Luvash (COS)|Luvash]], one of the two brothers who lead the Vistani camp outside Vallaki. She acts far older than her years, carrying herself with a quiet confidence that unsettles adults who expect a frightened child.

## Kidnapped

Arabelle disappeared from camp after [[Bluto Krogarov (COS)|Bluto Krogarov]], a destitute Vallaki fisherman convinced that Vistani are lucky, snatched her in a desperate bid to change his fortunes on Lake Zarovich. He bound her, sealed her in a burlap sack, and threw her into the lake as an offering. Characters who act quickly can still save her before she drowns.

## A Hidden Destiny

Unknown to Arabelle or her father, she is a descendant of [[Madam Eva (COS)|Madam Eva]] and carries a trace of Barovian royal blood in her veins — a connection to Strahd himself that neither of them suspects. She has no memory of this lineage, only an unshakable, childlike certainty that a great destiny awaits her.

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
"name": "Arabelle (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "10"
"hp": !!int "2"
"hit_dice": "1d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"gear":
  - "[[/5. Mechanics/Items/Club.md|club]]"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/arabelle-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
