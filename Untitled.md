```dataviewjs
dv.list(dv.pages('"4. World Almanac/Worlds"').where(p => p.file.name != 'Worlds').file.name)
```

[${db.dataview.pages('"4. World Almanac/Worlds"').where(p => p.file.name != "Worlds" && p.regions.includes(row.note.page.file.name)).file.name}]