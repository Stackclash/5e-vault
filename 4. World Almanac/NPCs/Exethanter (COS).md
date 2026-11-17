---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/undead
condition: healthy
images: []
aliases:
  - Exethanter
alignment: Chaotic Neutral
description: >-
  A decrepit, robed skeleton with red pinpoints of light burning in its eye
  sockets — once a proud archmage, now a lich whose mind and body are slowly
  falling apart.
history: >-
  An evil archmage who arrived at the long-abandoned Amber Temple generations
  after its original defenders had died, Exethanter breached its wards,
  bargained with a trapped vestige, and learned the secret of becoming a lich.
  He turned the skulls of the temple's fallen defenders into flameskulls and
  appointed himself the temple's new keeper — not to hoard its forbidden
  secrets, but to share them with anyone who came seeking power, Strahd von
  Zarovich included.
relationships: []
party_relationships:
  Midnight Covenant: Acquaintance
location: '[[The Amber Temple]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: ex-ETH-an-ter
race: '[[5. Mechanics/Bestiary/Undead/Lich|Lich]]'
gender: male
age: null
occupation:
  - Self-appointed keeper of the Amber Temple
  - Former archmage
personality: >-
  Detached and scholarly, but his mind is fraying — he forgets his own name and
  struggles to complete his own thoughts.
ideal: >-
  Knowledge and power must be shared, not hoarded — even evil secrets deserve an
  audience.
bond: >-
  Bound eternally to the phylactery hidden in the temple's depths, and to the
  temple itself, which he has guarded since his transformation.
flaw: >-
  His memory is failing — he has forgotten his own name, his spells, and much of
  what he once knew.
goals: >-
  To continue watching over the Amber Temple and sharing its secrets, though he
  no longer fully remembers why.
likes: 'Visitors who ask questions, forbidden lore, being addressed with respect'
dislikes: >-
  Being forgotten himself, having his phylactery threatened, Strahd's growing
  indifference toward him
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
> > "name": "Exethanter (COS)"
> > "size": "Medium"
> > "type": "undead"
> > "alignment": "Any Evil alignment"
> > "ac": !!int "17"
> > "ac_class": "natural armor"
> > "hp": !!int "99"
> > "hit_dice": "18d8 + 54"
> > "modifier": !!int "3"
> > "stats":
> >   - !!int "11"
> >   - !!int "16"
> >   - !!int "16"
> >   - !!int "20"
> >   - !!int "14"
> >   - !!int "16"
> > "speed": "30 ft."
> > "saves":
> >   - "constitution": !!int "10"
> >   - "intelligence": !!int "12"
> >   - "wisdom": !!int "9"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+19"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
> >     "desc": "+12"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+9"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+9"
> > "damage_resistances": "cold, lightning, necrotic"
> > "damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Truesight|truesight]] 120 ft., passive Perception\
> >   \ 19"
> > "languages": "Common plus up to five other languages"
> > "cr": "10"
> > "traits":
> >   - "desc": "Exethanter is an 18th-level spellcaster. Its spellcasting ability is\
> >       \ Intelligence (spell save DC 20, +12 to hit with spell attacks). Exethanter\
> >       \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Mage Hand.md|mage\
> >       \ hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
> >       \ [[/5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]"
> >     "name": "Spellcasting"
> >   - "desc": "If Exethanter fails a saving throw, it can choose to succeed instead."
> >     "name": "Legendary Resistance (3/Day)"
> >   - "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
> >       \ regaining all its hit points and becoming active again. The new body appears\
> >       \ within 5 feet of the phylactery."
> >     "name": "Rejuvenation"
> >   - "desc": "Exethanter has advantage on saving throws against any effect that turns\
> >       \ undead."
> >     "name": "Turn Resistance"
> > "actions":
> >   - "desc": "*Melee Spell Attack:* +12 to hit, reach 5 ft., one creature. *Hit:* 10\
> >       \ (3d6) cold damage. The target must succeed on a DC 18 Constitution saving\
> >       \ throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] for 1 minute.\
> >       \ The target can repeat the saving throw at the end of each of its turns, ending\
> >       \ the effect on itself on a success."
> >     "name": "Paralyzing Touch"
> > "legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
> >   \ turn, Exethanter can expend a use to take one of the following actions. Exethanter\
> >   \ regains all expended uses at the start of each of their turns."
> > "legendary_actions":
> >   - "desc": "Exethanter casts a cantrip."
> >     "name": "Cantrip"
> >   - "desc": "Exethanter uses its Paralyzing Touch."
> >     "name": "Paralyzing Touch (Costs 2 Actions)"
> >   - "desc": "Exethanter fixes its gaze on one creature it can see within 10 feet of\
> >       \ it. The target must succeed on a DC 18 Wisdom saving throw against this magic\
> >       \ or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] for 1 minute.\
> >       \ The [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] target can repeat\
> >       \ the saving throw at the end of each of its turns, ending the effect on itself\
> >       \ on a success. If a target's saving throw is successful or the effect ends\
> >       \ for it, the target is immune to Exethanter's gaze for the next 24 hours."
> >     "name": "Frightening Gaze (Costs 2 Actions)"
> >   - "desc": "Each non-undead creature within 20 feet of Exethanter must make a DC\
> >       \ 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic\
> >       \ damage on a failed save, or half as much damage on a successful one."
> >     "name": "Disrupt Life (Costs 3 Actions)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/exethanter-cos.webp"
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > Group (from the old groups field): The Amber Temple's original order of wizards (last survivor)
> >
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
*Source: Curse of Strahd p. 189*

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
