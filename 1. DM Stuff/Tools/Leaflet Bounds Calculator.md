---
obsidianUIMode: preview
image: z_Assets/Locations/Maps/Caste Ravenloft Main Floor.webp
defaultZoom: -1
minZoom: -2.5
maxZoom: 1.5
unit: ft
unitCount: 10
zoomDelta: 0.5
id: CastleRavenloft
---

> [!infobox|right]
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> **ID:**
> `INPUT[text:id]`
> **Default Zoom:**
> `INPUT[number:defaultZoom]`
> **Min Zoom:**
> `INPUT[number:minZoom]`
> **Max Zoom:**
> `INPUT[number:maxZoom]`
> **Zoom Delta**
> `INPUT[number:zoomDelta]`
> **Unit:**
> `INPUT[text:unit]`
> **Unit Count:**
> `INPUT[number:unitCount]`

```dataviewjs
await dv.view('leafletConfig', {current:dv.current()})
```