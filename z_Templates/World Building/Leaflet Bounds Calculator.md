---
image: z_Assets/Barovia.jpg
distance_measure: 69
units: 0.25
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

```dataviewjs
const measure = dv.current().distance_measure,
units = dv.current().units,
img = document.querySelector(".mb-image-suggest-image"),
height = Math.round(((img.naturalHeight/(measure/units)) * 100) / 100),
width = Math.round(((img.naturalWidth/(measure/units)) * 100) / 100)

dv.paragraph(`bounds: [[0,0], [${height},${width}`)
dv.paragraph(`lat: ${height/2}`)
dv.paragraph(`long: ${width/2}`)
```


<iframe src="https://docs.google.com/spreadsheets/d/1hK02vNriPsrQUSYIpVw9nCFQPhibD0IGNdPDosubu34/edit?usp=sharing" width=1000 height=500></iframe>

