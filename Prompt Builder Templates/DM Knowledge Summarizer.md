---
fields:
  current_note:
    type: suggester
    label: Note to Summarize
    query: '@page and path("1. DM Toolkit/Knowledge/Sources")'
    required: true
context:
  evergreen_notes:
    type: datacore_query
    query: '@page and path("1. DM Toolkit/Knowledge/Info")'
    format: name_and_field
    field: summary
  current_highlights:
    type: note_content
    source: current_note
---
You are helping maintain my Dungeon Mastering second brain in Obsidian.

My vault contains a fixed set of broad evergreen topic notes that act as living manuals for major DMing topics.

Your job is to extract and organize useful Dungeon Mastering advice from the provided Readwise material, while staying strictly grounded in that material.

Your goals are to:
1. Summarize the useful practical DM advice found in the provided highlights and notes.
2. Identify the main ideas, techniques, and principles that are directly supported by the material.
3. Map each idea to one or more of my approved evergreen topic notes.
4. For each idea, suggest the best section within that evergreen note where the information belongs.
5. Produce structured update candidates that can be passed into a second prompt for evergreen note updating.

Important constraints:
- Use only the information contained in the provided highlights and notes.
- Do not introduce outside Dungeon Mastering advice, common best practices, or related ideas that are not clearly supported by the material.
- Do not invent examples, techniques, principles, conclusions, section content, or new evergreen topic notes.
- Do not expand a minor point into a broader rule unless the source clearly supports that conclusion.
- Be conservative and minimal. Extract only the useful ideas that are meaningfully present.
- If the source contains only a small amount of useful information, return only a small amount of output.
- Only include ideas with High or Medium support from the provided material.
- Exclude any idea that is only weakly implied.
- You must map ideas only to the approved evergreen topic notes listed below.
- Do not propose, invent, rename, or recommend new evergreen topic notes.
- If an idea is too narrow to stand alone, place it under the closest existing evergreen note and suggest a subsection or section name.

You may:
- paraphrase the source material
- combine overlapping highlights
- group related ideas together
- rewrite ideas into clearer and more concise wording
- map ideas to the most appropriate approved evergreen topic notes
- suggest a section name within an approved evergreen topic note

You may not:
- add new advice from general DM knowledge
- fill in missing steps with outside assumptions
- generate extra content just because it would be helpful
- create, suggest, rename, or reorganize evergreen topic notes

Support rating rules:
- High = directly stated in the highlights or notes
- Medium = clearly supported by multiple parts of the material
- Low = only loosely implied

Only return ideas rated High or Medium.

Approved evergreen topic notes:
{{evergreen_notes}}

Return your response in the following format:

## Concise Summary
[A short summary of the useful Dungeon Mastering advice found in the material.]

## Update Candidates

### Candidate 1
- Target Note: [approved evergreen note name]
- Target Section: [section or subsection name]
- Idea: [concise extracted idea]
- Support: [High or Medium]
- Source Basis: [brief explanation of what in the highlights/notes supports it]
- Source References: [source note name, heading, block reference, or other source link if available]
- Update Intent: [Add / Revise / Merge]
- Suggested Update Summary: [short summary of what should be added or changed]

### Candidate 2
- Target Note: ...
- Target Section: ...
- Idea: ...
- Support: ...
- Source Basis: ...
- Source References: ...
- Update Intent: ...
- Suggested Update Summary: ...

(repeat only as needed)

Additional rules for output:
- Do not include any idea unless it clearly belongs under one of the approved evergreen notes.
- Do not create a “new evergreen note” section.
- Keep the output concise and useful.
- Do not repeat the same idea in multiple candidates unless the overlap is truly necessary.
- When possible, prefer fewer, stronger ideas over many weak ones.
- Each candidate should contain only one idea.
- Keep Suggested Update Summary brief and focused on integration into the target note.

Here are the Readwise highlights and notes to process:
{{current_highlights}}