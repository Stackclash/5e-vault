```meta-bind
INPUT[select(class(tabbed), option(At the Table), option(Members), option(Clock), option(Player-Facing), option(Secrets)):memory^tab]
```
> [!tabbed-box]
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
> > **Members** <span class="derived">derived</span>
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
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!dm] Secrets
> > **Secrets** `BUTTON[pop-secrets]`
> > `INPUT[textArea:secrets]`

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
label: ""
icon: maximize-2
tooltip: Edit Secrets in a larger window
style: default
id: pop-secrets
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: secrets
      label: Secrets
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
