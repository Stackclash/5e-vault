---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\060-cos05-11.webp
aliases:
  - Lady Fiona Wachter
alignment: Lawful Evil
description: >-
  A composed, aristocratic widow who makes no secret of her family's ancient
  loyalty to House von Zarovich, Fiona Wachter is secretly the founder and
  spiritual leader of a growing devil-worshipping cult in Vallaki. She
  schemes patiently, and ruthlessly, to unseat Baron Vallakovich and claim
  the burgomaster's chair for herself.
history: >-
  The Wachters were once an influential noble line in Barovia, and Fiona
  still occupies the family's crumbling mansion, Wachterhaus, with her two
  adult sons, [[Nikolai Wachter (COS)|Nikolai]] and Karl, and her daughter,
  [[Stella Wachter (COS)|Stella]]. Her husband, also named Nikolai, died of
  sickness nearly three years ago; Fiona has never let him go, and casts
  gentle repose on his corpse to keep it from decaying beside her. She once
  conspired to marry Stella to the burgomaster's son,
  [[Victor Vallakovich (COS)|Victor Vallakovich]], hoping to gain a foothold
  inside the baron's mansion, but Victor's cruelty toward Stella drove her
  mad, and Fiona was forced to lock her own daughter away. Since then,
  Fiona's ambitions have turned darker: she has founded a
  devil-worshipping cult, written a manifesto titled *The Devil We Know*,
  and now serves as its hidden spiritual leader, using a bound imp and false
  rituals to win the loyalty of Vallaki's most fanatical malcontents. She
  employs a spy, Ernst Larnak, to keep her informed of everything that
  happens in town, though he knows enough of her secrets to blackmail her
  should their arrangement ever sour.
relationships: []
partyRelationships:
  Midnight Covenant: Enemy
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
pronounced: FEE-oh-nuh VAHK-ter
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 52
occupation:
  - Governess of Wachterhaus
  - Hidden leader of Vallaki's devil-worshipping cult
groups:
  - House Wachter
  - Loyalists of House von Zarovich
religions:
  - Devil worship (a cult of her own founding)
personality: Cold, composed, and utterly ruthless beneath an aristocratic veneer
ideal: Strahd is no tyrant, only a negligent landlord - true power lies in serving him well.
bond: >-
  The corpse of her beloved late husband, Nikolai, which she keeps gentle
  reposed beside her, and the manifesto she has written in his memory
flaw: Her hunger to rule Vallaki outweighs any real concern for her children's happiness
goals: To topple Baron Vallakovich, seize Vallaki's burgomastership, and rule the town in Strahd's name
likes: Order, devotion, her cult's growth, the memory of her husband
dislikes: Baron Vallakovich's buffoonery, weakness, disobedience, enemies of Strahd
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 110*

No one hates Baron Vallakovich more than Lady Fiona Wachter, who is often quoted as saying, "I'd rather serve the devil than a madman." She owns an old house in town, Wachterhaus, but rarely leaves her estate - not that she needs to. Her schemes reach every corner of Vallaki without her ever stepping outside its gates.

## A Family's Old Loyalty

Fiona makes no secret of her family's long-standing loyalty to the von Zarovich line. She believes Strahd is no tyrant, only a negligent landlord, and she would happily serve him as burgomaster of Vallaki if only Baron Vallakovich would give up his birthright - which he won't, not without a fight. The burgomaster is afraid of her in turn, for the Wachters' ties to Strahd run old and deep, and he doesn't dare confront her or her family directly.

## A Failed Betrothal

Fiona once conspired to wed her young daughter, Stella, to the baron's son, [[Victor Vallakovich (COS)|Victor Vallakovich]], hoping to gain a foothold inside the baron's mansion. Victor found Stella demented and showed no interest in her whatsoever - worse, he spoke to her so unkindly that she went mad. Fiona had no choice but to lock her own daughter away in an upstairs room.

## The Devil We Know

Lady Wachter's latest scheme is far more diabolical. She has founded a cult based on devil worship and written a manifesto, *The Devil We Know*, which she reads to her "book club" of the most fanatical members. Once her cult has enough followers, Fiona plans to take the town by force. To reward her most loyal cultists, she has her pet imp, Majesto, stand invisibly at the center of a pentagram during a false ritual that calls upon "princes of darkness," then has it sprinkle a few electrum coins on the floor as a sign of infernal favor.

## A Secret Kept Close

Another of Fiona's secrets is that she sleeps beside the corpse of her dead husband, Nikolai, who died of sickness nearly three years ago and whom she cherished deeply. She casts gentle repose on his body to keep it from deteriorating. If the characters come to Wachterhaus looking for help to overthrow the burgomaster, Fiona is all ears, and suggests they start by killing the baron's henchman, [[Izek Strazni (COS)|Izek Strazni]] - she'll happily take care of the rest. If they come looking for a way to defeat Strahd instead, she turns them away flatly: she is not, nor will she ever be, Strahd's enemy.

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
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
> [!div | no-t clean txt-c]
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
```statblock
"name": "Lady Fiona Wachter (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "13"
  - !!int "16"
  - !!int "13"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+5"
"gear":
  - "[[/5. Mechanics/Items/Mace.md|mace]]"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
  - "desc": "Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom\
      \ (spell save DC 13, +5 to hit with spell attacks). Fiona has the following\
      \ cleric spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Light.md|light]],\
      \ [[/5. Mechanics/Spells/Mending.md|mending]], [[/5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n**1st level (4 slots):** [[/5. Mechanics/Spells/Command.md|command]], [[/5. Mechanics/Spells/Purify Food And Drink.md|purify\
      \ food and drink]], [[/5. Mechanics/Spells/Sanctuary.md|sanctuary]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Augury.md|augury]], [[/5. Mechanics/Spells/Gentle Repose.md|gentle repose]],\
      \ [[/5. Mechanics/Spells/Hold Person.md|hold person]]\n\n**3rd level (2 slots):**\
      \ [[/5. Mechanics/Spells/Animate Dead.md|animate dead]], [[/5. Mechanics/Spells/Create Food And Water.md|create food and water]]"
    "name": "Spellcasting"
  - "desc": "As a bonus action, Fiona can expend a spell slot to cause its melee weapon\
      \ attacks to magically deal an extra 10 (3d6) radiant damage to a target on\
      \ a hit. This benefit lasts until the end of the turn. If Fiona expends a spell\
      \ slot of 2nd level or higher, the extra damage increases by 1d6 for each level\
      \ above 1st."
    "name": "Divine Eminence"
"actions":
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 3 (1d6)\
      \ bludgeoning damage."
    "name": "Mace"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/lady-fiona-wachter-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
