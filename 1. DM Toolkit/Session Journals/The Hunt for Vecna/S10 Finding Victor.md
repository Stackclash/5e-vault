---
obsidianUIMode: preview
date: 2023-12-30T00:00:00.000Z
summary: |-
  In their pursuit of Victor Vallakovich, the party uncovered evidence suggesting he had utilized a teleportation sigil to visit Gertruda. Following this lead, they activated the teleportation circle, intending to reach the Village of Barovia. Conversations with Mad Mary and Ismark Kolyanovich there confirmed Gertruda's disappearance, deepening their resolve to find her.

  Attempting to return to Vallaki via the teleportation circle, they unexpectedly found themselves transported to the dreaded Castle Ravenloft, Strahd's imposing fortress. Inside, they unexpectedly encountered Victor Vallakovich, adding an unexpected twist to their quest. Determined to understand the intricacies of the teleportation system, the party deciphered its workings and successfully redirected it, finally arriving at the Coffin Maker's Shop in Vallaki.

  Now reunited with Victor and poised to confront the mysteries surrounding Gertruda's disappearance and the deeper secrets of Barovia, the adventurers must navigate the perilous paths ahead, knowing that Castle Ravenloft looms ominously in the backdrop of their adventures.
fc-date: 973-2-16
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-12-30]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
  - "[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]"
  - "[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]"
  - "[[4. World Almanac/Places of Interest/Coffin Maker's Shop.md|Coffin Maker's Shop]]"
fc-end: 973-2-16
session_number: 10
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Victor Vallakovich (COS).md|Victor Vallakovich (COS)]]"
  - "[[4. World Almanac/NPCs/Ismark Kolyanovich (COS).md|Ismark Kolyanovich (COS)]]"
  - "[[4. World Almanac/NPCs/Mad Mary (COS).md|Mad Mary (COS)]]"
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
- [[Victor Vallakovich]] used a teleportation sigil to visit [[Gertruda]]
- Gertruda has been missing for about a week
- Victor's teleportation circle is part of a network that reaches [[Castle Ravenloft]]

## Items Of Importance
N/A

## What Happened
- Searching for Victor, the party finds evidence that he used a teleportation sigil to visit Gertruda
- They use his teleportation circle and arrive in the [[Village of Barovia]]
- [[Mad Mary]] and [[Ismark Kolyanovich]] tell them Gertruda has been missing for about a week; they find letters from Victor
- Trying to return to Vallaki, the circle sends them to Castle Ravenloft, where they find Victor
- The party works out the teleportation system, chooses the green stone, and arrives at the [[Coffin Maker's Shop]] in Vallaki


# `=this.file.name`
> [!dm]- Session prep (leftover)
> ## Session Prep:
> Things I need to get ready before the session:
> - [ ] **Example 1**
>       Description.
>     - [ ] Sub-Point 1
> - [ ] **Example 2**
>       Description.
>     - [ ] Sub-Point 2
>
> ## Plan
> High story beats, main things I want to happen this session.
> - [ ] Victor took his teleportation circle to [[Gertruda]]
> 	- [ ] [[Curse of Strahd Companion.pdf#page=113]]
> - [ ] [[Gertruda|Gertruda's]] teleportation circle teleports to [[6. Resources/5e Modules/Curse Of Strahd/06 Chapter 4 Castle Ravenloft#K78. Brazier Room|Castle Ravenloft's Brazier Room]]
>
> # Session
> ## Start
> Weary from restoring order within the church, you found the town marinating in silent fury. The Baron's residence, an ominous silhouette against the night, stood silent and guarded, its once-vocal occupants mysteriously absent from the aftermath of the chaos that ensued.
> Anger simmered beneath the surface, whispered grievances and furious murmurs building a tempest of resentment. In the cold light of morning, a transformed village revealed itself. A makeshift gallows stood defiantly in the square, a grim testament to the pent-up rage within every soul. Fiona Watcher, a spectral puppeteer orchestrating chaos, reveled in the twisted dance of the mob.
> As the march of the accused began, Baron Vargas Vallakovich and his wife stood condemned before accusing eyes. The mob hungered for justice, or perhaps just an outlet for their suffering.
> In the eleventh hour, you emerged like beacons from the shadows, confronting the madness. The air crackled with tension as you fiercely interceded to prevent the execution of Baron Vargas Vallakovich and his wife. With divine radiance you show the villagers a better way. Though the anger, pain, and misery still boils beneath the surface they amenable for the time being, trusting in the town's saviors. Amidst the chaos, a chilling realization took hold: Victor Vallakovich, the Baron's son, is nowhere to be found.
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
> - The party goes through Victor's teleportation circle and end up in the [[Village of Barovia]] 
> - They try to find [[Gertruda]]. They find letters from Victor.
> - When they try to take the teleportation circle back they end up in Strahd's Castle
> - They choose the green stone and get teleported to the [[Coffin Maker's Shop]] 
> - 
>
> # Summary
> ## New NPCs
> New NPC Met.
>
>
> ## New Locations
> - Strahd's Castle
>
>
> ## End of Session Notes
> The party sets out to find Victor. They discover that he may have used his teleportation sigil to visit [[Gertruda]]. The teleportation circle takes them to the [[Village of Barovia]]. Having got there they talk the [[Mad Mary]] and [[Ismark Kolyanovich]]. Finding out that Gertruda has been missing for about a week they take the teleportation circle to get back to [[Vallaki]], however it ends up teleporting them to Castle Ravenloft. They find [[Victor Vallakovich]] here. They decipher the trick to the teleportation system and make it to the [[Coffin Maker's Shop]]. 

## Errata
- 2026-11-17: This session also gave Gertruda's backstory: she and Victor Vallakovich were secret lovers; using his teleportation circle she ended up at Castle Ravenloft, was captured, and was turned into one of Strahd's brides. (Added from the DM's account during migration E5.)

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
