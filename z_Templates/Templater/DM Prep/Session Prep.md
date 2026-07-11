<%*
let templateError = false
let formattedDate = ''
let selectedParty = null
let selectedCampaign = null
try {
  const init = tp.user.templateInit()
  const fields = tp.user.formFields()
  const { dataview, modalForm, config, path } = init.getPlugins(tp, ['preps', 'parties', 'campaigns'])

  const data = await init.openForm(modalForm, {
    title: "Session Prep Setup",
    name: "session-setup",
    fields: [
      fields.folderSelect(dataview, "party", "Party", config.locations.parties, "Campaign Party"),
      fields.date("Date", "Date of Session"),
    ],
    version: "1"
  })

  formattedDate = moment(data.date).format("YYYY-MM-DD")
  selectedParty = dataview.page(data.party)

  // Prep notes are organized by campaign. Resolve the campaign that owns the selected party.
  selectedCampaign = dataview.pages(`"${config.locations.campaigns}"`).find(c => c.party && c.party.path === selectedParty.file.path)
  if (!selectedCampaign) {
    throw new Error(`No campaign found whose party is ${selectedParty.file.name}`)
  }

  await tp.file.move(path.join(config.locations.preps, selectedCampaign.file.name, formattedDate), tp.file.find_tfile(tp.file.title))
} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
obsidianUIMode: preview
date: <% formattedDate || '' %>
tags:
  - session-prep
---
## Resources


## Details to Remember
```dataviewjs
await dv.view('views/listsGroupedByTag', {searchTag: '#session-journal', listTag: '#remember'})
```

## Strong Start
> [!prompt]
> *A compelling opening that immediately demands player action.*
> *Prompts:*
>
> * What happens in the first 5 minutes of play?
> * What problem is happening right now, not later?
> * Who is in immediate danger?
> * What decision must the players make immediately?
> * What sensory detail sets the tone? (sound, smell, chaos, weather)
> * How does this connect to last session’s events?
> * What interrupts normal expectations?
>
> ✅ Aim for: combat, discovery, confrontation, or urgent revelation.

## Scenes
> [!prompt]
> *Loose situations that may occur depending on player decisions — not scripted outcomes.*
> *Prompts:*
>
> * What scenes are likely if players pursue their current goals?
> * Which factions or enemies react to the party’s actions?
> * What happens if the players do nothing?
> * Which scene escalates tension or danger?
> * Which scene reveals new information?
> * What flexible scene can occur anywhere if pacing slows?
> * What scene advances a character’s personal story?
>
> ✅ Prepare situations, not sequences.

## Secrets and Clues
> [!prompt]
> *Prepare revelations players may discover — not how they discover them.*
> *Prompts:*
>
> * What truths exist behind current events?
> * Who is secretly responsible for what’s happening?
> * What important fact is widely misunderstood?
> * What clue foreshadows future danger?
> * What connects seemingly unrelated events?
> * What piece of history matters right now?
> * What information would change player decisions?
> * What secret ties directly to a character or faction?
>
> ✅ Prepare ~10 secrets usable in any scene.

## Fantastic Locations
> [!prompt]
> *Memorable environments that feel magical, dangerous, or unique.*
> *Prompts:*
>
> * What makes this location visually distinct?
> * What environmental feature affects gameplay?
> * What signs of history or past events are visible here?
> * What danger exists beyond monsters?
> * What can players interact with or manipulate?
> * What makes this place impossible or fantastical?
> * How might this location change over time?
>
> ✅ Include at least one detail players will remember months later.

## Important NPCs
> [!prompt]
> *Characters with goals and agency, not exposition delivery systems.*
> *Prompts:*
>
> * What does this NPC want right now?
> * What action will they take if ignored?
> * What secret are they hiding?
> * How do they feel about the party?
> * What leverage, power, or resources do they possess?
> * What makes them instantly recognizable?
> * What do they fear or seek to avoid?
>
> ✅ Define: Goal • Personality • Secret • Mannerism.

## Potential Monsters
> [!prompt]
> *Opposition driven by motives and environment.*
> *Prompts:*
>
> * Why are these creatures here?
> * What are they trying to accomplish?
> * How do they use the environment to their advantage?
> * What makes this encounter different from a simple fight?
> * Can this encounter be avoided, negotiated, or redirected?
> * What happens if the monsters succeed?
> * How does this encounter reinforce the session’s theme?
>
> ✅ Think in roles: patrol, ambush, defense, ritual, hunt.

## Potential Treasure
> [!prompt]
> *Rewards that matter to the story and characters.*
> *Prompts:*
>
> * What treasure tells a story?
> * What reward advances a character’s goals?
> * What item introduces new choices or problems?
> * What treasure reveals lore or history?
> * Who previously owned this reward?
> * Who might want it back?
> * What meaningful non-gold reward exists here?
>
> ✅ Consider information, favors, allies, titles, or strange magic.
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>