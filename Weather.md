---
obsidianUIMode: preview
useCalendarium: false
seasons:
  - name: Spring
    tempMod: 0
  - name: Summer
    tempMod: 0
  - name: Fall
    tempMod: 0
  - name: Winter
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
climates:
  - name: ""
    seasonFlux: 0
    precipMod: 0
    windMod: 0
---
```meta-bind-button
style: primary
label: Reload
actions:
  - type: command
    command: dataview:dataview-rebuild-current-view
```

**Use Calendarium:** `INPUT[toggle:useCalendarium]`

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

dv.table(['Month', 'Length'], dv.current().months.map((month, i) => [`\`INPUT[text:months[${i}].name]\``, `\`INPUT[number:months[${i}].length]\``]))
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
          fm.seasons = [{name: '', tempMod: 0}]
        } else {
          fm.seasons = [...fm.seasons, {name: '', tempMod: 0}]
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
```dataviewjs
dv.table(['Season', 'Temperature Modifier'], dv.current().seasons.map((season, i) => {
  return [
    `\`INPUT[text:seasons[${i}].name]\``,
    `\`INPUT[text:seasons[${i}].tempMod]\``,
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
          fm.climates = [{name: '', seasonFlux: 0, precipMod: 0, windMod: 0}]
        } else {
          fm.climates = [...fm.climates, {name: '', seasonFlux: 0, precipMod: 0, windMod: 0}]
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
```dataviewjs
dv.table(['Climate', 'Season Tempearture Flux', 'Precipitation Modifier', 'Wind Modifier'], dv.current().climates.map((climate, i) => {
  return [
    `\`INPUT[text:climates[${i}].name]\``,
    `\`INPUT[text:climates[${i}].seasonFlux]\``,
    `\`INPUT[text:climates[${i}].precipMod]\``,
    `\`INPUT[text:climates[${i}].windMod]\``,
  ]
}))
```