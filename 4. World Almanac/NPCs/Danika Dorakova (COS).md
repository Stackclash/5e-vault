---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images:
  - 4. World Almanac/NPCs/img/danika-dorakova.webp
aliases:
  - Danika Dorakova
alignment: Lawful Good
description: >-
  Danika Dorakova is Urwin Martikov’s wife and business partner at the [[Blue
  Water Inn]], and, like the rest of the Martikov family, secretly a wereraven
  of the Keepers of the Feather.
history: >-
  Danika married into the Martikov family and kept her own surname, Dorakova.
  She tends the taproom bar while Urwin cooks, and together they’ve turned the
  inn into both a haven for frightened Vallakians and a covert waypoint for the
  Keepers of the Feather. She has stood by Urwin through his long rift with his
  father, [[Davian Martikov (COS)|Davian]], and is now raising their sons,
  [[Bray Martikov (COS)|Bray]] and [[Brom Martikov (COS)|Brom]], to take up the
  family’s hidden duties in turn.
relationships:
  - target: "[[4. World Almanac/NPCs/Urwin Martikov (COS).md|Urwin Martikov]]"
    type: husband
  - target: "[[4. World Almanac/NPCs/Brom Martikov (COS).md|Brom Martikov]]"
    type: son
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Shops/Blue Water Inn.md|Blue Water Inn]]'
pronounced: dah-NEE-kah dor-ah-KOH-vah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 34
occupation:
  - Innkeeper
  - Barkeep
groups:
  - Keepers of the Feather
religions: []
personality: 'Warm but sharp-eyed, fiercely protective of her family and patrons'
ideal: 'A safe home is worth defending with tooth, claw, and steel.'
bond: >-
  Her husband Urwin, their sons Bray and Brom, and the inn they’ve built
  together into a sanctuary.
flaw: >-
  Her fierce protectiveness can tip into overprotectiveness, especially now that
  her sons are eager to prove themselves.
goals: >-
  Keep the Blue Water Inn safe and thriving, see Bray and Brom safely into their
  roles as Keepers of the Feather, and support the family’s quiet war against
  Strahd’s agents.
likes: 'A busy taproom, her sons’ antics (secretly), the company of visiting Keepers'
dislikes: 'Strahd’s spies, danger to her sons, wasted wine'
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
> > "name": "Danika Dorakova (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human, shapechanger"
> > "alignment": "Lawful Good"
> > "ac": !!int "12"
> > "hp": !!int "31"
> > "hit_dice": "7d8"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "10"
> >   - !!int "15"
> >   - !!int "11"
> >   - !!int "13"
> >   - !!int "15"
> >   - !!int "14"
> > "speed": "30 ft. (fly 50 ft. in raven and hybrid forms)"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+6"
> > "gear":
> >   - "[[/5. Mechanics/Items/Hand Crossbow.md|hand crossbow]]"
> >   - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
> > "senses": "passive Perception 16"
> > "languages": "Common (can't speak in raven form)"
> > "cr": "2"
> > "traits":
> >   - "desc": "Danika can use its action to polymorph into a raven-humanoid hybrid or\
> >       \ into a raven, or back into its human form. Its statistics, other than its\
> >       \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
> >       \ transformed. It reverts to its human form if it dies."
> >     "name": "Shapechanger"
> >   - "desc": "Danika can mimic simple sounds it has heard, such as a person whispering,\
> >       \ a baby crying, or an animal chittering. A creature that hears the sounds can\
> >       \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
> >       \ check."
> >     "name": "Mimicry"
> >   - "desc": "Danika regains 10 hit points at the start of its turn. If Danika takes\
> >       \ damage from a silvered weapon or a spell, this trait doesn't function at the\
> >       \ start of Danika's next turn. Danika dies only if it starts its turn with 0\
> >       \ hit points and doesn't regenerate."
> >     "name": "Regeneration"
> > "actions":
> >   - "desc": "Danika makes two weapon attacks, one of which can be with its hand crossbow."
> >     "name": "Multiattack (Human or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1 piercing\
> >       \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the\
> >       \ target is humanoid, it must succeed on a DC 10 Constitution saving throw or\
> >       \ be cursed with wereraven [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
> >     "name": "Beak (Raven or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
> >       \ + 2) piercing damage."
> >     "name": "Shortsword (Human or Hybrid Form Only)"
> >   - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
> >       \ 5 (1d6 + 2) piercing damage."
> >     "name": "Hand Crossbow (Human or Hybrid Form Only)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/danika-dorakova-cos.webp"
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
*Source: Curse of Strahd p. 98*

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
