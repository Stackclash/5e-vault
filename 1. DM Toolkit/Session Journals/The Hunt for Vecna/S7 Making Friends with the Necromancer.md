---
obsidianUIMode: preview
date: 2023-11-10T00:00:00.000Z
summary: |-
  The adventurers found themselves guests at the opulent home of Baron Vargas, whose grandiose demeanor quickly became apparent. Over dinner, the Baron expounded on his belief that his village festivals, meant to instill collective happiness, would somehow free Vallaki from Strahd's dark grip. Amidst this optimistic but delusional discourse, the Baron made a surprising proposition: he suggested that Ireena marry his son, Victor, as a means to strengthen alliances and perhaps shield her from Strahd.

  Victor, clearly displeased with his father's plans, stormed off to his room in the attic. Concerned and curious, the party followed to speak with him. In Victor's secluded space, they uncovered his secret: he was a self-taught necromancer, delving into forbidden arcane arts. Rather than condemning him, the adventurers found common ground and befriended Victor, recognizing the potential of his unorthodox skills. This unexpected alliance with the Baron's rebellious son hinted at new and powerful avenues to explore in their ongoing struggle against Strahd's malevolent influence.
fc-date: 973-2-14
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-11-10]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
fc-end: 973-2-14
session_number: 7
party_present: []
npcs: []
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

# `=this.file.name`
## Session Prep:
Things I need to get ready before the session:
- [ ] **Example 1**
      Description.
    - [ ] Sub-Point 1
- [ ] **Example 2**
      Description.
    - [ ] Sub-Point 2

## Plan
High story beats, main things I want to happen this session.
- [ ] Point 1
    - [ ] Sub Point 1
- [ ] Point 2
    - [ ] Sub Point 1

# Session
## Start
Intro, set the tone.

## Loot, Rewards & Purchases
Loot, rewards and purchases.
- [ ] Thing 1
- [ ] Thing 2

## Keep in Mind
Things to keep in mind during the session, from items to important details

## Events
What transpired over the course of the session? Update this during the session!

# Summary
## New NPCs
New NPC Met.
- Example 1
- Example 2

## New Locations
New Locations Discovered.
- Example 1
- Example 2

## End of Session Notes
Anything to take note of as the session has come to a close.

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
