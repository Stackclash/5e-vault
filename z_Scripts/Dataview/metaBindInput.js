const inputType = input.type || 'text'
const path = input.path || ''
const field = input.field
const options = input.options || []

dv.span(`\`\`\`meta-bind\nINPUT[${inputType}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${Array.isArray(field) ? field.map(f => `["${f}"]`).join('') : `["${field}"]`}]\n\`\`\``)