---
title: Chase Calculator
aliases: 
category: Calculator
weather: 10
QeffSpeed: 7.335609070272146
Qeff: 0.24452030234240488
PeffSpeed: 9.545435297743314
Peff: 0.3181811765914438
RelSpeed: 2.2098262274711677
TtCu: 13.57572809438991
QHeadstart: 30
terrain: 15.00004
wind: 3
light: 4
rain: 3
QHeadstart_temp: 30
metric: false
QBaseSpeed: 30
PBaseSpeed: 30
QSurvival: 10
PSurvival: 15
QVm: 1
PVm: 1
ChaseUnit: 6
ChaseTime: 1
---
#  Chase Calculator

> [!infobox | wfull clean]
>
> | Chase Calculator | Metric? `INPUT[toggle:metric]` |
> | - | - |
> | Terrain Difficulty | `INPUT[inlineSelect(option(10, Arctic), option(10.00001, Deserts), option(5.00003, Farmlands), option(15, Forest), option(5.00001, Grasslands), option(10.00002, Hills), option(15.00001, Jungle), option(5.00002, Meadows), option(15.00003, Mountains), option(15.00004, Open Sea), option(5, Roads), option(20.00003, Sea During Storms), option(10.00003, Sea Near Coast), option(5.00004, Sea Near Known Coast), option(20, Steep Mountains), option(20.00001, Strange cosmology), option(15.00002, Swamp), option(20.00002, Underground)):terrain]` |
> | Wind | `INPUT[inlineSelect(option(0, Calm-Fresh Breeze), option(1.5, Strong Breeze-Gale), option(3, Strong Gale-Violent Storm)):wind]` |
> | Light |  `INPUT[inlineSelect(option(0, Bright), option(2, Dim Light/Lighty Obscured), option(4, Darkness/Heavily Obscured)):light]` |
> | Precipitation | `INPUT[inlineSelect(option(0, Clear-Light), option(1.5, Moderate-Substantial), option(3, Heavy-Very Heavy)):rain]` `VIEW[max(1, {wind}+{light}+{rain})][math(hidden):weather]`
> #
> Headstart `INPUT[number(class(nb-mb-65)):QHeadstart_temp]` `VIEW[{metric} ? "m" : "ft"]` `VIEW[{QHeadstart_temp}*(1+2.28093*{metric})][math(hidden):QHeadstart]` | Quarry | Pursuer |
> -|-|-|
> | Base Speed | `INPUT[number(class(nb-mb-45)):QBaseSpeed]` ft/round | `INPUT[number(class(nb-mb-45)):PBaseSpeed]` ft/round |
> | Survival Roll | `INPUT[number(class(nb-mb-35)):QSurvival]` |  `INPUT[number(class(nb-mb-35)):PSurvival]`
> | Vehicle/Mount multiplier | `INPUT[number(class(nb-mb-35)):QVm]`  | `INPUT[number(class(nb-mb-35)):PVm]` |
> | Effective Speed | `VIEW[round({QeffSpeed})]` ft/round `VIEW[{Qeff}*{QBaseSpeed}][math(hidden):QeffSpeed]` `VIEW[{QVm}/(8/7*2^(-({QSurvival}-({terrain}+{weather}))/10)+6/7)][math(hidden):Qeff]` | `VIEW[round({PeffSpeed})]` ft/round `VIEW[{Peff}*{PBaseSpeed}][math(hidden):PeffSpeed]` `VIEW[{PVm}/(8/7*2^(-({PSurvival}-({terrain}+{weather}))/10)+6/7)][math(hidden):Peff]` |
> # End state of Chase
> | |
> -|-|
> Relative Speed | `VIEW[round({RelSpeed}*(1-0.949212*{metric}), 1)]` `VIEW[{metric} ? "m/s" : "ft/round"]` `VIEW[{Peff}*{PBaseSpeed}-{Qeff}*{QBaseSpeed}][math(hidden):RelSpeed]`
> Time to catch up | `VIEW[{RelSpeed} > 0 ? round({TtCu}) : "Infinity"]` `INPUT[inlineSelect(option(1, Seconds), option(6, Rounds), option(60, Minutes), option(3600, Hours), option(86400, Days)):ChaseUnit]` `VIEW[{RelSpeed} > 0 ? 6*{QHeadstart}/({RelSpeed}*{ChaseUnit}) : "Persuer not gaining on Quarry!"][math(hidden):TtCu]`
> Distance Traveled | `VIEW[{RelSpeed} > 0 ? concat(string(round({ChaseUnit}*{TtCu}*1.894*{PeffSpeed}*(1+0.609*{metric})/60000,2)), string({metric} ? " km" : " mi")) : "Infinity "]`
> # Mid-Chase Management
> | |
> -|-|
> Elapsed Chase Time | `INPUT[number(class(nb-mb-55)):ChaseTime]` `INPUT[inlineSelect(option(1, Seconds), option(6, Rounds), option(60, Minutes), option(3600, Hours), option(86400, Days)):ChaseUnit]`
> Quarry - Pursuer<br>Distance | `VIEW[{QeffSpeed} > {PeffSpeed} ? "Quarry outpaces Pursuer!" : {ChaseTime} < round({TtCu}) ? concat(string(round((1-0.6952*{metric})*({QHeadstart}-{RelSpeed}/6*{ChaseTime}*{ChaseUnit}))), string({metric} ? " m" : " ft")) : "Caught up to Quarry"]`
> Change in Relative<br>Displacement | `VIEW[{QeffSpeed} > {PeffSpeed} ? "Quarry outpaces Pursuer!" : {ChaseTime} < round({TtCu}) ? concat(string(-round((1-0.6952*{metric})*{RelSpeed}/6*{ChaseUnit}*{ChaseTime})), string({metric} ? " m" : " ft")) : "Caught up to Quarry!"]`
> Average Chase<br>Displacement | `VIEW[{QeffSpeed} > {PeffSpeed} ? "Quarry outpaces Pursuer!" : {ChaseTime} < round({TtCu}) ? concat(string(round((1-0.6952*{metric})/(12*(5280-4280*{metric}))*(6*{QHeadstart}+{ChaseTime}*{ChaseUnit}*({QeffSpeed} + {PeffSpeed})), 2)), string({metric} ? " km" : " mi")) : "Caught up to Quarry!"]`
^ChaseCalculator

