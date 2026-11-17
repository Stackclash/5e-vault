---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/baron-vargas-vallakovich.webp
aliases:
  - Baron Vargas Vallakovich
alignment: Neutral Evil
description: >-
  A paranoid, image-obsessed nobleman who believes enough manufactured cheer can
  shield Vallaki from Strahd's shadow. He wears his breastplate and rapier even
  at rest in his own library, flanked always by his two mastiffs and his
  monstrous enforcer, [[Izek Strazni (COS)|Izek Strazni]].
history: >-
  The Vallakovich line traces itself to Boris Vallakovich, the ancestor who
  founded Vallaki not long after Strahd's armies conquered the valley; the
  family has long believed itself of superior blood to the von Zarovich line,
  though no one living bears much resemblance to the founder's statue in the
  town square. Vargas has convinced himself that if he can make everyone in
  Vallaki happy, the town will somehow slip free of Strahd's grasp, and he
  stages one hollow festival after another - the Wolf's Head Jamboree, then the
  Festival of the Blazing Sun - to prove it. Those who mock his "All will be
  well!" catchphrase or question his authority are declared spies of the devil
  Strahd and thrown in the stocks, or dragged to his mansion so he can
  personally "purge" them of their evil. Two of his household staff, his butler
  and his wife's lady-in-waiting, vanished without a trace in the past week, and
  though he has charged [[Izek Strazni (COS)|Izek Strazni]] with finding them,
  no answers have come.
relationships: [ { target: "[[4. World Almanac/Factions/House Vallakovich.md|House Vallakovich]]", type: member } ]
party_relationships:
  Midnight Covenant: Friendly
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: VAR-gas val-lah-KO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 43
occupation:
  - Burgomaster of Vallaki
religions:
  - The Morninglord
personality: 'Authoritarian, paranoid, obsessed with maintaining a façade of happiness'
ideal: All will be well if we just keep pretending it is.
bond: >-
  His family's legacy of ruling Vallaki, his desperate need to keep the town
  safe from Strahd's influence
flaw: >-
  His denial of Vallaki's real problems and his tyrannical methods of enforcing
  happiness
goals: ' To keep Vallaki free from Strahd''s influence, to maintain order at all costs'
likes: 'Obedience, festivals, public displays of happiness'
dislikes: 'Dissent, failure, anything that threatens his control or Vallaki''s ''happiness'''
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
> > "name": "Baron Vargas Vallakovich (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Neutral Evil"
> > "ac": !!int "15"
> > "ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
> > "hp": !!int "9"
> > "hit_dice": "2d8"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "14"
> >   - !!int "16"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
> >     "desc": "+5"
> > "gear":
> >   - "[[/5. Mechanics/Items/Rapier.md|rapier]]"
> > "senses": "passive Perception 12"
> > "languages": "any two languages"
> > "cr": "1/8"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8\
> >       \ + 1) piercing damage."
> >     "name": "Rapier"
> > "reactions":
> >   - "desc": "Vargas adds 2 to its AC against one melee attack that would hit it. To\
> >       \ do so, Vargas must see the attacker and be wielding a melee weapon."
> >     "name": "Parry"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/baron-vargas-vallakovich-cos.webp"
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
