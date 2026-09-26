---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
aliases:
  - Nimrie
pronounced:
race: "[[5. Mechanics/Races/Elf Drow.md|Elf Drow]]"
gender: female
age:
alignment: Neutral Good
occupation: []
groups: []
religions:
  - "[[Drow Eilistraee (MTF)|Eilistraee]]"
description: |-
  A drow woman met in passing at Duskferry, on the Waterline the night the fog broke early. Little is established about her beyond that meeting — she recognized [[Faerah Duskrane]] as kin in some sense worth acting on, and brought her to Naerissa without ceremony or explanation.
history: |-
  Encountered for the first time in S46. She led Faerah Duskrane to Naerissa and the dusk elves' shrine to Eilistraee, then stepped back rather than joining the prayer herself. Her connection to the shrine, the Unbroken Circle, or Duskferry itself is not yet established — open for a future session.
personality: ""
ideal: ""
bond: ""
flaw: ""
goals: ""
likes: ""
dislikes: ""
partyRelationships:
  Midnight Covenant: Friendly
player_impression: |-
  A drow woman the party met at Duskferry, who recognized something in Faerah worth acting on and brought her to Naerissa and the shrine. She didn't explain herself further, and the party hasn't learned much about her yet.
secrets: ""
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
*Not built for combat yet — nothing about her has been established in play that suggests she needs one. Revisit if she reappears.*

## DM Notes
### Hidden Details
None written yet — she's a blank slate beyond the S46 introduction. Good candidate to tie into the Unbroken Circle / Eilistraee-congregation thread if the DM wants a recurring face for it, but that's not decided.

### General Notes
Created 2026-09-05 (S46) as the bridge character who introduced [[Faerah Duskrane]] to [[Naerissa]] at the Duskferry shrine. Most fields intentionally left blank — race and religion are inferred from the scene (drow, present at an Eilistraee shrine) rather than stated outright in play; confirm or adjust if she comes up again.
