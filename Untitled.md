```meta-bind-button
style: primary
label: Reroll Dice
actions:
  - type: command
    command: dataview:dataview-force-refresh-views
```
```dataviewjs
await dv.view('test')
```
