```datacoretsx
const {DatacoreTable} = await dc.require("z_Scripts/Datacore/FilterTable.tsx")


return function View() {
    return (
        <DatacoreTable 
            query="@page and #spell" 
            filterKeys={['level']} 
        />
    )
}
```
