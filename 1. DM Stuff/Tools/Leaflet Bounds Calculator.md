---
image: z_Assets/Locations/Maps/Castle Ravenloft Courtyard.webp
---

> [!infobox|right]
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```

```dataviewjs
await dv.view('leafletGenerator', {current:dv.current()})
```