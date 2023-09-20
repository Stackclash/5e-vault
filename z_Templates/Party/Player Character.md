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
<% 
let title = tp.system.prompt("What is the name of the character?")
await tp.file.rename(title)
%>
<% tp.file.move('3. The Party/1. Players/' + tp.file.title) %>