const build_object_yaml_list = (object, spaces) => {
  return Object.entries(object).reduce((accum, [key, value]) => {
    let itemString

    if (typeof value === 'string') {
      itemString = `${key}: "${value}"`
    } else if (Array.isArray(value)) {
      itemString = `${key}: ${build_array_yaml_list(value, spaces+2)}`
    } else if (typeof value === 'object') {
      itemString = `${key}: ${build_object_yaml_list(value, spaces+2)}`
    } else {
      itemString = `${key}: ${value}`
    }
    accum.push(itemString.padStart(spaces+ 2 + itemString.length))

    return accum
  }, []).join(`\n`)
}

module.exports = (list, spaces) => {
  let result = []
  if (list.length > 0) {
    list.forEach(item => {
      if (typeof item === 'string') {
        itemString = `- "${item}"`
      } else if (typeof item === 'number') {
        itemString = `- ${item}`
      } else if (typeof item === 'object') {
        itemString = `- ${build_object_yaml_list(item, spaces+2)}`
      }
    })
    
    result = `\n${result.join(`\n`)}`
  } else {
    result = "[]"
  }
  return result
}