---
image: z_Assets/Locations/Maps/Castle Ravenloft Courtyard.webp
defaultZoom: -1
minZoom: -2.5
maxZoom: 1.5
unit: ft
---

> [!infobox|right]
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> **Default Zoom:**
> `INPUT[number:defaultZoom]`
> **Min Zoom:**
> `INPUT[number:minZoom]`
> **Max Zoom:**
> `INPUT[number:maxZoom]`
> **Unit:**
> `INPUT[text:unit]`

```dataviewjs
await dv.view('leafletConfig', {current:dv.current()})
```