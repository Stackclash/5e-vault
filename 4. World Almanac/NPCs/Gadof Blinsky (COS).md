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
images:
  - 4. World Almanac\NPCs\img\gadof-blinsky.webp
aliases:
  - Gadof Blinsky
alignment: Chaotic Good
description: >-
  Gadof Blinsky is Vallaki's beleaguered toymaker, a heavyset man who calls
  himself "a wizard of tiny wonders" and dresses the part in a moth-eaten
  jester's cap. His shop sells cheerful trinkets alongside disturbingly morbid
  ones, and business has all but dried up.
history: >-
  Blinsky considers himself a student of the legendary inventor Fritz von Weerg,
  and has spent years perfecting his craft in a shop most of Vallaki now avoids
  — his fondness for macabre playthings unsettles as many customers as it
  charms. For six months only one paying customer crossed his threshold: a
  foreign traveler named [[Rictavio (COS)|Rictavio]], who bought a stuffed
  Vistana doll and, sensing the toymaker's loneliness, gave him a pet monkey
  named [[Piccolo (COS)|Piccolo]]. Overjoyed, Blinsky has been training Piccolo
  to fetch stock from high shelves and dressed him in a tailored ballerina tutu.

  Behind his cheerful patter lies a darker secret: for months, [[Izek Strazni
  (COS)|Izek Strazni]] — the burgomaster's fire-armed henchman — has forced
  Blinsky to craft an increasingly lifelike doll of a woman he's never met every
  month, threatening to burn down the shop if he refuses. Izek pays nothing for
  the dolls and has never told Blinsky who they're modeled after; Blinsky
  quietly obeys out of fear, never suspecting the cruelty behind the commission.
  The burgomaster, [[Baron Vargas Vallakovich (COS)|Baron Vargas Vallakovich]],
  keeps him afloat with a small monthly stipend for festival decorations, and
  Blinsky, ever hopeful, believes that if he can just make enough people smile —
  starting with Barovia's children — the town's suffering might finally lift.
relationships: []
partyRelationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Shops/Blinsky Toys.md|Blinsky Toys]]'
pronounced: GAD-off BLIN-skee
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 54
occupation:
  - Toymaker
groups: []
religions: []
personality: >-
  Eccentric, lonely, desperate for approval; hides real fear behind a sing-song
  showman's patter
ideal: 'Everyone deserves a little joy, even in a place like this.'
bond: >-
  Piccolo, the monkey companion Rictavio gave him, is the only real friend he
  has left.
flaw: >-
  His fixation on eerie, morbid toys drives away the very customers he's
  desperate to please.
goals: >-
  To find happiness for the children of Barovia (and himself) through his toys,
  and to recover Fritz von Weerg's lost clockwork masterpiece from Castle
  Ravenloft.
likes: >-
  Cheerful company, Piccolo, praise for his craftsmanship, stories about the
  legendary toymaker Fritz von Weerg
dislikes: 'Being laughed at, Izek Strazni''s threats, empty shelves, silence in the shop'
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
*Source: Curse of Strahd p. 118*

TBD

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
"name": "Gadof Blinsky (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
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
"image": "/4. World Almanac/NPCs/token/gadof-blinsky-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
