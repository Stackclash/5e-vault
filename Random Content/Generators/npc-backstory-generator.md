---
type: random-generator
id: npc-backstory-generator
title: NPC Backstory Generator

generator-type: composite
output-type: text

status: active
description: Generates a quick NPC backstory.

steps:
  - key: origin
    label: Origin
    category: story-elements
    path:
      - backstory
      - origin
    filters:
      usage: npc-backstory
    count: 1

  - key: hardship
    label: Hardship
    category: story-elements
    path:
      - backstory
      - hardship
    filters:
      usage: npc-backstory
    count: 1

template: |
  **Origin:** {{origin}}
  **Hardship:** {{hardship}}

---

# NPC Backstory Generator

## Purpose
Quickly generates a small NPC backstory for minor characters.

## Example Output
**Origin:** Raised in a frontier settlement constantly threatened by monsters.  
**Hardship:** Betrayed by someone they once trusted.