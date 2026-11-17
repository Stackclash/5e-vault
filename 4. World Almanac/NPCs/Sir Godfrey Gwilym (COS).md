---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/undead
condition: dead
images:
  - 4. World Almanac/NPCs/img/sir-godfrey-gwilym.webp
aliases:
  - Sir Godfrey Gwilym
alignment: Lawful Evil
description: >-
  A gaunt knight bound in the tattered remains of chainmail that once shone
  silver, Sir Godfrey moves with the deliberate bearing of a soldier who has
  never stopped fighting a war he lost centuries ago. His revenant eyes smolder
  with a paladin's old fire, flaring hot at the sight of Strahd's servants.
history: >-
  Sir Godfrey Gwilym was a knight of the Order of the Silver Dragon and the
  beloved of its field commander, [[Vladimir Horngaard (COS)|Vladimir
  Horngaard]]. When Strahd's armies finally overran Argynvostholt, Strahd
  himself struck Godfrey down before Vladimir's eyes, then went on to kill the
  silver dragon Argynvost and shatter the order for good. Vladimir's grief
  curdled into a hatred so potent it dragged Godfrey's spirit — and several
  other fallen knights — back into the world as revenants. Bound by oaths to
  Vladimir, Godfrey has haunted the ruins of Argynvostholt ever since, his honor
  buried under centuries of impotent vengeance.
relationships: []
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Places of Interest/Argynvostholt.md|Argynvostholt]]'
pronounced: sir GOD-free GWIL-im
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: null
occupation:
  - Knight of the Order of the Silver Dragon
groups:
  - Order of the Silver Dragon
religions:
  - The Morninglord
personality: 'Stoic, honorable, deeply melancholic'
ideal: Redemption for the Order and peace for Barovia are my only pursuits.
bond: >-
  His unyielding loyalty to the Order of the Silver Dragon and the memory of
  Argynvost
flaw: >-
  His single-minded focus on the order's redemption can sometimes blind him to
  broader concerns or simpler joys
goals: >-
  To restore the honor of the Order of the Silver Dragon, to find peace in
  fulfilling his oath
likes: >-
  Acts of bravery and honor, the legacy of the Silver Dragon, those who seek
  justice
dislikes: >-
  Cowardice, betrayal, Strahd and his minions, the failure of the Order to
  protect Barovia
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
> **Group(s)** | `INPUT[inlineList:groups]` |
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
> > "name": "Sir Godfrey Gwilym (COS)"
> > "size": "Medium"
> > "type": "undead"
> > "alignment": "Lawful Evil"
> > "ac": !!int "13"
> > "ac_class": "broken chainmail"
> > "hp": !!int "136"
> > "hit_dice": "16d8 + 64"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "18"
> >   - !!int "14"
> >   - !!int "18"
> >   - !!int "13"
> >   - !!int "16"
> >   - !!int "18"
> > "speed": "30 ft."
> > "saves":
> >   - "strength": !!int "7"
> >   - "constitution": !!int "7"
> >   - "wisdom": !!int "6"
> >   - "charisma": !!int "7"
> > "damage_resistances": "necrotic, psychic"
> > "damage_immunities": "poison"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
> >   \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 13"
> > "languages": "the languages it knew in life"
> > "cr": "6"
> > "traits":
> >   - "desc": "Sir Godfrey is a 16th-level spellcaster. His spellcasting ability is\
> >       \ Wisdom (spell save DC 14, +6 to hit with spell attacks). He has the following\
> >       \ paladin spells prepared:\n\n**1st level (4 slots):** [[/5. Mechanics/Spells/Command.md|command]],\
> >       \ [[/5. Mechanics/Spells/Divine Favor.md|divine favor]], [[/5. Mechanics/Spells/Thunderous Smite.md|thunderous smite]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Branding Smite.md|branding smite]],\
> >       \ [[/5. Mechanics/Spells/Magic Weapon.md|magic weapon]]\n\n**3rd level (3 slots):**\
> >       \ [[/5. Mechanics/Spells/Blinding Smite.md|blinding smite]], [[/5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\n\
> >       \n**4th level (2 slots):** [[/5. Mechanics/Spells/Staggering Smite.md|staggering smite]]"
> >     "name": "Spellcasting"
> >   - "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
> >       \ takes fire or radiant damage, this trait doesn't function at the start of\
> >       \ the knight's next turn. The knight's body is destroyed only if it starts its\
> >       \ turn with 0 hit points and doesn't regenerate."
> >     "name": "Regeneration"
> >   - "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
> >       \ the soul inhabits and animates another humanoid corpse on the same plane of\
> >       \ existence and regains all its hit points. While the soul is bodiless, a [[/5. Mechanics/Spells/Wish.md|wish]]\
> >       \ spell can be used to force the soul to go to the afterlife and not return."
> >     "name": "Rejuvenation"
> >   - "desc": "The knight is immune to effects that turn undead."
> >     "name": "Turn Immunity"
> >   - "desc": "The knight knows the distance to and direction of any creature against\
> >       \ which it seeks revenge, even if the creature and the knight are on different\
> >       \ planes of existence. If the creature being tracked by the knight dies, the\
> >       \ knight knows."
> >     "name": "Vengeful Tracker"
> > "actions":
> >   - "desc": "The knight makes two longsword attacks or two fist attacks."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15\
> >       \ (2d10 + 4) slashing damage. If the target is a creature against which the\
> >       \ knight has sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
> >     "name": "Longsword"
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11\
> >       \ (2d6 + 4) bludgeoning damage. If the target is a creature against which the\
> >       \ knight has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning\
> >       \ damage. Instead of dealing damage, the knight can grapple the target (escape\
> >       \ DC 14) provided the target is Large or smaller."
> >     "name": "Fist"
> >   - "desc": "The knight targets one creature it can see within 30 feet of it and against\
> >       \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
> >       \ On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
> >       \ until the knight deals damage to it, or until the end of the knight's next\
> >       \ turn. When the paralysis ends, the target is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
> >       \ of the knight for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
> >       \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
> >       \ if it can see the knight, ending the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
> >       \ condition on itself on a success."
> >     "name": "Vengeful Glare"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/sir-godfrey-gwilym-cos.webp"
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
*Source: Curse of Strahd p. 139*

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
