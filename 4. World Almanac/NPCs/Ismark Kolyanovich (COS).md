---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/ismark-kolyanovich.webp
aliases:
  - Ismark Kolyanovich
alignment: Lawful Good
description: >-
  Ismark Kolyanovich is a young, sharp-eyed swordsman known throughout Barovia
  as "Ismark the Lesser," having spent most of his life in the shadow of his
  father, the burgomaster. He carries himself with practiced ease in the tavern,
  but a fierce protectiveness surfaces the moment his sister or Strahd come up
  in conversation.
relationships: [ { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: enemy } ]
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
gist: "Burgomaster of the Village of Barovia and Ireena's adoptive brother, long sworn against Strahd."
summary: "Ireena's brother in the Village of Barovia, who asked the party to escort her to Vallaki."
revealed:
  Midnight Covenant: true
reveal: {}
facts: []
pronounced: IS-mark KOHL-yan-o-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 25
occupation:
  - Burgomaster
personality: 'Protective, responsible, deeply concerned for his sister''s safety'
ideal: 'Duty above all, especially to family and those under my care.'
bond: His late father's legacy and his sister's safety
flaw: Can be overly cautious and sometimes distrustful of strangers
goals: 'To secure a safe place for Ireena, away from Strahd’s reach'
likes: 'Quiet moments of peace, strong leadership, loyalty'
dislikes: 'Threats to his family, Strahd''s minions, chaos'
history: >-
  The son of Kolyan Indirovich, the village's burgomaster, Ismark has spent
  years training with sword and crossbow, nursing a private ambition to one day
  confront and kill Strahd himself. He is far less dour than most Barovians,
  willing to buy strangers a drink and speak plainly about the horrors stalking
  his home — at least on the subject of his adopted sister [[Ireena Kolyana
  (COS)|Ireena]] and the vampire who covets her. With his father's death, Ismark
  has taken on the burden of protecting Ireena himself, and he means to see her
  escorted to safety in Vallaki, even though moving her outside the mansion's
  wards leaves her exposed to Strahd. If offered aid, he does everything in his
  power to see his sister safely away — and, if the chance arises, to stand
  against Strahd at the party's side.
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
> > "name": "Ismark Kolyanovich (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Lawful Good"
> > "ac": !!int "17"
> > "ac_class": "[[/5. Mechanics/Items/Splint Armor.md|splint armor]]"
> > "hp": !!int "58"
> > "hit_dice": "9d8 + 18"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "16"
> >   - !!int "13"
> >   - !!int "14"
> >   - !!int "10"
> >   - !!int "11"
> >   - !!int "10"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+2"
> > "gear":
> >   - "[[/5. Mechanics/Items/Heavy Crossbow.md|heavy crossbow]]"
> >   - "[[/5. Mechanics/Items/Longsword.md|longsword]]"
> >   - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
> > "senses": "passive Perception 12"
> > "languages": "any one language (usually Common)"
> > "cr": "3"
> > "actions":
> >   - "desc": "Ismark makes two longsword attacks. If it has a shortsword drawn, it\
> >       \ can also make a shortsword attack."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8\
> >       \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
> >     "name": "Longsword"
> >   - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
> >       \ + 3) piercing damage."
> >     "name": "Shortsword"
> >   - "desc": "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:*\
> >       \ 6 (1d10 + 1) piercing damage."
> >     "name": "Heavy Crossbow"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/ismark-kolyanovich-cos.webp"
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
> > *Source: Curse of Strahd p. 43*
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
