const find_file = self.require('./find_file.js')

const build_object_yaml = async (object, spaces, config, startWithNewLine) => {
  const result = await Object.entries(object).reduce(async (accum, [key, value]) => {
    let itemString

    if (typeof value === 'string') {
      let finalValue = value
      if (config && typeof config === 'object' && config.hasOwnProperty(key)) {
        itemString = `${key}: "${await find_file(finalValue, config[key])}"`

      } else {
        itemString = `${key}: "${finalValue.replaceAll('"', '\\"').replaceAll('\r\n', '\\n').replaceAll('\n', '\\n')}"`
      }
    } else if (Array.isArray(value)) {
      itemString = `${key}: ${await build_array_yaml(value, spaces+2, config)}`
    } else if (value === null || value === undefined) {
      itemString = `${key}: ""`
    } else if (typeof value === 'object') {
      itemString = `${key}: ${await build_object_yaml(value, spaces+2, config, true)}`
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

const build_array_yaml = async (list, spaces, config) => {
  let result = []
  if (list.length > 0) {
    await list.forEach(async (item) => {
      let itemString
      if (typeof item === 'string') {
        itemString = `- "${config && typeof config === 'string' ? await find_file(item, config) : item}"`
      } else if (typeof item === 'number') {
        itemString = `- ${item}`
      } else if (typeof item === 'object') {
        itemString = `- ${await build_object_yaml(item, spaces, config, false)}`
      } else if (value === null || value === undefined) {
        itemString = `- ""`
      }

      result.push(itemString.padStart(spaces + itemString.length))
    })
    
    result = `\n${result.join(`\n`)}`
  } else {
    result = "[]"
  }
  return result
}

const build_yaml = async (item, spaces, config) => {
  if (Array.isArray(item)) {
    return await build_array_yaml(item, spaces, config)
  } else if (typeof item === 'object') {
    return await build_object_yaml(item, spaces, config, true)
  } else {
    console.log(`Error for finding result for ${JSON.stringify(item)}`)
  }
}

module.exports = build_yaml