`syrinscape:mood:163593`
![[Chase.mp3#loop]]

```dataviewjs
const pages = dv.pages('#session-prep').filter(p => p.file.outlinks.length > 0)
dv.list(pages.flatMap(p => p.file.outlinks.filter(o => o.path.includes('5. Mechanics/Items'))))
```
