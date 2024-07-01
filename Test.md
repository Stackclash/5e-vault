---
Curse of Strahd:
  trust: hello
trust:
  Curse of Strahd: hello
---
```dataviewjs
const activeParty = dv.page(dv.page('Configuration').active_party)
console.log(activeParty)
dv.span(`\`INPUT[text:trust["${activeParty.file.name}"]]\``)
```
