---
obsidianUIMode: preview
active:
  Midnight Covenant: true
completed:
  Midnight Covenant: false
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: >-
  Hunt Stage 3. [[Professor Gousse Windcaller]] has the Well of Many Worlds and
  a principle for using it: the Well can only be opened onto a plane that
  shares a real elemental or environmental resonance with wherever it's
  opened from on the Material Plane. Reaching the Great Library — which holds
  records Eldoria's own archives can no longer keep, including whatever the
  Silent Ascendency is racing to erase there first — means finding three such
  resonant sites and crossing the Plane of Water, the Feywild, and Limbo in
  turn before the final crossing into the Library itself.

  Unresolved from the Curse of Strahd arc: [[Baba Lysaga (COS)|Baba Lysaga]]
  has not forgiven the party for Strahd's death or the theft of her hut's
  animating gem, and has bought herself a way to intercept them mid-journey.
steps:
  - text: >-
      Gousse briefs the party on the Well's resonance principle and the route:
      Plane of Water, then the Feywild, then Limbo, then the Great Library.
npcs:
  - name: "[[Professor Gousse Windcaller]]"
    description: Guides the party through the Well of Many Worlds' resonance principle and the planned route.
  - name: "[[Baba Lysaga (COS)]]"
    description: Ambushes the party in the Feywild, disguised as a fey bargain-broker, in revenge for Strahd's death.
  - name: "[[Mab]]"
    description: Ruler of the Gloaming Court; arrives once Lysaga flees to collect on the bargain that made the ambush possible.
tags:
  - quest
---
> [!infobox|n-th]
> | | |
> |---|---|
> | **Completed:** | `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['completed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |
> | **Active** | `$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['active', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |
# **`=this.file.name`**

## Player Summary
> [!div|no-t clean]
> `INPUT[textArea:player_summary]`

## Description
`INPUT[textArea:description]`

## Quest Hooks
- Gousse needs records the Great Library holds to understand Vecna's Metaphysical Truth and what "becoming the Truth of Ending" actually requires.
- Baba Lysaga's unresolved vendetta from the Curse of Strahd arc.

## Related NPCs
```meta-bind-button
label: Add NPC
id: add-npc
style: primary
actions:
  - type: js
    file: z_Scripts/Meta Bind/addItem.js
    args:
      field: npcs
```
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const columns = [
    {
      id: 'NPC',
      width: '15%',
      value: ({i}) => `\`INPUT[suggester(optionQuery(#npc)):npcs[${i}].name]\``
    },
    {
      id: 'Description/Quest Hook',
      value: ({i}) => `\`INPUT[textArea:npcs[${i}].description]\``
    },
    {
      id: 'Delete',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: npcs\n      index: ${i}\n\`\`\``
    }
  ]

  return <dc.Table rows={currentPage.value('npcs').map((s,i) => ({...s, i}))} columns={columns}/>
}
```

## Quest Steps
```meta-bind-button
label: Add Step
id: add-step
style: primary
actions:
  - type: js
    file: z_Scripts/Meta Bind/addItem.js
    args:
      field: steps
```
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const columns = [
    {
      id: 'Complete',
      width: 'minimum',
      value: ({i}) => `\`$=await dv.view('utils/metaBindInput', {type: 'toggle', field: ['steps', ${i}, 'completed', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})\``
    },
    {
      id: 'Description',
      value: ({i}) => `\`INPUT[textArea:steps[${i}].text]\``
    },
    {
      id: 'Move Up',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: move-up\ntooltip: Move Up?\nid: move-up\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/moveUp.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
    },
    {
      id: 'Move Down',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: move-down\ntooltip: Move Down\nid: move-down\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/moveDown.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
    },
    {
      id: 'Delete',
      width: 'minimum',
      value: ({i}) => `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: steps\n      index: ${i}\n\`\`\``
    }
  ]

  return <dc.Table rows={currentPage.value('steps').map((s,i) => ({...s, i}))} columns={columns}/>
}
```
