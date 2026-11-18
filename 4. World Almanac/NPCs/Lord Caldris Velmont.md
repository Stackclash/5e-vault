---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Umbral Athenaeum.md|The Umbral Athenaeum]]"
condition: healthy
gist: ""
summary: "The Bruokdon noble the party freed from the doppelganger who had taken his place."
revealed:
  Midnight Covenant: true
reveal: {}
facts:
  - text: The Silent Ascendency captured Velmont and took over his magic-item smuggling operation.
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S43 The Two Lord Velmonts.md|S43 The Two Lord Velmonts]]"
  - text: Velmont built the smuggling ring himself, years before the Ascendency seized it.
    learned: {}
images:
  - z_Assets/NPCs/Caldris Velmont.png
relationships: [ { target: "[[4. World Almanac/Factions/Umbral Athenaeum Council.md|Umbral Athenaeum Council]]", type: member }, { target: "[[4. World Almanac/Factions/Silent Ascendency.md|Silent Ascendency]]", type: enemy }, { target: "[[4. World Almanac/NPCs/Marrow.md|Marrow]]", type: enemy } ]
tags:
  - npc
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Velmont
  - Lord Caldris Velmont
pronounced: KAL-dris VEL-mont
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 48
alignment: Neutral Evil
occupation:
  - Councilor of Enchantment
description: |-
  Lord Caldris Velmont is a strikingly handsome human dressed in elegant aristocratic robes adorned with gold-thread embroidery. His dark hair is always perfectly styled, and several rings bearing subtle enchantment runes adorn his fingers.
  His voice is smooth and persuasive, and he maintains an easy smile that puts others at ease.
  Yet something about him always feels slightly rehearsed — as if every gesture and expression were chosen carefully in advance.
  When he studies someone, his eyes sharpen with quiet calculation, like a chess player evaluating a board.
history: |-
  Caldris Velmont began his career as a royal advisor to a minor noble house where his skill in persuasion and subtle enchantments quickly elevated his influence. His political maneuvering eventually secured him a position within the Umbral Athenaeum.
  Over time he cultivated relationships with nobles, merchants, and powerful spellcasters across Bruokdon.
  Within the council he presents himself as a voice of diplomacy and stability — though some quietly suspect his ambitions reach far beyond the Institute.
personality: Charming and manipulative.
ideal: Control creates peace.
bond: Secretly loyal to powerful political patrons.
flaw: Believes he is smarter than everyone else.
goals: Expand the Institute's influence over Bruokdon politics. Presently, quiet revenge against the Silent Ascendency for capturing, replacing, and discarding him.
likes: elegant parties, persuasion
dislikes: unpredictability
party_relationships:
  Midnight Covenant: Disgruntled
voice: Proper speech
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
> > *Reskin of [[5. Mechanics/Bestiary/Humanoid/Archmage.md|Archmage]] (CR 12, MM p.342) — same chassis, spell list reflavored toward Enchantment/control to match his role as Councilor of Enchantment. See DM Notes for design rationale.*
> > ```statblock
> > name: Lord Caldris Velmont
> > size: Medium
> > type: humanoid
> > subtype: human
> > alignment: Neutral Evil
> > ac: 12
> > ac_class: "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
> > hp: 99
> > hit_dice: 18d8 + 18
> > modifier: 2
> > speed: 30 ft.
> > stats:
> >   - 10
> >   - 14
> >   - 12
> >   - 20
> >   - 15
> >   - 16
> > saves:
> >   - intelligence: 9
> >   - wisdom: 6
> > skillsaves:
> >   - name: "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
> >     desc: "+13"
> >   - name: "[[/5. Mechanics/Rules/Skills.md#History|History]]"
> >     desc: "+13"
> >   - name: "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
> >     desc: "+11"
> >   - name: "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
> >     desc: "+7"
> > senses: passive Perception 12
> > languages: Common, Elvish, Infernal, plus any three other languages
> > cr: "12"
> > traits:
> >   - name: Spellcasting
> >     desc: |-
> >       Velmont is an 18th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast [[/5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[/5. Mechanics/Spells/Invisibility.md|invisibility]] at will and has the following wizard spells prepared:
> >
> >       **Cantrips (at will):** [[/5. Mechanics/Spells/Friends.md|friends]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Message.md|message]], [[/5. Mechanics/Spells/Minor Illusion.md|minor illusion]]
> >
> >       **1st level (4 slots):** [[/5. Mechanics/Spells/Charm Person.md|charm person]], [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]*, [[/5. Mechanics/Spells/Tashas Hideous Laughter.md|Tasha's hideous laughter]]
> >
> >       **2nd level (3 slots):** [[/5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]
> >
> >       **3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]], [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]]
> >
> >       **4th level (3 slots):** [[/5. Mechanics/Spells/Banishment.md|banishment]], [[/5. Mechanics/Spells/Confusion.md|confusion]], [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]*
> >
> >       **5th level (3 slots):** [[/5. Mechanics/Spells/Dominate Person.md|dominate person]], [[/5. Mechanics/Spells/Modify Memory.md|modify memory]], [[/5. Mechanics/Spells/Scrying.md|scrying]]
> >
> >       **6th level (1 slot):** [[/5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]
> >
> >       **7th level (1 slot):** [[/5. Mechanics/Spells/Teleport.md|teleport]]
> >
> >       **8th level (1 slot):** [[/5. Mechanics/Spells/Mind Blank.md|mind blank]]*
> >
> >       **9th level (1 slot):** [[/5. Mechanics/Spells/Time Stop.md|time stop]]
> >
> >       *Velmont casts these spells on himself before combat.
> >   - name: Magic Resistance
> >     desc: Velmont has advantage on saving throws against spells and other magical effects.
> >   - name: Rings of Silent Passage
> >     desc: Velmont wears several enchanted rings. Up to 3 times per day, he can cast misty step as a bonus action without expending a spell slot.
> > actions:
> >   - name: Ring-Channeled Bolt
> >     desc: "*Ranged Spell Attack:* +9 to hit, range 60 ft., one target. *Hit:* 4 (1d4 + 2) force damage, loosed from the runes etched into his rings rather than any weapon."
> > source:
> >   - Homebrew
> > ```
>
> > [!dm] DM
> > ```dataviewjs
> > await dv.view("views/dmPanel", {current: dv.current()})
> > ```
> >
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes
> > ### Hidden Details
> >
> > Revealed to the party (S43): the Silent Ascendency captured him and set up the magic-item smuggling operation; he did not say — and they did not ask — how a captive academic came to have a fully operational smuggling ring for a doppelganger to inherit.
> >
> > STILL DM-ONLY: the ring predates the Ascendency entirely. Velmont built it himself over years, quietly moving stolen and grey-market magic items through the Umbral Athenaeum's enchantment trade to fund himself and buy leverage over the noble patrons he answers to. When Marrow took him captive, the Ascendency didn't construct a network from nothing — it seized a mature, working one and drove it harder. This is also the mechanism, not yet needed in play, by which Velmont could resume being "Lord Velmont" to the wider network without any disguise at all: everyone above Bruokdon has only ever dealt with "Velmont," real or worn, and neither Marrow's impression nor the genuine article required inventing anything.
> >
> > STILL DM-ONLY: his cooperation against the Ascendency is genuine — being captured, replaced, and discarded is a wound to his pride and his sense of control, and revenge matters more to him than scruples ever did. He will hold up his end for as long as it's aimed at hurting the Ascendency. He is not loyal to the party and won't betray them for spite or ideology, but if a low-risk chance appears to quietly reclaim the ring for himself once the Ascendency's grip on it is broken, he will take it without announcing it — a reckoning the party may need to have with him later, not a twist to force tonight.
> >
> > ### General Notes
> > **Continuity note (2026-08-01):** the doppelganger who impersonated Velmont (and then briefly Professor Gousse Windcaller) in S43 has since been identified as [[Marrow]], the Silent Ascendency's cell leader in Bruokdon — it ran the smuggling ring personally under Velmont's stolen identity. See [[Marrow]] for the full picture.
> >
> > **Continuity note (2026-08-22):** with Marrow dead and the Bruokdon cell broken (S44), Velmont has proposed resuming "Lord Velmont" with the wider Ascendency network above the city — see the [[The Second Ledger]] quest and the [[2026-08-22]] session prep for the infiltration operation this sets up, and the Secrets section above for why it works and where it could go sideways later.
> >
> > **Stat block design (2026-07-10):** DM called for CR ~12 given his standing as a council member of [[The Umbral Athenaeum|The Umbral Athenaeum]]. Built as a reskin of [[5. Mechanics/Bestiary/Humanoid/Archmage.md|Archmage]] (CR 12, MM p.342) — identical chassis (AC 12/15 w/ mage armor, HP 99, ability scores, Magic Resistance, spell slot progression, at-will Disguise Self/Invisibility), with the prepared spell list swapped level-for-level toward Enchantment/control to match "Councilor of Enchantment": Magic Missile→Tasha's Hideous Laughter, Mirror Image→Suggestion, Lightning Bolt→Hypnotic Pattern, Fire Shield→Confusion, Cone of Cold→Dominate Person, Globe of Invulnerability→Mass Suggestion, Dominate Monster/Feeblemind considered for 8th but kept Mind Blank* for the paranoid-survivor angle. Dagger reflavored as a ring-channeled ranged force attack. Added one signature trait, Rings of Silent Passage (3/day bonus-action misty step, no slot cost), to mechanically back up his established habit of always finding a clean exit.
> >
> > Since 5e balances prepared spells primarily by slot level rather than school, level-for-level swaps hold the published CR without re-deriving it from the defensive/offensive tables — but note the tradeoff: this build trades some raw DPR for single-target lockdown (Dominate Person, Hold-tier effects via Confusion/Banishment), which reads harder at the table than the DPR math shows, since it can take a PC out of a fight outright rather than just chip damage. Worth a gut-check the first time he's actually run in combat.
> >
> > **Balance flag:** he is not built as this session's opponent — the [[2026-07-11|2026-07-11 session prep]] keeps him restrained throughout, and canon has him flee rather than fight once freed. A solo CR 12 against the 4-active-member Midnight Covenant (level 10) would land as deadly by the party note's Lazy DM benchmark (CR sum 12 vs. "potentially deadly" at >20 is fine solo, but he hits much harder alone than that heuristic suggests thanks to Dominate Person/Confusion/Mass Suggestion) — treat any future straight fight with him as a genuine boss encounter, not a background skirmish.

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
