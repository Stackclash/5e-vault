---
image: z_Assets/Amber Temple 1.webp
distance_measure: 69
units: 10
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

**Width of Unit:** `INPUT[number:distance_measure]`
**Distance of Unit:** `INPUT[number:units]`

```dataviewjs
const measure = dv.current().distance_measure,
units = dv.current().units,
img = document.querySelector(".mb-image-card-image"),
height = parseFloat(img.naturalHeight/(measure/units)).toFixed(2),
width = parseFloat(img.naturalWidth/(measure/units)).toFixed(2)
console.log(img.naturalHeight)

dv.paragraph(`bounds: [\\[0,0], [${height},${width}\\]]`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```
