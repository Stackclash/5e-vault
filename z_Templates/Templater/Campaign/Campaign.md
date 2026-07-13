<%*
let templateError = false
let data = {}
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config } = init.getPlugins(tp, ['campaigns'])

  data = await init.openForm(modalForm, {
    title: "Campaign Setup",
    name: "campaign-setup",
    fields: [
      fields.name("Campaign Name", "Name of the Campaign"),
      fields.tagSelect(dataview, "party", "Campaign Party", "#party"),
      fields.tagSelect(dataview, "world", "Campaign World", "#world")
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
---
obsidianUIMode: preview
party: "<% data.party %>"
world: "<% data.world %>"
public_premise: ""
tags:
  - campaign
---
> [!infobox|n-th]
> # Configuration
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **World:** | `INPUT[suggester(optionQuery(#world)):world]` |

## Public Premise
> [!div|no-t clean]
> `INPUT[textArea:public_premise]`
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>