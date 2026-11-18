---
obsidianUIMode: preview
date: 2024-03-30T00:00:00.000Z
summary: |-
  As the night fell and tension mounted, the party fortified their tower, fashioning makeshift bear traps from furniture and meticulously coating half of them with wolfsbane—a crucial deterrent against the approaching werewolves. In the eerie stillness, the first signs of the impending assault manifested as werewolves launched their attack.

  Some werewolves scaled the tower walls, seeking entry from above, while others relentlessly pounded on the front door, using Ezmerelda Davenir's wagon as a makeshift battering ram. In a desperate move, Seluvis Felo'melorn detonated the wagon, causing havoc among the werewolves gathered there and buying the defenders precious moments.

  Despite their efforts, the werewolves eventually breached the front door, pouring into the tower with ferocity. Seluvis, Faerah Duskrane, and Izek Strazni held their ground on the top floor, engaging werewolves descending from the ceiling in a fierce battle to protect their position. Tragically, amidst the chaos, Seluvis was bitten by a werewolf, and despite Redgrave's immediate attempt to use Remove Curse, the curse of lycanthropy persisted.

  Realizing the gravity of Seluvis's condition, the party understood that a more complex cure was necessary—combining wolfsbane, the heart of the werewolf that bit him, and the elusive Fiends Chilli. This rare ingredient could be found on the slopes of Mt. Ghakis, knowledge possessed by Ezmerelda Davenir.

  In the midst of the skirmish, Yevelda Ovak delivered a decisive blow, dealing the killing strike to Kiril Stoyanovich, the leader of the assaulting werewolves. With this victory came a brief respite, but the looming challenge of curing Seluvis and fortifying against future threats weighed heavily on the party's minds as the night wore on.
fc-date: 973-2-18
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2024-03-30|2024-03-30]]"
fc-end: 973-2-19
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Van Richten's Tower.md|Van Richten's Tower]]"
session_number: 15
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Kiril Stoyanovich (COS).md|Kiril Stoyanovich (COS)]]"
  - "[[4. World Almanac/NPCs/Ezmerelda Davenir (COS).md|Ezmerelda Davenir (COS)]]"
  - "[[4. World Almanac/NPCs/Izek Strazni (COS).md|Izek Strazni (COS)]]"
quests: []
items: []
factions:
  - "[[4. World Almanac/Factions/Children of Mother Night.md|Children of Mother Night]]"
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
N/A

## Items Of Importance
N/A

## What Happened
- The party creates rudimentary bear traps (12) out of furniture in the tower. They use 6 wolfsbane to coat 6 of the traps.
- [[Seluvis Felo'melorn]] blew up [[Ezmerelda Davenir|Ezmerelda Davenir's]] wagon 
- The werewolves storms the tower, climbing up the walls and eventually breaking down the front door
- [[Seluvis Felo'melorn]], [[Faerah Duskrane]], and [[Izek Strazni]] stay on the top floor to fend off the werewolves coming in from the ceiling
- [[Seluvis Felo'melorn]] gets bitten by a werewolf and is infected with lycanthropy. [[Redgrave]] attempted to cure him with [[Remove Curse]] #remember 
- [[Seluvis Felo'melorn]] is actually not cured. He will need to be cured with a mixture of Wolfsbane, the ground up heart of the werewolf that bit him and [[5. Mechanics/Items/Fiends Chilli (HHBH)|Fiend's chilli]]. [[5. Mechanics/Items/Fiends Chilli (HHBH)|Fiend's chilli]] can be found on the sloops of Mt. Ghakis. [[Ezmerelda Davenir]] knows of this cure.  
- [[Yevelda Ovak ]] deals the killing blow to [[Kiril Stoyanovich]] 

> [!dm]
> - There is a internal power struggle among the werewolves with [[Kiril Stoyanovich|Kiril Stoyanovich's]] death #remember #secret 

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
