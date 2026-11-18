---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/undead
condition: healthy
images: []
aliases:
  - Ludmilla Vilisevic
alignment: Neutral Evil
relationships: [ { target: "[[4. World Almanac/Factions/Strahd's Brides.md|Strahd's Brides]]", type: member }, { target: "[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]", type: home, note: "catacombs, near Strahd's coffin" } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: lud-MIL-ah vil-ih-SEV-ich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 24
occupation: []
personality: >-
  Vain and pining even in undeath — clings to the memory of being chosen, though
  Strahd's favor faded long ago.
ideal: 'To be remembered as Strahd''s bride, not his discard.'
bond: 'The wedding gown she still wears, and the wedding day she''ll never let go of.'
flaw: Blind devotion to a man who has long since forgotten her.
goals: 'To be noticed by Strahd again — or, failing that, to feed.'
likes: 'Finery, attention, being called beautiful'
dislikes: 'Being ignored, sunlight, reminders that she was replaced'
description: >-
  A vampire spawn bride in a soiled white wedding gown, gold tiara, and gold
  bracelets — one of three brides who lie dormant near Strahd's coffin.
history: >-
  Once a mortal woman claimed as one of Strahd's many brides, Ludmilla was
  turned into a vampire spawn and discarded like those before her. She lay
  dormant for centuries with her sister brides, [[Anastrasya Karelova
  (COS)|Anastrasya Karelova]] and [[Volenta Popofsky (COS)|Volenta Popofsky]],
  in the earth near Strahd's coffin in the catacombs of Castle Ravenloft, rising
  only to defend it from intruders.
---
> [!infobox]
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'race'})` |
> **Gender** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})` |
> **Age** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'age'})` |
> **Alignment** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'alignment'})` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'occupation'})` |
> **Current Location** | `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'location'})` |
> **Faction(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["member","leader","founder","agent","former-member"].includes(r.type)).map(r => r.target).join(", ")` |
> **Religion(s)** | `$= (dv.current().relationships ?? []).filter(r => r && ["worships","cleric-of"].includes(r.type)).map(r => r.target).join(", ")` |

```dataviewjs
await dv.view('views/entityHeader', {current: dv.current()})
```

> [!tabs]
> ```meta-bind
> INPUT[select(class(tabbed), option(At the Table), option(Lore), option(Player-Facing), option(Connections), option(Stats), option(DM)):memory^tab]
> ```
>
> > [!tab|no-t] At the Table
> > **Appearance** `INPUT[text:appearance]`
> >
> > **Voice** `BUTTON[pop-voice]`
> > `INPUT[textArea:voice]`
> >
> > **Goals** `BUTTON[pop-goals]`
> > `INPUT[textArea:goals]`
> >
> > **Personality** `BUTTON[pop-personality]`
> > `INPUT[textArea:personality]`
> >
> > **Ideal** `BUTTON[pop-ideal]`
> > `INPUT[textArea:ideal]`
> >
> > **Bond** `BUTTON[pop-bond]`
> > `INPUT[textArea:bond]`
> >
> > **Flaw** `BUTTON[pop-flaw]`
> > `INPUT[textArea:flaw]`
> >
> > **Likes** `BUTTON[pop-likes]`
> > `INPUT[textArea:likes]`
> >
> > **Dislikes** `BUTTON[pop-dislikes]`
> > `INPUT[textArea:dislikes]`
>
> > [!tab|no-t] Lore
> > **Description** `BUTTON[pop-description]`
> > `INPUT[textArea:description]`
> >
> > **History** `BUTTON[pop-history]`
> > `INPUT[textArea:history]`
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
> > `BUTTON[add-relationship]` `BUTTON[remove-relationship]`
> >
> > ```dataviewjs
> > await dv.view("views/npcRelationships", { current: dv.current() })
> > ```
> >
> > **Quests**
> > ```dataview
> > LIST FROM #quest WHERE contains(npcs.name, this.file.link)
> > ```
> >
> > **Sessions**
> > ```dataview
> > LIST FROM #session-journal WHERE contains(npcs, this.file.link) SORT session_number ASC
> > ```
>
> > [!tab|no-t] Stats
> > ```statblock
> > "name": "Ludmilla Vilisevic (COS)"
> > "size": "Medium"
> > "type": "undead"
> > "alignment": "Neutral Evil"
> > "ac": !!int "15"
> > "ac_class": "natural armor"
> > "hp": !!int "82"
> > "hit_dice": "11d8 + 33"
> > "modifier": !!int "3"
> > "stats":
> >   - !!int "16"
> >   - !!int "16"
> >   - !!int "16"
> >   - !!int "11"
> >   - !!int "10"
> >   - !!int "12"
> > "speed": "30 ft."
> > "saves":
> >   - "dexterity": !!int "6"
> >   - "wisdom": !!int "3"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+3"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+6"
> > "damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 13"
> > "languages": "the languages it knew in life"
> > "cr": "5"
> > "traits":
> >   - "desc": "Ludmilla regains 10 hit points at the start of its turn if it has at\
> >       \ least 1 hit point and isn't in sunlight or running water. If Ludmilla takes\
> >       \ radiant damage or damage from [[/5. Mechanics/Items/Holy Water Flask.md|holy water]],\
> >       \ this trait doesn't function at the start of Ludmilla's next turn."
> >     "name": "Regeneration"
> >   - "desc": "Ludmilla can climb difficult surfaces, including upside down on ceilings,\
> >       \ without needing to make an ability check."
> >     "name": "Spider Climb"
> >   - "desc": "Ludmilla has the following flaws:\n\n- **Forbiddance.** Ludmilla can't\
> >       \ enter a residence without an invitation from one of the occupants.  \n- **Harmed\
> >       \ by Running Water.** Ludmilla takes 20 acid damage when it ends its turn in\
> >       \ running water.  \n- **Stake to the Heart.** Ludmilla is destroyed if a piercing\
> >       \ weapon made of wood is driven into its heart while it is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
> >       \ in its resting place.  \n- **Sunlight Hypersensitivity.** Ludmilla takes 20\
> >       \ radiant damage when it starts its turn in sunlight. While in sunlight, it\
> >       \ has disadvantage on attack rolls and ability checks  "
> >     "name": "Vampire Weaknesses"
> > "actions":
> >   - "desc": "Ludmilla makes two attacks, only one of which can be a bite attack."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one willing creature,\
> >       \ or a creature that is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
> >       \ by Ludmilla, [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
> >       \ or [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]. *Hit:* 6 (1d6\
> >       \ + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point\
> >       \ maximum is reduced by an amount equal to the necrotic damage taken, and Ludmilla\
> >       \ regains hit points equal to that amount. The reduction lasts until the target\
> >       \ finishes a long rest. The target dies if this effect reduces its hit point\
> >       \ maximum to 0."
> >     "name": "Bite"
> >   - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 8\
> >       \ (2d4 + 3) slashing damage. Instead of dealing damage, Ludmilla can grapple\
> >       \ the target (escape DC 13)."
> >     "name": "Claws"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/ludmilla-vilisevic-cos.webp"
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Plot Hooks
> >
> >
> > ### Hidden Details
> >
> >
> > ### General Notes
> >
> > #### Source
> > *Source: Curse of Strahd p. 93*
> >
> > TBD

```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Voice in a larger window
style: default
id: pop-voice
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: voice
      label: Voice
```
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
tooltip: Edit Personality in a larger window
style: default
id: pop-personality
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: personality
      label: Personality
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Ideal in a larger window
style: default
id: pop-ideal
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: ideal
      label: Ideal
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Bond in a larger window
style: default
id: pop-bond
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: bond
      label: Bond
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Flaw in a larger window
style: default
id: pop-flaw
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: flaw
      label: Flaw
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Likes in a larger window
style: default
id: pop-likes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: likes
      label: Likes
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Dislikes in a larger window
style: default
id: pop-dislikes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: dislikes
      label: Dislikes
```
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
tooltip: Edit History in a larger window
style: default
id: pop-history
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: history
      label: History
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
