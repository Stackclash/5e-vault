---
obsidianUIMode: preview
date: 2023-08-26T00:00:00.000Z
summary: |-
  Continuing their harrowing journey, the party arrived at Tser Pool, where they encountered an eclectic mix of Vistani. Magda, a large woman, offered mysterious potions, while the eccentric Alek enthralled them with wild tales. Sergei, a craftsman of unsettling dolls, piqued their curiosity. Before delving further, the adventurers respectfully laid the bones of the tragic children to rest beneath a willow tree by the pool, a moment of somber peace in their otherwise perilous quest.

  Their path led them to the enigmatic Madam Eva, a seer with unnerving knowledge of their backgrounds. Through a mystical tarot reading, she provided cryptic yet invaluable guidance for their quest. She spoke of a wizard's tower on a lake, hinting at ancient knowledge vital to understanding their enemy. A powerful holy symbol awaited in a dead village drowned by a river. The sword of sunlight, a weapon of vengeance, lay hidden amidst treasure beyond amber doors. She foretold of an ally—a man with a monkey, more than he seemed. Lastly, she revealed that their ultimate foe, a creature of darkness, haunted the tomb of a man he envied above all. With Madam Eva’s cryptic prophecies in mind, the adventurers now have a clearer direction, but the shadows of Barovia grow darker, and the stakes ever higher as they inch closer to their fated confrontation with Strahd.
fc-date: 973-2-12
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
calendar: Eldoria Calendar
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes:
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Places of Interest/Tser Pool.md|Tser Pool]]"
fc-end: 973-2-12
session_number: 4
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
npcs:
  - "[[4. World Almanac/NPCs/Madam Eva (COS).md|Madam Eva (COS)]]"
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
- [Redgrave](app://obsidian.md/Redgrave) buys 5lbs of iron for 20cp
- [Marin](app://obsidian.md/Marin) buys Potion of Growth for 75gp
- 5 x 5gp healing potion
- 2 x 15gp greater potion
- Sells 2 short swords
    - 5gp
- 40 gp for all

## What Happened
- Met the following NPCs at Tser Pool
  - Magda (large woman) - Vistani sells potions
  - Alek (crazy) - Storyteller
  - Sergei - Vistani sells dolls
- Buries kids' bones next to willow tree right before Tser Pool
- Madam Eva who seems to know about the players backgrounds and gives them a reading using Tarot Cards that give them direction on their quest

### Madam Eva's Reading
This card tells of history. Knowledge of the ancient will help you better understand your enemy.
Look for a wizard's tower on a lake. Let the wizard's name and servant guide you to that which you seek.

This card tells of a powerful force for good and protection, a holy symbol of great hope.
I see a dead village, drowned by a river, ruled by one who has brought great evil into the world.

This is a card of power and strength. It tells of a weapon of vengeance: a sword of sunlight.
What you seek lies in a pile of treasure, beyond a set of amber doors.

This card sheds light on one who will help you greatly in the battle against darkness.
Look for an entertaining man with a monkey. This man is more than he seems.

Your enemy is a creature of darkness, whose powers are beyond mortality. This card will lead you to him!
He haunts the tomb of the man he envied above all.

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
