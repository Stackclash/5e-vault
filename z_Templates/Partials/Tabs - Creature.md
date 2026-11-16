```meta-bind
INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Connections), option(DM)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Overview
> > **Base creature** `INPUT[suggester(optionQuery("5. Mechanics/Bestiary")):base_creature]`
> >
> > **CR** `INPUT[text:cr]` **Size** `INPUT[text:size]` **Type** `INPUT[text:type]`
> >
> > **Environments** `INPUT[inlineList:environments]`
> >
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
>
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!tab|no-t] Connections
> > `BUTTON[add-relationship]` `BUTTON[remove-relationship]`
> >
> > **Named individuals**
> > ```dataview
> > LIST FROM #npc WHERE contains(file.outlinks, this.file.link)
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```

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
