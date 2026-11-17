---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
condition: healthy
gist: ""
revealed: {}
reveal: {}
facts: []
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
  - monster/cr/5
  - monster/size/large
  - monster/type/construct
aliases:
  - Unfinished Amber Warden
race: "[[5. Mechanics/Bestiary/Construct/Stone Golem.md|Stone Golem]]"
gender: N/A
age: null
alignment: Unaligned
occupation:
  - Incomplete guardian construct, Silent Ascendency soul-vessel works
groups:
  - Silent Ascendency
religions: []
description: |-
  A Warden that isn't finished. The frame is there — legs, spine, the heavy shoulders — but the fitted plating stops partway up the chest, leaving the internal armature open to the air: raw stone, iron banding, and a single amber conduit socketed where three should be. It has no face yet. The apertures the finished models use for eyes are unbored, and it navigates by something else entirely, turning its blank head toward sound and warmth with an unpleasant, insectile deliberateness.
  It moves badly. The joints haven't been trued, so every step lands hard and slightly wrong, and the single conduit flares with the effort like something straining.

  Age: unknown.
history: |-
  One of several incomplete constructs standing in assembly cradles on the Foundry floor at [[Greyfen Hollow]]. Not intended to walk yet — these come online only when a cradle is released early, whether by a panicking cultist, a stray area effect, or a party clever enough to hijack one.
personality: None. Less than none — the finished Wardens at least follow a binding. This one has a single soul-fragment doing the work of three and no completed instruction set to follow.
ideal: "—"
bond: "—"
flaw: Barely aimed. It attacks whatever is nearest without regard for allegiance, including the cultists who released it.
goals: None it could articulate. It moves toward noise and it swings.
likes: "—"
dislikes: "—"
party_relationships:
  Midnight Covenant: Enemy
summary: ""
secrets: |-
  STILL DM-ONLY: the single socketed conduit is doing all the work, and it is exposed — the plating that would protect it was never fitted. It is a legitimate, findable weak point, and destroying it kills the construct outright rather than merely stripping its defences the way the finished [[Amber Warden]]'s three conduits do.
  The trade is that it detonates. A party that shatters the conduit at melee range will regret the tidiness of the solution.
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
> > *Built from scratch at **CR 5** as the stripped-down cousin of the [[Amber Warden]] (CR 10) — same chassis lineage, none of the finished model's protections. Benchmarked against [[5. Mechanics/Bestiary/Construct/Flesh Golem.md|Flesh Golem]] (CR 5) and [[5. Mechanics/Bestiary/Elemental/Earth Elemental.md|Earth Elemental]] (CR 5). See DM Notes for the math.*
> > ```statblock
> > name: Unfinished Amber Warden
> > size: Large
> > type: construct
> > alignment: Unaligned
> > ac: 15
> > ac_class: unfinished stonework
> > hp: 133
> > hit_dice: 14d10 + 56
> > modifier: -1
> > speed: 25 ft.
> > stats:
> >   - 20
> >   - 8
> >   - 18
> >   - 1
> >   - 8
> >   - 1
> > damage_immunities: poison, psychic
> > condition_immunities: "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
> > senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 9"
> > languages: "—"
> > cr: "5"
> > traits:
> >   - name: Immutable Form
> >     desc: The Warden is immune to any spell or effect that would alter its form.
> >   - name: Exposed Conduit
> >     desc: |-
> >       A single amber conduit sits socketed in the Warden's open chest armature, unprotected by the plating a finished model would carry. The conduit is AC 15, has 10 hit points, is immune to poison and psychic damage, and can be targeted directly by any attack or area effect that could reach the Warden.
> >
> >       If the conduit is destroyed, the Warden drops to 0 hit points at the end of its next turn. It is not incapacitated in the meantime — it gets one more turn, and it spends it.
> >   - name: Unfinished
> >     desc: Unlike a completed [[Amber Warden]], this construct has no Magic Resistance and no resistance to nonmagical weapons. Its joints are untrued, and it has disadvantage on Dexterity saving throws.
> > actions:
> >   - name: Multiattack
> >     desc: The Warden makes two Slam attacks.
> >   - name: Slam
> >     desc: "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:* 16 (2d10 + 5) bludgeoning damage."
> > reactions:
> >   - name: Collapse
> >     desc: "When the Warden drops to 0 hit points, its conduit ruptures. Each creature within 10 feet of it must make a DC 14 Dexterity saving throw, taking 10 (3d6) force damage on a failed save, or half as much damage on a successful one. The rupture leaves a Raw Magic Vent in that space (see [[Greyfen Hollow]] — The Machinery)."
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
> > See Secrets above. The exposed conduit is meant to be spotted and shot — that's the whole design. It converts a slow slugging match against a construct into a two-round problem for a party that's paying attention, which is what keeps two of these in the Foundry fight from bloating it into a ninety-minute grind.
> >
> > ### General Notes
> > **Stat block design (2026-09-05).** Built from scratch rather than reskinned, because nothing in the bestiary sits where this needed to: it had to read as visibly *the same thing as* the [[Amber Warden]] while being demonstrably lesser, and had to die faster than its hit points suggest.
> >
> > **CR math.**
> > - **Defensive.** 133 HP lands in the CR 5 row (131–145); AC 15 matches that row's AC, so no shift. The Exposed Conduit is a real 10-HP kill switch that a focused party will find, so shift one step down → **CR 4 defensive**.
> > - **Offensive.** Two slams at 16 each = 32 damage/round, which is the top of the CR 4 row (27–32). Attack bonus +8 against that row's +5 is +3, shifting up one and a half steps → **CR 5–6 offensive**. Collapse adds unbudgeted damage on death and is not counted above.
> > - **Average → CR 5.** Rounding up rather than down because Collapse is real damage the table will feel, and because these appear in pairs.
> >
> > **Deliberately weaker than the finished model in the ways that matter at this tier:** no Magic Resistance and no nonmagical-weapon resistance means the party's mundane damage and their save-or-suck spells both work normally. Against a level 10 party that's an enormous difference from the [[Amber Warden]], and it's the mechanical expression of "this one isn't done yet."
> >
> > **Slower (25 ft.) and blind past 60 feet** — both flavour and a real tactical lever. A party that keeps its distance and stays quiet can disengage from one of these in a way the finished Warden never allows.

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
