- [ ] Hello [hello:: world] [test:: wow]
	- step:: Test Task

```dataviewjs
const tasks = dv.current().file.tasks

console.log(tasks)
tasks.forEach(t => dv.span(t.text))
```

