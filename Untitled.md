```dataviewjs
dv.list(dv.pages('"4. World Almanac/Worlds"').where(p => p.file.name != "Worlds" && p.regions.includes(dv.pages().where(p => p.file.name == "Barovia").file.name)).file.name)
```

[${db.dataview.pages('"4. World Almanac/Worlds"').where(p => p.file.name != "Worlds" && p.regions.includes(row.note.page.file.name)).file.name}]