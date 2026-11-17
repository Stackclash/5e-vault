---
obsidianUIMode: preview
date: 2024-05-26T00:00:00.000Z
summary: |-
  The party deliberated on whether to stay in the ruins of Berez, contemplating the possibility that it might hold an artifact Madam Eva had mentioned in her reading. Ultimately, they decided to continue to Mount Ghakis to find the Fiend's Chili, essential for curing Seluvis's lycanthropy.

  After crossing the Luna River, they arrived at the foot of Mount Ghakis. During the night, they heard a loud creaking of wood. Investigating the noise, they discovered a large tree that seemed to have appeared out of nowhere, with an old house nestled in its branches. They were soon visited by Baba Lysaga, an old witch. When the party informed her that Strahd was expecting them for dinner, she offered to feed them and teleport them directly to his castle.

  Despite their hesitance, the party accepted her hospitality—everyone except Yevelda, who insulted Baba Lysaga with her attitude. In response, Baba Lysaga transformed Yevelda into a goat. Redgrave quickly reassured Baba Lysaga with a lie, saying that Strahd would be insulted if Yevelda wasn't with them and that they needed to collect their things before going through the portal. Convinced, Baba Lysaga reverted Yevelda back to her original form.

  Seizing the opportunity, the party quickly retreated up Mount Ghakis. After a challenging climb, they arrived at the peak and found a Fiend's Chili. Seluvis successfully created the potion and cured his lycanthropy. In the midst of their search for the chili, they stumbled upon a massive, ominous temple carved into the side of the mountain, its presence foreboding and mysterious.
fc-date: 973-2-20
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-05-26.md|2024-05-26]]"
tags:
  - session-journal
fc-end: 973-2-21
locations:
  - "[[4. World Almanac/Places of Interest/Ruins of Berez.md|Ruins of Berez]]"
session_number: 18
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
npcs:
  - "[[4. World Almanac/NPCs/Baba Lysaga (COS).md|Baba Lysaga (COS)]]"
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
- Survival Checks: 4, 17, 6; 12, 23, 17;
- [[Seluvis Felo'melorn]] Failures: 2
- [[Yevelda Ovak ]] Failures: 1

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
