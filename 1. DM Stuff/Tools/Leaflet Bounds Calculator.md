---
image: z_Assets/Vallaki.jpg
distance_measure: 30
units: 5
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

**Width of Unit:** `INPUT[number:distance_measure]`
**Distance of Unit:** `INPUT[number:units]`
**Actual Units Distance**

```dataviewjs
const measure = dv.current().distance_measure,
units = dv.current().units,
img = document.querySelector(".mb-image-card-image"),
height = parseFloat(img.naturalHeight/(measure/units)).toFixed(2),
width = parseFloat(img.naturalWidth/(measure/units)).toFixed(2)

dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```
