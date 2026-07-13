---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\henrik-van-der-voort.webp
aliases:
  - Henrik van der Voort
alignment: Lawful Evil
description: >-
  Henrik van der Voort is Vallaki's coffin maker, a mediocre carpenter and a
  lonely, haunted man whose grim trade keeps the rest of the town at a
  distance. Months ago he made a bargain with a disguised Strahd that has
  since turned his own workshop into a vampire spawn's lair.
history: >-
  One night, a well-dressed nobleman calling himself Vasili von Holtz — in
  truth [[Strahd Von Zarovich (COS)|Strahd]] in disguise — visited Henrik
  and promised him "good business" in exchange for his cooperation. Henrik
  agreed, and his workshop has since become the lair of a pack of vampire
  spawn, former adventurers turned by Strahd, who now lie low above his
  shop. When the spawn learned that the bones of St. Andral lay hidden
  beneath the local church, protecting it from their kind, they ordered
  Henrik to steal them. Unable to bring himself to enter the crypt, he paid
  [[Milivoj (COS)|Milivoj]], the church's young gravedigger, to do it for
  him. Now Henrik bars his doors and shutters day and night, terrified of
  the tenants living above him and unwilling to explain himself to anyone
  who comes knocking.
relationships: []
partyRelationships: {}
location: null
pronounced: HEN-rik van der VOHRT
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 51
occupation:
  - Coffin Maker
  - Carpenter
groups: []
religions: []
personality: 'Troubled, withdrawn, guilt-ridden; hides behind gruffness to keep everyone at arm''s length'
ideal: Business, no matter how grim, is still business — survival comes first.
bond: His workshop and trade are all he has left; he built his life around them and can't bring himself to abandon either, even now.
flaw: He's too afraid of what shares his workshop to ask anyone for help.
goals: To survive whatever Strahd's spawn demand of him next without getting killed — by them or by the townsfolk.
likes: "Solitude, quiet nights, a steady trickle of customers (even grim ones)"
dislikes: "Visitors, questions about his workshop, the vampire spawn now living above his shop"
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
*Source: Curse of Strahd p. 116*

Henrik van der Voort is a mediocre carpenter and a troubled, lonely man who profits from the deaths of others. No one desires his company, both for the ghastly nature of his handiwork and for the shuttered, deathly silence that surrounds his shop.

## A Deal with a Stranger

Several months ago, an imposing, well-dressed nobleman named Vasili von Holtz — Strahd in disguise — visited Henrik and promised him "good business" in exchange for his help. Since then, Henrik's workshop has become the lair of a pack of vampire spawn: former adventurers turned by Strahd, lying low for the time being. Every window is barred with iron latticework and frosted glass, locked from the inside, and the outside doors are barred shut. If characters knock, Henrik shouts, "We're closed! Go away!" and refuses to open the door.

## The Bones of St. Andral

The vampires plan to attack St. Andral's church, and when Henrik learned that the church's protective relic — the bones of St. Andral — lay hidden beneath its altar, the spawn ordered him to steal them. Henrik paid [[Milivoj (COS)|Milivoj]] the gravedigger to do the deed in his stead. If characters break into his shop, Henrik offers no resistance and tells them where to find the bones and the vampire nest. If the theft is reported to the burgomaster, Henrik surrenders to the guards without a fight, blaming the vampires for forcing his hand — though at night he won't retrieve the bones himself, for fear of being killed by his unwelcome tenants.

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
"name": "Henrik Van Der Voort (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"gear":
  - "[[/5. Mechanics/Items/Club.md|club]]"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
  - "desc": "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4)\
      \ bludgeoning damage."
    "name": "Club"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/henrik-van-der-voort-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
