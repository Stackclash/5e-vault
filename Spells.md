---
class: wizard
level: 1
school: necromancy
---
`INPUT[inlineSelect(option('wizard','Wizard')):class]` `INPUT[inlineSelect(option('cantrip'),option('1')):level]`
```dataviewjs
const currentPage = dv.current()
let spells = dv.pages('#spell')
if (currentPage.class) {
	spells = spells.filter(p => p.tags.includes(`spell/class/${currentPage.class}`))
}
dv.list(spells.map(p => p.file.link))
```
