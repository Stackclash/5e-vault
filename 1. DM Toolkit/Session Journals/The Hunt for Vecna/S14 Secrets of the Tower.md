---
obsidianUIMode: preview
date: 2024-03-09T00:00:00.000Z
summary: |-
  
  Using the powerful wand discovered in the tower, the party meticulously restored the structure to its former grandeur. As they continued to harness its growing potency, a mysterious door materialized on a previously barren wall. Venturing through, they were transported to a grim dimension where the air was thick with decay and the ground strewn with bones. Here, they confronted Khazan, the tower's former owner driven mad by his relentless attempts to escape, transforming into a grotesque beast with formidable claws and elongated limbs.

  In a fierce battle, the party prevailed over Khazan, freeing him from his nightmarish existence and returning to the safety of the tower. Marin, guided by whispered offers from her dark patron, made a pact to animate the preserved head they had discovered earlier. Through this grisly communion, they learned the head belonged to Yan, a Vistani slain by a traveler known as Rictavio.

  Meanwhile, Faerah Duskrane was contacted by Eilistraee through her pendant, beseeching her to become a champion in the struggle to liberate the oppressed souls of Barovia. With newfound powers, alliances, and daunting challenges ahead, the party stood ready to confront the pervasive darkness that gripped the land, their resolve strengthened by each revelation and encounter.
fc-date: 973-2-17
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2024-03-09]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Van Richten's Tower.md|Van Richten's Tower]]"
fc-end: 973-2-17
session_number: 14
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
  - "[[4. World Almanac/NPCs/Rictavio (COS).md|Rictavio (COS)]]"
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
> [!div|no-t clean]
> `INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
- The party uncovers Khazan and defeat him in his dark dimension
	- Khazan is now bound to [[5. Mechanics/Bestiary/Legendary Group/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] in his castle #secret #remember
- [[5. Mechanics/Deities/Drow Eilistraee (MTF)|Eilistraee]] contacted [[Faerah Duskrane]] through her pendant asking her to be her champion in freeing the people of [[Barovia]] #remember 
- [[Marin]] accepts power from the Dark Powers to bring Yan's head alive permanently #remember 

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
