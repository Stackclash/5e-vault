---
obsidianUIMode: preview
date: 2024-07-13
summary: |-
  The party, realizing the dire situation, decides that their best course of action is to repair the arcane prison holding the dark entity. Redgrave and Seluvis take on the task of fixing the mechanism, but as they work, the entity inside the amber prison begins to radiate harmful magic through the mechanism, attempting to hinder their progress. Meanwhile, Marin feels an inexplicable pull toward the prison. As she touches the mechanism, she is suddenly given a vision of the dark entity within, revealing that it is her patron. During this vision, she engages in a secret conversation with the entity, deepening the mystery of her connection to it.

  Once the prison is finally repaired, the portal above it closes. However, the party quickly realizes that Marin is in a trance, seemingly entranced by her encounter with the entity. They manage to break her out of it, but Yevelda, suspicious of Marin's immunity to the temple's malevolent effects, confronts her. Yevelda demands answers about Marin's connection to the entity inside the prison and why she seems unaffected by the temple's dark magic. Marin, however, remains tight-lipped, offering little information. The party, wary but needing to move on, sets the matter aside for the time being.

  Continuing their exploration of the temple, the party encounters several amber doors, each locked by an arcane riddle. They carefully solve each riddle, revealing amber stones behind the doors, each containing a dark entity or force. Exercising extreme caution, the party avoids getting too close to these ominous stones. Despite their careful approach, they are suddenly struck by another wave of intense pain as more of their life force is drained away. The sense of dread intensifies as they realize that if they don't find a way out soon, the temple will be their tomb.

  In one of the last rooms they explore, the party encounters a forgetful lich named Exethanter. During their conversation with him, they discover that he is a student of the dark secrets stored within the temple and that Strahd himself had once visited this place. Desperate to escape, the party asks Exethanter if he knows of a way out. To their surprise, he reveals that they've always had a means of escape. Exethanter points them to Victor's teleportation notes and the teleportation gem in their possession. Armed with this knowledge, the party quickly uses the teleportation gem, escaping the temple's clutches and reappearing at the Tsolenka Pass, breathing a collective sigh of relief.
fc-date: 973-2-21
fc-end: 973-2-21
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-07-13.md|2024-07-13]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/The Amber Temple.md|The Amber Temple]]"
session_number: 20
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Exethanter (COS).md|Exethanter (COS)]]"
quests: []
items: []
factions: []
wrapped: false
publish: false
---
> [!infobox]
> ###### Prep
>  |
>  ---|---|
> **Session #** | `INPUT[number:session_number]` |
> **Party** | `INPUT[suggester(optionQuery(#party)):party]` |
> **Played on** | `INPUT[datePicker:date]` |
> **Prep notes** | `INPUT[suggester(optionQuery(#session-prep)):prep_notes]` |
> **In-world start** | `INPUT[text:fc-date]` |
> **In-world end** | `INPUT[text:fc-end]` |
> **Timelines** | `INPUT[inlineList:timelines]` |
> ###### Ledger
>  |
>  ---|---|
> **Party present** | `INPUT[inlineListSuggester(optionQuery(#player)):party_present]` |
> **Spotlight** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'spotlight'})` |
> **Locations** | `INPUT[inlineListSuggester(optionQuery(#location)):locations]` |
> **NPCs met** | `INPUT[inlineListSuggester(optionQuery(#npc)):npcs]` |
> **Quests touched** | `INPUT[inlineListSuggester(optionQuery(#quest)):quests]` |
> **Items** | `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]` |
> **Factions** | `INPUT[inlineListSuggester(optionQuery(#faction)):factions]` |
`$=await dv.view('views/sessionNav', {current: dv.current()})`
```dataviewjs
await dv.view('views/entityHeader', {current: dv.current(), pronounced: false})
```
`BUTTON[wrap-session]`
`$=await dv.view('views/sectionBar', {current: dv.current()})`

## Session Overview
> [!div|no-t clean]
> `INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
Small description.

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
```meta-bind-button
label: Wrap this session
icon: clipboard-copy
style: primary
id: wrap-session
hidden: true
actions:
  - type: inlineJS
    code: |-
      const name = app.workspace.getActiveFile()?.basename ?? ''
      await navigator.clipboard.writeText(`/wrap ${name}`)
      new Notice(`Copied "/wrap ${name}": paste it into Claude Code to wrap this session`)
```
