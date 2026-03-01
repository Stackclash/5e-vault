<%*
let templateError = false
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { modalForm, config } = init.getPlugins(tp, ['campaigns'])

  const data = await init.openForm(modalForm, {
    title: "Campaign Setup",
    name: "campaign-setup",
    fields: [
      fields.name("Campaign Name", "Name of the Campaign"),
    ],
    version: "1"
  })

  await init.moveFile(tp, config.locations.campaigns, data.name)

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