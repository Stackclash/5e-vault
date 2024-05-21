| [[<%*
let item = await tp.system.suggester((p) => p.file.name, DataviewAPI.pages(`"6. Mechanics/Items"`).filter(f => f['category'] == "item"));
tR += item.file.name;
const amount = await tp.system.prompt("Enter Amount")
_%>]] | <% amount %> |🪙<font color="#D8B800">`$=Math.round(10*<% amount %>*dv.page("<% item.file.path %>").value)/10`gp</font> | `$=Math.round(10*<% amount %>*dv.page("<% item.file.path %>").weight)/10` lbs |
```meta-bind-button
style: primary
label: Insert Item
action:
 type: replaceSelf
 replacement: "z_Templates/Templater/Markdown/Inventory_Row_Templater.md"
 templater: true
```