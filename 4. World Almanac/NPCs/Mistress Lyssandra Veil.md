---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Umbral Athenaeum.md|The Umbral Athenaeum]]"
condition: healthy
images:
  - z_Assets/NPCs/Lyssandra Veil.png
relationships: []
tags:
  - npc
aliases:
  - Mistress Lyssandra Veil
pronounced: liss-AN-drah VAYL
race: "[[5. Mechanics/Races/Tiefling.md|Tiefling]]"
gender: female
age: 74
alignment: Chaotic Neutral
occupation:
  - Councilor of Illusion
groups:
  - Umbral Athenaeum Council
religions: []
description: |-
  Lyssandra Veil is a tiefling with violet skin and curved obsidian horns that frame her face elegantly. Her robes shimmer constantly with shifting illusion magic, causing the colors and patterns to subtly change every few moments.
  Her eyes gleam with mischievous amusement, and her smile always suggests she knows something others do not.
  Illusory butterflies or drifting motes of light often follow her when she walks through the Institute.
history: |-
  Lyssandra once replaced an entire noble banquet with illusions purely to prove that perception shapes reality.
  When the Umbral Athenaeum's doppelganger crisis broke, she tracked down the independent monster-hunter Corwin Vantor and arranged to buy his heartbeat-detection prototype outright, taking Roark Battleborn along as an escort. Silent Ascendency agents ambushed the handoff, killed Corwin, and took them both — Lyssandra specifically for her illusion mastery, which the cell wanted for ward-work of its own. She spent several days a captive and was being moved out of Bruokdon on a smuggling wagon alongside stolen magic items when the Midnight Covenant turned the wagon off its route and freed her and Roark (S44).
personality: Playful and mysterious.
ideal: Reality is subjective.
bond: Protects illusion magic from those who see it as frivolous.
flaw: Enjoys secrets too much.
goals: Push illusion magic into new philosophical territory.
likes: theater, practical jokes
dislikes: rigid thinking
partyRelationships:
  Midnight Covenant: Ally
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
>```meta-bind
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

```
^statblock

## DM Notes
### Hidden Details


### General Notes
