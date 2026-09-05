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
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Ostwin Reyes
  - the Tallyman
pronounced: OST-win RAY-ez
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 39
alignment: Neutral Evil
occupation:
  - Senior Tally Clerk, Ferrymen's Guild
  - Silent Ascendency Logistics Liaison (unofficial)
groups:
  - Ferrymen's Guild
  - Silent Ascendency
religions: []
description: |-
  Narrow, ink-stained hands and a clerk's stoop from decades bent over ledgers. Dresses a rank above his actual station — good boots, a guild coat cut better than his pay grade — paid for, though nobody's ever asked, by money that never touches an official book. Precise to the point of tedium in conversation, the kind of man who corrects your arithmetic before he's finished agreeing with you.
history: |-
  Reyes has worked the Duskferry tally-house for eighteen years, long enough to become the clerk whose hand is on nearly every manifest that matters, and trusted enough that nobody — including Guildmaster [[Anselm Corrow]] — checks his work twice. When the Silent Ascendency's network above Bruokdon needed a way to move "special cargo" through Duskferry's books without drawing a second look, Reyes was the easiest kind of recruit: not a believer, just a man with expensive taste and access nobody questioned.
  He inherited the standing arrangement — and the code name "the Tallyman" — from whichever hand ran it before Marrow's Bruokdon cell fell; he has never met anyone above him in person, only ever received instructions and payment through couriers, the same pattern [[Hesper Crane]] describes from the Cinderworks end of the chain.
personality: Precise, careful, quietly contemptuous of anyone less exacting than himself. Treats greed as a private virtue, not a vice.
ideal: Nobody remembers the clerk who never made a mistake. Nobody suspects him either.
bond: The extra income has bought him a life his Guild wage never could — he won't risk it for anyone's cause, including the one he's nominally serving.
flaw: His pride in never being questioned makes him overconfident that he never will be.
goals: Keep the arrangement quiet, keep the extra income coming, and stay exactly as invisible as he's always been.
likes: exact books, being underestimated, fine boots
dislikes: audits, couriers who ask questions, anyone implying his ledgers could be wrong
partyRelationships:
  Midnight Covenant: Acquaintance
player_impression: ""
secrets: |-
  STILL DM-ONLY (not yet revealed, and not yet named to the party — they only have the code name "the Tallyman" from [[Hesper Crane]]'s ledger as of the 2026-08-22 session): Reyes is the actual Silent Ascendency contact in Duskferry, not Guildmaster [[Anselm Corrow]]. He personally falsifies or omits manifest entries for "special cargo" shipments in exchange for payment, using his trusted position to keep them off the Guild's real books.
  He knows the next physical link in the chain — the shipments' onward route toward [[Amberfen Hollow]] — but not what happens there or who's ultimately behind any of it; he's never been curious enough to ask, and it's safer not to know.
  He is not a believer and has no loyalty worth risking his neck for. Under real pressure (arrest, exposure to Corrow, or a credible threat) he gives up the next link in the chain quickly, the same way [[Hesper Crane]] would — but he's proud and careful enough that getting him to that point takes real leverage, not just a direct question.
  Three findable pointers that he — not Corrow — is the real contact (three-clue rule): (1) [[Hesper Crane]]'s ledger, naming "the Tallyman" by code name in a pattern matching her own password arrangement; (2) the tally-house's public records, which a DC 15 Investigation check reveals have a small, consistent set of manifests with sequential entries missing, all in the same clerk's hand; (3) Reyes himself, under pressure or careful questioning, confirming it.
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
*Unmodified [[5. Mechanics/Bestiary/Humanoid/Spy.md|Spy]] (CR 1, MM) — no stat changes. Reyes reads as exactly what he is: a clerk who's dangerous with information and a hidden blade, not a fighter. Use the linked bestiary note directly if a scene ever needs his stats; this note carries his identity, motive, and secrets.*

## DM Notes
### Hidden Details
See Secrets above: he's the real Duskferry contact behind the code name "the Tallyman," not Guildmaster [[Anselm Corrow]], and he knows the route onward toward [[Amberfen Hollow]] without knowing what it actually is.

### General Notes
Created 2026-08-22 alongside [[Anselm Corrow]] and [[Amberfen Hollow]] while expanding [[Duskferry]] ahead of a likely [[The Second Ledger]] session — built for a *future* visit to Duskferry, not the Cinderworks infiltration itself. The party has only the code name as of the 2026-08-22 prep; don't reveal "Reyes" at the table until they've actually earned it.
