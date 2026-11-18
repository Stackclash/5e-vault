---
obsidianUIMode: preview
date: 2024-02-24T00:00:00.000Z
summary: |-
  Flipping through the Tome of Strahd, the party was unexpectedly drawn into a vivid memory set within the serene castle courtyard of Castle Ravenloft. There, they encountered a young Strahd von Zarovich engaged in wooden swordplay with Rahadin, the stern chamberlain. They learned of Strahd's familial pressures and upcoming sibling, gaining insight into the early years of the dark lord's life.

  Returning to the tower, they found a newly appeared magical wand and a chest containing the preserved head of Yan, a Vistani who met his end at the hands of the traveler Rictavio. Marin, guided by mysterious whispers, accepted the power to communicate with Yan, unveiling details of his tragic demise and his identity.

  Decoding the Tome's second chapter, the party found themselves thrust into a harrowing battle for Strahd against the village of Zmei, defended by stalwart members of the Order of the Silver Dragon. This conflict stirred buried memories in Redgrave, suggesting a possible connection to this noble order.

  Back in the tower, Redgrave experimented with the wand's surprising ability to manipulate and repair the structure itself. Their explorations were interrupted by Ezmerelda, a fierce monster hunter seeking her mentor, Rudolph van Richten. Tensions escalated when Kiril Stoyanovich, leader of werewolves, arrived, demanding Ezmerelda's surrender after a failed assassination attempt on Strahd. The party stood firm, refusing to yield Ezmerelda to the werewolves, setting the stage for a tense standoff at the tower, with the outcome hanging in precarious balance.
fc-date: 973-2-17
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2024-02-24]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Van Richten's Tower.md|Van Richten's Tower]]"
fc-end: 973-2-17
session_number: 13
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Kiril Stoyanovich (COS).md|Kiril Stoyanovich (COS)]]"
  - "[[4. World Almanac/NPCs/Ireena Kolyana (COS).md|Ireena Kolyana (COS)]]"
  - "[[4. World Almanac/NPCs/Izek Strazni (COS).md|Izek Strazni (COS)]]"
  - "[[4. World Almanac/NPCs/Rahadin (COS).md|Rahadin (COS)]]"
  - "[[4. World Almanac/NPCs/Ezmerelda Davenir (COS).md|Ezmerelda Davenir (COS)]]"
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
quests: []
items:
  - "[[4. World Almanac/Items/Tome of Strahd.md|Tome of Strahd]]"
  - "[[4. World Almanac/Items/Khazan's Wand of Secrets.md|Khazan's Wand of Secrets]]"
factions:
  - "[[4. World Almanac/Factions/Order of the Silver Dragon.md|Order of the Silver Dragon]]"
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
- Strahd's home kingdom is Mauristatia #remember
- Stahd's childhood was in 473 #remember
- [[Redgrave]] figures out that a lot of Barovians are without souls and that the souls are reborn into new bodies
- [[Redgrave]] thinks that [[Izek Strazni]] had a doll made for each reincarnation of [[Ireena Kolyana]] 
- Commander in Strahd's army is Delus #remember
- [[Seluvis Felo'melorn]] learned about [[Barrier Coral]] #remember

## Items Of Importance
- Kahkan's Wand of Secrets
- Tome of Strahd

## What Happened
- The party goes through the first chapter of the Tome of Strahd
- They find Yan, the severed head.
- They use the wand of secrets once and find the freezer
- The party reads the second chapter of the Tome of Strahd

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
