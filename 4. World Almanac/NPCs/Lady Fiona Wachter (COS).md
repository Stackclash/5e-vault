---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/060-cos05-11.webp
aliases:
  - Lady Fiona Wachter
alignment: Lawful Evil
description: >-
  A composed, aristocratic widow who makes no secret of her family's ancient
  loyalty to House von Zarovich, Fiona Wachter is secretly the founder and
  spiritual leader of a growing devil-worshipping cult in Vallaki. She schemes
  patiently, and ruthlessly, to unseat Baron Vallakovich and claim the
  burgomaster's chair for herself.
history: >-
  The Wachters were once an influential noble line in Barovia, and Fiona still
  occupies the family's crumbling mansion, Wachterhaus, with her two adult sons,
  [[Nikolai Wachter (COS)|Nikolai]] and Karl, and her daughter, [[Stella Wachter
  (COS)|Stella]]. Her husband, also named Nikolai, died of sickness nearly three
  years ago; Fiona has never let him go, and casts gentle repose on his corpse
  to keep it from decaying beside her. She once conspired to marry Stella to the
  burgomaster's son, [[Victor Vallakovich (COS)|Victor Vallakovich]], hoping to
  gain a foothold inside the baron's mansion, but Victor's cruelty toward Stella
  drove her mad, and Fiona was forced to lock her own daughter away. Since then,
  Fiona's ambitions have turned darker: she has founded a devil-worshipping
  cult, written a manifesto titled *The Devil We Know*, and now serves as its
  hidden spiritual leader, using a bound imp and false rituals to win the
  loyalty of Vallaki's most fanatical malcontents. She employs a spy, Ernst
  Larnak, to keep her informed of everything that happens in town, though he
  knows enough of her secrets to blackmail her should their arrangement ever
  sour.
relationships: [ { target: "[[4. World Almanac/Factions/House Wachter.md|House Wachter]]", type: member }, { target: "[[4. World Almanac/Factions/House von Zarovich.md|House von Zarovich]]", type: member, note: loyalist } ]
party_relationships:
  Midnight Covenant: Enemy
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: FEE-oh-nuh VAHK-ter
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 52
occupation:
  - Governess of Wachterhaus
  - Hidden leader of Vallaki's devil-worshipping cult
personality: 'Cold, composed, and utterly ruthless beneath an aristocratic veneer'
ideal: >-
  Strahd is no tyrant, only a negligent landlord - true power lies in serving
  him well.
bond: >-
  The corpse of her beloved late husband, Nikolai, which she keeps gentle
  reposed beside her, and the manifesto she has written in his memory
flaw: >-
  Her hunger to rule Vallaki outweighs any real concern for her children's
  happiness
goals: >-
  To topple Baron Vallakovich, seize Vallaki's burgomastership, and rule the
  town in Strahd's name
likes: 'Order, devotion, her cult''s growth, the memory of her husband'
dislikes: 'Baron Vallakovich''s buffoonery, weakness, disobedience, enemies of Strahd'
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
> > "name": "Lady Fiona Wachter (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Lawful Evil"
> > "ac": !!int "10"
> > "hp": !!int "27"
> > "hit_dice": "5d8 + 5"
> > "modifier": !!int "0"
> > "stats":
> >   - !!int "10"
> >   - !!int "10"
> >   - !!int "12"
> >   - !!int "13"
> >   - !!int "16"
> >   - !!int "13"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
> >     "desc": "+3"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
> >     "desc": "+5"
> > "gear":
> >   - "[[/5. Mechanics/Items/Mace.md|mace]]"
> > "senses": "passive Perception 13"
> > "languages": "any two languages"
> > "cr": "2"
> > "traits":
> >   - "desc": "Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom\
> >       \ (spell save DC 13, +5 to hit with spell attacks). Fiona has the following\
> >       \ cleric spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Light.md|light]],\
> >       \ [[/5. Mechanics/Spells/Mending.md|mending]], [[/5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
> >       \n**1st level (4 slots):** [[/5. Mechanics/Spells/Command.md|command]], [[/5. Mechanics/Spells/Purify Food And Drink.md|purify\
> >       \ food and drink]], [[/5. Mechanics/Spells/Sanctuary.md|sanctuary]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Augury.md|augury]], [[/5. Mechanics/Spells/Gentle Repose.md|gentle repose]],\
> >       \ [[/5. Mechanics/Spells/Hold Person.md|hold person]]\n\n**3rd level (2 slots):**\
> >       \ [[/5. Mechanics/Spells/Animate Dead.md|animate dead]], [[/5. Mechanics/Spells/Create Food And Water.md|create food and water]]"
> >     "name": "Spellcasting"
> >   - "desc": "As a bonus action, Fiona can expend a spell slot to cause its melee weapon\
> >       \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on\
> >       \ a hit. This benefit lasts until the end of the turn. If Fiona expends a spell\
> >       \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
> >       \ above 1st."
> >     "name": "Divine Eminence"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 3 (1d6)\
> >       \ bludgeoning damage."
> >     "name": "Mace"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/lady-fiona-wachter-cos.webp"
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > Religion (from the old religions field): Devil worship (a cult of her own founding)
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
*Source: Curse of Strahd p. 110*

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
