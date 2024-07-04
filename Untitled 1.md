```dataviewjs
dv.list(dv.pages('#npc').filter(p => !p.tags.contains('compendium/src/5e/cos')).map(p => p.file.link))
```
