---
obsidianUIMode: preview
selected_prompt_type: faction_generator
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
npc_generator: ""
location_generator: ""
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
        delete fm[key]
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

```dataviewjs
const page = dv.current()

const typeKey = page.selected_prompt_type
const template = page[typeKey] || ""

const defs = page.prompt_option_definitions || {}

// find template variables
const tokens = [...template.matchAll(/{{(.*?)}}/g)]
  .map(m => m[1].trim())

// remove duplicates
const uniqueTokens = [...new Set(tokens)]

for (const token of uniqueTokens) {

  const def = defs[token] || {}

  // if (!def) {
  //   dv.paragraph(`❌ Unknown option **${token}** used in template`)
  //   continue
  // }

  const label = def.label || token.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())
  const field = `${token.replaceAll(' ', '_')}_value`

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

    case "toggle":
      input = `INPUT[toggle:${field}]`
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

const errors = []

const tokens = [...template.matchAll(/{{(.*?)}}/g)]
  .map(m => m[1].trim())

const uniqueTokens = [...new Set(tokens)]

for (const token of uniqueTokens) {
  const field = token.replaceAll(' ', '_')
  let value = page[`${field}_value`]
  if (value?.path) value = value.path.split('/').pop().replace('.md','')

  if (!value) {
    errors.push(`Option **${token}** requires a value.`)
    continue
  }

  template = template.replaceAll(`{{${token}}}`, value)
}

if (errors.length) {
  dv.paragraph(`> [!error] Prompt Validation\n${errors.map(e => `> ${e}`).join('\n')}`)
} else {
  dv.paragraph(`\`\`\`\n${template}\n\`\`\``)
}
```
