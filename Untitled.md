```dataviewjs
const npcs = dv.pages('#npc')
dv.table(['name', 'relationship', 'race', 'gender', 'age'], npcs.filter(n => {
    return !!n.partyRelationships['Midnight Covenant']
}).map(n => {
    return [n.file.link, n.partyRelationships['Midnight Covenant'], n.race, n.gender, n.age]
}))
```
