const DatacoreTable = ({ query, filterKeys }) => {
  const [data, setData] = dc.useState([]);
  const [filters, setFilters] = dc.useState({});
  const [filterConfigs, setFilterConfigs] = dc.useState([]);
  const [loading, setLoading] = dc.useState(true);
  const [error, setError] = dc.useState(null);

  // Fetch data from datacore query
  dc.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Execute datacore query
        const result = await dc.query(query);
        
        setData(result)
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to execute query')
        setLoading(false)
      }
    }

    fetchData()
  }, [query])

  // Analyze data structure and build filter configs
  dc.useEffect(() => {
    if (data.length === 0 || filterKeys.length === 0) return

    const configs = filterKeys.map(key => {
      const sampleValue = data.find(item => item.value(key) !== undefined)?.value(key)
      
      if (Array.isArray(sampleValue)) {
        return { key, type: 'array' }
      } else if (typeof sampleValue === 'object' && sampleValue !== null) {
        const objectKeys = Object.keys(sampleValue)
        return { key, type: 'object', objectKeys }
      } else if (typeof sampleValue === 'number') {
        return { key, type: 'number' }
      } else if (typeof sampleValue === 'boolean') {
        return { key, type: 'boolean' }
      } else {
        return { key, type: 'string' }
      }
    })

    setFilterConfigs(configs)
  }, [data, filterKeys])

  // Filter data based on active filters
  const filteredData = dc.useMemo(() => {
    return data.filter(item => {
      return Object.entries(filters).every(([filterKey, filterValue]) => {
        if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) {
          return true
        }

        const [mainKey, subKey] = filterKey.split('.')
        const itemValue = subKey ? item[mainKey]?.[subKey] : item[mainKey]

        if (itemValue === undefined) return false

        // Handle different filter types
        if (Array.isArray(itemValue)) {
          // Array filtering
          if (Array.isArray(filterValue)) {
            return filterValue.some(fv => itemValue.includes(fv))
          }
          return itemValue.includes(filterValue)
        } else if (typeof itemValue === 'string') {
          return itemValue.toLowerCase().includes(filterValue.toLowerCase())
        } else if (typeof itemValue === 'number') {
          return itemValue === Number(filterValue)
        } else if (typeof itemValue === 'boolean') {
          return itemValue === filterValue
        }

        return true
      })
    })
  }, [data, filters])

  // Get unique values for array and string filters
  const getUniqueValues = (key, isNested = false) => {
    const values = new Set()
    const [mainKey, subKey] = key.split('.')

    data.forEach(item => {
      const value = isNested ? item[mainKey]?.[subKey] : item[key]
      if (Array.isArray(value)) {
        value.forEach(v => values.add(v))
      } else if (value !== undefined) {
        values.add(value)
      }
    })

    return Array.from(values).sort()
  }

  // Update filter
  const updateFilter = (key, value) => {
    setFilters(prev => {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        const { [key]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [key]: value }
    })
  }

  // Render filter input based on type
  const renderFilter = (config) => {
    const { key, type } = config

    switch (type) {
      case 'string':
        const stringOptions = getUniqueValues(key)
        return (
          <div key={key} className="filter-item">
            <label className="filter-label">{key}</label>
            <select
              className="filter-select"
              value={filters[key] || ''}
              onChange={(e) => updateFilter(key, e.target.value)}
            >
              <option value="">All</option>
              {stringOptions.map(option => (
                <option key={String(option)} value={String(option)}>
                  {String(option)}
                </option>
              ))}
            </select>
          </div>
        )

      case 'number':
        return (
          <div key={key} className="filter-item">
            <label className="filter-label">{key}</label>
            <input
              type="number"
              className="filter-input"
              placeholder="Filter..."
              value={filters[key] || ''}
              onChange={(e) => updateFilter(key, e.target.value)}
            />
          </div>
        )

      case 'boolean':
        return (
          <div key={key} className="filter-item">
            <label className="filter-label">{key}</label>
            <select
              className="filter-select"
              value={filters[key] === undefined ? '' : String(filters[key])}
              onChange={(e) => {
                const val = e.target.value === '' ? undefined : e.target.value === 'true'
                updateFilter(key, val)
              }}
            >
              <option value="">All</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        )

      case 'array':
        const arrayOptions = getUniqueValues(key)
        return (
          <div key={key} className="filter-item">
            <label className="filter-label">{key}</label>
            <select
              className="filter-select"
              multiple
              value={filters[key] || []}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, option => option.value)
                updateFilter(key, selected)
              }}
            >
              {arrayOptions.map(option => (
                <option key={String(option)} value={String(option)}>
                  {String(option)}
                </option>
              ))}
            </select>
          </div>
        )

      case 'object':
        return config.objectKeys?.map(subKey => {
          const nestedKey = `${key}.${subKey}`
          const nestedOptions = getUniqueValues(nestedKey, true)
          return (
            <div key={nestedKey} className="filter-item">
              <label className="filter-label">{nestedKey}</label>
              <select
                className="filter-select"
                value={filters[nestedKey] || ''}
                onChange={(e) => updateFilter(nestedKey, e.target.value)}
              >
                <option value="">All</option>
                {nestedOptions.map(option => (
                  <option key={String(option)} value={String(option)}>
                    {String(option)}
                  </option>
                ))}
              </select>
            </div>
          )
        })

      default:
        return null
    }
  }

  // Get all columns from data
  const columns = dc.useMemo(() => {
    if (data.length === 0) return []
    const allKeys = new Set()
    data.forEach(item => {
      Object.keys(item).forEach(key => allKeys.add(key))
    })
    return Array.from(allKeys)
  }, [data])

  // Render cell value
  const renderCellValue = (value) => {
    if (value === null || value === undefined) {
      return ''
    }
    if (Array.isArray(value)) {
      return value.join(', ')
    } else if (typeof value === 'object') {
      return JSON.stringify(value)
    }
    return String(value)
  }

  if (loading) {
    return <div className="datacore-loading">Loading data...</div>
  }

  if (error) {
    return <div className="datacore-error">Error: {error}</div>
  }

  if (data.length === 0) {
    return <div className="datacore-empty">No data found for query: {query}</div>
  }

  return (
    <div className="datacore-table-container">
      <style>{`
        .datacore-table-container {
          font-family: var(--font-interface, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
          padding: 20px;
          background: var(--background-primary);
          border-radius: 8px;
          border: 1px solid var(--background-modifier-border);
        }
        .datacore-loading,
        .datacore-error,
        .datacore-empty {
          padding: 20px;
          text-align: center;
          color: var(--text-muted);
        }
        .datacore-error {
          color: var(--text-error);
        }
        .filters-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
          padding: 16px;
          background: var(--background-secondary);
          border-radius: 6px;
        }
        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 150px;
        }
        .filter-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-normal);
          text-transform: capitalize;
        }
        .filter-select, .filter-input {
          padding: 6px 10px;
          border: 1px solid var(--background-modifier-border);
          border-radius: 4px;
          font-size: 14px;
          background: var(--background-primary);
          color: var(--text-normal);
        }
        .filter-select:focus, .filter-input:focus {
          outline: none;
          border-color: var(--interactive-accent);
        }
        .clear-filters {
          align-self: flex-end;
          padding: 8px 16px;
          background: var(--interactive-accent);
          color: var(--text-on-accent);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        .clear-filters:hover {
          background: var(--interactive-accent-hover);
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        .data-table th {
          background: var(--background-secondary);
          padding: 12px;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid var(--background-modifier-border);
          color: var(--text-normal);
        }
        .data-table td {
          padding: 10px 12px;
          border-bottom: 1px solid var(--background-modifier-border);
          color: var(--text-normal);
        }
        .data-table tr:hover {
          background: var(--background-secondary);
        }
        .result-count {
          margin-bottom: 12px;
          color: var(--text-muted);
          font-size: 14px;
        }
      `}</style>

      {filterConfigs.length > 0 && (
        <div className="filters-container">
          {filterConfigs.map(config => renderFilter(config))}
          {Object.keys(filters).length > 0 && (
            <button className="clear-filters" onClick={() => setFilters({})}>
              Clear Filters
            </button>
          )}
        </div>
      )}

      <div className="result-count">
        Showing {filteredData.length} of {data.length} items
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                {columns.map(col => (
                  <td key={col}>{renderCellValue(item[col])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

return { DatacoreTable };