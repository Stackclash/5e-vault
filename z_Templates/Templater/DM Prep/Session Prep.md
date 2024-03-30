<%*
let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
let formattedDate = moment(date).format("MM-DD-YYYY")
await tp.file.move('1. DM Stuff/Session Prep/' + formattedDate)
-%>
---
date: <% formattedDate %>
---
## Resources

## Details to Remember

## Strong Start  


## Scenes  


## Secrets and Clues  


## Fantastic Locations  


## Important NPCs  


## Potential Monsters  


## Potential Treasure  
