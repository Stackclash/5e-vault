---
obsidianUIMode: preview
date: 2023-12-16T00:00:00.000Z
summary: |-
  In the aftermath of Strahd's brutal attack on Vallaki, the party emerged as crucial defenders, restoring order and aiding in the cleanup at St. Andral's Church. However, their efforts were overshadowed by the sudden disappearance of Baron Vargas Vallakovich and his family, who were found holed up in their mansion under heavy guard, sparking outrage among the villagers left vulnerable during the assault.

  As tensions mounted, a quiet but seething mob formed, fueled by resentment and led by the charismatic and manipulative Fiona Wachter. The mob's fury escalated overnight, culminating in a brazen attempt to execute the Baron and his wife in the town square come morning. Amidst this chaos, Yevelda Ovak's unexpected flirtation with Izek Strazni added an unpredictable element to the volatile situation.

  The party intervened just in time, preventing the execution and whisking the Baron and his wife to safety. However, amidst the turmoil, the whereabouts of Victor, the Baron's necromancer son, remained unknown, raising concerns about his safety and potential influence in the unfolding crisis gripping Vallaki.
fc-date: 973-2-15
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[2023-12-16]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
fc-end: 973-2-15
session_number: 9
party_present:
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
npcs:
  - "[[4. World Almanac/NPCs/Baron Vargas Vallakovich (COS).md|Baron Vargas Vallakovich (COS)]]"
  - "[[4. World Almanac/NPCs/Victor Vallakovich (COS).md|Victor Vallakovich (COS)]]"
  - "[[4. World Almanac/NPCs/Izek Strazni (COS).md|Izek Strazni (COS)]]"
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
Small description.


# `=this.file.name`
## Session Prep:
Things I need to get ready before the session:
- [ ] After math of Strahd attack
- [ ] New direction?
	- [ ] Wizard of Wines
	- [ ] Amber Temple
- [ ] Invitation to Strahd's Castle

## Plan
High story beats, main things I want to happen this session.
- [ ] Things get too stressful in Vallaki that the party feels like they need to leave

# Session
## Start
The village of Barovia stands eerily quiet under the pale light of the moon. The air is thick with tension, and the aftermath of the recent chaos echoes through the empty streets. The once serene and sacred grounds of St. Andral's church now bear the scars of a horrific struggle.
The party stands within the dimly lit interior of the church, surrounded by the traumatized and grieving villagers who sought refuge within its walls. Father Lucian, though grateful for the party's intervention, wears a somber expression. The air is filled with a sense of dread as the cries of the wounded and the mourning echo through the village.
The stained glass windows cast fractured beams of light across the worn pews and creaky wooden floors. The atmosphere is heavy, and the scent of incense mixes with the metallic tang of blood. The bones of St. Andral, now restored to their rightful place, rest in the crypt below the church.
Outside, the night is filled with haunting whispers and the distant howls of wolves. You know that you have bought a brief respite, but the shadow of Strahd looms large over Barovia. The surviving villagers look to the party with a mix of gratitude and fear, their eyes pleading for guidance and assurance.
Father Lucian, still visibly shaken, steps forward to address the group. "You have saved us from the brink of despair, brave adventurers. But this is not the end. Strahd will not be thwarted so easily. I fear that he will not rest until he has exacted his revenge upon us all. We must find a way to resist the darkness that threatens to consume Barovia."
You feel the weight of the desperate looks of the surviving villagers on you all. The people look to you not just as saviors, but as beacons of hope in a land gripped by shadows. The adventure continues, and the struggle against the ancient evil of Strahd von Zarovich intensifies.

## Loot, Rewards & Purchases
Loot, rewards and purchases.
- [ ] Thing 1
- [ ] Thing 2

## Keep in Mind
Things to keep in mind during the session, from items to important details

## Events
The party having stayed off Strahd's attack. Help get everything in order at the Church. But the baron and his family are no where to be seen. They find that they are hold up in their house under guard. Many villagers are enraged that he would abandon them in their time of need. A quiet angry mob grows in the night, all the while [[Yevelda Ovak ]] is flirting with [[Izek Strazni]]. In the morning the town has dragged [[Baron Vargas Vallakovich]] and his wife out to be executed, encouraged by Fiona Watcher. The party is able to halt this madness and get the Baron and his wife to safety but where is Victor?

# Summary
## New NPCs
New NPC Met.
- [[Fiona Wachter]]

## New Locations


## End of Session Notes
While the party was able to save [[Baron Vargas Vallakovich]] and his wife. [[Victor Vallakovich]] is still missing.

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
