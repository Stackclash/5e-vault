---
obsidianUIMode: preview
banner_y: 0
hours_per_day: 8
exhaustion_level: 0
movement: walking
speed: normal
tags:
  - party
travel_multiplier: 1
travel_speed: 30.001
encumbered: false
travel_hours_per_day: 8
travel_bonus: 0
var_mins: 60
travel_calc: 19.999333355554814
---
> [!infobox]
> # `=this.file.name`
> ###### Travel
>  |
>  ---|---|
> **Method** | `INPUT[inlineSelect(class(mb-35), option(30.001, Walking), option(50.001, Camel), option(40.001, Donkey), option(40.002, Mule), option(40.003, Draft Horse), option(40.004, Elephant), option(40.005, Mastiff), option(40.006, Moorbounder), option(40.007, Pony), option(40.008, Rhinoceros), option(60.001, Riding Horse), option(40.009, Saber-Toothed Tiger), option(60.002, Warhorse), option(20.001, Griffon [walking]), option(80.001, Griffon [flying]), option(40.010, Hippogriff [walking]), option(60.003, Hippogriff [flying]), option(60.004, Pegasus [walking]), option(90.001, Pegasus [flying]), option(20.002, Peryton [walking]), option(60.005, Peryton [flyingg]), option(50.002, Unicorn), option(60.006, Peryton [flying]), option(50.003, Unicorn), option(50.004, Broom of Flying), option(30.002, Broom of Flying [over  200 lbs]), option(80.002, Carpet of Flying [3ft x 5ft]), option(60.007, Carpet of Flying [4ft x 6ft]), option(40.011, Carpet of Flying [5ft x 7ft]), option(30.003, Carpet of Flying [6ft x 9ft]), option(300.001, Wind Walk), option(50.005, Cauldron of Flying), option(30.004, Cart pulled by Horses), option(30.005, Cart pulled by PCs), option(40.012, PHB Galley), option(10.001, PHB Keelboat), option(30.006, PHB Longship), option(15.001, PHB Rowboat), option(20.003, PHB Sailing Ship), option(25.001, PHB Warship), option(50.006, GOS Sailing Ship), option(45.001, Aquisions Inc Battle Balloon), option(15.003, Aquisions Inc Mechanical Beholder), option(200.001, Ebberon Lyrandar Airship), option(100.001, Ebberon Lyrandar Galleon), option(300.002, Ebberon Orien Lightning Rail)):travel_speed]` |
> **Speed** | `INPUT[inlineSelect(class(mb-35), option(1, Normal Pace), option(1.333333, Slow Pace), option(0.666667, Fast Pace), showcase):travel_multiplier]` |
> **Bonus** | `INPUT[number(class(mb-25)):travel_bonus]` |
> **Encumbered** | `INPUT[toggle:encumbered]` (`VIEW[{encumbered} ? -10: 0]`) |
> **Travel Hours Per Day** | `INPUT[number(class(mb-35)):travel_hours_per_day]` |
> **Exhaustion Level** | `INPUT[inlineSelect(class(mb-35), option(0, 0 No exhaustion), option(1, 1 Disadvantage on ability checks), option(2, 2 Speed halved), option(3, 3 Disadvantage on attack rolls and saving throws), option(4, 4 Hit point maximum halved), option(5, 5 Speed reduced to 0), option(6, 6 Death)):exhaustion_level]` |
> **Travel Calc** | `VIEW[({var_mins}/(({travel_speed} / ({exhaustion_level} > 1 ? 2 : 1) + ({encumbered} ? -10 : 0) + {travel_bonus}) / 10) * {travel_multiplier})][math:travel_calc]` |
```dataviewjs
const currentPage = dv.current()
const members = dv.pages('#player').filter(p => p.active && currentPage.file.path === p.party.path)
const levelAverage = members.level.array().reduce((a, b) => a + b) / members.length
console.log(levelAverage)
```
## **Characters**
> [!cards|dataview 3]
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
    {id: 'Active', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path:'${value}', field: ['active', '${currentPage.$name}']})\``},
    {id: 'Complete', value: (row) => row.$path, render: (value, row) => `\`$=await dv.view('metaBindInput', {type: 'toggle', path: '${value}', field: ['completed', '${currentPage.$name}']})\``},
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


# Timelines
```aat-vertical
COS
```

# Notes

## Fortunes of Ravenloft
- [[Tome Of Strahd (COS)]] 
	- Van Richten's Tower
- [[Sunsword (COS)]]
	- Ruins of Berez in Baba Lysaga's Creeping Hut
- [[Holy Symbol Of Ravenkind (COS)]] 
	- Amber Temple

