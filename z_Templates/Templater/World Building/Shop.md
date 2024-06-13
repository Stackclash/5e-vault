<%*
const path = require('path')
const dv = app.plugins.getPlugin("dataview").api
const locationConfig = dv.page('Configuration').locations

await tp.file.move('4. World Almanac/Shops/' + tp.file.title)
if (tp.config.run_mode === 0) {
    let title = await tp.system.prompt("What is the name of the shop?")
    await tp.file.rename(title)
}

let selectMoreOwners = true
let selectedOwners = []
let owners = dv.pages('#npc')

while (selectMoreOwners) {
    let choice = await tp.system.suggester(owners.map(o => o.file.name), owners.map(o => [o.file.path, o.file.name]), false, "Who owns the shop?")
    if (!choice) {
        selectMoreOwners = false
    } else {
        selectedOwners.push(choice)
    }
}

let selectMoreStaff = true
let selectedStaff = []
let staff = dv.pages('#npc')

while (selectMoreStaff) {
    let choice = await tp.system.suggester(staff.map(o => o.file.name), staff.map(o => [o.file.path, o.file.name]), false, "Who staffs the shop?")
    if (!choice) {
        selectMoreStaff = false
    } else {
        selectedStaff.push(choice)
    }
}

let parentLocations = dv.pages('"4. World Almanac/Worlds" or "4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Places of Interest"')

let selectedLocation = await tp.system.suggester(parentLocations.map(p => p.file.name), parentLocations.map(p => [p.file.path, p.file.name]), false, "Where is this shop located?")
-%>
---
obsidianUIMode: preview
location: "[[<% selectedLocation.join('|') %>]]"
resources: []
owners: <%* if (selectedOwners.length == 0) { %>[]<%* } %>
<%* for (owner of selectedOwners) { -%>
  - "[[<% owner.join('|') %>]]"
<%* } -%>
staff: <%* if (selectedStaff.length == 0) { %>[]<%* } %>
<%* for (staff of selectedStaff) { -%>
  - "[[<% staff.join('|') %>]]"
<%* } -%>
cost_modifier: 1
items: []
tags:
  - shop
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
> | **Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> | **Resource(s):** | `INPUT[inlineListSuggester(optionQuery("6. Resources")):resources]` |
> ###### Inventory Info
> |||
> |---|---|
> | **Cost Modifier** | `INPUT[number:cost_modifier]` |
> | **Items** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |

`$= await dv.view("locationBreadcrumbs", {current: dv.current()})`
# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("shopInventory", {current: dv.current()})
```