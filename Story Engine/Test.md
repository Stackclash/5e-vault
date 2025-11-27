```dataviewjs
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller")
console.log(diceRollerPlugin)
const typePages = dv.pages('"Story Engine/Story Engine"')
const data = {}
for (let page of typePages) {
	const text = await dv.io.load(page.file.path)
	const blockIds = [...text.matchAll(/\^([a-z0-9\-\_]+)/gi)].map(m => m[1])
	
	for (let id of blockIds) {
		data[page.file.name.toLowerCase()][id.toLowerCase()] = await diceRollerPlugin.getRoller(`[[${page.file.path}^${id}]]`)
	}
}

console.log(data)
```
