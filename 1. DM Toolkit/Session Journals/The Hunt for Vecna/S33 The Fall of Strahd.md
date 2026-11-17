---
obsidianUIMode: preview
date: 2025-04-19
summary: "Invited as guests, the Midnight Covenant took their places among the wedding party as Strahd von Zarovich prepared to wed Ireena. During the ceremony they struck. After a brief and vicious clash the vampire dissolved into mist and fled into the crypts below Castle Ravenloft. The party gave chase, running him to ground in the tomb of his own brother. There Redgrave raised the Amulet of Ravenkind — its light froze Strahd in place, and Redgrave drove a wooden stake through his heart. Even then the vampire would not die; he became mist once more and streamed back to his coffin to heal. Fighting through the horrors that guarded his resting place, the party tore open the coffin and struck the final blow. As Strahd died, a tiny portal bloomed before his chest and drew his soul into the dark. The castle began to collapse, and the Covenant fled through crumbling halls — Rictavio fighting at their side to the end, and Emil, the werewolf they had freed, carrying Ezmerelda to safety. As they escaped into the light, a great beam of purple energy erupted from distant Mount Ghakis, where the Amber Temple lies. A booming voice thanked them: they had delivered the final piece it needed to break free of its prison. It promised ruin and destruction upon the world, and gave its name — Vecna. With Ravenloft in ruin behind them and Strahd destroyed, the party turned to Vallaki, arresting Fiona Wachter and her sons Nikolai and Karl for turning the town to Strahd's cause, and raised a council of elders to guide Vallaki toward peace."
fc-date: 973-2-24
fc-end: 973-2-24
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: ""
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
session_number: 33
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
npcs:
  - "[[4. World Almanac/NPCs/Ezmerelda Davenir (COS).md|Ezmerelda Davenir (COS)]]"
  - "[[4. World Almanac/NPCs/Nikolai Wachter (COS).md|Nikolai Wachter (COS)]]"
  - "[[4. World Almanac/NPCs/Emil Toranescu (COS).md|Emil Toranescu (COS)]]"
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
- Skull of [[Argynvostholt]]

## What Happened
- The party finds [[Ezmerelda Davenir (COS)]] and [[Emil Toranescu (COS)]]
	- [[Emil Toranescu (COS)]] agrees that the werewolf den needs to move on and out of [[Barovia]]
- The party goes to [[Vallaki]] and arrests [[Fiona Wachter]], [[Nikolai Wachter (COS)]], and Karl Wachter
- A council of elders are formed with:
	- Haran Dista
	- Dom Besk
	- Aral Mesk
	- Nuzam Delu
- 

## Info
- 

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
