<%*
await tp.file.move('3. The Party/Session Logs/' + tp.file.title)
let date = await tp.system.prompt("What date is this session supposed to happen")
-%>
---
obsidianUIMode: preview
date: <% date %>
summary:
fc-date:
timelines:
aat-render-enabled: true
fc-category: Session
party:
---  
# `=this.file.name`
## Session Prep:
Things I need to get ready before the session:
- [ ] **Example 1**
      Description.
    - [ ] Sub-Point 1
- [ ] **Example 2**
      Description.
    - [ ] Sub-Point 2

## Plan
High story beats, main things I want to happen this session.
- [ ] Point 1
    - [ ] Sub Point 1
- [ ] Point 2
    - [ ] Sub Point 1

# Session
## Start
Intro, set the tone.

## Loot, Rewards & Purchases
Loot, rewards and purchases.
- [ ] Thing 1
- [ ] Thing 2

## Keep in Mind
Things to keep in mind during the session, from items to important details

## Events
What transpired over the course of the session? Update this during the session!

# Summary
## New NPCs
New NPC Met.
- Example 1
- Example 2

## New Locations
New Locations Discovered.
- Example 1
- Example 2

## End of Session Notes
Anything to take note of as the session has come to a close.