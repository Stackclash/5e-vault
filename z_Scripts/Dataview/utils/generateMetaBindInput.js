export function generateMetaBindInput(metaBind) {
    if (!metaBind) return ''
    const { type = 'text', path = '', field, options = [] } = metaBind

    return `\`INPUT[${type}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${Array.isArray(field) ? field.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('') : (typeof field === 'string' ? `["${field}"]` : `[${field}]`)}]\``
}