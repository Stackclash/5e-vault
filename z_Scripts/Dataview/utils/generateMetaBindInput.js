export function generateMetaBindInput(metaBind) {
    if (!metaBind) return ''
    const { type = 'text', path = '', fieldWithPath = '', field, options = [], current = null, metaBindType = 'INPUT' } = metaBind

    let filePath = ''
    const fieldArray = Array.isArray(field) ? field : [field]

    if (fieldWithPath && current !== null) {
        filePath = current[fieldWithPath] || ''
    }

    return `\`${metaBindType}[${type}${options.length > 0 ? `(${options.join(',')})` : ''}:${filePath ? filePath + '#' : (path ? path + '#' : '')}${fieldArray.map(f => typeof f === 'string' ? `["${f}"]` : `[${f}]`).join('')}]\``
}