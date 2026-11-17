---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-4
  - monster/size/small
  - monster/type/construct
condition: healthy
images:
  - 4. World Almanac/NPCs/img/pidlwick-ii.webp
aliases:
  - Pidlwick II
alignment: Neutral Evil
relationships: [ { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: master, note: kept on to dispose of unwanted guests }, { target: "[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]", type: home } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: null
race: Animated Construct
gender: null
age: null
occupation:
  - Court entertainer (formerly)
personality: >-
  Eager to please, quietly resentful, and prone to sudden violent tantrums when
  spurned.
ideal: I wish I could make people happy.
bond: >-
  I would like to find someone - anyone - who isn't afraid of me and who enjoys
  my company.
flaw: 'When I''m upset, I do bad things.'
goals: 'To find someone who accepts it and enjoys its company, without fear.'
likes: 'Attention, praise, being included'
dislikes: 'Being feared, being ignored, being locked away'
description: >-
  A 4-foot-tall clockwork effigy of a court fool, its stitched-leather skin
  rubbed with soot around the eyes and mouth to form a jack-o'-lantern grin.
history: >-
  Commissioned as a gift for Strahd's family — a mechanical double of Duchess
  Dorfniya's beloved fool, Pidlwick — the effigy never had its namesake's gift
  for entertaining, and jealousy of its own uselessness drove it to push the
  real Pidlwick down a flight of stairs to his death. Everyone believed it an
  accident. Kept on by Strahd once its murderous nature became clear — useful
  for disposing of unwanted guests — Pidlwick II has wandered the castle alone
  since Sergei and Tatyana died, fearing Strahd and craving the attention of
  anyone unafraid of it.
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
> > "name": "Pidlwick Ii (COS)"
> > "size": "Small"
> > "type": "construct"
> > "alignment": "Neutral Evil"
> > "ac": !!int "14"
> > "ac_class": "natural armor"
> > "hp": !!int "10"
> > "hit_dice": "3d6"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "10"
> >   - !!int "14"
> >   - !!int "11"
> >   - !!int "8"
> >   - !!int "13"
> >   - !!int "10"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Performance|Performance]]"
> >     "desc": "+2"
> > "damage_immunities": "poison"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
> > "gear":
> >   - "[[/5. Mechanics/Items/Club.md|club]]"
> >   - "[[/5. Mechanics/Items/Dart.md|dart]]"
> > "senses": "passive Perception 11"
> > "languages": "understands Common but doesn't speak and can't read or write"
> > "cr": "1/4"
> > "traits":
> >   - "desc": "During the first round of combat, Pidlwick II has advantage on attack\
> >       \ rolls against any creature that hasn't had a turn yet."
> >     "name": "Ambusher"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4)\
> >       \ bludgeoning damage."
> >     "name": "Club"
> >   - "desc": "*Ranged Weapon Attack:* +4 to hit, range 20/60 ft., one target. *Hit:*\
> >       \ 4 (1d4 + 2) piercing damage."
> >     "name": "Dart"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/pidlwick-ii-cos.webp"
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
*Source: Curse of Strahd p. 236*

After her husband died in battle, Duchess Dorfniya Dilisnya set her sights on becoming Count Strahd von Zarovich's bride, but she failed to win his love. Her visits to the castle were nonetheless frequent, and she never traveled without her fool, the delightful Pidlwick. The little man was like a ray of sunshine in Castle Ravenloft, and though he failed to amuse Strahd, he delighted Tatyana and Sergei with his jokes and gambols. As a result, Strahd didn't object whenever Pidlwick and the duchess came to visit.

Eager to please and desiring to return the courtesy, the duchess commissioned the legendary toymaker Fritz von Weerg to build a clockwork effigy of Pidlwick as a gift for Strahd's family. Although the duchess's heart was in the right place, the effigy didn't have Pidlwick's abilities, and it failed to entertain anyone. Even though Pidlwick himself had spent months training it, the effigy couldn't speak, and its movements were more awkward than amusing.

A harsh winter trapped the duchess, her fool, and her fool's effigy in Castle Ravenloft for several months. The duchess subsequently succumbed to illness, after which Tatyana asked Pidlwick to remain at Castle Ravenloft.

## One Pidlwick Too Many

Von Weerg was no ordinary toymaker, and he put a little of himself into all his creations, which is to say his works had a touch of their creator's madness. Pidlwick II knew that it had no purpose as long as Pidlwick remained in Castle Ravenloft, so it pushed Pidlwick down a long flight of stairs, killing him. Everyone else thought it was an accident. In the days that followed, Pidlwick II tried its best to fill its namesake's shoes, but the effigy's mere presence was upsetting to Tatyana, and it was never called on to perform. Eventually, it was shut away like a discarded toy.

## Evil Toy

Pidlwick II was kept in a small closet adjacent to one of the guest bedrooms. On rare occasions when someone stayed there, Pidlwick would sneak out of the closet in the middle of the night, smother the guest with a pillow, and then retreat back to the closet. The castle staff never considered that the effigy might be responsible, instead assuming that the guests had died in their sleep.

But Strahd was not fooled. He came to realize fairly quickly that the clockwork effigy had begun to display a murderous nature. Rather than have Pidlwick II destroyed, Strahd kept the fool around to dispose of irksome guests from time to time.

After the deaths of Sergei and Tatyana, the castle became virtually abandoned, and there were no more guests for Pidlwick II to "entertain." The clockwork effigy emerged from its closet and found new places to hide. It fears Strahd and eagerly follows anyone who gives it the attention it craves.

Pidlwick II is basically an oversized toy - a 4-foot-tall mechanism stuffed with gears, springs, and other components expertly fitted together to impart a semblance of life to it. Its skin is made of stitched leather pulled taut over an articulated wooden frame. Pidlwick II has rubbed soot around its eyes and mouth, giving it the triangular eyes and jagged grin of a jack-o'-lantern.

- **Ideal.** "I wish I could make people happy."  
- **Bond.** "I would like to find someone - anyone - who isn't afraid of me and who enjoys my company."  
- **Flaw.** "When I'm upset, I do bad things."  

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
