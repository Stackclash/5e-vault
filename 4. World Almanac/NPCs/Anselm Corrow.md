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
  - monster/cr/1/8
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Anselm Corrow
  - the Guildmaster
pronounced: AN-selm CORR-oh
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 58
alignment: Lawful Neutral
occupation:
  - Guildmaster, Ferrymen's Guild
groups:
  - Ferrymen's Guild
religions: []
description: |-
  A broad, weathered man who still dresses like a working ferryman rather than the wealthiest person in Duskferry — oilskin coat, boots that have never been dry long enough to stay clean, a guild signet ring worn smooth from decades of use. Speaks in short, practical sentences, the way a man does who has spent his life on a river that doesn't care how much he talks. Keeps a private ledger of favors owed alongside the Guild's official one and treats the two with equal seriousness.
history: |-
  Corrow was born on the docks and has run every job the Guild offers before running the Guild itself — poler, tally clerk, lock inspector, dockmaster — over nearly forty years. He inherited the Guildmaster's chair a decade ago on reputation for fairness rather than ambition, and has kept Duskferry's ancient bargain with the crown exactly as he found it: the crossing runs, the toll tithe gets paid on schedule, and Bruokdon doesn't look too closely at how the Guild keeps its own books.
  He has long known that certain manifests move through the tally-house paid for in more than the standard toll — cargo nobody asks about twice, couriers who don't linger. He has never pushed to learn who's behind it or why, telling himself it's not a Guildmaster's business to audit every silence his clerks keep. That choice has never cost him anything he's noticed yet.
personality: Blunt, practical, protective of the Guild's reputation for discretion above almost everything else.
ideal: The crossing runs, the tithe gets paid, and the rest is nobody's business but the Guild's.
bond: Duskferry and the Ferrymen's Guild — forty years of his life, and he means to leave both better than he found them.
flaw: His comfortable rule of not asking questions has let something dangerous grow in his own tally-house without his noticing.
goals: Keep the crossing running, keep the crown satisfied, keep the Guild's business the Guild's own.
likes: a clean ledger, paid tolls, a quiet dock at night
dislikes: crown inspectors, being lied to by his own clerks, anyone who threatens the bargain that keeps Duskferry independent
partyRelationships:
  Midnight Covenant: Acquaintance
player_impression: ""
secrets: |-
  STILL DM-ONLY (not yet revealed): Corrow is not Silent Ascendency and doesn't know what "special cargo" actually is or who's ultimately behind it — his blindness is willful, not complicit. He's long known a handful of manifests move through the tally-house paid for above the standard toll and has chosen not to ask why, because the extra revenue and the Guild's reputation for discretion matter more to him than the question does.
  He would cooperate honestly with the party if approached as themselves rather than as smugglers — legitimate access to the tally-house archives is his to grant, and he'd genuinely want to know if something dangerous were using his Guild. What he can't offer is insider knowledge of the falsified entries themselves; that's [[Ostwin Reyes]]'s doing, not his, and Corrow has no idea his own senior clerk is the actual contact.
  If shown hard evidence of what's really moving through his docks, he reacts with real anger, not denial — this is a genuine violation of what he's spent his life building, not a front he's protecting.
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
*Not built for combat — a background/social NPC. If a fight ever becomes necessary, reskin [[5. Mechanics/Bestiary/Humanoid/Noble.md|Noble]] (CR 1/8, MM) unmodified; he'd fight to defend the Guildhall, not go looking for one.*

## DM Notes
### Hidden Details
See Secrets above: his blindness to the Ascendency's use of the Guild is willful but genuine — he doesn't know, and would react with real anger if shown proof.

### General Notes
Created 2026-08-22 alongside [[Ostwin Reyes]] and [[Greyfen Hollow]] while expanding [[Duskferry]] ahead of a likely [[The Second Ledger]] session — built for a *future* visit to Duskferry, not the Cinderworks infiltration itself.
