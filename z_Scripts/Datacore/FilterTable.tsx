// ------------------------
// Types
// ------------------------
interface DataCoreTableProps {
  query: string; // Datacore query string
  filterKeys: string[]; // Frontmatter keys to generate filters
}

type FrontmatterValue = string | number | Array<string | number> | Record<string, any>;

// ------------------------
// Helper Functions
// ------------------------

// Flatten object keys for nested frontmatter
function flattenFrontmatter(
  obj: Record<string, any>,
  prefix = ""
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in obj) {
    const value = obj[key];
    const combinedKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flattenFrontmatter(value, combinedKey));
    } else {
      result[combinedKey] = value;
    }
  }
  return result;
}

// Extract filters from notes and cache them
function useExtractedFilters(notes: any[], filterKeys: string[]) {
  return dc.useMemo(() => {
    const filters: Record<
      string,
      { type: "multi" | "range" | "single"; options?: Set<any>; min?: number; max?: number }
    > = {};

    for (const key of filterKeys) {
      const values: any[] = [];

      for (const note of notes) {
        const frontmatter = flattenFrontmatter(note.frontmatter || {});
        if (!(key in frontmatter)) continue;

        const val = frontmatter[key];
        if (Array.isArray(val)) {
          values.push(...val);
        } else if (typeof val === "number") {
          values.push(val);
        } else {
          values.push(val);
        }
      }

      if (values.length === 0) continue;

      if (values.every(v => typeof v === "number")) {
        filters[key] = { type: "range", min: Math.min(...values), max: Math.max(...values) };
      } else if (values.some(v => Array.isArray(v) || typeof v === "string")) {
        filters[key] = { type: "multi", options: new Set(values.flat()) };
      } else {
        filters[key] = { type: "single", options: new Set(values) };
      }
    }

    return filters;
  }, [notes, filterKeys]);
}

// ------------------------
// Component
// ------------------------
function FilterTable({ query, filterKeys }: DataCoreTableProps) {
  const [notes, setNotes] = dc.useState<any[]>([]);
  const [activeFilters, setActiveFilters] = dc.useState<Record<string, any>>({});

  // Fetch notes from Datacore
  dc.useEffect(() => {
    const results = window.datacore.query(query); // pseudo-call
    setNotes(results);
  }, [query]);

  const filters = useExtractedFilters(notes, filterKeys);

  // Filter notes based on active filters
  const filteredNotes = dc.useMemo(() => {
    return notes.filter(note => {
      const flatFront = flattenFrontmatter(note.frontmatter || {});
      return Object.entries(activeFilters).every(([key, value]) => {
        if (value === null || value === undefined || value === "") return true;

        const noteValue = flatFront[key];
        if (noteValue === undefined) return false;

        if (Array.isArray(noteValue)) {
          if (Array.isArray(value)) return value.every(v => noteValue.includes(v));
          return noteValue.includes(value);
        }

        if (typeof value === "object" && "min" in value && "max" in value) {
          return noteValue >= value.min && noteValue <= value.max;
        }

        return noteValue === value;
      });
    });
  }, [notes, activeFilters]);

  // ------------------------
  // Render
  // ------------------------
  return (
    <div>
      {/* Filters */}
      <div className="filters" style={{ marginBottom: "1em" }}>
        {Object.entries(filters).map(([key, filter]) => {
          if (filter.type === "multi") {
            return (
              <div key={key} style={{ marginBottom: "0.5em" }}>
                <label>{key}: </label>
                <select
                  multiple
                  onChange={e => {
                    const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
                    setActiveFilters(prev => ({ ...prev, [key]: selected }));
                  }}
                >
                  {Array.from(filter.options!).map(opt => (
                    <option key={String(opt)} value={opt}>
                      {String(opt)}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (filter.type === "range") {
            const current = activeFilters[key] || { min: filter.min, max: filter.max };
            return (
              <div key={key} style={{ marginBottom: "0.5em" }}>
                <label>{key}: </label>
                <input
                  type="range"
                  min={filter.min}
                  max={filter.max}
                  value={current.min}
                  onChange={e =>
                    setActiveFilters(prev => ({
                      ...prev,
                      [key]: { ...current, min: Number(e.target.value) }
                    }))
                  }
                />
                <input
                  type="range"
                  min={filter.min}
                  max={filter.max}
                  value={current.max}
                  onChange={e =>
                    setActiveFilters(prev => ({
                      ...prev,
                      [key]: { ...current, max: Number(e.target.value) }
                    }))
                  }
                />
                <span>
                  {current.min} - {current.max}
                </span>
              </div>
            );
          }

          // Single-select fallback
          return (
            <div key={key} style={{ marginBottom: "0.5em" }}>
              <label>{key}: </label>
              <select
                onChange={e =>
                  setActiveFilters(prev => ({
                    ...prev,
                    [key]: e.target.value || null
                  }))
                }
              >
                <option value="">All</option>
                {Array.from(filter.options!).map(opt => (
                  <option key={String(opt)} value={opt}>
                    {String(opt)}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            {notes[0] &&
              Object.keys(flattenFrontmatter(notes[0].frontmatter || {})).map(k => (
                <th key={k}>{k}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map(note => (
            <tr key={note.path}>
              {Object.values(flattenFrontmatter(note.frontmatter || {})).map((v, i) => (
                <td key={i}>{Array.isArray(v) ? v.join(", ") : JSON.stringify(v)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

return { FilterTable }