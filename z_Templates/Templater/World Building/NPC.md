<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config } = init.getPlugins(tp, ['npcs'])

  data = await init.openForm(modalForm, {
    title: "NPC Setup",
    name: "npc-setup",
    fields: [
      fields.name("NPC Name", "Name of NPC"),
      fields.text("pronounced", "Pronunciation", "Pronunciation of NPC Name"),
      fields.age(),
      fields.gender(),
      fields.tagSelect(dataview, "race", "Race", '#race', "Race of NPC"),
      fields.alignment(),
      fields.tagSelect(dataview, "location", "Location", '#location', "Where this NPC is located"),
      fields.textArea("description", "Description", "Description of NPC"),
      fields.textArea("history", "History", "History of NPC"),
      fields.textArea("personality", "Personality", "Personality of NPC"),
      fields.textArea("ideal", "Ideal", "Ideal of NPC"),
      fields.textArea("bond", "Bond", "Bond of NPC"),
      fields.textArea("flaw", "Flaw", "Flaw of NPC"),
      fields.textArea("goals", "Goals", "Goals of NPC"),
      fields.textArea("likes", "Likes", "Likes of NPC"),
      fields.textArea("dislikes", "Dislikes", "Dislikes of NPC"),
    ],
    version: "1"
  })

  await init.moveFile(tp, config.locations.npcs, data.name)
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
statblock: inline
location: "<% data.location %>"
condition: healthy
images:
- z_Assets/PlaceholderImage.png
relationships: []
tags:
- npc
aliases: 
- "<% data.name %>"
pronounced: "<% data.pronounced %>"
race: "<% data.race %>"
gender: "<% data.gender %>"
age: <% data.age %>
alignment: "<% data.alignment %>"
occupation: []
groups: []
religions: []
description: >-
  <% data.description ? data.description : '' %>
history: >-
  <% data.history ? data.history : '' %>
personality: <% data.personality ? data.personality : '""' %>
ideal: <% data.ideal ? data.ideal : '""' %>
bond: <% data.bond ? data.bond : '""' %>
flaw: <% data.flaw ? data.flaw : '""' %>
goals: <% data.goals ? data.goals : '""' %>
likes: <% data.likes ? data.likes : '""' %>
dislikes: <% data.dislikes ? data.dislikes : '""' %>
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

```
^statblock

## DM Notes
### Hidden Details


### General Notes
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>