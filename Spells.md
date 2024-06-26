---
class: wizard
level: 1
school: necromancy
---
Class: `INPUT[inlineSelect(option('','Any'),option('wizard','Wizard')):class]`
Level: `INPUT[inlineSelect(option('','Any'),option('cantrip'),option('1'),option('2'),option('3'),option('4'),option('5'),option('6'),option('7'),option('8'),option('9')):level]`
School: `INPUT[inlineSelect():school]`

```dataviewjs
const currentPage = dv.current()
let spells = dv.pages('#spell')
if (currentPage.class) {
	spells = spells.filter(p => p.tags.includes(`spell/class/${currentPage.class}`))
}
if (currentPage.level) {
    spells = spells.filter(p => p.tags.includes(`spell/level/${currentPage.level}`))
}
if (currentPage.school) {
    spells = spells.filter(p => p.tags.includes(`spell/school/${currentPage.school}`))
}
dv.list(spells.map(p => p.file.link))
```
