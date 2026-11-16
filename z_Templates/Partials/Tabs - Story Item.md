```meta-bind
INPUT[select(class(tabbed), option(Overview), option(Player-Facing), option(Connections), option(DM)):memory^tab]
```
> [!tabbed-box]
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
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!tab|no-t] Connections
> > **Sessions** <span class="derived">derived</span>
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
