```datacoretsx
const DataCoreTable = await dc.require(dc.headerLink("z_Scripts/Datacore/FilterTable.md", "FilterTable"))
console.log(DataCoreTable)

return function View() {
    return (
        <DataCoreTable 
            query="notes where tags includes 'monster'" 
            filterKeys={['level', 'tags', 'stats.hp']} 
        />
    )
}
```
