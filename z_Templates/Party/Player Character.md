---
obsidianUIMode: preview
statblock: true
level:
race:
class:
hp:
stats:
ac:
modifier:
party:
art:
condition:
location:
---

<%-
    let title = tp.file.title
    if (tp.config.run_mode === 0) {
        title = tp.system.prompt("What is the name of the character?")
    }
    tp.file.move(`3. The Party/1. Players/${title}.md`)
-%>
