---
obsidianUIMode: preview
date: 2023-08-05T00:00:00.000Z
summary: |-
  In a dramatic showdown within the Death House, the party clashed with the vengeful ghosts of Carl and Elisabeth, the previous owners, amidst a room filled with poisonous smoke. Yevelda Ovak found herself possessed by Elisabeth, but Redgrave's divine power expelled the spirit, sending Elisabeth fleeing. Desperation set in as the walls seemed to close in, leading Yevelda to break through a bricked-up window. Amidst the chaos, Carl effectively kills Marin, but Seluvis Felo'melorn and Yevelda managed to escape with her lifeless body through the shattered window. Marin's consciousness drifting through a lightless void hears whispers, promising renewed life if she accepts the entity's power. Shortly after Marin is revived, but somehow forever changed. As the party fled, Carl's enraged screeches echoed behind them as the window mysteriously healed and sealed up.

  Seeking respite, they made their way to a local store where Marin purchased a dagger, then found refuge in a tavern. While Marin rested, Ismark Kolyanovich approached Redgrave and Faerah Duskrane with a plea for help in escorting his sister, Ireena Kolyana, to Vallaki. The party gathered and ventured to the Burgomaster’s mansion, where Ireena revealed her dire situation: Strahd Von Zarovich sought her and had already bitten her twice. However, she insisted on burying her adoptive father before leaving. At the church, the party met the distraught Father Donovich and heard unsettling screams from the basement, which Donovich nervously attributed to his son. Though the burial was set for sundown, the party's urgency convinced Ireena to depart early, setting the stage for their perilous journey to Vallaki.
fc-date: 973-2-11
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: 
fc-end: 973-2-12
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]"
session_number: 3
party_present:
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich (COS)]]"
  - "[[4. World Almanac/NPCs/Ismark Kolyanovich (COS).md|Ismark Kolyanovich (COS)]]"
  - "[[4. World Almanac/NPCs/Ireena Kolyana (COS).md|Ireena Kolyana (COS)]]"
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
- [[Ireena Kolyana]] is wanted by [[4. World Almanac/NPCs/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] and has been bitten twice
- [[Ismark Kolyanovich]] wants the party to take [[Ireena Kolyana]] to Vallaki
- A wizard gathered town people to face against [[4. World Almanac/NPCs/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] 
- Donovich's son is a vampire spawn

## Items Of Importance
N/A

## What Happened
- The party fought the ghosts of Carl and Elisabeth (the previous owners of the Death House) in the first level of Death House. While the room is filled with poisonous smoke.
- [[Yevelda Ovak ]] gets possessed by Elisabeth but [[Redgrave]]  casts her out with Turn Undead. Elisabeth flees the room.
- [[Yevelda Ovak ]] searches the walls for the door, but decides to break down the now bricked up window.
- [[Marin]] is knocked unconscious by Carl.
- [[Seluvis Felo'melorn]] and [[Yevelda Ovak ]] carry [[Marin]] out the window.
- Once everyone is out the window Carl screeches at them as the damaged window heals and closes up.
- The party makes its way to the store and [[Marin]] buys a [[Dagger|dagger]].
- They go to the tavern and purchase a room where they lay down [[Marin]].
- [[Ismark Kolyanovich]] approaches [[Redgrave]] and [[Faerah Duskrane]]  who remained downstairs. He asks them for help bringing his sister, Ireena Kolyana to Vallaki. The rest of the party comes down to join the conversation
- They go to the Burgomaster mansion and meet [[Ireena Kolyana]].
- [[Ireena Kolyana]] reveals that [[4. World Almanac/NPCs/Strahd Von Zarovich (COS)|Strahd Von Zarovich]] wants her and has bitten her twice 
- She says she doesn't want to go unless they bury her adoptive father first 
- The party brings the coffin to the church and meet Father Donovich
- They hear a scream from the basement and the party presses Donovich about what it was
- Donovich alludes that it was his son. He was very nervous and distraught
- Donovich says that the burial happens at sundown. The party however doesn't want to stay till then and convinces Ireena Kolyana to leave early

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
