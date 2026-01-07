---
tags:
  - party
---
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
