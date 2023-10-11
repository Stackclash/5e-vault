---
movement:
  walking: {name: "Walking", base: 30, slow: 30, normal: 20, fast: 15}
  donkey: {name: "Donkey", base: 40, slow: 22, normal: 15, fast: 11}
  draft horse: {name: "Draft Horse", base: 40, slow: 22, normal: 15, fast: 11}
  riding horse: {name: "Riding Horse", base: 60, slow: 15, normal: 10, fast: 8}
---
`=round(160 * ([[Travel Time]].movement[[[Eldoria]].active_party.movement][[[Eldoria]].active_party.speed] * choice([[Eldoria]].active_party.exhaustion > 1, 2, 1) / 60 / [[Eldoria]].active_party.hours_per_day))`

 
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