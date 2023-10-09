---
obsidianUIMode: preview
banner: "![[Barovia_Banner.webp]]"
banner_y: 0
hours_per_day: 
party_player: []
---
# `=this.file.name`
## **Characters**
### **[[Players|Edit Players]]**
> [!cards|dataview 5]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	embed(link(art)) AS "Art",
>	race AS "Race",
>	condition AS "Condition",
>	location AS "Location"
>	FROM "3. The Party/Players"
>	WHERE party = this.file.name
>SORT file.name asc
>```

## **Session Log**
### **[[Session Logs|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/Session Logs"
> WHERE party = this.file.name
> SORT file.frontmatter.date DESC
>```

## **Quests**
### **[[Quests| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/Quests"
> WHERE party = this.file.name AND active AND !side-quest
>SORT file.name asc
>```

### **[[Quests| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/Quests"
> WHERE party = this.file.name AND active AND side-quest
>SORT file.name asc
>```

# **Timelines**
```aat-vertical
COS
```

# **Notes**

