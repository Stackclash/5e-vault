```dataviewjs
const tables = dv.pages('"5. Mechanics/Tables"').filter(p => {
    return p.tags.some(tag => tag.includes("hhhvi"))
})
const monsters = dv.pages('"5. Mechanics/Bestiary"').filter(p => {
	let found = false
	for (const table of tables) {
		if (p.aliases && (table.aliases[0] == p.aliases[0])) found = true
	}
	return !found
})

// dv.header(2, "Table Aliases")
// dv.list(tables.map(p => p.aliases[0]))

dv.header(2, "Monsters Without Table")
dv.list(monsters.map(p => p.file.name))
```
