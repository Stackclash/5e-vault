---
obsidianUIMode: preview
worlds:
  - "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
mechanics: ""
title: ""
symbol: ""
alignment: ""
domains: []
images: []
gist: "Barovian goddess worshipped by Baba Lysaga, Madam Eva, and the Toranescu werewolves."
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
aliases: []
tags:
  - story-deity
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Connections), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] Overview
> > **Worlds** `INPUT[inlineListSuggester(optionQuery(#world)):worlds]`
> >
> > **Title** `INPUT[text:title]`
> >
> > **Symbol** `INPUT[text:symbol]`
> >
> > **Alignment** `INPUT[text:alignment]`
> >
> > **Domains** `INPUT[inlineList:domains]`
> >
> > **Mechanics** `INPUT[suggester(optionQuery("5. Mechanics/Deities")):mechanics]`
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
> > **Worshippers**
> > ```datacorejsx
> > return function View() {
> >   const here = dc.useCurrentFile()
> >   const pages = dc.useQuery(`@page and (#npc or #faction or #player) and connected(${here.$link})`)
> >   const rows = pages.flatMap(p => (p.value("relationships") ?? []).filter(r => r && typeof r === "object" && ["worships","cleric-of"].includes(r.type) && r.target?.path === here.$path).map(r => ({ p, r })))
> >   if (!rows.length) return <p>None recorded.</p>
> >   return <dc.Table rows={rows} columns={[{ id: "Who", value: x => x.p.$link }, { id: "Tie", value: x => x.r.type }, { id: "Note", value: x => x.r.note ?? "" }]} />
> > }
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
