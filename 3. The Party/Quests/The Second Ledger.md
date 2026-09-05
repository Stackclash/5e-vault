---
obsidianUIMode: preview
active:
  Midnight Covenant: true
completed:
  Midnight Covenant: false
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
description: >-
  Hunt Stage 1 (extension). With Marrow dead and the Bruokdon cell broken
  (S44), the Silent Ascendency network above the city is untouched and
  doesn't know it. Nobody up the chain ever dealt with Marrow directly —
  only with "Lord Velmont," whether worn or real. [[Lord Caldris Velmont]],
  freed and cured of the Feeblemind trap, has proposed simply resuming that
  identity: no disguise, just nerve and a cover story for the shipment the
  party already intercepted. His motive is revenge, not loyalty to the
  party — reliable for as long as it's aimed at the Ascendency.

  The play: walk into [[The Cinderworks]], a condemned charm-foundry outside
  Bruokdon the Ascendency uses as a consolidation depot, with the party
  posing as Velmont's escort. [[Hesper Crane]], the depot's quartermaster,
  has never met the real Velmont in person and is already rattled by the
  missing shipment — a second silence is what breaks her composure.

  What the party doesn't know: the smuggling ring was Velmont's own
  criminal enterprise long before the Ascendency ever touched it. He isn't
  reforming; he's settling a score, and if a quiet chance to reclaim the
  ring for himself appears once the Ascendency's grip is broken, he'll take
  it without announcing it.

  Beyond the Cinderworks, Crane's ledger names a contact in [[Duskferry]]
  by code name only — "the Tallyman." The real identity ([[Ostwin Reyes]],
  a senior Ferrymen's Guild clerk) and the honest ally hiding in plain
  sight (Guildmaster [[Anselm Corrow]], who has no idea his own clerk is
  compromised) are DM-only until the party actually pursues the lead.
  Beyond Duskferry, the pipeline's actual endpoint is [[Greyfen Hollow]] —
  a hidden marsh site where smuggled items become soul-vessels. Not for
  this session's reveal; a future thread once the Duskferry lead is
  followed.
steps:
  - text: >-
      Velmont proposes the plan: resume being "Lord Velmont" to the wider
      network, with the party as his escort, to find out where the
      Ascendency's shipments actually go.
npcs:
  - name: "[[Lord Caldris Velmont]]"
    description: Proposes and leads the ruse. Genuinely wants the Ascendency hurt; not above quietly serving himself if the chance costs him nothing.
  - name: "[[Hesper Crane]]"
    description: The Cinderworks' quartermaster. Never met the real Velmont in person, tests via password if suspicious, breaks if the ruse fails twice.
  - name: "[[Ostwin Reyes]]"
    description: The Duskferry lead named in Crane's ledger, known to the party only by his code name "the Tallyman" until they earn the real identity. Not yet met.
  - name: "[[Anselm Corrow]]"
    description: Duskferry's Guildmaster — not part of the Ascendency, a potential honest ally if approached directly. Not yet met.
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
- Velmont wants revenge on the network that captured, replaced, and discarded him.
- The Ascendency's shipment network above Bruokdon is still untouched and still moving stolen magic items toward Vecna's ascension.

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
