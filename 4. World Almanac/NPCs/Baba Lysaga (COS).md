---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/11
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images:
  - 4. World Almanac/NPCs/img/baba-lysaga.webp
aliases:
  - Baba Lysaga
alignment: Chaotic Evil
relationships:
  - target: "[[4. World Almanac/NPCs/Mab.md|Mab]]"
    type: ally
    note: of convenience
  - target: "[[4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd Von Zarovich]]"
    type: son
    note: believes herself his true mother; she was his midwife
  - target: "[[4. World Almanac/Deities/Mother Night.md|Mother Night]]"
    type: worships
  - target: "[[4. World Almanac/Factions/Keepers of the Feather.md|Keepers of the Feather]]"
    type: enemy
  - target: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
    type: enemy
    note: avenging Strahd
party_relationships:
  Midnight Covenant: Enemy
location: '[[4. World Almanac/Places of Interest/Ruins of Berez.md|Ruins of Berez]]'
gist: ""
summary: ""
revealed: {}
reveal: {}
facts:
  - text: Baba Lysaga traded Mab a future favor for a pack of yeth hounds and a glamour that lets her pass as a fey bargain-broker.
    learned: {}
  - text: Baba Lysaga means to trap Strahd's killers the moment they enter fey territory.
    learned: {}
pronounced: BAH-bah LEE-sah-gah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 532
occupation: []
description: >-
  A hunched, ancient crone with skin like stone and eyes that have watched
  Strahd's entire existence — she is powerful, unkillable by ordinary means, and
  utterly consumed by devotion to a son who has never once called her mother.
history: >-
  Baba Lysaga was midwife to Strahd's birth and secretly believes herself his
  true mother, having placed the "spark of magic" in him as a baby and sung over
  his crib on stormy nights. Queen Ravenovia banished her for it, and Lysaga
  never saw Strahd again — yet she followed him to Barovia and has lived in its
  shadow ever since, sacrificing to Mother Night for the power to protect him
  from every threat, real or imagined.
personality: 'Mad, obsessed, powerful'
ideal: No love is greater than a mother's love for her son.
bond: I am the mother of Strahd. Anyone who disputes this fact can rot.
flaw: >-
  I will not rest until the last of my son's enemies are destroyed. Her
  obsession with Strahd blinds her to other threats
goals: >-
  Avenge Strahd's murder; capture or kill those responsible, above all the one
  who dealt the final blow; make them pay for what they took from her hut
likes: 'Magic, Strahd, her creeping hut'
dislikes: 'Intruders in Berez, those who oppose Strahd, the light'
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
> > "name": "Baba Lysaga (COS)"
> > "size": "Medium"
> > "type": "humanoid"
> > "subtype": "human, shapechanger"
> > "alignment": "Chaotic Evil"
> > "ac": !!int "15"
> > "ac_class": "natural armor"
> > "hp": !!int "120"
> > "hit_dice": "16d8 + 48"
> > "modifier": !!int "0"
> > "stats":
> >   - !!int "18"
> >   - !!int "10"
> >   - !!int "16"
> >   - !!int "20"
> >   - !!int "17"
> >   - !!int "13"
> > "speed": "30 ft."
> > "saves":
> >   - "wisdom": !!int "7"
> > "skillsaves":
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     "desc": "+13"
> >   - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
> >     "desc": "+13"
> > "gear":
> >   - "[[/5. Mechanics/Items/Quarterstaff.md|quarterstaff]]"
> > "senses": "passive Perception 13"
> > "languages": "Abyssal, Common, Draconic, Dwarvish, Giant"
> > "cr": "11"
> > "traits":
> >   - "desc": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is\
> >       \ Intelligence (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga\
> >       \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Acid Splash.md|acid\
> >       \ splash]], [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
> >       \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
> >       \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
> >       \ (4 slots):** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Magic Missile.md|magic missile]],\
> >       \ [[/5. Mechanics/Spells/Sleep.md|sleep]], [[/5. Mechanics/Spells/Witch Bolt.md|witch bolt]]\n\
> >       \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Crown Of Madness.md|crown of madness]],\
> >       \ [[/5. Mechanics/Spells/Enlarge Reduce.md|enlarge/reduce]], [[/5. Mechanics/Spells/Misty Step.md|misty step]]\n\
> >       \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
> >       \ [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
> >       \n**4th level (3 slots):** [[/5. Mechanics/Spells/Blight.md|blight]], [[/5. Mechanics/Spells/Evards Black Tentacles.md|Evard's\
> >       \ black tentacles]], [[/5. Mechanics/Spells/Polymorph.md|polymorph]]\n\
> >       \n**5th level (2 slots):** [[/5. Mechanics/Spells/Cloudkill.md|cloudkill]], [[/5. Mechanics/Spells/Geas.md|geas]],\
> >       \ [[/5. Mechanics/Spells/Scrying.md|scrying]]\n\n**6th level (1 slots):** [[/5. Mechanics/Spells/Programmed Illusion.md|programmed\
> >       \ illusion]], [[/5. Mechanics/Spells/True Seeing.md|true seeing]]\n\
> >       \n**7th level (1 slots):** [[/5. Mechanics/Spells/Finger Of Death.md|finger of death]],\
> >       \ [[/5. Mechanics/Spells/Mirage Arcane.md|mirage arcane]]\n\n**8th level (1 slots):**\
> >       \ [[/5. Mechanics/Spells/Power Word Stun.md|power word stun]]"
> >     "name": "Spellcasting"
> >   - "desc": "Baba Lysaga can use an action to polymorph into a [[/5. Mechanics/Bestiary/Beast/Swarm Of Insects.md|swarm of insects]]\
> >       \ (flies), or back into her true form. While in swarm form, she has a walking\
> >       \ speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms\
> >       \ with her, but nothing she is carrying does."
> >     "name": "Shapechanger"
> >   - "desc": "Baba Lysaga is shielded against divination magic, as though protected\
> >       \ by a [[/5. Mechanics/Spells/Nondetection.md|nondetection]] spell."
> >     "name": "Blessing of Mother Night"
> > "actions":
> >   - "desc": "Baba Lysaga makes three attacks with her quarterstaff."
> >     "name": "Multiattack"
> >   - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7 (1d6\
> >       \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if wielded with\
> >       \ two hands."
> >     "name": "Quarterstaff"
> >   - "desc": "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in\
> >       \ an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It\
> >       \ remains until it dies or until Baba Lysaga dismisses it as an action."
> >     "name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)"
> > "source":
> >   - "CoS"
> > "image": "/4. World Almanac/NPCs/token/baba-lysaga-cos.webp"
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
> > Strahd's death is barely a week old to her — she has not had time to cool, only to plan. She has struck a bargain with Mab, Queen of Air and Darkness, trading a future favor for a pack of Yeth Hounds and a glamour that lets her pass as a fey bargain-broker. She intends to use it to lure Strahd's killers into a trap the instant they set foot in fey territory — she is a schemer and a shapechanger, not a duelist, and will not fight fair if she can help it. If the trap turns against her, she has an escape already arranged and will not stay to be finished off.
> >
> > ### General Notes
> >
> > #### Source
> > *Source: Curse of Strahd p. 228*
> >
> > Two women gave life to Strahd von Zarovich. The first was Queen Ravenovia van Roeyen, Strahd's biological mother. The second was the queen's midwife, a devout follower of Mother Night named Baba Lysaga. Although it was the former who raised Strahd and enabled him to follow in his father's footsteps, it was the latter who sensed a potential for greatness and darkness in Strahd surpassing that of any other mortal. Lysaga believed then, as she believes now, that she is Strahd's true mother.
> >
> > #### Other Mother
> >
> > When Strahd was still a baby in his crib, Baba Lysaga cast protective spells on him and crept into his nursery on stormy nights to sing magical rhymes to him. She also placed the "spark of magic" in him, ensuring that he would become a spellcaster.
> >
> > Baba Lysaga's unhealthy attachment to the baby Strahd did not go unnoticed. After she received several disturbing reports, Queen Ravenovia was forced to banish the midwife from the kingdom. Lysaga never saw Strahd again, but she has succeeded in staying alive to witness the triumphs of her beloved boy, who, in her mind, is eternally blessed. Despite the horrors Strahd has wrought, Lysaga still envisions him as the perfect child she delivered into the world. Strahd is the only thing in her life that matters to her.
> >
> > #### Mother Nearest
> >
> > During her exile, Baba Lysaga made countless sacrifices to Mother Night, pleading with the goddess to afflict Queen Ravenovia with ill health and visit death upon her. Lysaga eventually got her wish, and after Strahd settled in the valley of Barovia, Lysaga moved as close to him as she dared to.
> >
> > In the filth-ridden depths of her heart, Lysaga knows that Strahd would never accept her as his true mother, nor could she bear his rejection. As a result, she has never confronted him. She would rather exist in perpetual denial, whiling away the days, months, and years practicing fell magic and looking for ways to help her "son."
> >
> > #### Raven Bane
> >
> > Baba Lysaga has allies in Castle Ravenloft - a coven of witches. Through the aid of these witches, Lysaga recently uncovered a potential threat to Strahd: a secret society of wereravens called the Keepers of the Feather, a group that uses ordinary ravens as their spies.
> >
> > Strahd doesn't consider the wereravens a serious threat, but Lysaga has chosen to make them the bane of her existence. After much searching and scrying, she discovered a wereraven refuge at the Wizard of Wines winery (chapter 12), and she has begun to wage war against it. In addition, she has forged an alliance with the mad druids that haunt Yester Hill (chapter 14), convincing them that she gave birth to Strahd, whom the druids consider a god. With the druids on her side, she expects to rid Barovia of its wereraven menace.
> >
> > #### Gifts of Mother Night
> >
> > The goddess Mother Night has bestowed magical gifts on Baba Lysaga as rewards for her ceaseless devotion to Strahd. Her skin has the resilience of stone, she is resistant to harmful magic, and she is shielded against divination magic. Mother Night has also imparted to Lysaga the secret of longevity, which requires her to bathe in the blood of beasts on nights of the new moon. Failure to do so causes Lysaga to age rapidly, becoming mere dust and bones in a matter of seconds.
> >
> > - **Ideal.** "No love is greater than a mother's love for her son."  
> > - **Bond.** "I am the mother of Strahd. Anyone who disputes this fact can rot."  
> > - **Flaw.** "I will not rest until the last of my son's enemies are destroyed."  

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
