---
obsidianUIMode: preview
date: 2023-11-25T00:00:00.000Z
summary: |-
  The party attended the much-anticipated Festival of the Blazing Sun, a cornerstone of Baron Vargas's attempts to foster cheer and defiance against Strahd. However, as the festival unfolded, a torrential downpour thwarted the Baron's plans, rendering the grand bonfire unlit. Amid the chaos, a guard's ill-timed laughter at the Baron's misfortune led to his immediate arrest. Yevelda, ever the stalwart protector of justice, stood up for the guard and found herself arrested as well, further straining relations with the Baron.

  As tensions simmered, the congregation gathered for a sermon by Father Lucian. Unbeknownst to them, the sacred bones of St. Andral were once again stolen. Seizing the moment of vulnerability, Strahd himself appeared at the church's doorstep, leading a horde of vampire spawn in a brutal assault on the unsuspecting villagers. Chaos erupted as Strahd and his minions wreaked havoc. In a desperate bid to save the town, Faerah intercepted the stolen bones, bravely returning them to their rightful place. The relics' restored power surged through the church, casting Strahd and his dark brood out and granting the beleaguered townsfolk a brief but crucial reprieve from the vampire lord's wrath.
fc-date: 973-2-15
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-11-25]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
  - "[[4. World Almanac/Places of Interest/St. Andral's Church.md|St. Andral's Church]]"
fc-end: 973-2-15
session_number: 8
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
  - "[[4. World Almanac/NPCs/Baron Vargas Vallakovich (COS).md|Baron Vargas Vallakovich (COS)]]"
quests: []
items: []
factions: []
wrapped: true
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
- St. Andral's bones protect the church from Strahd and his spawn

## Items Of Importance
N/A

## What Happened
- The party attends the Festival of the Blazing Sun; heavy rain keeps the bonfire from lighting
- A guard laughs at the Baron's misfortune and is arrested; [[Yevelda Ovak]] stands up for him and is arrested too
- During Father Lucian's sermon, St. Andral's bones are stolen again
- [[Strahd Von Zarovich (COS)|Strahd Von Zarovich]] appears at [[St. Andral's Church]] with a horde of vampire spawn and attacks the villagers
- [[Faerah Duskrane]] intercepts the stolen bones and returns them; their power drives Strahd and his spawn out


# `=this.file.name`
> [!dm]- Session prep (leftover)
> ## Session Prep:
> Things I need to get ready before the session:
> - [ ] Eludrax is the name of the wizard that created mechanical men
> 	- Blinksy wants to see this mechanical man
> - [ ] Strahd's speech when he appears
> 	- Despair. You know of all the songs the human emotions sing, I believe that despair is my favorite. It's not the weeping over a loved one nor mere sadness. It is a gnawing, clawing void that drifts at the edge of consciousness forever threatening to eat us from the inside out. To see that void get in to hear that melody play on a man's heart, there is nothing sweeter to my ears. So tell me dear people of Vallaki, my little birds, are you going to sing me a song?
>
> ## Plan
> High story beats, main things I want to happen this session.
> - [ ] Point 1
>     - [ ] Sub Point 1
> - [ ] Point 2
>     - [ ] Sub Point 1
>
> # Session
> ## Start
> Intro, set the tone.
>
> ## Loot, Rewards & Purchases
> Loot, rewards and purchases.
> - [ ] Thing 1
> - [ ] Thing 2
>
> ## Keep in Mind
> Things to keep in mind during the session, from items to important details
>
> ## Events
> What transpired over the course of the session? Update this during the session!
>
> # Summary
> ## New NPCs
> New NPC Met.
> - Example 1
> - Example 2
>
> ## New Locations
> New Locations Discovered.
> - Example 1
> - Example 2
>
> ## End of Session Notes
> Anything to take note of as the session has come to a close.

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
