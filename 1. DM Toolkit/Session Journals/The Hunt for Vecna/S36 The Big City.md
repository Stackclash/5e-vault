---
obsidianUIMode: preview
date: 2026-02-28
summary: |-
  The party arrived in the bustling city of Bruokdon — Redgrave's old hometown. A guard named Chaz escorted them to the register office, where they formally registered their company as the Midnight Covenant. Redgrave reconnected with the Artisan Guild and the Watchers over the Fallen, of which he was already a member, and settled back into a house in the city. At the Golden Hammer, a smithy run by his old friend the goliath Arnoth, the party outfitted themselves with an array of enchanted gear. Their true purpose in Bruokdon, however, was to seek out Professor Gousse — a council member at the Umbral Aethenaeum, the city's magical school — in hopes its vast library might hold answers about Vecna.
fc-date: 973-2-24
fc-end: 973-2-25
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes: "[[1. DM Toolkit/Session Prep/The Hunt for Vecna/2026-02-28.md|2026-02-28]]"
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
session_number: 36
party_present:
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Wisp.md|Wisp]]"
npcs: []
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
## General Notes
Taverns - The Floating Flagon, Pheonix Diner (Fancy District)
The Fine Star, The Careful Tree Inn (Common District)
The Bored Hunter (Industry District)

Chaz the guard takes them to the register office

Midnight Covenant is groups name
Redgrave is a part of Artisan Guild and Watchers over the Fallen

Redgrave has a house in [[Bruokdon]].

Arnoth the [[Goliath (MPMM)]] is owner of the Golden Hammer
750gp for Dagger +3
500gp for Bracers of Defense
500gp for Longbow +2
750gp Animated Shield
500gp +1 Shield

Item cards to create:
- Bloodrage Axe
- Robe of Useful Items
- Boots of Sprinting and Jumping
- Animated Shield
- +1 Shield

Current Magic Item Inventory:
- Redgrave:
	- [[1 Shield]]
	- [[Animated Shield]]
	- [[Cloak Of Protection]]
	- [[Sunsword (COS)]]
	- [[Holy Symbol Of Ravenkind (COS)]]
- Faerah:
	- [[Winged Boots]]
	- [[Cloak Of Elvenkind]]
	- [[Pipes Of Haunting]]
	- +2 Longbow
- Roark:
	- +2 Sword
	- Amulet of the Drunkard
	- +3 Dagger
- Yevelda:
	- Bloodrage Axe
	- [[Boots Of Striding And Springing]]
	- [[Helm Of The Minotaur (HHHVI)]]
	- [[Javelin Of Lightning]]
	- [[Yester Hill Axe (COS)]]
- Wisp:
	- [[Eyes Of Minute Seeing]]
	- [[Amulet Of Health]]
	- [[Driftglobe]]

Wisp's owner Tim Darkmagic

Elder Goos meets with the party

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance


## What Happened
Small description.

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
