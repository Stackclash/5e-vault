---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images:
  - 4. World Almanac\NPCs\img\emil-toranescu.webp
aliases:
  - Emil Toranescu
alignment: Chaotic Evil
description: >-
  A strong, young werewolf whose conviction outpaced his caution. Where Kiril
  rules through fear, Emil argues — loudly, and in front of the pack — that
  the Children of Mother Night should turn every kidnapped child rather than
  let most of them die in the fighting ring.
history: >-
  Emil challenged Kiril Stoyanovich's leadership by questioning the pack's
  method of initiating new werewolves: forcing kidnapped children to fight to
  the death so only the "strongest" survivor would be turned. Emil argued
  that sparing and turning every child would grow the pack and secure its
  future, and half the pack's older members quietly sided with him. The
  dispute might have ended in Kiril's death or his own, but Kiril vanished for
  several days and returned with dire wolves loyal to Strahd von Zarovich, who
  was not pleased with Emil's attempt to fracture his werewolves. The dire
  wolves dragged Emil to Castle Ravenloft, where Strahd has kept him
  imprisoned in the South Dungeon ever since — punishment, and a lesson to the
  rest of the pack.
relationships: []
partyRelationships:
  Midnight Covenant: Friendly
location: null
pronounced: EH-mil tor-uh-NES-koo
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 27
occupation:
  - Werewolf pack hunter
  - Prisoner of Castle Ravenloft
groups:
  - Children of Mother Night
religions:
  - Mother Night
personality: Idealistic, hot-tempered, and quick to speak his mind even when it's dangerous to do so
ideal: The pack must grow to endure — every child spared is a future wolf, not a waste.
bond: My mate, Zuleika, never doubted my vision for the pack even when the rest of it turned on me.
flaw: My conscience made me reckless — I challenged Kiril in the open instead of building support in secret.
goals: >-
  Escape Castle Ravenloft and prove his worth to Strahd, reclaiming standing
  in the pack — unless he can be convinced instead to abandon that dream and
  flee to Zuleika.
likes: Loyalty, a growing pack, the open sky beyond the castle walls
dislikes: Kiril's cruelty toward captured children, being doubted, confinement
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
*Source: Curse of Strahd p. 81*

Emil Toranescu is a werewolf of the Children of Mother Night, imprisoned by [[Strahd Von Zarovich (COS)|Strahd von Zarovich]] in the South Dungeon of Castle Ravenloft for challenging his pack leader's authority.

## A Rival's Argument

Emil questioned [[Kiril Stoyanovich (COS)|Kiril Stoyanovich]]'s treatment of the children the pack kidnaps: rather than force them to fight to the death for the right to be turned, Emil argued every child should be spared and turned, growing the pack rather than winnowing it. Kiril saw a larger pack as unmanageable; Emil saw it as survival. The pack split behind the two of them, and it seemed likely that one leader would kill the other before the dispute resolved.

## Taken to the Castle

Kiril vanished for several days and returned with dire wolves loyal to Strahd, who was displeased at Emil's attempt to fracture his werewolves. The dire wolves dragged Emil to Castle Ravenloft and threw him in a flooded cell in the South Dungeon, where he remains — soaked, shivering, and desperate.

## The Prisoner's Lie

Emil tells anyone who finds him that he's an innocent resident of Vallaki chased into the castle by dire wolves, and begs to be freed in exchange for his help. In truth, he's anxious to prove his worth to Strahd again and will turn on his rescuers the moment a good opportunity presents itself — unless they claim to be allies of his wife, [[Zuleika Toranescu (COS)|Zuleika Toranescu]]. In that case he abandons any thought of currying Strahd's favor and tries to slip away from the castle to reunite with her, staying with the party only until he sees his chance to leave.

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
"name": "Emil Toranescu (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "12 natural armor in wolf or hybrid form"
"hp": !!int "72"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft. (40 ft. in wolf form)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"gear":
  - "[[/5. Mechanics/Items/Spear.md|spear]]"
"senses": "passive Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
  - "desc": "Emil can use its action to polymorph into a wolf-humanoid hybrid or into\
      \ a wolf, or back into its true form, which is humanoid. Its statistics, other\
      \ than its AC, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Emil has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "Emil makes two attacks: two with its spear (humanoid form) or one with\
      \ its bite and one with its claws (hybrid form)."
    "name": "Multiattack (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8\
      \ + 2) piercing damage. If the target is a humanoid, it must succeed on a DC\
      \ 12 Constitution saving throw or be cursed with werewolf [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
    "name": "Bite (Wolf or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 7\
      \ (2d4 + 2) slashing damage."
    "name": "Claws (Hybrid Form Only)"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear (Humanoid Form Only)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/emil-toranescu-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
