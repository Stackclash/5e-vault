<%*
let templateError = false
let data = {}
let dataview = null
try {
  const path = require('path')
  dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')

  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }

  const config = dataview.api.page('Configuration')

  if (!config || !config.locations || !config.locations.shops) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const locations = dataview.api.pages('#location').sort(l => l.file.name, 'asc').array()
  const races = dataview.api.pages('#races').sort(l => l.file.name, 'asc').array()

  const result = await modalForm.api.openForm({
    title: "Location Setup",
    name: "location-setup",
    fields: [
      {
        name: "name",
        label: "Location Name",
        description: "Name of NPC",
        isRequired: true,
        input: {
          type: "text",
        }
      },
      {
        name: "age",
        label: "Age",
        description: "Age of NPC",
        isRequired: true,
        input: {
          type: "number",
        }
      },
      {
        name: "gender",
        label: "Gender",
        description: "Gender of NPC",
        isRequired: true,
        input: {
          type: "select",
          options: ['male', 'female']
        }
      },
      {
        name: "race",
        label: "Race",
        description: "Race of NPC",
        isRequired: true,
        input: {
          type: "select",
          options: races.map(r => ({ label: r.file.name, value: r.file.link.toString() }))
        }
      },
      {
        name: "alignment",
        label: "Alignment",
        description: "Alignment of NPC",
        isRequired: true,
        input: {
          type: "select",
          options: [
            { label: 'Lawful Good', value: 'Lawful Good' },
            { label: 'Neutral Good', value: 'Neutral Good' },
            { label: 'Chaotic Good', value: 'Chaotic Good' },
            { label: 'Lawful Neutral', value: 'Lawful Neutral' },
            { label: 'Neutral', value: 'Neutral' },
            { label: 'Chaotic Neutral', value: 'Chaotic Neutral' },
            { label: 'Lawful Evil', value: 'Lawful Evil' },
            { label: 'Neutral Evil', value: 'Neutral Evil' },
            { label: 'Chaotic Evil', value: 'Chaotic Evil' }
          ]
        }
      },
      {
        name: "location",
        label: "Location",
        description: "Where this shop is located",
        isRequired: true,
        input: {
          type: "select",
          options: locations.map(l => ({label: l.file.name, value: l.file.link.toString()})),
          source: "fixed"
        }
      },
      {
        name: "personality",
        label: "Personality",
        description: "Personality of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "ideal",
        label: "Ideal",
        description: "Ideal of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "bond",
        label: "Bond",
        description: "Bond of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "flaw",
        label: "Flaw",
        description: "Flaw of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "goals",
        label: "Goals",
        description: "Goals of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "likes",
        label: "Likes",
        description: "Likes of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
      {
        name: "dislikes",
        label: "Dislikes",
        description: "Dislikes of NPC",
        isRequired: false,
        input: {
          type: "textarea"
        }
      },
    ],
    version: "1"
  })

  if (result.status === 'cancelled') {
    throw new Error('Modal was Cancelled')
  }

  data = result.getData()
  console.log(data)

  await tp.file.move(path.posix.join(config.locations.npcs, data.name), tp.file.find_tfile(tp.file.title))
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
pronounced: 
race: "<% data.race %>"
gender: "<% data.gender %>"
age: "<% data.race %>"
alignment: "<% data.alignment %>"
occupation: 
groups: []
religions: []
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**

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
> `$=await dv.view("npcRelationships", { current: dv.current() })`

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

## History
TBD

## DM Notes
### Hidden Details


### General Notes
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>