---
useCalendarium: false
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
```
**Use Calendarium:** `INPUT[toggle:useCalendarium]`
**Months:** `INPUT[inlineList:months]`
**Seasons:** `INPUT[inlineList:seasons]`

```dataviewjs
const weatherGenerator = (currentTFile) => {
    const useCalendarium = app.vault.metadataCache.getFileCache(currentTFile)
    console.log('HEY')
    if (currentPage.useCalendarium) {
        const calendarName = dv.page(dv.page('Configuration').active_world).calendar
        const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
        
        app.fileManager.processFrontMatter(currentTFile, (fm) => {
            fm.months = calendarConfig.months.map((month, i) => month.name)
        })
    }
}

app.vault.on('modify', weatherGenerator)
```
