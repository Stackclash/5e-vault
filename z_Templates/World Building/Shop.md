<%*
const dv = app.plugins.getPlugin("dataview").api

await tp.file.move('4. World Almanac/Shops/' + tp.file.title)
if (tp.config.run_mode === 0) {
    let title = await tp.system.prompt("What is the name of the shop?")
    await tp.file.rename(title)
}

let selectMoreOwners = true
let selectedOwners = []
let owners = dv.pages('"4. World Almanac/NPCs"')

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
let staff = dv.pages('"4. World Almanac/NPCs"')

while (selectMoreStaff) {
    let choice = await tp.system.suggester(staff.map(o => o.file.name), staff.map(o => [o.file.path, o.file.name]), false, "Who staffs the shop?")
    if (!choice) {
        selectMoreStaff = false
    } else {
        selectedStaff.push(choice)
    }
}
-%>
---
obsidianUIMode: preview
owners: <%* if (selectedOwners.length = 0) { %>[]<%* } %>
<%* for (owner of selectedOwners) { -%>
  - "[[<% owner.join('|') %>]]"
<%* } -%>
staff: <%* if (selectedStaff.length = 0) { %>[]<%* } %>
<%* for (staff of selectedStaff) { -%>
  - "[[<% staff.join('|') %>]]"
<%* } -%>
cost_modifier: 1
items: 
location:
---
> [!infobox]
> # `=this.file.name`
> |||
> |---|---|
> | **Owner(s)** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):owners]` |
> | **Staff** | `INPUT[inlineListSuggester(optionQuery("4. World Almanac/NPCs")):staff]` |
> | **Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |
> ###### Inventory Info
> |||
> |---|---|
> | **Cost Modifier** | `INPUT[number:cost_modifier]` |
> | **Items** | `INPUT[inlineListSuggester(optionQuery("5. Mechanics/Items")):items]` |

# `=this.file.name`
## Inventory
```dataviewjs
await dv.view("shopInventory", {current: dv.current()})
```