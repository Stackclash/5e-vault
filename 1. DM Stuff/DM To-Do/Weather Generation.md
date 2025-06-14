---
obsidianUIMode: preview
useCalendarium: true
tempFlux: 10
seasons:
  - name: Spring
    tempMod: 0.5
    start: 1-36
    end: 4-5
    precipMod: 0.4
  - name: Summer
    tempMod: 0.75
    start: 4-6
    end: 6-15
    precipMod: 0.2
  - name: Fall
    tempMod: 0.3
    start: 6-16
    end: 8-25
    precipMod: 0.1
  - name: Winter
    tempMod: 0.2
    start: 8-26
    end: 1-35
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
    precipProb: 0.7
    windHigh: 80
    windLow: 3
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
    precipProb: 0.5
    windHigh: 0
    windLow: 0
    tempHigh: 0
    tempLow: 0
states:
  - name: Light Rain
    category: precipitation
    conditions:
      - precipitation
      - random < 70
    rules:
      - Disadvantage on ability checks to climb or scale objects and ability checks to maintain balance or keep one’s footing.
  - name: Heavy Rain
    category: precipitation
    conditions:
      - precipitation
      - random >= 70
    rules:
      - Disadvantage on ability checks to climb or scale objects and ability checks to maintain balance or keep one’s footing.
      - The area becomes lightly obscured.
      - Open flames are extinguished.
      - Disadvantage on Wisdom (Perception) checks relying on hearing or scent.
      - Disadvantage on Wisdom (Survival) checks to track creatures.
      - Advantage on Wisdom (Survival) checks to forage for water.
  - name: Light Snow
    category: precipitation
    conditions:
      - precipitation
      - 32 > tempLow
    rules:
      - The area becomes lightly obscured.
      - Advantage on Wisdom (Survival) checks to track creatures.
  - name: Heavy Snow
    category: precipitation
    conditions:
      - precipitation
      - 32 > tempLow
    rules:
      - The area becomes lightly obscured.
      - Advantage on Wisdom (Survival) checks to track creatures.
      - The area becomes difficult terrain.
      - Wisdom (Survival) checks to forage for water automatically succeed.
  - name: Light Wind
    category: wind
    conditions:
      - windSpeed < 25
    rules:
      - Clears light fog, smoke, or fumes.
  - name: High Wind
    category: wind
    conditions:
      - windSpeed > 25
    rules:
      - Disadvantage on ranged weapon attacks.
      - Clears all fog, smoke, or fumes.
      - Extinguishes open flames.
      - Disadvantage on Wisdom (Perception) checks relying on hearing.
      - Medium and smaller creatures with a fly speed must return to the ground at the end of their turn, or fall. Creatures with a hover speed have their speed halved.
  - name: Storm
    category: general
    conditions:
      - precipitation
      - windSpeed > 25
    rules:
      - The area becomes heavily obscured.
      - "The area becomes difficult terrain. "
  - name: Extreme Heat
    conditions:
      - tempHigh > 100
    states: []
    rules:
      - Constitution save every hour, failure brings exhaustion. DC starts at 5 and increases by 1 every hour, or 2 if wearing medium or heavy armor.
      - Insufficient water provokes disadvantage on this save.
      - Resistance or immunity to fire damage, or being naturally adapted to hot-weather climates means automatic success.
    category: temperature
  - name: Extreme Cold
    conditions:
      - tempLow < 0
    rules:
      - DC 10 Constitution save every hour, failure brings exhaustion.
      - Resistance or immunity to cold, is natural adaption to cold-weather climates, or cold-weather gear means automatic success.
    category: temperature
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
`BUTTON[add-month]`
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
  'Length',
  'Delete'
], dv.current().months.map((month, i) => [
  (i+1).toString(),
  useCalendarium ? month.name : `\`INPUT[text:months[${i}].name]\``,
  useCalendarium ? month.length : `\`INPUT[number:months[${i}].length]\``,
  useCalendarium ? "" : `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: months\n      index: ${i}\n\`\`\``
]))
```

# Seasons
`BUTTON[add-season]`
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
  'Duration',
  'Delete'
], dv.current().seasons.map((season, i) => {
  const {start, end} = season
  return [
    `\`INPUT[text:seasons[${i}].name]\``,
    `\`INPUT[number:seasons[${i}].precipMod]\``,
    `\`INPUT[number:seasons[${i}].windMod]\``,
    `\`INPUT[number:seasons[${i}].tempMod]\``,
    `\`INPUT[text:seasons[${i}].start]\``,
    `\`INPUT[text:seasons[${i}].end]\``,
    start && end ? getDuration(start,end) : 'Fill out Beginning and End of Season',
    `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: seasons\n      index: ${i}\n\`\`\``
  ]
}))
```

# Climates
`BUTTON[add-climate]`
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
  'Temperature Low',
  'Delete'
], dv.current().climates.map((climate, i) => {
  return [
    `\`INPUT[text:climates[${i}].name]\``,
    `\`INPUT[number:climates[${i}].precipProb]\``,
    `\`INPUT[number:climates[${i}].windHigh]\``,
    `\`INPUT[number:climates[${i}].windLow]\``,
    `\`INPUT[number:climates[${i}].tempHigh]\``,
    `\`INPUT[number:climates[${i}].tempLow]\``,
    `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: climates\n      index: ${i}\n\`\`\``
  ]
}))
```

# State Conditions
`BUTTON[add-state]`
```meta-bind-button
label: Add State Condition
hidden: true
id: add-state
style: primary
actions:
  - type: inlineJS
    code: |-
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
        if (!Array.isArray(fm.states)) {
          fm.states = [{name: '', category: '', conditions: [], rules: []}]
        } else {
          fm.conditions = [...fm.states, {name: '', category: '',  conditions: [], rules: []}]
        }
      })
```
> [!info]- State Configuration
> This is info
```dataviewjs
const errorMessages = []
dv.current().states.forEach((precipitation, i) => {})
if (errorMessages.length > 0) {
  const errorLines = errorMessages.map(line => `> - ${line}`).join('\n')
  dv.paragraph(`> [!fail] Condition Errors\n${errorLines}`)
}
```
```dataviewjs
dv.table([
  'State',
  'Category',
  'Conditions',
  'Rules',
  'Delete'
], dv.current().states.map((climate, i) => {
  return [
    `\`INPUT[text:states[${i}].name]\``,
    `\`INPUT[inlineSelect(defaultValue(general),option(general,General),option(precipitation,Precipitation),option(wind,Wind),option(temperature,Temperature)):states[${i}].category]\``,
    `\`INPUT[inlineList:states[${i}].conditions]\``,
    `\`INPUT[inlineList:states[${i}].rules]\``,
    `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: states\n      index: ${i}\n\`\`\``
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
- [ ] Use [Weather Generator](https://docs.google.com/spreadsheets/d/1x9pTHiW0ldBiWTfGaOdjzVEl1QBbT2xh9rW1jo8LNIU/edit?usp=sharing),  [RPG Weather](https://docs.google.com/spreadsheets/d/1n8K_T7FIFEOTUkAmbnvb8ULmfnuKPj2fBKkad4k2k-g/edit?gid=1442896453#gid=1442896453), or [Dragon Magazine #137](https://annarchive.com/files/Drmg137.pdf#page=36) for inspiration on logic
- [ ] Script should save result to Session Log or another page to keep track of weather for that day
- [ ] Configuration page should take Fantasy Calendar into consideration for Months vs Seasons