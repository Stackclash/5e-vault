---
obsidianUIMode: preview
selected_prompt_path: Prompt Builder Templates/NPC Generator.md
template_definitions:
  name:
    label: Name
    type: text
gender_value: Male
alignment_value: Lawful Good
race_value: Human
include_secret_value: false
location_value: 4. World Almanac/Settlements/Vallaki.md
---
```datacorejsx
return function PromptBuilderV2() {
  const currentPage = dc.useCurrentFile()
  const promptTemplates = dc.useQuery(`@page and path("Prompt Builder Templates")`)

  const [selectedPromptPath, setSelectedPromptPath] = dc.useState(
    currentPage.value("selected_prompt_path") || ""
  )

  const previousPromptRef = dc.useRef(currentPage.value("selected_prompt_path") || "")

  const [templateText, setTemplateText] = dc.useState("")
  const [values, setValues] = dc.useState({})
  const [contextValues, setContextValues] = dc.useState({})
  const [copyState, setCopyState] = dc.useState("")

  const templatePage = promptTemplates.find(p => p.$path === selectedPromptPath)

  const templateDefs = Object.assign(
    {},
    currentPage.value("template_definitions") || {},
    templatePage?.value("template_definitions") || {}
  )

  const contextDefs = Object.assign(
    {},
    currentPage.value("context_definitions") || {},
    templatePage?.value("context_definitions") || {}
  )

  const outputConfig = templatePage?.value("output") || {}

  dc.useEffect(() => {
    const previous = previousPromptRef.current

    if (previous && previous !== selectedPromptPath) {
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), fm => {
        fm.selected_prompt_path = selectedPromptPath
        const keys = Object.keys(fm).filter(k => k.endsWith("_value"))
        for (const key of keys) delete fm[key]
      })
      setValues({})
      setContextValues({})
    } else if (!previous) {
      app.fileManager.processFrontMatter(app.workspace.getActiveFile(), fm => {
        fm.selected_prompt_path = selectedPromptPath
      })
    }

    previousPromptRef.current = selectedPromptPath
  }, [selectedPromptPath])

  dc.useEffect(() => {
    if (!selectedPromptPath) {
      setTemplateText("")
      return
    }

    const file = app.vault.getAbstractFileByPath(selectedPromptPath)
    if (!file) {
      setTemplateText("")
      return
    }

    app.vault.cachedRead(file).then(text => {
      const cleaned = text.replace(/^---[\s\S]*?---/, "").trim()
      setTemplateText(cleaned)
    })
  }, [selectedPromptPath, templatePage?.$mtime])

  const orderedFields = dc.useMemo(() => {
    return Object.entries(templateDefs)
  }, [templatePage?.$mtime, selectedPromptPath])

  function normalizeToken(token) {
    return token.replaceAll(" ", "_").trim()
  }

  function humanizeToken(token) {
    return token
      .replaceAll("_", " ")
      .replace(/\b\w/g, c => c.toUpperCase())
  }

  function normalizePreviewValue(value) {
    if (value == null) return ""
    if (Array.isArray(value)) return value.map(normalizePreviewValue).join(", ")
    if (typeof value === "string" && value.endsWith(".md")) {
      return value.split("/").pop().replace(".md", "")
    }
    if (value?.path) {
      return value.path.split("/").pop().replace(".md", "")
    }
    if (typeof value === "boolean") return value ? "true" : "false"
    return String(value)
  }

  function setValue(field, val) {
    setValues(v => ({ ...v, [field]: val }))
    app.fileManager.processFrontMatter(app.workspace.getActiveFile(), fm => {
      fm[field] = val
    })
  }

  async function computeContextValues() {
    const computed = {}

    for (const [token, def] of Object.entries(contextDefs)) {
      if (def.type === "note_field") {
        const sourceToken = normalizeToken(def.source_token || "")
        const sourceField = `${sourceToken}_value`
        const sourcePath = values[sourceField] ?? currentPage.value(sourceField)

        if (!sourcePath) {
          computed[token] = ""
          continue
        }

        const sourcePage = dc.useQuery(`@page and $path = "${sourcePath}"`)[0]
        computed[token] = sourcePage?.value(def.field) ?? ""
      }

      if (def.type === "datacore_query") {
        const results = dc.useQuery(def.query || "")
        if (def.format === "list_names") {
          computed[token] = results.map(r => r.$name).join(", ")
        } else if (def.format === "bullet_list") {
          computed[token] = results.map(r => `- ${r.$name}`).join("\n")
        } else {
          computed[token] = results.map(r => r.$name).join(", ")
        }
      }

      if (def.type === "static") {
        computed[token] = def.value ?? ""
      }
    }

    setContextValues(computed)
  }

  dc.useEffect(() => {
    computeContextValues()
  }, [JSON.stringify(values), selectedPromptPath, templatePage?.$mtime])

  const templateTokens = dc.useMemo(() => {
    return [...templateText.matchAll(/{{(.*?)}}/g)]
      .map(m => m[1].trim())
      .filter((v, i, a) => a.indexOf(v) === i)
  }, [templateText])

  const preview = dc.useMemo(() => {
    let output = templateText
    const errors = []
    const warnings = []

    const conditionalRegex = /{{#if\s+(.+?)}}([\s\S]*?){{\/if}}/g
    output = output.replace(conditionalRegex, (_, tokenName, inner) => {
      const normalized = normalizeToken(tokenName)
      const field = `${normalized}_value`
      const rawValue = values[field] ?? currentPage.value(field)
      return rawValue ? inner : ""
    })

    for (const token of templateTokens) {
      if (token.startsWith("#if ") || token.startsWith("/if")) continue

      const normalized = normalizeToken(token)

      let rawValue = contextValues[normalized]

      if (rawValue == null || rawValue === "") {
        const field = `${normalized}_value`
        rawValue = values[field] ?? currentPage.value(field)
      }

      const previewValue = normalizePreviewValue(rawValue)

      const isDefinedField = normalized in templateDefs
      const isDefinedContext = normalized in contextDefs

      if (!isDefinedField && !isDefinedContext) {
        errors.push(`Unknown token: ${token}`)
        continue
      }

      if (previewValue === "") {
        if (isDefinedField && templateDefs[normalized]?.type !== "toggle") {
          errors.push(`Missing value for: ${token}`)
        } else if (isDefinedContext) {
          warnings.push(`Context token resolved empty: ${token}`)
        }
        continue
      }

      output = output.replaceAll(`{{${token}}}`, previewValue)
    }

    output = output
      .replace(/{{#if\s+.+?}}/g, "")
      .replace(/{{\/if}}/g, "")
      .trim()

    let formattedOutput = output

    if (outputConfig.mode === "yaml") {
      formattedOutput = `---\n${output}\n---`
    } else if (outputConfig.mode === "markdown_codeblock") {
      formattedOutput = "```md\n" + output + "\n```"
    }

    return {
      output: formattedOutput,
      rawOutput: output,
      errors,
      warnings
    }
  }, [
    templateText,
    templateTokens,
    values,
    contextValues,
    selectedPromptPath,
    templatePage?.$mtime
  ])

  function renderField(token, def) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const storedValue = values[field] ?? currentPage.value(field) ?? ""

    if (def.type === "textarea") {
      return (
        <div key={token}>
          <label>{label}</label>
          <textarea
            value={storedValue}
            onChange={e => setValue(field, e.target.value)}
          />
        </div>
      )
    }

    if (def.type === "toggle") {
      return (
        <div key={token}>
          <label>
            <input
              type="checkbox"
              checked={!!storedValue}
              onChange={e => setValue(field, e.target.checked)}
            />
            {" "}{label}
          </label>
        </div>
      )
    }

    if (def.type === "select") {
      let options = []

      if (def.options) {
        options = def.options.map(o =>
          typeof o === "string" ? { label: o, value: o } : o
        )
      } else if (def.query) {
        const results = dc.useQuery(def.query)
        options = results.map(p => ({ label: p.$name, value: p.$path }))
      }

      return (
        <div key={token}>
          <label>{label}</label>
          <select
            value={storedValue}
            onChange={e => setValue(field, e.target.value)}
          >
            <option value=""></option>
            {options.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      )
    }

    if (def.type === "suggester") {
      const results = def.query ? dc.useQuery(def.query) : []
      const allOptions = results.map(p => ({
        label: p.$name,
        value: p.$path
      }))

      const initialLabel =
        allOptions.find(o => o.value === storedValue)?.label ||
        (typeof storedValue === "string" && !storedValue.endsWith(".md") ? storedValue : "")

      const [inputValue, setInputValue] = dc.useState(initialLabel)

      const filteredOptions = allOptions.filter(o =>
        o.label.toLowerCase().includes((inputValue || "").toLowerCase())
      )

      return (
        <div key={token}>
          <label>{label}</label>
          <input
            list={`${field}_list`}
            value={inputValue}
            onChange={e => {
              const text = e.target.value
              setInputValue(text)

              const match = allOptions.find(
                o => o.label.toLowerCase() === text.toLowerCase()
              )

              if (match) {
                setValue(field, match.value)
              }
            }}
          />
          <datalist id={`${field}_list`}>
            {filteredOptions.map(o => (
              <option key={o.value} value={o.label} />
            ))}
          </datalist>
        </div>
      )
    }

    return (
      <div key={token}>
        <label>{label}</label>
        <input
          type="text"
          value={storedValue}
          onChange={e => setValue(field, e.target.value)}
        />
      </div>
    )
  }

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label><strong>Select Prompt:</strong></label>
        <select
          value={selectedPromptPath}
          onChange={e => setSelectedPromptPath(e.target.value)}
        >
          <option value="">Select...</option>
          {promptTemplates.map(pt => (
            <option key={pt.$path} value={pt.$path}>{pt.$name}</option>
          ))}
        </select>
      </div>

      {!selectedPromptPath && <div>Select a prompt template.</div>}

      {selectedPromptPath && !app.vault.getAbstractFileByPath(selectedPromptPath) &&
        <div>Template not found.</div>
      }

      {selectedPromptPath && templateText && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <h3>Prompt Inputs</h3>
            {orderedFields.map(([token, def]) => renderField(token, def))}
          </div>

          <div>
            <h3>Prompt Preview</h3>

            {preview.errors.length > 0 && (
              <div class="callout callout-error">
                {preview.errors.map((e, i) => <div key={i}>{e}</div>)}
              </div>
            )}

            {preview.warnings.length > 0 && (
              <div class="callout callout-warning">
                {preview.warnings.map((w, i) => <div key={i}>{w}</div>)}
              </div>
            )}

            <pre>{preview.output}</pre>

            <button
              onClick={() => {
                navigator.clipboard.writeText(preview.rawOutput)
                setCopyState("Copied")
                setTimeout(() => setCopyState(""), 1200)
              }}
            >
              Copy AI Output
            </button>

            {copyState && <span style={{ marginLeft: "0.5rem" }}>{copyState}</span>}
          </div>
        </div>
      )}
    </div>
  )
}
```
