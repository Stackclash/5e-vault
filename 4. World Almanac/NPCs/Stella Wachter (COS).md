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
  - Stella Wachter
alignment: Chaotic Good
description: >-
  Stella Wachter is [[Lady Fiona Wachter (COS)|Lady Fiona Wachter]]'s
  teenage daughter, driven mad after a cruel, failed arranged marriage to
  [[Victor Vallakovich (COS)|Victor Vallakovich]]. Convinced she is a cat,
  she is kept locked in a bare, straw-strewn room at Wachterhaus, scurrying
  on all fours and hissing at anyone who comes near.
history: >-
  Fiona arranged Stella's betrothal to Victor Vallakovich as part of a
  scheme to gain a foothold in the burgomaster's mansion, but Victor showed
  no interest in Stella and spoke to her with such cruelty that something in
  her broke. Convinced now that she is a cat, Stella scratches and hisses at
  visitors and begs to be left alone. A greater restoration spell can cure
  her madness; if freed of it, she blames her mother bitterly for treating
  her as a pawn, has nothing kind to say about Victor, and, having no one
  else left to trust in Vallaki, will gladly accept a place in Father
  Lucian's care at St. Andral's church if the characters bring her there.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
pronounced: STEL-uh VAHK-ter
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: female
age: 19
occupation: []
groups:
  - House Wachter
religions: []
personality: >-
  Currently convinced she is a cat - feral, frightened, and starved for any
  real kindness
ideal: To be treated as a person again, not a pawn or a broken thing to be locked away.
bond: Whatever stranger shows her the smallest kindness - she latches onto anyone gentle immediately
flaw: Her trauma has fractured her mind so completely that she now believes, with total conviction, that she is a cat
goals: >-
  While lost in madness: to be left alone in her room. If cured: to escape
  Wachterhaus and her mother forever, ideally under Father Lucian's
  protection
likes: Gentleness, warmth, small dark hiding places
dislikes: Being touched by strangers, the name Victor Vallakovich, her mother, loud noises
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
*Source: Curse of Strahd p. 113*

Scurrying away on all fours in a soiled nightgown, hissing at anyone who comes near, Stella Wachter is [[Lady Fiona Wachter (COS)|Lady Fiona Wachter]]'s daughter - and, in her own broken mind, a cat.

## A Pawn in Her Mother's Scheme

Fiona once conspired to wed young Stella to the burgomaster's son, [[Victor Vallakovich (COS)|Victor Vallakovich]], as part of a plot to gain a foothold in the baron's mansion. Victor found Stella demented and showed no interest in her whatsoever - worse, he spoke such unkind words to her that something in her mind gave way entirely. Fiona had no choice but to lock her own daughter away, and the door to Stella's room is now locked from both sides, with only Fiona holding a key.

## Little Kitty

Kept in a bare, straw-strewn room with an iron-framed bed fitted with leather straps, Stella hisses and scratches at visitors, insisting "little kitty doesn't know you" and "little kitty doesn't like the smell of you." A greater restoration spell rids her of the madness that convinces her she's a cat. If cured, she blames her mother bitterly for treating her as a pawn in a scheme to seize the town, and has nothing kind to say about Victor, whose very name makes her cringe. With her wits restored, Stella feels she has no one left in Vallaki she can trust - she latches onto any character who shows her kindness, and if brought to St. Andral's church, Father Lucian gladly takes her in.

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
"name": "Stella Wachter (COS)"
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
"image": "/4. World Almanac/NPCs/token/stella-wachter-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
