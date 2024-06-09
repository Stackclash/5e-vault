const locationConfig = dv.page('Configuration').locations
const config = input

for ([key, value] of Object.entries(input.options)) {
    console.log(key,value)
}

const test = `\`${config.bindType}[${config.type}(optionQuery("1. DM Stuff/Session Prep")):${config.key}]\``

console.log(test)

dv.span(test)