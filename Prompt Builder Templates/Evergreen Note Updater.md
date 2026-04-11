---
fields:
  current_note:
    type: suggester
    label: Note to Summarize
    query: '@page and path("1. DM Toolkit/Knowledge/Sources")'
    required: true
  current_evernote:
    type: suggester
    label: Evergreen Note to Update
    query: '@page and path("1. DM Toolkit/Knowledge/Info")'
    required: true
  update_candidates_for_note:
    type: textarea
    label: Candidates for updates
context:
  target_note_name:
    type: derived
    source: current_evernote
    transform: note_title
  current_evergreen_note:
    type: note_content
    source: current_evernote
  source_highlights:
    type: note_content
    source: current_note
---
You are helping maintain a broad evergreen Dungeon Mastering topic note in Obsidian.

Your task is to create a reviewable update for the target evergreen note using only the provided update candidates and source material.

Your job is to integrate new information into the existing evergreen note without bloating, duplicating, or narrowing the note unnecessarily.

Important constraints:
- Use only the update candidates and source material provided.
- Do not introduce outside DM advice, common best practices, or new ideas.
- Do not invent examples, principles, or conclusions not supported by the provided material.
- Do not rewrite the entire note unless absolutely necessary.
- Preserve the note’s broad scope and current structure.
- Avoid duplicating ideas that already exist in the note.
- Merge overlapping ideas into existing content when appropriate.
- Integrate new information into the most appropriate existing section whenever possible.
- Only suggest a new section or subsection if the existing structure truly does not have a good place for the new material.
- Keep the writing concise, practical, and consistent with the note’s role as a broad DM doctrine note.

Source reference requirements:
- Every factual addition or revision in Proposed Text must include one or more Obsidian footnote references.
- Before generating any new footnotes, inspect the Current evergreen note content and identify the highest existing footnote number already present anywhere in the note.
- Continue numbering from the next available number in the existing note.
- Do not restart numbering at `[^1]` unless the current note contains no footnotes.
- Use inline footnote markers with the correct continued numbering based on the current note.
- After all proposed updates, include a `## Footnotes` section containing only the new footnote definitions referenced in this response.
- Each footnote definition must use this exact format:
  `[^N]: [[<wikilink to source>#^<blocklink to highlight in source>]]`
- Do not redefine any footnote number that already exists in the current note.
- If multiple statements in the same paragraph come from the same source highlight, you may reuse the same footnote.
- If a statement is supported by multiple source highlights, you may include multiple footnotes inline.
- Do not invent source links or block IDs. Use only the exact source wikilinks and block links provided in the update candidates or source material.
- If a candidate does not include a usable source wikilink and block reference, do not cite it with a fabricated footnote. Instead, exclude that unsupported portion from Proposed Text and mention the issue in the Reason or Duplication Check section.

Placement requirements:
- Every proposed update must include a clear `Placement` field.
- If updating an existing section, specify the exact heading where the text should be inserted or revised.
- If proposing a new section or subsection, specify exactly where it should go relative to the existing headings in the current note.
- Be explicit and concrete.
- Good examples:
  - `Placement: Insert into existing section "Combat Encounter Design" after the paragraph beginning "High-level encounters..."`
  - `Placement: Add as a new subsection under "Combat Encounters", after "Encounter Objectives" and before "Common Problems"`
  - `Placement: Add as a new top-level section after "Preparing Main Beats"`

Integration requirements:
- Prefer integrating ideas into existing sections over creating new sections.
- If several candidates belong together, combine them into one coherent proposed update.
- If a candidate overlaps heavily with existing note content, prefer a Revise or Merge update instead of Add.
- Proposed Text should be ready to paste into the evergreen note with minimal editing.
- Keep updates targeted rather than rewriting large portions of the note.

You may:
- rephrase candidate ideas into cleaner evergreen-note wording
- merge similar candidates together
- recommend small revisions to existing wording when a candidate is better treated as a refinement
- note where content overlaps with existing material
- create concise new sections or subsections only when genuinely necessary

You may not:
- add outside advice
- expand beyond the provided candidates
- create new evergreen topic notes
- generate unnecessary text just to make the note feel fuller
- fabricate citations, wikilinks, or block IDs

Target evergreen note:
{{target_note_name}}

Current evergreen note content:
{{current_evergreen_note}}

Structured update candidates for this note:
{{update_candidates_for_note}}

Relevant source highlights and notes:
{{source_highlights}}

Return your response in the following format:

## Proposed Updates

### Update 1
- Target Section: [existing heading or new heading]
- Placement: [exact insertion location relative to the current note]
- Update Type: [Add / Revise / Merge]
- Proposed Text:
[write the exact text to add, or the exact revised version of the text that should replace or reshape existing content; include inline Obsidian footnote references using the correct continued numbering from the current note]

- Reason:
[brief explanation of why this update belongs here, how it uses the candidate material, and whether it is being added, merged, or used to refine existing text]

- Source References:
  - [[<wikilink to source>#^<blocklink to highlight in source>]]
  - [[<wikilink to source>#^<blocklink to highlight in source>]]

### Update 2
- Target Section: [existing heading or new heading]
- Placement: [exact insertion location relative to the current note]
- Update Type: [Add / Revise / Merge]
- Proposed Text:
[exact text with correct continued footnote numbering]

- Reason:
[brief explanation]

- Source References:
  - [[<wikilink to source>#^<blocklink to highlight in source>]]

(repeat only as needed)

## Duplication Check
- [Identify any candidate that overlaps with existing note content and should be merged rather than added separately.]
- [Identify any candidate that could not be fully used because of missing or incomplete source references.]
- [If there is no meaningful duplication, write: "No major duplication detected."]

## Structural Notes
- [State whether any new section or subsection is needed, and exactly where it should be inserted.]
- [If no structural change is needed, write: "No structural changes needed."]

## Footnote Continuation Check
- Highest existing footnote in current note: [^X] or [none]
- New footnotes in this response begin at: [^Y]

## Footnotes
[^Y]: [[<wikilink to source>#^<blocklink to highlight in source>]]
[^Y+1]: [[<wikilink to source>#^<blocklink to highlight in source>]]

Final rules:
- Continue footnote numbering from the current note instead of restarting.
- Include only new footnotes introduced by this response in the `## Footnotes` section.
- Do not emit placeholder numbering that conflicts with the current note.
- Every factual statement in Proposed Text must be traceable through footnotes.
- Do not place footnotes in the Reason section unless absolutely necessary.
- Prefer fewer, stronger updates over many thin updates.
- If no valid update can be made without unsupported expansion or fabricated citations, say so clearly instead of forcing an update.