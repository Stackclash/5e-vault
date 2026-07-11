# Tools

The vault includes several custom-built tools for automating D&D campaign management tasks.

## Built-in Tools

| Tool | Description | Documentation |
|------|-------------|---------------|
| [Weather Generation](weather-generation.md) | Procedural weather engine for the fantasy world | Generates realistic multi-day weather patterns |
| [Shop Inventory Generation](shop-inventory.md) | Procedural shop stock generator | Creates shop inventories based on type and size |
| [Configuration System](configuration.md) | Central vault configuration | Controls paths, relationships, pricing, and shop rules |

## DM Toolkit Tools

Located in `1. DM Toolkit/Tools/`:

| Tool | Description |
|------|-------------|
| **Critical Tables** | Comprehensive D&D 5e critical hit and failure tables |
| **Encounter Generator** | Random encounter creation tool |
| **NPC Generator** | NPC generation with AI-powered prompts |
| **Leaflet Bounds Calculator** | Calculates map boundary coordinates for Leaflet maps |
| **Story Engine** | Multi-file story generation system |

## DM Toolkit Calculators

Located in `1. DM Toolkit/Calculators/`:

Campaign, encounter, and session calculators powered by Dataview queries.

## Dataview-Powered Tools

These tools are implemented as Dataview views and render directly in notes:

| Tool | Script | Description |
|------|--------|-------------|
| **Encounter Benchmark** | `views/encounterBenchmark.js` | Calculates encounter difficulty based on party level and monster CR |
| **Travel Times** | `views/travelTimes.js` | Displays distance and travel time between locations |
| **Item Pricing** | `views/itemPrice.js` | Calculates magic item prices using the configured pricing system |
| **Party Location** | `views/partyLocation.js` | Tracks and displays the current party location |
| **Monster Harvester** | `views/monsterHarvesterTable.js` | Loot tables for monster part harvesting |
| **Editing Dashboard** | `views/editingView.js` | Identifies notes with missing or incomplete data |

## Prompt Builder

The **Prompt Builder** (`Prompt Builder.md`) is an AI prompt template system that uses variable interpolation to generate structured prompts for:

- NPC creation and backstories
- Campaign arc planning
- Villain design
- Location descriptions
- Quest hooks

Templates are stored in `Prompt Builder Templates/` and support customizable variables.
