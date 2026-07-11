---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Umbral Athenaeum.md|The Umbral Athenaeum]]"
condition: healthy
images:
  - z_Assets/NPCs/Gousse Windcaller.png
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
groups:
  - Umbral Athenaeum Council
religions: []
description: |-
  Professor Gousse is a tall aarakocra with sleek ash-gray feathers tipped in white along his wings and crest. His sharp golden eyes rarely blink, giving the impression that he is constantly studying everything in the room at once. His robes are specially tailored to allow his wings to fold comfortably through slits in the back, and the fabric is embroidered with silver glyphs representing planar gateways and summoning circles.

  When he walks, his talons click softly on the stone floors of the Institute. His wings occasionally shift or rustle slightly when he grows excited or irritated.

  Despite his avian features, Gousse carries himself with the quiet patience of a long-tenured academic. His speech is careful and deliberate, though when discussing planar travel or magical theory he becomes animated, often pacing the room with wings partially spread as if preparing to take flight.

  His office is filled with strange artifacts from distant planes — crystalline feathers from elemental air creatures, jars of shimmering dust from the Astral Sea, and delicate diagrams of portal geometries etched into thin metal plates.

  A faint breeze always seems to follow him, a lingering side effect of his constant experimentation with planar magic.
history: |-
  Gousse was born in a mountain aerie far to the north, where his people rarely interacted with surface civilizations. Fascinated by stories brought by traveling traders, he developed an early interest in the wider world beyond the peaks.

  As a young adult he left his homeland and traveled across several kingdoms, eventually arriving in Bruokdon where the Umbral Athenaeum quickly recognized his natural aptitude for arcane theory.

  His ability to visualize spatial relationships in three dimensions made him an exceptional conjuration scholar. Over the years he developed several improvements to planar binding rituals that reduced the risk of summoning hostile entities.

  Eventually he rose to become the Institute’s Councilor of Conjuration, where he now oversees research related to planar travel, teleportation, and summoning magic.

  Despite his position on the council, Gousse remains approachable and often spends time teaching junior scholars.
personality: Curious, thoughtful, and patient. Gousse prefers observation and analysis before action and often pauses before speaking as though carefully assembling his thoughts.
ideal: Discovery expands the world. Knowledge of other planes should be pursued carefully but without fear.
bond: Deeply devoted to the Umbral Athenaeum and its mission to expand magical understanding.
flaw: His curiosity can lead him to pursue dangerous magical phenomena longer than is wise.
goals: Study the magical surge reported in Barovia, Improve the Institute’s planar research capabilities, Develop safer conjuration techniques for summoning and portal magic
likes: rare planar phenomena, complex magical theory, quiet observation, aerial views of the city from the Institute towers
dislikes: careless spellcasting, summoners who treat extraplanar beings as disposable tools, magical experiments conducted without proper preparation
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

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
