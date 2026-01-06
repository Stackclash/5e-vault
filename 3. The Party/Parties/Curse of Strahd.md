---
obsidianUIMode: preview
banner_y: 0
hours_per_day: 8
exhaustion_level: 
movement: walking
speed: normal
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
    if ((active && active[currentPage.$name]) && !(!!completed && completed[currentPage.$name])) {
      return 'Active'
    } else if (!!completed && completed[currentPage.$name]) {
      return 'Completed'
    } else {
      return 'Inactive'
    }
  }))
  const columns = [
    {id: 'Name', value: (row) => row.$path, render: (value, row) => dc.fileLink(value)},
    {id: 'Active', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path:'${value}', field: ['active', dv.page(dv.page('Configuration').active_party).file.name]})\``},
    {id: 'Complete', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path: '${value}', field: ['completed', dv.page(dv.page('Configuration').active_party).file.name]})\``},
    {id: 'Completed Steps', value: (row) => ({completed: row.value('steps').filter(s => !!s.completed && !!s.completed[currentPage.$name]).length, total: row.value('steps').length}), render: (value, row) => `${value.completed}/${value.total}`}
  ]

  return <dc.Table rows={questsGrouped} columns={columns} groupings={(key) => <h3>{key}</h3>} />
}
```

## **Session Log**
> [!cards|dataview 3]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM #session-journal
> WHERE party = this.file.link
> SORT file.frontmatter.date DESC
>```


# **Timelines**
```aat-vertical
COS
```

# **Notes**

## Fortunes of Ravenloft
- [[Tome Of Strahd (COS)]] 
	- Van Richten's Tower
- [[Sunsword (COS)]]
	- Ruins of Berez in Baba Lysaga's Creeping Hut
- [[Holy Symbol Of Ravenkind (COS)]] 
	- Amber Temple

