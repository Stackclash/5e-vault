---
obsidianUIMode: preview
location: "[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]"
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
owners: []
staff:
  - "[[4. World Almanac/NPCs/Parriwimple (COS).md|Parriwimple (COS)]]"
cost_modifier: 1
items:
tags:
  - shop
  - location
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Pricing
>  |
>  ---|---|
> **Shop type** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'type'})` |
> **Shop size** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'size'})` |
> **Cost modifier** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'cost_modifier'})` |
> **Buy rate** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'buy_rate'})` |
> ###### Where
>  |
>  ---|---|
> **Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(Inventory), option(At the Table), option(Player-Facing), option(DM)):memory^tab]
> ```
>
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
