# Getting Started

## What Is This Vault?

This is a fully featured [Obsidian](https://obsidian.md/) vault designed for planning and running Dungeons & Dragons 5th Edition campaigns. It combines a rich set of community plugins, custom scripts, and templates into a cohesive campaign management system.

## Vault Structure

The vault is organized into numbered top-level folders that separate concerns:

| Folder | Purpose |
|--------|---------|
| `1. DM Toolkit/` | Dungeon Master tools, calculators, configuration, and session management |
| `2. Scratch Notes/` | Working notes and drafts |
| `3. The Party/` | Party dashboards and player character sheets |
| `4. World Almanac/` | World building — locations, NPCs, regions, settlements |
| `5. Mechanics/` | D&D 5e rules compendium — items, spells, bestiary, classes |
| `6. Resources/` | External references and imported resources |

Supporting folders prefixed with `z_` contain the automation layer:

| Folder | Purpose |
|--------|---------|
| `z_Assets/` | Images, maps, and music files |
| `z_Bases/` | Base templates used for bulk data imports |
| `z_Extra/` | Additional tools — AI prompts, battle simulations, tactics |
| `z_Scripts/` | Custom JavaScript automation scripts |
| `z_Templates/` | Templater plugin templates for creating new notes |

Other root-level files:

| File | Purpose |
|------|---------|
| `README.md` | Main repository documentation |
| `Prompt Builder.md` | AI prompt template interface with variable interpolation |
| `weather.json` | Pre-generated weather data produced by the weather generator |
| `compose.yml` | Docker Compose config for AI services (Ollama, Open-WebUI, LightRAG) |
| `package.json` | Node.js dependencies for standalone scripts |

## Configuration

The vault is centrally configured through **`1. DM Toolkit/Configuration.md`**. This file contains YAML frontmatter that controls:

- **Active world, party, and campaign** references
- **File location mappings** for all vault categories (session preps, journals, NPCs, shops, etc.)
- **Relationship definitions** for bidirectional NPC relationships
- **Shop type and size configuration** for procedural shop inventory generation
- **Item pricing rules** with rarity-based base prices and modifiers

See the [Configuration Reference](tools/configuration.md) for full details.

## Prerequisites

To use this vault you need:

1. **[Obsidian](https://obsidian.md/)** — the knowledge base application
2. **Community plugins** — the vault relies on 38 community plugins (see [Plugins](plugins/index.md))
3. **Node.js** (optional) — required only for running standalone CLI scripts like the weather generator

Install Node.js dependencies (for standalone scripts):

```bash
npm install
```

## Docker Services (Optional)

The vault includes a `compose.yml` for running AI-powered services locally:

- **Ollama** — local LLM backend (port `11434`)
- **Open-WebUI** — web interface for Ollama (port `8282`)
- **LightRAG** — Retrieval-Augmented Generation service (port `9621`)

Start the services with:

```bash
docker compose up -d
```

These services integrate with the Text Generator plugin inside Obsidian.
