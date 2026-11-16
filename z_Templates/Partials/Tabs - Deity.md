```meta-bind
INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Connections), option(DM)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Overview
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
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
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
> > ## DM Notes

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
