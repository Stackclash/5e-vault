---
title: Random NPC
aliases: 
length_feet: 4.67
weight_lbs: 110
raceSelect: Human
metric: true
weight: 6
length: 13
---

# External NPC Generators

> [!column| 3 clean]- Webpages
>> [!note | clean no-t]
>> <iframe 
>>    height = "1000"
>>    width =  "100%"
>>    src = "https://www.fantasynamegenerators.com/">
>> </iframe>
>
>> [!note | clean no-t]
>> <iframe 
>>    height = "1000"
>>    width =  "100%"
>>    src = "https://www.behindthename.com/random/">
>> </iframe>
>
>> [!note | clean no-t]
>> <iframe 
>>    height = "1000"
>>    width =  "100%"
>>    src = "https://www.npcgenerator.com/">
>> </iframe>

# Biology

> [!column| 3 no-t]+
>> [!infobox]
>> # Gender `dice: 1/2*1d4`
>> ||
>> :-:|:-:|
>> |      1      | Male   |
>> |      2      | Female |
>> # Birthday
>> ||
>> :-:|
>> | `dice: [[Calendar#^dayTable]]` of `dice: [[Calendar#^MonthTable]]`|
>
>> [!infobox]
>> # Race
>>| Setopia  |  |
>>| - | -- |
>>| Setopia Civ Pop  | `dice: [[Setopia - Demographics^SetopiaCivPop]]`  |
>>| Setopia Wild Pop | `dice: [[Setopia - Demographics^SetopiaWildPop]]` |
>>| Setopia Ship Pop | `dice: [[Setopia - Demographics^SetopiaShipPop]]` |
>
>> [!infobox]
>> # Age
>> ||
>> -|:-:|
>>| [[Human]]    | `dice: 107/10*(19/7)^((1d400 + 1d1200)/700)` yr  |
>>| [[Dwarf]]    | `dice: 214/5*(19/7)^((1d400 + 1d1200)/700)` yr   |
>>| [[Elf]]      | `dice: 107*(19/7)^((1d400 + 1d1200)/700)` yr     |
>>| [[Half-Elf]] | `dice: 963/40*(19/7)^((1d400 + 1d1200)/700)` yr  |
>>| [[Halfling]] | `dice: 749/40*(19/7)^((1d400 + 1d1200)/700)`yr   |
>>| [[Gnome]]    | `dice: 1177/20*(19/7)^((1d400 + 1d1200)/700)` yr |
>>| Goblin       | `dice: 107/20*(19/7)^((1d400 + 1d1200)/700)` yr  |

# Height and weight  calculator

| Pick race                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         Metric?          |             Height Modifier              |             Weight Modifier              | Result                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------:|:----------------------------------------:|:----------------------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT[suggester(option(Human), option(Hill Dwarf), option(Mountain Dwarf), option(High Elf), option(Wood Elf), option(Drow), option(Halfling), option(Dragonborn), option(Gnome), option(Half-elf), option(Half-orc), option(Tiefling), option(Aasimar), option(Bugbear), option(Firbolg), option(Goblin), option(Goliath), option(Hobgoblin), option(Kenku), option(Kobold), option(Lizardfolk), option(Orc), option(Tabaxi), option(Triton), option(Yuan-ti Pureblood), option(Centaur), option(Loxodon), option(Minotaur)):raceSelect]` | `INPUT[toggle():metric]` | `INPUT[number(class(nb-mb-css)):length]` | `INPUT[number(class(nb-mb-css)):weight]` | `VIEW[{metric} ? round(0.3048*({length}/12+{length_feet}), 2)m : floor({length}/12+{length_feet},0)]`­`VIEW[{metric} ? "" : "'"]`­`VIEW[{metric} ? "" : round(12*({length}/12+{length_feet} - floor({length}/12+{length_feet},0)), 0)]`­`VIEW[{metric} ? "" : "­''"]`, `VIEW[{metric} ? round(0.4536*({weight_lbs}+{weight}*{length}), 0)kg : ({weight_lbs}+{weight}*{length})lb]` |

> [!column | 2 clean no-t]+
>> [!note | clean no-t]
>> | Race              | Height Modifier | Weight modifier |
>> | ----------------- |:---------------:|:---------------:|
>> | Human             |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Dwarf (hill)      |   +`dice: 2d4`''   |   ×`dice: 2d6`lbs  |
>> | Dwarf (mountain)  |   +`dice: 2d4`''   |   ×`dice: 2d6`lbs   |
>> | Elf (high)        |  +`dice: 2d10`''   |   ×`dice: 1d4`lbs   |
>> | Elf (wood)        |  +`dice: 2d10` ''  |   ×`dice: 1d4`lbs   |
>> | Elf (drow)        |   +`dice: 2d6`''   |   ×`dice: 1d6`lbs   |
>> | Halfling          |   +`dice: 2d4`''   |        ×1lbs        |
>> | Dragonborn        |   +`dice: 2d8`''   |   ×`dice: 2d6`lbs   |
>> | Gnome             |   +`dice: 2d4`''   |        ×1lbs        |
>> | Half-elf          |   +`dice: 2d8`''  |   ×`dice: 2d4`lbs   |
>> | Half-orc          |  +`dice: 2d10`''   |   ×`dice: 2d6` lbs  |
>> | Tiefling          |   +`dice: 2d8`''   |   ×`dice: 2d4`lbs   |
>> | Aasimar           |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Bugbear           |  +`dice: 2d12`''   |   ×`dice: 2d6`lbs   |
>
>> [!note | clean no-t]
>> | Race              | Height Modifier | Weight modifier |
>> | ----------------- |:---------------:|:---------------:|
>> | Firbolg           |  +`dice: 2d12`''  |   ×`dice: 2d6`lbs   |
>> | Goblin            |   +`dice: 2d4`''   |        ×1lbs        |
>> | Goliath           |  +`dice: 2d10`''   |   ×`dice: 2d6`lbs   |
>> | Hobgoblin         |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Kenku             |   +`dice: 2d8`''   |   ×`dice: 1d6`lbs   |
>> | Kobold            |   +`dice: 2d4`''   |        ×1lbs        |
>> | Lizardfolk        |  +`dice: 2d10`''   |   ×`dice: 2d6`lbs   |
>> | Orc               |   +`dice: 2d8`''   |   ×`dice: 2d6`lbs   |
>> | Tabaxi            |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Triton            |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Yuan-ti Pureblood |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Centaur           |  +`dice: 1d10`''   |  ×`dice: 2d12`lbs   |
>> | Loxodon           |  +`dice: 2d10`''   |   ×`dice: 2d4`lbs   |
>> | Minotaur          |   +`dice: 2d8`''   |   ×`dice: 2d6`lbs   |

`VIEW[compareText({raceSelect}, "Human") == 0 ? 4.67 : compareText({raceSelect}, "Hill Dwarf") == 0 ? 3.67 : compareText({raceSelect}, "Mountain Dwarf") == 0 ? 4 : compareText({raceSelect}, "High Elf") == 0 ? 4.5 : compareText({raceSelect}, "Wood Elf") == 0 ? 4.5 : compareText({raceSelect}, "Drow") == 0 ? 4.42 : compareText({raceSelect}, "Halfling") == 0 ? 2.58 : compareText({raceSelect}, "Dragonborn") == 0 ? 5.5 : compareText({raceSelect}, "Gnome") == 0 ? 2.92 : compareText({raceSelect}, "Half-elf") == 0 ? 4.75 : compareText({raceSelect}, "Half-orc") == 0 ? 4.83 : compareText({raceSelect}, "Tiefling") == 0 ? 4.75 : compareText({raceSelect}, "Aasimar") == 0 ? 4.67 : compareText({raceSelect}, "Bugbear") == 0 ? 6 : compareText({raceSelect}, "Firbolg") == 0 ? 6.17 : compareText({raceSelect}, "Goblin") == 0 ? 3.42 : compareText({raceSelect}, "Goliath") == 0 ? 6.17 : compareText({raceSelect}, "Hobgoblin") == 0 ? 4.67 : compareText({raceSelect}, "Kenku") == 0 ? 4.33 : compareText({raceSelect}, "Kobold") == 0 ? 2.08 : compareText({raceSelect}, "Lizardfolk") == 0 ? 4.75 : compareText({raceSelect}, "Orc") == 0 ? 5.33 : compareText({raceSelect}, "Tabaxi") == 0 ? 4.83 : compareText({raceSelect}, "Triton") == 0 ? 4.5 : compareText({raceSelect}, "Yuan-ti Pureblood") == 0 ? 4.67 : compareText({raceSelect}, "Centaur") == 0 ? 6 : compareText({raceSelect}, "Loxodon") == 0 ? 6.58 : 5.33][math(hidden):length_feet]`

`VIEW[compareText({raceSelect}, "Human") == 0 ? 110 : compareText({raceSelect}, "Hill Dwarf") == 0 ? 115 : compareText({raceSelect}, "Mountain Dwarf") == 0 ? 130 : compareText({raceSelect}, "High Elf") == 0 ? 90 : compareText({raceSelect}, "Wood Elf") == 0 ? 100 : compareText({raceSelect}, "Drow") == 0 ? 75 : compareText({raceSelect}, "Halfling") == 0 ? 35 : compareText({raceSelect}, "Dragonborn") == 0 ? 175 : compareText({raceSelect}, "Gnome") == 0 ? 35 : compareText({raceSelect}, "Half-elf") == 0 ? 110 : compareText({raceSelect}, "Half-orc") == 0 ? 140 : compareText({raceSelect}, "Tiefling") == 0 ? 110 : compareText({raceSelect}, "Aasimar") == 0 ? 110 : compareText({raceSelect}, "Bugbear") == 0 ? 200 : compareText({raceSelect}, "Firbolg") == 0 ? 175 : compareText({raceSelect}, "Goblin") == 0 ? 35 : compareText({raceSelect}, "Goliath") == 0 ? 200 : compareText({raceSelect}, "Hobgoblin") == 0 ? 110 : compareText({raceSelect}, "Kenku") == 0 ? 50 : compareText({raceSelect}, "Kobold") == 0 ? 25 : compareText({raceSelect}, "Lizardfolk") == 0 ? 120 : compareText({raceSelect}, "Orc") == 0 ? 175 : compareText({raceSelect}, "Tabaxi") == 0 ? 90 : compareText({raceSelect}, "Triton") == 0 ? 90 : compareText({raceSelect}, "Yuan-ti Pureblood") == 0 ? 110 : compareText({raceSelect}, "Centaur") == 0 ? 600 : compareText({raceSelect}, "Loxodon") == 0 ? 295 : 175][math(hidden):weight_lbs]`
# Names

> [!column| 5 no-t]+
>> [!infobox]
>> # Human Names
>> Male | Female|
>> :-:|:-:|
>> Trem Tagg | Dakkiah Tippling |
>> Zefteel Chubb | Dawl Pingree |
>> Vratund Stuppies | Sarandere Walthew |
>> Korusk Redpath |  Femigg Chaffer |
>> Hazazel Pym | Kuldrah Montrose |
>> Gilvar Gook | Irsai Frisby |
>> Vistarl Unsworth | Gleft Bellenden |
>> Alanik Boffey | Lurash Berwick |
>> Harsinna Poxon | Gwith Lyle |
>> Torsk Rapkins | Ibekon Girdler |
>
>> [!infobox]
>> # Dwarven Names
>> Male | Female |
>> :-:|:-:|
>> Fundi Battlehammer | Brokkrun Holderhek |
>> Bornnir Strakeln | Durnlif Fire-forge |
>> Ormor Ungart | Droma Trollbleeder |
>> Gormi Holderhek | Sturla Aranore |
>> Sturi Bofdarm | Fromhild Thrahak |
>> Thrur Loderr | Fromdis Lutgehr |
>> Gromnir Trueanvil | Thronis Morigak |
>> Thori Daraln | Throrris Caebrek |
>> Horndin Durthane | Durnis Balderk |
>> Thruli Deepdelver | Hordrun Trueanvil |
>
>> [!infobox]
>> # Wood-elf Names
>> Male | Female |
>> :-:|:-:|
>> Lirellas Argentaamn | Garamriel Olortynnal |
>> Melevrior Alavara | Farevril Miritar |
>> Areldel Aeravansel | Irthalmir Ongluth |
>> Estandan Silverspear | Erasel Gildenguard |
>> Meramion Ellarian | Imevwen Braegen |
>> Rilillad Ulongyr | Calamrien Irian |
>> Rimthonrior Chaadren | Clarelian Brightwing |
>> Rimildel Iazymnal | Meresriel Amrallatha |
>> Anilorn Miritar | Caririen Eroth |
>> Meralras Silveroak | Gilirel Reithel |
>
>> [!infobox]
>> # High-elf Names
>> Male | Female |
>> :-:|:-:|
>> Aelilad Floshin | Sindeliel Aluianti |
>> Aeladfal Moonglamaer | Feanalwen Echorn |
>> Thaelthalfal Trueshot | Aeradian Dree |
>> Sindesdir Irithyl | Therebroël Shadowmantle |
>> Seldanlin Spellstalker | Berineth Erladden |
>> Faerevad Maerdrym | Feaneviel Ildacer |
>> Caeladnar Alastrarra | Berenmir Moonsnow |
>> Aeththalfal Ni’Tessine | Beraliel Mrhulaedir |
>> Lithinrior Dawnhorn | Findeseth Presrae |
>> Aelalion Swordstar | Ithedloth Irithyl |
>
>> [!infobox]
>> # Half-elf Names
>> Male | Female |
>> :-:|:-:|
>> khol find |  undefinedoh skukurgraays |
>> kih frujayi | touh yolmrumuht |
>> zaltal drahin | thustrol wronnind |
>> bostralvil skond | kralmuath keegwer |
>> zrardrosrac oheaw | ci frol |
>> rutteldic solguriw | throlyede heshuw |
>> sac uragnond | lu kriht |
>> puelaltoc nuht | vinothe nadoldiht |
>> vrec ziuneiknu | vreh storreriu |
>> cuk slos | ve jadeimail |


> [!column| 5 no-t]+
>> [!infobox]
>> # Halfling Name
>> Male | Female|
>> :-:|:-:|
>> Emmwise Tarr Serlwin | Hodina Brindley Erna |
>> Bandald Boffo | Almice Bandina Waddilove |
>> Ambwin Sefton Adrold Pochin | Mila Hama |
>> Boffo Frobert | Falcwisa Gumbold Blancina |
>> Tobald Sego | Tobia Fincham Bungia Borrett |
>> Markert Stubbins Tobo | Toba Boffwina |
>> Ailald Durlald | Milwisa Fidge Hascwisa Beedell |
>> Bardard Peay Serlo Cullimore | Bungily Wydia |
>> Hasco Hasco | Hodice Gamia |
>> Samwise Erdwise Higman | Wiga Ferdia |
>
>> [!infobox]
>> # Gnome Name
>> Male | Female|
>> :-:|:-:|
>> Fromo Muir Gormard | Bura Nesbit Sturla |
>> Thoro Stornold | Throina Nora |
>> Durmard Balios Dormo | Naa Dorma |
>> Horno Dromald | Skandia Dalwina |
>> Gordo Dromold | Stromina Spenlove Fulda Fairbairn |
>> Gundo Sturo | Stornwina Christison Dala Laughlin |
>> Stromard Frorard | Gradina Spenlove Burlwina |
>> Brodard Grado Ferrier | Thundia Dalice Cushny |
>> Gradwin Brimwise Herdman | Nora Kerr Thundwisa |
>> Thrurold Durmo | Gondia Dromwina Kirk |
>
>> [!infobox]
>> # Half-Orc Names
>> Male | Female|
>> :-:|:-:|
>> Brozhg Mulki | Nocorli Vem |
>> Gozhg Holgrigi | Railni Kun |
>> Zudrorv Gich | Rzorga Ronrali |
>> Bask Koghoch | Nolosh Waz |
>> Hroghox Shargod | Aynith Azrumki |
>> Thich Buzkingu | Ovan Mudroshky |
>> Calkrevok Oskuzkoshky | Druljku Thoxnu |
>> Drus Juboch | Waghah Ber |
>> Baindrel Binda | Wovrobe Buburku |
>> Buuzvot Irshu | Rergath Hiz |























