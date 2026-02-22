export function generateMetaBindInput(metaBind) {
    if (!metaBind) return ''
    const { type = 'text', path = '', field, options = [] } = metaBind

    const fieldArray = Array.isArray(field) ? field : [field]

    return `\`INPUT[${type}${options.length > 0 ? `(${options.join(',')})` : ''}:${path ? path + '#' : ''}${fieldArray.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('')}]\``
}