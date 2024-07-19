---
obsidianUIMode: preview
useCalendarium: true
months:
  - name: Winterwane
    length: 40
  - name: Rainmoot
    length: 40
  - name: Palesun
    length: 40
  - name: Highsun
    length: 40
  - name: Firewane
    length: 40
  - name: Lowsun
    length: 40
  - name: Redfall
    length: 40
  - name: Snowmoot
    length: 40
  - name: Fellnight
    length: 40
seasons:
  - Spring
  - Summer
---
```meta-bind-button
style: primary
label: Reload
actions:
  - type: command
    command: dataview:dataview-rebuild-current-view
```

**Use Calendarium:** `INPUT[toggle:useCalendarium]`
**Seasons:** `INPUT[inlineList:seasons]`

```dataviewjs
dv.table(['Month', 'Length'], dv.current().months.map((month, i) => [`\`INPUT[text:months[${i}].name]\``, `\`INPUT[number:months[${i}].length]\``]))
```

```dataviewjs
const currentPage = dv.current()
if (currentPage.useCalendarium) {
    const currentTFile = app.workspace.getActiveFile()
    const calendarName = dv.page(dv.page('Configuration').active_world).calendar
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
    
    app.fileManager.processFrontMatter(currentTFile, (fm) => {
        fm.months = calendarConfig.months.map((month, i) => ({name: month.name, length: month.length}))
    })
}
```
