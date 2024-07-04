---
travel:
  - - "[[4. World Almanac/Shops/Blue Water Inn.md|Blue Water Inn]]"
    - "10"
  - - "[[4. World Almanac/Places of Interest/Old Bonegrinder.md|Old Bonegrinder]]"
    - "200"
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
dv.table(['Location', 'Distance', 'Travel Time'], dv.current().travel.map(t => [t[0], `${t[1]} mi.`, `\`VIEW[round((${t[1]}* {Travel#TravelCalc}) / 60 / {Travel#HoursPerDay}, 1)]\` days`]))
```

`VIEW[round((10* {Travel#TravelCalc}) / 60 / {Travel#HoursPerDay}, 1)]`
