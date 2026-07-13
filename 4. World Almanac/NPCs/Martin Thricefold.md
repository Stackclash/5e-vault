---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
aliases:
  - Merrin Thricefold
pronounced:
race: "[[5. Mechanics/Races/Half Elf.md|Half Elf]]"
gender: male
age: 62
alignment: Chaotic Good
occupation: []
groups: []
religions: []
personality: Quick-witted, paranoid, and deeply curious. Merrin rarely answers a question directly if a riddle would do instead.˜
ideal: Truth must never become rigid. The world needs uncertainty, trickery, and mystery to remain free.
bond: Devoted to Roark’s father and believes protecting Roark is part of a divine task given to him years ago.
flaw: His paranoia makes him distrustful of institutions and slow to trust allies.
goals: Discover why knowledge about Vecna is changing, Protect Roark until the truth of his lineage matters,Preserve forbidden knowledge before it disappears
likes: riddles and wordplay, hidden doors, forgotten libraries, clever lies
dislikes: authoritarian institutions, rigid rules, divination magic used for surveillance
partyRelationships: {}
description: |-
  A thin, sharp-eyed half-elf with prematurely silver hair and deep lines around his eyes from years of sleepless study. His cloak is worn and patched in many places but carefully maintained, suggesting someone who has lived on the road or in hiding for a long time. Ink stains mark his fingertips and the cuffs of his sleeves, and small scraps of parchment poke from nearly every pocket of his cloak.

  Around his neck hangs a simple bronze coin engraved with the laughing mask of Roark’s father — a face split in two: one smiling, one grimacing. Merrin constantly flips the coin across his knuckles when thinking.

  Despite his age, his eyes move quickly, always scanning shelves, shadows, and doorways as if expecting someone to arrive at any moment.

  Several small scars on his hands suggest past encounters with magical traps or wards.
history: |-
  Merrin was once a respected historian of divine conflicts who lectured at several magical academies across the continent. His career collapsed when he began publicly claiming that references to Vecna across ancient texts were inconsistent and being altered.

  Most scholars dismissed him as obsessive or unstable.

  Years ago, however, Merrin received a dream from the Trickster God — Roark’s father. In the dream, a voice told him that if the Whispered One ever escaped his prison, the first sign would not be destruction or undead armies.

  It would be the corruption of knowledge itself.

  From that day forward, Merrin quietly cataloged every reference to Vecna he could find across the world’s archives.

  After the magical surge in Barovia, he began noticing the changes he feared most: books that once described Vecna as history were now describing him as myth.

  Fearing the truth might vanish entirely, Merrin infiltrated the Umbral Athenaeum to research before the knowledge disappeared forever.
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
```statblock

```
^statblock

## DM Notes
### Hidden Details


### General Notes
