---
promptId: NPC
name: Generate NPC (Structured)
description: Generate NPC details that fit the existing NPC template structure.
temperature: 0.8
max_tokens: 1200
---

{{#script}}

return {
  location: 'Bruokdon',
  role: 'Shop Keeper',
  campaignContext: 'This campaign is about hunting down and stopping Vecna.'
};

{{/script}}
***
You are assisting a Dungeon Master designing NPCs for a long-term Dungeons & Dragons campaign.

Use the campaign context if provided.

CAMPAIGN CONTEXT
{{campaignContext}}

NPC LOCATION
{{location}}

NPC ROLE
{{role}}

Generate a compelling NPC.

Return the result **in this exact structure**.

pronounced:
race:
gender:
age:
alignment:
occupation:
groups:
religions:

personality:
ideal:
bond:
flaw:

goals:
likes:
dislikes:

history:
hiddenDetails:

Make personality and goals story-driven.

***

This is the output:
{{output}}