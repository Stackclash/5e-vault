---
obsidianUIMode: preview
selected_prompt_type: npc_generator
prompt_types:
  - NPC Generator
  - Location Generator
  - Quest Generator
  - Faction Generator
prompt_option_definitions:
  name:
    type: text
    label: Name
  location:
    type: suggester
    label: Location
    query: "#location"
  description:
    type: textarea
    label: Description
npc_generator: |-
  This is going well

  Hello
  {{description}}
  {{location}}
location_generator: This is crazy
npc_generator_options:
  location: true
  name: true
  description: true
location_generator_options:
  name: false
  location: true
quest_generator_options:
  name: true
description_value:
name_value:
location_value:
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
> const options = Object.keys(dv.current().prompt_option_definitions)
> for (const opt of options) {
>   dv.paragraph(`**${opt.charAt(0).toUpperCase() + opt.slice(1)}**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.${opt}]\``)
> }
> ```

```dataviewjs
const page = dv.current()
const typeKey = page.selected_prompt_type
const options = page[`${typeKey}_options`] || {}
const defs = page.prompt_option_definitions || {}

for (const [opt, enabled] of Object.entries(options)) {

  if (!enabled) continue

  const def = defs[opt] || {type:"text", label:opt}

  const label = def.label || opt
  const field = `${opt}_value`

  let input = ""

  switch(def.type) {

    case "textarea":
      input = `INPUT[textArea:${field}]`
      break

    case "suggester":
      input = `INPUT[suggester(optionQuery(${def.query})):${field}]`
      break

    case "select":
      const opts = def.options.map(o => `option(${o})`).join(',')
      input = `INPUT[inlineSelect(${opts}):${field}]`
      break

    default:
      input = `INPUT[text:${field}]`

  }

  dv.paragraph(`**${label}**: \`${input}\``)
}
```

```dataviewjs
const page = dv.current()

const typeKey = page.selected_prompt_type
let template = page[typeKey] || ""

const options = page[`${typeKey}_options`] || {}

const errors = []

// Find all template tokens like {{name}}
const tokenMatches = [...template.matchAll(/{{(.*?)}}/g)]
const tokens = tokenMatches.map(t => t[1].trim())

// Validate tokens
for (const token of tokens) {
  const enabled = options[token]

  if (!(token in options)) {
    errors.push(`Template references unknown option **${token}**.`)
    continue
  }

  if (!enabled) {
    errors.push(`Option **${token}** is referenced in the template but is disabled.`)
    continue
  }

  const value = page[`${token}_value`]
  if (!value || value === "") {
    errors.push(`Option **${token}** is enabled but has no value.`)
  }
}

// Show errors if any
if (errors.length > 0) {
  // dv.el("div", "", { cls: "prompt-errors" })

  dv.paragraph(`> [!error] Prompt Validation\n${errors.map(e => `> ${e}`).join('\n')}`)
} else {
  // Replace tokens
  for (const token of tokens) {
    let value = page[`${token}_value`] ?? ""
    if (value?.path) value = value.path.split('/').pop().replace('.md','')
    template = template.replaceAll(`{{${token}}}`, value)
  }

  dv.paragraph(`\`\`\`\n${template}\n\`\`\``)
}
```