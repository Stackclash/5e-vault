---
type: random-generator
id: forest-scene-generator
title: Forest Scene Generator

generator-type: composite
output-type: scene

status: active

steps:
  - key: visual
    label: Visual Detail
    category: landscape-elements
    path:
      - forest
      - visual
    filters:
      environment: forest
    count: 1

template: |
  {{visual}}

---

# Forest Scene Generator

## Purpose
Generate quick forest scene descriptions for travel or exploration.