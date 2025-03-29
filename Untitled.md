```dataviewjs
const {getActiveParty, getActiveWorld, getFileLocations} = await self.require.import('z_Scripts/Common/getConfig.ts')
const activeParty = getActiveParty()
const activeWorld = getActiveWorld()
const fileLocations = getFileLocations()
console.log(activeParty, activeWorld, fileLocations)
```
