---
obsidianUIMode: preview
statblock: inline
location:
condition: healthy
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
relationships:
  - target: "[[4. World Almanac/NPCs/Baba Lysaga (COS).md|Baba Lysaga]]"
    type: ally
    note: of convenience
  - target: "[[4. World Almanac/Factions/Gloaming Court.md|Gloaming Court]]"
    type: member
tags:
  - npc
aliases:
  - Mab
  - Queen of Air and Darkness
pronounced: MAB (rhymes with "cab")
race:
gender: female
age:
alignment: Chaotic Neutral
occupation:
  - Queen of Air and Darkness
  - Ruler of the Gloaming Court
religions: []
description: >-
  Mab appears as a tall, sharp-featured woman wrapped in layers of dusk-grey and
  black, her gown seeming to trail off into mist rather than hem at any fixed
  point. Her eyes have no visible pupil — just a depth of near-black that
  reflects no light back. She wears a crown that looks, depending on the angle,
  like antlers, thorns, or the bare branches of a winter tree. She never raises
  her voice; she doesn't need to. Owls and ravens settle near her without being
  called, and go still.
history: >-
  Mab has ruled the Gloaming Court since before mortal record-keeping in
  Eldoria began, locked in the ancient, only-sometimes-hostile rivalry with
  Titania and the Summer Court that defines the Feywild's seelie/unseelie
  divide. She does not consider herself evil, and resents the label — to her,
  the Gloaming Court simply keeps a different kind of order than Titania's:
  one built on debts, names, and bargains kept to the letter. She has stood
  apart from the mortal-plane politics of Barovia and Eldoria for centuries,
  but old dark-magic practitioners like [[Baba Lysaga (COS)|Baba Lysaga]] have
  long known how to petition her court for favors, at a price.
personality: >-
  Coldly gracious, unhurried, and precise. She never lies, but she never
  volunteers the whole truth either — every sentence she offers is exactly as
  true and exactly as incomplete as it needs to be to still count as a bargain
  kept.
ideal: A debt incurred is a debt owed, regardless of who incurred it or why.
bond: The Gloaming Court's word is absolute — she has never broken a bargain, and never will.
flaw: >-
  She values the form of a bargain over its spirit, and over the wellbeing of
  anyone bound by one — including, at times, her own subjects.
goals: >-
  Maintain the Gloaming Court's standing and its rivalry with the Summer
  Court; collect on every debt owed to her, eventually; extract value from
  the bargain she struck with Baba Lysaga now that it has come due on
  travelers of real consequence.
likes: Precise language, old debts, ravens and owls, the look on a mortal's face when they realize what they agreed to.
dislikes: Sloppy bargains, being rushed, the Summer Court's easy warmth.
party_relationships:
  Midnight Covenant: Acquaintance
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'race'})` |
> **Gender** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})` |
> **Age** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'age'})` |
> **Alignment** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'alignment'})` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'occupation'})` |
> **Current Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Faction(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["member","leader","founder","agent","former-member"].includes(r.type)).map(r => r.target).join(", ")` |
> **Religion(s)** | `INPUT[inlineList:religions]` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(Lore), option(Player-Facing), option(Connections), option(Stats), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Appearance** `INPUT[text:appearance]`
> >
> > **Voice** `BUTTON[pop-voice]`
> > `INPUT[textArea:voice]`
> >
> > **Goals** `BUTTON[pop-goals]`
> > `INPUT[textArea:goals]`
> >
> > **Personality** `BUTTON[pop-personality]`
> > `INPUT[textArea:personality]`
> >
> > **Ideal** `BUTTON[pop-ideal]`
> > `INPUT[textArea:ideal]`
> >
> > **Bond** `BUTTON[pop-bond]`
> > `INPUT[textArea:bond]`
> >
> > **Flaw** `BUTTON[pop-flaw]`
> > `INPUT[textArea:flaw]`
> >
> > **Likes** `BUTTON[pop-likes]`
> > `INPUT[textArea:likes]`
> >
> > **Dislikes** `BUTTON[pop-dislikes]`
> > `INPUT[textArea:dislikes]`
>
> > [!tab|no-t] Lore
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **History** `BUTTON[pop-history]`
> > `INPUT[textArea:history]`
>
> > [!player] Player-Facing
> > **Revealed to the party** `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['revealed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})`
> >
> > **Public name** `$=await dv.view('utils/metaBindInput', {type: 'text', field: ['public_name', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (optional: shown instead of the note name)
> >
> > **Also show** `$=await dv.view('utils/metaBindInput', {type: 'inlineList', field: ['reveal', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` (extra fields the site may show, e.g. images, occupation)
> >
> > **Summary** `BUTTON[pop-summary]`
> > `INPUT[textArea:summary]`
> >
> > **Facts**
> > ```datacorejsx
> > const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
> > return function View() { return <FactsTable /> }
> > ```
>
> > [!tab|no-t] Connections
> > `BUTTON[add-relationship]` `BUTTON[remove-relationship]`
> >
> > ```dataviewjs
> > await dv.view("views/npcRelationships", { current: dv.current() })
> > ```
> >
> > **Quests**
> > ```dataview
> > LIST FROM #quest WHERE contains(npcs.name, this.file.link)
> > ```
> >
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(npcs, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Stats
> > ```statblock
> >
> > ```
> >
> > > [!note] DM Note — No Combat Stat Block Yet
> > > Mab is not intended to fight the party in her introductory scene — she appears after [[Baba Lysaga (COS)|Baba Lysaga]] has already fled, purely to collect on the bargain. If she's ever needed in combat, [[5. Mechanics/Bestiary/Fey/Winter Eladrin (MPMM).md|Winter Eladrin (MPMM)]] (CR 10) is a reasonable archfey-tier base to reflavor rather than building her from scratch.
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> > Her deal with [[Baba Lysaga (COS)|Baba Lysaga]]: in exchange for a pack of [[5. Mechanics/Bestiary/Fey/Yeth Hound (MPMM).md|Yeth Hounds]] and a glamour to disguise herself as a fey bargain-broker, Lysaga owed Mab a future favor of her own — Mab hasn't called it in yet, and hasn't decided if she will. She's less interested in Lysaga's vendetta than in what she can extract from mortals capable of killing a vampire lord and walking the planes uninvited.
> >
> > ### General Notes

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Voice in a larger window
style: default
id: pop-voice
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: voice
      label: Voice
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Goals in a larger window
style: default
id: pop-goals
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: goals
      label: Goals
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Personality in a larger window
style: default
id: pop-personality
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: personality
      label: Personality
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Ideal in a larger window
style: default
id: pop-ideal
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: ideal
      label: Ideal
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Bond in a larger window
style: default
id: pop-bond
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: bond
      label: Bond
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Flaw in a larger window
style: default
id: pop-flaw
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: flaw
      label: Flaw
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Likes in a larger window
style: default
id: pop-likes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: likes
      label: Likes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Dislikes in a larger window
style: default
id: pop-dislikes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: dislikes
      label: Dislikes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Description in a larger window
style: default
id: pop-description
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: description
      label: Description
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit History in a larger window
style: default
id: pop-history
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: history
      label: History
```
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
```meta-bind-button
label: Edit DM Notes
icon: pencil
style: default
id: edit-dm-notes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editSection.js
    args:
      heading: DM Notes
      prefix: "> > "
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Summary in a larger window
style: default
id: pop-summary
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: summary
      label: Summary
```

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
