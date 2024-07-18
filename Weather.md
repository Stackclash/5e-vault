---
useCalendarium: true
months:
  - name: Winterwane
    order: 0
  - name: Rainmoot
    order: 1
  - name: Palesun
    order: 2
  - name: Highsun
    order: 3
  - name: Firewane
    order: 4
  - name: Lowsun
    order: 5
  - name: Redfall
    order: 6
  - name: Snowmoot
    order: 7
  - name: Fellnight
    order: 8
---
**Use Calendarium:** `INPUT[toggle:useCalendarium]`
**Months:** `INPUT[inlineList:months]`

```dataviewjs
const currentPage = dv.current()
const currentTFile = app.vault.getFileByPath(currentPage.file.path)
const calendarName = dv.page(dv.page('Configuration').active_world).calendar
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static

app.fileManager.processFrontMatter(currentTFile, (fm) => {
	fm.months = calendarConfig.months.map((month, i) => ({name: month.name, order: i}))
})

```
