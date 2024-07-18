---
useCalendarium: true
---
```dataviewjs
const currentPage = dv.current()
const calendarName = dv.page(dv.page('Configuration').active_world).calendar
const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static

calendarConfig.months
```