---
obsidianUIMode: preview
date: 2026-10-17
session_number: 48
summary: |-
  The party fought their way deeper into the caves beneath Greyfen Hollow. They found the devices the cult uses to melt down stolen magic items and followed the pipes leading away from them to a glowing green pool crackling with arcane energy. Standing in front of the pool was Izek Strazni. The session ended there.
fc-date: 973-2-31
fc-end: 
timelines: 
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2026-10-17.md|2026-10-17]]"
party_present: []
locations:
  - "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
npcs:
  - "[[4. World Almanac/NPCs/Izek Strazni (COS).md|Izek Strazni (COS)]]"
quests:
  - "[[3. The Party/Quests/The Second Ledger.md|The Second Ledger]]"
items: []
tags:
  - session-journal
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
- The cult isn't reselling the stolen magic items. It's melting them down in machines and piping the result away.
- The pipes end at a glowing green pool crackling with arcane energy.
- [[Izek Strazni (COS)|Izek Strazni]] is alive and here, standing in front of the pool.

Who Did They Meet?
- [[Izek Strazni (COS)|Izek Strazni]], seen in person at the pool. No exchange yet; the session ended on the reveal.
- Cultists fought along the way (details not recorded).

## Items Of Importance
None. The party hasn't taken any treasure in this dungeon yet.

## What Happened
- The party fought their way through the cave system.
- They found the devices that melt down magic items.
- They followed the pipes to a glowing green pool crackling with arcane energy.
- Izek was standing in front of the pool. The session ended there.

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
