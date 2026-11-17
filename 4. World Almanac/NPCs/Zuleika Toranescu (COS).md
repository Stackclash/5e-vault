---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images:
  - 4. World Almanac/NPCs/img/zuleika-toranescu.webp
aliases:
  - Zuleika Toranescu
alignment: Chaotic Evil
description: >-
  A werewolf in shredded clothes who kneels for hours before the pack's crude
  idol of Mother Night, praying in a low, unbroken murmur. Grief has hollowed
  her, but there's a coiled violence beneath the mourning.
history: >-
  Zuleika is Emil Toranescu's mate. When Strahd's dire wolves dragged Emil away
  to Castle Ravenloft, Kiril Stoyanovich forbade her from hunting and set her to
  guard the pack's kidnapped children at the Shrine of Mother Night instead — a
  punishment disguised as duty. Believing Emil dead by Strahd's hand, she prays
  daily to Mother Night for a sign that the goddess might sway Strahd into
  releasing him. She lacks the strength or allies to move against Kiril alone,
  and the rest of the pack — having watched what happened to Emil — won't risk
  Strahd's wrath by helping her.
relationships: []
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: zoo-LAY-kah tor-uh-NES-koo
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 26
occupation:
  - Keeper of the Shrine of Mother Night
  - Guard of the kidnapped children
groups:
  - Children of Mother Night
religions:
  - Mother Night
personality: 'Devout and grief-stricken, with a quiet, patient rage simmering underneath'
ideal: >-
  Mother Night sees every wrong done to the faithful and will grant them justice
  in time.
bond: I would burn all of Barovia to have Emil returned to me.
flaw: >-
  My grief has made me patient to the point of paralysis — I wait for others to
  act rather than act myself.
goals: >-
  See Kiril Stoyanovich dead and Emil returned to her, whatever the cost to
  herself.
likes: 'Mother Night''s shrine, quiet devotion, the memory of Emil'
dislikes: 'Kiril Stoyanovich, cowardice, empty prayers'
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
> > "name": "Zuleika Toranescu (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human, shapechanger"
> > "alignment": "Chaotic Evil"
> > "ac": !!int "11"
> > "ac_class": "12 natural armor in wolf or hybrid form"
> > "hp": !!int "58"
> > "hit_dice": "9d8 + 18"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "15"
> >   - !!int "13"
> >   - !!int "14"
> >   - !!int "10"
> >   - !!int "11"
> >   - !!int "10"
> > "speed": "30 ft. (40 ft. in wolf form)"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+3"
> > "damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
> >   \ aren't silvered"
> > "gear":
> >   - "[[/5. Mechanics/Items/Spear.md|spear]]"
> > "senses": "passive Perception 14"
> > "languages": "Common (can't speak in wolf form)"
> > "cr": "3"
> > "traits":
> >   - "desc": "Zuleika can use its action to polymorph into a wolf-humanoid hybrid or\
> >       \ into a wolf, or back into its true form, which is humanoid. Its statistics,\
> >       \ other than its AC, are the same in each form. Any equipment it is wearing\
> >       \ or carrying isn't transformed. It reverts to its true form if it dies."
> >     "name": "Shapechanger"
> >   - "desc": "Zuleika has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
> >       \ checks that rely on hearing or smell."
> >     "name": "Keen Hearing and Smell"
> > "actions":
> >   - "desc": "Zuleika makes two attacks: two with its spear (humanoid form) or one\
> >       \ with its bite and one with its claws (hybrid form)."
> >     "name": "Multiattack (Humanoid or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8\
> >       \ + 2) piercing damage. If the target is a humanoid, it must succeed on a DC\
> >       \ 12 Constitution saving throw or be cursed with werewolf [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
> >     "name": "Bite (Wolf or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 7\
> >       \ (2d4 + 2) slashing damage."
> >     "name": "Claws (Hybrid Form Only)"
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
> >       \ damage if used with two hands to make a melee attack."
> >     "name": "Spear (Humanoid Form Only)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/zuleika-toranescu-cos.webp"
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
*Source: Curse of Strahd p. 204*

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
