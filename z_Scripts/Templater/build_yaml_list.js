module.exports = (list, spaces) => {
  let result = []
  if (list.length > 0) {
    if (typeof list[0] === 'string') {
      result = list.reduce((accum, item) => {
        const itemString = `- "${item}"`
        accum.push(itemString.padStart(spaces + itemString.length))
        return accum
      }, []).join(`\n`)
      result.unshift(`\n`)
    } else {
      result = list.reduce((accum, item) => {
        accum.push(Object.entries(item).reduce((accum2, [key, value]) => {
          let itemString = typeof value === 'string' ? `${key}: "${value}"` : `${key}: ${value}`
          let finalSpaces = spaces
          if (accum2.length === 0) {
            itemString = `- ${itemString}`
          } else {
            finalSpaces += 2
          }
          accum2.push(itemString.padStart(finalSpaces + itemString.length))
  
          return accum2
        }, []).join(`\n`))
  
        return accum
      }, []).join(`\n`)
      result.unshift(`\n`)
    }
  } else {
    result = "[]"
  }
  return result
}