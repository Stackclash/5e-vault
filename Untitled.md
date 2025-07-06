- [ ] Hello [hello:: world] [test:: wow]
	- step:: Test Task

```dataviewjs
const tasks = dv.current().file.tasks

console.log(tasks)
tasks.forEach(t => dv.span(t.text))
```

> [!Error]
> Help me!

---
obsidianUIMode: preview
---
> [!Error] Error Executing Template
> Modal was Cancelled
---
obsidianUIMode: preview
---
> [!Error] Error Executing Template
> This template can only be used to create new files.
