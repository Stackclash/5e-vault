```dataviewjs
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller").api
console.log(diceRollerPlugin)
const typePages = dv.pages('"Story Engine/Story Engine"')
const data = {}
for (let page of typePages) {
	const type = page.file.name.toLowerCase()
	const text = await dv.io.load(page.file.path)
	const blockIds = [...text.matchAll(/\^([a-z0-9\-\_]+)/gi)].map(m => m[1])
	
	for (let id of blockIds) {
		if (!data[type]) data[type] = {}
	
		data[type][id.toLowerCase()] = await diceRollerPlugin.getRoller(`[[${page.file.path}^${id}|xy]]`)
	}
}
const roll = data.agents.main.roll()

console.log(data)
console.log(roll)
```
