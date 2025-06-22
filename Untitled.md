- [ ] Hello [step:: Test Task] 
hello:: test

```dataviewjs
const tasks = dv.current().file.tasks

console.log(tasks)
tasks.forEach(t => dv.span(t.text))
```
