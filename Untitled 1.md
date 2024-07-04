```dataviewjs
const toDelete = dv.pages('#npc').filter(p => !p.tags.contains('compendium/src/5e/cos') && p.relationships.length === 0).map(p => p.file.link)
toDelete.forEach(p => {
	
})
```
