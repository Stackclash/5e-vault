---
obsidianUIMode: preview
date: 2025-02-28
summary: |-
  With Strahd holding Ireena captive and intent on making her his bride, the party spent their remaining time preparing for the wedding that would become their battlefield. They armed themselves with enchanted broaches that shift color to pass silent signals, and counted their hidden allies — Rictavio, Ezmerelda Davenir, and the Abbot — each expected to turn on Strahd once the ceremony began. Seluvis, Marin, and Faerah visited Blinsky's toy shop, coming away with a Music Box of Mind Shielding, a Cackling Skull Bomb, and a Jack-in-the-Dark. In prayer, Faerah received a cryptic charge from Eilistraee: to seek out "the heart that could grant a boon for the final battle" — a mystery that would not be answered until they walked the halls of Castle Ravenloft.
fc-date: 973-2-24
fc-end: 973-2-24
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2025-02-28.md|2025-02-28]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of Wines]]"
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
session_number: 31
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Ezmerelda Davenir (COS).md|Ezmerelda Davenir (COS)]]"
  - "[[4. World Almanac/NPCs/The Abbot (COS).md|The Abbot (COS)]]"
  - "[[4. World Almanac/NPCs/Rictavio (COS).md|Rictavio (COS)]]"
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
- Party has broaches that change colors to signal actions
- The Party knows that the following will act against Strahd during the wedding and they may need to roll with the punches with what happens:
	- [[Rictavio (COS)]]
	- [[Ezmerelda Davenir (COS)]]
	- [[The Abbot (COS)]]
- [[Seluvis Felo'melorn]], [[Marin]], [[Faerah Duskrane]] visit Blinksy and get the following:
	- **Music Box of Mind Shielding** – Plays a haunting lullaby that grants advantage on saving throws against charm and fear while it plays.
	- **Cackling Skull Bomb** – A small skull with a wind-up mechanism. When thrown (20 ft. range), it explodes in a _Tasha’s Hideous Laughter_ effect (DC 14) on all creatures within 10 feet.
	- **Jack-in-the-Dark** – A jack-in-the-box that, when cranked, either emits a loud _Thunderwave_ (DC 13) or releases a puff of necrotic gas, dealing 2d6 damage in a 10-ft radius.
- [[Faerah Duskrane]] prays to [[Drow Eilistraee (MTF)|Eilistraee]]
	- She offers guidance to "seek out the heart that could grant a boon for the final battle"

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
