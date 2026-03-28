---
obsidianUIMode: preview
selected_prompt_path: Prompt Builder Templates/DM Knowledge Summarizer.md
template_definitions:
  name:
    label: Name
    type: text
current_note_value: 1. DM Toolkit/Knowledge/Sources/Articles/How to Plot THE FIRST ACT of a D&D Campaign.md
---
```datacorejsx
function truncateText(text, maxChars) {
  if (!maxChars || text.length <= maxChars) return text
  return text.slice(0, maxChars).trim() + "\n...[truncated]"
}

function stripMarkdownFrontmatter(text) {
  return String(text || "").replace(/^---[\s\S]*?---/, "").trim()
}

function normalizeToken(token) {
  return String(token || "").replaceAll(" ", "_").trim()
}

function humanizeToken(token) {
  return normalizeToken(token)
    .replaceAll("_", " ")
    .replace(/\b\w/g, c => c.toUpperCase())
}

function stripFrontmatter(text) {
  return String(text || "").replace(/^---[\s\S]*?---/, "").trim()
}

function extractTokens(text) {
  return [...String(text || "").matchAll(/{{(.*?)}}/g)]
    .map(m => m[1].trim())
    .filter((v, i, a) => a.indexOf(v) === i)
}

function normalizePreviewValue(value) {
  if (value == null) return ""
  if (Array.isArray(value)) {
    return value.map(normalizePreviewValue).filter(Boolean).join(", ")
  }
  if (typeof value === "boolean") return value ? "true" : ""
  if (typeof value === "string" && value.endsWith(".md")) {
    return value.split("/").pop().replace(".md", "")
  }
  if (value?.path) {
    return value.path.split("/").pop().replace(".md", "")
  }
  return String(value)
}

function formatQueryResults(results, format, field) {
  function getFieldValue(result, fieldName) {
    if (!fieldName) return ""

    let value = ""

    if (typeof result?.value === "function") {
      value = result.value(fieldName)
    }

    if (value == null || value === "") {
      value = result?.[fieldName]
    }

    if ((value == null || value === "") && result?.$frontmatter) {
      value = result.$frontmatter[fieldName]
    }

    return normalizePreviewValue(value)
  }

  switch (format) {
    case "bullet_list":
      return results.map(r => `- ${r.$name}`).join("\n")

    case "wikilinks":
      return results.map(r => `[[${r.$path}|${r.$name}]]`).join(", ")

    case "name_and_field":
      return results
        .map(r => {
          const fieldValue = getFieldValue(r, field)
          return fieldValue ? `${r.$name} — ${fieldValue}` : r.$name
        })
        .join("\n")

    case "bullet_name_and_field":
      return results
        .map(r => {
          const fieldValue = getFieldValue(r, field)
          return fieldValue ? `- ${r.$name}: ${fieldValue}` : `- ${r.$name}`
        })
        .join("\n")

    case "wikilink_and_field":
      return results
        .map(r => {
          const link = `[[${r.$path}|${r.$name}]]`
          const fieldValue = getFieldValue(r, field)
          return fieldValue ? `${link} — ${fieldValue}` : link
        })
        .join("\n")

    case "list_names":
    default:
      return results.map(r => r.$name).join(", ")
  }
}

function buildPreview({ templateText, fields, contextDefs, getStoredValue, resolvedContext }) {
  let output = templateText
  const errors = []
  const warnings = []

  for (const [fieldName, def] of Object.entries(fields || {})) {
    const fieldKey = `${normalizeToken(fieldName)}_value`
    const raw = getStoredValue(fieldKey)

    if (def?.required && (raw === "" || raw == null || raw === false)) {
      errors.push(`Missing required field: ${fieldName}`)
    }
  }

  output = output.replace(/{{#if\s+(.+?)}}([\s\S]*?){{\/if}}/g, (_, tokenName, inner) => {
    const normalized = normalizeToken(tokenName)

    if (normalized in (fields || {})) {
      const raw = getStoredValue(`${normalized}_value`)
      return raw ? inner : ""
    }

    if (normalized in (contextDefs || {})) {
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
    const isField = normalized in (fields || {})
    const isContext = normalized in (contextDefs || {})

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
}

function TextField({ token, def, getStoredValue, setValue }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const value = getStoredValue(field)

  return (
    <div>
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

function TextAreaField({ token, def, getStoredValue, setValue }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const value = getStoredValue(field)

  return (
    <div>
      <label>{label}</label>
      <textarea
        value={value}
        placeholder={def.placeholder || ""}
        onChange={e => setValue(field, e.target.value)}
      />
    </div>
  )
}

function ToggleField({ token, def, getStoredValue, setValue }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const value = !!getStoredValue(field)

  return (
    <div>
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

function SelectStaticField({ token, def, getStoredValue, setValue }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const value = getStoredValue(field)
  const options = (def.options || []).map(o =>
    typeof o === "string" ? { label: o, value: o } : o
  )

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={e => setValue(field, e.target.value)}>
        <option value=""></option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

function SelectQueryField({ token, def, getStoredValue, setValue, dc }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const value = getStoredValue(field)
  const results = dc.useQuery(def.query || "")
  const options = results.map(p => ({ label: p.$name, value: p.$path }))

  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={e => setValue(field, e.target.value)}>
        <option value=""></option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

function SuggesterField({ token, def, getStoredValue, setValue, dc }) {
  const field = `${token}_value`
  const label = def.label || humanizeToken(token)
  const storedValue = getStoredValue(field)
  const results = dc.useQuery(def.query || "")
  const allOptions = results.map(p => ({
    label: p.$name,
    value: p.$path
  }))

  const initialLabel =
    allOptions.find(o => o.value === storedValue)?.label ||
    (typeof storedValue === "string" && !storedValue.endsWith(".md") ? storedValue : "")

  const [inputValue, setInputValue] = dc.useState(initialLabel)

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
    <div>
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

function FieldRenderer({ token, def, getStoredValue, setValue, dc }) {
  if (def.type === "textarea") {
    return <TextAreaField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} />
  }

  if (def.type === "toggle") {
    return <ToggleField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} />
  }

  if (def.type === "select" && def.query) {
    return <SelectQueryField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} dc={dc} />
  }

  if (def.type === "select") {
    return <SelectStaticField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} />
  }

  if (def.type === "suggester") {
    return <SuggesterField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} dc={dc} />
  }

  return <TextField token={token} def={def} getStoredValue={getStoredValue} setValue={setValue} />
}

function NoteContentContextResolver({ def, getStoredValue, dc, children }) {
  const sourceToken = normalizeToken(def.source || "")
  const sourceField = `${sourceToken}_value`
  const sourcePath = getStoredValue(sourceField)

  const [content, setContent] = dc.useState("")

  dc.useEffect(() => {
    if (!sourcePath || typeof sourcePath !== "string") {
      setContent("")
      return
    }

    const file = app.vault.getAbstractFileByPath(sourcePath)

    if (!file) {
      setContent("")
      return
    }

    app.vault.cachedRead(file).then(text => {
      let output = text

      if (def.strip_frontmatter !== false) {
        output = stripMarkdownFrontmatter(output)
      }

      if (def.max_chars) {
        output = truncateText(output, def.max_chars)
      }

      setContent(output)
    })
  }, [sourcePath, def.strip_frontmatter, def.max_chars])

  return children(content)
}

function StaticContextResolver({ def, children }) {
  return children(def.value ?? "")
}

function DerivedContextResolver({ def, getStoredValue, children }) {
  const sourceToken = normalizeToken(def.source || "")
  const sourceField = `${sourceToken}_value`
  const raw = getStoredValue(sourceField)

  let result = ""
  if (raw) {
    if (def.transform === "note_title") {
      result = normalizePreviewValue(raw)
    } else {
      result = normalizePreviewValue(raw)
    }
  }

  return children(result)
}

function NoteFieldContextResolver({ def, getStoredValue, dc, children }) {
  const sourceToken = normalizeToken(def.source || "")
  const sourceField = `${sourceToken}_value`
  const sourcePath = getStoredValue(sourceField)
  const sourceQuery = sourcePath ? dc.useQuery(`@page and $path = "${sourcePath}"`) : []
  const sourcePage = sourceQuery[0]
  const result = sourcePage?.value(def.field) ?? ""

  return children(result)
}

function DatacoreQueryContextResolver({ def, dc, children }) {
  const results = dc.useQuery(def.query || "")
  return children(formatQueryResults(results, def.format, def.field))
}

function ContextValueResolver({ def, getStoredValue, dc, children }) {
  if (def.type === "static") {
    return <StaticContextResolver def={def} children={children} />
  }

  if (def.type === "derived") {
    return <DerivedContextResolver def={def} getStoredValue={getStoredValue} children={children} />
  }

  if (def.type === "note_field") {
    return <NoteFieldContextResolver def={def} getStoredValue={getStoredValue} dc={dc} children={children} />
  }

  if (def.type === "note_content") {
    return <NoteContentContextResolver def={def} getStoredValue={getStoredValue} dc={dc} children={children} />
  }

  if (def.type === "datacore_query") {
    return <DatacoreQueryContextResolver def={def} dc={dc} children={children} />
  }

  return children("")
}

function ContextCollector({ contextEntries, index, resolvedSoFar, getStoredValue, dc, children }) {
  if (index >= contextEntries.length) {
    return children(resolvedSoFar)
  }

  const [token, def] = contextEntries[index]

  return (
    <ContextValueResolver def={def} getStoredValue={getStoredValue} dc={dc}>
      {(resolvedValue) => (
        <ContextCollector
          contextEntries={contextEntries}
          index={index + 1}
          resolvedSoFar={{ ...resolvedSoFar, [token]: resolvedValue }}
          getStoredValue={getStoredValue}
          dc={dc}
          children={children}
        />
      )}
    </ContextValueResolver>
  )
}

return function PromptBuilderV2() {
  const currentPage = dc.useCurrentFile()
  const promptTemplates = dc.useQuery(`@page and path("Prompt Builder Templates")`)

  const [selectedPromptPath, setSelectedPromptPath] = dc.useState(
    currentPage.value("selected_prompt_path") || ""
  )

  const [templateText, setTemplateText] = dc.useState("")
  const [values, setValues] = dc.useState({})
  const previousPromptRef = dc.useRef(currentPage.value("selected_prompt_path") || "")
  const writeTimeoutRef = dc.useRef({})

  const templatePage = promptTemplates.find(p => p.$path === selectedPromptPath)
  const fields = templatePage?.value("fields") || {}
  const contextDefs = templatePage?.value("context") || {}

  function getStoredValue(field) {
    return values[field] ?? currentPage.value(field) ?? ""
  }

  function setValue(field, val) {
    setValues(v => ({ ...v, [field]: val }))

    if (writeTimeoutRef.current[field]) {
      clearTimeout(writeTimeoutRef.current[field])
    }

    writeTimeoutRef.current[field] = setTimeout(() => {
      app.fileManager.processFrontMatter(
        app.workspace.getActiveFile(),
        fm => { fm[field] = val }
      )
    }, 250)
  }

  dc.useEffect(() => {
    return () => {
      Object.values(writeTimeoutRef.current).forEach(timeoutId => clearTimeout(timeoutId))
    }
  }, [])

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

  const fieldEntries = Object.entries(fields)
  const contextEntries = Object.entries(contextDefs)

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
        <ContextCollector
          contextEntries={contextEntries}
          index={0}
          resolvedSoFar={{}}
          getStoredValue={getStoredValue}
          dc={dc}
        >
          {(resolvedContext) => {
            const preview = buildPreview({
              templateText,
              fields,
              contextDefs,
              getStoredValue,
              resolvedContext
            })

            return (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem"
              }}>
                <div>
                  <h3>Prompt Inputs</h3>
                  {fieldEntries.map(([token, def]) => (
                    <div key={`field-${normalizeToken(token)}`}>
                      <FieldRenderer
                        token={normalizeToken(token)}
                        def={def}
                        getStoredValue={getStoredValue}
                        setValue={setValue}
                        dc={dc}
                      />
                    </div>
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
            )
          }}
        </ContextCollector>
      )}
    </div>
  )
}
```
