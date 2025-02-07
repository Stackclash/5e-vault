<%*
let parties = dv.pages("#party")
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties, false, "What party is this Session for?")

await tp.file.move(`4. World Almanac/Quests/` + tp.file.title)
if (tp.config.run_mode === 0) {
    let title = await tp.system.prompt("What is the name of the quest?")
    await tp.file.rename(title)
}
-%>
---
obsidianUIMode: preview
party: "<% selectedParty.file.link %>"
description: ""
tags:
  - quest
---
# **`=this.file.name`**

## Description
`INPUT[textArea:description]`

## Quest Hooks
- 

## Related NPCs
- 

## Quest Steps
- [ ] 