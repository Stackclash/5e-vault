const find_file = (text, path) => {
  const searchTerms = text.replace(/[\(\)']/gm,'').replace(/s$/, '').split(' ')
    const scores = dv.pages(`"${path}"`).array().reduce((accum, page) => {
        let score = 0
        for (const term of searchTerms) {
            if (page.file.name === text ||
                (page.aliases && page.aliases[0] === text) ||
                page.file.name === searchTerms.join(' ') ||
                page.file.name === `${searchTerms.join(' ')} Armor`) {
                score += 5
            } else if (page.file.name.includes(term)) {
                score++
            }
        }
        accum.push({
            value: page,
            score
        })

        return accum
    }, []).sort((a, b) => b.score - a.score)
    console.log(text, scores)

    return scores[0].score === 0 || scores.filter(item => item.score === scores[0].score).length > 5 || scores[0].value.file.name.length > text.length * 2 ?
        text :
        `[[${scores[0].value.file.path}|${scores[0].value.file.name}]]`
}

const build_object_yaml_list = (object, spaces, config) => {
  return Object.entries(object).reduce((accum, [key, value]) => {
    let itemString

    if (typeof value === 'string') {
      let finalValue = value
      if (config && typeof config === 'object' && config.hasOwnProperty(key)) {
        finalValue = find_note(finalValue, config[key])
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

module.exports = (list, spaces, config) => {
  let result = []
  if (list.length > 0) {
    list.forEach(item => {
      if (typeof item === 'string') {
        itemString = `- "${config && typeof config === 'string' ? find_note(item, config) : item}"`
      } else if (typeof item === 'number') {
        itemString = `- ${itemString}`
      } else if (typeof item === 'object') {
        itemString = `- ${build_object_yaml_list(item, spaces, config)}`
      }

      result.push(itemString.padStart(spaces + itemString.length))
    })
    
    result = `\n${result.join(`\n`)}`
  } else {
    result = "[]"
  }
  return result
}