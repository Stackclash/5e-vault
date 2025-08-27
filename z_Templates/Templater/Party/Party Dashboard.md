<%*
let templateError = false
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin('dataview')
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

  if (!config || !config.locations || !config.locations.parties) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.api.openForm({
    title: 'Adventuring Party',
    fields: [
      {
        name: 'party',
        label: 'Party Name',
        description: 'What is the name of the party?',
        isRequired: true,
        input: {
          type: 'text'
        }
      }
    ]
  })
  const { party: title } = result.getData()

  await tp.file.move(path.join(locationConfig.parties, title))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
movement: walking
speed: normal
hours_per_day: 8
tags:
  - party
---
## **Characters**
> [!cards|dataview 5]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	"![|150x250](" + image + ")" AS "Image",
>	race AS "Race",
>	"`INPUT[inlineSelect(option(healthy),option(injured),option(dead)):" + file.path + "#condition]`" AS "Condition",
>	"`INPUT[suggester(optionQuery(#location)):" + file.path + "#location]`" AS "Location"
>	FROM #player
> SORT file.name asc
>```

## NPC Relationships
```dataview
TABLE WITHOUT ID
  link(file.path, file.name) AS "Name",
  partyRelationships[this.file.name] AS "Relationship"
FROM #npc
WHERE contains(partyRelationships, this.file.name)
```

## **Session Log**
### **[[2. Session Journals|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/2. Session Journals"
> WHERE Party = this.file.name
> SORT file.frontmatter.date DESC
>```

## **Quests**
### **[[3. Quests| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/3. Quests"
> WHERE party = this.file.name AND active AND !side-quest
>SORT file.name asc
>```

### **[[3. Quests| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/3. Quests"
> WHERE party = this.file.name AND active AND side-quest
>SORT file.name asc
>```

# **Notes**
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>