---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/humanoid/elf
condition: dead
images:
  - 4. World Almanac/NPCs/img/rahadin.webp
aliases:
  - Rahadin
alignment: Lawful Evil
relationships: [ { target: "[[4. World Almanac/Factions/House von Zarovich.md|House von Zarovich]]", type: member, note: honorary family }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: serves }, { target: "[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]", type: works-at, note: chamberlain } ]
party_relationships:
  Midnight Covenant: Enemy
location: null
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: RAH-hah-din
race: Dusk Elf
gender: male
age: 500
occupation:
  - Castle chamberlain
  - General
personality: >-
  Cold, exacting, and utterly without mercy for weakness — a perfect instrument
  of his master's will.
ideal: Loyalty is everything.
bond: >-
  I am a son of King Barov von Zarovich, and I will serve his son - my brother
  and lord - forever.
flaw: >-
  I have slain thousands of men. I will slaughter thousands more to preserve the
  von Zarovich legacy.
goals: >-
  To serve Strahd's interests perfectly in all things — historically, as
  chamberlain and enforcer of Castle Ravenloft.
likes: 'Order, discipline, being needed'
dislikes: 'Incompetence, disloyalty, anything that threatens the von Zarovich legacy'
description: >-
  A towering, ancient dusk elf chamberlain whose mere presence carries the
  howling screams of the thousands he has killed.
history: >-
  Exiled from his own people for refusing to bow to a corrupt prince, Rahadin
  found a new lord in King Barov and helped him conquer the dusk elves entirely,
  earning a place as an honorary member of the von Zarovich family. He served as
  one of Strahd's generals through the wars, then as castle chamberlain for
  centuries after — enforcing his master's exacting standards on the terrified
  castle staff, disposing of unwanted women once Strahd tired of them, and
  personally massacring the female dusk elves and mutilating Kasimir Velikov
  after Patrina Velikovna's people stoned her to death. His loyalty to Strahd
  never wavered in five hundred years of service.
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
> > "name": "Rahadin (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "elf"
> > "alignment": "Lawful Evil"
> > "ac": !!int "18"
> > "ac_class": "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
> > "hp": !!int "135"
> > "hit_dice": "18d8 + 54"
> > "modifier": !!int "6"
> > "stats":
> >   - !!int "14"
> >   - !!int "22"
> >   - !!int "17"
> >   - !!int "15"
> >   - !!int "16"
> >   - !!int "18"
> > "speed": "35 ft."
> > "saves":
> >   - "constitution": !!int "7"
> >   - "wisdom": !!int "7"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+8"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
> >     "desc": "+12"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+11"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+14"
> > "gear":
> >   - "[[/5. Mechanics/Items/Scimitar.md|scimitar]]"
> > "senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
> >   \ 21"
> > "languages": "Common, Elvish"
> > "cr": "10"
> > "traits":
> >   - "desc": "Rahadin's innate spellcasting ability is Intelligence. He can innately\
> >       \ cast the following spells, requiring no components:\n\n**3/day:** [[/5. Mechanics/Spells/Misty Step.md|misty step]],\
> >       \ [[/5. Mechanics/Spells/Phantom Steed.md|phantom steed]]\n\n**1/day:** [[/5. Mechanics/Spells/Magic Weapon.md|magic\
> >       \ weapon]], [[/5. Mechanics/Spells/Nondetection.md|nondetection]]"
> >     "name": "Innate Spellcasting"
> >   - "desc": "Any creature within 10 feet of Rahadin that isn't protected by a [[/5. Mechanics/Spells/Mind Blank.md|mind\
> >       \ blank]] spell hears in its mind the screams\
> >       \ of the thousands of people Rahadin has killed. As a bonus action, Rahadin\
> >       \ can force all creatures that can hear the screams to make a DC 16 Wisdom saving\
> >       \ throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half\
> >       \ as much damage on a successful one."
> >     "name": "Deathly Choir"
> >   - "desc": "Rahadin has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
> >       \ and magic can't put him to sleep."
> >     "name": "Fey Ancestry"
> >   - "desc": "Rahadin can attempt to hide even when he is only lightly obscured by\
> >       \ foliage, heavy rain, falling snow, mist, and other natural phenomena."
> >     "name": "Mask of the Wild"
> > "actions":
> >   - "desc": "Rahadin attacks three times with his scimitar, or twice with his [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
> >       \ darts."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 9\
> >       \ (1d6 + 6) slashing damage."
> >     "name": "Scimitar"
> >   - "desc": "*Ranged Weapon Attack:* +10 to hit, range 20/60 ft., one target. *Hit:*\
> >       \ 8 (1d4 + 6) piercing damage plus 5 (2d4) poison damage."
> >     "name": "Poisoned Dart"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/rahadin-cos.webp"
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
> > *Source: Curse of Strahd p. 237*
> >
> > Rahadin, the dusk elf chamberlain of Castle Ravenloft, has served Strahd's family faithfully for nearly five hundred years. He is Strahd's eternal servant, a longtime comrade-in-arms, and a ruthless warrior who has killed thousands in his lifetime.
> >
> > #### Exile
> >
> > Rahadin was exiled for refusing to bow down to a dusk elf prince whom he considered weak and corrupt. When the dusk elves later declined to pay fealty to King Barov, Rahadin helped Barov conquer them. The elf kingdom's royal line was obliterated, the dusk elves hunted like rabbits. The few that survived were either subjugated or forced to live among the Vistani. So pleased was Barov with Rahadin that the king made the dusk elf an honorary member of his family.
> >
> > #### Chamberlain
> >
> > After Barov died, Rahadin continued to fight as one of Strahd's generals. When the wars ended and Strahd turned his attention to building Castle Ravenloft, Rahadin saw to it that wizards and artisans were brought to Barovia. Years later, Strahd appointed Rahadin his castle chamberlain. Rahadin was pleased to do whatever Strahd asked of him, and he instilled terror in the castle staff by routinely flogging those who didn't perform their duties to his exacting standards.
> >
> > When a dusk elf named Patrina Velikovna came knocking on Strahd's door, Rahadin could see that she intrigued Strahd, but Rahadin was suspicious of her motives. Patrina tried to seduce Strahd with the prospect of immortality - something Strahd desired above all. She told him of a vault of forbidden lore called the Amber Temple, where the secret of gaining immortality was hidden. While Strahd was off exploring the temple, Rahadin handled all of his master's affairs and began searching for a woman who could tear Strahd away from Patrina Velikovna. In this task, he failed. His goal was fulfilled, however, when Sergei, Strahd's brother, found Tatyana.
> >
> > Tatyana was Strahd's type - a woman of exquisite beauty and gentle manner. When Strahd returned to Ravenloft, the young woman instantly caught his eye, and Rahadin had the pleasure of informing Patrina that her presence at the castle was no longer desired.
> >
> > Rahadin's loyalty didn't waver after Tatyana died and Strahd became a vampire. Rahadin continued to do his master's bidding. Eager to put Tatyana out of his mind, Strahd lured more women to the castle, taking several of them as brides before draining their lives and turning them into vampire spawn. Rahadin would see to it that these women were lavished with jewels and fine clothes, and made comfortable during their stay in Ravenloft.
> >
> > #### Executioner
> >
> > Patrina Velikovna and her people were living among the Vistani when they heard of Tatyana's death and Strahd's curse. The ageless Patrina returned to Ravenloft in the hope of winning Strahd's love. This time, it was clear that Patrina craved Strahd's power and that Strahd would never love her. Rahadin assumed that Patrina would suffer the same fate as those women who had come before her. He was proven wrong when Patrina's own people stoned her to death to keep Strahd from claiming her as his wife.
> >
> > Strahd was upset that the dusk elves had taken Patrina from him. After securing her body and entombing it in the catacombs of Ravenloft, Strahd sent Rahadin to punish the dusk elves. Rahadin slew the female elves so that the males couldn't breed. He also sliced off the ears of Patrina's brother, Kasimir, who had orchestrated the stoning.
> >
> > #### Screams of the Dead
> >
> > So dreadful a creature is Rahadin that anyone who stands within 10 feet of him can hear the howling screams of the countless men and women he has killed in his lifetime. Rahadin can't hear them, nor would he be haunted by them if he could. The only thing he cares about is Strahd von Zarovich, for whom he would gladly give his life.
> >
> > - **Ideal.** "Loyalty is everything."  
> > - **Bond.** "I am a son of King Barov von Zarovich, and I will serve his son - my brother and lord - forever."  
> > - **Flaw.** "I have slain thousands of men. I will slaughter thousands more to preserve the von Zarovich legacy."  

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
