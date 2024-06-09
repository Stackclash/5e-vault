const locationConfig = dv.page('Configuration').locations
const config = input
let optionsString = ''

if (input.options) {
    optionsString += '('
    for ([key, value] of Object.entries(input.options)) {
        if (Array.isArray(value)) {
            for (item of value) {
                if (locationConfig.hasOwnProperty(item)) {
                    optionsString += `${key}("${locationConfig[item]}")`
                } else {
                    optionsString += `${key}("${item}")`
                }
            }
        } else {
            if (locationConfig.hasOwnProperty(value)) {
                optionsString += `${key}("${locationConfig[value]}")`
            } else {
                optionsString += `${key}("${value}")`
            }
        }
    }
    optionsString += ')'
}

return `\`${config.bindType}[${config.type}${optionsString}:${config.key}]\``