```meta-bind
INPUT[select(class(tabbed), option(Steps), option(NPCs & Links), option(Description), option(Player-Facing), option(Secrets)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Steps
> > ```datacorejsx
> > const { QuestSteps } = await dc.require("z_Scripts/Datacore/QuestSteps.tsx")
> > return function View() { return <QuestSteps /> }
> > ```
>
> > [!tab|no-t] NPCs & Links
> > **Giver** `INPUT[suggester(optionQuery(#npc), optionQuery(#faction)):giver]`
> >
> > **Locations** `INPUT[inlineListSuggester(optionQuery(#location)):locations]`
> >
> > **Items** `INPUT[inlineListSuggester(optionQuery(#story-item), optionQuery("5. Mechanics/Items")):items]`
> >
> > **Factions** `INPUT[inlineListSuggester(optionQuery(#faction)):factions]`
> >
> > **PCs** `INPUT[inlineListSuggester(optionQuery(#player)):pcs]`
> >
> > **Sessions** <span class="derived">derived</span>
> > ```dataview
> > LIST FROM #session-journal WHERE contains(quests, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Description
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **Stakes** `BUTTON[pop-stakes]`
> > `INPUT[textArea:stakes]`
> >
> > **Reward** `INPUT[text:reward]`
> >
> > **Deadline** `INPUT[text:deadline]`
>
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!dm] Secrets
> > **Secrets** `BUTTON[pop-secrets]`
> > `INPUT[textArea:secrets]`

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
tooltip: Edit Stakes in a larger window
style: default
id: pop-stakes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: stakes
      label: Stakes
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
