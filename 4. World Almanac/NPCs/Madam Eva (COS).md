---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - Madam Eva
alignment: Chaotic Neutral
relationships: []
party_relationships:
  Midnight Covenant: Friendly
location: '[[4. World Almanac/Places of Interest/Tser Pool.md|Tser Pool]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: MAD-ame EE-vah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 67
occupation:
  - Seer
groups: []
religions: []
personality: 'Mysterious, wise, enigmatic'
ideal: I wish Strahd to be free of his curse.
bond: The Vistani are my people now. The welfare and freedom of the Vistani people.
flaw: >-
  The people whose fates I divine aren't important. They are but the means to an
  end. Her cryptic nature can sometimes alienate others.
goals: To guide the souls that come to her towards their destiny.
likes: 'Reading fortunes, the respect of her people, the mystic arts.'
dislikes: 'Those who disrespect the Vistani, closed-mindedness.'
description: >-
  An ageless crone who appears to be in her seventies, wrapped in the trappings
  of a Vistani fortune-teller — though she is not truly one of them, and far
  older than she looks.
history: >-
  Born Katarina, the secret daughter of King Barov and a Vistani woman, Madam
  Eva is Strahd's half-sister, though he has never known it. She served as a
  maid in Castle Ravenloft and witnessed Sergei and Tatyana's wedding firsthand
  before fleeing to the Vistani after Strahd's madness broke. She traded her
  youth to Mother Night for the power of foresight, becoming the ageless seer
  known as Madam Eva — and has spent centuries since sending Vistani wagons out
  into other worlds to bring strangers to Barovia, hoping one of them will
  finally find a way to end Strahd's curse, or free him from it.
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
> > "name": "Madam Eva (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Chaotic Neutral"
> > "ac": !!int "10"
> > "hp": !!int "88"
> > "hit_dice": "16d8 + 16"
> > "modifier": !!int "0"
> > "stats":
> >   - !!int "8"
> >   - !!int "11"
> >   - !!int "12"
> >   - !!int "17"
> >   - !!int "20"
> >   - !!int "18"
> > "speed": "20 ft."
> > "saves":
> >   - "constitution": !!int "5"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+8"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+13"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
> >     "desc": "+8"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+9"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
> >     "desc": "+7"
> > "gear":
> >   - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
> > "senses": "passive Perception 19"
> > "languages": "Abyssal, Common, Elvish, Infernal"
> > "cr": "10"
> > "traits":
> >   - "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
> >       \ (spell save DC 17, +9 to hit with spell attacks). Madam Eva has the following\
> >       \ cleric spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Light.md|light]],\
> >       \ [[/5. Mechanics/Spells/Mending.md|mending]], [[/5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
> >       \ [[/5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n**1st level (4 slots):**\
> >       \ [[/5. Mechanics/Spells/Bane.md|bane]], [[/5. Mechanics/Spells/Command.md|command]],\
> >       \ [[/5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]], [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection\
> >       \ from evil and good]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
> >       \ [[/5. Mechanics/Spells/Protection From Poison.md|protection from poison]], [[/5. Mechanics/Spells/Spiritual Weapon.md|spiritual\
> >       \ weapon]]\n\n**3rd level (3 slots):**\
> >       \ [[/5. Mechanics/Spells/Create Food And Water.md|create food and water]], [[/5. Mechanics/Spells/Speak With Dead.md|speak\
> >       \ with dead]], [[/5. Mechanics/Spells/Spirit Guardians.md|spirit guardians]]\n\
> >       \n**4th level (3 slots):** [[/5. Mechanics/Spells/Divination.md|divination]], [[/5. Mechanics/Spells/Freedom Of Movement.md|freedom\
> >       \ of movement]], [[/5. Mechanics/Spells/Guardian Of Faith.md|guardian of faith]]\n\
> >       \n**5th level (2 slots):** [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]],\
> >       \ [[/5. Mechanics/Spells/Raise Dead.md|raise dead]]\n\n**6th level (1 slots):**\
> >       \ [[/5. Mechanics/Spells/Find The Path.md|find the path]], [[/5. Mechanics/Spells/Harm.md|harm]],\
> >       \ [[/5. Mechanics/Spells/True Seeing.md|true seeing]]\n\n**7th level (1 slots):**\
> >       \ [[/5. Mechanics/Spells/Fire Storm.md|fire storm]], [[/5. Mechanics/Spells/Regenerate.md|regenerate]]\n\
> >       \n**8th level (1 slots):** [[/5. Mechanics/Spells/Earthquake.md|earthquake]]"
> >     "name": "Spellcasting"
> > "actions":
> >   - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 2 (1d4)\
> >       \ piercing damage."
> >     "name": "Dagger"
> >   - "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
> >       \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While\
> >       \ cursed, the target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] and\
> >       \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]. The curse lasts until\
> >       \ ended with a [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
> >       \ spell, a [[/5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
> >       \ magic. When the curse ends, Madam Eva takes 5d6 psychic damage."
> >     "name": "Curse (Recharges after a Long Rest)"
> >   - "desc": "Madam Eva targets one creature that she can see within 10 feet of her\
> >       \ and casts one of the following spells on the target (save DC 17), requiring\
> >       \ neither somatic nor material components to do so: [[/5. Mechanics/Spells/Animal Friendship.md|animal friendship]],\
> >       \ [[/5. Mechanics/Spells/Charm Person.md|charm person]], or [[/5. Mechanics/Spells/Hold Person.md|hold person]].\
> >       \ If the target succeeds on the initial saving throw, Madam Eva is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
> >       \ until the end of her next turn. Once a target succeeds on a saving throw against\
> >       \ this effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
> >     "name": "Evil Eye (Recharges after a Short or Long Rest)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/madam-eva-cos.webp"
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
*Source: Curse of Strahd p. 233*

The fortune-teller Madam Eva lives among the Vistani but isn't truly one of them. She appears to be in her seventies, but she is, in fact, much older.

## Royal Blood

Madam Eva is Strahd's half-sister, though Strahd is unaware of this fact. Her real name is Katarina, and she is the daughter of a Vistani woman whom King Barov, Strahd's father, took to his bed during one of his many crusades. Madam Eva knows she is Strahd's half-sister but has told no one of the royal blood flowing through her veins.

## Mother Night

Over four hundred years ago, Katarina came to Barovia and insinuated herself into Strahd's court, working as a maid in Castle Ravenloft. She came to know the castle like the back of her hand, and she was present for the wedding of Sergei and Tatyana. After Strahd went mad and murdered his brother, she fled the castle and took refuge with the Vistani. Later, she forged a pact with the goddess Mother Night, trading her youth for the power to undo the evil that Strahd had wrought. Mother Night transformed Katarina into an ageless crone gifted with the power of magical foresight. In the guise of Madam Eva, she uses this ability to help Strahd. She can send her Vistani out in their wagons to visit other worlds and bring adventurers to Strahd's domain, in hopes that they will find a way to destroy the vampire or set Strahd free.

## For the Love of Strahd

The Dark Powers of Ravenloft would consider Madam Eva a worthy choice to replace Strahd as the master of Ravenloft, but she has all the power she desires and doesn't seek to supplant him. She would rather help Strahd find someone else to succeed him, although she has grave doubts about her ability to locate such an individual.

None of Madam Eva's Vistani kin know her true identity or purpose. They puzzle over her desire to remain in Barovia.

- **Ideal.** "I wish Strahd to be free of his curse."  
- **Bond.** "The Vistani are my people now."  
- **Flaw.** "The people whose fates I divine aren't important. They are but the means to an end."  

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
