---
obsidianUIMode: preview
promptType: NPC Generator
npc_generator: Hello
location_generator: This is crazy
---
**Select Prompt**: `INPUT[inlineSelect(option(NPC Generator),option(Location Generator),option(Quest Generator),option(Faction Generator)):promptType]`

> [!info]- Prompt Template
> `$= await dv.view('utils/metaBindInput', {type: 'textArea', field: this.current().promptType.toLowerCase().replaceAll(' ','_')})`