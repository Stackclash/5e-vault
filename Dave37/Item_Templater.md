---
<%*
const hasTitle = !tp.file.title.startsWith("NewItem");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Item Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title; 
}
_%><%_*
const source_options = ["CoFS", "DMG", "DnDSpeak", "Dragon Magazine", "GSB", "Homebrew", "MM", "PHB", "TCE", "XGtE"];
const type_options = ["Adventuring Gear", "Airship", "Ammunition", "Artisan's Tool", "Book", "Explosive", "Firearm", "Food & Drink", "Gaming Set", "Generic Variant", "Heavy Armor", "Homebrew Item", "Illegal Drug", "Instrument", "Light Armor", "Medium Armor", "Melee Weapon", "Mount", "Other", "Potion", "Ranged Weapon", "Ring", "Rod", "Shield", "Ship", "Spaceship", "Spell Component", "Spell Scroll", "Spellcasting Focuse", "Stave", "Tack and Harnesse", "Tool", "Trade Good", "Treasure", "Trinket", "Unknown", "Vehicle", "Wand", "Wondrous Item"];
let source = await tp.system.suggester(
    (item) => 
        item, 
        source_options, 
        false, 
        "Choose source or cancel to type in something else:"
        ) ?? 
        await tp.system.prompt("Type in a source:") ?? 
        "Unknown";
let type = await tp.system.suggester(
    (item) => 
        item, 
        type_options, 
        false, 
        "Choose type or cancel to type in something else:"
        ) ?? 
        await tp.system.prompt("Type in a type:") ?? 
        "Unknown";
if (type_options.includes(type)) {
    await tp.file.move(type + "s/" + title)
};
const attunementResponse = await tp.system.prompt("Attunement? (Y/N)");
const attunement = attunementResponse.toLowerCase();
console.log(attunement);
_%>name: <% title %>
source: <% source %>
category: item
type: <% type %>
value: 0
weight: 0
magic: false
consumable: false
description: ""<% (attunement.includes('y')) ? "\nreqAttune:" : "" %>
---

# <% title %>
*`VIEW[{type}]` <% (attunement.includes('y')) ? "(requires attunement `VIEW[{reqAttune} ? concat(' by a ', {reqAttune}) : '']`)" : "" %>*
Value: `=this.value` gp, Weight: `=this.weight` lbs

`=this.description`

**Source:** `=this.source`
