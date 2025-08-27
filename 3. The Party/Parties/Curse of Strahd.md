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
> [!cards|dataview 6]
>```dataview
> TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	"![|150x250](" + image + ")" AS "Image",
>	race AS "Race",
>	"`INPUT[inlineSelect(option(healthy),option(injured),option(dead)):" + file.path + "#condition]`" AS "Condition",
>	"`INPUT[suggester(optionQuery(#location)):" + file.path + "#location]`" AS "Location"
>	FROM #player
> SORT file.name asc
>```

## NPC Relationships
```dataview
TABLE WITHOUT ID
  link(file.path, file.name) AS "Name",
  partyRelationships[this.file.name]
```

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

