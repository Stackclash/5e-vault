---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/humanoid/mongrelfolk
condition: healthy
images: []
aliases:
  - Marzena Belview
alignment: ""
description: >-
  Marzena stands 4 feet, 5 inches tall with a hunched, wary posture. Long,
  stringy black hair hides much of her face, but her spider mandibles and teeth
  are impossible to miss. She has the arms and leathery wings of a bat and a
  cloven hoof in place of her right foot.
history: >-
  Marzena is one of the Belview family, transformed generations ago by [[The
  Abbot (COS)|the Abbot]] at the family's own desperate request for bestial
  "perfection." She is chained to a post in the abbey's courtyard, convinced
  that unseen enemies watch her every move; only her brother [[Clovin Belview
  (COS)|Clovin Belview]] can get close enough to feed her.
relationships: [ { target: "[[4. World Almanac/Factions/Belview Family.md|Belview Family]]", type: member }, { target: "[[5. Mechanics/Deities/Forgotten Realms Lathander.md|The Morninglord]]", type: worships } ]
party_relationships: {}
location: >-
  [[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of
  Saint Markovia]]
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: mar-ZEH-nah BEL-view
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 32
occupation:
  - Abbey captive
personality: 'Paranoid, skittish, feral'
ideal: Trust no one — everyone is an agent sent to hunt you down.
bond: >-
  Only [[Clovin Belview (COS)|Clovin Belview]] is allowed close enough to feed
  her; he alone has never hurt her.
flaw: Her paranoia is so consuming that she lashes out even at would-be rescuers.
goals: To slip her chains and find somewhere no one is watching her
likes: 'Solitude, open sky, being left alone'
dislikes: 'Strangers, being watched, sudden movement, cages'
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
> > "name": "Marzena Belview (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "mongrelfolk"
> > "alignment": "Any alignment"
> > "ac": !!int "11"
> > "ac_class": "natural armor"
> > "hp": !!int "26"
> > "hit_dice": "4d8 + 8"
> > "modifier": !!int "-1"
> > "stats":
> >   - !!int "12"
> >   - !!int "9"
> >   - !!int "15"
> >   - !!int "9"
> >   - !!int "10"
> >   - !!int "6"
> > "speed": "20 ft., fly 40 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+2"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+2"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+3"
> > "gear":
> >   - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
> > "senses": "passive Perception 12"
> > "languages": "Common"
> > "cr": "1/4"
> > "traits":
> >   - "desc": "The mongrelfolk has leathery wings and a flying speed of 40 feet."
> >     "name": "Flight"
> >   - "desc": "Marzena can mimic any sounds it has heard, including voices. A creature\
> >       \ that hears the sounds can tell they are imitations with a successful DC 12\
> >       \ Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
> >     "name": "Mimicry"
> > "actions":
> >   - "desc": "Marzena makes two attacks: one with its bite and one with its claw or\
> >       \ dagger."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
> >       \ + 1) piercing damage."
> >     "name": "Bite"
> >   - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
> >       \ + 1) slashing damage."
> >     "name": "Claw"
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 3 (1d4 + 1) piercing damage."
> >     "name": "Dagger"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/marzena-belview-cos.webp"
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
*Source: Curse of Strahd p. 150*

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
