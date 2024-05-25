const build_array_yaml_list = (list, spaces) => {
  return list.reduce((accum, item) => {
    const itemString = typeof item === 'string' ? `- "${item}"` : `- ${item}`
    accum.push(itemString.padStart(spaces + itemString.length))
    return accum
  }, []).join(`\n`)
}

const build_object_yaml_list = (list, spaces) => {
  return Object.entries(list).reduce((accum, [key, value]) => {
    let finalSpaces = spaces
    let itemString

    if (typeof value === 'string') {
      itemString = `${key}: "${value}"`
    } else if (typeof value === 'number') {
      itemString = `${key}: ${value}`
    } else if (Array.isArray(value)) {
      itemString = build_array_yaml_list(value, spaces+2)
    } else if (typeof value === 'object') {
      itemString = build_object_yaml_list(value, spaces+2)
    }

    if (accum.length === 0) {
      itemString = `- ${itemString}`
    } else {
      finalSpaces += 2
    }
    accum.push(itemString.padStart(finalSpaces + itemString.length))

    return accum
  }, []).join(`\n`)
}

module.exports = (list, spaces) => {
  let result = []
  if (list.length > 0) {
    
    result.join(`\n`)
    result = `\n${result}`
  } else {
    result = "[]"
  }
  return result
}