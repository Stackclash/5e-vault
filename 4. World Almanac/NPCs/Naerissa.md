---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Settlements/Duskferry.md|Duskferry]]"
condition: healthy
gist: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
relationships: [ { target: "[[4. World Almanac/Factions/The Unbroken Circle.md|The Unbroken Circle]]", type: member }, { target: "[[4. World Almanac/Factions/Dusk Elves of Duskferry.md|Dusk Elves of Duskferry]]", type: member } ]
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
party_relationships:
  Midnight Covenant: Friendly
summary: |-
  Elder of a small, reclusive dusk elf community at Duskferry's edge, tending a hidden shrine to Eilistraee on a reed-bank spit downshore of the Waterline. She was guided out of the Underdark years ago by a group led by Faerah's sister, and recognized Faerah's pendant on sight as the twin of the one her sister wore — proof the sister's escape work was real, organized, and larger than Faerah ever knew. She spoke of a bigger, older congregation of the same order somewhere in the Greenfall wilds, but wouldn't say more about it.
secrets: |-
  STILL DM-ONLY (not yet revealed): per the campaign bible, [[Faerah Duskrane]]'s sister — believed killed fleeing the Underdark — may actually be alive, having escaped independently. That thread is reserved for Act II, Arc 2 and must not be confirmed through Naerissa (or anyone else) before then. Naerissa's own knowledge doesn't extend past "she did not leave with us" — she should not be played as secretly knowing whether the sister survived, only as someone who never learned what became of her.
  The larger Unbroken Circle congregation lives in the Greenfall wilds. Naerissa deliberately avoids the subject and won't be drawn on why if pressed — this is the seed for the campaign bible's Act I/II Eilistraee-congregation side quest (a hidden surface congregation with a corrupted-convert infiltrator), not yet built or scheduled.
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'race'})` |
> **Gender** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})` |
> **Age** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'age'})` |
> **Alignment** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'alignment'})` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'occupation'})` |
> **Current Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Faction(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["member","leader","founder","agent","former-member"].includes(r.type)).map(r => r.target).join(", ")` |
> **Religion(s)** | `INPUT[inlineList:religions]` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(Lore), option(Player-Facing), option(Connections), option(Stats), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Appearance** `INPUT[text:appearance]`
> >
> > **Voice** `BUTTON[pop-voice]`
> > `INPUT[textArea:voice]`
> >
> > **Goals** `BUTTON[pop-goals]`
> > `INPUT[textArea:goals]`
> >
> > **Personality** `BUTTON[pop-personality]`
> > `INPUT[textArea:personality]`
> >
> > **Ideal** `BUTTON[pop-ideal]`
> > `INPUT[textArea:ideal]`
> >
> > **Bond** `BUTTON[pop-bond]`
> > `INPUT[textArea:bond]`
> >
> > **Flaw** `BUTTON[pop-flaw]`
> > `INPUT[textArea:flaw]`
> >
> > **Likes** `BUTTON[pop-likes]`
> > `INPUT[textArea:likes]`
> >
> > **Dislikes** `BUTTON[pop-dislikes]`
> > `INPUT[textArea:dislikes]`
>
> > [!tab|no-t] Lore
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **History** `BUTTON[pop-history]`
> > `INPUT[textArea:history]`
>
> > [!player] Player-Facing
> > **Revealed to the party** `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['revealed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})`
> >
> > **Public name** `$=await dv.view('utils/metaBindInput', {type: 'text', field: ['public_name', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (optional: shown instead of the note name)
> >
> > **Also show** `$=await dv.view('utils/metaBindInput', {type: 'inlineList', field: ['reveal', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (extra fields the site may show, e.g. images, occupation)
> >
> > **Summary** `BUTTON[pop-summary]`
> > `INPUT[textArea:summary]`
> >
> > **Facts**
> > ```datacorejsx
> > const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
> > return function View() { return <FactsTable /> }
> > ```
>
> > [!tab|no-t] Connections
> > `BUTTON[add-relationship]` `BUTTON[remove-relationship]`
> >
> > ```dataviewjs
> > await dv.view("views/npcRelationships", { current: dv.current() })
> > ```
> >
> > **Quests**
> > ```dataview
> > LIST FROM #quest WHERE contains(npcs.name, this.file.link)
> > ```
> >
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(npcs, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Stats
> > *Not built for combat — a background/social NPC. If a fight ever became necessary, reskin a low-CR Priest-type caster (MM); she would not be found fighting for the shrine's location, only its silence.*
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> > See Secrets above: the "sister may be alive" thread is a campaign-bible-level tension, not something Naerissa herself confirms or denies — she genuinely doesn't know.
> >
> > ### General Notes
> > Created 2026-09-05 (S46), alongside [[Nimrie]], when Faerah Duskrane's moonlit pendant led her to the Eilistraee shrine at Duskferry. Seeds the campaign bible's Act I/II Eilistraee-congregation side quest (Active Threads / Character Tie-Ins → Faerah) without launching it.

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Voice in a larger window
style: default
id: pop-voice
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: voice
      label: Voice
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Goals in a larger window
style: default
id: pop-goals
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: goals
      label: Goals
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Personality in a larger window
style: default
id: pop-personality
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: personality
      label: Personality
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Ideal in a larger window
style: default
id: pop-ideal
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: ideal
      label: Ideal
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Bond in a larger window
style: default
id: pop-bond
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: bond
      label: Bond
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Flaw in a larger window
style: default
id: pop-flaw
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: flaw
      label: Flaw
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Likes in a larger window
style: default
id: pop-likes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: likes
      label: Likes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Dislikes in a larger window
style: default
id: pop-dislikes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: dislikes
      label: Dislikes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Description in a larger window
style: default
id: pop-description
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: description
      label: Description
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit History in a larger window
style: default
id: pop-history
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: history
      label: History
```
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
```meta-bind-button
label: Edit DM Notes
icon: pencil
style: default
id: edit-dm-notes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editSection.js
    args:
      heading: DM Notes
      prefix: "> > "
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Summary in a larger window
style: default
id: pop-summary
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: summary
      label: Summary
```

```meta-bind-button
label: Edit all
icon: pencil
style: default
id: edit-all
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editAll.js
```
