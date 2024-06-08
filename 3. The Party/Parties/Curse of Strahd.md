---
obsidianUIMode: preview
banner: "![[Barovia_Banner.webp]]"
banner_y: 0
hours_per_day: 8
party_player:
  - "[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]"
  - "[[3. The Party/Players/Marin.md|Marin]]"
  - "[[3. The Party/Players/Seluvis Felo'melorn.md|Seluvis Felo'melorn]]"
  - "[[3. The Party/Players/Redgrave.md|Redgrave]]"
  - "[[Yevelda Ovak |Yevelda Ovak ]]"
exhaustion_level: .nan
movement: walking
speed: normal
---
# `=this.file.name`
## **Characters**
### **[[Players|Edit Players]]**
> [!cards|dataview 5]
> ```dataview
> TABLE WITHOUT ID
> link(file.path, name) AS "Name",
> embed(link(image)) AS "Art",
> race AS "Race",
> condition AS "Condition",
> location AS "Location"
> FROM "3. The Party/Players"
> WHERE contains(file.frontmatter.party, this.file.name)
> SORT file.name asc
> ```

## **Session Log**
### **[[Session Journals|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM "1. DM Stuff/Session Journals"
> WHERE party = this.file.link
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

## Fortunes of Ravenloft
- [[Tome Of Strahd (COS)]] 
	- Van Richten's Tower
- [[Sunsword (COS)]]
	- Ruins of Berez in Baba Lysaga's Creeping Hut
- [[Holy Symbol Of Ravenkind (COS)]] 
	- Amber Temple

