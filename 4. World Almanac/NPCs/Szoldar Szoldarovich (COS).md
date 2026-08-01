---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\052-cos05-05.webp
aliases:
  - Szoldar Szoldarovich
alignment: Neutral
description: >-
  A grim, haunted-looking hunter who says little and carries a bow
  notched once for every wolf he's killed.
history: >-
  Son of the late Szoldar Grygorovich — who once gifted the burgomaster's
  family a mounted bear's head still displayed in their mansion — Szoldar
  now hunts wolves for a living alongside his friend [[Yevgeni Krushkin
  (COS)|Yevgeni Krushkin]], selling the meat to survive. The dangerous,
  bloody work has left both men grim and quietly broken, and Szoldar
  spends most of his free time drowning his sorrows at the [[Blue Water
  Inn]].
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
pronounced: ZOL-dar zol-DAR-oh-vich
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 34
occupation:
  - Wolf hunter
groups:
  - Vallaki wolf hunters
religions: []
personality: 'Grim, taciturn, haunted by the dangerous work he does'
ideal: Hard work and silence are their own kind of honesty.
bond: 'His hunting partner, Yevgeni Krushkin, and the family he rarely speaks of.'
flaw: >-
  He drowns his sorrows in drink as often as he hunts, and says little
  even to those who care about him.
goals: To keep his family fed by selling wolf meat, and to survive one more hunt.
likes: "The hunt, quiet nights at the Blue Water Inn, his late father's memory"
dislikes: "Talking about his feelings, the wolves he's forced to kill, the Burgomaster's foolishness"
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
*Source: Curse of Strahd p. 100*

Szoldar Szoldarovich is a local wolf hunter, one of the grim, haunted men who keep Vallaki fed and its wolf population thinned at great personal cost. He has a notch in his bow for every kill and precious little to say about any of them.

## A Dangerous Trade

Szoldar hunts alongside his friend [[Yevgeni Krushkin (COS)|Yevgeni Krushkin]], selling wolf meat to make ends meet in a town too frightened of the surrounding woods to do the work themselves. Most of the wolf heads mounted on the walls of the [[Blue Water Inn]] are his and Yevgeni's handiwork. Szoldar's late father, Szoldar Grygorovich, once gifted the burgomaster's family the mounted bear's head that hangs in their mansion — a rare point of pride Szoldar almost never mentions.

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
"name": "Szoldar Szoldarovich (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "[[/5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "11"
  - !!int "13"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+5"
"gear":
  - "[[/5. Mechanics/Items/Longbow.md|longbow]]"
  - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
"senses": "passive Perception 15"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
  - "desc": "Szoldar has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or sight."
    "name": "Keen Hearing and Sight"
"actions":
  - "desc": "Szoldar makes two melee attacks or two ranged attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, ranged 150/600 ft., one target. *Hit:*\
      \ 6 (1d8 + 2) piercing damage."
    "name": "Longbow"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/szoldar-szoldarovich-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
