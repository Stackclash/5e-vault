let items = input.current.items
items = items.map(item => [dv.fileLink(item), dv.page(item).cost * dv.page("Eldoria").economic_scale * this.file.frontmatter.cost_modifier])
dv.table(["Item", "Cost"], items)