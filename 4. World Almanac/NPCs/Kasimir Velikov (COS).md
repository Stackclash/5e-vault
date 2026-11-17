---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/dusk-elf
condition: healthy
images:
  - 4. World Almanac/NPCs/img/kasimir-velikov.webp
aliases:
  - Kasimir Velikov
alignment: Neutral
relationships: [ { target: "[[4. World Almanac/Factions/Vistani.md|Vistani]]", type: member, note: adopted }, { target: "[[4. World Almanac/Factions/Dusk Elves of Barovia.md|Dusk Elves of Barovia]]", type: member, note: last of }, { target: "[[4. World Almanac/NPCs/Patrina Velikovna (COS).md|Patrina Velikovna]]", type: sister }, { target: "[[4. World Almanac/Places of Interest/The Amber Temple.md|The Amber Temple]]", type: works-at, note: watcher } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: KAH-sih-meer VEL-ih-kov
race: Dusk Elf
gender: male
age: 340
occupation:
  - Hermit scholar
  - Amber Temple watcher
personality: >-
  Grief-stricken, guarded, and quietly vengeful — a scholar-turned-spy consumed
  by regret.
ideal: 'I failed my people and my sister, and now I must atone or be damned.'
bond: >-
  I seek to return my long-dead sister, Patrina, to life — even at the cost of
  my own life.
flaw: I believe my sister can be redeemed.
goals: >-
  To uncover the Amber Temple's secrets and find a way to restore his sister
  Patrina to flesh and blood.
likes: 'Old lore, solitude, the old Vistani ways'
dislikes: 'The modern Vistani leadership, Strahd, reminders of his mutilation'
description: >-
  A mutilated, grief-stricken dusk elf who conceals his ear-shorn head beneath a
  cowl, centuries of guilt etched into his bearing.
history: >-
  Kasimir's people, the dusk elves, were nearly annihilated by Strahd's armies
  and surrendered what remained of themselves into Vistani care. He took the
  name of the Vistana who welcomed his clan and has lived among their
  descendants ever since, though he thinks them fallen from the nobler ways of
  the past. His sister, Patrina Velikovna, went to Castle Ravenloft believing
  herself Strahd's rightful consort; when it became clear Strahd would never
  love her, her own people — Kasimir among them — stoned her to death to keep
  her from Strahd's bed. Strahd took his fury out on the dusk elves in turn,
  butchering their women and cutting off Kasimir's ears as punishment for
  inciting the killing. Now Patrina speaks to him in dreams from her tomb in the
  catacombs of Ravenloft, insisting death has cleansed her — and Kasimir,
  unaware she means to use him, believes the Amber Temple holds the secret to
  restoring her to life and ending his own guilt.
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
> > "name": "Kasimir Velikov (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "Dusk elf"
> > "alignment": "Neutral"
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
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 11"
> > "languages": "any four languages"
> > "cr": "6"
> > "traits":
> >   - "desc": "Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence\
> >       \ (spell save DC 14, +6 to hit with spell attacks). Kasimir has the following\
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
> >   - "desc": "Kasimir has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
> >       \ and magic can't put him to sleep."
> >     "name": "Fey Ancestry"
> >   - "desc": "Kasimir wears a [[/5. Mechanics/Items/Ring Of Warmth.md|ring of warmth]]\
> >       \ and carries a spellbook containing all the spells he has prepared plus the\
> >       \ following spells: [[/5. Mechanics/Spells/Arcane Lock.md|arcane lock]], [[/5. Mechanics/Spells/Comprehend Languages.md|comprehend\
> >       \ languages]], [[/5. Mechanics/Spells/Hold Person.md|hold person]],\
> >       \ [[/5. Mechanics/Spells/Identify.md|identify]], [[/5. Mechanics/Spells/Locate Object.md|locate object]],\
> >       \ [[/5. Mechanics/Spells/Nondetection.md|nondetection]], [[/5. Mechanics/Spells/Polymorph.md|polymorph]],\
> >       \ [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
> >       \ and [[/5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]."
> >     "name": "Special Equipment"
> > "actions":
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
> >     "name": "Dagger"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/kasimir-velikov-cos.webp"
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
*Source: Curse of Strahd p. 233*

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
