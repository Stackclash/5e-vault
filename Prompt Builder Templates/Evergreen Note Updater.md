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
- Only suggest a new subsection if the existing structure truly does not have a good place for the new material.
- Keep the writing concise, practical, and consistent with the note’s role as a broad DM doctrine note.

You may:
- rephrase candidate ideas into cleaner evergreen-note wording
- merge similar candidates together
- recommend small revisions to existing wording when a candidate is better treated as a refinement
- note where content overlaps with existing material

You may not:
- add outside advice
- expand beyond the provided candidates
- create new evergreen topic notes
- generate unnecessary text just to make the note feel fuller

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

### [Target Section Name]
- Update Type: [Add / Revise / Merge]
- Proposed Text:
[write the exact text to add, or the exact revised version of the text that should replace/reshape existing content]

- Reason:
[brief explanation of why this update belongs in this section and how it uses the candidate material]

- Source References:
[source note name, heading, block reference, or other source link if available]

(repeat only as needed)

## Duplication Check
- [Identify any candidate that overlaps with existing note content and should be merged rather than added separately.]
- [If there is no meaningful duplication, write: "No major duplication detected."]

## Structural Notes
- [Optional: suggest a new subsection name only if necessary.]
- [If no structural change is needed, write: "No structural changes needed."]

Additional rules for output:
- Keep updates targeted rather than rewriting large portions of the note.
- Prefer integrating ideas into existing sections over creating new sections.
- If several candidates belong together, combine them into one coherent proposed update.
- Proposed Text should be ready to paste into the evergreen note with minimal editing.