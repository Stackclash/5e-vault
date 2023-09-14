---
obsidianUIMode: preview
banner: "![[Barovia_Banner.webp]]"
banner_y: 0
---
# `=this.file.name`
## **Characters**
### **[[1. Players|Edit Players]]**
> [!cards|dataview 5]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	embed(link(Art)) AS "Art",
>	race AS "Race",
>	condition AS "Condition",
>	location AS "Location"
>	FROM "3. The Party/1. Players"
>	WHERE Party = this.file.name
>SORT file.name asc
>```

## **Session Log**
### **[[2. Session Logs|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "3. The Party/2. Session Logs"
> WHERE Party = this.file.name
> SORT file.date ASC
>```

## **Quests**
### **[[3. Quests| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

### **[[3. Quests| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

# **Notes**
