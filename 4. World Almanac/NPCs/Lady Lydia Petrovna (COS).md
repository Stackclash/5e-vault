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
  - Lady Lydia Petrovna
alignment: Lawful Good
description: >-
  Lady Lydia Petrovna is the Baroness of Vallaki, wife to
  [[Baron Vargas Vallakovich (COS)|Baron Vargas Vallakovich]] and younger
  sister of the town's priest, Father Lucian Petrovich. She has fully
  embraced her husband's philosophy that relentless cheer can ward off
  Strahd, throwing daily tea parties even as her own household quietly
  falls apart around her.
history: >-
  A descendant of Tasha Petrovna, a priest entombed in Castle Ravenloft,
  Lydia is a gods-fearing woman who married into the Vallakovich family and
  adopted her husband's belief that happiness alone might save Vallaki from
  Strahd. She hosts daily tea-and-sandwich parties in the parlor for
  "dearest friends" - mostly poor townsfolk who tolerate her only for the
  free food - and has set them to sewing children's costumes and weaving a
  wicker sun for the Festival of the Blazing Sun. Her nervous laughter at
  the baron's every remark has become a reflex, and it has only grown more
  brittle since her lady-in-waiting vanished without a trace alongside the
  household butler.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
pronounced: LID-ee-uh peh-TROHV-nuh
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: female
age: 39
occupation:
  - Baroness of Vallaki
groups:
  - House Vallakovich
  - House Petrovich
religions:
  - The Morninglord
personality: Anxiously cheerful - her good humor is a nervous habit as much as genuine hope
ideal: If I stop smiling, I don't know what happens next.
bond: Her brother, Father Lucian Petrovich, and the Morninglord's faith he keeps alive at St. Andral's
flaw: Her forced good cheer barely masks real terror, and it has begun to fray since her lady-in-waiting vanished
goals: To keep up appearances of happiness in the mansion and town, and to learn what happened to her missing lady-in-waiting
likes: Tea parties, gossip with her "dearest friends," perfume, her bridal gown and memories of happier days
dislikes: Silence, unhappiness, being contradicted, dwelling on what haunts the mansion at night
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
*Source: Curse of Strahd p. 105*

At the risk of sacrificing her sanity, the baron's wife, Lydia Petrovna, has embraced her husband's philosophy of happiness. She laughs at his every comment, to the extent that it has become a nervous reflex, and tries to spread good cheer by throwing daily tea-and-sandwich parties for her "dearest friends."

## Tea and Cake

Each day, eight or so Vallakian peasant women gather around the dining table to drink tea and eat cake at Lydia's invitation, stitching children's costumes and weaving a wicker sun for the upcoming Festival of the Blazing Sun. Many of these "dearest friends" are poor folk who tolerate the baroness only because they crave something warm to eat and drink, but Lydia seems not to notice, or not to mind.

## A Priest's Sister

Lydia is a gods-fearing woman and the younger sister of the town priest, Father Lucian Petrovich, who oversees St. Andral's church and its faith in the Morninglord. She is also a descendant of Tasha Petrovna, a priest entombed within Castle Ravenloft itself.

## Cracks in the Cheer

The baroness used to spend long hours in her private room upstairs, fondling her perfume collection and gazing into her own reflection, but she has spent almost no time there since her lady-in-waiting vanished without a trace alongside the household butler. She assumes that any visitors to the mansion have come at her husband's invitation, and calls for the maid to bring them to the den before sending word to the baron.

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
"name": "Lady Lydia Petrovna (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "10"
"hp": !!int "4"
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
"actions":
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4)\
      \ bludgeoning damage."
    "name": "Club"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/lady-lydia-petrovna-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
