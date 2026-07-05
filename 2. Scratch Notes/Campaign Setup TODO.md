---
obsidianUIMode: preview
created: 2026-07-05
tags:
  - todo
---
# Campaign Setup To-Do

Setup and cleanup checklist for the [[The Hunt for Vecna|Hunt for Vecna]] campaign. Excludes NPC/location fixes — those are tracked in the [[Configuration]] "Fix Notes" tables.

## 1. Agents — finish and commit
- [ ] Commit the four new agents (`dm-assistant`, `encounter-builder`, `story-creator`, `world-builder`) and the removal of the old `encounter-creator` / `lore-keeper`.
- [ ] Commit the merged `CLAUDE.md` (campaign config + agent team) and the deleted `CAMPAIGN.md`.
- [ ] Smoke-test each agent on a small real task, confirming they resolve [[Configuration]] → active campaign/party correctly.
- [ ] Verify agent tool scopes match how you work (e.g., `dm-assistant` can delegate to the other three).

## 2. Campaign bible — fill the TODOs
- [ ] Vecna's plan, step 2+ (the chain currently stops at step 1).
- [ ] [[Roark Battleborn]] tie-in — the only PC with no thread written.
- [ ] Barovia ↔ Vecna throughline — confirm how *Curse of Strahd* connects to the ascension endgame.
- [ ] Confirm the premise paragraph reads the way you intend.
- [ ] Revisit Lines & Veils with the table so it's a shared agreement.

## 3. Session journals — cleanup
- [ ] Title & fill the 9 placeholder journals still named "New Session Journal": **S33, S34, S35, S37, S38, S39, S40, S41, S42**. Each needs a real title, `summary`, `fc-end` date, and `locations`.
- [ ] Fix the broken prep link — placeholders point `prep-notes` at a deleted `Session Prep` note; repoint to the correct per-session prep in `1. DM Toolkit/Session Prep/Midnight Covenant/`.
- [ ] Run the [[Configuration]] "Fix Notes" audit and clear every journal flagged for missing title, summary, end date, or locations.
- [ ] Decide whether **S36 "The Big City"** is complete.

## 4. Quests & continuity
- [ ] Create quest notes for the active threads in the bible (Order of the Silver Dragon, Underdark/Eilistraee, Wisp's master, Fortunes of Ravenloft) so they appear in the [[Midnight Covenant]] quest tracker. Currently only [[The Ones Who Were Forgotten]] exists.
- [ ] Confirm each quest's `active`/`completed` flags are set for [[Midnight Covenant]].

## 5. Roster & config housekeeping
- [ ] Confirm [[Marin]] and [[Seluvis Felo'melorn]] should stay `active: false`.
- [ ] Verify [[Configuration]] still points at the right active campaign/world/party.
