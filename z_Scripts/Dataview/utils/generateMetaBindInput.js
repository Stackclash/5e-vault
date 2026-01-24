export function generateMetaBindInput(metaBind) {
    if (!metaBind) return ''
    const { input = 'text', path = '', field, options = [] } = metaBind
    console.log(metaBind)

    return `\`INPUT[${input}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${Array.isArray(field) ? field.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('') : (typeof field === 'string' ? `["${field}"]` : `[${field}]`)}]\``
}