---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Cinderworks.md|The Cinderworks]]"
condition: healthy
gist: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
relationships: [ { target: "[[4. World Almanac/Factions/Silent Ascendency.md|Silent Ascendency]]", type: agent }, { target: "[[4. World Almanac/Places of Interest/The Cinderworks.md|The Cinderworks]]", type: works-at }, { target: "[[4. World Almanac/NPCs/Marrow.md|Marrow]]", type: employer } ]
tags:
  - npc
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Hesper Crane
  - the Quartermaster
pronounced: HESS-per Crayn
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: female
age: 51
alignment: Neutral Evil
occupation:
  - Silent Ascendency Logistics Handler, The Cinderworks
description: |-
  Grey-haired and wiry, dressed like a foreman rather than a cultist — soot-stained coat, ledger always under one arm. A milky scar closes her left eye, a souvenir from a smuggling run that went wrong decades before the Ascendency ever found her useful. She counts everything twice, out loud, under her breath, whether or not anyone's listening.
history: |-
  Crane ran contraband through half of Greenfall before the Ascendency ever made contact — hired on as a professional, not a convert, when Marrow's operation needed someone who actually knew how to move goods without the crown noticing. She doesn't know who Vecna is, doesn't much care, and refers to her employers only by the money they pay on time. The Cinderworks depot has been hers to run for over a year: she never met "Lord Velmont" in person before now, only ever corresponded through couriers and a standing set of passwords Marrow set up when the arrangement began — which is exactly what makes the real Velmont's return so easy to sell and so dangerous to get wrong.
  The overdue shipment (intercepted by the party in S44) has her rattled. She has already sent one inquiry up the chain and is waiting on a reply she's increasingly sure isn't coming.
personality: Blunt, transactional, allergic to surprises. Trusts ledgers over people.
ideal: Everything has a price, including loyalty.
bond: Answers to whoever pays on time — currently the Silent Ascendency, but not out of any belief in their cause.
flaw: Her paranoia about the missing shipment makes her both harder to fool and quicker to bolt at the first sign of trouble.
goals: Account for the missing shipment, keep the Cinderworks running, and not be the one left holding the ledger when something goes wrong.
likes: exact counts, being paid on schedule, quiet nights
dislikes: surprises, couriers who talk too much, owing anyone an explanation
party_relationships:
  Midnight Covenant: Acquaintance
summary: ""
secrets: |-
  STILL DM-ONLY (not yet revealed): Crane has never actually met Velmont in person — only Marrow-as-Velmont, and only ever remotely, through couriers and a standing password exchange. She has no way to detect the swap by sight. She *will* test the password if given any reason to doubt "Velmont," and she has already sent one unanswered inquiry up the chain about the missing shipment — a second silence from either direction is what breaks her composure.
  Her ledger names the Cinderworks' next relay contact in [[Duskferry]] by name and code — the intended payoff of a successful infiltration.
  She knows nothing about Vecna by name — only "the Undying King," Ascendency doctrine passed down the same way it reached Marrow's cell.
  If the ruse breaks or the fight turns against her, she surrenders rather than dies for an employer who isn't answering her messages — she has no loyalty worth dying for. If she escapes instead, she disappears into Greenfall and doesn't reappear at the Cinderworks; treat her as a loose end for a future session, not a guaranteed capture.
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
> **Religion(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["worships","cleric-of"].includes(r.type)).map(r => r.target).join(", ")` |

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
> > *Unmodified [[5. Mechanics/Bestiary/Humanoid/Blackguard (MPMM).md|Blackguard]] (CR 8, MPMM) — no stat changes. Crane reads as a hardened logistics enforcer rather than a knight, but the published block (multiattack, Aura of Hate, a small utility spell list) plays that role without modification. Use the linked bestiary note directly for her stats in the Initiative Tracker; this note carries her identity, motive, and secrets.*
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> > See Secrets above: she's never met the real Velmont, tests via a password exchange if suspicious, and her ledger is the payoff pointing to [[Duskferry]].
> >
> > ### General Notes
> > **Stat block design (2026-08-22):** built for [[The Second Ledger]]'s Cinderworks infiltration. Reskin choice: [[5. Mechanics/Bestiary/Humanoid/Blackguard (MPMM).md|Blackguard]] (CR 8) unmodified — she's dangerous enough to be a real threat if the ruse breaks, without inventing new mechanics for a secondary-op NPC. Paired with 2× [[5. Mechanics/Bestiary/Humanoid/Veteran.md|Veteran]] (CR 3 each) and 2× [[5. Mechanics/Bestiary/Humanoid/Thug.md|Thug]] (CR 1/2 each) for the full Cinderworks encounter — CR sum 15 against 5 level-10 PCs (Lazy DM benchmark: deadly at CR sum > 25) reads Hard-but-not-deadly, appropriately a notch below the Baba Lysaga fight on the other branch (CR sum 19) since this is a secondary op, not tonight's potential climax.

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
