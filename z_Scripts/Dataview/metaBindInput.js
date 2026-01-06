const inputType = input.type || 'text'
const path = input.path || ''
const field = input.field
const options = input.options || []
console.log(`\`INPUT[${inputType}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${Array.isArray(field) ? field.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('') : (typeof field === 'string' ? `["${field}"]` : `[${field}]`)}]\``)

dv.span(`\`INPUT[${inputType}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${Array.isArray(field) ? field.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('') : (typeof field === 'string' ? `["${field}"]` : `[${field}]`)}]\``)