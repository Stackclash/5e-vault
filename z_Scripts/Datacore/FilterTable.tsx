// ------------------------
// Datacore Table Component
// ------------------------
function DataCoreTable({ query, filterKeys }: { query: string; filterKeys: string[] }) {
  
  // Fetch notes using Datacore reactive query
  const notes = dc.query(query); // automatically reactive

  // ------------------------
  // Flatten nested frontmatter for filtering
  // ------------------------
  function flattenFrontmatter(obj: Record<string, any>, prefix = "") {
    const result: Record<string, any> = {};
    for (const key in obj) {
      const value = obj[key];
      const combinedKey = prefix ? `${prefix}.${key}` : key;

      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.assign(result, flattenFrontmatter(value, combinedKey));
      } else {
        result[combinedKey] = value;
      }
    }
    return result;
  }

  // ------------------------
  // Extract Filters with Caching
  // ------------------------
  const filters = dc.memo(() => {
    const f: Record<
      string,
      { type: "multi" | "range" | "single"; options?: Set<any>; min?: number; max?: number }
    > = {};

    for (const key of filterKeys) {
      const values: any[] = [];

      for (const note of notes) {
        const front = flattenFrontmatter(note.frontmatter || {});
        if (!(key in front)) continue;
        const val = front[key];
        if (Array.isArray(val)) values.push(...val);
        else values.push(val);
      }

      if (values.length === 0) continue;

      if (values.every(v => typeof v === "number")) {
        f[key] = { type: "range", min: Math.min(...values), max: Math.max(...values) };
      } else if (values.some(v => Array.isArray(v) || typeof v === "string")) {
        f[key] = { type: "multi", options: new Set(values.flat()) };
      } else {
        f[key] = { type: "single", options: new Set(values) };
      }
    }

    return f;
  });

  // ------------------------
  // Reactive Filters
  // ------------------------
  const activeFilters = dc.signal<Record<string, any>>({});

  // ------------------------
  // Filter Notes
  // ------------------------
  const filteredNotes = dc.memo(() => {
    return notes.filter(note => {
      const flatFront = flattenFrontmatter(note.frontmatter || {});
      return Object.entries(activeFilters.value).every(([key, val]) => {
        if (val === null || val === undefined || val === "") return true;

        const noteVal = flatFront[key];
        if (noteVal === undefined) return false;

        if (Array.isArray(noteVal)) {
          if (Array.isArray(val)) return val.every(v => noteVal.includes(v));
          return noteVal.includes(val);
        }

        if (typeof val === "object" && "min" in val && "max" in val) {
          return noteVal >= val.min && noteVal <= val.max;
        }

        return noteVal === val;
      });
    });
  });

  // ------------------------
  // Render
  // ------------------------
  return dc.html`
    <div class="datacore-table">
      <div class="filters" style="margin-bottom:1em;">
        ${Object.entries(filters.value).map(([key, filter]) => {
          if (filter.type === "multi") {
            return dc.html`
              <div style="margin-bottom:0.5em;">
                <label>${key}: </label>
                <select multiple @change=${e => {
                  const selected = Array.from(e.target.selectedOptions).map(o => o.value);
                  activeFilters.value = { ...activeFilters.value, [key]: selected };
                }}>
                  ${Array.from(filter.options!).map(opt => dc.html`<option value=${opt}>${opt}</option>`)}
                </select>
              </div>
            `;
          }

          if (filter.type === "range") {
            const current = activeFilters.value[key] || { min: filter.min, max: filter.max };
            return dc.html`
              <div style="margin-bottom:0.5em;">
                <label>${key}: </label>
                <input type="range" min=${filter.min} max=${filter.max} value=${current.min} @input=${e => {
                  activeFilters.value = { ...activeFilters.value, [key]: { ...current, min: Number(e.target.value) } };
                }}>
                <input type="range" min=${filter.min} max=${filter.max} value=${current.max} @input=${e => {
                  activeFilters.value = { ...activeFilters.value, [key]: { ...current, max: Number(e.target.value) } };
                }}>
                <span>${current.min} - ${current.max}</span>
              </div>
            `;
          }

          return dc.html`
            <div style="margin-bottom:0.5em;">
              <label>${key}: </label>
              <select @change=${e => {
                activeFilters.value = { ...activeFilters.value, [key]: e.target.value || null };
              }}>
                <option value="">All</option>
                ${Array.from(filter.options!).map(opt => dc.html`<option value=${opt}>${opt}</option>`)}
              </select>
            </div>
          `;
        })}
      </div>

      <table border="1" cellpadding="5">
        <thead>
          <tr>
            ${notes[0] && Object.keys(flattenFrontmatter(notes[0].frontmatter || {})).map(k => dc.html`<th>${k}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${filteredNotes.value.map(note => {
            const flat = flattenFrontmatter(note.frontmatter || {});
            return dc.html`
              <tr>
                ${Object.values(flat).map(v => dc.html`<td>${Array.isArray(v) ? v.join(", ") : JSON.stringify(v)}</td>`)}
              </tr>
            `;
          })}
        </tbody>
      </table>
    </div>
  `;
}

return { DataCoreTable };