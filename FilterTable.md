```datacoretsx
const { FilterTable } = await dc.require("z_Scripts/Datacore/FilterTable.tsx")

return () => <FilterTable query={'@page and #spell'} filterKeys={['level']} />
```
