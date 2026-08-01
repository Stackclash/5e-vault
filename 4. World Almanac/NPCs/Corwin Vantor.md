---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
condition: dead
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
aliases:
  - Corwin Vantor
pronounced: KOR-win VAN-tor
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 58
alignment: Neutral Good
occupation:
  - Field Naturalist and Monster-Hunter (independent)
groups: []
religions: []
description: |-
  A grizzled human, thick-armed and weathered, with a stiff left hand — three fingers replaced by scar tissue after "getting too close" to something monstrous decades ago. He kept his gray hair cropped short out of practicality, not vanity, and always smelled faintly of preserving oils and old leather from a lifetime of field specimens.
  Blunt, dry, and entirely unimpressed by titles — he treated a duke and a quartermaster the same way if they wasted his time.
history: |-
  Corwin spent decades attached to mercenary companies and standing armies as a field naturalist, cataloguing the physiology of monstrous humanoids his units fought or captured — including, more than once, doppelgangers and other shapechangers infiltrating the ranks. Out of old battlefield necessity, not any particular request, he spent years refining a way to tell a doppelganger's heartbeat from a human one, eventually building a working prototype.
  He had no ties to Roark Battleborn or anyone else in the party — his reputation reached [[Mistress Lyssandra Veil|Lyssandra Veil]] through Athenaeum academic circles once the doppelganger crisis broke, and she arranged to acquire the prototype directly. Roark came along as her escort for the errand, nothing more; the two men had never met before that day.
  He was killed defending the device when Silent Ascendency agents ambushed the meeting meant to hand it over, taking Roark and Lyssandra captive. The real prototype was lost or destroyed in the struggle.
personality: Gruff, plainspoken, and quietly proud of work nobody outside his old units ever noticed.
ideal: A tool that saves one life earns its keep, whether or not anyone remembers who built it.
bond: The soldiers he served with, many of whom are dead — his research was always for them first.
flaw: Worked alone out of habit, even when caution said otherwise — he arranged the handoff with no one else in the loop and no protection.
goals: (deceased — unrealized) Get the device into hands that could use it before more infiltrators went unnoticed.
likes: Fieldwork, plain talk, being useful.
dislikes: Bureaucracy, being patronized, unfinished work.
partyRelationships:
  Midnight Covenant: Ally
player_impression: |-
  A monster-hunter Lyssandra Veil brought in to build a doppelganger-detection device once the Athenaeum's crisis broke; Roark escorted her to the handoff, nothing more. As of the party's current understanding, the meeting went smoothly and the device was retrieved successfully — they don't yet know Corwin was killed and the real prototype lost in an ambush.
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
Killed off-screen, before the session opens — exists in play only as a body and a story other NPCs/cultists tell. No stat block needed.
