---
image: z_Assets/Barovia.jpg
distance_measure: 69
units: 0.25
---


```meta-bind
INPUT[imageSuggester(optionQuery("z_Assets")):image]
```

```dataviewjs
const measure = dv.current().distance_measure
const units = dv.current().units
const img = document.querySelector(".mb-image-suggest-image")
dv.paragraph(`Bounds: [[0,0], [${img.naturalHeight/()}${img.naturalWidth}`)
dv.paragraph(`Height: ${img.naturalHeight}`)
```


<iframe src="https://docs.google.com/spreadsheets/d/1hK02vNriPsrQUSYIpVw9nCFQPhibD0IGNdPDosubu34/edit?usp=sharing" width=1000 height=500></iframe>

