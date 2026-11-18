---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/celestial
condition: healthy
images: []
aliases:
  - The Abbot
alignment: Lawful Evil
relationships: [ { target: "[[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of Saint Markovia]]", type: home }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: patron, note: as Vasili von Holtz; supplied Amber Temple lore } ]
party_relationships: {}
location: null
gist: "Deva master of the Abbey of Saint Markovia who made the Belviews mongrelfolk and built Vasilka as Strahd's bride."
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: null
race: Deva (celestial)
gender: male
age: null
occupation:
  - Master of the Abbey of Saint Markovia
personality: >-
  Serene, paternal, and soft-spoken on the surface; underneath, prideful and
  utterly convinced of his own goodness no matter what he does in its name.
ideal: >-
  I want to rid Barovia of its sickness. By giving the devil his heart's desire,
  I bring salvation to him and his land.
bond: 'I love the creatures I create, including my beautiful golems and mongrelfolk.'
flaw: 'I can''t be corrupted. My heart is pure, my intentions noble and good.'
goals: >-
  To cure Strahd's "malady" by reuniting him with a bride built from the dead,
  believing this will finally lift Barovia's curse.
likes: 'Healing the sick, refining his creations, being thanked for his good works'
dislikes: 'Being doubted, imperfection, anything that reminds him of his fall from grace'
description: >-
  A strikingly handsome human priest in his late twenties or early thirties — in
  truth a deva, an angel who has walked Barovia for over a century.
history: >-
  Sent from the Upper Planes to honor the legacy of Saint Markovia, the Abbot
  reopened her abbey in Krezk and spent decades tending the sick, believing he
  could bring Barovia some small measure of light. When the sickly, inbred
  Belview family came seeking a cure, his healing gave way to a prideful
  obsession with perfecting them, and a Barovian lord who called himself Vasili
  von Holtz — Strahd in disguise — supplied him with forbidden lore from the
  Amber Temple to finish the job, transforming the Belviews into mongrelfolk.
  Strahd then confided his "curse" to the Abbot and let the deva believe
  reuniting him with his lost love could end it. The Abbot is now convinced the
  cure is a bride stitched together from the bodies of dead women, and has
  completed a flesh golem he is teaching etiquette so she can be presented to
  Strahd — corrupted, but still unable to see it in himself.
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
> > "name": "The Abbot (COS)"
> > "size": "Medium"
> > "type": "celestial"
> > "alignment": "Lawful Evil"
> > "ac": !!int "17"
> > "ac_class": "natural armor"
> > "hp": !!int "136"
> > "hit_dice": "16d8 + 64"
> > "modifier": !!int "4"
> > "stats":
> >   - !!int "18"
> >   - !!int "18"
> >   - !!int "18"
> >   - !!int "17"
> >   - !!int "20"
> >   - !!int "20"
> > "speed": "30 ft., fly 90 ft."
> > "saves":
> >   - "wisdom": !!int "9"
> >   - "charisma": !!int "9"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+9"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+9"
> > "damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
> > "gear":
> >   - "[[/5. Mechanics/Items/Mace.md|mace]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
> >   \ 19"
> > "languages": "all, telepathy 120 ft."
> > "cr": "10"
> > "traits":
> >   - "desc": "The Abbot's spellcasting ability is Charisma (spell save DC 17). The\
> >       \ Abbot can innately cast the following spells, requiring only verbal components:\n\
> >       \n**At will:** [[/5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]]\n\
> >       \n**1/day each:** [[/5. Mechanics/Spells/Commune.md|commune]], [[/5. Mechanics/Spells/Raise Dead.md|raise dead]]"
> >     "name": "Innate Spellcasting"
> >   - "desc": "The Abbot's weapon attacks are magical. When The Abbot hits with any\
> >       \ weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
> >     "name": "Angelic Weapons"
> >   - "desc": "The Abbot has advantage on saving throws against spells and other magical\
> >       \ effects."
> >     "name": "Magic Resistance"
> > "actions":
> >   - "desc": "The Abbot makes two melee attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7 (1d6\
> >       \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
> >     "name": "Mace"
> >   - "desc": "The Abbot touches another creature. The target magically regains 20 (4d8\
> >       \ + 2) hit points and is freed from any curse, disease, poison, blindness, or\
> >       \ deafness."
> >     "name": "Healing Touch (3/Day)"
> >   - "desc": "The Abbot magically polymorphs into a humanoid or beast that has a challenge\
> >       \ rating equal to or less than its own, or back into its true form. It reverts\
> >       \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
> >       \ or borne by the new form (The Abbot's choice).\n\nIn a new form, The Abbot\
> >       \ retains its game statistics and ability to speak, but its AC, movement modes,\
> >       \ Strength, Dexterity, and special senses are replaced by those of the new form,\
> >       \ and it gains any statistics and capabilities (except class features, legendary\
> >       \ actions, and lair actions) that the new form has but that it lacks."
> >     "name": "Change Shape"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/the-abbot-cos.webp"
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
> > *Source: Curse of Strahd p. 151*
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
