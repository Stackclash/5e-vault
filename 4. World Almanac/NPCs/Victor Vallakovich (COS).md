---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/005-cos02-02.webp
aliases:
  - Victor Vallakovich
alignment: Neutral Evil
description: >-
  A thin, awkward young man with a premature streak of gray in his dark hair,
  Victor has abandoned his family in favor of a spellbook he found in his
  father's library. He wants nothing more than to vanish through a doorway of
  his own making and never see Barovia again.
history: >-
  Years ago Victor found an old spellbook hidden in the mansion's library and
  began teaching himself magic in secret, eventually retreating to the mansion's
  attic to avoid his mother's fussing and his father's disapproving glares. His
  mother's rival, [[Lady Fiona Wachter (COS)|Lady Fiona Wachter]], once tried to
  marry her daughter [[Stella Wachter (COS)|Stella Wachter]] to him to gain a
  foothold in the burgomaster's household, but Victor showed no interest in
  Stella and spoke to her so cruelly that she lost her mind. He has since thrown
  himself entirely into deciphering his spellbook's most advanced text: an
  incomplete teleportation circle spell. He has already inscribed a flawed
  version of the circle on his workroom floor and tested it twice on servants he
  compelled with suggestion - both were torn apart and vanished in flashes of
  purple light. Undeterred, Victor keeps refining the circle, certain that
  escape from Barovia is only one working spell away.
relationships: [ { target: "[[4. World Almanac/Factions/House Vallakovich.md|House Vallakovich]]", type: member } ]
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: VIK-tor val-lah-KO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 25
occupation:
  - Self-taught wizard
religions: []
personality: 'Awkward, reclusive, morbidly curious, alternates between sulking and cruelty'
ideal: >-
  There has to be a way out of this cursed valley, and he will find it, whatever
  the cost.
bond: >-
  His flawed, half-built teleportation circle - his only hope of escaping
  Barovia forever
flaw: >-
  His reckless magical experiments have already gotten two servants killed, and
  it hasn't given him a moment's pause
goals: >-
  To perfect his teleportation circle and escape Barovia forever, abandoning his
  parents to their fate
likes: 'Solitude, old spellbooks, dissecting the mechanics of magic, being left alone'
dislikes: >-
  His mother's relentless cheer, his father's disapproval, Stella Wachter, being
  disturbed while working
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
> > "name": "Victor Vallakovich (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Neutral Evil"
> > "ac": !!int "12"
> > "ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
> > "hp": !!int "40"
> > "hit_dice": "9d8"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "9"
> >   - !!int "14"
> >   - !!int "11"
> >   - !!int "17"
> >   - !!int "12"
> >   - !!int "11"
> > "speed": "30 ft."
> > "saves":
> >   - "intelligence": !!int "6"
> >   - "wisdom": !!int "4"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
> >     "desc": "+6"
> > "gear":
> >   - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
> > "senses": "passive Perception 11"
> > "languages": "any four languages"
> > "cr": "6"
> > "traits":
> >   - "desc": "Victor is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
> >       \ (spell save DC 14, +6 to hit with spell attacks). Victor has the following\
> >       \ wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
> >       \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
> >       \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
> >       \ (4 slots):** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
> >       \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
> >       \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
> >       \ [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Fly.md|fly]]\n\
> >       \n**4th level (3 slots):** [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
> >       \ [[/5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n**5th level (1 slots):** [[/5. Mechanics/Spells/Cone Of Cold.md|cone\
> >       \ of cold]]"
> >     "name": "Spellcasting"
> > "actions":
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
> >     "name": "Dagger"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/victor-vallakovich-cos.webp"
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
*Source: Curse of Strahd p. 105*

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
