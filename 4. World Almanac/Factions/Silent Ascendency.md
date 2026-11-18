---
obsidianUIMode: preview
kind: cult
status: active
location: ""
bases: []
images: []
gist: "Vecna's mortal cult, draining stolen magic into soul-vessels for his ascension; its Bruokdon cell fell in S44."
summary: "The cult behind the stolen-magic smuggling in Bruokdon, draining the items' magic to fuel a ritual."
revealed:
  Midnight Covenant: true
reveal: {}
facts:
  - text: The Silent Ascendency buys stolen magic items, and targets the party's own magical power, to drain them into soul-vessels built from stolen fragments of Eludrax's soul-craft and feed the energy to Vecna's ascension.
    learned: {}
    locked: true
  - text: Eludrax's soul-craft is the same craft that fed the original seal binding Vecna and produced Redgrave's bound soul.
    learned: {}
    locked: true
  - text: The Silent Ascendency has been draining stolen magic items to fuel a ritual.
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S42 Unmasking Lord Velmont.md|S42 Unmasking Lord Velmont]]"
    locked: true
goals: ""
resources: ""
symbol: ""
motto: ""
clock: []
standing: {}
renown: {}
relationships: []
aliases: []
tags:
  - faction
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Overview
>  |
>  ---|---|
> **Kind** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'kind'})` |
> **Base** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Other bases** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'bases'})` |
> **Renown** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'renown'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(Members), option(Clock), option(Player-Facing), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Goals** `BUTTON[pop-goals]`
> > `INPUT[textArea:goals]`
> >
> > **Resources** `BUTTON[pop-resources]`
> > `INPUT[textArea:resources]`
> >
> > **Symbol** `INPUT[text:symbol]`
> >
> > **Motto** `INPUT[text:motto]`
>
> > [!tab|no-t] Members
> > **Members**
> > ```datacorejsx
> > return function View() {
> >   const here = dc.useCurrentFile()
> >   const pages = dc.useQuery(`@page and (#npc or #faction or #player) and connected(${here.$link})`)
> >   const rows = pages.flatMap(p => (p.value("relationships") ?? []).filter(r => r && typeof r === "object" && ["leader","founder","member","agent","former-member"].includes(r.type) && r.target?.path === here.$path).map(r => ({ p, r })))
> >   if (!rows.length) return <p>None recorded.</p>
> >   return <dc.Table rows={rows} columns={[{ id: "Who", value: x => x.p.$link }, { id: "Tie", value: x => x.r.type }, { id: "Note", value: x => x.r.note ?? "" }]} />
> > }
> > ```
>
> > [!tab|no-t] Clock
> > Faction clocks arrive with J8. Until then, `clock` steps live in frontmatter.
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
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes

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
tooltip: Edit Resources in a larger window
style: default
id: pop-resources
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: resources
      label: Resources
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
