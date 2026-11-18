---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/rictavio.webp
aliases:
  - Rictavio
alignment: Lawful Good
relationships: [ { target: "[[4. World Almanac/Factions/Keepers of the Feather.md|Keepers of the Feather]]", type: ally }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: enemy }, { target: "[[4. World Almanac/Places of Interest/Van Richten's Tower.md|Van Richten's Tower]]", type: home }, { target: "[[4. World Almanac/Factions/Vistani.md|Vistani]]", type: enemy, note: blames them for Erasmus } ]
party_relationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
gist: "Rudolph van Richten disguised as a carnival ringmaster; vampire hunter and Ezmerelda's mentor, met S6-S34."
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: rik-TAH-vee-oh
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 60
occupation:
  - Carnival ringmaster (disguise)
  - Vampire hunter (true identity — Rudolph van Richten)
personality: >-
  Wary, calculating, and haunted — plays the jovial showman but trusts almost no
  one.
ideal: Evil cannot go unchallenged.
bond: 'To protect those I love, I must keep them distant and hidden from my enemies.'
flaw: 'I am cursed. Thus, I will never have peace.'
goals: >-
  To wait for the right moment to strike at Strahd, learn more about the Keepers
  of the Feather, and eliminate as many of Strahd's spies as he can without
  exposing himself.
likes: 'Solitude, meticulous planning, a good disguise'
dislikes: 'Vistani who prey on the innocent, exposure, losing those he cares for'
description: >-
  A colorfully dressed half-elf carnival ringmaster with a pet monkey on his
  shoulder — a hat of disguise concealing the truth: he is Dr. Rudolph van
  Richten, legendary human vampire hunter.
history: >-
  A scholar and doctor from Darkon, van Richten lost his son Erasmus to Vistani
  kidnappers and a vampire's curse, and was forced to end the boy's suffering
  himself after failing to save him. He destroyed the vampire responsible and
  has hunted evil ever since, driven by grief he keeps buried beneath a
  showman's charm. He has come to Barovia to kill Strahd von Zarovich, and hides
  in plain sight — his true identity masked, his thoughts shielded — while he
  waits for the vampire's guard to drop.
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
> > "name": "Rictavio (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Lawful Good"
> > "ac": !!int "12"
> > "ac_class": "[[/5. Mechanics/Items/Leather Armor.md|leather armor]]"
> > "hp": !!int "77"
> > "hit_dice": "14d8 + 14"
> > "modifier": !!int "1"
> > "stats":
> >   - !!int "9"
> >   - !!int "12"
> >   - !!int "13"
> >   - !!int "16"
> >   - !!int "18"
> >   - !!int "16"
> > "speed": "30 ft."
> > "saves":
> >   - "constitution": !!int "4"
> >   - "wisdom": !!int "7"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+9"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
> >     "desc": "+4"
> > "senses": "passive Perception 17"
> > "languages": "Abyssal, Common, Elvish, Infernal"
> > "cr": "5"
> > "traits":
> >   - "desc": "Rictavio is a 9th-level spellcaster. His spellcasting ability is Wisdom\
> >       \ (spell save DC 15, +7 to hit with spell attacks). Rictavio has the following\
> >       \ cleric spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Guidance.md|guidance]],\
> >       \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mending.md|mending]],\
> >       \ [[/5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n**1st level (4 slots):**\
> >       \ [[/5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[/5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
> >       \ [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
> >       \ [[/5. Mechanics/Spells/Sanctuary.md|sanctuary]]\n\n**2nd level (3 slots):** [[/5. Mechanics/Spells/Augury.md|augury]],\
> >       \ [[/5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[/5. Mechanics/Spells/Protection From Poison.md|protection\
> >       \ from poison]]\n\n**3rd level\
> >       \ (3 slots):** [[/5. Mechanics/Spells/Magic Circle.md|magic circle]], [[/5. Mechanics/Spells/Remove Curse.md|remove curse]],\
> >       \ [[/5. Mechanics/Spells/Speak With Dead.md|speak with dead]]\n\n**4th level (3\
> >       \ slots):** [[/5. Mechanics/Spells/Death Ward.md|death ward]], [[/5. Mechanics/Spells/Freedom Of Movement.md|freedom of movement]]\n\
> >       \n**5th level (1 slots):** [[/5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]]"
> >     "name": "Spellcasting"
> >   - "desc": "In addition to his sword cane, Rictavio wears a [[/5. Mechanics/Items/Hat Of Disguise.md|hat of disguise]]\
> >       \ and a [[/5. Mechanics/Items/Ring Of Mind Shielding.md|ring of mind shielding]],\
> >       \ and he carries a [[/5. Mechanics/Items/Spell Scroll 5th Level.md|spell scroll]]\
> >       \ of [[/5. Mechanics/Spells/Raise Dead.md|raise dead]]."
> >     "name": "Special Equipment"
> >   - "desc": "When Rictavio hits an undead with a weapon attack, the undead takes an\
> >       \ extra 10 (3d6) damage of the weapon's type."
> >     "name": "Undead Slayer"
> > "actions":
> >   - "desc": "Rictavio makes two attacks with his sword cane."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d6\
> >       \ + 1) bludgeoning damage (wooden cane) or piercing damage (silvered sword)."
> >     "name": "Sword Cane"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/rictavio-cos.webp"
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
> > *Source: Curse of Strahd p. 238*
> >
> > Several months ago, a colorfully dressed half-elf bard came to Barovia in a carnival wagon, with a pet monkey on his shoulder. He took over an abandoned tower on Lake Baratok before rolling into the town of Vallaki several months later. Claiming to be a carnival ringmaster in search of new actors, he began regaling locals with tales of distant lands.
> >
> > #### Monster Hunter
> >
> > The half-elf ringmaster is, in fact, a legendary human vampire hunter named Rudolph van Richten. Van Richten's tale is a sad one. A scholar and doctor from a land called Darkon, he married his childhood sweetheart, Ingrid, and together they had a son, Erasmus. When he was fourteen, Erasmus was stolen away by Vistani and sold to a vampire named Baron Metus to be used as a companion. By the time van Richten found his son, it was too late: the baron had already transformed Erasmus into a vampire spawn. Erasmus begged his father to end his suffering, which van Richten did by pounding a wooden stake through his son's chest. Baron Metus avenged that deed by killing van Richten's wife, and van Richten has lived with the horror of his family's destruction ever since. After destroying Baron Metus in turn, van Richten sought revenge against the Vistani and took up a life of hunting evil monsters.
> >
> > #### The Waiting Game
> >
> > Van Richten isn't a young man anymore. He knows his road is coming to an end, but his work isn't done. He has come to Barovia to kill Strahd von Zarovich, the greatest vampire of them all. Van Richten has studied Strahd for years and knows he can't hope to best the vampire in a straight-up confrontation: he must wait for the right moment to strike. He has good evidence to suggest that Strahd periodically hibernates in his coffin, sometimes for years, when all is quiet in the realm. While he bides his time, van Richten hides in plain sight with the aid of a hat of disguise, his thoughts protected by a ring of mind shielding. He is trying to learn more about the Keepers of the Feather - a society of wereravens that oppose Strahd - while trying not to expose the secret society to their mutual enemy. He thinks the wereravens might prove helpful when the time comes. Van Richten also wants to take out as many of Strahd's spies as he can, starting with evil Vistani.
> >
> > ##### Man with a Plan
> >
> > Van Richten doesn't know that his former protégé, a good-aligned Vistana named Ezmerelda d'Avenir, has come to Barovia looking for him. He taught her many of his monster-hunting techniques, but she doesn't know all of his tricks and disguises. So far, their paths haven't crossed. In the event that van Richten becomes aware of Ezmerelda's presence, he does his utmost to protect her without putting his own plans in jeopardy. If he can manipulate a party of adventurers into keeping an eye on her, he will do so.
> >
> > Van Richten works alone. A curse placed on him long ago by a Vistani seer brings doom to those he befriends. Furthermore, he believes too much is at stake to risk exposure. Consequently, if he thinks he's in danger of being unmasked, he retreats to his tower (see chapter 11) or some other quiet corner of Strahd's domain.
> >
> > - **Ideal.** "Evil cannot go unchallenged."  
> > - **Bond.** "To protect those I love, I must keep them distant and hidden from my enemies."  
> > - **Flaw.** "I am cursed. Thus, I will never have peace."  

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
