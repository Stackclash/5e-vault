---
obsidianUIMode: preview
selected_prompt_type: Location Generator
prompt_types:
  - NPC Generator
  - Location Generator
  - Quest Generator
  - Faction Generator
prompt_options:
  - name
  - location
npc_generator: |-
  This is going well

  Hello
location_generator: This is crazy
npc_generator_options:
  location: true
  name: true
name_option: Test
location_option: "[[4. World Almanac/Settlements/Thornmere.md|Thornmere]]"
location_generator_options:
  name: false
  location: true
---
**Select Prompt**: `INPUT[inlineSelect(option(NPC Generator),option(Location Generator),option(Quest Generator),option(Faction Generator)):selected_prompt_type]` `BUTTON[refresh]`
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const promptTypes = currentPage.value('prompt_types')
  const [setSelectedType, selectedType] = dc.useState(currentPage.value('selected_prompt_type'))

  dc.useEffect(()=> {
    app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
      const promptOptionValueKeys = Object.keys(fm).filter(k => k.endsWith('_option'))
      console.log(promptOptionValueKeys)
    })
  }, [selectedType])

  return (
    <label><strong>Select Prompt</strong>:</label>
    <select
      value={selectType}
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
  )
}
```
```meta-bind-button
style: primary
label: Refresh
id: refresh
hidden: true
actions:
  - type: command
    command: dataview:dataview-force-refresh-views
```

> [!info]- Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().selected_prompt_type.toLowerCase().replaceAll(' ','_')})`

> [!info]- Options
> ```dataviewjs
> const templateOptionsKey = `${this.current().selected_prompt_type.toLowerCase().replaceAll(' ','_')}_options`
> const options = dv.current().prompt_options
> for (const opt of options) {
>   dv.paragraph(`**${opt.charAt(0).toUpperCase() + opt.slice(1)}**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.${opt}]\``)
> }
> ```

```dataviewjs
const options = this.current()[`${this.current().selected_prompt_type.toLowerCase().replaceAll(' ','_')}_options`]
if (options && 'name' in options && options.name) {
  dv.paragraph(`**Name**: \`INPUT[text:name_option]\``)
}
if (options && 'location' in options && options.location) {
  dv.paragraph(`**Location**: \`INPUT[suggester(optionQuery(#location)):location_option]\``)
}
```

```dataviewjs
dv.paragraph(`\`\`\`\n${this.current()[this.current().selected_prompt_type.toLowerCase().replaceAll(' ','_')] || ''}\n\`\`\``)
```