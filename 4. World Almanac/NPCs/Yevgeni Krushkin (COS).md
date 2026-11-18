---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/053-cos05-06.webp
aliases:
  - Yevgeni Krushkin
alignment: Neutral
description: >-
  A grim, weather-beaten hunter with haunted eyes, Yevgeni wears a wolfskin
  cloak stitched with a new pelt swatch for every kill. He rarely speaks first,
  and when he does, it's usually just an echo of whatever his partner Szoldar
  already said.
history: >-
  Yevgeni Krushkin is one of Vallaki's two resident wolf hunters, working the
  Svalich Woods alongside his grim partner [[Szoldar Szoldarovich (COS)|Szoldar
  Szoldarovich]]. The pair kill wolves and sell the meat for a living —
  dangerous, bloody work that has left both men haunted. They frequent the
  [[Blue Water Inn]] between hunts and, for the right price, will guide
  outsiders through the valley by daylight; neither will venture out after dark
  except for an exorbitant fee, knowing too well what truly walks these woods at
  night.
relationships: [ { target: "[[4. World Almanac/Factions/Vallaki Wolf Hunters.md|Vallaki Wolf Hunters]]", type: member }, { target: "[[5. Mechanics/Deities/Forgotten Realms Lathander.md|The Morninglord]]", type: worships } ]
party_relationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
gist: "Vallaki wolf hunter and wilderness guide, Szoldar Szoldarovich's partner; met S12."
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: yev-GEH-nee KROOSH-kin
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: null
occupation:
  - Wolf hunter
  - Wilderness guide
personality: 'Grim, taciturn, quietly haunted'
ideal: >-
  Barovia doesn't forgive the unprepared — better to face the wolves you can see
  than the things that watch from the fog.
bond: >-
  His hunting partner, [[Szoldar Szoldarovich (COS)|Szoldar Szoldarovich]], is
  the only one who understands what these woods have cost him.
flaw: He drowns what he's seen in the Blue Water Inn's cheapest wine.
goals: 'To keep his family fed and Vallaki''s wolves thinned, one pelt at a time'
likes: 'A warm fire, the company of Szoldar, coin for an honest day''s guiding'
dislikes: >-
  Traveling the woods after dark, empty tankards, talk of what really killed the
  game he finds gutted in the snow
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
> > "name": "Yevgeni Krushkin (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
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
> >   - "desc": "Yevgeni has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
> >       \ checks that rely on hearing or sight."
> >     "name": "Keen Hearing and Sight"
> > "actions":
> >   - "desc": "Yevgeni makes two melee attacks or two ranged attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
> >       \ + 2) piercing damage."
> >     "name": "Shortsword"
> >   - "desc": "*Ranged Weapon Attack:* +4 to hit, ranged 150/600 ft., one target. *Hit:*\
> >       \ 6 (1d8 + 2) piercing damage."
> >     "name": "Longbow"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/yevgeni-krushkin-cos.webp"
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
> > *Source: Curse of Strahd p. 100*
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
