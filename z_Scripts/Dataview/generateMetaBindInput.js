const locationConfig = dv.page('Configuration').locations
const config = input

const test = `${config.bindType}[${config.type}(optionQuery("1. DM Stuff/Session Prep")):${config.key}]`

console.log(test)

dv.span(test)