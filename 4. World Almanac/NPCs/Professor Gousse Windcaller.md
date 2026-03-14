---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Umbral Athenaeum.md|The Umbral Athenaeum]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
aliases:
  - Professor Gousse Windcaller
pronounced: GOOSS (rhymes with “goose”)
race: "[[5. Mechanics/Races/Aarakocra (MPMM).md|Aarakocra (MPMM)]]"
gender: male
age: 35
alignment: Neutral Good
occupation:
  - Councilor of Conjuration
  - Professor of Planar Studies
groups: []
religions: []
description: |-
  Professor Gousse is a tall aarakocra with sleek ash-gray feathers tipped in white along his wings and crest. His sharp golden eyes rarely blink, giving the impression that he is constantly studying everything in the room at once. His robes are specially tailored to allow his wings to fold comfortably through slits in the back, and the fabric is embroidered with silver glyphs representing planar gateways and summoning circles.

  When he walks, his talons click softly on the stone floors of the Institute. His wings occasionally shift or rustle slightly when he grows excited or irritated.

  Despite his avian features, Gousse carries himself with the quiet patience of a long-tenured academic. His speech is careful and deliberate, though when discussing planar travel or magical theory he becomes animated, often pacing the room with wings partially spread as if preparing to take flight.

  His office is filled with strange artifacts from distant planes — crystalline feathers from elemental air creatures, jars of shimmering dust from the Astral Sea, and delicate diagrams of portal geometries etched into thin metal plates.

  A faint breeze always seems to follow him, a lingering side effect of his constant experimentation with planar magic.
history: Orellian gained fame after successfully opening the first stable portal to the Feywild in over a century. Unfortunately, he also gained notoriety after accidentally summoning a celestial whale into the harbor district of Bruokdon during a demonstration spell.
personality: Charismatic and eccentric.
ideal: Discovery through exploration.
bond: Believes the Institute should expand its magical horizons beyond the material plane.
flaw: Careless with dangerous magic.
goals: Open stable portals to new realms.
likes: extraplanar creatures, rare ingredients
dislikes: bureaucratic restrictions
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
>```meta-bind
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**

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

```
^statblock

## DM Notes
### Hidden Details


### General Notes
