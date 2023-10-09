---

---


```dataviewjs
const pg = dv.current()
const header = ["Name", "Base", "Slow", "Normal", "Fast"]
let data = []
for (let move of Object.entries(pg.movement)){
	data.push([
		move[1].name,
		move[1].base,
		move[1].slow,
		move[1].normal,
		move[1].fast
	])
}
dv.table(header, data)
```