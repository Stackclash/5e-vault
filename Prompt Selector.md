---
obsidianUIMode: preview
promptType: Quest Generator
options:
  - name
  - location
npc_generator: |-
  This is going well

  Hello
location_generator: This is crazy
npc_generator_options:
  location: true
  name: true
name_option: Test
location_option: "[[4. World Almanac/Settlements/Thornmere.md|Thornmere]]"
location_generator_options:
  name: true
  location: true
---
**Select Prompt**: `INPUT[inlineSelect(option(NPC Generator),option(Location Generator),option(Quest Generator),option(Faction Generator)):promptType]`

> [!info]- Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().promptType.toLowerCase().replaceAll(' ','_')})`

> [!info]- Options
> ```dataviewjs
> const templateOptionsKey = `${this.current().promptType.toLowerCase().replaceAll(' ','_')}_options`
> const options = dv.current().options
> for (const opt of options) {
>   dv.paragraph(`**${opt.charAt(0).toUpperCase() + opt.slice(1)}**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.${opt}]\``)
> }
> ```

```dataviewjs
const options = this.current()[`${this.current().promptType.toLowerCase().replaceAll(' ','_')}_options`]
if (options && 'name' in options && options.name) {
  dv.paragraph(`**Name**: \`INPUT[text:name_option]\``)
}
if (options && 'location' in options && options.location) {
  dv.paragraph(`**Location**: \`INPUT[suggester(optionQuery(#location)):location_option]\``)
}
```

```dataviewjs
dv.paragraph(`\`\`\`\n${this.current()[this.current().promptType.toLowerCase().replaceAll(' ','_')] || ''}\n\`\`\``)
```

```dataviewjs
const test = app.plugins.getPlugin("dataview")
console.log(test)
```