<%*
let templateError = false
try {
  
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