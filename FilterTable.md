```datacoretsx
const DataCoreTable = await dc.require(dc.headerLink("z_Scripts/Datacore/FilterTable.tsx", "FilterTable"))
console.log(DataCoreTable)

<DataCoreTable 
  query="notes where tags includes 'monster'" 
  filterKeys={['level', 'tags', 'stats.hp']} 
/>
```
