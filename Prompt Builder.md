---
obsidianUIMode: preview
selected_prompt_path: Prompt Builder Templates/Test Prompt.md
template_definitions:
  name:
    label: Name
    type: text
---
```datacorejsx
return function PromptBuilder() {
  const currentPage = dc.useCurrentFile()

  /* ---------------------------- */
  /* Prompt Template Selection    */
  /* ---------------------------- */
  const promptTemplates = dc.useQuery(`@page and path("Prompt Builder Templates")`)

  const [selectedPromptPath, setSelectedPromptPath] = dc.useState(
    currentPage.value('selected_prompt_path')
  )

  /* ---------------------------- */
  /* Update frontmatter on change */
  /* ---------------------------- */
  dc.useEffect(() => {
    app.fileManager.processFrontMatter(
      app.workspace.getActiveFile(),
      (fm) => {
        fm.selected_prompt_path = selectedPromptPath
        const keys = Object.keys(fm).filter(k => k.endsWith('_value'))

        for (const key of keys) {
          delete fm[key]
        }
      }
    )
  }, [selectedPromptPath])


  /* ---------------------------- */
  /* Template lookup              */
  /* ---------------------------- */
  const templatePage =
    promptTemplates.find(p => p.$path === selectedPromptPath)

  const defs = Object.assign(
    {},
    currentPage.value('template_definitions') || {},
    templatePage?.value('template_definitions') || {}
  )

  /* ---------------------------- */
  /* Load template text           */
  /* ---------------------------- */
  const [templateText, setTemplateText] = dc.useState("")

  dc.useEffect(() => {
    if (!selectedPromptPath) return
    const file = app.vault.getAbstractFileByPath(selectedPromptPath)

    if (!file) {
      setTemplateText("")
      return
    }

    app.vault.cachedRead(file).then(t => {
      const cleaned = t.replace(/^---[\s\S]*?---/, "").trim()
      setTemplateText(cleaned)
    })
  }, [selectedPromptPath])


  /* ---------------------------- */
  /* Extract {{tokens}}           */
  /* ---------------------------- */
  const tokens = dc.useMemo(() => {
    return [...templateText.matchAll(/{{(.*?)}}/g)]
      .map(m => m[1].trim())
      .filter((v, i, a) => a.indexOf(v) === i)
  }, [templateText])


  /* ---------------------------- */
  /* Input state                  */
  /* ---------------------------- */
  const [values, setValues] = dc.useState({})
  const setValue = (field, val) => {
    setValues(v => ({ ...v, [field]: val }))

    app.fileManager.processFrontMatter(
      app.workspace.getActiveFile(),
      fm => { fm[field] = val }
    )
  }

  /* ---------------------------- */
  /* Build preview                */
  /* ---------------------------- */
  const preview = dc.useMemo(() => {
    let output = templateText
    const errors = []

    tokens.forEach(token => {
      const field = token.replaceAll(' ', '_') + "_value"

      let value = values[field] ?? currentPage.value(field)

      if (value?.path) {
        value = value.path.split('/').pop().replace('.md', '')
      }
      if (typeof value === "string" && value.endsWith(".md")) {
        value = value.split('/').pop().replace('.md','')
      }

      if (!value) {
        errors.push(`Option "${token}" requires a value`)
      }
      else {
        output = output.replaceAll(`{{${token}}}`, value)
      }
    })

    return { output, errors }
  }, [values, templateText, tokens])

  /* ---------------------------- */
  /* Render                       */
  /* ---------------------------- */
  return (
    <div>
      {/* Prompt selector */}
      <div style={{ marginBottom: "1rem" }}>
        <label><strong>Select Prompt:</strong></label>
        <select
          value={selectedPromptPath}
          onChange={(e) => setSelectedPromptPath(e.target.value)}
        >
          <option value="">Select...</option>
          {promptTemplates.map(pt => (
            <option key={pt.$path} value={pt.$path}>
              {pt.$name}
            </option>
          ))}
        </select>
      </div>

      {!selectedPromptPath &&
        <div>Select a prompt template.</div>
      }

      {selectedPromptPath && !app.vault.getAbstractFileByPath(selectedPromptPath) &&
        <div>Template not found.</div>
      }

      {selectedPromptPath && templateText &&
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        }}>

          {/* INPUT PANEL */}
          <div>
            <h3>Prompt Inputs</h3>

            {tokens.map(token => {
              const key = token.replaceAll(' ', '_')
              const field = key + "_value"
              const def = defs[key] || {}

              const label =
                def.label ||
                token.replace(/\b\w/g, c => c.toUpperCase())

              switch (def.type) {
                case "textarea":
                  return (
                    <div key={token}>
                      <label>{label}: </label>
                      <textarea
                        value={values[field] || ""}
                        onChange={e => setValue(field, e.target.value)}
                      />
                    </div>
                  )

                case "select":
                  let options = []

                  if (def.options) {
                    options = def.options
                  }
                  else if (def.query) {
                    const queryResults = dc.useQuery(def.query)

                    options = queryResults.map(p => ({
                      label: p.$name,
                      value: p.$path
                    }))
                  }

                  return (
                    <div key={token}>
                      <label>{label}</label>
                      <select
                        value={values[field] || ""}
                        onChange={e => setValue(field, e.target.value)}
                      >
                        <option value=""></option>
                        {options.map(o => {
                          if (typeof o === "string") {
                            return <option key={o}>{o}</option>
                          }

                          return (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  )

                default:
                  return (
                    <div key={token}>
                      <label>{label}: </label>
                      <input
                        type="text"
                        value={values[field] || ""}
                        onChange={e => setValue(field, e.target.value)}
                      />
                    </div>
                  )
              }
            })}
          </div>

          {/* PREVIEW PANEL */}
          <div>
            <h3>Prompt Preview</h3>

            {preview.errors.length > 0 &&
              <div class="callout callout-error">
                {preview.errors.map((e, i) =>
                  <div key={i}>{e}</div>
                )}
              </div>
            }
            <pre>{preview.output}</pre>
          </div>
        </div>
      }
    </div>
  )
}
```
