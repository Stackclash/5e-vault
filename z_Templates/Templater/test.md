<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const modalForm = app.plugins.getPlugin('modalforms').api
const locationConfig = dv.page('Configuration').locations

let parties = dv.pages('#party')
const result = await modalForm.openForm('Character Party')
console.log(result.getData())
-%>
<% result.party %>