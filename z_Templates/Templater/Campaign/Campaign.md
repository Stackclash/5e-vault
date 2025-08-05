<%*
let templateError = false
try {
  const path = require('path')
  const dataview = app.plugins.getPlugin("dataview")
  
  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
  # Template Content
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>