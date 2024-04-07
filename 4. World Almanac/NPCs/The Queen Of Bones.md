---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: >-
  https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/queen-of-bones.jpg
relationships: []
tags: null
aliases:
  - The Queen of Bones
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
*Source: Strongholds and Followers p. 169*

Rival and sometimes companion to Maladar Dictum, the Queen of Bones is the Chaos Priest of the Court of All Flesh. She was once the White Queen, but her husband, the King of Blood, was annihilated in the Battle of Kalas Mithral by the Knights of Axiom under the leadership of the Inexorable Will.

In the eons since, the Queen has risen and fallen and now finds herself allied to Maladar Dictum. Theirs is a marriage of convenience. Each sees the leverage the alliance brings them. Neither expects more from the other than the other will give, and it is perhaps for exactly this reason that neither has betrayed the other in their long years together. What would be the point? Each is already acting in, and only in, their own best interests. They hope, by nurturing this court, to challenge the current King and Queen of Chaos.

The oldest surviving member of the Court, with the possible exception of the madness-flesh Uursovk, the Queen is languid and slow to anger. She looks at her enemies with mild annoyance. They are temporary. Change is eternal. She will show them.

She rides an animation of skeletons harvested from the creatures she's killed. They are not undead, more like a moving sculpture. The Queen is an artist, with bone her preferred medium. Ideally the bones of the living.

## Tactics

A powerful spellcaster, the Queen arrives armed with a combination of spells designed to aid the summoner and damn their enemies. Freedom of movement will undo many ills, and stoneskin or shield of faith will help her allies withstand damage. Death ward is for those allies close to death. Dispel magic is a Swiss army knife of solutions to many problems.

And of course she has many standard offensive spells, including banishment for those enemies summoned from other planes by evil priests with their own temples!

The Queen's favorite offensive tactic, of course, is her Ossuary. By taking control of a target's skeleton, she can freeze them in place, imprisoning them with their own bones. On average this is only going to last two rounds, if it works, but that's still two rounds of an enemy doing nothing. Since its DC is Constitution-based, she tends to target spellcasters and glass cannons.

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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "The Queen Of Bones"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "13"
- !!int "15"
- !!int "13"
- !!int "13"
- !!int "20"
- !!int "12"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
  "Constitution": !!int "4"
"skillsaves":
  "Intimidation": !!int "4"
  "Religion": !!int "4"
  "Insight": !!int "8"
  "Perception": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Common, Deep Speech, Primordial"
"cr": "7"
"traits":
- "desc": "The Queen is a 9th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 16, dice: d20+8 (+8) to hit with spell attacks). She has\
    \ the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Inflict Wounds.md|inflict wounds]],\
    \ [[5. Mechanics/Spells/Healing Word.md|healing word]], [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Lesser Restoration.md|lesser\
    \ restoration]], [[5. Mechanics/Spells/Magic Weapon.md|magic weapon]],\
    \ [[5. Mechanics/Spells/Silence.md|silence]], [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Animate Dead.md|animate dead]],\
    \ [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], \n\n4th level (3 slots):\
    \ [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Death Ward.md|death ward]],\
    \ [[5. Mechanics/Spells/Freedom Of Movement.md|freedom of movement]], [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\
    \n5th level (1 slots): [[5. Mechanics/Spells/Contagion.md|contagion]], [[5. Mechanics/Spells/Flame Strike.md|flame\
    \ strike]], [[5. Mechanics/Spells/Insect Plague.md|insect plague]]\n\
    \ndispel magic, protection from energy, revivify, water walk"
  "name": "spells"
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "The Queen is immune to any spell or effect that would alter her form."
  "name": "Formless Shape"
"actions":
- "desc": "The Queen makes two attacks with her Bone Bow."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5) to hit, range 150/600 ft.,\
    \ one target. Hit: dice:2d8 + 2|text(11) (2d8 + 2) damage."
  "name": "Bone Bow"
- "desc": "The Queen targets one creature she can see within 30 feet of her and turns\
    \ its own skeleton into a jail. The target must make a DC 16 Constitution saving\
    \ throw against this magic. On a failed save, it takes dice:4d6|text(14) (4d6)\
    \ necrotic damage and is [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ for 1 minute. At the end of each of its turns, the target can repeat this saving\
    \ throw, ending the effect on itself on a success. If the target succeeds on the\
    \ save, or if the effect ends on it, the target becomes immune to Ossuary for\
    \ 24 hours."
  "name": "Ossuary"
"source":
- "SaF"
"image": "4. World Almanac/NPCs/token/the-queen-of-bones-saf.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
