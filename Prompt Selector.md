---
obsidianUIMode: preview
selected_prompt_type: npc_generator
prompt_types:
  - NPC Generator
  - Location Generator
  - Quest Generator
  - Faction Generator
prompt_options:
  - name
  - location
  - description
npc_generator: |-
  This is going well

  Hello
location_generator: This is crazy
npc_generator_options:
  location: false
  name: true
  description: true
location_generator_options:
  name: false
  location: true
quest_generator_options:
  name: true
---
`BUTTON[refresh]`
```meta-bind-button
style: primary
label: Refresh
id: refresh
hidden: true
actions:
  - type: command
    command: dataview:dataview-force-refresh-views
```
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const promptTypes = currentPage.value('prompt_types')
  const [selectedType, setSelectedType] = dc.useState(currentPage.value('selected_prompt_type'))

  dc.useEffect(()=> {
    app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
      fm.selected_prompt_type = selectedType
      const promptOptionValueKeys = Object.keys(fm).filter(k => k.endsWith('_value'))
      for (const key of promptOptionValueKeys) {
        fm[key] = null
      }
    })
  }, [selectedType])

  return (
    <>
      <label><strong>Select Prompt</strong>: </label>
      <select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value)
        }}
      >
        {promptTypes.map(pt => {
          const typeKey = pt.toLowerCase().replaceAll(' ','_')
          return (
            <option key={typeKey} value={typeKey}>
              {pt}
            </option>
          )
        })}
      </select>
    </>
  )
}
```

> [!info]- Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().selected_prompt_type})`

> [!info]- Options
> ```dataviewjs
> const templateOptionsKey = `${this.current().selected_prompt_type}_options`
> const options = dv.current().prompt_options
> for (const opt of options) {
>   dv.paragraph(`**${opt.charAt(0).toUpperCase() + opt.slice(1)}**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.${opt}]\``)
> }
> ```

```dataviewjs
const options = this.current()[`${this.current().selected_prompt_type}_options`]
if (options && 'name' in options && options.name) {
  dv.paragraph(`**Name**: \`INPUT[text:name_value]\``)
}
if (options && 'location' in options && options.location) {
  dv.paragraph(`**Location**: \`INPUT[suggester(optionQuery(#location)):location_value]\``)
}
if (options && 'description' in options && options.description) {
  dv.paragraph(`**Description**: \`INPUT[textArea:description_value]\``)
}
```

```dataviewjs
dv.paragraph(`\`\`\`\n${this.current()[this.current().selected_prompt_type] || ''}\n\`\`\``)
```