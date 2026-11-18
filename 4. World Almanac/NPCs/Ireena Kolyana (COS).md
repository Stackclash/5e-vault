---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/ireena-kolyana.webp
aliases:
  - Ireena Kolyana
alignment: Lawful Good
description: >-
  Ireena Kolyana is a striking young noblewoman with auburn hair, the adopted
  daughter of the late burgomaster Kolyan Indirovich. She carries herself with
  quiet, strong-willed dignity despite the terror Strahd has already visited on
  her twice.
relationships:
  - target: "[[4. World Almanac/NPCs/Ismark Kolyanovich (COS).md|Ismark Kolyanovich]]"
    type: brother
    note: adoptive
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S3 The Look of Desperation.md|S3 The Look of Desperation]]"
  - target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]"
    type: enemy
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S3 The Look of Desperation.md|S3 The Look of Desperation]]"
party_relationships:
  Midnight Covenant: Friendly
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
gist: "Ismark's adopted sister and Izek's lost sister, carrying Tatyana's soul; Strahd hunted her as his bride."
summary: "Ismark's sister, whom Strahd wants and has bitten twice. The party escorted her from the Village of Barovia to St. Andral's Church in Vallaki."
revealed:
  Midnight Covenant: true
reveal: {}
facts:
  - text: Strahd wants Ireena and has bitten her twice.
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S3 The Look of Desperation.md|S3 The Look of Desperation]]"
  - text: Ireena's adoptive father had just died, and she wanted him buried before she left.
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S3 The Look of Desperation.md|S3 The Look of Desperation]]"
pronounced: ee-REE-nah kohl-YAH-nah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: null
occupation:
  - Noblewoman
personality: >-
  Outwardly mild and gentle, but possessed of a strong will and quiet courage;
  insists on helping however she can rather than being merely protected
ideal: I won't be a passive victim in whatever fate the vampire has planned for me.
bond: >-
  Her father Kolyan, who took in a memory-less stranger and loved her as his own
  daughter, and her brother Ismark, who has never left her side
flaw: >-
  She trusts too easily those who offer her protection, even when she knows
  little about them.
goals: >-
  To see her father properly buried, then find someplace beyond Strahd's reach —
  while helping however she can against the vampire who hunts her
likes: >-
  Her father's memory, quiet moments of normalcy, those who treat her as a
  person and not a prize
dislikes: >-
  Being coddled or hidden away, the villagers' fearful avoidance of her, the fog
  that never seems to lift
history: >-
  Ireena has no memory of her life before Kolyan Indirovich found her, alone and
  lost, at the edge of the Svalich Woods near the Pillarstone of Ravenloft. He
  took her in and raised her as his own, and she grew up alongside his son
  [[Ismark Kolyanovich (COS)|Ismark]], never knowing her true parentage.
  Unbeknownst to nearly everyone in Barovia — herself included — Ireena carries
  the same soul as Tatyana, the woman Strahd loved and lost centuries ago, and
  is in every way that matters to him her reincarnation. Strahd visited the
  Kolyanovich mansion nightly for weeks, biting her twice, and means to make her
  his bride and turn her into a vampire. The nightly assaults of wolves and
  worse besieging the mansion broke her adoptive father's heart, and he died
  three days before the party's arrival — at which point the attacks curiously
  stopped. Ireena refuses to leave Barovia until her father is given a proper
  burial, and she knows she cannot remain safe within Castle Ravenloft's shadow
  much longer.
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
> > "name": "Ireena Kolyana (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Lawful Good"
> > "ac": !!int "15"
> > "ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
> > "hp": !!int "14"
> > "hit_dice": "2d8"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "14"
> >   - !!int "16"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
> >     "desc": "+5"
> > "gear":
> >   - "[[/5. Mechanics/Items/Rapier.md|rapier]]"
> > "senses": "passive Perception 12"
> > "languages": "any two languages"
> > "cr": "1/8"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8\
> >       \ + 1) piercing damage."
> >     "name": "Rapier"
> > "reactions":
> >   - "desc": "Ireena adds 2 to its AC against one melee attack that would hit it. To\
> >       \ do so, Ireena must see the attacker and be wielding a melee weapon."
> >     "name": "Parry"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/ireena-kolyana-cos.webp"
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
> > *Source: Curse of Strahd p. 44*
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
