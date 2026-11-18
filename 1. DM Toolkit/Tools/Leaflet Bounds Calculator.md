---
obsidianUIMode: preview
default_zoom: -2
min_zoom: -2
max_zoom: -1
unit: ft
unit_count: 656.168
zoom_delta: 0.5
id: CastleRavenloft
image: z_Assets/Locations/bruokdon.png
---

> [!infobox|right]
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> **ID:**
> `INPUT[text:id]`
> **Default Zoom:**
> `INPUT[number:default_zoom]`
> **Min Zoom:**
> `INPUT[number:min_zoom]`
> **Max Zoom:**
> `INPUT[number:max_zoom]`
> **Zoom Delta**
> `INPUT[number:zoom_delta]`
> **Unit:**
> `INPUT[text:unit]`
> **Unit Count:**
> `INPUT[number:unit_count]`

```dataviewjs
await dv.view('utils/leafletConfig', {current:dv.current()})
```