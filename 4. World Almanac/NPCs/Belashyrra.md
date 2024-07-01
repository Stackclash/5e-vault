---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/belashyrra.webp
relationships: []
tags:
  - npc
aliases:
  - Belashyrra
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic Evil
occupation: null
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(Lawful Good),option(Neutral Good),option(Chaotic Good),option(Lawful Neutral),option(Neutral),option(Chaotic Neutral),option(Lawful Evil),option(Neutral Evil),option(Chaotic Evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Eberron: Rising from the Last War p. 286*

Belashyrra is the Lord of Eyes, also known to its cultists as the All-Seer or the Glorious Eye. Stories told of Belashyrra in the Shadow Marches whisper that the Lord of Eyes can see every evil deed a person commits, and that those touched by this daelkyr suffer terrible hallucinations that inevitably drive them to violence or death.

## Dreadful Visions

The madness of Belashyrra is tied to sight: images that can't be unseen, horrific hallucinations, the fear of blindness and of being watched—or realizing that something else is using your eyes. Belashyrra can force its victims to question whether what they perceive is real, or can fill their world with such terrors that they willingly blind themselves to escape.

Belashyrra sees mortals as raw materials to be exploited or insects to be exterminated. However, the Lord of Eyes has been known to take an interest in specific mortals. Belashyrra's warlocks serve as its envoys in the world and are often directed to seek out creatures and sites that the daelkyr wishes to see through their eyes.

## Belashyrra's Cults

The Lord of Eyes has followers across Khorvaire, and its cults are typically driven by mad visions. Devoted cultists can grow eyes in unusual locations, and might have [[/5. Mechanics/Rules/Senses.md#darkvision|darkvision]] or other supernatural abilities when they view the world through those eyes. Beholderkin often advise or lead Belashyrra's cults, and cultists typically treat these aberrations as divine beings.

## Belashyrra's Lair

Belashyrra makes its lair in the Citadel of Lidless Eyes deep in Khyber, a site that appears to have been molded from molten stone, chitin, and flesh. Across its warped and liquid expanses, thousands of eyes of every size and shape peer into the endless darkness. Beholders, dolgrims, and stranger aberrations dwell within the halls of the citadel, which is one of the few places where such creatures are willing to live side by side.

Some beholderkin serve Belashyrra as guards and agents, while others spend their lives in deep meditation, pursuing inner visions known only to the Lord of Eyes. It's rumored that anyone who sits on the citadel's throne can see through the eyes of any sentient creature on Eberron or in Khyber. If encountered in its lair, Belashyrra has a challenge rating of 23 (50,000 XP).

## Madness of Belashyrra

If a creature goes mad in Belashyrra's lair or while it can see the daelkyr, it gains a form of indefinite madness. Roll on the Madness of Belashyrra table to determine the nature of this madness, which takes the form of a character flaw that lasts until cured. Chapter 8 of the "Dungeon Master's Guide" has more information on madness.

**Madness of Belashyrra**

`dice: [[Belashyrra.md#^madness-of-belashyrra]]`

| dice: d6 | Flaw (lasts until cured) |
|----------|--------------------------|
| 1 | "I constantly see shapes moving in the shadows." |
| 2 | "I perceive certain types of people—vocations or entire societies—as hideous monsters." |
| 3 | "Someone is watching everything I do." |
| 4 | "When I close my eyes, I see my past misdeeds." |
| 5 | "I don't trust my sight. I have no idea what's real and what's a hallucination." |
| 6 | "Something watches the world through my eyes. To thwart them, I keep my eyes closed or covered." |
^madness-of-belashyrra

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Belashyrra"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "304"
"hit_dice": "32d8 + 160"
"stats":
- !!int "24"
- !!int "21"
- !!int "20"
- !!int "25"
- !!int "22"
- !!int "23"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "13"
  "Wisdom": !!int "13"
  "Intelligence": !!int "14"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "14"
"damage_resistances": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "22"
"traits":
- "desc": "If a creature tries to read Belashyrra's thoughts or deals psychic damage\
    \ to it, that creature must succeed on a DC 22 Intelligence saving throw or be\
    \ [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]] for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Alien Mind"
- "desc": "Belashyrra can see through the eyes of all creatures within 120 feet of\
    \ it. It can use its Eye Ray through any creature within 120 feet of it, as though\
    \ it were in that creature's space."
  "name": "Eye Thief"
- "desc": "If Belashyrra fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Belashyrra has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Belashyrra regains 20 hit points at the start of its turn. If it takes\
    \ radiant damage, this trait doesn't function at the start of its next turn. Belashyrra\
    \ dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "As a bonus action, Belashyrra can teleport up to 30 feet to an unoccupied\
    \ space it can see."
  "name": "Teleport"
"actions":
- "desc": "Belashyrra makes two attacks with its claws and uses its Eye Ray once."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 17 (3d6\
    \ + 7) slashing damage."
  "name": "Claw"
- "desc": "Belashyrra shoots one of the following magical eye rays of its choice,\
    \ targeting one creature it can see within 120 feet of it:\n\n- 1. Psyche-Reconstruction\
    \ Ray. The target must make a DC 22 Wisdom saving throw, taking 49 (9d10) psychic\
    \ damage on a failed save, or half as much damage on a successful one. If this\
    \ damage reduces a creature to 0 hit points, it dies and transforms into a spectator\
    \ under Belashyrra's control and acts immediately after Belashyrra in the initiative\
    \ order. The target can't be returned to its original form by any means short\
    \ of a [[5. Mechanics/Spells/Wish.md|wish]] spell.  \n- 2. Domination Ray. The\
    \ target must succeed on a DC 22 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ by Belashyrra for 1 minute or until the target takes damage. Belashyrra can\
    \ issue telepathic commands to the [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ creature (no action required), which it does its best to obey.  \n- 3. Mind-Weakening\
    \ Ray. The target must succeed on a DC 22 Intelligence saving throw or take\
    \ 36 (8d8) psychic damage and be unable to cast spells or activate magic items\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success.  \n- 4. Blinding Ray. The\
    \ target and each creature within 10 feet of it must succeed on a DC 22 Constitution\
    \ saving throw or take 19 (3d12) radiant damage and be [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ for 1 minute. Until this blindness ends, Belyshyrra can see through the [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ creature's eyes. The [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.  "
  "name": "Eye Ray"
"legendary_actions":
- "desc": "Belashyrra makes one claw attack."
  "name": "Claw"
- "desc": "Belashyrra targets a creature it can see within 60 feet of it. The target\
    \ must succeed on a DC 22 Wisdom saving throw or take 22 (4d10) psychic damage\
    \ and immediately use its reaction, if available, to move as far as its speed\
    \ allows away from Belashyrra."
  "name": "Implant Fear (Costs 2 Actions)"
- "desc": "Belashyrra rips at the bonds of reality in its immediate area. Each creature\
    \ within 10 feet of Belashyrra must succeed on a DC 22 Constitution saving throw\
    \ or take 19 (3d12) force damage and gain one level of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]."
  "name": "Rend Reality (Costs 3 Actions)"
"lair_actions":
- "desc": "While within the Citadel of Lidless Eyes, Belashyrra can invoke the ambient\
    \ magic to take lair actions. On initiative count 20 (losing initiative ties),\
    \ Belashyrra can take a lair action to cause one of the following effects; it\
    \ can't use the same effect two rounds in a row:"
  "name": ""
- "desc": "- An eye opens on a solid surface within 60 feet of Belashyrra. One random\
    \ eye ray of Belashyrra's shoots from that eye at a target of Belashyrra's choice\
    \ that it can see. The eye then closes and disappears.  \n- Belashyrra creates\
    \ a [[5. Mechanics/Items/Wave.md|wave]] of madness. Each creature it can see within\
    \ its lair must succeed on a DC 22 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] in this\
    \ way, a creature must use its action at the start of its turn before moving to\
    \ make a melee attack against another creature of Belashyrra's choice within reach.\
    \ If there are no creatures within reach, the [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ creature can act normally for that turn. A [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ creature can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success.  \n- Belashyrra taps into the eyesight of\
    \ creatures in its lair and alters their perception. Each creature of Belashyrra's\
    \ choice in the lair must make a DC 22 Wisdom saving throw. On a failure, the\
    \ affected creature perceives objects and creatures a short distance from their\
    \ actual locations, imposing disadvantage on the creature's attack rolls against\
    \ those targets. An affected creature can repeat the saving throw at the end of\
    \ each of its turns, ending the effect on itself on a success. If a creature's\
    \ saving throw is successful or the effect ends for it, the creature is immune\
    \ to this lair action for the next 24 hours.  "
  "name": ""
"regional_effects":
- "desc": "Belashyrra's lair is known to touch remote areas of the Shadow Marches\
    \ and caverns below Xen'drik. A region containing a passage to Belashyrra's lair\
    \ is warped by its magic, which creates one or more of the following effects:"
  "name": ""
- "desc": "- Creatures within 1 mile of the passage sometimes feel as if they're being\
    \ watched.  \n- Beasts that live within 5 miles of the passage undergo magical\
    \ transmutation, growing eyes or eyestalks that Belashyrra can see through.  \n\
    - A humanoid who spends at least 1 hour within 1 mile of the passage must succeed\
    \ on a DC 21 Wisdom saving throw or descend into a type of madness (see \"Madness\
    \ of Belashyrra\" below). A creature that succeeds on this saving throw can't\
    \ be affected by this regional effect again for 24 hours.  "
  "name": ""
- "desc": "If Belashyrra dies, these effects fade over the course of 1d10 days."
  "name": ""
"source":
- "ERLW"
"image": "4. World Almanac/NPCs/token/belashyrra-erlw.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
