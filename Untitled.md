```meta-bind-button
style: primary
label: Recreate View
actions:
  - type: command
    command: dataview:dataview-force-refresh-views
```

```dataviewjs
await dv.view('test')
```
