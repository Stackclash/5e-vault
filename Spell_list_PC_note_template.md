---
spells:
  slots:
    first: 1
    second: 2
    third: 0
    fourth: 0
    fifth: 0
    sixth: 0
    seventh: 0
    eighth: 0
    nineth: 0
  knownSpells:
    "": false
  preppedSpells:
    "": false
showSpellList: false
---
> [!hint | clean no-i]+ Spells
> Show all Spells: `INPUT[toggle:showSpellList]`,  Spellcasting Class: `INPUT[inlineSelect(option(Artificer), option(Barbarian), option(Bard), option(Cleric), option(Druid), option(Fighter), option(Monk), option(Paladin), option(Ranger), option(Rogue), option(Sorcerer), option(Warlock), option(Wizard)):SpellcasterClass]`
>> [!column| 3 clean no-t]
>>> [!hint | clean]+ Cantrips
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Known", "Cantrip"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 0 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "Cantrip"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 0 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-red]+ 1<sup>st</sup> level spells (`VIEW[{spells.slots.first}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.first]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "1st level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 1 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "1st level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 1 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-blue]+ 2<sup>nd</sup> level spells (`VIEW[{spells.slots.second}]`/1)  `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.second]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "2nd level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 2 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "2nd level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 2 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-yellow]+ 3<sup>rd</sup> level spells (`VIEW[{spells.slots.third}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.third]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "3rd level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 3 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "3rd level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 3 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-green]+ 4<sup>th</sup> level spells (`VIEW[{spells.slots.fourth}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.fourth]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "4th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 4 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "4th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 4 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-pink]+ 5<sup>th</sup> level spells (`VIEW[{spells.slots.fifth}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.fifth]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "5th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 5 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "5th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 5 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-orange]+ 6<sup>th</sup> level spells (`VIEW[{spells.slots.sixth}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.sixth]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "6th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 6 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "6th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 6 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-gray]+ 7<sup>th</sup> level spells (`VIEW[{spells.slots.seventh}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.seventh]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "7th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 7 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "7th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 7 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-brown]+ 8<sup>th</sup> level spells (`VIEW[{spells.slots.eighth}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.eighth]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "8th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 8 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "8th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 8 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
>>> [!hint | bg-c-purple]+ 9<sup>th</sup> level spells (`VIEW[{spells.slots.nineth}]`/1) `INPUT[slider(minValue(0), maxValue(1), addLabels):spells.slots.nineth]`
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "9th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 9 && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "9th level"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == 9 && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
