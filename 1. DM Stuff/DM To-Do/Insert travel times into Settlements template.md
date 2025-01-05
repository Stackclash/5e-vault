---
travel:
  - - Werewolf Den
    - "50"
  - - Tsolenka Pass
    - "1000"
---
`BUTTON[addtravel,removetravel]`
```meta-bind-button
style: primary
id: addtravel
label: Add Travel Distance
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Travel Distance"
```
```meta-bind-button
style: primary
id: removetravel
label: Remove Travel Distance
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Travel Distance"
```
```dataviewjs
dv.table(['Location', 'Distance', 'Travel Time'], dv.current().travel.map(t => [dv.page(t[0]).file.link, `${t[1]} mi.`, `\`VIEW[round((${t[1]}* {Travel#TravelCalc}) / 60 / {Travel#HoursPerDay}, 1)]\` days`]))
```

VIEW[round((10* {Travel#TravelCalc}) / 60 / {Travel#HoursPerDay}, 1)]`

- IDEA: could a script be written to calculate the distance to some locations using the shortest distance to a middle location
ie. To get to z from x goes through y. The distance from x to y and y to z are filled out manually. So the script adds these 2 together to get the distance between x and z. 