---
template_definitions:
  gender:
    type: select
    options:
      - male
      - female
  alignment:
    type: select
    options:
      - Lawful Good
      - Neutral Good
      - Chaotic Good
      - Lawful Neutral
      - Neutral
      - Chaotic Neutral
      - Lawful Evil
      - Neutral Evil
      - Chaotic Evil
---
You are generating a Dungeons & Dragons non-player character.

Create a believable NPC that fits naturally into a fantasy world. The NPC should feel like a real person with motivations, flaws, and secrets.

Return ONLY valid YAML frontmatter with the exact fields listed below.

Guidelines:
- Keep descriptions vivid but concise.
- Personality traits should be expressed as a short paragraph.
- History should explain how the NPC became who they are.
- Secrets should be something the NPC actively hides.
- Goals should be something they are currently pursuing.

The YAML keys must match exactly.

race: {{race}}
gender: {{gender}}
age: {{age}}
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
secrets: