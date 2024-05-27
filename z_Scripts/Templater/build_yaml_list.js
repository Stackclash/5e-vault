const tp = app.plugins.getPlugin("templater-obsidian").templater.current_functions_object
console.log(tp)

const build_object_yaml_list = (object, spaces, config) => {
  return Object.entries(object).reduce((accum, [key, value]) => {
    let itemString

    if (typeof value === 'string') {
      let finalValue = value
      if (config && typeof config === 'object' && config.hasOwnProperty(key)) {
        finalValue = tp.user.find_note(finalValue, config[key])
      }

      itemString = `${key}: "${finalValue}"`
    } else if (Array.isArray(value)) {
      itemString = `${key}: ${build_array_yaml_list(value, spaces+2)}`
    } else if (typeof value === 'object') {
      itemString = `${key}: ${build_object_yaml_list(value, spaces+2)}`
    } else {
      itemString = `${key}: ${value}`
    }

    if (accum.length === 0) {
      accum.push(itemString)
    } else {
      accum.push(itemString.padStart(spaces + 2 + itemString.length))
    }

    return accum
  }, []).join(`\n`)
}

const build_array_yaml_list = (list, spaces, config) => {
  console.log(list,spaces,config)
  let result = []
  if (list.length > 0) {
    list.forEach(item => {
      if (typeof item === 'string') {
        itemString = `- "${config && typeof config === 'string' ? tp.user.find_note(item, config) : item}"`
      } else if (typeof item === 'number') {
        itemString = `- ${itemString}`
      } else if (typeof item === 'object') {
        itemString = `- ${build_object_yaml_list(tp, item, spaces, config)}`
      }

      result.push(itemString.padStart(spaces + itemString.length))
    })
    
    result = `\n${result.join(`\n`)}`
  } else {
    result = "[]"
  }
  return result
}

module.exports = build_array_yaml_list