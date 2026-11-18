---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/fiend
condition: healthy
images: []
aliases:
  - Morgantha
alignment: Neutral Evil
description: >-
  In her human disguise, Morgantha appears as a haggard, heavyset old woman with
  a face "wrinkled as a boiled apple," wearing a bloodstained, flour-caked
  apron, her bundled gray hair pinned with a long, sharp bodkin. Beneath the
  disguise she is a true night hag — withered, green-skinned, and vicious — a
  shape she sheds without hesitation the moment bartering turns to violence.
history: >-
  Morgantha and her two hag "daughters," Bella Sunbane and Offalia Wormwiggle,
  are trapped in Barovia like everyone else, but unlike most they've grown to
  enjoy it. Posing as a miller's family at the ramshackle windmill of Old
  Bonegrinder outside Vallaki, they grind the bones of murdered children into
  the key ingredient of their dream pastries — sweets that let desperate
  Barovians escape Strahd's domain through vivid, addictive dreams. When adults
  can no longer pay in coin, the hags offer to trade pastries for children
  instead, corrupting the desperate rather than simply preying on them.
  Morgantha gave her coven's hag eye to Cyrus Belview, Strahd's disfigured
  manservant, so she could spy on Castle Ravenloft and stay a step ahead of the
  vampire she fears and respects.
relationships: [ { target: "[[4. World Almanac/Factions/Morgantha's Coven.md|Morgantha's Coven]]", type: leader }, { target: "[[4. World Almanac/Places of Interest/Old Bonegrinder.md|Old Bonegrinder]]", type: home }, { target: "[[4. World Almanac/NPCs/Cyrus Belview (COS).md|Cyrus Belview]]", type: asset, note: carries her hag eye to spy on Ravenloft } ]
party_relationships: {}
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: mor-GAN-thuh
race: Night Hag
gender: female
age: null
occupation:
  - Proprietor of Old Bonegrinder
  - Baker of dream pastries
personality: >-
  Business-like and outwardly grandmotherly in her human disguise, proud of her
  baking "craft," but venomous, greedy, and cruel the moment a customer refuses
  her or a threat presents itself
ideal: >-
  Every soul has its price — sell them their dreams, and they'll hand over
  anything, even their own children.
bond: >-
  My daughters, Bella and Offalia, complete my coven; without them I am only
  two-thirds as strong.
flaw: My hunger for children's bones and suffering always wins out over caution.
goals: >-
  To keep her coven of three intact and her supply of dream pastries flowing,
  trading on Barovians' desperation to escape Strahd's domain in order to
  harvest more children — and their bones — without provoking the Dark Lord's
  wrath.
likes: >-
  Baking and being praised for it, watching Barovians grow desperate enough to
  trade away their children, her daughters' company, gossip gathered through her
  hag eye
dislikes: >-
  Customers who refuse to buy or pay, meddling adventurers, losing a daughter
  and breaking her coven, being defied
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
> > "name": "Morgantha (COS)"
> > "size": "Medium"
> > "type": "fiend"
> > "alignment": "Neutral Evil"
> > "ac": !!int "17"
> > "ac_class": "natural armor"
> > "hp": !!int "112"
> > "hit_dice": "15d8 + 45"
> > "modifier": !!int "2"
> > "stats":
> >   - !!int "18"
> >   - !!int "15"
> >   - !!int "16"
> >   - !!int "16"
> >   - !!int "14"
> >   - !!int "16"
> > "speed": "30 ft."
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+5"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+5"
> > "damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
> >   \ attacks that aren't silvered"
> > "condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
> >   \ 16"
> > "languages": "Abyssal, Common, Infernal, Primordial"
> > "cr": "5"
> > "traits":
> >   - "desc": "Morgantha's innate spellcasting ability is Charisma (spell save DC 14,\
> >       \ +6 to hit with spell attacks). She can innately cast the following spells,\
> >       \ requiring no material components:\n\n**At will:** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]],\
> >       \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n**2/day each:** [[/5. Mechanics/Spells/Plane Shift.md|plane\
> >       \ shift]] (self only), [[/5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
> >       \ [[/5. Mechanics/Spells/Sleep.md|sleep]]"
> >     "name": "Innate Spellcasting"
> >   - "desc": "Morgantha has advantage on saving throws against spells and other magical\
> >       \ effects."
> >     "name": "Magic Resistance"
> >   - "desc": "A night hag carries two very rare magic items that she must craft for\
> >       \ herself. If either object is lost, the night hag will go to great lengths\
> >       \ to retrieve it, as creating a new tool takes time and effort.\n\n**Heartstone.**\
> >       \ This lustrous black gem allows a night hag to become ethereal while it is\
> >       \ in her possession. The touch of a [[/5. Mechanics/Items/Heartstone (MM).md|heartstone]]\
> >       \ also cures any disease. Crafting a heartstone takes 30 days.\n\n**Soul Bag.**\
> >       \ When an evil humanoid dies as a result of a night hag's Nightmare Haunting,\
> >       \ Morgantha catches the soul in this black sack made of stitched flesh. A [[/5. Mechanics/Items/Soul Bag (MM).md|soul\
> >       \ bag]] can hold only one evil soul at a time,\
> >       \ and only the night hag who crafted the bag can catch a soul with it. Crafting\
> >       \ a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make\
> >       \ the bag)."
> >     "name": "Night Hag Items"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
> >       \ (2d8 + 4) slashing damage."
> >     "name": "Claws (Hag Form Only)"
> >   - "desc": "Morgantha magically polymorphs into a Small or Medium female humanoid,\
> >       \ or back into her true form. Her statistics are the same in each form. Any\
> >       \ equipment she is wearing or carrying isn't transformed. She reverts to her\
> >       \ true form if she dies."
> >     "name": "Change Shape"
> >   - "desc": "Morgantha magically enters the Ethereal Plane from the Material Plane,\
> >       \ or vice versa. To do so, Morgantha must have a heartstone in her possession."
> >     "name": "Etherealness"
> >   - "desc": "While on the Ethereal Plane, Morgantha magically touches a sleeping humanoid\
> >       \ on the Material Plane. A [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
> >       \ spell cast on the target prevents this contact, as does a magic circle. As\
> >       \ long as the contact persists, the target has dreadful visions. If these visions\
> >       \ last for at least 1 hour, the target gains no benefit from its rest, and its\
> >       \ hit point maximum is reduced by 5 (1d10). If this effect reduces the target's\
> >       \ hit point maximum to 0, the target dies, and if the target was evil, its soul\
> >       \ is trapped in Morgantha's soul bag. The reduction to the target's hit point\
> >       \ maximum lasts until removed by the [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
> >       \ spell or similar magic."
> >     "name": "Nightmare Haunting (1/Day)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/morgantha-cos.webp"
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > Religion (from the old religions field): Ceithlenn of the Crooked Teeth
> >
> > ### Plot Hooks
> >
> >
> > ### Hidden Details
> >
> >
> > ### General Notes
> >
> > #### Source
> > *Source: Curse of Strahd p. 48*
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
