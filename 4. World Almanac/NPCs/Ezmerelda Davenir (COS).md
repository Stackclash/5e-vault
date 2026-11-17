---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac/NPCs/img/ezmerelda-davenir.webp
aliases:
  - Ezmerelda d'Avenir
alignment: Chaotic Good
relationships: [ { target: "[[4. World Almanac/NPCs/Rictavio (COS).md|Rictavio]]", type: mentor, note: van Richten's former protégé }, { target: "[[4. World Almanac/Factions/Vistani.md|Vistani]]", type: member, note: by birth; ran away at fifteen }, { target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]", type: enemy } ]
party_relationships:
  Midnight Covenant: Ally
location: >-
  [[4. World Almanac/Places of Interest/Van Richten's Tower.md|Van Richten's
  Tower]]
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
pronounced: ez-meh-REL-da dah-veh-NEER
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 33
occupation: []
personality: 'Determined, fiercely independent, pragmatic'
ideal: >-
  Evil that feeds on the innocent is the worst of all evils and must be
  destroyed.
bond: 'My mentor and teacher, Dr. Rudolph van Richten, is like a father to me.'
flaw: I go where angels fear to tread.
goals: 'To defeat Strahd, to become the greatest monster hunter in the land'
likes: 'Knowledge about monsters, vanquishing evil, proving her skill and courage'
dislikes: 'Cowardice, betrayal, the undead, those who underestimate her'
description: >-
  A capable, battle-scarred Vistana in her thirties, dressed for monster hunting
  and missing her right leg below the knee to a werewolf's bite — replaced by a
  well-crafted prosthetic she's long since adapted to.
history: >-
  As a girl, Ezmerelda watched her own family kidnap Rudolph van Richten's
  teenage son and sell him to a vampire — a memory that haunted her into running
  away from home at fifteen. She tracked van Richten down two years later,
  talked her way past his blade, and spent two years at his side learning to
  hunt monsters before their friendship frayed and they parted ways. Since then
  she's built a small fortune of her own, and on hearing that her old mentor had
  gone after Strahd himself, she followed him into Barovia — only to find his
  tower abandoned and van Richten nowhere to be found.
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
> > "name": "Ezmerelda Davenir (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human"
> > "alignment": "Chaotic Good"
> > "ac": !!int "17"
> > "ac_class": "[[/5. Mechanics/Items/1 Armor.md|+1 studded leather armor]]"
> > "hp": !!int "82"
> > "hit_dice": "11d8 + 33"
> > "modifier": !!int "4"
> > "stats":
> >   - !!int "14"
> >   - !!int "19"
> >   - !!int "16"
> >   - !!int "16"
> >   - !!int "11"
> >   - !!int "17"
> > "speed": "30 ft."
> > "saves":
> >   - "wisdom": !!int "3"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     "desc": "+9"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
> >     "desc": "+3"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
> >     "desc": "+3"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Performance|Performance]]"
> >     "desc": "+6"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
> >     "desc": "+7"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
> >     "desc": "+6"
> > "gear":
> >   - "[[/5. Mechanics/Items/1 Weapon.md|+1 handaxe]]"
> >   - "[[/5. Mechanics/Items/1 Weapon.md|+1 rapier]]"
> >   - "[[/5. Mechanics/Items/Silvered Weapon.md|silvered shortsword]]"
> > "senses": "passive Perception 16"
> > "languages": "Common, Elvish"
> > "cr": "8"
> > "traits":
> >   - "desc": "Ezmerelda is a 7th-level spellcaster. Her spellcasting ability is Intelligence\
> >       \ (spell save DC 14, +6 to hit with spell attacks). Ezmerelda has the following\
> >       \ wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
> >       \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
> >       \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
> >       \ (4 slots):** [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
> >       \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Darkvision.md|darkvision]], [[/5. Mechanics/Spells/Knock.md|knock]],\
> >       \ [[/5. Mechanics/Spells/Mirror Image.md|mirror image]]\n\n**3rd level (3 slots):**\
> >       \ [[/5. Mechanics/Spells/Clairvoyance.md|clairvoyance]], [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]],\
> >       \ [[/5. Mechanics/Spells/Magic Circle.md|magic circle]]\n\n**4th level (1 slots):**\
> >       \ [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]]"
> >     "name": "Spellcasting"
> >   - "desc": "In addition to her magic armor and weapons, Ezmerelda has two [[/5. Mechanics/Items/Potion Of Greater Healing.md|potions\
> >       \ of greater healing]], six [[/5. Mechanics/Items/Holy Water Flask.md|vials\
> >       \ of holy water]], and three wooden stakes."
> >     "name": "Special Equipment"
> > "actions":
> >   - "desc": "Ezmerelda makes three attacks: two with her +1 rapier and one with her\
> >       \ +1 handaxe or her silvered shortsword."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 9 (1d8\
> >       \ + 5) piercing damage."
> >     "name": "Rapier +1"
> >   - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
> >       \ ft., one target. *Hit:* 6 (1d6 + 3) slashing damage."
> >     "name": "Handaxe +1"
> >   - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7 (1d6\
> >       \ + 4) piercing damage."
> >     "name": "Silvered Shortsword"
> >   - "desc": "Ezmerelda targets one creature that she can see within 30 feet of her.\
> >       \ The target must succeed on a DC 14 Wisdom saving throw or be cursed. While\
> >       \ cursed, the target has vulnerability to one type of damage of Ezmerelda's\
> >       \ choice. The curse lasts until ended with a [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
> >       \ spell, a [[/5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
> >       \ magic. When the curse ends, Ezmerelda takes 3d6 psychic damage."
> >     "name": "Curse (Recharges after a Long Rest)"
> >   - "desc": "Ezmerelda targets one creature that she can see within 10 feet of her\
> >       \ and casts one of the following spells on the target (save DC 14), requiring\
> >       \ neither somatic nor material components to do so: animal friendship, charm\
> >       \ person, or hold person. If the target succeeds on the initial saving throw,\
> >       \ Ezmerelda is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] until the\
> >       \ end of her next turn. Once a target succeeds on a saving throw against this\
> >       \ effect, it is immune to the Evil Eye power of all Vistani for 24 hours."
> >     "name": "Evil Eye (Recharges after a Short or Long Rest)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/ezmerelda-davenir-cos.webp"
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
*Source: Curse of Strahd p. 231*

Ezmerelda d'Avenir, a Vistana, is the protégé of Rudolph van Richten - despite the fact that her first encounter with the vampire hunter was anything but pleasant.

## Witness to Tragedy

When Ezmerelda was a little girl, her family kidnapped van Richten's teenage son, Erasmus, and delivered him into the clutches of a vampire. Even today, years later, she can still hear Erasmus's pleas for mercy. That event haunted her childhood.

Van Richten tracked down Ezmerelda's family soon after the kidnapping, but not before the Vistani had sold the boy. Though van Richten could have done them harm, he instead interrogated Ezmerelda's mother and father on the whereabouts of his missing son. Satisfied with their answers, he spared their lives before departing with the information they had given him. Ezmerelda witnessed van Richten's act of mercy and was deeply moved by it.

## Van Richten's Tragic Tale

At the age of fifteen, Ezmerelda, still troubled by what her family had done to van Richten, ran away from home. After many harrowing adventures, she tracked down van Richten two years later. Thinking she was a Vistana assassin, he put a sword to her throat and threatened to spill her blood. Ezmerelda convinced him that she genuinely wanted to help him find his missing son, whereupon van Richten told her the saddest of tales. He had found his son, who had been transformed into a vampire spawn. When Erasmus pleaded to his father for salvation, van Richten granted his request by ending his existence.

## Farewell

Ezmerelda remained by van Richten's side for two years, helping him track down and slay many creatures of the night. But because van Richten could never bring himself to fully trust a Vistana, he kept secrets from her. The two vampire hunters got on each other's nerves, and their arguments became more frequent. At last, Ezmerelda suggested that they part company with some shred of their friendship still intact, and van Richten agreed.

## Ezmerelda's Secret

Since bidding farewell to van Richten, Ezmerelda has amassed a sizable personal fortune, some of which she used to buy a wagon to carry her vampire-slaying paraphernalia. On one of her less successful adventures, a werewolf bit off her right leg below the knee, and although she avoided being afflicted with lycanthropy, Ezmerelda was sidelined for months. She commissioned a master artisan to craft a prosthetic lower leg and foot. After several tries, he delivered a prosthesis that restored her mobility. She has since adapted well to the false appendage.

## The Great Vampire Hunt

While in the company of a Vistani caravan, Ezmerelda heard a rumor that Rudolph van Richten had gone to Barovia to slay the most powerful vampire of them all. She decided that he might need help and traveled for months to reach Strahd's domain. She rode her wagon to Vallaki and learned about an old tower that seemed the sort of place van Richten would use as a base. When she arrived there, she found some of van Richten's belongings, but of the vampire hunter there was no sign. Although she is anxious to learn the whereabouts of her mentor, she is also eager to earn his trust and respect. To that end, she has been poring over van Richten's research and learning about Strahd and Castle Ravenloft, with every intention of dispatching the vampire herself.

## Tarokka Deck

Ezmerelda keeps a [[/5. Mechanics/Decks/Tarokka Deck (COS).md|deck of tarokka cards]] in her wagon (chapter 11, area V1). Although the cards aren't magical, Ezmerelda can use them to perform a card reading for the characters (see chapter 1), like the one that can be performed by Madam Eva.

- **Ideal.** "Evil that feeds on the innocent is the worst of all evils and must be destroyed."  
- **Bond.** "My mentor and teacher, Dr. Rudolph van Richten, is like a father to me."  
- **Flaw.** "I go where angels fear to tread."  

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
