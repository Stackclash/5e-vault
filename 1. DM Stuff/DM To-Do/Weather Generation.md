---
obsidianUIMode: preview
useCalendarium: true
tempFlux: 10
seasons:
  - name: Spring
    tempMod: 0.5
    start: 2-11
    end: 4-
    precipMod: 0.4
  - name: Summer
    tempMod: 0.75
    start: 4-6
    end: 6-7
    precipMod: 0.2
  - name: Fall
    tempMod: 0.3
    start: 6-8
    end: 8-12
    precipMod: 0.1
  - name: Winter
    tempMod: 0.2
    start: 8-13
    end: 2-10
    precipMod: 0.3
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
climates:
  - name: Coast
    precipProb: 0.4
    windHigh: 8
    windLow: 30
    tempHigh: 105
    tempLow: 50
  - name: Desert
    precipProb: 0.1
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
  - name: Forest
    precipProb: 0
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
  - name: Grassland
    precipProb: 0
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
  - name: Hill
    precipProb: 0
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
  - name: Mountain
    precipProb: 0
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
  - name: Open Water
    precipProb: 0
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
precipitations:
  - name: Light Rain
    rules: []
  - name: Heavy Rain
    rules: []
  - name: Light Snow
    rules: []
  - name: Heavy Snow
    rules: []
winds:
  - name: Light Wind
    rules: []
  - name: Heavy Wind
    rules: []
  - name: Tornado
    rules: []
  - name: Hurricane
    rules: []
hasErrors: false
---
```meta-bind-button
style: primary
label: Reload
actions:
  - type: command
    command: dataview:dataview-rebuild-current-view
```

**Use Calendarium:** `INPUT[toggle:useCalendarium]`
**Daily Temp Flux:** `INPUT[number:tempFlux]`

# Months
`BUTTON[add-month,remove-month]`
```meta-bind-button
label: Add Month
hidden: true
id: add-month
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.months)) {
          fm.months = [{name: '', length}]
        } else {
          fm.months = [...fm.months, {name: '', length: 0}]
        }
      })
```
```meta-bind-button
label: Remove Month
hidden: true
id: remove-month
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        fm.months.splice(-1)
      })
```
> [!info]- Months Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().months.forEach((month, i) => {
  if (month.length <= 0) errorMessages.push(`Month ${month.name} must have a length of a positive number`)
  if (month.name.length === 0) errorMessages.push(`Month number ${i} should have a name`)
})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Month Errors\n${errorLines}`)
}
```
```dataviewjs
const useCalendarium = dv.current().useCalendarium
if (useCalendarium) {
    const currentTFile = app.workspace.getActiveFile()
    const calendarName = dv.page(dv.page('Configuration').active_world).calendar
    const calendarConfig = Calendarium.plugin.calendars.find(cal => cal.name === calendarName).static
    
    app.fileManager.processFrontMatter(currentTFile, (fm) => {
        fm.months = calendarConfig.months.map((month, i) => ({name: month.name, length: month.length}))
    })
}

dv.table([
  'Number',
  'Month',
  'Length'
], dv.current().months.map((month, i) => [
  (i+1).toString(),
  useCalendarium ? month.name : `\`INPUT[text:months[${i}].name]\``,
  useCalendarium ? month.length : `\`INPUT[number:months[${i}].length]\``
]))
```

# Seasons
`BUTTON[add-season,remove-season]`
```meta-bind-button
label: Add Season
hidden: true
id: add-season
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.seasons)) {
          fm.seasons = [{name: '', precipMod: 0, windMod: 0, tempMod: 0, start: '', end: ''}]
        } else {
          fm.seasons = [...fm.seasons, {name: '', precipMod: 0, windMod: 0, tempMod: 0, start: '', end: ''}]
        }
      })
```
```meta-bind-button
label: Remove Season
hidden: true
id: remove-season
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        fm.seasons.splice(-1)
      })
```
> [!info]- Seasons Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().seasons.forEach((season, i) => {})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Season Errors\n${errorLines}`)
}
```
```dataviewjs
const getDayInYear = (date) => {
    const [month, day] = date.split('-').map(Number)
    return dv.current().months.slice(0, month - 1).reduce((acc, curr) => acc + curr.length, 0) + day
}

const getTotalDaysInYear = () => dv.current().months.reduce((acc, curr) => acc + curr.length, 0)

const getDuration = (startDate, endDate) => {
    const startDay = getDayInYear(startDate)
    const endDay = getDayInYear(endDate)
    return endDay < startDay ? endDay + getTotalDaysInYear() - startDay + 1 : endDay - startDay + 1
}
dv.table([
  'Season',
  'Precipitation Modifier',
  'Wind Modifier',
  'Temperature Modifier',
  'Beginning',
  'Ending',
  'Duration'
], dv.current().seasons.map((season, i) => {
  const {start, end} = season
  return [
    `\`INPUT[text:seasons[${i}].name]\``,
    `\`INPUT[number:seasons[${i}].precipMod]\``,
    `\`INPUT[number:seasons[${i}].windMod]\``,
    `\`INPUT[number:seasons[${i}].tempMod]\``,
    `\`INPUT[text:seasons[${i}].start]\``,
    `\`INPUT[text:seasons[${i}].end]\``,
    start && end ? getDuration(start,end) : 'Fill out Beginning and End of Season'
  ]
}))
```

# Climates
`BUTTON[add-climate,remove-climate]`
```meta-bind-button
label: Add Climate
hidden: true
id: add-climate
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.climates)) {
          fm.climates = [{name: '', precipProb: 0, windHigh: 0, windLow: 0, tempHigh: 0, tempLow: 0}]
        } else {
          fm.climates = [...fm.climates, {name: '', precipProb: 0, windHigh: 0, windLow: 0, tempHigh: 0, tempLow: 0}]
        }
      })
```
```meta-bind-button
label: Remove Climate
hidden: true
id: remove-climate
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        fm.climates.splice(-1)
      })
```
> [!info]- Climate Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().climates.forEach((climate, i) => {})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Climate Errors\n${errorLines}`)
}
```
```dataviewjs
dv.table([
  'Climate',
  'Precipitation Probability',
  'Wind High',
  'Wind Low',
  'Temperature High',
  'Temperature Low'
], dv.current().climates.map((climate, i) => {
  return [
    `\`INPUT[text:climates[${i}].name]\``,
    `\`INPUT[number:climates[${i}].precipProb]\``,
    `\`INPUT[number:climates[${i}].windHigh]\``,
    `\`INPUT[number:climates[${i}].windLow]\``,
    `\`INPUT[number:climates[${i}].tempHigh]\``,
    `\`INPUT[number:climates[${i}].tempLow]\``,
  ]
}))
```

# Precipitation States
`BUTTON[add-precipitation,remove-precipitation]`
```meta-bind-button
label: Add Precipitation State
hidden: true
id: add-precipitation
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.precipitations)) {
          fm.precipitations = [{name: '', conditions: [], rules: []}]
        } else {
          fm.precipitations = [...fm.precipitations, {name: '', conditions: [], rules: []}]
        }
      })
```
```meta-bind-button
label: Remove Precipitation State
hidden: true
id: remove-precipitation
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        fm.precipitations.splice(-1)
      })
```
> [!info]- Precipitation Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().precipitations.forEach((precipitation, i) => {})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Precipitation Errors\n${errorLines}`)
}
```
```dataviewjs
dv.table([
  'Precipitation',
  'Conditions',
  'Rules'
], dv.current().precipitations.map((climate, i) => {
  return [
    `\`INPUT[text:precipitations[${i}].name]\``,
    `\`INPUT[inlineList:precipitations[${i}].conditions]\``,
    `\`INPUT[inlineList:precipitations[${i}].rules]\``
  ]
}))
```

# Wind States
`BUTTON[add-wind,remove-wind]`
```meta-bind-button
label: Add Wind State
hidden: true
id: add-wind
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.winds)) {
          fm.winds = [{name: '', conditions: [], rules: []}]
        } else {
          fm.winds = [...fm.winds, {name: '', conditions: [], rules: []}]
        }
      })
```
```meta-bind-button
label: Remove Wind State
hidden: true
id: remove-wind
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        fm.winds.splice(-1)
      })
```
> [!info]- Wind Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().winds.forEach((wind, i) => {})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Wind Errors\n${errorLines}`)
}
```
```dataviewjs
dv.table([
  'Wind',
  'Conditions',
  'Rules'
], dv.current().winds.map((climate, i) => {
  return [
    `\`INPUT[text:winds[${i}].name]\``,
    `\`INPUT[inlineList:winds[${i}].conditions]\``,
    `\`INPUT[inlineList:winds[${i}].rules]\``
  ]
}))
```

# To Do
- [x] Need a config table to determine beginning and end of seasons in the configured months
- [x] Need a config table to denote high and low temperatures for a climate

# Thoughts about how to calculate weather
1. Seasons determine how close temperature gets to the min and max of a climate
2. There needs to be a mechanic that weather doesn't switch from one extreme to the other day to day
3. Maybe create a table of wind and precipitation types with changeable rules (ie. snow when temp is below 32 degrees)
4. I'll need to create functions for the following:
	- calculate distance to end or beginning of season

# Resources
- [[06 Adventure Environments#Weather|Dungeon Master Guide - Weather]]

- [ ] Use [Weather Generator](https://docs.google.com/spreadsheets/d/1x9pTHiW0ldBiWTfGaOdjzVEl1QBbT2xh9rW1jo8LNIU/edit?usp=sharing) or [RPG Weather](https://docs.google.com/spreadsheets/d/1x9pTHiW0ldBiWTfGaOdjzVEl1QBbT2xh9rW1jo8LNIU/edit?gid=1396814895#gid=1396814895) for inspiration on logic
- [ ] Script should save result to Session Log or another page to keep track of weather for that day
- [ ] Configuration page should take Fantasy Calendar into consideration for Months vs Seasons