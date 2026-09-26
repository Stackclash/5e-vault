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
  - Naerissa
  - the Elder
pronounced: nay-EAR-ih-sah
race: "[[5. Mechanics/Races/Elf.md|Elf]]"
gender: female
age: 410
alignment: Neutral Good
occupation:
  - Elder, dusk elf enclave of Duskferry
  - Shrine-keeper, Eilistraee
groups:
  - The Unbroken Circle
  - Dusk Elves of Duskferry
religions:
  - "[[Drow Eilistraee (MTF)|Eilistraee]]"
description: |-
  Twilight-skinned and soft-spoken, with the unhurried stillness of someone who stopped being surprised by the world a long time ago. She wears no pendant, no mark of rank at all — a deliberate absence, for someone who leads a shrine. Her voice carries the low, patient cadence of a person used to sitting with grief rather than rushing past it.
history: |-
  Years ago, Naerissa was part of a small group led out of the Underdark by [[Faerah Duskrane]]'s sister — one of several such crossings the sister guided before her presumed death. Naerissa settled at Duskferry's edge among a handful of other escapees and their descendants, a small reclusive enclave the town calls the "dusk elves," and has tended the reed-bank shrine to Eilistraee there ever since. She wears no bearer-pendant herself; she was led out, not marked to lead.
  When Faerah's crescent-moon pendant caught the moonlight at the shrine, Naerissa recognized it on sight as the twin of the one her sister wore — proof, to her, that the woman who saved her life was doing that work for strangers, not just for one sister in secret.
personality: Gentle, patient, and unhurried — the cadence of someone long practiced at sitting with things she can't fully explain.
ideal: The line of bearers is never broken, even when a single bearer is lost from sight.
bond: The woman who led her out of the Underdark and asked nothing in return.
flaw: Protective silence — she will not be pushed past what she's willing to say about the wider Circle, even with allies she trusts.
goals: Protect the shrine and the enclave's quiet life in Duskferry; watch for any sign the Circle's bearer-line is still moving.
likes: moonlit water, old songs, patient listeners
dislikes: being rushed, questions asked as demands, the shrine's location spreading
partyRelationships:
  Midnight Covenant: Friendly
player_impression: |-
  Elder of a small, reclusive dusk elf community at Duskferry's edge, tending a hidden shrine to Eilistraee on a reed-bank spit downshore of the Waterline. She was guided out of the Underdark years ago by a group led by Faerah's sister, and recognized Faerah's pendant on sight as the twin of the one her sister wore — proof the sister's escape work was real, organized, and larger than Faerah ever knew. She spoke of a bigger, older congregation of the same order somewhere in the Greenfall wilds, but wouldn't say more about it.
secrets: |-
  STILL DM-ONLY (not yet revealed): per the campaign bible, [[Faerah Duskrane]]'s sister — believed killed fleeing the Underdark — may actually be alive, having escaped independently. That thread is reserved for Act II, Arc 2 and must not be confirmed through Naerissa (or anyone else) before then. Naerissa's own knowledge doesn't extend past "she did not leave with us" — she should not be played as secretly knowing whether the sister survived, only as someone who never learned what became of her.
  The larger Unbroken Circle congregation lives in the Greenfall wilds. Naerissa deliberately avoids the subject and won't be drawn on why if pressed — this is the seed for the campaign bible's Act I/II Eilistraee-congregation side quest (a hidden surface congregation with a corrupted-convert infiltrator), not yet built or scheduled.
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
*Not built for combat — a background/social NPC. If a fight ever became necessary, reskin a low-CR Priest-type caster (MM); she would not be found fighting for the shrine's location, only its silence.*

## DM Notes
### Hidden Details
See Secrets above: the "sister may be alive" thread is a campaign-bible-level tension, not something Naerissa herself confirms or denies — she genuinely doesn't know.

### General Notes
Created 2026-09-05 (S46), alongside [[Nimrie]], when Faerah Duskrane's moonlit pendant led her to the Eilistraee shrine at Duskferry. Seeds the campaign bible's Act I/II Eilistraee-congregation side quest (Active Threads / Character Tie-Ins → Faerah) without launching it.
