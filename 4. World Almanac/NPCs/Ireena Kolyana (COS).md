---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\ireena-kolyana.webp
aliases:
  - Ireena Kolyana
alignment: Lawful Good
description: >-
  Ireena Kolyana is a striking young noblewoman with auburn hair, the adopted
  daughter of the late burgomaster Kolyan Indirovich. She carries herself with
  quiet, strong-willed dignity despite the terror Strahd has already visited on
  her twice.
relationships: []
partyRelationships:
  Midnight Covenant: Friendly
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
pronounced: ee-REE-nah kohl-YAH-nah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: null
occupation:
  - Noblewoman
groups: []
religions: []
personality: >-
  Outwardly mild and gentle, but possessed of a strong will and quiet courage;
  insists on helping however she can rather than being merely protected
ideal: I won't be a passive victim in whatever fate the vampire has planned for me.
bond: >-
  Her father Kolyan, who took in a memory-less stranger and loved her as his own
  daughter, and her brother Ismark, who has never left her side
flaw: >-
  She trusts too easily those who offer her protection, even when she knows
  little about them.
goals: >-
  To see her father properly buried, then find someplace beyond Strahd's reach —
  while helping however she can against the vampire who hunts her
likes: >-
  Her father's memory, quiet moments of normalcy, those who treat her as a
  person and not a prize
dislikes: >-
  Being coddled or hidden away, the villagers' fearful avoidance of her, the fog
  that never seems to lift
history: >-
  Ireena has no memory of her life before Kolyan Indirovich found her, alone and
  lost, at the edge of the Svalich Woods near the Pillarstone of Ravenloft. He
  took her in and raised her as his own, and she grew up alongside his son
  [[Ismark Kolyanovich (COS)|Ismark]], never knowing her true parentage.
  Unbeknownst to nearly everyone in Barovia — herself included — Ireena carries
  the same soul as Tatyana, the woman Strahd loved and lost centuries ago, and
  is in every way that matters to him her reincarnation. Strahd visited the
  Kolyanovich mansion nightly for weeks, biting her twice, and means to make her
  his bride and turn her into a vampire. The nightly assaults of wolves and
  worse besieging the mansion broke her adoptive father's heart, and he died
  three days before the party's arrival — at which point the attacks curiously
  stopped. Ireena refuses to leave Barovia until her father is given a proper
  burial, and she knows she cannot remain safe within Castle Ravenloft's shadow
  much longer.
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
*Source: Curse of Strahd p. 44*

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
"name": "Ireena Kolyana (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "15"
"ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "14"
"hit_dice": "2d8"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"gear":
  - "[[/5. Mechanics/Items/Rapier.md|rapier]]"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8\
      \ + 1) piercing damage."
    "name": "Rapier"
"reactions":
  - "desc": "Ireena adds 2 to its AC against one melee attack that would hit it. To\
      \ do so, Ireena must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/ireena-kolyana-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
