---
obsidianUIMode: preview
promptType: NPC Generator
npc_generator: This is going well
location_generator: This is crazy
---
**Select Prompt**: `INPUT[inlineSelect(option(NPC Generator),option(Location Generator),option(Quest Generator),option(Faction Generator)):promptType]`

> [!info]- Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().promptType.toLowerCase().replaceAll(' ','_')})`

> [!info]- Options
> ```dataviewjs
> dv.current()[`${this.current().promptType.toLowerCase().replaceAll(' ','_')}_options`] = {}
> ```

```dataviewjs
dv.paragraph(`\`\`\`\n${this.current()[this.current().promptType.toLowerCase().replaceAll(' ','_')]}\n\`\`\``)
```