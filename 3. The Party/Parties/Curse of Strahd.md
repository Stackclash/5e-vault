---
obsidianUIMode: preview
banner_y: 0
hours_per_day: 8
party_player:
  - '[[3. The Party/Players/Faerah Duskrane.md|Faerah Duskrane]]'
  - '[[3. The Party/Players/Marin.md|Marin]]'
  - '[[3. The Party/Players/Seluvis Felo''melorn.md|Seluvis Felo''melorn]]'
  - '[[3. The Party/Players/Redgrave.md|Redgrave]]'
  - '[[Yevelda Ovak |Yevelda Ovak ]]'
exhaustion_level: 
movement: walking
speed: normal
tags:
  - party
---
## **Characters**
### **[[1. Players|Edit Players]]**
> [!cards|dataview 5]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	"![|150x250](" + image + ")" AS "Image",
>	race AS "Race",
>	condition AS "Condition",
>	location AS "Location"
>	FROM #player
> SORT file.name asc
>```

## **Session Log**
> [!cards|dataview 3]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	summary
> FROM #session-journal
> WHERE party = this.file.link
> SORT file.frontmatter.date DESC
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

