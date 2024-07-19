---
useCalendarium: false
months:
  - Highsun
  - Firewane
  - Lowsun
  - Redfall
  - Snowmoot
  - Fellnight
seasons:
  - Spring
---
**Use Calendarium:** `INPUT[toggle:useCalendarium]`
**Months:** `INPUT[inlineList:months]`
**Seasons:** `INPUT[inlineList:seasons]`

```dataviewjs
const currentPage = dv.current()
if (currentPage.useCalendarium) {
    const currentTFile = app.vault.getFileByPath(currentPage.file.path)
    const calendarName = dv.page(dv.page('Configuration').active_world).calendar
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
    
    app.fileManager.processFrontMatter(currentTFile, (fm) => {
        fm.months = calendarConfig.months.map((month, i) => month.name)
    })
}
```
