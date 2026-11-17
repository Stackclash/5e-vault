---
obsidianUIMode: preview
date: 2024-08-17
summary: |-
  After descending the perilous cliffs of Mount Ghakis, the party delved deeper into the dark past of Barovia through the Tome of Strahd. The first chapter revealed Strahd’s ominous journey to the Amber Temple, where he forged a pact with a malevolent entity, though the full extent of his corruption had yet to unfold. But it was the second chapter that struck a deeper chord—the wedding of Sergei and Tatiana, a day meant for joy, shattered by mercenary violence. As Sergei lay wounded, Strahd seized the moment, killing his brother and offering himself to Tatiana. His monstrous transformation began before her eyes, and in terror, Tatiana fled, falling to her death from the heights of Castle Ravenloft.

  The weight of this tragedy hung over the party as they arrived in the haunted ruins of Berez. There, amidst the fog and decay, they witnessed ghostly figures reliving the grim fate of Marina, who had fallen under Strahd’s thrall. Desperate to save her from becoming yet another victim of the vampire’s curse, the Burgomaster and the priest took her life, an act that enraged Strahd. In his fury, he summoned a devastating tidal wave that swept Berez into ruin, leaving it a desolate swamp. Now, the echoes of past sins and the specter of Strahd’s vengeance loomed larger than ever, a grim reminder of the power they faced.
fc-date: 973-2-22
fc-end: 973-2-22
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2024-08-17.md|2024-08-17]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Ruins of Berez.md|Ruins of Berez]]"
session_number: 22
party_present: []
npcs:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
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
- [[4. World Almanac/NPCs/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] is jealous of Sergei Von Zarovich
- Tatyana is an early reincarnation of Ireena
- [[4. World Almanac/NPCs/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] fell in love with Tatyana

## Items Of Importance
- [[5. Mechanics/Items/Helm Of The Minotaur (HHHVI)|Helm of the Minotaur]]
- [[Amulet Of Health]]

## What Happened

- The party makes it's way back to their horses and cart
- They decrypt and read 2 chapters in the Tome of Strahd
- The party makes its way back to the [[Ruins of Berez]] and watches the drama play out in the night

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
