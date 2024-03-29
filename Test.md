```dataviewjs
const tables = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.tags.some(tag => tag.includes("hhhvi"))
})
const monsters = dv.pages('"5. Mechanics/Bestiary"').filter(p => {
	for (const table of tables) {
		
	}
})

dv.header(2, "Table Aliases")
dv.list(tables.map(p => p.aliases[0]))

dv.header(2, "Monsters Without Table")

```
