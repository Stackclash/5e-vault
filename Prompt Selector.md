---
obsidianUIMode: preview
promptType: NPC Generator
npc_generator: |-
  This is going well

  Hello
location_generator: This is crazy
npc_generator_options:
  location: true
  name: true
name_option: Test
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
---
**Select Prompt**: `INPUT[inlineSelect(option(NPC Generator),option(Location Generator),option(Quest Generator),option(Faction Generator)):promptType]`

> [!info]- Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().promptType.toLowerCase().replaceAll(' ','_')})`

> [!info]- Options
> ```dataviewjs
> const templateOptionsKey = `${this.current().promptType.toLowerCase().replaceAll(' ','_')}_options`
> dv.paragraph(`**Name**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.name]\``)
> dv.paragraph(`**Location**:\t\`INPUT[toggle(defaultValue(false)):${templateOptionsKey}.location]\``)
> ```

```dataviewjs
const options = this.current()[`${this.current().promptType.toLowerCase().replaceAll(' ','_')}_options`]
if (options.name) {
  dv.paragraph(`**Name**: \`INPUT[text:name_option]\``)
}
if (options.location) {
  dv.paragraph(`**Location**: \`INPUT[suggester(optionQuery(#location)):location]\``)
}
```

```dataviewjs
dv.paragraph(`\`\`\`\n${this.current()[this.current().promptType.toLowerCase().replaceAll(' ','_')]}\n\`\`\``)
```