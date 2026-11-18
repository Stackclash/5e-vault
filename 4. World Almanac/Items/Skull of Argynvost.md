---
obsidianUIMode: preview
base_item: ""
holder: ""
location: "[[4. World Almanac/Places of Interest/Argynvostholt.md|Argynvostholt]]"
rarity: ""
attunement: false
curse: ""
images: []
gist: "The dragon Argynvost's skull, which the party placed in Argynvostholt."
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
aliases: []
tags:
  - story-item
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
> > **Holder** `INPUT[suggester(optionQuery(#player), optionQuery(#npc), optionQuery(#faction), optionQuery(#party)):holder]`
> >
> > **Rests at** `INPUT[suggester(optionQuery(#location)):location]`
> >
> > **Base item** `INPUT[suggester(optionQuery("5. Mechanics/Items")):base_item]`
> >
> > **Rarity** `INPUT[text:rarity]` **Attunement** `INPUT[toggle:attunement]`
> >
> > **Charges** `INPUT[number:charges.current]` of `INPUT[number:charges.max]` · recharge `INPUT[text:charges.recharge]`
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
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(items, this.file.link) SORT session_number ASC
> > ```
>
> > [!dm] DM
> > **Curse** `BUTTON[pop-curse]`
> > `INPUT[textArea:curse]`
> >
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > - Recorded in S33; placed in Argynvostholt (DM, 2026-11-17).

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Curse in a larger window
style: default
id: pop-curse
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: curse
      label: Curse
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
