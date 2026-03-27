---
obsidianUIMode: preview
selected_prompt_path: Prompt Builder Templates/NPC Generator.md
template_definitions:
  name:
    label: Name
    type: text
location_value: 4. World Almanac/Settlements/Bruokdon.md
race_value: Human
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

  const templatePage = promptTemplates.find(p => p.$path === selectedPromptPath)
  const fields = templatePage?.value("fields") || {}
  const contextDefs = templatePage?.value("context") || {}

  function normalizeToken(token) {
    return token.replaceAll(" ", "_").trim()
  }

  function humanizeToken(token) {
    return token
      .replaceAll("_", " ")
      .replace(/\b\w/g, c => c.toUpperCase())
  }

  function stripFrontmatter(text) {
    return text.replace(/^---[\s\S]*?---/, "").trim()
  }

  function normalizePreviewValue(value) {
    if (value == null) return ""
    if (Array.isArray(value)) return value.map(normalizePreviewValue).join(", ")
    if (typeof value === "boolean") return value ? "true" : ""
    if (typeof value === "string" && value.endsWith(".md")) {
      return value.split("/").pop().replace(".md", "")
    }
    if (value?.path) {
      return value.path.split("/").pop().replace(".md", "")
    }
    return String(value)
  }

  function extractTokens(text) {
    return [...text.matchAll(/{{(.*?)}}/g)]
      .map(m => m[1].trim())
      .filter((v, i, a) => a.indexOf(v) === i)
  }

  function getStoredValue(field) {
    return values[field] ?? currentPage.value(field) ?? ""
  }

  function setValue(field, val) {
    setValues(v => ({ ...v, [field]: val }))
    app.fileManager.processFrontMatter(
      app.workspace.getActiveFile(),
      fm => { fm[field] = val }
    )
  }

  function formatQueryResults(results, format) {
    switch (format) {
      case "bullet_list":
        return results.map(r => `- ${r.$name}`).join("\n")
      case "wikilinks":
        return results.map(r => `[[${r.$path}|${r.$name}]]`).join(", ")
      case "list_names":
      default:
        return results.map(r => r.$name).join(", ")
    }
  }

  dc.useEffect(() => {
    const previous = previousPromptRef.current

    if (previous && previous !== selectedPromptPath) {
      app.fileManager.processFrontMatter(
        app.workspace.getActiveFile(),
        fm => {
          fm.selected_prompt_path = selectedPromptPath
          const keys = Object.keys(fm).filter(k => k.endsWith("_value"))
          for (const key of keys) delete fm[key]
        }
      )
      setValues({})
    } else if (!previous) {
      app.fileManager.processFrontMatter(
        app.workspace.getActiveFile(),
        fm => {
          fm.selected_prompt_path = selectedPromptPath
        }
      )
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
      setTemplateText(stripFrontmatter(text))
    })
  }, [selectedPromptPath, templatePage?.$mtime])

  const templateTokens = dc.useMemo(() => {
    return extractTokens(templateText)
  }, [templateText])

  const fieldEntries = dc.useMemo(() => {
    return Object.entries(fields)
  }, [templatePage?.$mtime, selectedPromptPath])

  const resolvedContext = dc.useMemo(() => {
    const out = {}

    for (const [token, def] of Object.entries(contextDefs)) {
      if (def.type === "static") {
        out[token] = def.value ?? ""
        continue
      }

      if (def.type === "derived") {
        const sourceToken = normalizeToken(def.source || "")
        const sourceField = `${sourceToken}_value`
        const raw = getStoredValue(sourceField)

        if (!raw) {
          out[token] = ""
          continue
        }

        if (def.transform === "note_title") {
          out[token] = normalizePreviewValue(raw)
        } else {
          out[token] = normalizePreviewValue(raw)
        }

        continue
      }

      if (def.type === "note_field") {
        const sourceToken = normalizeToken(def.source || "")
        const sourceField = `${sourceToken}_value`
        const sourcePath = getStoredValue(sourceField)

        if (!sourcePath || typeof sourcePath !== "string") {
          out[token] = ""
          continue
        }

        const sourcePage = dc.useQuery(`@page and $path = "${sourcePath}"`)[0]
        out[token] = sourcePage?.value(def.field) ?? ""
        continue
      }

      if (def.type === "datacore_query") {
        const results = dc.useQuery(def.query || "")
        out[token] = formatQueryResults(results, def.format)
        continue
      }

      out[token] = ""
    }

    return out
  }, [JSON.stringify(values), selectedPromptPath, templatePage?.$mtime])

  const preview = dc.useMemo(() => {
    let output = templateText
    const errors = []
    const warnings = []

    for (const [fieldName, def] of fieldEntries) {
      const fieldKey = `${normalizeToken(fieldName)}_value`
      const raw = getStoredValue(fieldKey)

      if (def.required && (raw === "" || raw == null || raw === false)) {
        errors.push(`Missing required field: ${fieldName}`)
      }
    }

    output = output.replace(/{{#if\s+(.+?)}}([\s\S]*?){{\/if}}/g, (_, tokenName, inner) => {
      const normalized = normalizeToken(tokenName)

      if (fields[normalized]) {
        const fieldKey = `${normalized}_value`
        const raw = getStoredValue(fieldKey)
        return raw ? inner : ""
      }

      if (contextDefs[normalized]) {
        const raw = resolvedContext[normalized]
        return raw ? inner : ""
      }

      errors.push(`Unknown conditional token: ${tokenName}`)
      return ""
    })

    const plainTokens = extractTokens(output).filter(
      t => !t.startsWith("#if ") && !t.startsWith("/if")
    )

    for (const token of plainTokens) {
      const normalized = normalizeToken(token)
      const isField = normalized in fields
      const isContext = normalized in contextDefs

      if (!isField && !isContext) {
        errors.push(`Unknown token: ${token}`)
        continue
      }

      let rawValue = ""

      if (isContext) {
        rawValue = resolvedContext[normalized]
      } else {
        rawValue = getStoredValue(`${normalized}_value`)
      }

      const replacement = normalizePreviewValue(rawValue)

      if (replacement === "") {
        if (isField && fields[normalized]?.required) {
          errors.push(`Missing value for token: ${token}`)
        } else if (isContext) {
          warnings.push(`Context token resolved empty: ${token}`)
        }
        continue
      }

      output = output.replaceAll(`{{${token}}}`, replacement)
    }

    output = output
      .replace(/{{#if\s+.+?}}/g, "")
      .replace(/{{\/if}}/g, "")
      .trim()

    return { output, errors, warnings }
  }, [
    templateText,
    templateTokens,
    fieldEntries,
    resolvedContext,
    JSON.stringify(values),
    selectedPromptPath,
    templatePage?.$mtime
  ])

  function TextField({ token, def }) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const value = getStoredValue(field)

    return (
      <div key={token}>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          placeholder={def.placeholder || ""}
          onChange={e => setValue(field, e.target.value)}
        />
      </div>
    )
  }

  function TextAreaField({ token, def }) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const value = getStoredValue(field)

    return (
      <div key={token}>
        <label>{label}</label>
        <textarea
          value={value}
          placeholder={def.placeholder || ""}
          onChange={e => setValue(field, e.target.value)}
        />
      </div>
    )
  }

  function ToggleField({ token, def }) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const value = !!getStoredValue(field)

    return (
      <div key={token}>
        <label>
          <input
            type="checkbox"
            checked={value}
            onChange={e => setValue(field, e.target.checked)}
          />
          {" "}{label}
        </label>
      </div>
    )
  }

  function SelectField({ token, def }) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const value = getStoredValue(field)

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
          value={value}
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

  function SuggesterField({ token, def }) {
    const field = `${token}_value`
    const label = def.label || humanizeToken(token)
    const storedValue = getStoredValue(field)

    const results = def.query ? dc.useQuery(def.query) : []
    const allOptions = results.map(p => ({
      label: p.$name,
      value: p.$path
    }))

    const computedInitialLabel =
      allOptions.find(o => o.value === storedValue)?.label ||
      (typeof storedValue === "string" && !storedValue.endsWith(".md") ? storedValue : "")

    const [inputValue, setInputValue] = dc.useState(computedInitialLabel)

    dc.useEffect(() => {
      const nextLabel =
        allOptions.find(o => o.value === storedValue)?.label ||
        (typeof storedValue === "string" && !storedValue.endsWith(".md") ? storedValue : "")
      setInputValue(nextLabel)
    }, [storedValue, results.length])

    const filteredOptions = allOptions.filter(o =>
      o.label.toLowerCase().includes((inputValue || "").toLowerCase())
    )

    return (
      <div key={token}>
        <label>{label}</label>
        <input
          list={`${field}_list`}
          value={inputValue}
          placeholder={def.placeholder || ""}
          onChange={e => {
            const text = e.target.value
            setInputValue(text)

            const exactMatch = allOptions.find(
              o => o.label.toLowerCase() === text.toLowerCase()
            )

            if (exactMatch) {
              setValue(field, exactMatch.value)
            } else if (text === "") {
              setValue(field, "")
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

  function FieldRenderer({ token, def }) {
    switch (def.type) {
      case "textarea":
        return <TextAreaField token={token} def={def} />
      case "toggle":
        return <ToggleField token={token} def={def} />
      case "select":
        return <SelectField token={token} def={def} />
      case "suggester":
        return <SuggesterField token={token} def={def} />
      default:
        return <TextField token={token} def={def} />
    }
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        }}>
          <div>
            <h3>Prompt Inputs</h3>
            {fieldEntries.map(([token, def]) => (
              <FieldRenderer key={token} token={normalizeToken(token)} def={def} />
            ))}
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
          </div>
        </div>
      )}
    </div>
  )
}
```
