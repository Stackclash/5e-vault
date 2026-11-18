---
obsidianUIMode: preview
date: 2023-09-17T00:00:00.000Z
summary: |-
  On their arduous journey to Vallaki, the party encountered a hunter named Stefan, who kindly offered to guide them the rest of the way. However, this act of goodwill quickly turned treacherous when Stefan revealed his true nature as a werewolf, signaling a pack to ambush the unsuspecting adventurers. A fierce battle ensued, with the party fighting valiantly and slaying several of the ferocious beasts, including the deceptive Stefan. They managed to capture and bind one remaining werewolf to a tree, leaving a grim reminder of the dangers lurking in the shadows of Barovia.

  Arriving in Vallaki, the party escorted Ireena to the sanctuary of St. Andral's Church, where they were warmly greeted by Father Lucian. Amidst their respite, Father Lucian confided in the adventurers, revealing a grave misfortune: the sacred bones of St. Andral had been stolen from the crypt beneath the church. These holy relics had protected the church from the pervasive evil of Barovia, and their absence left the sanctuary vulnerable. With this new quest laid before them, the party now faces the daunting task of recovering the stolen bones to restore the church's protective power, even as the dark influence of Strahd looms ever closer.
fc-date: 973-2-12
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-09-17]]"
fc-end: 973-2-13
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
  - "[[4. World Almanac/Places of Interest/St. Andral's Church.md|St. Andral's Church]]"
session_number: 5
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Ireena Kolyana (COS).md|Ireena Kolyana (COS)]]"
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
- Stefan, the hunter who offered to guide the party, was a werewolf
- The bones of St. Andral protected [[St. Andral's Church]] from Barovia's evil, and they have been stolen from the crypt beneath the church

## Items Of Importance
N/A

## What Happened
- On the road to [[Vallaki]], a hunter named Stefan offers to guide the party the rest of the way
- Stefan reveals he is a werewolf and signals a pack to ambush the party
- The party kills several werewolves, including Stefan, and ties the last one to a tree
- The party arrives in [[Vallaki]] and brings [[Ireena Kolyana]] to [[St. Andral's Church]], where Father Lucian welcomes them
- Father Lucian tells the party that the bones of St. Andral have been stolen from the crypt beneath the church

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
