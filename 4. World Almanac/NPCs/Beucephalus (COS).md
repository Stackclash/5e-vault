---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/large
  - monster/type/fiend
condition: healthy
images:
  - 4. World Almanac\NPCs\img\beucephalus.webp
aliases:
  - Beucephalus
alignment: Neutral Evil
description: >-
  A monstrous black horse wreathed in smoke, its mane and hooves burning
  with hellish fire, smoke billowing from its nostrils with every breath.
history: >-
  Entombed within Crypt 39 of Castle Ravenloft's catacombs — marked by a wry
  epitaph reading "Beucephalus, the Wonder Horse" — this nightmare has
  served as Strahd von Zarovich's steed for longer than anyone in Barovia
  can remember, carried to war whenever its master rides out.
relationships: []
partyRelationships: {}
location: null
pronounced: byoo-SEF-uh-lus
race: '[[5. Mechanics/Bestiary/Fiend/Nightmare.md|Nightmare]]'
gender: male
age: null
occupation:
  - Strahd von Zarovich's steed
groups: []
religions: []
personality: >-
  Vicious and utterly loyal to Strahd, radiating heat and menace — it
  attacks anyone who dares open its crypt or threatens its master.
ideal: Serve Strahd without question.
bond: Bound to Strahd von Zarovich as his eternal mount.
flaw: Devotion to Strahd overrides all self-preservation.
goals: To carry Strahd wherever he commands and destroy any who threaten him.
likes: "The scent of fear, moonless skies, its master's presence"
dislikes: 'Sunlight, holy magic, being parted from Strahd'
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
*Source: Curse of Strahd p. 93*

Beucephalus is [[Strahd Von Zarovich (COS)|Strahd von Zarovich]]'s nightmare — an enormous, fiendish horse wreathed in smoke, its mane and hooves burning with hellish fire. It lies dormant within Crypt 39 of [[Castle Ravenloft]]'s catacombs, sealed behind a door larger than any other in the crypts and marked only by a wry epitaph: "Beucephalus, the Wonder Horse: May the flowers grow ever brighter where he trod." When the crypt is opened, the nightmare bursts free and attacks.

## Strahd's Steed

When Strahd rides to war — to [[Yester Hill]] to confront Wintersplinter, or wherever else his will takes him — Beucephalus carries him, exiting the high tower's central shaft through the gash torn in its roof. Anyone foolish enough to slay the beast earns Strahd's undying, merciless wrath.

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
"name": "Beucephalus (COS)"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "8d10 + 24"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "15"
"speed": "60 ft., fly 90 ft."
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": "understands Abyssal, Common, and Infernal but can't speak "
"cr": "3"
"traits":
  - "desc": "Beucephalus can grant resistance to fire damage to anyone riding it."
    "name": "Confer Fire Resistance"
  - "desc": "Beucephalus sheds bright light in a 10-foot radius and dim light for\
      \ an additional 10 feet."
    "name": "Illumination"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
    "name": "Hooves"
  - "desc": "Beucephalus and up to three willing creatures within 5 feet of it magically\
      \ enter the Ethereal Plane from the Material Plane, or vice versa."
    "name": "Ethereal Stride"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/beucephalus-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
