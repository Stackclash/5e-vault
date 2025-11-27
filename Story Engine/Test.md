```dataviewjs
```javascript
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller")
```
const typePages = dv.pages('"Story Engine/Story Engine"')
for (let page of typePages) {
	const text = await dv.io.load(page.file.path)
	const blockIds = [...text.matchAll(/\^([a-z0-9\-\_]+)/gi)].map(m => m[1])
	
	
}
```
