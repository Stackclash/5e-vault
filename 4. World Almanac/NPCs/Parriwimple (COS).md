---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - Parriwimple
alignment: Lawful Good
description: >-
  Parriwimple — his real name is Parpol Cantemir, though no one in the village
  calls him that — is Bildrath Cantemir's nephew and the stock-boy at Bildrath's
  Mercantile in the village of Barovia. Built like a gladiator and simple of
  mind, he's summoned whenever his uncle needs muscle to handle difficult
  customers.
history: >-
  Parriwimple has worked his uncle's shop for as long as anyone in the village
  can remember, hauling stock and doing whatever labor Bildrath can't or won't
  do himself. His imposing frame and quiet devotion make him an effective
  deterrent against troublemakers, even though his mind is better suited to
  simple, repetitive tasks than to shrewd bargaining. He rarely leaves
  Bildrath's side and won't chase down anyone who leaves the shop so long as his
  uncle has nothing further to say about it.
relationships: []
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: PAIR-ee-WIM-pull
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 26
occupation:
  - Stock Boy
  - Shop Muscle
personality: >-
  Good-natured, simple-minded, fiercely loyal to his uncle; slow to anger but
  frightening once provoked
ideal: Family looks out for family.
bond: >-
  His uncle Bildrath is the only family he has left; he'd do anything to protect
  the man's business.
flaw: >-
  His limited wit makes him easy to manipulate or trick, especially with
  kindness he isn't used to receiving.
goals: >-
  To keep Bildrath's Mercantile safe from trouble, and to be seen as more than
  "just muscle."
likes: 'His uncle''s approval, simple tasks he can master, being useful'
dislikes: >-
  Being talked down to, strangers who threaten Bildrath, complicated
  instructions
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
> > "name": "Parriwimple (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Lawful Good"
> > "ac": !!int "14"
> > "ac_class": "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
> > "hp": !!int "112"
> > "hit_dice": "15d8 + 45"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "18"
> >   - !!int "15"
> >   - !!int "16"
> >   - !!int "6"
> >   - !!int "12"
> >   - !!int "15"
> > "speed": "30 ft."
> > "saves":
> >   - "strength": !!int "7"
> >   - "dexterity": !!int "5"
> >   - "constitution": !!int "6"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
> >     "desc": "+10"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
> >     "desc": "+5"
> > "gear":
> >   - "[[/5. Mechanics/Items/Spear.md|spear]]"
> > "senses": "passive Perception 11"
> > "languages": "any one language (usually Common)"
> > "cr": "5"
> > "traits":
> >   - "desc": "Parriwimple has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
> >     "name": "Brave"
> >   - "desc": "A melee weapon deals one extra die of its damage when Parriwimple hits\
> >       \ with it (included in the attack)."
> >     "name": "Brute"
> > "actions":
> >   - "desc": "Parriwimple makes three melee attacks or two ranged attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. and range 20/60\
> >       \ ft., one target. *Hit:* 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
> >       \ damage if used with two hands to make a melee attack."
> >     "name": "Spear"
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one creature. *Hit:* 9\
> >       \ (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature,\
> >       \ it must succeed on a DC 15 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
> >     "name": "Shield Bash"
> > "reactions":
> >   - "desc": "Parriwimple adds 3 to its AC against one melee attack that would hit\
> >       \ it. To do so, Parriwimple must see the attacker and be wielding a melee weapon."
> >     "name": "Parry"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/parriwimple-cos.webp"
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
*Source: Curse of Strahd p. 43*

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
