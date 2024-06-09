---
obsidianUIMode: preview
date: 2024-05-26
summary: 
fc-date: 
timelines: 
aat-render-enabled: true
fc-category: Session
party: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]"
prep-notes: "[[1. DM Stuff/Session Prep/Curse of Strahd/2024-05-26.md|2024-05-26]]"
---
> [!infobox]
> ## Info
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):party]` |
> | **Session Date:** | `INPUT[datePicker:date]` |
> | **Prep Notes:** | `INPUT[suggester(optionQuery("1. DM Stuff/Session Prep")):prep-notes]` |
> ## Fantasy Dates
> | | |
> |---|---|
> | **Start Date:** | `INPUT[text:fc-date]`
> | **End Date:** | `INPUT[text:fc-end]` |
> | **Timelines:** | `INPUT[inlineList:timelines]` |
# `=this.file.name`
## Session Overview
`INPUT[textArea:summary]`

## Key Learnings
Description of any important information that the party learned.
Who Did They Meet?

## Items Of Importance
Description

## What Happened
- Survival Checks: 4, 17, 6; 12, 23, 17;
- [[Seluvis Felo'melorn]] Failures: 2
- [[Yevelda Ovak ]] Failures: 1
- 

```dataviewjs
await dv.view("generateMetaBindInput", {bindType: 'INPUT', type: 'suggester', key: 'prep-notes', options: {optionQuery: ['preps']}})
```
