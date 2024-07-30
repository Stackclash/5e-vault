---
obsidianUIMode: preview
class: wizard
level: ""
school: ""
---
Class: `INPUT[inlineSelect(option('','Any'),option('wizard','Wizard'),option('sorcerer','Sorcerer'),option('cleric','Cleric'),option('druid','Druid'),option('warlock','Warlock'),option('fighter','Fighter'),option('rogue','Rogue'),option('artificer','Artificer'),option('bard','Bard'),option('paladin','Paladin'),option('ranger','Ranger'),option('monk','Monk'),option('barbarian','Barbarian')):class]`
Level: `INPUT[inlineSelect(option('','Any'),option('cantrip'),option('1'),option('2'),option('3'),option('4'),option('5'),option('6'),option('7'),option('8'),option('9')):level]`
School: `INPUT[inlineSelect(option('','Any'),option('evocation','Evocation'),option('transmutation','Transmutation'),option('conjuration','Conjuration'),option('abjuration','Abjuration'),option('enchantment','Enchantment'),option('necromancy','Necromancy'),option('divination','Divination'),option('illusion','Illusion')):school]`

```dataviewjs
const currentPage = dv.current()
let spells = dv.pages('#spell')
if (currentPage.class) {
	spells = spells.filter(p => p.tags.some(t => new RegExp(`spell\/class\/${currentPage.class}`).test(t)))
}
if (currentPage.level) {
    spells = spells.filter(p => p.tags.some(t => new RegExp(`spell\/level\/${currentPage.level}`).test(t)))
}
if (currentPage.school) {
    spells = spells.filter(p => p.tags.some(t => new RegExp(`spell\/school\/${currentPage.school}`).test(t)))
}
spells.reduce
```
