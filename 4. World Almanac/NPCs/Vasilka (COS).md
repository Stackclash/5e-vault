---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/construct
condition: healthy
images: []
aliases:
  - Vasilka
alignment: Neutral
description: >-
  A young woman with alabaster skin and neatly bundled auburn hair, dressed in a
  torn and soiled red gown — beautiful until one draws close enough to see the
  seams where stolen body parts have been carefully stitched together beneath
  her powdered skin.
history: >-
  Vasilka is a flesh golem, painstakingly assembled by [[The Abbot (COS)|the
  Abbot]] of the Abbey of Saint Markovia from body parts plundered from graves
  in Krezk, and crafted to serve as a bride worthy of Strahd von Zarovich. She
  cannot speak, has no memories or will of her own, and obeys the Abbot's every
  command; he is currently teaching her etiquette and dance in preparation for
  presenting her to the vampire.
relationships: []
party_relationships: {}
location: >-
  [[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of
  Saint Markovia]]
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: vah-SIL-kah
race: Flesh Golem (Construct)
gender: female
age: null
occupation:
  - Bride-to-be of Strahd (construct)
groups:
  - Abbey of Saint Markovia
religions: []
personality: 'Silent, obedient, hauntingly vacant — seems lost in her own thoughts'
ideal: 'Obedience to her creator''s commands, absolute and unquestioning.'
bond: 'The Abbot, her creator and only guide in the world.'
flaw: >-
  She has no will of her own; if driven berserk by harm, she cannot stop
  attacking until the Abbot calms her or she is destroyed.
goals: >-
  To become a proper bride worthy of presenting to Strahd, exactly as the Abbot
  has designed her to be.
likes: 'Order, calm, the Abbot''s gentle instruction'
dislikes: >-
  Being harmed or threatened, chaos, fire — flame leaves her disoriented and
  weak
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
> **Group(s)** | `INPUT[inlineList:groups]` |
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
> > "name": "Vasilka (COS)"
> > "size": "Medium"
> > "type": "construct"
> > "alignment": "Neutral"
> > "ac": !!int "9"
> > "hp": !!int "93"
> > "hit_dice": "11d8 + 44"
> > "modifier": !!int "-1"
> > "stats":
> >   - !!int "19"
> >   - !!int "9"
> >   - !!int "18"
> >   - !!int "6"
> >   - !!int "10"
> >   - !!int "5"
> > "speed": "30 ft."
> > "damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
> >   \ attacks that aren't adamantine"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 10"
> > "languages": "understands the languages of its creator but can't speak"
> > "cr": "5"
> > "traits":
> >   - "desc": "Whenever Vasilka starts its turn with 40 hit points or fewer, roll a\
> >       \ d6. On a 6, Vasilka goes berserk. On each of its turns while berserk, Vasilka\
> >       \ attacks the nearest creature it can see. If no creature is near enough to\
> >       \ move to and attack, Vasilka attacks an object, with preference for an object\
> >       \ smaller than itself. Once Vasilka goes berserk, it continues to do so until\
> >       \ it is destroyed or regains all its hit points.\n\nVasilka's creator, if within\
> >       \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
> >       \ Vasilka must be able to hear its creator, who must take an action to make\
> >       \ a DC 15 Charisma ([[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]) check.\
> >       \ If the check succeeds, Vasilka ceases being berserk. If it takes damage while\
> >       \ still at 40 hit points or fewer, Vasilka might go berserk again."
> >     "name": "Berserk"
> >   - "desc": "If Vasilka takes fire damage, it has disadvantage on attack rolls and\
> >       \ ability checks until the end of its next turn."
> >     "name": "Aversion of Fire"
> >   - "desc": "Vasilka is immune to any spell or effect that would alter its form."
> >     "name": "Immutable Form"
> >   - "desc": "Whenever Vasilka is subjected to lightning damage, it takes no damage\
> >       \ and instead regains a number of hit points equal to the lightning damage dealt."
> >     "name": "Lightning Absorption"
> >   - "desc": "Vasilka has advantage on saving throws against spells and other magical\
> >       \ effects."
> >     "name": "Magic Resistance"
> >   - "desc": "Vasilka's weapon attacks are magical."
> >     "name": "Magic Weapons"
> > "actions":
> >   - "desc": "Vasilka makes two slam attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
> >       \ (2d8 + 4) bludgeoning damage."
> >     "name": "Slam"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/vasilka-cos.webp"
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
*Source: Curse of Strahd p. 151*

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
