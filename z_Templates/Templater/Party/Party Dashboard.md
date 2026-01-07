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
> [!cards|dataview 6]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	"![|150x250](" + image + ")" AS "Image",
>	race AS "Race",
>	"`INPUT[inlineSelect(option(healthy),option(injured),option(dead)):" + file.path + "#condition]`" AS "Condition",
>	"`INPUT[suggester(optionQuery(#location)):" + file.path + "#location]`" AS "Location"
>	FROM #player
> WHERE party = this.file.link AND active
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

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery("#quest and @page")
  const activeQuests = quests.filter(q => q.value('active') && q.value('active')[currentPage.$name])
  const questsGrouped = dc.useArray(quests, array => array.groupBy(quest => {
    const active = quest.value('active')
    const completed = quest.value('completed')
    if (!!completed && completed[currentPage.$name]) {
      return 'Completed'
    } else if ((active && active[currentPage.$name])) {
      return 'Active'
    } else {
      return 'Inactive'
    }
  })).sort((a, b) => {
    const order = ['Inactive', 'Active', 'Completed']
    return order.indexOf(a.key) - order.indexOf(b.key)
  })
  const columns = [
    {id: 'Name', value: (row) => row.$path, render: (value, row) => dc.fileLink(value)},
    {id: 'Active', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path:'${value}', field: ['active', dv.page(dv.page('Configuration').active_party).file.name]})\``},
    {id: 'Complete', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path: '${value}', field: ['completed', dv.page(dv.page('Configuration').active_party).file.name]})\``},
    {id: 'Completed Steps', value: (row) => ({completed: row.value('steps').filter(s => !!s.completed && !!s.completed[currentPage.$name]).length, total: row.value('steps').length}), render: (value, row) => `${value.completed}/${value.total}`}
  ]

  return <dc.Table rows={questsGrouped} columns={columns} groupings={(key) => <h3>{key}</h3>} />
}
```

## Session Log
> [!cards|dataview 3]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM #session-journal
> WHERE party = this.file.link
> SORT file.frontmatter.date DESC
>```

# **Notes**
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>