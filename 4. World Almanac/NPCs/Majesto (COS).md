---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1
  - monster/size/tiny
  - monster/type/fiend/devil
condition: healthy
images:
  - 4. World Almanac/NPCs/img/060-cos05-11.webp
aliases:
  - Majesto
alignment: Lawful Evil
description: >-
  Majesto is Lady Fiona Wachter’s pet imp, a small devil kept hidden at
  Wachterhaus and used as living proof of her cult’s claimed infernal favor.
history: >-
  Majesto stands invisibly at the center of a pentagram during Fiona Wachter’s
  rituals for her most devoted followers, then scatters a handful of electrum
  coins as if bestowed by “princes of darkness,” reinforcing her claim to speak
  for infernal powers. It otherwise stays out of sight and fights only if Fiona
  herself is threatened.
relationships: [ { target: "[[4. World Almanac/Factions/House Wachter.md|House Wachter]]", type: member, note: Fiona Wachter's cult }, { target: "[[4. World Almanac/NPCs/Lady Fiona Wachter (COS).md|Lady Fiona Wachter]]", type: master } ]
party_relationships: {}
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: muh-JES-toh
race: Imp (devil)
gender: male
age: null
occupation:
  - Familiar
personality: 'Sly, theatrical, utterly devoted to Fiona'
ideal: Whatever serves my mistress serves me.
bond: 'Fiona Wachter, the woman it serves and the only master it answers to.'
flaw: >-
  It loves the theater of its tricks more than discretion, risking exposure for
  a good show.
goals: >-
  Help Fiona Wachter grow her devil-worshipping cult and, in time, see her seize
  control of Vallaki.
likes: 'Trickery, frightening zealots, mischief'
dislikes: 'Being ignored, anything that threatens Fiona’s schemes'
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
> > "name": "Majesto (COS)"
> > "size": "Tiny"
> > "type": "fiend"
> > "subtype": "devil"
> > "alignment": "Lawful Evil"
> > "ac": !!int "13"
> > "hp": !!int "10"
> > "hit_dice": "3d4 + 3"
> > "modifier": !!int "3"
> > "stats":
> >   - !!int "6"
> >   - !!int "17"
> >   - !!int "13"
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "14"
> > "speed": "20 ft., fly 40 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+3"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+5"
> > "damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
> >   \ not made with silvered weapons"
> > "damage_immunities": "fire, poison"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
> >   \ 11"
> > "languages": "Infernal, Common"
> > "cr": "1"
> > "traits":
> >   - "desc": "Majesto can use its action to polymorph into a beast form that resembles\
> >       \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
> >       \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
> >       \ except for the speed changes noted. Any equipment it is wearing or carrying\
> >       \ isn't transformed. It reverts to its true form if it dies."
> >     "name": "Shapechanger"
> >   - "desc": "Magical darkness doesn't impede Majesto's darkvision."
> >     "name": "Devil's Sight"
> >   - "desc": "Majesto has advantage on saving throws against spells and other magical\
> >       \ effects."
> >     "name": "Magic Resistance"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4\
> >       \ + 3) piercing damage, and the target must make a DC 11 Constitution saving\
> >       \ throw, taking 10 (3d6) poison damage on a failed save, or half as much damage\
> >       \ on a successful one."
> >     "name": "Sting (Bite in Beast Form)"
> >   - "desc": "Majesto magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
> >       \ until it attacks, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
> >       \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
> >       \ on a spell). Any equipment Majesto wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
> >       \ with it."
> >     "name": "Invisibility"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/majesto-cos.webp"
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
*Source: Curse of Strahd p. 115*

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
