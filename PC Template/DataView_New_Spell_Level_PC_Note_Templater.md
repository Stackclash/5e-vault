<%_*
let color;
let level;
let slotString;
const options = ["Cantrip", "1st level", "2nd level", "3rd level", "4th level", "5th level", "6th level", "7th level", "8th level", "9th level"];
let LevelType = await tp.system.suggester(
    (item) => 
        item, 
        options, 
        false, 
        "What level do you want to insert?"
        );
if (LevelType == "Cantrip") {
    color = "clean"
    level = 0
    slotString = "Cantrips"
} else if (LevelType == "1st level") {
	color = "bg-c-red"
	level = 1
	slotString = "1<sup>st</sup> level spells (`VIEW[{spells.slots.first}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.first]`"
} else if (LevelType == "2nd level") {
	color = "bg-c-blue"
	level = 2
	slotString = "2<sup>nd</sup> level spells (`VIEW[{spells.slots.second}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.second]`"
} else if (LevelType == "3rd level") {
	color = "bg-c-yellow"
	level = 3
	slotString = "3<sup>rd</sup> level spells (`VIEW[{spells.slots.third}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.third]`"
} else if (LevelType == "4th level") {
	color = "bg-c-green"
	level = 4
	slotString = "4<sup>th</sup> level spells (`VIEW[{spells.slots.fourth}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.fourth]`"
} else if (LevelType == "5th level") {
	color = "bg-c-pink"
	level = 5
	slotString = "5<sup>th</sup> level spells (`VIEW[{spells.slots.fifth}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.fifth]`"
} else if (LevelType == "6th level") {
	color = "bg-c-orange"
	level = 6
	slotString = "6<sup>th</sup> level spells (`VIEW[{spells.slots.sixth}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.sixth]`"
} else if (LevelType == "7th level") {
	color = "bg-c-gray"
	level = 7
	slotString = "7<sup>th</sup> level spells (`VIEW[{spells.slots.seventh}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.seventh]`"
} else if (LevelType == "8th level") {
	color = "bg-c-brown"
	level = 8
	slotString = "8<sup>th</sup> level spells (`VIEW[{spells.slots.eighth}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.eighth]`"
} else {
	color = "bg-c-purple"
	level = 9
	slotString = "9<sup>th</sup> level spells (`VIEW[{spells.slots.nineth}]`/0) `INPUT[slider(minValue(0), maxValue(0), addLabels):spells.slots.nineth]`"
};
_%>
>>> [!hint | <% color %>] <% slotString %>
>>> ```dataviewjs
>>> const p = dv.pages(`"6. Mechanics/Magic/Spells"`)
>>> if(!dv.current()['showSpellList']) {
>>> 	dv.table( ["Prepped", "<% LevelType %>"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == <% level %> && f['spell_list']?.includes(dv.current()['SpellcasterClass']) && Object.keys(dv.current().spells['knownSpells']).includes(f.file.name.replace(/[\s']/g, "")) && dv.current().spells.knownSpells[f.file.name.replace(/[\s']/g, "")])
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.preppedSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> } else {
>>> 	dv.table( ["Known", "<% LevelType %>"],
>>> 	p
>>> 	.filter(f => f['category'] == "spell" && f['level'] == <% level %> && f['spell_list']?.includes(dv.current()['SpellcasterClass']))
>>> 	.sort(f => f.file.name, "asc")
>>> 	.map(f => [`\`INPUT[toggle:spells.knownSpells.${f.file.name.replace(/[\s']/g, "")}]\``, dv.fileLink(f.file.name, false, f.file.aliases[0])]))
>>> }
>>> ```
>>
