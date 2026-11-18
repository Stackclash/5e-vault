---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images: []
aliases:
  - Urwin Martikov
alignment: Lawful Good
relationships:
  - target: "[[4. World Almanac/NPCs/Davian Martikov (COS).md|Davian Martikov]]"
    type: father
    note: estranged over the stolen gem
  - target: "[[4. World Almanac/Factions/Keepers of the Feather.md|Keepers of the Feather]]"
    type: member
    note: high-ranking
  - target: "[[4. World Almanac/Shops/Blue Water Inn.md|Blue Water Inn]]"
    type: works-at
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Shops/Blue Water Inn.md|Blue Water Inn]]'
gist: "Head elder of Vallaki's council and keeper of the Blue Water Inn; wereraven Keeper estranged from his father Davian."
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: UR-win MAR-ti-kov
race: '[[5. Mechanics/Bestiary/Humanoid/Wereraven (VRGR).md|Wereraven]]'
gender: male
age: 36
occupation:
  - Innkeeper
  - Cook
  - Head Elder of Vallaki
personality: 'Warm, protective, quietly stubborn'
ideal: A safe hearth and a full cup can hold back even Strahd’s darkness.
bond: >-
  His wife Danika, their sons Bray and Brom, and the Blue Water Inn he has sworn
  to keep as a sanctuary.
flaw: >-
  His pride won’t let him admit fault to his father, even when reconciliation
  matters more than being right.
goals: >-
  Clear his name in Davian’s eyes, keep the Blue Water Inn a safe haven for
  Vallaki, and protect the Keepers of the Feather’s secret from Strahd and the
  burgomaster alike.
likes: >-
  Good wine (even his family’s cheaper vintages), a full taproom, quiet nights
  when no one needs saving
dislikes: >-
  Being blamed for the stolen gem, his father’s suspicion, watching Vallaki
  suffer under the baron’s festivals
description: >-
  Urwin Martikov is the innkeeper of the [[Blue Water Inn]] in Vallaki and a
  high-ranking member of the Keepers of the Feather, the secret society of
  wereravens working against Strahd from within the town.
history: >-
  The middle son of [[Davian Martikov (COS)|Davian Martikov]], Urwin grew up
  tending the family vineyard until, ten years ago, one of the winery’s three
  magic gems was dug up and stolen while he stood watch. Davian became convinced
  Urwin had shirked his duty to be with his betrothed, Danika, and the two men
  have been at odds ever since; Urwin denies the accusation to this day. He and
  Danika later married and left the winery to open the Blue Water Inn in
  Vallaki, building it into both a sanctuary for frightened locals and a covert
  waypoint for the Keepers of the Feather.
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
> > "name": "Urwin Martikov (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human, shapechanger"
> > "alignment": "Lawful Good"
> > "ac": !!int "12"
> > "hp": !!int "31"
> > "hit_dice": "7d8"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "10"
> >   - !!int "15"
> >   - !!int "11"
> >   - !!int "13"
> >   - !!int "15"
> >   - !!int "14"
> > "speed": "30 ft. (fly 50 ft. in raven and hybrid forms)"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+6"
> > "gear":
> >   - "[[/5. Mechanics/Items/Hand Crossbow.md|hand crossbow]]"
> >   - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
> > "senses": "passive Perception 16"
> > "languages": "Common (can't speak in raven form)"
> > "cr": "2"
> > "traits":
> >   - "desc": "Urwin can use its action to polymorph into a raven-humanoid hybrid or\
> >       \ into a raven, or back into its human form. Its statistics, other than its\
> >       \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
> >       \ transformed. It reverts to its human form if it dies."
> >     "name": "Shapechanger"
> >   - "desc": "Urwin can mimic simple sounds it has heard, such as a person whispering,\
> >       \ a baby crying, or an animal chittering. A creature that hears the sounds can\
> >       \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
> >       \ check."
> >     "name": "Mimicry"
> >   - "desc": "Urwin regains 10 hit points at the start of its turn. If Urwin takes\
> >       \ damage from a silvered weapon or a spell, this trait doesn't function at the\
> >       \ start of Urwin's next turn. Urwin dies only if it starts its turn with 0 hit\
> >       \ points and doesn't regenerate."
> >     "name": "Regeneration"
> > "actions":
> >   - "desc": "Urwin makes two weapon attacks, one of which can be with its hand crossbow."
> >     "name": "Multiattack (Human or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1 piercing\
> >       \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the\
> >       \ target is humanoid, it must succeed on a DC 10 Constitution saving throw or\
> >       \ be cursed with wereraven [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
> >     "name": "Beak (Raven or Hybrid Form Only)"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
> >       \ + 2) piercing damage."
> >     "name": "Shortsword (Human or Hybrid Form Only)"
> >   - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
> >       \ 5 (1d6 + 2) piercing damage."
> >     "name": "Hand Crossbow (Human or Hybrid Form Only)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/urwin-martikov-cos.webp"
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
> > *Source: Curse of Strahd p. 98*
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
