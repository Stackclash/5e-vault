---
title: Navigation
aliases: 
navigationTable:
  rows: 5
  row1:
    travel: Beehill to Sanctum
    terrainDifficulty: 3
    weatherPenalty: 0
    tools: 0
    distance: 12.7
    survivalRoll: 21
    DC2Travel: 15
    travelTime: 3.5
    efficiency: 60
  row2:
    DC2Travel: 15
    travelTime: 2.25
    efficiency: 49
    travel: Sanctum to Yellowseed
    terrainDifficulty: 3
    distance: 7
    survivalRoll: 15
  row3:
    DC2Travel: 6.25
    travelTime: 79.75
    efficiency: 58
    distance: 283.5
    terrainDifficulty: 1.1
    survivalRoll: 10
    travel: Sanctum to Elesora
    weatherPenalty: 0.75
  row4:
    DC2Travel: 6.5600000000000005
    travelTime: 32.5
    efficiency: 57
    travel: Sanctum to Candleforth
    terrainDifficulty: 1.23
    distance: 114.5
    survivalRoll: 10
    weatherPenalty: 0.41
  row5:
    DC2Travel: 15
    travelTime: 6.25
    efficiency: 62
    travel: Beehill to Yellowseed
    terrainDifficulty: 3
    distance: 23.8
    survivalRoll: 21
singleJourney:
  terrainDifficulty: 3
  weatherPenalty: 2
  tools: 0
  distance: 26.6
  survivalRoll: 21
  DC2Travel: 17
  traveledTime: 
  efficiency: 0.21880417671142466
food: 10
wis_mod: 3
sur_mod: 1
---
# `=this.title` Table <Font size=4.5; style="float:right">Config: [[TravelCalculator | Travel Calculator]]<br/> Map: [[World Overview|World Map]]</Font>

> [!infobox]
> # Navigation
> Terrain Type | Penalty
> -|:-:|
> [[Navigation Types#^e27603\|Open Flat Terrains]] | 1
> [[Navigation Types#^dae5ef\|Open Tough Terrain]] | 2
> [[Navigation Types#^a796c5\|Rough Terrains]] | 3
> [[Navigation Types#^1cb582\|Very Rough Terrains]] | 4
>
> Weather  | Penalty
> -|:-:|
> **Light**<BR/>Dim Light<BR/>Darkness | <BR/>1<BR/>2
> **Winds**<BR/>Strong Breeze - Gale<BR/>Strong Gale - Violent Storm |<BR/>1<BR/><BR/>2
> **Precipitation**<BR/>Moderate - Substantial<BR/>Heavy - Very Heavy | <BR/>1<BR/>2
>
> Condition | Advantage
>  -|:-:|
> 🌞 & <= Cloudy | **True**
> 🌙 & <= Few Clouds | **True**
> Path traveled before | **True**
>
> Tools | Bonus
> -|:-:|
> [[Navigator's Tools]] | 1
> [[Cartographer's Tools]] |1
> Travel Itinerary | 1
> Local Knowledge | 1

| Travel                      |            Terrain Difficulty             |             Weather Penalties             |                    Tools                     | Distance `VIEW[{TravelCalculator#metric} ? "(km)" : "(mi)"]` |               Survival Roll                |                                             DC 2 Travel                                             |                                                                                              Time 2 Travel                                                                                               |                                                                              Efficiency                                                                               |
| --------------------------- |:-----------------------------------------:|:-----------------------------------------:|:--------------------------------------------:|:------------------------------------------------------------:|:------------------------------------------:|:---------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `INPUT[text():navigationTable.row1.travel]` | `INPUT[number(class(nb-mb-css)):navigationTable.row1.terrainDifficulty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row1.weatherPenalty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row1.tools]` |         `INPUT[number(class(nb-mb-css)):navigationTable.row1.distance]`          | `INPUT[number(class(nb-mb-css)):navigationTable.row1.survivalRoll]` | `VIEW[5*{navigationTable.row1.terrainDifficulty}-2.5*{navigationTable.row1.tools}+{navigationTable.row1.weatherPenalty}][math(hidden):navigationTable.row1.DC2Travel]` `VIEW[round({navigationTable.row1.DC2Travel},0)]` | `VIEW[({navigationTable.row1.survivalRoll}-{navigationTable.row1.DC2Travel}) < 0 ? "LOST" : round(4*round(2.33*{navigationTable.row1.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({navigationTable.row1.survivalRoll}-{navigationTable.row1.DC2Travel})/10)+6/7) ,0)/4][:navigationTable.row1.travelTime]` h | `VIEW[({navigationTable.row1.survivalRoll}-{navigationTable.row1.DC2Travel}) < 0 ? "LOST" : round(100*round(2.33*{navigationTable.row1.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)/{navigationTable.row1.travelTime},0)][:navigationTable.row1.efficiency]`% |
| `INPUT[text():navigationTable.row2.travel]` | `INPUT[number(class(nb-mb-css)):navigationTable.row2.terrainDifficulty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row2.weatherPenalty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row2.tools]` | `INPUT[number(class(nb-mb-css)):navigationTable.row2.distance]` | `INPUT[number(class(nb-mb-css)):navigationTable.row2.survivalRoll]` | `VIEW[5*{navigationTable.row2.terrainDifficulty}-2.5*{navigationTable.row2.tools}+{navigationTable.row2.weatherPenalty}][math(hidden):navigationTable.row2.DC2Travel]` `VIEW[round({navigationTable.row2.DC2Travel},0)]` | `VIEW[({navigationTable.row2.survivalRoll}-{navigationTable.row2.DC2Travel}) < 0 ? 'LOST' : round(4*round(2.33*{navigationTable.row2.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({navigationTable.row2.survivalRoll}-{navigationTable.row2.DC2Travel})/10)+6/7) ,0)/4][:navigationTable.row2.travelTime]` h | `VIEW[({navigationTable.row2.survivalRoll}-{navigationTable.row2.DC2Travel}) < 0 ? 'LOST' : round(100*round(2.33*{navigationTable.row2.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)/{navigationTable.row2.travelTime},0)][:navigationTable.row2.efficiency]`% |
| `INPUT[text():navigationTable.row3.travel]` | `INPUT[number(class(nb-mb-css)):navigationTable.row3.terrainDifficulty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row3.weatherPenalty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row3.tools]` | `INPUT[number(class(nb-mb-css)):navigationTable.row3.distance]` | `INPUT[number(class(nb-mb-css)):navigationTable.row3.survivalRoll]` | `VIEW[5*{navigationTable.row3.terrainDifficulty}-2.5*{navigationTable.row3.tools}+{navigationTable.row3.weatherPenalty}][math(hidden):navigationTable.row3.DC2Travel]` `VIEW[round({navigationTable.row3.DC2Travel},0)]` | `VIEW[({navigationTable.row3.survivalRoll}-{navigationTable.row3.DC2Travel}) < 0 ? 'LOST' : round(4*round(2.33*{navigationTable.row3.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({navigationTable.row3.survivalRoll}-{navigationTable.row3.DC2Travel})/10)+6/7) ,0)/4][:navigationTable.row3.travelTime]` h | `VIEW[({navigationTable.row3.survivalRoll}-{navigationTable.row3.DC2Travel}) < 0 ? 'LOST' : round(100*round(2.33*{navigationTable.row3.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)/{navigationTable.row3.travelTime},0)][:navigationTable.row3.efficiency]`% |
| `INPUT[text():navigationTable.row4.travel]` | `INPUT[number(class(nb-mb-css)):navigationTable.row4.terrainDifficulty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row4.weatherPenalty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row4.tools]` | `INPUT[number(class(nb-mb-css)):navigationTable.row4.distance]` | `INPUT[number(class(nb-mb-css)):navigationTable.row4.survivalRoll]` | `VIEW[5*{navigationTable.row4.terrainDifficulty}-2.5*{navigationTable.row4.tools}+{navigationTable.row4.weatherPenalty}][math(hidden):navigationTable.row4.DC2Travel]` `VIEW[round({navigationTable.row4.DC2Travel},0)]` | `VIEW[({navigationTable.row4.survivalRoll}-{navigationTable.row4.DC2Travel}) < 0 ? 'LOST' : round(4*round(2.33*{navigationTable.row4.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({navigationTable.row4.survivalRoll}-{navigationTable.row4.DC2Travel})/10)+6/7) ,0)/4][:navigationTable.row4.travelTime]` h | `VIEW[({navigationTable.row4.survivalRoll}-{navigationTable.row4.DC2Travel}) < 0 ? 'LOST' : round(100*round(2.33*{navigationTable.row4.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)/{navigationTable.row4.travelTime},0)][:navigationTable.row4.efficiency]`% |
| `INPUT[text():navigationTable.row5.travel]` | `INPUT[number(class(nb-mb-css)):navigationTable.row5.terrainDifficulty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row5.weatherPenalty]` | `INPUT[number(class(nb-mb-css)):navigationTable.row5.tools]` | `INPUT[number(class(nb-mb-css)):navigationTable.row5.distance]` | `INPUT[number(class(nb-mb-css)):navigationTable.row5.survivalRoll]` | `VIEW[5*{navigationTable.row5.terrainDifficulty}-2.5*{navigationTable.row5.tools}+{navigationTable.row5.weatherPenalty}][math(hidden):navigationTable.row5.DC2Travel]` `VIEW[round({navigationTable.row5.DC2Travel},0)]` | `VIEW[({navigationTable.row5.survivalRoll}-{navigationTable.row5.DC2Travel}) < 0 ? 'LOST' : round(4*round(2.33*{navigationTable.row5.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({navigationTable.row5.survivalRoll}-{navigationTable.row5.DC2Travel})/10)+6/7) ,0)/4][:navigationTable.row5.travelTime]` h | `VIEW[({navigationTable.row5.survivalRoll}-{navigationTable.row5.DC2Travel}) < 0 ? 'LOST' : round(100*round(2.33*{navigationTable.row5.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)/{navigationTable.row5.travelTime},0)][:navigationTable.row5.efficiency]`% |

# Individual Journey

> [!column| 3 no-t]+
>> [!infobox]
>> # [[Getting lost]]
>> ||
>> :-:|
>> The party get lost for `dice: 1d6` h|
>> # Foraging
>> Food and Water Availability | `INPUT[inlineSelect(option(10, Abundance), option(15, Limited), option(20, Scarce)):food]` |
>> -|-|
>> Wisdom Modifier | `INPUT[inlineSelect(option(-3), option(-2), option(-1), option(0), option(1), option(2), option(3), option(4), option(5)):wis_mod]`
>> Survival roll |  DC `VIEW[{food}]`
>> Forage Roll | `dice: 1d6+wis_mod` lbs of food<BR/>`dice: 1d6+wis_mod` gallons of water
>> # Remaining Travel Calculator
>> ||
>> -|:-:|
>> Terrain Difficulty | `INPUT[number(class(nb-mb-css)):singleJourney.terrainDifficulty]`
>> Weather Penalties | `INPUT[number(class(nb-mb-css)):singleJourney.weatherPenalty]`
>> Tools | `INPUT[number(class(nb-mb-css)):singleJourney.tools]`
>> Survival Roll (DC`VIEW[5*{singleJourney.terrainDifficulty}-2.5*{singleJourney.tools}+{singleJourney.weatherPenalty}][math(hidden):singleJourney.DC2Travel]` `VIEW[round({singleJourney.DC2Travel},0)]`) |  `INPUT[number(class(nb-mb-css)):singleJourney.survivalRoll]`
>> Distance `VIEW[{TravelCalculator#metric} ? "(km)" : "(mi)"]`| `INPUT[number(class(nb-mb-css)):singleJourney.distance]`
>> Time Traveled | `INPUT[number(class(nb-mb-css)):singleJourney.traveledTime]`
>> Remaining Distance | `VIEW[round({singleJourney.distance}-{singleJourney.traveledTime}*{singleJourney.efficiency}/(2.33*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}), 1)]` `VIEW[{TravelCalculator#metric} ? "km" : "mi"]`
>> Remaning Time | `VIEW[({singleJourney.survivalRoll}-{singleJourney.DC2Travel}) < 0 ? 'LOST' : round(4*(round(2.33*{singleJourney.distance}*{TravelCalculator#travel}*{TravelCalculator#HoursPerDay}, 1)*(8/7*2^(-({singleJourney.survivalRoll}-{singleJourney.DC2Travel})/10)+6/7)-{singleJourney.traveledTime}), 0)/4]` h |
> 
>> [!infobox]
>> # Setbacks and Benefits
>> ||
>> -|:-:|
>> Survival modifier | `INPUT[number(class(nb-mb-css)):sur_mod]`
>> \# of Setbacks | `VIEW[max(round((1-max(min(1-(5*{singleJourney.terrainDifficulty}-1-{sur_mod})/20, 1), 0))*2.33*{singleJourney.distance}*{TravelCalculator#travel}-(6.324*sqrt(2.33*{singleJourney.distance}*{TravelCalculator#travel})/10)/(19/(2*sqrt(3)))*({singleJourney.survivalRoll}+{sur_mod}-10.5), 0), 0)]`
>> \# of Benefits | `VIEW[max(round(max(min(1-((12+5*{singleJourney.terrainDifficulty})-1-{sur_mod})/20, 1), 0)*2.33*{singleJourney.distance}*{TravelCalculator#travel} + (6.324*sqrt(2.33*{singleJourney.distance}*{TravelCalculator#travel})/10)/(19/(2*sqrt(3)))*({singleJourney.survival}-10.5), 0), 0)]`
>> # Setback/Benefit Table
>> `dice: 1d8+1d12`| Benefit| Setback|
>> :-:|-|-|
>> 2 | `dice: [[Random Gems Table^GemTable]]` | `dice: [[Injuries^SevereInjuryTable]]` |
>> 3 | `dice: [[Random Spell Scroll Table^SpellScrollTable]]` | `dice: [[Injuries^MinorInjuryTable]]` |
>> 4 | Exotic Animal | Clothing damaged |
>> 5 | Antidote | No water |
>>6  | Getting Pelts | Loosing `dice: 1d100` sp |
>> 7 | Finding Herbs | [[Injuries#^SunburnFrostbite\|Sunburn]]/<BR/>[[Injuries#^SunburnFrostbite\|Frostbite]]|
>> 8 | Food `dice: 1d4+2` days| [[Disease\|Sickness]] |
>> 9 | -`dice: 1d4` Setbacks | Delayed<BR />`dice: 2d4` h |
>> 10 | `dice: 1d100` sp | Sudden<BR />heavy rain/snow |
>
>>[!infobox]
>> # Setback/Benefit Table Cont.
>> | | Benefit | Setback |
>> :-:|:-:|-|
>> 11 | `dice: 1d10` [[Goodberry\|Goodberries]] | Bad dreams |
>> 12 | Random<BR />encounter | Random<BR />encounter |
>> 13 | Random<BR />encounter | Random<BR />encounter |
>> 14 | `dice: 1d4` temp HP | [[Exhaustion]]<BR />DC 10 check |
>> 15 | Discount | Lose `dice: 1d6`<BR />martial<BR />resources |
>> 16 | Fast tracked `dice: 2d4` h | Lose `dice: 1d6`<BR />spell slots |
>> 17 | `dice: 1d100` gp | [[Exhaustion]]<BR />DC 15 check |
>> 18 | Potion: `dice: [[Random Potion Table^PotionEffectTable]]` | Carriage<BR />Breaks |
>> 19 | General Goods | `dice: [[Injuries^MinorInjuryTable]]` |
>> 20 | Gain Mount | Mount dies |

`VIEW[1/(8/7*2^(-({singleJourney.survival}-(5*{singleJourney.terrainDifficulty}-2.5*{singleJourney.tools}+{singleJourney.weatherPenalty}))/10)+6/7)][math(hidden):singleJourney.efficiency]`