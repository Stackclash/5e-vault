---
obsidianUIMode: preview
date: 2026-06-28
summary: |-
  Back in Bruokdon, the party interrogated their captive, Tavish Ironwood, the thief leader taken in the warehouse raid. Tavish gave up the name of his backer — Lord Caldris Velmont, a council member of the Umbral Aethenaeum — and a darker truth about the thefts: the stolen enchanted items weren't simply being fenced for coin, but drained, their magic siphoned away for power. Who was behind that siphoning, he never got to say. The moment the secret was out, a hidden Feeblemind brand seared onto Tavish's back triggered, shattering his mind before he could say more.

  Determined to expose Velmont, the party laid a plan: Professor Gousse and Redgrave would meet with the councilman to keep him occupied while the others searched his home. Wisp, Roark, Yevelda, and Faerah broke into Velmont's house, overcoming a gauntlet of magical traps and alarms to uncover a hidden room in the basement — where Velmont himself sat waiting for them.
fc-date: 973-2-27
fc-end: 973-2-28
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2026-06-28.md|2026-06-28]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
session_number: 42
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Wisp.md|Wisp]]"
npcs:
  - "[[4. World Almanac/NPCs/Lord Caldris Velmont.md|Lord Caldris Velmont]]"
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
- Human Centipede conversation tangent
- Tavish Ironwood was questioned by party
- Tavish gave up [[Lord Caldris Velmont]]
- Tavish was hit by a [[Feeblemind]] enchantment brand on his back

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
