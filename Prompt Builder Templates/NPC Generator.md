---
fields:
  location:
    type: suggester
    label: Location
    query: '@page and path("4. World Almanac/Settlements")'
    required: true

  race:
    type: select
    label: Race
    options:
      - Human
      - Elf
      - Dwarf
    required: true

  occupation:
    type: text
    label: Occupation

  include_secrets:
    type: toggle
    label: Include Secrets

context:
  location_summary:
    type: note_field
    source: location
    field: population
---

You are generating a Dungeons & Dragons NPC.

Location: {{location}}
Location Population: {{location_population}}

Create an NPC appropriate for this location.

Return YAML frontmatter with:
race: {{race}}
gender:
age:
alignment:
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
{{#if include_secrets}}secrets:{{/if}}