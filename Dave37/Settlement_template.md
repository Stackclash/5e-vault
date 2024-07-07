---
title: "{{title}}"
aliases: 
category: Location
type: Settlement
tags:
  - Location
  - Settlement
region: ""
size: 
population: 1
portrait: "![[{{title}}.jpg]]"
status: ❌
Ruler: "[[A. Plumbus]]"
HeadOfSecurity: "[[A. Plumbus Jr.]]"
---
# {{title}} <span style="float:right">Status: `INPUT[inlineSelect(option(❌), option(✅)):status]`</span>

> [!infobox] 
> # <font size=6>🏠`VIEW[{title}]`</font>
> `VIEW[!\[\[{{title}}.png\]\]][text(renderMarkdown):portrait]` |
> :-:|
> [[{{title}}.png\|Show To Players]] |
> # Geography
> Type | Stat |
> ---|---|
> Type|`VIEW[{type}]`|
> Size|`INPUT[inlineSelect(option(Outpost), option(Homesteads), option(Village), option(Town), option(City), option(Metropolis)):size]`|
> Population | `INPUT[number(class(pop-mb-css)):population]`|
> Region | `INPUT[suggester(optionQuery("5. World Encyclopedia/World Overview/Nations" OR "5. World Encyclopedia/World Overview/Continents")):region]` |
> Ruler | `INPUT[suggester(optionQuery("5. World Encyclopedia/NPCs" AND #NPC)):Ruler]` |
> Head of Security | `INPUT[suggester(optionQuery("5. World Encyclopedia/NPCs")):HeadOfSecurity]` |
> #
> # [[TravelCalculator \| Travel Speed]] (`VIEW[round({TravelCalculator#newSpeed}*(1+({TravelCalculator#HoursPerDay}-1)*{TravelCalculator#metric}), 0)]` `VIEW[{TravelCalculator#metric} ? "km/day": "ft/round"]`) 
> # [[Exhaustion]]: `VIEW[{TravelCalculator#ExhaustionLevel}]`
> Destination | Travel Days | Travel Distance | 
> -|-|-|
> [[Town 1]]| 🕓: `VIEW[round(1*{TravelCalculator#travel}*2/(1.609-0.609*{TravelCalculator#metric}), 1)]` |  :FasRuler:: `VIEW[round(1/(1.609-0.609*{TravelCalculator#metric}),1)]` `VIEW[{TravelCalculator#metric} ? "km" : "mi"]`|
> 

> [!info | clean no-t] 
>> [!columns | 2 clean no-i color-red]- 🏠Overview
>>> [!note | clean no-t]
>>> **<font size=4>`VIEW[\[\[{{title}}\]\]][text(renderMarkdown)]`</font>** ==Description and historical context==
>>
>>> [!note | clean no-t]
>>> ==Continuation==, ==Campaign relevance==
>
>> [!column | 3 no-i color-red]+ Points & People of Interest
>>> [!note | clean color-black no-i] 👨‍👩‍👧‍👦People
>>> ```dataview
>>> LIST without ID file.frontmatter.status + file.link
>>> FROM #NPC
>>> WHERE contains(file.frontmatter.location, "{{title}}") OR contains(file.frontmatter.home, "{{title}}") 
>>> SORT file.mtime DESC
>>> LIMIT 10
>>> ```
>>
>>> [!note| clean color-black no-i] ⚜️ Guilds & Groups
>>> ```dataview
>>> LIST without ID file.link 
>>> FROM "5. World Encyclopedia/Guilds and Groups"
>>> WHERE contains(file.frontmatter.location, "{{title}}")
>>> SORT file.mtime DESC
>>> LIMIT 10
>>> ```
>>
>>> [!note| clean color-black no-i] 🏠Locations
>>> ```dataview
>>> LIST without ID file.frontmatter.status + link(file.name, file.aliases[0])
>>> FROM "5. World Encyclopedia/World Overview/Settlements/{{title}}"
>>> WHERE  contains(file.frontmatter.location, "{{title}}")
>>> SORT file.mtime DESC
>>> LIMIT 10
>>> ```
^SettlementOverview