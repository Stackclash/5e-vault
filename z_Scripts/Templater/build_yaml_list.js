const tp = app.plugins.getPlugin("templater-obsidian").templater.current_functions_object

const build_object_yaml_list = (object, spaces, config, startWithNewLine) => {
  const result = Object.entries(object).reduce((accum, [key, value]) => {
    let itemString

    if (typeof value === 'string') {
      let finalValue = value
      if (config && typeof config === 'object' && config.hasOwnProperty(key)) {
        finalValue = tp.user.find_file(finalValue, config[key])
      }

      itemString = `${key}: "${finalValue}"`
    } else if (Array.isArray(value)) {
      if (key === 'max') console.log(object, spaces, config, key,  value, build_array_yaml_list(value, spaces+2))
      itemString = `${key}: ${build_array_yaml_list(value, spaces+2, config)}`
    } else if (typeof value === 'object') {
      itemString = `${key}: ${build_object_yaml_list(value, spaces+2, config, true)}`
    } else {
      itemString = `${key}: ${value}`
    }

    if (accum.length === 0 && !startWithNewLine) {
      accum.push(itemString)
    } else {
      accum.push(itemString.padStart(spaces + 2 + itemString.length))
    }

    return accum
  }, [])

  if (startWithNewLine) {
    return `\n${result.join(`\n`)}`
  } else {
    return result.join(`\n`)
  }

}

const build_array_yaml_list = (list, spaces, config) => {
  console.log(list,spaces,config)
  let result = []
  if (list.length > 0) {
    list.forEach(item => {
      let itemString
      if (typeof item === 'string') {
        itemString = `- "${config && typeof config === 'string' ? tp.user.find_file(item, config) : item}"`
      } else if (typeof item === 'number') {
        itemString = `- ${item}`
      } else if (typeof item === 'object') {
        itemString = `- ${build_object_yaml_list(item, spaces, config, false)}`
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