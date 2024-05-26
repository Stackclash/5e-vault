```dataviewjs
dv.list(dv.pages('"1. DM Stuff/Session Journals"').sort((a, b) => new Date(a.)).map(page => page.file.name))
```
