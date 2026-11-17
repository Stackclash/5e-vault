---
obsidianUIMode: preview
date: 2023-07-08T00:00:00.000Z
summary: |-
  In the latest chapter of our tale, the party found themselves ensnared by a sinister, mystical fog, forcing them together and leading them to the eerie Village of Barovia. There, the mournful cries of a small boy, Thorn, and his sister Rose guided them to the ominous Death House. The children, pleading for the rescue of their infant brother Walter, set the adventurers on a perilous path. Upon entering the house, the doors slammed shut, trapping them inside. Desperate, the party used fiery magic to blast their way out, only to resolve to re-enter in a determined bid to save Walter.

  Inside, they faced numerous horrors, including an encounter with an enchanted suit of armor. Yevelda Ovak, ever vigilant, scoured under every rug for hidden secrets. Their search led them to the attic where they discovered the tragic remains of Thorn and Rose, who had been imprisoned there. With the children's bones, the party sought to lay their spirits to rest. Guided by the ghost of Rose, they uncovered a hidden passage leading to the basement. There, amid the eerie stillness, they discovered the crypts of the house’s former inhabitants, setting the stage for the next haunting revelation in their dark journey. The weight of their mission and the secrets of the Death House loomed heavily, promising more peril and mystery ahead.
fc-date: 973-2-11
timelines:
  - COS
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
prep_notes:
tags:
  - session-journal
locations:
  - "[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]"
calendar: Eldoria Calendar
fc-end: 973-2-11
session_number: 1
party_present:
  - "[[3. The Party/Players/Yevelda Ovak.md|Yevelda Ovak]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
npcs: []
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
- Cultists that lived in the Death House looked up to [[Strahd Von Zarovich]]
- Thorn and Rose are ghosts of children that lived in the Death House

## Items Of Importance
- Found in the secret door in the Library
	- A deed to the death house
	- A deed to a windmill
	- A letter from [[Strahd Von Zarovich]]
	- 3 blank black books (25gp each) - [[Marin]] 
	- three spell scrolls ([bless](app://obsidian.md/5.%20Mechanics/Spells/Bless.md), [protection from poison](app://obsidian.md/5.%20Mechanics/Spells/Protection%20From%20Poison.md), and [spiritual weapon](app://obsidian.md/5.%20Mechanics/Spells/Spiritual%20Weapon.md)) - [[Marin]] 

## What Happened
- The party finds themselves forced together by a creepy mystical fog
- They come to the [[Village of Barovia]] and her a small boy crying
- Thorn and Rose bring the party to the Death House.
- The children beg them to save their small brother, Walter
- The party goes in when the doors shut behind them.
- They try to force the door open and eventually blast it open with fire.
- When outside they decide to go back in for Walter
- While exploring the house, [[Yevelda Ovak ]] continuously looks for secrets under rugs.
- The party has a short encounter with a enchanted armor
- They make their way to the attic where they find the room that the children were kept.
	- The party takes the bones of the children to put to rest
- Guided by the ghost of Rose they find the secret door to the basement
- In the basement they find the crypts of the family that owned the house.

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
