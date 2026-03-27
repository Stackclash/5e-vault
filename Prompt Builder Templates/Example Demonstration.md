---
fields:
  npc_name:
    type: text
    label: NPC Name
    required: true
    placeholder: Enter a name

  concept:
    type: textarea
    label: Core Concept
    required: true
    placeholder: Short idea for the NPC

  race:
    type: select
    label: Race
    required: true
    options:
      - Human
      - Elf
      - Dwarf
      - Halfling
      - Tiefling
      - Dragonborn

  alignment:
    type: select
    label: Alignment
    options:
      - Lawful Good
      - Neutral Good
      - Chaotic Good
      - Lawful Neutral
      - True Neutral
      - Chaotic Neutral
      - Lawful Evil
      - Neutral Evil
      - Chaotic Evil

  home_settlement:
    type: select
    label: Home Settlement
    required: true
    query: '@page and path("4. World Almanac/Settlements")'

  current_location:
    type: suggester
    label: Current Location
    query: '@page and path("4. World Almanac")'
    required: false
    placeholder: Search for a note

  faction:
    type: suggester
    label: Faction
    query: '@page and path("3. Organizations")'
    required: false

  occupation:
    type: text
    label: Occupation

  physical_description:
    type: textarea
    label: Physical Description
    placeholder: Optional appearance notes

  include_secret:
    type: toggle
    label: Include Secret

  include_plot_hook:
    type: toggle
    label: Include Plot Hook

context:
  campaign_tone:
    type: static
    value: Gothic fantasy with tragedy, mystery, and moral tension

  settlement_name:
    type: derived
    source: home_settlement
    transform: note_title

  settlement_summary:
    type: note_field
    source: home_settlement
    field: summary

  location_name:
    type: derived
    source: current_location
    transform: note_title

  faction_name:
    type: derived
    source: faction
    transform: note_title

  all_settlements:
    type: datacore_query
    query: '@page and path("4. World Almanac/Settlements")'
    format: list_names

  important_people:
    type: datacore_query
    query: '@page and path("3. People")'
    format: bullet_list
---

You are helping a Dungeon Master create a believable Dungeons & Dragons NPC for an ongoing campaign.

Campaign tone:
{{campaign_tone}}

NPC input:
- Name: {{npc_name}}
- Concept: {{concept}}
- Race: {{race}}
- Alignment: {{alignment}}
- Occupation: {{occupation}}

Home settlement:
- Note: {{home_settlement}}
- Settlement name: {{settlement_name}}
- Settlement summary: {{settlement_summary}}

{{#if current_location}}Current location:
- Note: {{current_location}}
- Location name: {{location_name}}
{{/if}}

{{#if faction}}Faction:
- Note: {{faction}}
- Faction name: {{faction_name}}
{{/if}}

{{#if physical_description}}Existing appearance guidance:
{{physical_description}}
{{/if}}

Broader world context:
- Known settlements: {{all_settlements}}

Important people in the world:
{{important_people}}

Create an NPC that fits naturally into this setting and campaign.

Return YAML frontmatter with:
name: {{npc_name}}
race: {{race}}
gender:
age:
alignment: {{alignment}}
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
{{#if include_plot_hook}}plot hook:{{/if}}