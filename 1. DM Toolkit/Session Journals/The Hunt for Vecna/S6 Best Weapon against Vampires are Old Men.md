---
obsidianUIMode: preview
date: 2023-11-04T00:00:00.000Z
summary: |-
  Determined to restore the sanctity of St. Andral's Church, the party sought out Milivoj at his home and, through a mix of persuasion and determination, convinced him to reveal the whereabouts of the stolen bones. Their investigation led them to the Coffin Maker's Shop, where they confronted Henrik van der Voort. With a combination of intimidation and force, they compelled Henrik to confess that Strahd von Zarovich had ordered him to steal the sacred relics.

  Their confrontation was violently interrupted by an attack from a group of vampire spawn. A fierce battle ensued, with Yevelda Ovak demonstrating her raw strength by hurling Henrik at one of the vampires, breaking his leg in the process. In the chaos, one spawn attempted to escape with the bones, but the party swiftly thwarted the attempt. Victorious, they returned the bones to Father Lucian, restoring the church's protective power against Barovia's encroaching evil.

  Their success did not go unnoticed. That evening, the party received an unexpected invitation to dine with Baron Vargas and his family, offering a rare opportunity for respite and perhaps new alliances. Yet, the shadows of intrigue and danger in Vallaki suggest that this dinner may hold more than just food and conversation.
fc-date: 973-2-13
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-11-04]]"
fc-end: 973-2-14
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
  - "[[4. World Almanac/Places of Interest/Coffin Maker's Shop.md|Coffin Maker's Shop]]"
  - "[[4. World Almanac/Places of Interest/St. Andral's Church.md|St. Andral's Church]]"
session_number: 6
party_present:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Milivoj (COS).md|Milivoj (COS)]]"
  - "[[4. World Almanac/NPCs/Henrik Van Der Voort (COS).md|Henrik Van Der Voort (COS)]]"
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
- [[Milivoj]] knew St. Andral's bones had been taken to Henrik van der Voort, the coffin maker
- Henrik stole the bones on [[Strahd Von Zarovich (COS)|Strahd Von Zarovich]]'s orders
- Henrik knew his patron only as the nobleman Vasili von Holtz, and later learned he was Strahd

## Items Of Importance
N/A

## What Happened
- The party finds [[Milivoj]] at his home and convinces him to tell them where the bones were taken
- At the [[Coffin Maker's Shop]] they strong-arm Henrik van der Voort, who confesses that Strahd made him take the bones
- A group of vampire spawn attacks; [[Yevelda Ovak]] throws Henrik at one, breaking his leg
- One spawn tries to escape with the bones, but the party stops it
- The party returns the bones to Father Lucian at [[St. Andral's Church]]
- That evening, [[Baron Vargas Vallakovich]] invites the party to dine with his family


# `=this.file.name`
> [!dm]- Session prep (leftover)
> ## Session Prep:
> Things I need to get ready before the session:
> - [ ] Have Vallaki NPCs prepared
> 	- [ ] Pronunciation
> 	- [ ] Position and goals
> - [x] Figure out how to handle the following:
> 	- [x] Festival of the Blazing Sun
> 	- [x] Strahd's Attack (St. Andral's Feast)
> 	- [x] Retrieving St. Andral's Bones
> 	- [x] Dinner with [[Lady Fiona Wachter (COS)]] 
> 	- [x] Dinner with [[Vargas Vallakovich]] 
>
> ## Plan
> High story beats, main things I want to happen this session.
> - The characters should meet the following people before everything goes down
> 	- [[Gadof Blinsky]] 
> 		- Have Father Lucian send the party to Blinksy's to get a toy for Yeska (Lucian's young assistant)
> 	- Rudolph van Richen aka Rictavio
> 		- Have Nikolai and Karl Wachter bother Rictavio to urge the party to intervene and meet him
> - [ ] Dinner with [[Vargas Vallakovich]] 
> 	- [ ] Vargas invites the party to his house for dinner
> 	- [ ] He suggests that because Ireena is the adoptive daughter of the burgomaster of the town of Barovia that she should marry his son [[Victor Vallakovich]] 
> - [ ] Festival of the Blazing Sun
> 	- [ ] Lars Kjurls - guard is the one who laughs
> 	- [ ] If the characters challenge Vargas he has the guards arrest them and lock them up
> 	- [ ] After a while Vargas comes and talks to them asking them to not get in the way and releases them if they are cooperative
> - [ ] Dinner with [[Lady Fiona Wachter (COS)]] 
> 	- [ ] Ernst Larnak begins shadowing the characters (detected if passive perception is 14 or higher)
> 	- [ ] If the characters show that they may not support what is happening in Vallaki or they say something at the festival they are invited to dinner
> 		- [ ] If they refuse the Wachter seeks to destroy them by giving the Vistani camp outside money to kill the party
> 	- [ ] During the dinner Fiona is called away for a bit possibly allowing the party to explore
> - [ ] Retrieving St. Andral's Bones
> 	- [ ] Milivoj took the bones to . He can be convinced to tell where he brought them to Henrik van der Voort (coffin maker) for money to feed his younger sisters and brothers
> 	- [ ] Henrik refuses to tell where the bones are unless force is used. During the day he'll retrieve them, but during the night he doesn't dare retrieve them.
> 	- [ ] If guards are called he confesses that the vampire spawn forced him to steal the bones
> - [ ] [[Strahd von Zarovich]] 's Attack (St. Andral's Feast)
> 	- [ ] If the bones are retrieved
> 		- [ ] Strahd brings out Father Lucian telling everyone how he lied to his congregation
> 	- [ ] If the bones are not retrieved 
> 		- [ ] Strahd tells everyone how the burgomaster has tried to hide behind his festivals and giving everyone lies
> 	- [ ] Strahd invites Ireena with him, saying that all humans are liers and killers.
> 	- [ ] Strahd tells Ireena that next time he'll be forced to take her by force
>
> # Session
> ## Start
> Intro, set the tone.
>
> ## Loot, Rewards & Purchases
> Loot, rewards and purchases.
> - [ ] [[Alchemy Jug]] 
>
> ## Keep in Mind
> - [[Victor Vallakovich]]  has been visiting Gertruda
> - [[Izek Strazni]] wants to kidnap Ireena
> - Ireena has dyed her hair
> ```encounter-table
> name: Strahd
> creatures:
> - "1": Strahd von Zarovich (CoS)
> - 4: [[Vampire Spawn]] 
> - 1: [[Ireena Kolyana (COS)]] 
> ---
> name: Town
> creatures:
> - 12: [[Guard]]
> - 30: [[Commoner]]
> - 8: [[Cultist]]
> - 3: [[Cult Fanatic]] 
> - 1: [[Ireena Kolyana (COS)]] 
> ```
>
> ## Events
> - Party finds [[Milivoj]]  at his house and convinces him to tell them where the bones were taken
> - They go to the [[Coffin Maker's Shop]] and find Henrik van der Voort 
> 	- They strong arm him into revealing the location of the bones
> 	- Henrik reveals that [[Strahd von Zarovich]] made him take them
> - The party fights off a group of vampire spawn
> - [[Yevelda Ovak ]] throws Henrik at a [[Vampire Spawn]]  which breaks one of his legs.
> - One spawn tries to escape with the bones but is stopped
>
> # Summary
> ## New NPCs
> - [[Milivoj]] 
> - Henrik van der Voort
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
