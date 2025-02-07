<%*
let parties = dv.pages("#party")
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties, false, "What party is this Session for?")
-%>
---
obsidianUIMode: preview
party: "<% selectedParty.file.link %>"
tags:
  - quest
---
