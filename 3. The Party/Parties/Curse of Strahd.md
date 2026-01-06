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

## Active Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  console.log(currentPage)
  const quests = dc.useQuery("#quest and @page")
  const questsByCompleted = dc.useArray(quests, array => array.groupBy(quest => {
    const completed = quest.value('completed')
    return completed && completed[currrentPage.$name]
  }))
  const columns = [
    {id: 'Name', value: (row) => row.$path, render: (value, row) => dc.fileLink(value)}
  ]

  return <dc.Table rows={quests} columns={columns}/>
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

