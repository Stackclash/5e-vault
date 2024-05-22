---
title: Untitled
aliases:
  - 
category: person
type: PC
tags:
  - PC
player_name: 
race:
  name: Elf
  subRace: undefined
  traits:
    - 
totalLevel: 0
class1:
  name: Rogue
  subClass: ­Swashbuckler
  level: ­6
  features:
    - 
feats:
  - 
background: 
languages:
  - 
weapons:
  - 
Armor:
  - 
Tools:
  - 
resistances: 
guildGroups: 
occupation: Adventurer
fc-calendar: Chip of the old block
fc-category: PC Birthday
fc-display-name: Untitled's Birthday
fc-date:
  day: 
  month: 
year: 
birthday: -30
age: 1001
hp: 45
tempHP: 0
ac: 16
gender: 1
prof: 1
abilityScores:
  str: 8
  dex: 19
  con: 14
  int: 10
  wis: 12
  cha: 14
globalMod:
  savingThrow: 0
  skillCheck: 0
  AC: 0
passive:
  perception: 5
  investigation: 5
  insight: 5
height: 5'4
weight: 
sca_temp: 0
sca: '[MB_EXPRESSION] "failed to evaluate expression" caused by error "Undefined symbol False"'
gender_name: Female
alive: true
day_suffix: th
portrait: "![[Untitled.png]]"
modifier: 0
active: ❌
JoaT: false
spells:
  slots1: 1
  slots2: 1
  slots3: 1
  slots4: 1
  slots5: 1
  slots6: 1
  slots7: 1
  slots8: 1
  slots9: 1
---

`VIEW[round(floor(({totalLevel}+7)/4),0)][math(hidden):prof]`

# Untitled <span style="float:right">Active: `INPUT[inlineSelect(option(❌), option(✅)):active]`</span>

**`VIEW[{title}]`** `VIEW[{alive} ? "is" : "was"]` a `VIEW[{age}]` year old `VIEW[{gender} == 1 ? "Male" : {gender} == 2 ? "Non-binary": "Female"][:gender_name]` `VIEW[\[\[{race.name}\]\]][text(renderMarkdown)]`.

## Character sheet

> [!div | grid 3 no-t clean] 
>> [!infobox | wfull]
>> # Ability Scores
>> ||
>> :---:|:---:|:---:|:---:|
>> STR | `INPUT[number(class(nb-mb-css)):abilityScores.str]` | INT | `INPUT[number(class(nb-mb-css)):abilityScores.int]` |
>> DEX | `INPUT[number(class(nb-mb-css)):abilityScores.dex]` | WIS | `INPUT[number(class(nb-mb-css)):abilityScores.wis]` |
>> CON | `INPUT[number(class(nb-mb-css)):abilityScores.con]` | CHA | `INPUT[number(class(nb-mb-css)):abilityScores.cha]` |
>> # Saving Throws `VIEW[{globalMod.savingThrow}<0 ? "(-" : {globalMod.savingThrow}>0 ? "(+" : ""]`­`VIEW[{globalMod.savingThrow} == 0 ? "" : abs({globalMod.savingThrow})]`­`VIEW[{globalMod.savingThrow}==0 ? "" : ")"]` <span style="float:right"> `BUTTON[increment-ST, decrement-ST]` </span>
>> Stat | Prof | \# | Stat | Prof |\# |
>> :---:|:---:|:---:|:---:|:---:|:---:|
>> STR | `INPUT[toggle:savingThrows.str]` | `VIEW[round(floor(({abilityScores.str}-10)/2),0)+{prof}*{savingThrows.str}+{globalMod.savingThrow}]` | INT | `INPUT[toggle:savingThrows.int]` | `VIEW[round(floor(({abilityScores.int}-10)/2),0)+{prof}*{savingThrows.int}+{globalMod.savingThrow}]`| 
>> DEX | `INPUT[toggle:savingThrows.dex]` | `VIEW[round(floor(({abilityScores.dex}-10)/2),0)+{prof}*{savingThrows.dex}+{globalMod.savingThrow}]` | WIS | `INPUT[toggle:savingThrows.wis]` | `VIEW[round(floor(({abilityScores.wis}-10)/2),0)+{prof}*{savingThrows.wis}+{globalMod.savingThrow}]`| 
>> CON | `INPUT[toggle:savingThrows.con]` | `VIEW[round(floor(({abilityScores.con}-10)/2),0)+{prof}*{savingThrows.con}+{globalMod.savingThrow}]` | CHA | `INPUT[toggle:savingThrows.cha]` | `VIEW[round(floor(({abilityScores.cha}-10)/2),0)+{prof}*{savingThrows.cha}+{globalMod.savingThrow}]`| 
>> # Spellcasting  `INPUT[inlineSelect(option(0, -), option(1, INT), option(2, WIS), option(3, CHA)):sca_temp]` `VIEW[{sca_temp} == 0 ? False : ({sca_temp} == 1 ? {abilityScores.int} : ({sca_temp} == 2 ? {abilityScores.wis} : {abilityScores.cha}))][math(hidden):sca]`
>> ||
>> :---:|:---:|
>> Spell Save DC | Spell Atk. Mod. |
>> `VIEW[{sca_temp} == 0 ? "None" : 8+{prof}+round(floor(({sca}-10)/2),0)]` |  `VIEW[{sca_temp} == 0 ? "None" : {prof}+round(floor(({sca}-10)/2),0)]`|
>> # Racial Traits
>> | |
>> -|-|
>> Race | `VIEW[{race.subRace}]` `VIEW[{race.name}][link]` |
>> Racial Traits | <font color='#BB0000' size='3'>⬥</font> `=replace(join(link(this.race.traits), ","),",","<BR><font color='#BB0000' size='3'>⬥</font> ")` |
>
>> [!infobox | wfull]
>> # Passive Skills
>> Passive<BR/>Perc | Passive<BR/>Inv | Passive<BR/>Ins |
>> :---:|:---:|:---:|
>> `VIEW[10+({skills.perception} ? {prof}*(1+{expertise.perception}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}][:passive.perception]` | `VIEW[10+({skills.investigation} ? {prof}*(1+{expertise.investigation}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}][:passive.investigation]` | `VIEW[10+({skills.insight} ? {prof}*(1+{expertise.insight}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}][:passive.insight]` |
>> # Skills `VIEW[{globalMod.skillCheck}<0 ? "(-" : {globalMod.skillCheck}>0 ? "(+" : ""]`­`VIEW[{globalMod.skillCheck} == 0 ? "" : abs({globalMod.skillCheck})]`­`VIEW[{globalMod.skillCheck}==0 ? "" : ")"]` <span style="float:right"> `BUTTON[increment-SC, decrement-SC]` </span>
>> ||
>> :---:|:---:|:---:|:---:|:---:|:---:|
>> Acr `INPUT[toggle(class(star)):expertise.acrobatics]` | `INPUT[toggle:skills.acrobatics]` | `VIEW[({skills.acrobatics} ? {prof}*(1+{expertise.acrobatics}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.dex}-10)/2),0)+{globalMod.skillCheck}]` | Med `INPUT[toggle(class(star)):expertise.medicine]` | `INPUT[toggle:skills.medicine]` | `VIEW[({skills.medicine} ? {prof}*(1+{expertise.medicine}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}]` | 
>> Ani  `INPUT[toggle(class(star)):expertise.animalHandling]` | `INPUT[toggle:skills.animalHandling]` | `VIEW[({skills.animalHandling} ? {prof}*(1+{expertise.animalHandling}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}]` | Nat `INPUT[toggle(class(star)):expertise.nature]` |`INPUT[toggle:skills.nature]` | `VIEW[({skills.nature} ? {prof}*(1+{expertise.nature}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}]` | 
>> Arc `INPUT[toggle(class(star)):expertise.arcana]` | `INPUT[toggle:skills.arcana]` | `VIEW[({skills.arcana} ? {prof}*(1+{expertise.arcana}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}]` | Perc `INPUT[toggle(class(star)):expertise.perception]` | `INPUT[toggle:skills.perception]` | `VIEW[({skills.perception} ? {prof}*(1+{expertise.perception}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}]` | 
>> Ath `INPUT[toggle(class(star)):expertise.athletics]` | `INPUT[toggle:skills.athletics]` | `VIEW[({skills.athletics} ? {prof}*(1+{expertise.athletics}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.str}-10)/2),0)+{globalMod.skillCheck}]` | Perf `INPUT[toggle(class(star)):expertise.performance]` | `INPUT[toggle:skills.performance]` | `VIEW[({skills.performance} ? {prof}*(1+{expertise.performance}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.cha}-10)/2),0)+{globalMod.skillCheck}]` |
>> Dec `INPUT[toggle(class(star)):expertise.deception]` | `INPUT[toggle:skills.deception]` | `VIEW[({skills.deception} ? {prof}*(1+{expertise.deception}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.cha}-10)/2),0)+{globalMod.skillCheck}]` | Pers `INPUT[toggle(class(star)):expertise.persuasion]` | `INPUT[toggle:skills.persuasion]` | `VIEW[({skills.persuasion} ? {prof}*(1+{expertise.persuasion}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.cha}-10)/2),0)+{globalMod.skillCheck}]` |
>> His `INPUT[toggle(class(star)):expertise.history]` | `INPUT[toggle:skills.history]` | `VIEW[({skills.history} ? {prof}*(1+{expertise.history}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}]` | Rel `INPUT[toggle(class(star)):expertise.religion]` | `INPUT[toggle:skills.religion]` | `VIEW[({skills.religion} ? {prof}*(1+{expertise.religion}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}]` |
>> Ins `INPUT[toggle(class(star)):expertise.insight]` | `INPUT[toggle:skills.insight]` | `VIEW[({skills.insight} ? {prof}*(1+{expertise.insight}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}]` | SoH `INPUT[toggle(class(star)):expertise.sleightOfHand]` | `INPUT[toggle:skills.sleightOfHand]` | `VIEW[({skills.sleightOfHand} ? {prof}*(1+{expertise.sleightOfHand}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.dex}-10)/2),0)+{globalMod.skillCheck}]` |
>> Int `INPUT[toggle(class(star)):expertise.intimidation]` | `INPUT[toggle:skills.intimidation]` | `VIEW[({skills.intimidation} ? {prof}*(1+{expertise.intimidation}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.cha}-10)/2),0)+{globalMod.skillCheck}]` | Ste `INPUT[toggle(class(star)):expertise.stealth]` | `INPUT[toggle:skills.stealth]` | `VIEW[({skills.stealth} ? {prof}*(1+{expertise.stealth}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.dex}-10)/2),0)+{globalMod.skillCheck}]` |
>> Inv `INPUT[toggle(class(star)):expertise.investigation]` | `INPUT[toggle:skills.investigation]` | `VIEW[({skills.investigation} ? {prof}*(1+{expertise.investigation}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.int}-10)/2),0)+{globalMod.skillCheck}]` | Sur `INPUT[toggle(class(star)):expertise.survival]` | `INPUT[toggle:skills.survival]` | `VIEW[({skills.survival} ? {prof}*(1+{expertise.survival}) : {JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.wis}-10)/2),0)+{globalMod.skillCheck}]` |
>>
>>> [! | bg-orange color-black]- **Settings**
>>> * Jack of all Trades? <span style="float:right">`INPUT[toggle:JoaT]`</span>
>
>> [!infobox |wfull]
>> # Classes (Total level: `VIEW[{class1.level}+{class2.level}][:totalLevel]`)
>>> [!div | grid 1 no-t clean]
>>>> [!metadata | wfull bg-c-orange] ### `VIEW[{class1.subClass}][link]` `VIEW[{class1.name}][link]`
>>>>  **<center><font color="#000000">Class level:`INPUT[inlineSelect(option(1), option(2), option(3), option(4), option(5), option(6), option(7), option(8), option(9), option(10), option(11), option(12), option(13), option(14), option(15), option(16), option(17), option(18), option(19), option(20)):class1.level]` </font></center>**
>>>>  
>>>> <font color='#BB0000' size='3'>⬥</font> `=replace(join(link(this.class1.features), ","),",","<BR><font color='#BB0000' size='3'>⬥</font> ")`
>>>
>>
>> # Other Features
>>> [!metadata | bg-orange color-black no-t]
>> ­<font color='#BB0000' size='3'>⬥</font> `=replace(join(link(this.feats), ","),",","<BR><font color='#BB0000' size='3'>⬥</font> ")` 

<br>

> [!div | grid clean no-t]
>> [!infobox | wfull] 
>> # Combat Stats
>> ||
>> ---|---|
>> Hit Points | `INPUT[number(class(nb-mb-45)):hp]`|
>> Temp HP | `INPUT[number(class(nb-mb-45)):tempHP]`
>> Hit dice | `VIEW[{class1.level}]`d`$=dv.page(dv.current().class1.name).hitdie`
>> Initiative | `VIEW[({JoaT} ? floor({prof}/2) : 0)+round(floor(({abilityScores.dex}-10)/2),0)+{globalMod.skillCheck}][:modifier]` |
>> AC `VIEW[{globalMod.AC}<0 ? "(-" : {globalMod.AC}>0 ? "(+" : ""]`­`VIEW[{globalMod.AC} == 0 ? "" : abs({globalMod.AC})]`­`VIEW[{globalMod.AC}==0 ? "" : ")"]` <span style="float:right">`BUTTON[increment-AC, decrement-AC]` </span>| `VIEW[10+round(floor(({abilityScores.dex}-10)/2),0)+{globalMod.AC}][math():ac]`|
>> Resistances | `=replace(join(this.resistances, ","),",","<BR>")` |
>
>> [!infobox | wfull]
>> # Other proficiencies 
>> ||
>> ---|---|
>> [[Languages]] | `=replace(join(this.languages, ","),",","<BR>")` |
>> [[Weapons]]| `=replace(join(this.weapons, ","),",","<BR>")` |
>> [[Armor]] | `=replace(join(this.armor, ","),",","<BR>")` |
>> [[Tools]] | `=replace(join(link(this.tools), ","),",","<BR>")` |
>
>> [! infobox | wfull]
>> # Birthday
>> Day | Month | Year | 
>> :---:|:---:|:---:|
>> `INPUT[inlineSelect(option(1), option(2), option(3), option(4), option(5), option(6), option(7), option(8), option(9), option(10), option(11), option(12), option(13), option(14), option(15), option(16), option(17), option(18), option(19), option(20), option(21), option(22), option(23), option(24), option(25), option(26), option(27), option(28), option(29), option(30)):fc-date.day]` | `INPUT[inlineSelect(option(1, Alturiak),option(2, Ches), option(3, Tarsakh), option(4, Mirtul), option(5, Kythorn), option(6, Flamerule), option(7, Eleasias), option(8, Eleint), option(9, Marpenoth), option(10, Uktar), option(11, Nightal), option(12, Hammer)):fc-date.month]` | `INPUT[number(class(nb-mb-55)):year]` `VIEW[{World Overview#dpy}*{year}+{World Overview#dpm}*({fc-date.month}-1)+{fc-date.day}][math(hidden):birthday]`|
>> # Personal Details
>> ||
>> ---|---|
>> Status | `INPUT[toggle():alive]` `VIEW[{alive} ? "Alive" : "Dead"]` |
>> Height | `INPUT[number(class(nb-mb-55)):height]` m **\|** `VIEW[floor({height}*3.281)]`' `VIEW[round(12*({height}*3.281-floor({height}*3.281)),0)]`'' 
>> Weight| `INPUT[number(class(nb-mb-55)):weight]` kg **\|** `VIEW[round(2.205*{weight},0)]` lbs
>> Background | `VIEW[{background}][link]`
>> `VIEW[{gender} == 1 ? "Male" : ({gender} == 2 ? "Non-Binary": "Female")]`| `INPUT[slider(minValue(1), maxValue(3)):gender]`  

<br>

> [!hint | clean no-i]+ Spells
>> [!column| 3 clean no-t]
>>> [!hint | clean]+ Cantrips
>>> - [ ] 
>>
>>> [!hint | bg-c-red]+ 1<sup>st</sup> level spells (`VIEW[{spells.slots1}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots1]`
>>> - [ ] 
>>
>>> [!hint | bg-c-blue]+ 2<sup>nd</sup> level spells (`VIEW[{spells.slots2}]`/1)  `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots2]`
>>> - [ ] 
>>
>>> [!hint | bg-c-yellow]+ 3<sup>rd</sup> level spells (`VIEW[{spells.slots3}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots3]`
>>> - [ ] 
>>
>>> [!hint | bg-c-green]+ 4<sup>th</sup> level spells (`VIEW[{spells.slots4}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots4]`
>>> - [ ] 
>>
>>> [!hint | bg-c-pink]+ 5<sup>th</sup> level spells (`VIEW[{spells.slots5}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots5]`
>>> - [ ] 
>>
>>> [!hint | bg-c-orange]+ 6<sup>th</sup> level spells (`VIEW[{spells.slots6}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots6]`
>>> - [ ] 
>>
>>> [!hint | bg-c-gray]+ 7<sup>th</sup> level spells (`VIEW[{spells.slots7}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots7]`
>>> - [ ] 
>>
>>> [!hint | bg-c-brown]+ 8<sup>th</sup> level spells (`VIEW[{spells.slots8}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots8]`
>>> - [ ] 
>>
>>> [!hint | bg-c-purple]+ 9<sup>th</sup> level spells (`VIEW[{spells.slots9}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots9]`
>>> - [ ] 
>>

## Appearance

> [!info | ws-med right clean no-i]+  ##### DM Scratch Notes
> ```meta-bind
> INPUT[editor():scratch_note]
> ```

> [!infobox | left clean collapse wmicro]
> # `VIEW[!\[\[Untitled.png\]\]][text(renderMarkdown):portrait]`
> # **[[Untitled.png | Untitled]]**

> [! | clean no-i]- Inventory
> ![[Untitled - Inventory| clean no-t]]

clothing, age, race, etc

## Background 

What have your character been up to up until this point?

## Talent
Stuff your character is good at/likes doing 

## Mannerism 
confident, shy, flamboyant, rude etc

## Interactions with others 
how do your character respond to other people, how does that change from certain types of people to others?

## Ideal 
What does your character strive after?

## Bond
what does your character care about, can be for example a family member, an organization, a value or similar

## Flaws & Secrets
What situations would be difficult for your character, what might put them in a dilemma?)



`VIEW[{fc-date.day} == 1 ? "st" : ({fc-date.day} == 21 ? "st" : ({fc-date.day} == 2 ? "nd" : ({fc-date.day} == 22 ? "nd" : ({fc-date.day} == 3 ? "rd" : ({fc-date.day} == 23 ? "rd" : "th")))))][math(hidden):day_suffix]`
`VIEW[floor(({Calendar#time}-{birthday})/{World Overview#dpy})][math(hidden):age]`

```meta-bind-button
label: "↑"
hidden: true
id: "increment-ST"
class: my-mb-button-up
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.savingThrow
    evaluate: true
    value: x + 1
```

```meta-bind-button
label: "↓"
hidden: true
id: "decrement-ST"
class: my-mb-button-down
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.savingThrow
    evaluate: true
    value: x - 1
```

```meta-bind-button
label: "↑"
hidden: true
id: "increment-SC"
class: my-mb-button-up
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.skillCheck
    evaluate: true
    value: x + 1
```

```meta-bind-button
label: "↓"
hidden: true
id: "decrement-SC"
class: my-mb-button-down
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.skillCheck
    evaluate: true
    value: x - 1
```

```meta-bind-button
label: "↑"
hidden: true
id: "increment-AC"
class: my-mb-button-up
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.AC
    evaluate: true
    value: x + 1
```

```meta-bind-button
label: "↓"
hidden: true
id: "decrement-AC"
class: my-mb-button-down
style: plain
actions:
  - type: updateMetadata
    bindTarget: globalMod.AC
    evaluate: true
    value: x - 1
```