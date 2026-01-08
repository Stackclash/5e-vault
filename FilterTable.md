```datacoretsx
const { DataCoreTable } = await dc.require("z_Scripts/Datacore/FilterTable.tsx")

<DataCoreTable 
  query="notes where tags includes 'monster'" 
  filterKeys=${['level', 'tags', 'stats.hp']} 
/>
```
