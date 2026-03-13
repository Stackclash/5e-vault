---
obsidianUIMode: preview
selected_prompt_name: Test Prompt
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
  const promptTemplates = dc.useQuery(`@page and path("Prompt Builder Templates")`)
  const [selectedPromptName, setSelectedPromptName] = dc.useState(currentPage.value('selected_prompt_name'))

  dc.useEffect(()=> {
    app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
      fm.selected_prompt_name = selectedPromptName
      const promptOptionValueKeys = Object.keys(fm).filter(k => k.endsWith('_value'))
      for (const key of promptOptionValueKeys) {
        delete fm[key]
      }
    })
  }, [selectedPromptName])

  return (
    <>
      <label><strong>Select Prompt</strong>: </label>
      <select
        value={selectedPromptName}
        onChange={(e) => {
          setSelectedPromptName(e.target.value)
        }}
      >
        {promptTemplates.map(pt => {
          const typeKey = pt.$name.toLowerCase().replaceAll(' ','_')
          return (
            <option key={typeKey} value={pt.$name}>
              {pt.$name}
            </option>
          )
        })}
      </select>
    </>
  )
}
```

```datacorejsx
return function PromptBuilder() {

  const currentPage = dc.useCurrentFile()
  const templateName = currentPage.value('selected_prompt_name')

  if (!templateName) return <div>Select a prompt.</div>

  const templatePage = dc.useQuery(`@page and path("Prompt Builder Templates")`).filter(p => p.$name = templateName)[0]
  console.log(templatePage)
  const defs = templatePage?.value('prompt_option_definitions') || {}

  const template = dc.useMemo(() => {
    const file = app.vault.getAbstractFileByPath(templateName)
    return file ? app.vault.cachedRead(file) : Promise.resolve("")
  }, [templateName])

  const [templateText, setTemplateText] = dc.useState("")

  dc.useEffect(()=>{
    template.then(t => {
      const cleaned = t.replace(/^---[\s\S]*?---/, "").trim()
      setTemplateText(cleaned)
    })
  }, [template])

  const tokens = dc.useMemo(()=>{
    return [...templateText.matchAll(/{{(.*?)}}/g)]
      .map(m => m[1].trim())
      .filter((v,i,a)=>a.indexOf(v)===i)
  }, [templateText])

  const [values,setValues] = dc.useState({})

  const setValue = (field,val)=>{
    setValues(v=>({...v,[field]:val}))

    app.fileManager.processFrontMatter(
      app.workspace.getActiveFile(),
      fm => { fm[field] = val }
    )
  }

  const preview = dc.useMemo(()=>{

    let output = templateText
    const errors = []

    tokens.forEach(token=>{
      const field = token.replaceAll(' ','_') + "_value"
      let value = values[field] ?? currentPage.value(field)

      if (value?.path) {
        value = value.path.split('/').pop().replace('.md','')
      }

      if (!value) {
        errors.push(`Option "${token}" requires a value`)
      } else {
        output = output.replaceAll(`{{${token}}}`, value)
      }
    })

    return {output,errors}

  },[values,templateText])

  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>

      {/* INPUT PANEL */}

      <div>

        <h3>Prompt Inputs</h3>

        {tokens.map(token=>{

          const key = token.replaceAll(' ','_')
          const field = key+"_value"
          const def = defs[key] || {}

          const label = def.label || token.replace(/\b\w/g,c=>c.toUpperCase())

          switch(def.type){

            case "textarea":
              return (
                <div>
                  <label>{label}</label>
                  <textarea
                    value={values[field] || ""}
                    onChange={e=>setValue(field,e.target.value)}
                  />
                </div>
              )

            case "select":
              return (
                <div>
                  <label>{label}</label>
                  <select
                    value={values[field] || ""}
                    onChange={e=>setValue(field,e.target.value)}
                  >
                    <option></option>
                    {def.options?.map(o=>
                      <option key={o}>{o}</option>
                    )}
                  </select>
                </div>
              )

            default:
              return (
                <div>
                  <label>{label}</label>
                  <input
                    type="text"
                    value={values[field] || ""}
                    onChange={e=>setValue(field,e.target.value)}
                  />
                </div>
              )
          }

        })}

      </div>


      {/* LIVE PREVIEW */}

      <div>

        <h3>Prompt Preview</h3>

        {preview.errors.length > 0 &&
          <div class="callout callout-error">
            {preview.errors.map(e=><div>{e}</div>)}
          </div>
        }

        <pre>
          {preview.output}
        </pre>

      </div>

    </div>
  )
}
```
