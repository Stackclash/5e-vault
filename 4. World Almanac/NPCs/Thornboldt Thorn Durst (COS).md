---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/small
  - monster/type/undead
condition: healthy
images:
  - 4. World Almanac/NPCs/img/thornboldt-thorn-durst.webp
aliases:
  - Thornboldt "Thorn" Durst
alignment: Lawful Good
description: >-
  Thorn appears just as he did in life: a small, wide-eyed seven-year-old boy
  clutching a stuffed doll, prone to weeping and quick to hide behind his older
  sister. As a ghost he retains every bit of that fragility — he fights only
  when cornered, and mostly just wants to be left with his sister and his toy.
history: >-
  Thorn was the younger child of Gustav and Elisabeth Durst, born into a wealthy
  Barovian family whose secret cult conducted debauched rituals beneath their
  townhouse in the village of Barovia. As their parents descended into madness,
  Thorn and his sister Rose were told frightening stories of a "monster" kept in
  the basement — a lie meant to keep the children from the family's dungeon of
  horrors. Eventually Gustav and Elisabeth locked the children in the attic and
  simply forgot about them; Thorn and Rose starved to death there together,
  never understanding what their family had truly done. His spirit now lingers
  in Death House alongside Rose's: first as an innocent illusion the haunted
  house conjures to lure travelers inside, and later — once his true, skeletal
  remains are found — as a frightened but still childlike ghost who only wants
  to keep his sister close.
relationships: [ { target: "[[4. World Almanac/Factions/Durst Family.md|Durst Family]]", type: member } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: THORN-bohlt DURST (called "Thorn")
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 7
occupation: []
religions: []
personality: >-
  Timid and easily frightened, clinging to his sister Rose and his stuffed doll
  for comfort; as a ghost he weeps and panics rather than fights, and possessing
  a host leaves them jumpy and tearful
ideal: 'As long as Rose is with me, I don''t have to be brave by myself.'
bond: >-
  My stuffed doll and my sister Rose are the only things I have left to hold on
  to.
flaw: >-
  I'm scared of everything, including my own shadow, and weep with despair when
  things don't go my way.
goals: >-
  To stay close to Rose and never be left alone again — though what would truly
  free him, unknowingly, is having his bones laid to rest in the Durst family
  crypt beneath Death House.
likes: >-
  His sister Rose, his stuffed doll, being comforted and reassured, familiar
  things left undisturbed
dislikes: >-
  The "monster" he believes lives in the basement, being alone or forgotten,
  loud noises and sudden threats, strangers who frighten him
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
> > "name": "Thornboldt \"Thorn\" Durst (CoS)"
> > "size": "Small"
> > "type": "undead"
> > "alignment": "Lawful Good"
> > "ac": !!int "11"
> > "hp": !!int "35"
> > "hit_dice": "10d6"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "7"
> >   - !!int "13"
> >   - !!int "10"
> >   - !!int "10"
> >   - !!int "12"
> >   - !!int "17"
> > "speed": "0 ft., fly 40 ft. (hover)"
> > "damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
> >   \ from nonmagical attacks"
> > "damage_immunities": "cold, necrotic, poison"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 11"
> > "languages": "Common"
> > "cr": "3"
> > "traits":
> >   - "desc": "Thorn can see 60 feet into the Ethereal Plane when it is on the Material\
> >       \ Plane, and vice versa."
> >     "name": "Ethereal Sight"
> >   - "desc": "Thorn can move through other creatures and objects as if they were difficult\
> >       \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
> >     "name": "Incorporeal Movement"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17\
> >       \ (4d6 + 3) necrotic damage."
> >     "name": "Withering Touch"
> >   - "desc": "Thorn enters the Ethereal Plane from the Material Plane, or vice versa.\
> >       \ It is visible on the Material Plane while it is in the Border Ethereal, and\
> >       \ vice versa, yet it can't affect or be affected by anything on the other plane."
> >     "name": "Etherealness"
> >   - "desc": "One humanoid that Thorn can see within 5 feet of it must succeed on a\
> >       \ DC 13 Charisma saving throw or be possessed by Thorn; Thorn then disappears,\
> >       \ and the target is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
> >       \ and loses control of its body. Thorn now controls the body but doesn't deprive\
> >       \ the target of awareness. Thorn can't be targeted by any attack, spell, or\
> >       \ other effect, except ones that turn undead, and it retains its alignment,\
> >       \ Intelligence, Wisdom, Charisma, and immunity to being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
> >       \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]. It otherwise\
> >       \ uses the possessed target's statistics, but doesn't gain access to the target's\
> >       \ knowledge, class features, or proficiencies.\n\nThe possession lasts until\
> >       \ the body drops to 0 hit points, Thorn ends it as a bonus action, or Thorn\
> >       \ is turned or forced out by an effect like the [[/5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]]\
> >       \ spell. When the possession ends, Thorn reappears in an unoccupied space within\
> >       \ 5 feet of the body. The target is immune to this ghost's Possession for 24\
> >       \ hours after succeeding on the saving throw or after the possession ends."
> >     "name": "Possession (Recharge 6)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/thornboldt-thorn-durst-cos.webp"
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
*Source: Curse of Strahd p. 217*

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
