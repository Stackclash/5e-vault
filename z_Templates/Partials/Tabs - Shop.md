```meta-bind
INPUT[select(class(tabbed), option(Inventory), option(At the Table), option(Player-Facing), option(DM Notes)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Inventory
> > `BUTTON[generate-inventory]` `BUTTON[add-item]`
> >
> > ```datacorejsx
> > const { ShopInventory } = await dc.require("z_Scripts/Datacore/ShopInventory.tsx")
> > return function View() { return <ShopInventory /> }
> > ```
>
> > [!tab|no-t] At the Table
> > **Owners** `INPUT[inlineListSuggester(optionQuery(#npc)):owners]`
> >
> > **Staff** `INPUT[inlineListSuggester(optionQuery(#npc)):staff]`
> >
> > **Atmosphere** `BUTTON[pop-atmosphere]`
> > `INPUT[textArea:atmosphere]`
>
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!dm] DM Notes
> > **Secrets** `BUTTON[pop-secrets]`
> > `INPUT[textArea:secrets]`

```meta-bind-button
style: primary
label: Generate Inventory
id: generate-inventory
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/generateShopInventory.js
```
```meta-bind-button
style: default
label: Add Item
id: add-item
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/addShopItem.js
    args:
      field: items
      folder: 5. Mechanics/Items
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Atmosphere in a larger window
style: default
id: pop-atmosphere
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: atmosphere
      label: Atmosphere
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
