---
obsidianUIMode: preview
date: 2024-06-29
summary: |-
  The party bravely decides to delve into the Amber Temple, despite the ominous atmosphere that surrounds it. As they approach the front door, an overwhelming wave of evil washes over them, forcing everyone except Marin to their knees. Once they recover from this harrowing experience, they step into the temple, only to be greeted by a deep, suffocating darkness. The silence within the temple is almost deafening, and the desolation is palpable. They soon come across a towering statue of a dark magic caster, its face concealed by an impenetrable shroud of magical darkness.

  As they venture further into the temple, the party encounters two wildling men and a fierce wildling woman riding a large dire wolf. The wildlings are consumed by a blind rage and immediately attack the party with murderous intent. However, in a brief moment of lucidity, the woman seems to recognize Yevelda and calls her "Helga." The party manages to kill the two men and knock the woman unconscious. They learn her name is Karina and that there are more of her kind at Yester Hill. Additionally, the dire wolf forms a tentative bond with the party, offering them a glimmer of hope in the dark temple.

  Their victory is short-lived as the party, except Marin, is suddenly struck by a violent seizure. It feels as though their very life essence is being drained from their bodies, causing their ears and eyes to bleed. As they struggle to regain control, the full realization of the temple's malevolence dawns on them. Desperate to escape, they attempt to flee, only to discover that the exit has mysteriously vanished.

  With no other choice, the party is forced to go deeper into the temple. Eventually, they come upon the source of the overwhelming evil: an imprisoned lich, encased in a massive block of amber and suspended above a damaged arcane mechanism. The mechanism, malfunctioning, has opened a portal above the amber, through which Karina's soul is drawn and consumed by the lich. The party witnesses in horror as the lich feeds on her essence, its power growing even stronger.
fc-date: 973-2-21
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-06-29.md|2024-06-29]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/The Amber Temple.md|The Amber Temple]]"
fc-end: 973-2-21
session_number: 19
party_present:
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs: []
quests: []
items: []
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
> [!div|clean no-t]
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
