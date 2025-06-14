<%*
const path = require('path')
const dv = app.plugins.getPlugin('dataview').api
const locationConfig = dv.page('Configuration').locations

if (tp.config.run_mode === 0) {
    const result = await modalForm.openForm({
        title: 'Adventuring Party',
        fields: [
            {
                name: 'party',
                label: 'Party Name',
                description: 'What is the name of the party?',
                isRequired: true,
                input: {
                    type: 'text'
                }
            }
        ]
    })
    const { party: title } = result.getData()
    await tp.file.rename(title)
}
await tp.file.move(path.join(locationConfig.parties, tp.file.title))
-%>
---
obsidianUIMode: preview
banner: "![[PlaceholderImage.png]]"
banner_y: 0
tags:
  - party
---
# `=this.file.name`
## **Characters**
### **[[1. Players|Edit Players]]**
> [!cards|dataview 5]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	embed(link(art)) AS "Art",
>	race AS "Race",
>	condition AS "Condition",
>	location AS "Location"
>	FROM "3. The Party/1. Players"
>	WHERE party = this.file.name
>SORT file.name asc
>```

## **Session Log**
### **[[2. Session Journals|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/2. Session Journals"
> WHERE Party = this.file.name
> SORT file.frontmatter.date DESC
>```

## **Quests**
### **[[3. Quests| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/3. Quests"
> WHERE party = this.file.name AND active AND !side-quest
>SORT file.name asc
>```

### **[[3. Quests| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/3. Quests"
> WHERE party = this.file.name AND active AND side-quest
>SORT file.name asc
>```

# **Notes**
