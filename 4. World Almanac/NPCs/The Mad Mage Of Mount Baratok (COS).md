---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - The Mad Mage of Mount Baratok
alignment: Chaotic Neutral
description: >-
  A wild-eyed man in tattered black robes, his hair and beard long, dark, and
  streaked with gray, power crackling visibly behind his eyes — as likely to
  appear first in the shape of an elk as a man.
history: >-
  Beneath the madness is Mordenkainen, an archmage of Oerth and leader of the
  Circle of Eight, who came to Barovia more than a year ago hoping to free its
  people from Strahd's tyranny. He underestimated the vampire's hold over the
  land, and their battle at Castle Ravenloft ended with Mordenkainen thrown from
  a precipice into Tser Falls, his staff and spellbook lost. He survived the
  fall and retreated into the mountains around Mount Baratok, where the shock of
  his defeat broke his mind. He has since cast mind blank on himself, a spell
  that — while active — prevents any magic from restoring his sanity or his
  memory of who he truly is.
relationships: [ { target: "[[4. World Almanac/Factions/Circle of Eight.md|Circle of Eight]]", type: leader, note: former leader }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: enemy } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: BAR-uh-tok
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 300
occupation:
  - Archmage
  - Circle of Eight (former leader)
personality: >-
  While mad: paranoid and violent, convinced enemies are hunting him everywhere.
  Once restored: stubborn, taciturn, and utterly certain of his own authority.
ideal: 'Power exists to end tyranny, whatever the cost to the one who wields it.'
bond: >-
  The Circle of Eight, his fellow archmages on Oerth, from whom his madness and
  this land have cut him off.
flaw: >-
  His overconfidence led him to challenge Strahd directly in single combat — and
  lose catastrophically.
goals: >-
  To recover his stolen staff and spellbook, shed his madness, and find a way to
  defeat Strahd and go home.
likes: 'Solitude, the company of true equals, forbidden lore'
dislikes: 'Being underestimated, fools, Strahd von Zarovich'
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
> > "name": "The Mad Mage Of Mount Baratok (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Chaotic Neutral"
> > "ac": !!int "12"
> > "ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
> > "hp": !!int "99"
> > "hit_dice": "18d8 + 18"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "10"
> >   - !!int "14"
> >   - !!int "12"
> >   - !!int "20"
> >   - !!int "15"
> >   - !!int "16"
> > "speed": "30 ft."
> > "saves":
> >   - "intelligence": !!int "9"
> >   - "wisdom": !!int "6"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+13"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
> >     "desc": "+13"
> > "damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
> >   \ (from stoneskin)"
> > "gear":
> >   - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
> > "senses": "passive Perception 12"
> > "languages": "any six languages"
> > "cr": "12"
> > "traits":
> >   - "desc": "The mad mage is an 18th-level spellcaster. His spellcasting ability is\
> >       \ Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast\
> >       \ [[/5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[/5. Mechanics/Spells/Invisibility.md|invisibility]]\
> >       \ at will and has the following wizard spells prepared:\n\n**Cantrips (at will):**\
> >       \ [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[/5. Mechanics/Spells/Light.md|light]],\
> >       \ [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
> >       \ [[/5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\n**1st level (4 slots):**\
> >       \ [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
> >       \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Mirror Image.md|mirror image]],\
> >       \ [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Web.md|web]]\n\
> >       \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
> >       \ [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
> >       \n**4th level (3 slots):** [[/5. Mechanics/Spells/Mordenkainens Faithful Hound.md|Mordenkainen's faithful hound]],\
> >       \ [[/5. Mechanics/Spells/Polymorph.md|polymorph]], [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\
> >       \n**5th level (3 slots):** [[/5. Mechanics/Spells/Bigbys Hand.md|Bigby's hand]],\
> >       \ [[/5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[/5. Mechanics/Spells/Scrying.md|scrying]]\n\
> >       \n**6th level (1 slots):** [[/5. Mechanics/Spells/True Seeing.md|true seeing]]\n\
> >       \n**7th level (1 slots):** [[/5. Mechanics/Spells/Mordenkainens Magnificent Mansion.md|Mordenkainen's magnificent mansion]]\n\
> >       \n**8th level (1 slots):** [[/5. Mechanics/Spells/Mind Blank.md|mind blank]]\n\n\
> >       **9th level (1 slots):** [[/5. Mechanics/Spells/Time Stop.md|time stop]]"
> >     "name": "Spellcasting"
> >   - "desc": "The Mad Mage has advantage on saving throws against spells and other\
> >       \ magical effects."
> >     "name": "Magic Resistance"
> > "actions":
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
> >     "name": "Dagger"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/the-mad-mage-of-mount-baratok-cos.webp"
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
> >
> > #### Source
> > *Source: Curse of Strahd p. 39*
> >
> > TBD

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
