---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/elf
condition: healthy
images: []
aliases:
  - Savid
alignment: Neutral
description: >-
  A gaunt, dark-haired dusk elf scout with keen eyes and quiet footsteps, more
  comfortable in the wild than among strangers.
history: >-
  More than four hundred years old, Savid is one of the last dusk elves living
  under [[Kasimir Velikov (COS)|Kasimir Velikov]]'s protection at the Vistani
  camp outside Vallaki. A skilled tracker, he was searching the woods for the
  missing [[Arabelle (COS)|Arabelle]] when a wandering mob of needle blights
  forced him to take refuge, wounded, inside [[Argynvostholt]].
relationships: [ { target: "[[4. World Almanac/Factions/Dusk Elves of Barovia.md|Dusk Elves of Barovia]]", type: member, note: last of }, { target: "[[4. World Almanac/Factions/Vistani.md|Vistani]]", type: member, note: "Vallaki camp, allied" } ]
party_relationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: SAV-id
race: '[[5. Mechanics/Races/Elf.md|Elf]]'
gender: male
age: 430
occupation:
  - Scout
  - Tracker
religions: []
personality: 'Loyal, watchful, quietly weary from centuries of subjugation'
ideal: 'Protect what''s left of his people, whatever the cost.'
bond: >-
  [[Kasimir Velikov (COS)|Kasimir Velikov]] and the handful of dusk elves who
  remain.
flaw: >-
  Centuries of fear under Strahd's shadow have made him cautious to the point of
  passivity.
goals: To find the missing Vistani girl Arabelle and return safely to camp.
likes: 'The quiet of the woods, tracking, small kindnesses'
dislikes: >-
  Needle blights and other twisted things of the wild, being trapped indoors,
  cruelty to his kin
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
> **Religion(s)** | `INPUT[inlineList:religions]` |

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
> > "name": "Savid (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "elf"
> > "alignment": "Neutral"
> > "ac": !!int "13"
> > "ac_class": "[[/5. Mechanics/Items/Leather Armor.md|leather armor]]"
> > "hp": !!int "16"
> > "hit_dice": "3d8 + 3"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "11"
> >   - !!int "14"
> >   - !!int "12"
> >   - !!int "11"
> >   - !!int "13"
> >   - !!int "11"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
> >     "desc": "+5"
> > "gear":
> >   - "[[/5. Mechanics/Items/Longbow.md|longbow]]"
> >   - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
> > "senses": "passive Perception 15"
> > "languages": "any one language (usually Common)"
> > "cr": "1/2"
> > "traits":
> >   - "desc": "Savid has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
> >       \ checks that rely on hearing or sight."
> >     "name": "Keen Hearing and Sight"
> > "actions":
> >   - "desc": "Savid makes two melee attacks or two ranged attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
> >       \ + 2) piercing damage."
> >     "name": "Shortsword"
> >   - "desc": "*Ranged Weapon Attack:* +4 to hit, ranged 150/600 ft., one target. *Hit:*\
> >       \ 6 (1d8 + 2) piercing damage."
> >     "name": "Longbow"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/savid-cos.webp"
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

## Source
*Source: Curse of Strahd p. 133*

TBD

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
