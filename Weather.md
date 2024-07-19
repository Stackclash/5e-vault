---
obsidianUIMode: preview
useCalendarium: true
months:
  - Winterwane
  - Rainmoot
  - Palesun
  - Highsun
  - Firewane
  - Lowsun
  - Redfall
  - Snowmoot
  - Fellnight
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
**Months:** `INPUT[inlineList:months]`
**Seasons:** `INPUT[inlineList:seasons]`

```dataviewjs
const useCalendarium = dv.current().useCalendarium
console.log(app)
if (useCalendarium) {
    const currentTFile = app.workspace.getActiveFile()
    const calendarName = dv.page(dv.page('Configuration').active_world).calendar
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
    
    app.fileManager.processFrontMatter(currentTFile, (fm) => {
        fm.months = calendarConfig.months.map((month, i) => month.name)
    })
}
```