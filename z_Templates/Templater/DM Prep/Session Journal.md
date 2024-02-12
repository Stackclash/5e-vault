<%*
await tp.file.move('3. The Party/Session Journals/' + tp.file.title)
let date = await tp.system.prompt("What date is this session supposed to happen? (MM-DD-YYYY)")
-%>
---
obsidianUIMode: preview
date: <% moment(date, "MM-DD-YYYY").format() %>
summary:
fc-date:
timelines:
aat-render-enabled: true
fc-category: Session
party:
prep-notes:
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery("3. The Party/Session Prep")):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]`
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
# `=this.file.name`
## Characters 

## Session Overview
Brief session overview.

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happe
Small description.
