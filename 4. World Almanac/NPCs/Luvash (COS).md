---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/luvash.webp
aliases:
  - Luvash
alignment: Chaotic Evil
description: >-
  A broad-shouldered Vistani man in studded leather armor, quick with a scimitar
  and quicker to anger — Luvash is the elder of two brothers who rule the
  Vistani camp outside Vallaki through fear, wine, and Strahd's favor.
history: >-
  When the camp's elders died, leadership fell to Luvash and his younger brother
  Arrigal, and both swore themselves body and soul to Strahd's service without
  hesitation. Luvash rules the camp with an iron fist, doling out punishment
  freely and drowning whatever guilt might otherwise trouble him in wine — his
  only real tenderness reserved for his young daughter, Arabelle, whose recent
  disappearance from camp has driven him to send half his people into the woods
  to search for her.
relationships: [ { target: "[[4. World Almanac/Factions/Vistani.md|Vistani]]", type: leader, note: "Vallaki camp, co-leader" }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: serves } ]
party_relationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: LOO-vash
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 43
occupation:
  - Vistani chieftain
  - Bandit captain
personality: 'Brutal, domineering, feared even by his own people'
ideal: Strength earns obedience; weakness is punished.
bond: His daughter Arabelle is the one soft spot in an otherwise hardened heart.
flaw: >-
  His temper and love of wine make him quick to violence, even against his own
  people.
goals: >-
  To find his missing daughter Arabelle safe, and to keep his camp fed, feared,
  and loyal to Strahd's will.
likes: 'Wine, obedience, his daughter Arabelle'
dislikes: 'Weakness, disobedience, outsiders who threaten his camp'
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
> > "name": "Luvash (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Chaotic Evil"
> > "ac": !!int "15"
> > "ac_class": "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
> > "hp": !!int "65"
> > "hit_dice": "10d8 + 20"
> > "modifier": !!int "3"
> > "stats":
> >   - !!int "15"
> >   - !!int "16"
> >   - !!int "14"
> >   - !!int "14"
> >   - !!int "11"
> >   - !!int "14"
> > "speed": "30 ft."
> > "saves":
> >   - "strength": !!int "4"
> >   - "dexterity": !!int "5"
> >   - "wisdom": !!int "2"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
> >     "desc": "+4"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+4"
> > "gear":
> >   - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
> >   - "[[/5. Mechanics/Items/Scimitar.md|scimitar]]"
> > "senses": "passive Perception 10"
> > "languages": "any two languages"
> > "cr": "2"
> > "actions":
> >   - "desc": "Luvash makes three melee attacks: two with its scimitar and one with\
> >       \ its dagger. Or Luvash makes two ranged attacks with its daggers."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
> >       \ + 3) slashing damage."
> >     "name": "Scimitar"
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
> >     "name": "Dagger"
> >   - "desc": "12\n\n- The target is unable to perform a certain kind of act involving\
> >       \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
> >       \ or casting spells that have somatic components. When this curse ends, the\
> >       \ Vistana takes 1d6 psychic damage.  \n- The target's appearance changes in\
> >       \ a sinister yet purely cosmetic way. For example, the curse can place a scar\
> >       \ on the target's face, turn the target's teeth into yellow fangs, or give the\
> >       \ target bad breath. When this curse ends, the Vistana takes 1d6 psychic damage.\
> >       \  \n- A nonmagical item in the target's possession (chosen by the DM) disappears\
> >       \ and can't be found until the curse ends. The lost item can weigh no more than\
> >       \ 1 pound. When this curse ends, the Vistana takes 1d6 psychic damage.  \n-\
> >       \ The target gains vulnerability to a damage type of the Vistana's choice. When\
> >       \ this curse ends, the Vistana takes 3d6 psychic damage.  \n- The target has\
> >       \ disadvantage on ability checks and saving throws tied to one ability score\
> >       \ of the Vistana's choice. When this curse ends, the Vistana takes 3d6 psychic\
> >       \ damage.  \n- The target's attunement to one magic item (chosen by the DM)\
> >       \ ends, and the target can't attune to the chosen item until the curse ends.\
> >       \ When this curse ends, the Vistana takes 5d6 psychic damage.  \n- The target\
> >       \ is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
> >       \ or both. When this curse ends, the Vistana takes 5d6 psychic damage.  \n\n\
> >       The curse lasts until ended with a [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
> >       \ spell, a [[/5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
> >       \ magic. It doesn't end when the target dies. If a cursed target is returned\
> >       \ to life, the curse remains in effect."
> >     "name": "Curse (Recharges After a Long Rest)"
> >   - "desc": "12\n\nA Vistana who uses Evil Eye can't use it again before finishing\
> >       \ a short or long rest. Once a target succeeds on a saving throw against a Vistana's\
> >       \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
> >     "name": "Evil Eye (Recharges after a Short or Long Rest)"
> > "reactions":
> >   - "desc": "Luvash adds 2 to its AC against one melee attack that would hit it. To\
> >       \ do so, Luvash must see the attacker and be wielding a melee weapon."
> >     "name": "Parry"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/luvash-cos.webp"
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
*Source: Curse of Strahd p. 121*

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
