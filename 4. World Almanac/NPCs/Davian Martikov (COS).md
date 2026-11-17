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
images:
  - 4. World Almanac/NPCs/img/davian-martikov.webp
aliases:
  - Davian Martikov
alignment: Lawful Good
description: >-
  Davian Martikov is the old, suspicious patriarch of the Martikov family and
  current owner of the [[The Wizard of Wines|Wizard of Wines]] winery, and like
  his children, a wereraven and senior member of the Keepers of the Feather.
history: >-
  The winery passed to the Martikov line generations ago through a marriage
  between the Krezkov and Martikov families, and the whole family was later
  touched by lycanthropy, becoming wereravens loyal to the Keepers of the
  Feather. Davian has run the vineyard for decades, but ten years ago one of its
  three magic "seed" gems was stolen while his son [[Urwin Martikov
  (COS)|Urwin]] stood watch; Davian has never forgiven him for it, and the two
  remain estranged. In recent weeks Baba Lysaga's scarecrows and a band of evil
  druids have stolen the remaining two gems and driven Davian's family from the
  winery entirely, leaving the vineyard's future in doubt.
relationships: [ { target: "[[4. World Almanac/Factions/Keepers of the Feather.md|Keepers of the Feather]]", type: member, note: senior }, { target: "[[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of Wines]]", type: home, note: owner }, { target: "[[4. World Almanac/NPCs/Baba Lysaga (COS).md|Baba Lysaga]]", type: enemy } ]
party_relationships:
  Midnight Covenant: Ally
location: >-
  [[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of
  Wines]]
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: DAY-vee-an MAR-ti-kov
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 61
occupation:
  - Vintner
  - Winery Owner
personality: 'Suspicious, gruff, stubbornly proud'
ideal: >-
  The vineyard is the valley’s lifeblood, and protecting it is the family’s
  sacred duty above all else.
bond: >-
  The Wizard of Wines winery his family has tended for generations, and the good
  name he refuses to see tarnished by a son’s mistake.
flaw: >-
  Once convinced he’s right, he cannot let a grudge go, not even against his own
  son.
goals: >-
  Recover the vineyard’s three stolen magic gems, drive off Baba Lysaga’s
  scarecrows and the druids squatting in his winery, and restore the Wizard of
  Wines to its former glory.
likes: 'Well-tended grapevines, a full cellar, the memory of his late wife Angelika'
dislikes: 'Baba Lysaga’s scarecrows, thieves, being defied - especially by Urwin'
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
> > "name": "Davian Martikov (COS)"
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
> >   - "desc": "Davian can use its action to polymorph into a raven-humanoid hybrid or\
> >       \ into a raven, or back into its human form. Its statistics, other than its\
> >       \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
> >       \ transformed. It reverts to its human form if it dies."
> >     "name": "Shapechanger"
> >   - "desc": "Davian can mimic simple sounds it has heard, such as a person whispering,\
> >       \ a baby crying, or an animal chittering. A creature that hears the sounds can\
> >       \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
> >       \ check."
> >     "name": "Mimicry"
> >   - "desc": "Davian regains 10 hit points at the start of its turn. If Davian takes\
> >       \ damage from a silvered weapon or a spell, this trait doesn't function at the\
> >       \ start of Davian's next turn. Davian dies only if it starts its turn with 0\
> >       \ hit points and doesn't regenerate."
> >     "name": "Regeneration"
> > "actions":
> >   - "desc": "Davian makes two weapon attacks, one of which can be with its hand crossbow."
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
> > "image": "/4. World Almanac/NPCs/token/davian-martikov-cos.webp"
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
*Source: Curse of Strahd p. 173*

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
