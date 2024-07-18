---
useCalendarium: true
---
**Use Calendarium:** `INPUT[toggle:useCalendarium]`
```dataviewjs
const currentPage = dv.current()
const calendarName = dv.page(dv.page('Configuration').active_world).calendar
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static

dv.current().months = 
```
