---
template_definitions:
  race:
    type: select
    options:
      - Human
      - Elf
      - Dwarf
      - Halfling
      - Tiefling

  gender:
    type: select
    options:
      - Male
      - Female
      - Nonbinary

  occupation:
    type: text

  location:
    type: suggester
    query: '@page and path("4. World Almanac/Settlements")'

  include_secret:
    type: toggle
    label: Include Secret

context_definitions:
  location_summary:
    type: note_field
    source_token: location
    field: summary

  nearby_npcs:
    type: datacore_query
    query: '@page and path("4. World Almanac/NPCs")'
    format: list_names

output:
  mode: yaml
---

You are generating a Dungeons & Dragons NPC.

Use the following inputs and context.

Location: {{location}}
Location Summary: {{location_summary}}
Nearby NPCs: {{nearby_npcs}}

Generate frontmatter for this NPC.

race: {{race}}
gender: {{gender}}
occupation: {{occupation}}
physical description:
history:
personality:
ideal:
bond:
flaw:
likes:
dislikes:
goals:
{{#if include_secret}}secrets:{{/if}}